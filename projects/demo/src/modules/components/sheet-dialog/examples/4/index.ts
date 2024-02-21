import {Component, inject, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_DEFAULT_MATCHER,
    TUI_WINDOW_SIZE,
    tuiControlValue,
    TuiSwipeDirection,
} from '@taiga-ui/cdk';
import {TuiInputComponent} from '@taiga-ui/kit';
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
    selector: 'tui-sheet-dialog-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetDialogExample4 {
    @ViewChild(TuiInputComponent)
    private readonly input?: TuiInputComponent;

    private readonly size$ = inject(TUI_WINDOW_SIZE);

    open = false;

    readonly offset = 16;

    readonly search = new FormControl('');

    readonly users$ = tuiControlValue<string>(this.search).pipe(
        map(search => USERS.filter(user => TUI_DEFAULT_MATCHER(user, search))),
    );

    readonly height$ = this.size$.pipe(
        map(({height}) => `calc(${height - this.offset}px - 14rem`),
    );

    toggle(open: boolean): void {
        this.open = open;

        if (open) {
            this.search.setValue('');
        }
    }

    onSwipe(direction: TuiSwipeDirection): void {
        if (direction === 'top') {
            this.scroll();
        }
    }

    onFocus(): void {
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
