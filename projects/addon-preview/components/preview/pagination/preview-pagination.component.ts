import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiClamp, tuiDefaultProp, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit';

@Component({
    selector: `tui-preview-pagination`,
    templateUrl: `./preview-pagination.template.html`,
    styleUrls: [`./preview-pagination.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewPaginationComponent {
    @Input()
    @tuiDefaultProp()
    length = 1;

    @Input()
    @tuiDefaultProp()
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    constructor(
        @Inject(TUI_PAGINATION_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_PAGINATION_TEXTS>,
    ) {}

    get leftButtonDisabled(): boolean {
        return this.index === 0;
    }

    get rightButtonDisabled(): boolean {
        return this.index === this.length - 1;
    }

    @HostListener(`document:keydown.arrowRight.prevent`, [`1`])
    @HostListener(`document:keydown.arrowLeft.prevent`, [`-1`])
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
