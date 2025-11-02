import {
    computed,
    Directive,
    inject,
    Input,
    type OnDestroy,
    type OnInit,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTableControlDirective} from './table-control.directive';

@Directive({
    selector: '[tuiCheckbox][tuiCheckboxRow]',
    providers: [{provide: NgControl, useClass: NgModel}],
    host: {
        '[checked]': 'checked()',
        '(change)': 'onChange()',
    },
})
export class TuiCheckboxRowDirective<T> implements OnInit, OnDestroy {
    private readonly control = inject(NgControl);
    private readonly parent: TuiTableControlDirective<T> = inject(
        TuiTableControlDirective,
    );

    protected readonly checked = computed((checked = this.parent
        .value()
        .includes(this.tuiCheckboxRow)) => {
        setTimeout(() => this.control.control?.setValue(checked));

        return checked;
    });

    @Input()
    public tuiCheckboxRow!: T;

    public ngOnInit(): void {
        this.parent.process(this);
    }

    public ngOnDestroy(): void {
        this.parent.process(this);
        this.parent.onChange(
            this.parent.value().filter((item) => item !== this.tuiCheckboxRow),
        );
    }

    protected onChange(): void {
        this.parent.onChange(tuiArrayToggle(this.parent.value(), this.tuiCheckboxRow));
    }
}
