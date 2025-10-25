import {Directive, inject, input, TemplateRef} from '@angular/core';

@Directive({
    selector: 'ng-template[tuiCell]',
})
export class TuiTableCell {
    public readonly tuiCell = input('');

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
