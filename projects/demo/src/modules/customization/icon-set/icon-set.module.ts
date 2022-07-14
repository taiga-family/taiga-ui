import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

import {TuiIconSetExample1} from './examples/1';
import {IconSetComponent} from './icon-set.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        TuiDocCopyModule,
        TuiLinkModule,
        TuiExpandModule,
        TuiButtonModule,
        TuiInputDateRangeModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(IconSetComponent)),
    ],
    declarations: [IconSetComponent, TuiIconSetExample1],
    exports: [IconSetComponent],
})
export class IconSetModule {}
