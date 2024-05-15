import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiExpandModule,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationModule,
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
        TuiExpandModule,
        TuiButtonDirective,
        TuiInputDateRangeModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiAddonDocModule,
        TuiSvgComponent,
        RouterModule.forChild(tuiGenerateRoutes(IconsBundledComponent)),
    ],
    declarations: [IconsBundledComponent, TuiIconsBundledExample1],
    exports: [IconsBundledComponent],
})
export class IconsBundledModule {}
