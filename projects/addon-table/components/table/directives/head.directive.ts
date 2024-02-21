import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[tuiHead]',
})
export class TuiHeadDirective<T extends Partial<Record<keyof T, any>>> {
    @Input()
    tuiHead!: keyof T;

    readonly template = inject(TemplateRef<Record<string, unknown>>);
}
