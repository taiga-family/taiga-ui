import {tuiCreateToken} from '@taiga-ui/cdk';

export const SEARCH_CONFIG = tuiCreateToken({
    container: '#docsearch',
    appId: '9OC2BGR0BI',
    indexName: 'taiga-ui',
    // Public key
    apiKey: '954fc3fb1ed14929de8006f229f545a6',
});
