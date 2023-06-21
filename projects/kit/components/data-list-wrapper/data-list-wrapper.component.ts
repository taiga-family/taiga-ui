import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListAccessor,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {AbstractTuiDataListWrapper} from './data-list-wrapper';

@Component({
    selector: 'tui-data-list-wrapper:not([labels])',
    templateUrl: './data-list-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListAccessor(TuiDataListWrapperComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiDataListWrapperComponent<T> extends AbstractTuiDataListWrapper<T> {
    @Input()
    items: readonly T[] | null = [];

    constructor(
        @Inject(TUI_ITEMS_HANDLERS) itemsHandlers: TuiItemsHandlers<T>,
        @Optional()
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        controller: TuiTextfieldController | null,
    ) {
        super(itemsHandlers, controller?.size || 'm');
    }
}
