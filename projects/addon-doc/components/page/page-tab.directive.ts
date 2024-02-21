import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[pageTab]',
})
export class TuiDocPageTabConnectorDirective {
    @Input()
    pageTab?: string | '';

    readonly template = inject(TemplateRef<Record<string, unknown>>);
}
