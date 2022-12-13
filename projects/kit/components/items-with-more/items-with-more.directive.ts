import {Directive, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Directive({
    selector: `tui-items-with-more`,
})
export class TuiItemsWithMoreDirective {
    @Input()
    @tuiDefaultProp()
    itemsLimit = Infinity;

    @Input()
    @tuiDefaultProp()
    required = -1;
}
