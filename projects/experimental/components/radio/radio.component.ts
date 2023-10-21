import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
        '[class._invalid]': 'control?.invalid && control?.touched',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent {
    @Input()
    size: TuiSizeS = 'm';

    constructor(
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Optional() @Inject(NgControl) readonly control: NgControl | null,
    ) {}
}
