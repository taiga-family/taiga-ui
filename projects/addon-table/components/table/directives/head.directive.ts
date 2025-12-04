import {Directive, inject, input, TemplateRef} from '@angular/core';
import {tuiTableOptionsProvider} from '@taiga-ui/addon-table/components';

@Directive({
    selector: '[tuiHead]',
    providers: [tuiTableOptionsProvider({sticky: true})],
})
export class TuiTableHead<T extends Partial<Record<keyof T, unknown>>> {
    public readonly tuiHead = input.required<string | keyof T>();

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
