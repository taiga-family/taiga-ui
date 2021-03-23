import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputNumberModule, TuiToggleModule} from '@taiga-ui/kit';
import {TuiModeExample1} from './examples/1';
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
        RouterModule.forChild(generateRoutes(ExampleTuiModeComponent)),
    ],
    declarations: [ExampleTuiModeComponent, TuiModeExample1],
    exports: [ExampleTuiModeComponent],
})
export class ExampleTuiModeModule {}
