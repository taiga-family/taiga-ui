import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {tuiAsDataListAccessor} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {AbstractTuiDataListWrapper} from './data-list-wrapper';

@Component({
    selector: `tui-data-list-wrapper:not([labels])`,
    templateUrl: `./data-list-wrapper.template.html`,
    styleUrls: [`./data-list-wrapper.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
})
export class TuiDataListWrapperComponent<T> extends AbstractTuiDataListWrapper<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[] | null = [];

    constructor(@Inject(TUI_ITEMS_HANDLERS) itemsHandlers: TuiItemsHandlers<T>) {
        super(itemsHandlers);
    }
}
