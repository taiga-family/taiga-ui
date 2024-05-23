import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[iconGroup]',
})
export class IconsGroupDirective {
    @Input()
    public iconGroup?: string | '';

    public readonly template = inject(TemplateRef);
}
