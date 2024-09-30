import type {Routes} from '@angular/router';

import Page from '.';
import {routes as children} from './examples/8';

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
