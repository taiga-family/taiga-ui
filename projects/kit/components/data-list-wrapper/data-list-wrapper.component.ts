import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListAccessor,
} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';

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
    public items: readonly T[] | null = [];

    constructor() {
        super(
            inject(TUI_ITEMS_HANDLERS),
            inject(TUI_TEXTFIELD_WATCHED_CONTROLLER, {optional: true})?.size || 'm',
        );
    }
}
