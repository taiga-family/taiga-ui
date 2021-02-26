import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: '[tuiCell]',
})
export class TuiCellDirective {
    @Input()
    @tuiDefaultProp()
    tuiCell = '';

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<{}>) {}
}
