import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiModeModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';
import {ExampleTuiBadgeComponent} from './badge.component';
import {TuiBadgeExample1} from './examples/1';
import {TuiBadgeExample2} from './examples/2';
import {TuiBadgeExample3} from './examples/3';
import {TuiBadgeExample4} from './examples/4';

@NgModule({
    imports: [
        TuiBadgeModule,
        TuiModeModule,
        TuiRepeatTimesModule,
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiBadgeComponent)),
    ],
    declarations: [
        ExampleTuiBadgeComponent,
        TuiBadgeExample1,
        TuiBadgeExample2,
        TuiBadgeExample3,
        TuiBadgeExample4,
    ],
    exports: [ExampleTuiBadgeComponent],
})
export class ExampleTuiBadgeModule {}
