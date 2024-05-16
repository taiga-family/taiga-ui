import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiDemo} from '@demo/utils';
import {tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiExpandModule,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

import {TuiIconsCustomizationExample1} from './examples/1';
import {TuiIconsCustomizationExample2} from './examples/2';
import {IconsCustomizationComponent} from './icons-customization.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        TuiDemo,
        TuiLinkDirective,
        TuiExpandModule,
        TuiButtonDirective,
        TuiInputDateRangeModule,
        TuiNotificationComponent,
        TuiTextfieldControllerModule,
        TuiHintModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsCustomizationComponent)),
        TuiSvgComponent,
    ],
    declarations: [
        IconsCustomizationComponent,
        TuiIconsCustomizationExample1,
        TuiIconsCustomizationExample2,
    ],
    exports: [IconsCustomizationComponent],
})
export class IconsCustomizationModule {}
