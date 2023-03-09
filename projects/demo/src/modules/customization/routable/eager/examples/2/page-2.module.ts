import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule} from '@taiga-ui/core';
import {tuiGenerateDialogableRoute, TuiRoutableDialogModule} from '@taiga-ui/kit';

import {DialogContentComponent} from './dialog-content.component';
import {TuiPage2ExampleComponent} from './page-2.component';

@NgModule({
    imports: [
        // step 2: add TuiRoutableDialogModule
        TuiRoutableDialogModule,
        RouterModule.forChild([
            {
                path: ``,
                component: TuiPage2ExampleComponent,
                children: [
                    // step 3: use tuiGenerateDialogableRoute inside children property
                    {
                        ...tuiGenerateDialogableRoute(DialogContentComponent, {
                            path: `path/to/dialog`,
                        }),
                        outlet: `myOutlet`,
                    },
                ],
            },
        ]),
        TuiButtonModule,
    ],
    declarations: [TuiPage2ExampleComponent, DialogContentComponent],
    exports: [TuiPage2ExampleComponent],
})
export class TuiPage2ExampleModule {}
