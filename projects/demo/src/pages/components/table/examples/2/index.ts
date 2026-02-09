import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiChip,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiChip,
        TuiDropdown,
        TuiIcon,
        TuiInitialsPipe,
        TuiItemGroup,
        TuiItemsWithMore,
        TuiLink,
        TuiProgressBar,
        TuiRadioList,
        TuiStatus,
        TuiTable,
        TuiTableControl,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['l', 'm', 's'] as const;

    protected size = this.sizes[0];
    protected selected = [];

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
        },
    ];
}
