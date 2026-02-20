import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiBooleanHandler, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Character {
    id: number;
    name: string;
}

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiDataListWrapper, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly control = new FormControl(null);
    protected items: readonly Character[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected stringify: TuiStringHandler<Character> = (item) => item.name;
    protected readonly disabledItemHandler: TuiBooleanHandler<Character> = (item) =>
        item.name === 'Darth Vader';
}
`;export{t as default};
