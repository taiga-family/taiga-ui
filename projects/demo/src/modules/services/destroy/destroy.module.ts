import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {ExampleTuiDestroyComponent} from './destroy.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDestroyComponent)),
    ],
    declarations: [ExampleTuiDestroyComponent],
    exports: [ExampleTuiDestroyComponent],
})
export class ExampleTuiDestroyModule {}
