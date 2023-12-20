import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiPrimitiveCheckboxModule} from '@taiga-ui/core';

import {ExampleTuiPrimitiveCheckboxComponent} from './primitive-checkbox.component';

@NgModule({
    imports: [
        RouterModule,
        TuiPrimitiveCheckboxModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPrimitiveCheckboxComponent)),
    ],
    declarations: [ExampleTuiPrimitiveCheckboxComponent],
    exports: [ExampleTuiPrimitiveCheckboxComponent],
})
export class ExampleTuiPrimitiveCheckboxModule {}
