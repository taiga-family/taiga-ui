import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ExampleTuiDefaultRendererComponent} from './default-renderer.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDefaultRendererComponent)),
    ],
    declarations: [ExampleTuiDefaultRendererComponent],
    exports: [ExampleTuiDefaultRendererComponent],
})
export class ExampleTuiDefaultRendererModule {}
