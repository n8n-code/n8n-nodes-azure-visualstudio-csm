import type { INodeProperties } from 'n8n-workflow';

export const operationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Operations"
					]
				}
			},
			"options": [
				{
					"name": "Operations List",
					"value": "Operations List",
					"action": "Operations_List",
					"description": "Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/microsoft.visualstudio/operations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/microsoft.visualstudio/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Operations"
					],
					"operation": [
						"Operations List"
					]
				}
			}
		},
];
