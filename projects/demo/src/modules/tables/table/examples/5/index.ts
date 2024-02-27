import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComparator} from '@taiga-ui/addon-table';
import {TuiDay, tuiToInt} from '@taiga-ui/cdk';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
}

const TODAY = TuiDay.currentLocal();
const FIRST = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'James',
    'Joan',
    'Jim',
    'Julia',
    'Joe',
    'Julia',
];

const LAST = [
    'Smith',
    'West',
    'Brown',
    'Jones',
    'Davis',
    'Miller',
    'Johnson',
    'Jackson',
    'Williams',
    'Wilson',
];

const DATA: readonly User[] = Array.from({length: 300}, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${
        FIRST[Math.floor(Math.random() * 10)]
    }`,
    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
}));

function getAge({dob}: User): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

@Component({
    selector: 'tui-table-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTableExample5 {
    protected readonly data = DATA;

    protected readonly columns = ['name', 'dob', 'age'];

    protected readonly getAge = getAge;

    protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>
        getAge(a) - getAge(b);
}
