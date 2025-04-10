import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TuiPlatform} from '@taiga-ui/cdk/directives/platform';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiRoot} from '@taiga-ui/core/components/root';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';

import {TuiDocHeader} from '../internal/header';
import {TuiDocNavigation} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'tui-doc-main',
    imports: [RouterOutlet, TuiButton, TuiDocHeader, TuiDocNavigation, TuiRoot],
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    // @note: This one was default on purpose, so we can test demo in default mode.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiDocMain {
    private readonly icons = inject(TUI_DOC_ICONS);
    protected readonly platform = inject(TuiPlatform);
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly theme = computed(() => (this.darkMode() ? 'dark' : null));
    protected readonly icon = computed(() =>
        this.darkMode() ? this.icons.light : this.icons.dark,
    );
}
