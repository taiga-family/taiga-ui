import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    selector: '[iconGroup]',
})
export class IconsGroupDirective {
    @Input()
    iconGroup?: string | '';

    readonly template = inject(TemplateRef);
}
