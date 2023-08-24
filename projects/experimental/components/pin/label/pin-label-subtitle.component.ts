import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-label-subtitle,[tuiPinLabelSubtitle]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin-label-subtitle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinLabelSubtitleComponent {}
