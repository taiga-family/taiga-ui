import {Directive, input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tr[tuiDocAPIItem][type=number]',
})
export class TuiDocAPINumberItem {
    public readonly min = input<number | null>(null);

    public readonly max = input<number | null>(null);
}
