import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    provideTuiFilterHandler,
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    type TuiFilterByInputHandler,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

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
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [provideTuiFilterHandler(TUI_CONTINUE_FILTERING_HANDLER)],
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected value = null;
}
