import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_PREVIEW_ICONS, TUI_PREVIEW_ZOOM_TEXTS} from '@taiga-ui/addon-preview/tokens';
import {ALWAYS_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';
import {map, merge, of, startWith, switchMap, timer} from 'rxjs';

const STEP = 0.5;

@Component({
    selector: 'tui-preview-zoom',
    templateUrl: './preview-zoom.template.html',
    styleUrls: ['./preview-zoom.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewZoomComponent {
    protected readonly icons = inject(TUI_PREVIEW_ICONS);
    protected readonly zoomTexts$ = inject(TUI_PREVIEW_ZOOM_TEXTS);

    @Input()
    public min = 0.5;

    @Input()
    public max = 2;

    @Input()
    public value = 1;

    @Output()
    public readonly valueChange = new EventEmitter<number>();

    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    public readonly reset = new EventEmitter<void>();

    public readonly hintShow$ = this.valueChange.pipe(
        switchMap(() => merge(of(true), timer(1000).pipe(map(ALWAYS_FALSE_HANDLER)))),
        startWith(false),
    );

    public get leftButtonDisabled(): boolean {
        return this.value === this.min;
    }

    public get rightButtonDisabled(): boolean {
        return this.value === this.max;
    }

    public get collapseVisible(): boolean {
        return this.value > this.min;
    }

    public onModelChange(value: number): void {
        const clamped = tuiClamp(value, this.min, this.max);

        if (clamped === this.value) {
            return;
        }

        this.value = clamped;
        this.valueChange.emit(clamped);
    }

    public onReset(): void {
        this.reset.emit();
    }

    public onMinus(): void {
        this.onModelChange(this.value - STEP);
    }

    public onPlus(): void {
        this.onModelChange(this.value < 1 ? 1 : this.value + STEP);
    }
}
