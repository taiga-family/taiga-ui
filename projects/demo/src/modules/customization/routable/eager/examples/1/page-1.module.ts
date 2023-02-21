import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule} from '@taiga-ui/core';
import {tuiGenerateDialogableRoute, TuiRoutableDialogModule} from '@taiga-ui/kit';

import {DialogContentComponent} from './dialog-content.component';
import {TuiPage1ExampleComponent} from './page-1.component';

@NgModule({
    imports: [
        // step 2: add TuiRoutableDialogModule
        TuiRoutableDialogModule,
        RouterModule.forChild([
            {
                path: ``,
                component: TuiPage1ExampleComponent,
                children: [
                    // step 3: use tuiGenerateDialogableRoute inside children property
                    tuiGenerateDialogableRoute(DialogContentComponent, {
                        path: `path/to/dialog`,
                    }),
                ],
            },
        ]),
        TuiButtonModule,
    ],
    declarations: [TuiPage1ExampleComponent, DialogContentComponent],
    exports: [TuiPage1ExampleComponent],
})
export class TuiPage1ExampleModule {}
