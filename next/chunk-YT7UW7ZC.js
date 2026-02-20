import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {
    TUI_FLUID_TYPOGRAPHY_OPTIONS,
    TuiFluidTypography,
    TuiInputRange,
} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiFluidTypography, TuiInput, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);

    protected value = 'I am a very long value';
    protected range = signal([this.options.min * 16, this.options.max * 16]);
    protected scale = computed<[number, number]>(() => [
        (this.range()[0] ?? 0) / 16,
        (this.range()[1] ?? 0) / 16,
    ]);
}
`;export{o as default};
