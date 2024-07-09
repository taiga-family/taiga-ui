import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiAutoColorPipe,
    TuiButton,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCheckbox,
    TuiChip,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        NgForOf,
        FormsModule,
        TuiTable,
        TuiCell,
        TuiCheckbox,
        TuiTitle,
        TuiAvatar,
        TuiInitialsPipe,
        TuiItemsWithMore,
        TuiChip,
        TuiProgressBar,
        TuiButton,
        TuiBadge,
        TuiIcon,
        TuiStatus,
        TuiLink,
        TuiAutoColorPipe,
        TuiDropdown,
        TuiRadioList,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['l', 'm', 's'] as const;

    protected size = this.sizes[0];

    protected readonly data = [
        {
            checkbox: {
                title: 'Data point 1',
                subtitle: 'The first element',
            },
            title: {
                icon: '@tui.file',
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
                color: 'var(--tui-status-positive)',
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
                icon: '@tui.heart',
                title: 'More info',
                chip: 'Chips can be here',
            },
            cell: {
                name: 'Eric Idle',
                email: 'cool@dude.com',
            },
            status: {
                value: 'Failure',
                color: 'var(--tui-status-negative)',
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
                icon: '@tui.star',
                title: 'Wow',
            },
            cell: {
                name: 'Michael Palin',
                email: 'its@man.com',
            },
            status: {
                value: 'Pending',
                color: 'var(--tui-status-warning)',
            },
            items: [],
            progress: 32,
            selected: false,
        },
    ];

    protected get checked(): boolean | null {
        const every = this.data.every(({selected}) => selected);
        const some = this.data.some(({selected}) => selected);

        return every || (some && null);
    }

    protected onCheck(checked: boolean): void {
        this.data.forEach((item) => {
            item.selected = checked;
        });
    }
}
