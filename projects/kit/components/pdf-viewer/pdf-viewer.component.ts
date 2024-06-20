import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import type {TuiPdfViewerOptions} from './pdf-viewer.options';

@Component({
    standalone: true,
    selector: 'tui-pdf-viewer',
    imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiButton, AsyncPipe],
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'options',
        '[@tuiSlideInTop]': 'options',
    },
})
export class TuiPdfViewerComponent<I, O> {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly context =
        inject<TuiPopover<TuiPdfViewerOptions<I>, O>>(POLYMORPHEUS_CONTEXT);

    @HostListener('document:keydown.esc')
    protected onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
