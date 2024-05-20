import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiScrollIntoViewLinkModule} from '@taiga-ui/addon-doc/directives';
import {
    TuiActiveZoneDirective,
    TuiAutoFocusDirective,
    TuiLetDirective,
} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiExpand,
    TuiHostedDropdownModule,
    TuiLinkDirective,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAccordionModule, TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        PolymorpheusModule,
        TuiScrollIntoViewLinkModule,
        TuiButtonDirective,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiActiveZoneDirective,
        TuiLetDirective,
        TuiLinkDirective,
        TuiExpand,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        TuiAccordionModule,
        TuiScrollbarComponent,
        TuiSvgComponent,
        TuiDataList,
        TuiAutoFocusDirective,
    ],
    declarations: [TuiDocNavigationComponent],
    exports: [TuiDocNavigationComponent],
})
export class TuiDocNavigationModule {}
