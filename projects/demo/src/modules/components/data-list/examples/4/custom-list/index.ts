import {NgForOf, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    TuiFilterPipe,
    TuiLetDirective,
} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    tuiIsEditingKey,
    TuiOptGroupDirective,
    TuiOptionComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

interface Items<T> {
    readonly items: readonly T[];
    readonly name: string;
}

@Component({
    standalone: true,
    selector: 'custom-list',
    imports: [
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgIf,
        TuiOptionComponent,
        NgForOf,
        TuiLetDirective,
        TuiFilterPipe,
        TuiMultiSelectModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class CustomListComponent<T> {
    protected value = '';
    protected readonly all = EMPTY_ARRAY;
    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;

    @Input()
    public items: ReadonlyArray<Items<T>> = [];

    protected onKeyDown(key: string, element: HTMLElement | null): void {
        if (element && tuiIsEditingKey(key)) {
            element.focus({preventScroll: true});
        }
    }
}
