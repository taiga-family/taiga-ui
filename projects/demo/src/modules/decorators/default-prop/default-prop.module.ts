import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiInputCountModule} from '@taiga-ui/kit';
import {ExampleTuiDefaultPropDemoComponent} from './default-prop-demo.component';
import {ExampleTuiDefaultPropComponent} from './default-prop.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkModule,
        TuiInputCountModule,
        TuiButtonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDefaultPropComponent)),
    ],
    declarations: [ExampleTuiDefaultPropComponent, ExampleTuiDefaultPropDemoComponent],
    exports: [ExampleTuiDefaultPropComponent],
})
export class ExampleTuiDefaultPropModule {}
