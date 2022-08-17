import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: `[iconGroup]`,
})
export class IconsGroupDirective {
    @Input()
    @tuiDefaultProp()
    iconGroup?: string | '';

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<unknown>) {}
}
