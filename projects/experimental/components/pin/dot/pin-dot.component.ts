import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: '<ng-content></ng-content>',
    selector: 'tui-pin-dot,[tuiPinDot]',
    styleUrls: ['./pin-dot.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinDotComponent {}
