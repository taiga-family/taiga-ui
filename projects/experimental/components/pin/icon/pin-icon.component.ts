import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-icon,[tuiPinIcon]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin-icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinIconComponent {}
