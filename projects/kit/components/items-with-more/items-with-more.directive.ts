import {Directive, Input} from '@angular/core';
import {AbstractTuiController} from '@taiga-ui/cdk/classes';

@Directive({
    standalone: true,
})
export class TuiItemsWithMoreDirective extends AbstractTuiController {
    @Input()
    public itemsLimit = Infinity;

    @Input()
    public required = -1;
}
