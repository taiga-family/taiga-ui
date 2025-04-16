import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import type {TuiSwipeDirection} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MATCHER,
    TUI_WINDOW_SIZE,
    tuiControlValue,
    TuiSwipe,
} from '@taiga-ui/cdk';
import {TuiAutoColorPipe, TuiButton, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiFloating} from '@taiga-ui/kit';
import {
    TuiInputComponent,
    TuiInputModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
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
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiButton,
        TuiFloating,
        TuiInitialsPipe,
        TuiInputModule,
        TuiSheetDialog,
        TuiSwipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TuiInputComponent)
    private readonly input?: TuiInputComponent;

    private readonly size$ = inject(TUI_WINDOW_SIZE);

    protected open = false;

    protected readonly offset = 16;

    protected readonly search = new FormControl('');

    protected readonly users$ = tuiControlValue<string>(this.search).pipe(
        map((search) => USERS.filter((user) => TUI_DEFAULT_MATCHER(user, search))),
    );

    protected readonly height$ = this.size$.pipe(
        map(({height}) => `calc(${height - this.offset}px - 14rem`),
    );

    protected toggle(open: boolean): void {
        this.open = open;

        if (open) {
            this.search.setValue('');
        }
    }

    protected onSwipe(direction: TuiSwipeDirection): void {
        if (direction === 'top') {
            this.scroll();
        }
    }

    protected onFocus(): void {
        this.scroll();
        this.input?.nativeFocusableElement?.focus();
    }

    private scroll(): void {
        const input = this.input?.nativeFocusableElement;
        const container = input?.closest('tui-sheet-dialog');

        if (!container) {
            return;
        }

        container.scrollTop = container.clientHeight;
    }
}
