import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSlider} from '@taiga-ui/core/components/slider';

import {TuiInputColorComponent} from './input-color.component';

@Component({
    selector: 'tui-input-color-content',
    imports: [FormsModule, TuiSlider],
    templateUrl: './input-color-content.template.html',
    styleUrl: './input-color.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputColorContent {
    protected readonly color = inject(TuiInputColorComponent);

    protected readonly filled = computed(() =>
        this.color.format() === 'hex'
            ? this.color.value().length === 7
            : this.color.value().length === 9,
    );

    protected readonly opacity = computed(() =>
        this.filled() && this.color.format() === 'hexa'
            ? Number.parseInt(this.color.value().slice(-2), 16)
            : 255,
    );

    protected onInput(value: string): void {
        this.color.onChange(
            this.color.format() === 'hex' ? value : `${value}${toHex(this.opacity())}`,
        );
    }

    protected onOpacity(opacity: number): void {
        const value = this.filled() ? this.color.value().slice(0, 7) : '#000000';

        this.color.onChange(`${value}${toHex(opacity)}`);
    }
}

function toHex(value: number): string {
    return value.toString(16).padStart(2, '0');
}
