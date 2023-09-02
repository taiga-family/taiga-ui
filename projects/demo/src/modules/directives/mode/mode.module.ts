import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiModeModule} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiInputNumberModule,
    TuiRoutableDialogModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {TuiModeExample1} from './examples/1';
import {TuiModeExample2} from './examples/2';
import {ExampleTuiModeComponent} from './mode.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiModeModule,
        TuiInputModule,
        TuiToggleModule,
        TuiInputNumberModule,
        TuiAddonDocModule,
        TuiRoutableDialogModule,
        TuiButtonModule,
        RouterModule.forChild([
            {
                path: ``,
                component: ExampleTuiModeComponent,
                children: [
                    {
                        path: `lazy`,
                        loadChildren: async () =>
                            (await import(`./examples/2/dialog.module`)).DialogModule,
                    },
                ],
            },
        ]),
    ],
    declarations: [ExampleTuiModeComponent, TuiModeExample1, TuiModeExample2],
    exports: [ExampleTuiModeComponent],
})
export class ExampleTuiModeModule {}
