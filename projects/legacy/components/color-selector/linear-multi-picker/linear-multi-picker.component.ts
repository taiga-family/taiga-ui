import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {TuiPickerService} from '../services/picker.service';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-linear-multi-picker',
    templateUrl: './linear-multi-picker.template.html',
    styleUrls: ['./linear-multi-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiLinearMultiPickerComponent {
    @Input()
    public value = [0, 1];

    @Output()
    public readonly valueChange = new EventEmitter<number[]>();

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    public index = NaN;

    constructor() {
        inject(TuiPickerService)
            .pipe(takeUntilDestroyed())
            .subscribe(([x]) => this.onPicker(x));
    }

    @HostListener('document:mouseup')
    public onMouseUp(): void {
        this.index = NaN;
    }

    public onMouseDown(index: number): void {
        this.updateIndex(index);
    }

    public onClick(index: number): void {
        if (this.value.length > 2) {
            this.updateValue(this.value.filter((_, i) => i !== index));
        }
    }

    private onPicker(x: number): void {
        if (Number.isNaN(this.index)) {
            this.updateIndex(this.value.length);
            this.value = [...this.value, 0];
        }

        if (this.value.some((item, index) => item === x && index !== this.index)) {
            return;
        }

        this.updateValue(
            this.value.map((item, index) => (index === this.index ? x : item)),
        );
    }

    private updateIndex(index: number): void {
        this.index = index;
        this.indexChange.emit(index);
    }

    private updateValue(value: number[]): void {
        this.value = value;
        this.valueChange.emit(value);
    }
}
