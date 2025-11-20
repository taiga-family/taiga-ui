import"./chunk-42JZD6NG.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, tuiControlValue} from '@taiga-ui/cdk';
import {TuiAutoColorPipe, TuiButton, TuiInitialsPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer} from '@taiga-ui/kit';
import {map} from 'rxjs';

const USERS = [
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith',
    'John Johnson',
    'Jane Johnson',
    'John Williams',
    'Jane Williams',
    'John Brown',
    'Jane Brown',
    'John Davis',
    'Jane Davis',
    'John Miller',
    'Jane Miller',
    'John Wilson',
    'Jane Wilson',
];

@Component({
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiButton,
        TuiFloatingContainer,
        TuiInitialsPipe,
        TuiSheetDialog,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly offset = 16;

    protected readonly search = new FormControl('');

    protected readonly users$ = tuiControlValue<string>(this.search).pipe(
        map((search) => USERS.filter((user) => TUI_DEFAULT_MATCHER(user, search))),
    );

    protected toggle(open: boolean): void {
        this.open = open;

        if (open) {
            this.search.setValue('');
        }
    }
}
`;export{i as default};
