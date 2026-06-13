import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { operationsDescription } from './resources/operations';

export class AzureVisualstudioCsm implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Visualstudio Csm',
                name: 'N8nDevAzureVisualstudioCsm',
                icon: { light: 'file:./azure-visualstudio-csm.png', dark: 'file:./azure-visualstudio-csm.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Manage VSTS resources via Azure Resource Manager using HTTP/1.1 APIs.',
                defaults: { name: 'Azure Visualstudio Csm' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureVisualstudioCsmApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Operations",
					"value": "Operations",
					"description": ""
				}
			],
			"default": ""
		},
		...operationsDescription
                ],
        };
}
