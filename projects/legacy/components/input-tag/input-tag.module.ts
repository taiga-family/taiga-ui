import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {TuiScrollService} from '@taiga-ui/cdk/services';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiTagModule} from '@taiga-ui/legacy/components/tag';
import {TuiTooltip} from '@taiga-ui/legacy/components/tooltip';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiHovered,
        TuiScrollbar,
        TuiTooltip,
        TuiTagModule,
        TuiWrapperModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiAppearance,
        TuiIcon,
        ...TuiDropdown,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent, ...TuiDropdown],
})
export class TuiInputTagModule {}
