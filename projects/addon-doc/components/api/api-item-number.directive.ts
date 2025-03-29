import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'tr[tuiDocAPIItem][type=number]',
})
export class TuiDocAPINumberItem {
    @Input()
    public min: number | null = null;

    @Input()
    public max: number | null = null;
}
