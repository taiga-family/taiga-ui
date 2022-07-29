import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiActiveZoneModule, TuiAutoFocusModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiExpandModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiModeModule,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';

import {TuiScrollIntoViewLinkModule} from '../../directives/scroll-into-view/scroll-into-view.module';
import {TuiDocNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TuiScrollIntoViewLinkModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneModule,
        TuiLetModule,
        TuiModeModule,
        TuiLinkModule,
        TuiExpandModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiAccordionModule,
        TuiScrollbarModule,
        TuiSvgModule,
        TuiDataListModule,
        TuiAutoFocusModule,
    ],
    declarations: [TuiDocNavigationComponent],
    exports: [TuiDocNavigationComponent],
})
export class TuiDocNavigationModule {}
