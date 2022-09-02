import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiPickerService} from '@taiga-ui/addon-editor/services';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: `tui-linear-multi-picker`,
    templateUrl: `./linear-multi-picker.template.html`,
    styleUrls: [`./linear-multi-picker.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiLinearMultiPickerComponent {
    @Input()
    @tuiDefaultProp()
    value = [0, 1];

    @Output()
    readonly valueChange = new EventEmitter<number[]>();

    @Output()
    readonly indexChange = new EventEmitter<number>();

    index = NaN;

    constructor(@Inject(TuiPickerService) point$: TuiPickerService) {
        point$.subscribe(([x]) => {
            this.onPicker(x);
        });
    }

    @HostListener(`document:mouseup`)
    onMouseUp(): void {
        this.index = NaN;
    }

    onMouseDown(index: number): void {
        this.updateIndex(index);
    }

    onClick(index: number): void {
        if (this.value.length > 2) {
            this.updateValue(this.value.filter((_, i) => i !== index));
        }
    }

    private onPicker(x: number): void {
        if (isNaN(this.index)) {
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
