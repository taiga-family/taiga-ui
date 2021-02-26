import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiCell]',
})
export class TuiCellDirective<T, K extends keyof T> {
    @Input()
    @tuiDefaultProp()
    tuiCell!: K | string;

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<{}>) {}
}
