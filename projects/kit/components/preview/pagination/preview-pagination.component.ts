import {ChangeDetectionStrategy, Component, inject, input, model} from '@angular/core';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit/tokens';

import {TuiPreviewAction} from '../action/preview-action.directive';
import {TUI_PREVIEW_ICONS, type TuiPreviewIcons} from '../preview.options';

@Component({
    selector: 'tui-preview-pagination',
    imports: [TuiButton, TuiPreviewAction],
    templateUrl: './preview-pagination.template.html',
    styleUrl: './preview-pagination.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.arrowRight.prevent)': 'onArrowClick(1)',
        '(document:keydown.arrowLeft.prevent)': 'onArrowClick(-1)',
    },
})
export class TuiPreviewPagination {
    protected readonly icons: TuiPreviewIcons = inject(TUI_PREVIEW_ICONS);
    protected readonly texts = inject(TUI_PAGINATION_TEXTS);

    public readonly length = input(1);
    public readonly index = model(0);

    public onArrowClick(step: number): void {
        this.index.set(tuiClamp(this.index() + step, 0, this.length() - 1));
    }
}
