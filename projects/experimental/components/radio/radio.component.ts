import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiAppearance: '', // Apply base appearance
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._invalid]': 'control?.invalid && control?.touched',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent {
    @Input()
    size: TuiSizeS = 'm';

    constructor(@Optional() @Inject(NgControl) readonly control: NgControl | null) {}
}
