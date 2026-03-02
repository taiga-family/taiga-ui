import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

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

    protected readonly matcher: TuiStringMatcher<string> = (item, query) => {
        const romanNumeral = item.split(' ').at(-1)!;

        return (
            query === ROMAN_TO_LATIN[romanNumeral] ||
            item.toLowerCase().includes(query.toLowerCase())
        );
    };
}
`;export{r as default};
