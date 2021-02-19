import { HttpLibrary } from "./http/http";
import { Middleware, PromiseMiddleware, PromiseMiddlewareWrapper } from "./middleware";
import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "./http/isomorphic-fetch";
import { BaseServerConfiguration, servers, operationServers } from "./servers";
import { configureAuthMethods, AuthMethods, AuthMethodsConfiguration } from "./auth/auth";

export interface Configuration {
    readonly baseServer?: BaseServerConfiguration;
    readonly serverIndex: number;
    readonly operationServerIndices: { [ name: string ]: number };
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
}


/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
     * Default server to use (takes preference over serverIndex and operationServerIndices)
     */
    baseServer?: BaseServerConfiguration;
    /**
     * Default index of a server to use from the predefined server list
     */
    serverIndex?: number;
    /**
     * Default index of a server to use for an operation from the predefined server operation map
     */
    operationServerIndices?: { [ name: string ]: number };
    /**
     * HTTP library to use e.g. IsomorphicFetch
     */
    httpApi?: HttpLibrary;
    /**
     * The middlewares which will be applied to requests and responses
     */
    middleware?: Middleware[];
    /**
     * Configures all middlewares using the promise api instead of observables (which Middleware uses)
     */
    promiseMiddleware?: PromiseMiddleware[];
    /**
     * Configuration for the available authentication methods
     */
    authMethods?: AuthMethodsConfiguration
}

/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: null
 *    - serverIndex: 0
 *    - operationServerIndices: {}
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
export function createConfiguration(conf: ConfigurationParameters = {}): Configuration {
    const configuration: Configuration = {
        baseServer: conf.baseServer,
        serverIndex: conf.serverIndex || 0,
        operationServerIndices: conf.operationServerIndices || {},
        httpApi: conf.httpApi || new DefaultHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: configureAuthMethods(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(
            m => configuration.middleware.push(new PromiseMiddlewareWrapper(m))
        );
    }
    return configuration;
}

export function getServer(conf: Configuration, endpoint: string): BaseServerConfiguration {
    if (conf.baseServer !== undefined) {
        return conf.baseServer;
    }
    let index = (endpoint in conf.operationServerIndices) ? conf.operationServerIndices[endpoint] : conf.serverIndex;
    return (endpoint in operationServers) ? operationServers[endpoint][index] : servers[index];
}