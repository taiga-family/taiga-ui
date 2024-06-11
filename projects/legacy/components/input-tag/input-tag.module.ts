import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHoveredDirective, TuiScrollService} from '@taiga-ui/cdk';
import {
    TuiDropdownModule,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/legacy/components/tag';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiHoveredDirective,
        TuiSvgComponent,
        TuiScrollbarComponent,
        TuiTooltipModule,
        TuiDropdownModule,
        TuiTagModule,
        TuiWrapperModule,
        TuiLegacyDropdownOpenMonitorDirective,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent],
})
export class TuiInputTagModule {}
