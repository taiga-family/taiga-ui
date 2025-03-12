import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiControl} from '@taiga-ui/cdk';
import {TuiDropdownOpen, tuiInjectAuxiliary, TuiOptionWithValue} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'custom-option',
    template: '{{selected() ? "←" : ""}}',
    styles: [':host {flex-direction: row-reverse}'],
    encapsulation,
    changeDetection,
    host: {
        '[style.font-weight]': 'selected() ? "bold" : null',
        '(click)': 'onClick()',
    },
})
export class Option<T> {
    private readonly dropdown = inject(TuiDropdownOpen);
    private readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue);
    private readonly control = tuiInjectAuxiliary<TuiControl<T | null>>(
        (x) => x instanceof TuiControl,
    );

    protected selected = computed(() => this.control()?.value() === this.option.value());

    protected onClick(): void {
        this.control()?.onChange(this.option.value() ?? null);
        this.dropdown.toggle(false);
    }
}
