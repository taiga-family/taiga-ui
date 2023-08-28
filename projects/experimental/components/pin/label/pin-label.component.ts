import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-label',
    template: `
        <ng-content select="tui-pin-label-title, [tuiPinLabelTitle]"></ng-content>
        <ng-content select="tui-pin-label-subtitle, [tuiPinLabelSubtitle]"></ng-content>
    `,
    styleUrls: ['./pin-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinLabelComponent {}
