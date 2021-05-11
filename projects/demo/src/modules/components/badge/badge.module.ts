import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiColorModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ExampleTuiBadgeComponent} from './badge.component';
import {TuiBadgeExample1} from './examples/1';
import {TuiBadgeExample2} from './examples/2';
import {TuiBadgeExample3} from './examples/3';
import {TuiBadgeExample4} from './examples/4';
import {TuiBadgeExample5} from './examples/5';

@NgModule({
    imports: [
        TuiBadgeModule,
        TuiModeModule,
        TuiRepeatTimesModule,
        TuiSvgModule,
        TuiColorModule,
        CommonModule,
        TuiAddonDocModule,
        PolymorpheusModule,
        RouterModule.forChild(generateRoutes(ExampleTuiBadgeComponent)),
    ],
    declarations: [
        ExampleTuiBadgeComponent,
        TuiBadgeExample1,
        TuiBadgeExample2,
        TuiBadgeExample3,
        TuiBadgeExample4,
        TuiBadgeExample5,
    ],
    exports: [ExampleTuiBadgeComponent],
})
export class ExampleTuiBadgeModule {}
