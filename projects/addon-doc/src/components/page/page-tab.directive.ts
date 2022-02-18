import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: '[pageTab]',
})
export class TuiDocPageTabConnectorDirective {
    @Input()
    @tuiDefaultProp()
    pageTab?: string | '';

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<{}>) {}
}
