import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {ExampleTuiDestroyComponent} from './destroy.component';
import {TuiDestroyExample} from './examples/1/component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiButtonModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDestroyComponent)),
    ],
    declarations: [ExampleTuiDestroyComponent, TuiDestroyExample],
    exports: [ExampleTuiDestroyComponent],
})
export class ExampleTuiDestroyModule {}
