import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import type {TuiPdfViewerOptions} from './pdf-viewer.options';

@Component({
    standalone: true,
    selector: 'tui-pdf-viewer',
    imports: [AsyncPipe, PolymorpheusOutlet, TuiButton],
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        '(document:keydown.esc)': 'onKeyDownEsc()',
    },
})
export class TuiPdfViewerComponent<I, O> {
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context = injectContext<TuiPopover<TuiPdfViewerOptions<I>, O>>();

    protected onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
