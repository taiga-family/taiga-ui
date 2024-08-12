import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_FLUID_TYPOGRAPHY_OPTIONS, TuiFluidTypography} from '@taiga-ui/kit';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTextfield, TuiFluidTypography, FormsModule, TuiInputRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);

    protected value = 'I am a very long value';
    protected range = signal([this.options.min * 16, this.options.max * 16]);
    protected scale = computed<[number, number]>(() => [
        this.range()[0] / 16,
        this.range()[1] / 16,
    ]);
}
