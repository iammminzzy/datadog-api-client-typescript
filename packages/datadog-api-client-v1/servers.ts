import { RequestContext, HttpMethod } from "./http/http";

export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}

/**
 *
 * Represents the configuration of a server including its
 * url template and variable configuration based on the url.
 *
 */
export class ServerConfiguration<T extends { [key: string]: string }> implements BaseServerConfiguration {
    public constructor(private url: string, private variableConfiguration: T) {}

    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */
    public setVariables(variableConfiguration: Partial<T>) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }

	public getConfiguration(): T {
		return this.variableConfiguration
	}

	private getUrl() {
		let replacedUrl = this.url;
		for (const key in this.variableConfiguration) {
			var re = new RegExp("{" + key + "}","g");
			replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
		}
		return replacedUrl
	}

	/**
	 * Creates a new request context for this server using the url with variables
	 * replaced with their respective values and the endpoint of the request appended.
	 *
	 * @param endpoint the endpoint to be queried on the server
	 * @param httpMethod httpMethod to be used
	 *
	 */	
	public makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext {
		return new RequestContext(this.getUrl() + endpoint, httpMethod);		
	}
}

export const server1 = new ServerConfiguration<{ 
	"site": "datadoghq.com" | "datadoghq.eu" | "ddog-gov.com",

	"subdomain": string
 }>("https://{subdomain}.{site}", { 
	"site": "datadoghq.com" ,
	"subdomain": "api" 
})
export const server2 = new ServerConfiguration<{ 
	"name": string,

	"protocol": string
 }>("{protocol}://{name}", { 
	"name": "api.datadoghq.com" ,
	"protocol": "https" 
})

export const servers = [server1, server2];

export const operationServers: { [endpoint: string]: BaseServerConfiguration[] } = {
	"AWSIntegrationApi.createAWSTagFilter": [
		new ServerConfiguration<{ 
			"site": "datadoghq.com",
		
			"subdomain": string
		 }>("https://{subdomain}.{site}", { 
			"site": "datadoghq.com" ,
			"subdomain": "api" 
		}),
		new ServerConfiguration<{ 
			"name": string,
		
			"protocol": string
		 }>("{protocol}://{name}", { 
			"name": "api.datadoghq.com" ,
			"protocol": "https" 
		}),
	],
	"AWSIntegrationApi.deleteAWSTagFilter": [
		new ServerConfiguration<{ 
			"site": "datadoghq.com",
		
			"subdomain": string
		 }>("https://{subdomain}.{site}", { 
			"site": "datadoghq.com" ,
			"subdomain": "api" 
		}),
		new ServerConfiguration<{ 
			"name": string,
		
			"protocol": string
		 }>("{protocol}://{name}", { 
			"name": "api.datadoghq.com" ,
			"protocol": "https" 
		}),
	],
	"AWSIntegrationApi.listAWSTagFilters": [
		new ServerConfiguration<{ 
			"site": "datadoghq.com",
		
			"subdomain": string
		 }>("https://{subdomain}.{site}", { 
			"site": "datadoghq.com" ,
			"subdomain": "api" 
		}),
		new ServerConfiguration<{ 
			"name": string,
		
			"protocol": string
		 }>("{protocol}://{name}", { 
			"name": "api.datadoghq.com" ,
			"protocol": "https" 
		}),
	],
	"IPRangesApi.getIPRanges": [
		new ServerConfiguration<{ 
			"site": "datadoghq.com" | "datadoghq.eu" | "ddog-gov.com",
		
			"subdomain": string
		 }>("https://{subdomain}.{site}", { 
			"site": "datadoghq.com" ,
			"subdomain": "ip-ranges" 
		}),
		new ServerConfiguration<{ 
			"name": string,
		
			"protocol": string
		 }>("{protocol}://{name}", { 
			"name": "ip-ranges.datadoghq.com" ,
			"protocol": "https" 
		}),
	],
}