import type {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    Inject,
} from '@angular/core';
import type {TuiDialog, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_CLOSE_WORD,
    tuiFadeIn,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

import type {TuiPdfViewerOptions} from './pdf-viewer-options';

@Component({
    selector: `tui-pdf-viewer`,
    templateUrl: `./pdf-viewer.template.html`,
    styleUrls: [`./pdf-viewer.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiPdfViewerComponent<I, O> {
    @HostBinding(`@tuiSlideInTop`)
    @HostBinding(`@tuiFadeIn`)
    readonly animation = {value: ``, ...this.options} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_CLOSE_WORD)
        readonly closeWord$: TuiInjectionTokenType<typeof TUI_CLOSE_WORD>,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<I>, O>,
    ) {}

    @HostListener(`document:keydown.esc`)
    onKeyDownEsc(): void {
        this.context.$implicit.complete();
    }
}
