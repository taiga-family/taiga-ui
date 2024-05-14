import {AsyncPipe, NgIf, PercentPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TUI_PREVIEW_ICONS, TUI_PREVIEW_ZOOM_TEXTS} from '@taiga-ui/addon-preview/tokens';
import {TUI_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHintModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';
import {map, merge, of, startWith, switchMap, timer} from 'rxjs';

import {TuiPreviewActionDirective} from '../preview-action/preview-action.directive';

const STEP = 0.5;

@Component({
    standalone: true,
    selector: 'tui-preview-zoom',
    imports: [
        NgIf,
        AsyncPipe,
        TuiButtonDirective,
        TuiPreviewActionDirective,
        TuiSliderModule,
        TuiHintModule,
        PercentPipe,
        FormsModule,
    ],
    templateUrl: './preview-zoom.template.html',
    styleUrls: ['./preview-zoom.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewZoomComponent {
    @Input()
    public min = 0.5;

    @Input()
    public max = 2;

    @Input()
    public value = 1;

    @Output()
    public readonly valueChange = new EventEmitter<number>();

    @Output()
    public readonly reset = new EventEmitter<void>();

    protected readonly icons = inject(TUI_PREVIEW_ICONS);
    protected readonly zoomTexts$ = inject(TUI_PREVIEW_ZOOM_TEXTS);

    protected readonly hintShow$ = this.valueChange.pipe(
        switchMap(() => merge(of(true), timer(1000).pipe(map(TUI_FALSE_HANDLER)))),
        startWith(false),
    );

    protected get leftButtonDisabled(): boolean {
        return this.value === this.min;
    }

    protected get rightButtonDisabled(): boolean {
        return this.value === this.max;
    }

    protected get collapseVisible(): boolean {
        return this.value > this.min;
    }

    protected onModelChange(value: number): void {
        const clamped = tuiClamp(value, this.min, this.max);

        if (clamped === this.value) {
            return;
        }

        this.value = clamped;
        this.valueChange.emit(clamped);
    }

    protected onReset(): void {
        this.reset.emit();
    }

    protected onMinus(): void {
        this.onModelChange(this.value - STEP);
    }

    protected onPlus(): void {
        this.onModelChange(this.value < 1 ? 1 : this.value + STEP);
    }
}
