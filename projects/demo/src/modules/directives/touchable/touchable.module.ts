import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTouchableModule} from '@taiga-ui/addon-mobile';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

import {TuiTouchableExample1} from './examples/1';
import {ExampleTuiTouchableComponent} from './touchable.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiLinkDirective,
        TuiTouchableModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTouchableComponent)),
    ],
    declarations: [ExampleTuiTouchableComponent, TuiTouchableExample1],
    exports: [ExampleTuiTouchableComponent],
})
export class ExampleTuiTouchableModule {}
