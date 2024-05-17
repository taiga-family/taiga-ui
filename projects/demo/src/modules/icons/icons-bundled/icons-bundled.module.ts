import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiExpand,
    TuiHint,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

import {TuiIconsBundledExample1} from './examples/1';
import {IconsBundledComponent} from './icons-bundled.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        TuiLinkDirective,
        TuiExpand,
        TuiButtonDirective,
        TuiInputDateRangeModule,
        TuiNotificationComponent,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiAddonDocModule,
        TuiSvgComponent,
        RouterModule.forChild(tuiGenerateRoutes(IconsBundledComponent)),
    ],
    declarations: [IconsBundledComponent, TuiIconsBundledExample1],
    exports: [IconsBundledComponent],
})
export class IconsBundledModule {}
