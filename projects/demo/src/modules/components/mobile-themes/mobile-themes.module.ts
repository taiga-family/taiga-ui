import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiRippleModule,
    TuiThemeAndroidModule,
    TuiThemeIosModule,
    TuiTouchableModule,
} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiIslandModule} from '@taiga-ui/kit';

import {TuiMobileThemesExample1} from './examples/1';
import {TuiMobileThemesExample2} from './examples/2';
import {ExampleTuiMobileThemesComponent} from './mobile-themes.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiThemeIosModule,
        TuiThemeAndroidModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiIslandModule,
        TuiRippleModule,
        TuiTouchableModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiMobileThemesComponent)),
    ],
    declarations: [
        ExampleTuiMobileThemesComponent,
        TuiMobileThemesExample1,
        TuiMobileThemesExample2,
    ],
    exports: [ExampleTuiMobileThemesComponent],
})
export class ExampleTuiMobileThemesModule {}
