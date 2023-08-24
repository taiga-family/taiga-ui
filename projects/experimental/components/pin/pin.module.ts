import {NgModule} from '@angular/core';

import {TuiPinCursorComponent} from './cursor/pin-cursor.component';
import {TuiPinDotComponent} from './dot/pin-dot.component';
import {TuiPinIconComponent} from './icon/pin-icon.component';
import {TuiPinLabelComponent} from './label/pin-label.component';
import {TuiPinLabelSubtitleComponent} from './label/pin-label-subtitle.component';
import {TuiPinLabelTitleComponent} from './label/pin-label-title.component';
import {TuiPinComponent} from './pin.component';
import {TuiPinSelectedComponent} from './selected/pin-selected.component';

@NgModule({
    declarations: [
        TuiPinComponent,
        TuiPinSelectedComponent,
        TuiPinIconComponent,
        TuiPinDotComponent,
        TuiPinLabelComponent,
        TuiPinLabelTitleComponent,
        TuiPinLabelSubtitleComponent,
        TuiPinCursorComponent,
    ],
    exports: [
        TuiPinComponent,
        TuiPinSelectedComponent,
        TuiPinIconComponent,
        TuiPinDotComponent,
        TuiPinLabelComponent,
        TuiPinLabelTitleComponent,
        TuiPinLabelSubtitleComponent,
        TuiPinCursorComponent,
    ],
})
export class TuiPinModule {}
