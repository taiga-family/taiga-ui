import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    HostBinding,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TuiThemeNightService, TuiThemeService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TuiSwipeService} from '@taiga-ui/cdk';
import type {TuiBrightness} from '@taiga-ui/core';
import {TuiModeDirective} from '@taiga-ui/core';
import {distinctUntilChanged, map, share, startWith} from 'rxjs';

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
    private readonly icons = inject(TUI_DOC_ICONS);

    public readonly night = inject(TuiThemeNightService);
    public readonly change$ = this.night;
    public readonly night$ = this.change$.pipe(
        startWith(null),
        map(() => this.night.value),
        distinctUntilChanged(),
        share(),
    );

    protected readonly theme = inject(TuiThemeService);

    @HostBinding('attr.data-mode')
    protected get mode(): TuiBrightness | null {
        return this.night.value ? 'onDark' : null;
    }

    protected get icon(): string {
        return this.night.value ? this.icons.day : this.icons.night;
    }
}
