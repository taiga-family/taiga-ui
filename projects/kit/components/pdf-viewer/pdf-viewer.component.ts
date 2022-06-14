import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_CLOSE_WORD,
    tuiFadeIn,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {TUI_UNAVAILABLE_PDF_WORD} from '@taiga-ui/kit/tokens';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPdfViewerOptions} from './pdf-viewer-options';

@Component({
    selector: 'tui-pdf-viewer',
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiPdfViewerComponent<I, O> {
    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    readonly animation = {value: '', ...this.options} as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<I>, O>,
        @Inject(TUI_UNAVAILABLE_PDF_WORD)
        readonly unavailablePdfWord$: Observable<string>,
    ) {}
}
