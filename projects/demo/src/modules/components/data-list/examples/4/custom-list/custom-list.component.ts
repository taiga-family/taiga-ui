import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {EMPTY_ARRAY, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiDataListComponent, tuiIsEditingKey} from '@taiga-ui/core';

interface Items<T> {
    readonly items: readonly T[];
    readonly name: string;
}

@Component({
    selector: 'custom-list',
    templateUrl: './custom-list.template.html',
    changeDetection,
})
export class CustomListComponent<T> {
    @Input()
    public items: ReadonlyArray<Items<T>> = [];

    protected value = '';

    protected readonly all = EMPTY_ARRAY;

    protected readonly filter = TUI_DEFAULT_MATCHER;

    protected onArrowDown<T>(list: TuiDataListComponent<T>, event: Event): void {
        list.onFocus(event, true);
    }

    protected onKeyDown(key: string, element: HTMLElement | null): void {
        if (element && tuiIsEditingKey(key)) {
            element.focus({preventScroll: true});
        }
    }
}
