import {NgTemplateOutlet} from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {type TuiPopoverContext} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {TuiAppBar} from '@taiga-ui/layout/components/app-bar';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-pdf-viewer',
    imports: [NgTemplateOutlet, TuiAppBar, TuiButton],
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
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
export class TuiPdfViewerComponent {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly el = tuiInjectElement();
    protected readonly context = injectContext<TuiPopoverContext<unknown>>();

    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));

    constructor() {
        afterNextRender(() => {
            if (!this.isMobile) {
                this.el.closest('tui-dialog')?.setAttribute('tuiTheme', 'dark');
            }
        });
    }
}
