import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'ng-template[pageTab]',
})
export class TuiDocPageTabConnectorDirective {
    @Input()
    public pageTab?: string | '';

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
