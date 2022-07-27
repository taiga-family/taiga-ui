import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeXL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiMarkerIconModeT} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

@Component({
    selector: `tui-marker-icon`,
    templateUrl: `./marker-icon.template.html`,
    styleUrls: [`./marker-icon.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
    },
})
export class TuiMarkerIconComponent {
    @Input()
    @HostBinding(`attr.data-marker-mode`)
    @tuiDefaultProp()
    mode: TuiMarkerIconModeT | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXL = `m`;

    @Input()
    @tuiDefaultProp()
    src = ``;

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}
}
