import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiToInt} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
    readonly age: number;
    children?: User[];
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

const DATA: readonly User[] = Array.from({length: 10}, (_, index) => {
    // From 5 to 0 children
    const childrenCount = 5 - (index % 6),
        user = generateUser();

    user.children = Array.from({length: childrenCount}, () => generateUser());

    return user;
});

function getAge(dob: TuiDay): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

function generateUser(): User {
    const dob = TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
        age = getAge(dob),
        name = `${LAST[getRandom(0, 9)]}, ${FIRST[getRandom(0, 9)]}`;

    return {name, dob, age};
}

function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

@Component({
    imports: [TuiButton, TuiChevron, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected columns = ['children', '#', 'name', 'dob', 'age'];
    protected readonly data = DATA;

    protected readonly rowState: Record<number, boolean> = {};

    protected toggleRow(index: number): void {
        this.rowState[index] = !this.rowState[index];
    }
}
