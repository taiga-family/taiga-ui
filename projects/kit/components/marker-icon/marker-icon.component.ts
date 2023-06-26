import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeXXL,
    TuiSizeXXS,
} from '@taiga-ui/core';
import {TuiMarkerIconMode} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-marker-icon, a[tuiMarkerIcon], button[tuiMarkerIcon]',
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiMarkerIconComponent {
    @Input()
    @HostBinding('attr.data-marker-mode')
    mode: TuiMarkerIconMode | null = null;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXXL | TuiSizeXXS = 'm';

    @Input()
    src = '';

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}
}
