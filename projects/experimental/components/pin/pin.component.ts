import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'tui-pin,[tuiPin]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./pin.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiPin: '',
        '[class._open]': 'open',
    },
})
export class TuiPinComponent {
    @Input('tuiPin')
    open: boolean | '' = false;
}
