import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ExampleTuiDefaultRendererComponent} from './default-renderer.component';
import {TuiCurrencyExample1} from './examples/1/component';
import {TuiCurrencyExample2} from './examples/2/component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDefaultRendererComponent)),
    ],
    declarations: [
        ExampleTuiDefaultRendererComponent,
        TuiCurrencyExample2,
        TuiCurrencyExample1,
    ],
    exports: [ExampleTuiDefaultRendererComponent],
})
export class ExampleTuiDefaultRendererModule {}
