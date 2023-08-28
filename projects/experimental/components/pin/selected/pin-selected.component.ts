import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-selected',
    templateUrl: './pin-selected.component.html',
    styleUrls: ['./pin-selected.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinSelectedComponent {}
