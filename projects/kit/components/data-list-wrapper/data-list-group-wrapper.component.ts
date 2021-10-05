import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_ACCESSOR, TuiDataListAccessor} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

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
export class TuiDataListGroupWrapperComponent<T>
    extends TuiDataListWrapperComponent<T>
    implements TuiDataListAccessor<T> {
    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<ReadonlyArray<T>> | null = [];

    @Input()
    @tuiDefaultProp()
    labels: readonly string[] = [];
}
