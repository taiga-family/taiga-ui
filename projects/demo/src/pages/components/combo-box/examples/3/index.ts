import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, TUI_STRICT_MATCHER} from '@taiga-ui/cdk';
import {type TuiFilterByInputOptions, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

const ROMAN_TO_LATIN: Record<string, string> = {
    I: '1',
    II: '2',
    III: '3',
    IV: '4',
    V: '5',
    VI: '6',
    VII: '7',
    VIII: '8',
};

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Charles III',
        'Elizabeth II',
        'George VI',
        'Edward VIII',
        'George V',
        'William IV',
        'George IV',
        'George III',
    ];

    protected value: string | null = null;

    protected readonly filter: TuiFilterByInputOptions<string>['filter'] = (
        items,
        query,
    ) => {
        const filtered = items.filter((item) => {
            const romanNumeral = item.split(' ').at(-1)!;

            return (
                query === ROMAN_TO_LATIN[romanNumeral] || TUI_DEFAULT_MATCHER(item, query)
            );
        });

        /**
         * Query "George V" EXACTLY matches one option,
         * but it also PARTIALLY matches another option "George VI"
         * We should continue filtering for such ambiguous cases
         */
        return filtered.length === 1 && TUI_STRICT_MATCHER(filtered[0], query)
            ? items // Reset filtering
            : filtered;
    };
}
