import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiElementModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';

import {ExampleTuiElementComponent} from './element.component';
import {TuiElementExample1} from './examples/1';

@NgModule({
    imports: [
        TuiButtonModule,
        TuiElementModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElementComponent)),
    ],
    declarations: [ExampleTuiElementComponent, TuiElementExample1],
    exports: [ExampleTuiElementComponent],
})
export class ExampleTuiElementModule {}
