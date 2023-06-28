import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {tuiAsDataListAccessor, TuiTextfieldSizeDirective} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {AbstractTuiDataListWrapper} from './data-list-wrapper';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
})
export class TuiDataListGroupWrapperComponent<T> extends AbstractTuiDataListWrapper<T> {
    @Input()
    items: readonly T[][] | null = [];

    @Input()
    labels: readonly string[] = [];

    constructor(
        @Inject(TUI_ITEMS_HANDLERS) itemsHandlers: TuiItemsHandlers<T>,
        @Optional()
        @Inject(TuiTextfieldSizeDirective)
        controller: TuiTextfieldSizeDirective | null,
    ) {
        super(itemsHandlers, controller?.size || 'm');
    }
}
