import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {type TuiDialogOptions} from '@taiga-ui/core/portals/dialog';
import {TUI_BREAKPOINT, TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
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
            appearance: inject(WA_IS_MOBILE) ? 'action' : 'glass',
            size: 's',
        })),
    ],
    host: {
        '[attr.tuiTheme]': 'isMobile() ? "" : "dark"',
    },
})
export class TuiPdfViewer<O, I> {
    private readonly breakpoint = inject(TUI_BREAKPOINT);
    protected readonly isMobile = computed(() => this.breakpoint() === 'mobile');
    protected readonly el = tuiInjectElement();
    protected readonly close = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context =
        injectContext<TuiPortalContext<TuiDialogOptions<I>, O>>();
}
