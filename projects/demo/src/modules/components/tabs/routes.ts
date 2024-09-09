import type {Routes} from '@angular/router';

import {routes as children} from './examples/8';
import Page from './index';

export default [
    {
        path: '',
        component: Page,
    },
    {
        path: 'API',
        component: Page,
    },
    {
        path: 'Setup',
        component: Page,
    },
    {
        path: 'Routing',
        loadComponent: async () => import('./examples/8'),
        children,
    },
] as Routes;
