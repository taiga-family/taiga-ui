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
import {distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

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
    readonly change$ = this.night;

    readonly night$ = this.change$.pipe(
        startWith(null),
        map(() => this.night.value),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(TuiThemeService) readonly theme: TuiThemeService,
        @Inject(TuiThemeNightService) readonly night: TuiThemeNightService,
    ) {}

    @HostBinding('attr.data-mode')
    get mode(): TuiBrightness | null {
        return this.night.value ? 'onDark' : null;
    }
}
