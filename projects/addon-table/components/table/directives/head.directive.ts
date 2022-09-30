import {Directive, Inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: `[tuiHead]`,
})
export class TuiHeadDirective<T extends Partial<Record<keyof T, any>>> {
    @Input()
    tuiHead!: keyof T;

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    ) {}
}
