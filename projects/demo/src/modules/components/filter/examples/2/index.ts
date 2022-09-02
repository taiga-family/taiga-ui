import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';

interface Orerations {
    title: string;
    operations: readonly Oreration[];
}

interface Oreration {
    amount: number;
}

const COMPLETED = {
    title: `Done`,
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
    selector: `tui-filter-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample2 {
    readonly form = new FormGroup({
        filters: new FormControl([
            {
                title: `Drafts`,
            },
        ]),
    });

    items: readonly Orerations[] = [
        COMPLETED,
        {
            title: `Drafts`,
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
            title: `For sign`,
            operations: [],
        },
        {
            title: `Queue`,
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

    identityMatcher: TuiIdentityMatcher<Orerations> = (
        item1: Orerations,
        item2: Orerations,
    ) => item1.title === item2.title;

    badgeHandler: TuiHandler<Orerations, number> = item => item.operations.length;
}
