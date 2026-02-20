import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler, type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiFilter} from '@taiga-ui/kit';

interface Operations {
    operations: readonly Operation[];
    title: string;
}

interface Operation {
    amount: number;
}

const COMPLETED = {
    title: 'Done',
    operations: [{amount: 100}, {amount: 200}],
};

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        filters: new FormControl([{title: 'Drafts'}]),
    });

    protected items: readonly Operations[] = [
        COMPLETED,
        {
            title: 'Drafts',
            operations: [{amount: 100}, {amount: 200}, {amount: 100}, {amount: 100}],
        },
        {
            title: 'For sign',
            operations: [],
        },
        {
            title: 'Queue',
            operations: [
                {amount: 100},
                {amount: 200},
                {amount: 100},
                {amount: 200},
                {amount: 100},
                {amount: 200},
            ],
        },
    ];

    protected identityMatcher: TuiIdentityMatcher<Operations> = (
        item1: Operations,
        item2: Operations,
    ) => item1.title === item2.title;

    protected badgeHandler: TuiHandler<Operations, number> = (item) =>
        item.operations.length;
}
`;export{o as default};
