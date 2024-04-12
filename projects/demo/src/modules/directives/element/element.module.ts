import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiElementModule} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {ExampleTuiElementComponent} from './element.component';
import {TuiElementExample1} from './examples/1';

@NgModule({
    imports: [
        TuiAvatarComponent,
        TuiButtonDirective,
        TuiElementModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElementComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiElementComponent, TuiElementExample1],
    exports: [ExampleTuiElementComponent],
})
export class ExampleTuiElementModule {}
