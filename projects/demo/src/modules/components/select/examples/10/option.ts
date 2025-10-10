import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiOptionWithValue} from '@taiga-ui/core';
import {tuiInjectValue} from '@taiga-ui/kit';

@Component({
    standalone: true,
    template: '<span>{{selected() ? "←" : ""}}</span>',
    styles: ':host {flex-direction: row-reverse; justify-content: start}',
    encapsulation,
    changeDetection,
    host: {
        '[style.font-weight]': 'selected() ? "bold" : null',
    },
})
export class Option<T> {
    private readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue);
    private readonly value = tuiInjectValue<T>();

    protected selected = computed(() => this.value() === this.option.value());
}
