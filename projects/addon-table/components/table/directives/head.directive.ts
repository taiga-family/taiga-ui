import {Directive, inject, input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[tuiHead]',
})
export class TuiTableHead<T extends Partial<Record<keyof T, unknown>>> {
    public readonly tuiHead = input.required<string | keyof T>();

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
