import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHoveredDirective, TuiScrollService} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDropdownModule,
    TuiIconComponent,
    TuiScrollbarComponent,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/legacy/components/tag';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiHoveredDirective,
        TuiScrollbarComponent,
        TuiTooltipModule,
        TuiDropdownModule,
        TuiTagModule,
        TuiWrapperModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiAppearanceDirective,
        TuiIconComponent,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent],
})
export class TuiInputTagModule {}
