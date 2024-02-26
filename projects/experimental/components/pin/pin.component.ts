import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
    selector: 'tui-pin,[tuiPin]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinComponent {
    @Input()
    @HostBinding('class._open')
    public open = false;
}
