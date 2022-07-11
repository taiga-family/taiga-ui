import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {TUI_DATA_LIST_ACCESSOR} from '@taiga-ui/core/tokens';

import {AbstractTuiDataListWrapper} from './data-list-wrapper';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_DATA_LIST_ACCESSOR,
            useExisting: forwardRef(() => TuiDataListGroupWrapperComponent),
        },
    ],
})
export class TuiDataListGroupWrapperComponent<T> extends AbstractTuiDataListWrapper<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[][] | null = [];

    @Input()
    @tuiDefaultProp()
    labels: readonly string[] = [];
}
