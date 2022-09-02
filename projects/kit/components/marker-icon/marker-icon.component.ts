import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService, TuiInjectionTokenType} from '@taiga-ui/cdk';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {MODE_PROVIDER, TUI_MODE} from '@taiga-ui/core';
import type {TuiMarkerIconMode} from '@taiga-ui/kit/types';

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
    mode: TuiMarkerIconMode | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXL = `m`;

    @Input()
    @tuiDefaultProp()
    src = ``;

    constructor(
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
    ) {}
}
