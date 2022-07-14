import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiTokensExample1} from './examples/1';
import {TuiTokensExample2} from './examples/2';
import {TuiTokensExample3} from './examples/3';
import {TuiTokensExample4} from './examples/4';
import {TuiTokensExample5} from './examples/5';
import {TuiTokensExample6} from './examples/6';
import {TuiTokensExample7} from './examples/7';
import {TuiTokensExample8} from './examples/8';
import {ExampleTokensComponent} from './tokens.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTokensComponent)),
    ],
    declarations: [
        ExampleTokensComponent,
        TuiTokensExample1,
        TuiTokensExample2,
        TuiTokensExample3,
        TuiTokensExample4,
        TuiTokensExample5,
        TuiTokensExample6,
        TuiTokensExample7,
        TuiTokensExample8,
    ],
    exports: [ExampleTokensComponent],
})
export class ExampleTokensModule {}
