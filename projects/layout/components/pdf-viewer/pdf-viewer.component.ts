import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {type TuiDialogOptions} from '@taiga-ui/core/components/dialog';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiAppBar} from '@taiga-ui/layout/components/app-bar';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-pdf-viewer',
    imports: [NgTemplateOutlet, TuiAppBar, TuiButton],
    templateUrl: './pdf-viewer.template.html',
    styleUrl: './pdf-viewer.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider(() => ({
            appearance: inject(TUI_IS_MOBILE) ? 'action' : 'glass',
            size: 's',
        })),
    ],
    host: {
        '[attr.tuiTheme]': 'isMobile ? "" : "dark"',
    },
})
export class TuiPdfViewer<O, I> {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly el = tuiInjectElement();
    protected readonly context = injectContext<TuiPopover<TuiDialogOptions<I>, O>>();
    protected readonly close = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
}
