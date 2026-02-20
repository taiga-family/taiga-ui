import"./chunk-HU6DUUP4.js";var o=`import {type Routes} from '@angular/router';
import {tuiGenerateDialogableRoute as tuiRouteDialog} from '@taiga-ui/kit';

import {DialogExample as EagerExample} from './2/dialog.component';
import {DialogExample as NamedOutletExample} from './3/dialog.component';

export default [
    {
        path: '',
        loadComponent: async () => import('.'),
        children: [
            tuiRouteDialog(async () => import('./1/dialog.component'), {
                path: 'path/to/lazy',
            }),
            tuiRouteDialog(EagerExample, {path: 'path/to/eager'}),
            tuiRouteDialog(NamedOutletExample, {
                path: 'path/to/named-outlet',
                outlet: 'myOutlet',
            }),
        ],
    },
] satisfies Routes;
`;export{o as default};
