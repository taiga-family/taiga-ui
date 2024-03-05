import {Routes} from '@angular/router';
import {tuiGenerateDialogableRoute as tuiRouteDialog} from '@taiga-ui/kit';

export default [
    {
        path: '',
        loadComponent: async () => import('./examples/1'),
        children: [
            tuiRouteDialog(async () => import('./examples/1/dialog.component'), {
                path: 'path/to/dialog',
            }),
        ],
    },
    {
        path: 'Setup',
        loadComponent: async () => import('./examples/2'),
    },
] as Routes;
