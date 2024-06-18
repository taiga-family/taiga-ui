import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiHead]',
})
export class TuiTableHead<T extends Partial<Record<keyof T, any>>> {
    @Input({required: true})
    public tuiHead: string | keyof T = '';

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
