import {Directive, Input} from '@angular/core';

/**
 * Blank directive to query for {@link TemplateRef}
 */
@Directive({
    selector: 'ng-template[tuiItem]',
})
export class TuiItemDirective {
    @Input()
    tuiItem: unknown;
}
