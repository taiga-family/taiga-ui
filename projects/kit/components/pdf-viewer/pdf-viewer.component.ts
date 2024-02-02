import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    inject,
} from '@angular/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiCommonIcons,
    tuiFadeIn,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPdfViewerOptions} from './pdf-viewer.options';

@Component({
    selector: 'tui-pdf-viewer',
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
    readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    constructor(
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiPopover<TuiPdfViewerOptions<I>, O>,
    ) {}

    @HostListener('document:keydown.esc')
    onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
