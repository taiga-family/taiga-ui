import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinComponent {}
