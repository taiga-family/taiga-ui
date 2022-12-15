import {Directive, Input} from '@angular/core';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: `tui-items-with-more`,
})
export class TuiItemsWithMoreDirective extends AbstractTuiController {
    @Input()
    @tuiDefaultProp()
    itemsLimit = Infinity;

    @Input()
    @tuiDefaultProp()
    required = -1;
}
