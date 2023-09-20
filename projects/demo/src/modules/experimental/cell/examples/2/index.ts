import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-cell-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCellExample2 {
    readonly transactions = [
        {
            user: 'Alex Inkin',
            userAvatarUrl: 'https://github.com/waterplea.png?size=100',
            amount: 1_000.99,
            date: new Date(2023, 1, 1),
            comment: '',
        },
        {
            user: 'Vladimir Potekhin',
            userAvatarUrl: 'https://github.com/vladimirpotekhin.png?size=100',
            amount: -0.15,
            date: null,
            comment: '',
        },
        {
            user: 'Roman Sedov',
            userAvatarUrl: 'https://github.com/marsibarsi.png?size=100',
            amount: 100_500,
            date: null,
            comment: 'Salary',
        },
        {
            user: 'Maksim Ivanov',
            userAvatarUrl: 'https://github.com/splincode.png?size=100',
            amount: -99.99,
            date: new Date(2018, 4, 6),
            comment: 'Main account',
        },
        {
            user: 'Nikita Barsukov',
            userAvatarUrl: 'https://github.com/nsbarsukov.png?size=100',
            amount: 42,
            date: new Date(2010, 2, 23),
            comment: 'Happy birthday!',
        },
    ] as const;
}
