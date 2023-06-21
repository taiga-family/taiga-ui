import {Directive, Inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[iconGroup]',
})
export class IconsGroupDirective {
    @Input()
    iconGroup?: string | '';

    constructor(@Inject(TemplateRef) readonly template: TemplateRef<unknown>) {}
}
