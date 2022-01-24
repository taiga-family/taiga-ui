import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({
    selector: `ng-template[tuiFile]`,
})
export class TuiFileDirective {
    constructor(@Inject(TemplateRef) readonly template: TemplateRef<{}>) {}
}
