import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';

import {LazyRoutableDialogComponent} from './lazy-routable-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild([
            {
                path: ``,
                component: LazyRoutableDialogComponent,
                children: [
                    {
                        path: ``,
                        loadChildren: async () =>
                            (await import(`./examples/1/page-1.module`))
                                .TuiPage1ExampleModule,
                    },
                    {
                        path: `Setup`,
                        component: LazyRoutableDialogComponent,
                    },
                ],
            },
        ]),
        TuiButtonModule,
    ],
    declarations: [LazyRoutableDialogComponent],
    exports: [LazyRoutableDialogComponent],
})
export class LazyRoutableDialogModule {}
