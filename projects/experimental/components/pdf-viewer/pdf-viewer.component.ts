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
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {TuiAppBar} from '@taiga-ui/layout/components/app-bar';
import {injectContext} from '@taiga-ui/polymorpheus';
import {TuiButtonClose} from '@taiga-ui/kit';
import type {TuiDialogOptions} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-pdf-viewer',
    imports: [NgTemplateOutlet, TuiAppBar, TuiButton, TuiButtonClose, NgIf],
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.tuiTheme]': 'isMobile ? "" : "dark"',
    },
    providers: [
        tuiButtonOptionsProvider(() => {
            const mobile = inject(TUI_IS_MOBILE);

            return {
                appearance: mobile ? 'action' : 'glass',
                size: 's',
            };
        }),
    ],
})
export class TuiPdfViewerComponent<O, I> {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly el = tuiInjectElement();
    protected readonly context = injectContext<TuiPopover<TuiDialogOptions<I>, O>>();

    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));
}
