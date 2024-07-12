import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-table-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTableExample2 {
    readonly sizes = ['l', 'm', 's'] as const;

    size = this.sizes[0];

    readonly data = [
        {
            checkbox: {
                title: 'Data point 1',
                subtitle: 'The first element',
            },
            title: {
                icon: 'tuiIconFile',
                title: 'This is title',
                chip: 'Chip',
                subtitle: 'More information ・ Data',
            },
            cell: {
                name: 'John Cleese',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Success',
                color: 'var(--tui-success-fill)',
            },
            items: ['Some', 'items', 'displayed', 'here', 'and', 'can', 'overflow'],
            progress: 78,
            selected: false,
        },
        {
            checkbox: {
                title: 'Some title',
                subtitle: 'Some more text',
            },
            title: {
                icon: 'tuiIconHeart',
                title: 'More info',
                chip: 'Chips can be here',
            },
            cell: {
                name: 'Eric Idle',
                email: 'cool@dude.com',
            },
            status: {
                value: 'Failure',
                color: 'var(--tui-error-fill)',
            },
            items: ['One', 'Item'],
            progress: 91,
            selected: false,
        },
        {
            checkbox: {
                title: 'And now',
                subtitle: 'Completely different',
            },
            title: {
                icon: 'tuiIconStar',
                title: 'Wow',
            },
            cell: {
                name: 'Michael Palin',
                email: 'its@man.com',
            },
            status: {
                value: 'Pending',
                color: 'var(--tui-warning-fill)',
            },
            items: [],
            progress: 32,
            selected: false,
        },
    ];

    get checked(): boolean | null {
        const every = this.data.every(({selected}) => selected);
        const some = this.data.some(({selected}) => selected);

        return every || (some && null);
    }

    onCheck(checked: boolean): void {
        this.data.forEach(item => {
            item.selected = checked;
        });
    }
}
