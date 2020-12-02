import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiExpandModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';
import {TuiDocNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiLetModule,
        TuiLinkModule,
        TuiExpandModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiAccordionModule,
        TuiScrollbarModule,
        TuiSvgModule,
        TuiDataListModule,
    ],
    declarations: [TuiDocNavigationComponent],
    exports: [TuiDocNavigationComponent],
})
export class TuiDocNavigationModule {}
