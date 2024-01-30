import {Directive, Inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: 'ng-template[tuiCell]',
})
export class TuiCellDirective {
    @Input()
    tuiCell = '';

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    ) {}
}
