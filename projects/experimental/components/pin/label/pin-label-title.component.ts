import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-label-title,[tuiPinLabelTitle]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin-label-title.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinLabelTitleComponent {}
