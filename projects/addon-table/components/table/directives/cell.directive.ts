import {Directive, Inject, Input, TemplateRef} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

/**
 * @deprecated
 * It is required only by {@link TuiTrComponent}. Can be dropped after its deletion.
 * ___
 * TODO v4.0 delete it.
 */
@Directive({
    selector: `[tuiCell]`,
})
export class TuiCellDirective {
    @Input()
    @tuiDefaultProp()
    tuiCell = ``;

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    ) {}
}
