import {computed, Directive, type Signal, signal} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';

import {type TuiCheckboxRowDirective} from './checkbox-row.directive';

@Directive({
    selector:
        '[tuiTable][ngModel],[tuiTable][formControl],[tuiTable][formControlName],[tuiTable][formField]',
    providers: [tuiFallbackValueProvider([])],
})
export class TuiTableControlDirective<T> extends TuiControl<readonly T[]> {
    private readonly children = signal<ReadonlyArray<TuiCheckboxRowDirective<T>>>([]);

    private readonly enabled: Signal<ReadonlyArray<TuiCheckboxRowDirective<T>>> =
        computed(() => this.children().filter((i) => !i.disabled()));

    public readonly checked: Signal<boolean> = computed(
        () =>
            !!this.enabled().length &&
            this.enabled().every((i) => this.value().includes(i.tuiCheckboxRow())),
    );

    public readonly indeterminate: Signal<boolean> = computed(
        () => !!this.value().length && !this.checked(),
    );

    public toggleAll(): void {
        this.onChange(
            this.children()
                .filter((i) =>
                    i.disabled()
                        ? this.value().includes(i.tuiCheckboxRow())
                        : !this.checked(),
                )
                .map((i) => i.tuiCheckboxRow()),
        );
    }

    public process(checkbox: TuiCheckboxRowDirective<T>): void {
        this.children.update((children) => tuiArrayToggle(children, checkbox));
    }
}
