import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiSwipeService} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';

import {TuiThemeService} from '../../services/theme.service';
import {TuiThemeNightService} from '../../services/theme-night.service';

@Component({
    selector: 'tui-doc-main',
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    // @note: This one was default on purpose so we can test demo in default mode.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocMainComponent),
        },
        TuiSwipeService,
    ],
})
export class TuiDocMainComponent {
    readonly change$ = this.nightService;

    constructor(
        @Inject(TuiThemeService) readonly themeService: TuiThemeService,
        @Inject(TuiThemeNightService) readonly nightService: TuiThemeNightService,
    ) {}

    @HostBinding('attr.data-mode')
    get mode(): TuiBrightness | null {
        return this.nightService.value ? 'onDark' : null;
    }
}
