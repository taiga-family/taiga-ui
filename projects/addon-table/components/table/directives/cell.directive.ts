import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiCell]',
})
export class TuiTableCell {
    @Input()
    public tuiCell = '';

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
