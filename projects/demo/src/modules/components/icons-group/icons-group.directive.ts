import {Directive, inject, input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[iconGroup]',
})
export class IconsGroupTemplate {
    public readonly iconGroup = input<string>();

    public readonly template = inject(TemplateRef);
}
