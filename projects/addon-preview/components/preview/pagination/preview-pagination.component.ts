import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_PREVIEW_ICONS} from '@taiga-ui/addon-preview/tokens';
import {tuiClamp} from '@taiga-ui/cdk';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-preview-pagination',
    templateUrl: './preview-pagination.template.html',
    styleUrls: ['./preview-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewPaginationComponent {
    @Input()
    length = 1;

    @Input()
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    readonly icons = inject(TUI_PREVIEW_ICONS);
    readonly texts$ = inject(TUI_PAGINATION_TEXTS);

    get leftButtonDisabled(): boolean {
        return this.index === 0;
    }

    get rightButtonDisabled(): boolean {
        return this.index === this.length - 1;
    }

    @HostListener('document:keydown.arrowRight.prevent', ['1'])
    @HostListener('document:keydown.arrowLeft.prevent', ['-1'])
    onArrowClick(step: number): void {
        this.updateIndex(tuiClamp(this.index + step, 0, this.length - 1));
    }

    private updateIndex(index: number): void {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}
