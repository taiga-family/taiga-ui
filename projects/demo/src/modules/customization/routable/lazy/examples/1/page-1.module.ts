import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiRoutableDialogModule} from '@taiga-ui/kit';

import {TuiPage1ExampleComponent} from './page-1.component';

@NgModule({
    imports: [
        // step 2: add TuiRoutableDialogModule
        TuiRoutableDialogModule,
        TuiButtonModule,
        RouterModule.forChild([
            {
                children: [
                    // step 3: add lazy loading for component module as usual
                    {
                        loadChildren: async () =>
                            (await import(`./dialog-content/dialog-content.module`))
                                .DialogContentModule,
                        path: `path/to/dialog`,
                    },
                ],
                component: TuiPage1ExampleComponent,
                path: ``,
            },
        ]),
    ],
    declarations: [TuiPage1ExampleComponent],
    exports: [TuiPage1ExampleComponent],
})
export class TuiPage1ExampleModule {}
