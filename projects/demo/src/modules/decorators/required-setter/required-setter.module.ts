import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputCountModule} from '@taiga-ui/kit';
import {ExampleTuiRequiredSetterDemoComponent} from './required-setter-demo.component';
import {ExampleTuiRequiredSetterComponent} from './required-setter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputCountModule,
        TuiButtonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiRequiredSetterComponent)),
    ],
    declarations: [
        ExampleTuiRequiredSetterComponent,
        ExampleTuiRequiredSetterDemoComponent,
    ],
    exports: [ExampleTuiRequiredSetterComponent],
})
export class ExampleTuiRequiredSetterModule {}
