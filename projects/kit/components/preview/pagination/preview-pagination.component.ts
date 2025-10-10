import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_PAGINATION_TEXTS, TUI_PREVIEW_ICONS} from '@taiga-ui/kit/tokens';

import {TuiPreviewAction} from '../action/preview-action.directive';

@Component({
    selector: 'tui-preview-pagination',
    imports: [AsyncPipe, TuiButton, TuiPreviewAction],
    templateUrl: './preview-pagination.template.html',
    styleUrl: './preview-pagination.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.arrowRight.prevent)': 'onArrowClick(1)',
        '(document:keydown.arrowLeft.prevent)': 'onArrowClick(-1)',
    },
})
export class TuiPreviewPagination {
    protected readonly icons = inject(TUI_PREVIEW_ICONS);
    protected readonly texts$ = inject(TUI_PAGINATION_TEXTS);

    @Input()
    public length = 1;

    @Input()
    public index = 0;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    public onArrowClick(step: number): void {
        this.updateIndex(tuiClamp(this.index + step, 0, this.length - 1));
    }

    protected get leftButtonDisabled(): boolean {
        return this.index === 0;
    }

    protected get rightButtonDisabled(): boolean {
        return this.index === this.length - 1;
    }

    private updateIndex(index: number): void {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}
