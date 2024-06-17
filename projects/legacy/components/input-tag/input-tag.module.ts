import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHoveredDirective, TuiScrollService} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiDropdownModule,
    TuiIcon,
    TuiScrollbarComponent,
    TuiTooltip,
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
        TuiTooltip,
        TuiDropdownModule,
        TuiTagModule,
        TuiWrapperModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiAppearance,
        TuiIcon,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent],
})
export class TuiInputTagModule {}
