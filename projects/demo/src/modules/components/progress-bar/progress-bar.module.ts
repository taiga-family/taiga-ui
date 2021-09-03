import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiProgressBarModule} from '@taiga-ui/kit';
import {TuiProgressBarExample1} from './examples/1';
import {TuiProgressBarExample2} from './examples/2';
import {ExampleProgressBarComponent} from './progress-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiProgressBarModule,
        RouterModule.forChild(generateRoutes(ExampleProgressBarComponent)),
    ],
    declarations: [
        ExampleProgressBarComponent,
        TuiProgressBarExample1,
        TuiProgressBarExample2,
    ],
    exports: [ExampleProgressBarComponent],
})
export class ExampleTuiProgressBarModule {}
