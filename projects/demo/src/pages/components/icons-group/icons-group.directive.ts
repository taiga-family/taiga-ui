import {Directive, inject, input, TemplateRef} from '@angular/core';

@Directive({selector: '[iconGroup]'})
export class IconsGroupTemplate {
    public readonly iconGroup = input<string>();

    public readonly template = inject(TemplateRef);
}
