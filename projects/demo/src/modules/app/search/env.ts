import {InjectionToken} from '@angular/core';

export const SEARCH_CONFIG = new InjectionToken('SEARCH_CONFIG', {
    factory: () => ({
        container: '#docsearch',
        appId: '9OC2BGR0BI',
        indexName: 'taiga-ui',
        // Public key
        apiKey: '954fc3fb1ed14929de8006f229f545a6',
    }),
});
