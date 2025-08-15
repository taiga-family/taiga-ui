import {computed, Directive, type Signal, signal} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';

import {type TuiCheckboxRowDirective} from './checkbox-row.directive';

@Directive({
    standalone: true,
    selector: '[tuiTable][ngModel],[tuiTable][formControl],[tuiTable][formControlName]',
    providers: [tuiFallbackValueProvider([])],
})
export class TuiTableControlDirective<T> extends TuiControl<readonly T[]> {
    private readonly children = signal<ReadonlyArray<TuiCheckboxRowDirective<T>>>([]);

    public readonly checked: Signal<boolean> = computed(() =>
        this.children().every((i) => this.value().includes(i.tuiCheckboxRow)),
    );

    public readonly indeterminate = computed(
        () => !!this.value().length && !this.checked(),
    );

    public selectAll(): void {
        this.onChange(this.children().map((item) => item.tuiCheckboxRow));
    }

    public process(checkbox: TuiCheckboxRowDirective<T>): void {
        this.children.update((children) => tuiArrayToggle(children, checkbox));
    }
}
