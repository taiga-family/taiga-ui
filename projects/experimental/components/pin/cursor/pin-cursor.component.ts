import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-pin-cursor',
    templateUrl: './pin-cursor.component.html',
    styleUrls: ['./pin-cursor.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPinCursorComponent {}
