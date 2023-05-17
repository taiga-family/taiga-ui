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
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

import {TuiIconsMappingExample1} from './examples/1';
import {TuiIconsMappingExample3} from './examples/3';
import {IconsMappingComponent} from './icons-mapping.component';

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
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        TuiSvgModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsMappingComponent)),
    ],
    declarations: [
        IconsMappingComponent,
        TuiIconsMappingExample1,
        TuiIconsMappingExample3,
    ],
    exports: [IconsMappingComponent],
})
export class IconsMappingModule {}
