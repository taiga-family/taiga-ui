import {NgIf} from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiOption} from '@taiga-ui/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'custom-option',
    imports: [NgIf, PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="content" />
        <ng-container *ngIf="selected">←</ng-container>
    `,
    encapsulation,
    changeDetection,
    host: {
        '[style.font-weight]': 'selected ? "bold" : null',
    },
})
export class Option<T> {
    private readonly option = inject(TuiOption<T>);
    protected readonly content = inject(PolymorpheusOutlet).context.$implicit;

    @Input({required: true})
    public checkedItemHandler!: TuiBooleanHandler<T>;

    protected get selected(): boolean {
        return (
            tuiIsPresent(this.option.value) && this.checkedItemHandler(this.option.value)
        );
    }
}
