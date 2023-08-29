import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';

interface Operations {
    operations: readonly Operation[];
    title: string;
}

interface Operation {
    amount: number;
}

const COMPLETED = {
    operations: [
        {
            amount: 100,
        },
        {
            amount: 200,
        },
    ],
    title: 'Done',
};

@Component({
    selector: 'tui-filter-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample2 {
    readonly form = new FormGroup({
        filters: new FormControl([
            {
                title: 'Drafts',
            },
        ]),
    });

    items: readonly Operations[] = [
        COMPLETED,
        {
            operations: [
                {
                    amount: 100,
                },
                {
                    amount: 200,
                },
                {
                    amount: 100,
                },
                {
                    amount: 100,
                },
            ],
            title: 'Drafts',
        },
        {
            operations: [],
            title: 'For sign',
        },
        {
            operations: [
                {
                    amount: 100,
                },
                {
                    amount: 200,
                },
                {
                    amount: 100,
                },
                {
                    amount: 200,
                },
                {
                    amount: 100,
                },
                {
                    amount: 200,
                },
            ],
            title: 'Queue',
        },
    ];

    identityMatcher: TuiIdentityMatcher<Operations> = (
        item1: Operations,
        item2: Operations,
    ) => item1.title === item2.title;

    badgeHandler: TuiHandler<Operations, number> = item => item.operations.length;
}
