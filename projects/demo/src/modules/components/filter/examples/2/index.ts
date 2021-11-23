import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface Orerations {
    title: string;
    operations: ReadonlyArray<Oreration>;
}

interface Oreration {
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
    changeDetection,
    encapsulation,
})
export class TuiFilterExample2 {
    identityMatcher: TuiIdentityMatcher<Orerations> = (
        item1: Orerations,
        item2: Orerations,
    ) => item1.title === item2.title;
    items: ReadonlyArray<Orerations> = [
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

    badgeHandler: TuiHandler<Orerations, number> = item => item.operations.length;

    readonly form = new FormGroup({
        filters: new FormControl([
            {
                title: 'Drafts',
            },
        ]),
    });
}
