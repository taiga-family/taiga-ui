import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiActiveZoneDirective,
    TuiFocusableModule,
    TuiHoveredModule,
    TuiScrollService,
} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiScrollbarComponent,
    TuiSvgModule,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/kit/components/tag';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiFocusableModule,
        TuiHoveredModule,
        TuiActiveZoneDirective,
        TuiSvgModule,
        TuiScrollbarComponent,
        TuiTooltipModule,
        TuiHostedDropdownModule,
        TuiTagModule,
        TuiWrapperModule,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent],
})
export class TuiInputTagModule {}
