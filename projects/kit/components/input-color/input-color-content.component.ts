import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiSlider} from '@taiga-ui/core/components/slider';

import {TuiInputColorComponent} from './input-color.component';

@Component({
    selector: 'tui-input-color-content',
    imports: [FormsModule, TuiSlider],
    templateUrl: './input-color-content.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-color.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputColorContent {
    protected readonly host = inject(TuiInputColorComponent);
    protected readonly maxAlpha = 255;
    protected readonly hasRgb = computed(() => this.host.value().length >= 7);

    protected readonly opacity = computed(() => {
        if (this.host.format() !== 'hexa' || this.host.value().length !== 9) {
            return this.maxAlpha;
        }

        const parsed = Number.parseInt(this.host.value().slice(-2), 16);

        return Number.isNaN(parsed) ? this.maxAlpha : parsed;
    });

    protected readonly opacityRatio = computed(() =>
        this.hasRgb() ? this.opacity() / this.maxAlpha : 0,
    );

    protected onInput(value: string): void {
        this.host.onChange(
            this.host.format() === 'hex' ? value : `${value}${toHex(this.opacity())}`,
        );
    }

    protected onOpacity(opacity: number): void {
        const value = this.hasRgb() ? this.host.value().slice(0, 7) : '#000000';

        this.host.onChange(`${value}${toHex(opacity)}`);
    }
}

function toHex(value: number): string {
    return value.toString(16).padStart(2, '0');
}
