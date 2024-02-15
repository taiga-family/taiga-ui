import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiAsDataListAccessor, TuiTextfieldSizeDirective} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit/tokens';

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

    constructor() {
        super(inject(TUI_ITEMS_HANDLERS), inject(TuiTextfieldSizeDirective)?.size || 'm');
    }
}
