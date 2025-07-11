import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHint} from '@taiga-ui/core/directives/hint';

import {TuiPaletteComponent} from './palette.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@NgModule({
    imports: [CommonModule, ...TuiHint],
    declarations: [TuiPaletteComponent],
    exports: [TuiPaletteComponent, ...TuiHint],
})
export class TuiPaletteModule {}
