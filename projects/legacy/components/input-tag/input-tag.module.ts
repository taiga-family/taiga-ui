import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiActiveZoneDirective,
    TuiHoveredDirective,
    TuiScrollService,
} from '@taiga-ui/cdk';
import {TuiScrollbarComponent, TuiSvgComponent, TuiTooltipModule} from '@taiga-ui/core';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {TuiTagModule} from '@taiga-ui/legacy/components/tag';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiHoveredDirective,
        TuiActiveZoneDirective,
        TuiSvgComponent,
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
