import {NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {type TuiDialogOptions} from '@taiga-ui/core/components/dialog';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiButtonClose} from '@taiga-ui/kit/directives/button-close';
import {TuiAppBar} from '@taiga-ui/layout/components/app-bar';
import {injectContext} from '@taiga-ui/polymorpheus';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {map} from 'rxjs';
import {tuiWatch} from '@taiga-ui/cdk/observables';

@Component({
    standalone: true,
    selector: 'tui-pdf-viewer',
    imports: [NgIf, NgTemplateOutlet, TuiAppBar, TuiButton, TuiButtonClose],
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider(() => ({
            appearance: inject(TUI_IS_MOBILE) ? 'action' : 'glass',
            size: 's',
        })),
    ],
    host: {
        '[attr.tuiTheme]': 'isMobileRes() ? "" : "dark"',
    },
})
export class TuiPdfViewerComponent<O, I> {
    protected readonly isMobileRes = toSignal(
        inject(TuiBreakpointService).pipe(
            map((breakpoint) => breakpoint === 'mobile'),
            tuiWatch(),
        ),
        {initialValue: false},
    );

    protected readonly el = tuiInjectElement();
    protected readonly context = injectContext<TuiPopover<TuiDialogOptions<I>, O>>();
    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));
    protected readonly icons = inject(TUI_COMMON_ICONS);
}
