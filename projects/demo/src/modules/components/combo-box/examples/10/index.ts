import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TUI_FILTER_BY_INPUT_HANDLER,
    TuiChevron,
    TuiComboBox,
    type TuiFilterByInputHandler,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {map, type Observable} from 'rxjs';

export const TUI_CONTINUE_FILTERING_HANDLER: TuiFilterByInputHandler = <T>(
    items: ReadonlyArray<readonly T[]> | readonly T[] | null,
    matcher: TuiStringMatcher<T>,
    query: string,
): ReadonlyArray<readonly T[]> | readonly T[] | null => {
    if (!items || !query) {
        return items;
    }

    return (items as readonly T[]).filter((item) => matcher(item, query, String));
};

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiLet,
        TuiScrollable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FILTER_BY_INPUT_HANDLER,
            useValue: TUI_CONTINUE_FILTERING_HANDLER,
        },
    ],
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value = null;
}
