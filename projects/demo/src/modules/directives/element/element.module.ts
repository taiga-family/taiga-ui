import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiElementModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkModule} from '@taiga-ui/core';

import {ExampleTuiElementComponent} from './element.component';
import {TuiElementExample1} from './examples/1';

@NgModule({
    imports: [
        TuiButtonDirective,
        TuiElementModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElementComponent)),
        TuiLinkModule,
    ],
    declarations: [ExampleTuiElementComponent, TuiElementExample1],
    exports: [ExampleTuiElementComponent],
})
export class ExampleTuiElementModule {}
