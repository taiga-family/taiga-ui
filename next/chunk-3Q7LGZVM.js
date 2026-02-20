import"./chunk-HU6DUUP4.js";var t=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiFilter} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({filters: new FormControl(['Food'])});

    protected readonly items = [
        'News',
        'Food',
        'Clothes',
        'Popular',
        'Goods',
        'Furniture',
        'Tech',
        'Building materials',
    ];

    protected disabledItemHandler: TuiBooleanHandler<string> = (item) => item.length < 7;
}
`;export{t as default};
