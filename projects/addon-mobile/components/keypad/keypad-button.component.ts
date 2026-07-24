import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'button[tuiKeypadButton], a[tuiKeypadButton]',
    template: '<ng-content />',
    styleUrl: './keypad-button.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiKeypadButton {}
