import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureVisualstudioCsmApi implements ICredentialType {
        name = 'N8nDevAzureVisualstudioCsmApi';

        displayName = 'Azure Visualstudio Csm API';

        icon: Icon = { light: 'file:../nodes/AzureVisualstudioCsm/azure-visualstudio-csm.png', dark: 'file:../nodes/AzureVisualstudioCsm/azure-visualstudio-csm.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Visualstudio Csm API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
