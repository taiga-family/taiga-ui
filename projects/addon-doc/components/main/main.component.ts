import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiDocThemeDarkService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiRoot} from '@taiga-ui/core/components/root';

import {TuiDocHeader} from '../internal/header';
import {TuiDocNavigation} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'tui-doc-main',
    imports: [
        TuiRoot,
        AsyncPipe,
        RouterOutlet,
        TuiButton,
        TuiDocHeader,
        TuiDocNavigation,
    ],
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    // @note: This one was default on purpose, so we can test demo in default mode.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiDocMain {
    private readonly icons = inject(TUI_DOC_ICONS);

    protected readonly dark$ = inject(TuiDocThemeDarkService);

    protected get icon(): string {
        return this.dark$.value ? this.icons.light : this.icons.dark;
    }
}
