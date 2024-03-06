import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';

interface Operations {
    operations: readonly Operation[];
    title: string;
}

interface Operation {
    amount: number;
}

const COMPLETED = {
    title: 'Done',
    operations: [
        {
            amount: 100,
        },
        {
            amount: 200,
        },
    ],
};

@Component({
    selector: 'tui-filter-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFilterExample2 {
    protected readonly form = new FormGroup({
        filters: new FormControl([
            {
                title: 'Drafts',
            },
        ]),
    });

    protected items: readonly Operations[] = [
        COMPLETED,
        {
            title: 'Drafts',
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
        },
        {
            title: 'For sign',
            operations: [],
        },
        {
            title: 'Queue',
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
        },
    ];

    protected identityMatcher: TuiIdentityMatcher<Operations> = (
        item1: Operations,
        item2: Operations,
    ) => item1.title === item2.title;

    protected badgeHandler: TuiHandler<Operations, number> = item =>
        item.operations.length;
}
