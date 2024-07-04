import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup} from '@taiga-ui/core/components/group';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiSvgComponent} from '@taiga-ui/legacy/components/svg';

import {TuiColorEditModule} from './color-edit/color-edit.module';
import {TuiColorPickerModule} from './color-picker/color-picker.module';
import {TuiColorSelectorComponent} from './color-selector.component';
import {TuiLinearMultiPickerModule} from './linear-multi-picker/linear-multi-picker.module';
import {TuiPaletteModule} from './palette/palette.module';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        TuiButton,
        TuiSvgComponent,
        TuiColorPickerModule,
        TuiLinearMultiPickerModule,
        TuiActiveZone,
        TuiColorEditModule,
        TuiGroup,
        TuiPaletteModule,
        TuiChevron,
        TuiIcon,
        ...TuiHint,
        ...TuiDataList,
    ],
    declarations: [TuiColorSelectorComponent],
    exports: [TuiColorSelectorComponent, ...TuiHint, ...TuiDataList],
})
export class TuiColorSelectorModule {}
