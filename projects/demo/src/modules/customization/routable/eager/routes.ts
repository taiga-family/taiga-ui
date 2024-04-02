import type {Routes} from '@angular/router';
import {tuiGenerateDialogableRoute as tuiRouteDialog} from '@taiga-ui/kit';

import {DialogComponent as Dialog} from './examples/1/dialog.component';
import {DialogComponent as DialogOutlet} from './examples/2/dialog.component';

export default [
    {
        path: '',
        loadComponent: async () => import('./examples/1'),
        children: [tuiRouteDialog(Dialog, {path: 'path/to/dialog'})],
    },
    {
        path: 'NamedOutlet',
        loadComponent: async () => import('./examples/2'),
        children: [
            tuiRouteDialog(DialogOutlet, {
                path: 'path/to/dialog',
                outlet: 'myOutlet',
            }),
        ],
    },
    {
        path: 'Setup',
        loadComponent: async () => import('./examples/3'),
    },
] as Routes;
