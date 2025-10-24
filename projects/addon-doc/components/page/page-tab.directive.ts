import {Directive, inject, input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'ng-template[pageTab]',
})
export class TuiDocPageTabConnector {
    public readonly pageTab = input<string>();

    public readonly template = inject(TemplateRef<Record<string, unknown>>);
}
