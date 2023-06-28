import {Directive, Inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[pageTab]',
})
export class TuiDocPageTabConnectorDirective {
    @Input()
    pageTab?: string | '';

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    ) {}
}
