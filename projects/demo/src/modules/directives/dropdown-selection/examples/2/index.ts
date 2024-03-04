import {
    Component,
    ElementRef,
    type QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {EMPTY_QUERY, type TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import {TuiDriver, tuiGetWordRange, TuiOptionComponent} from '@taiga-ui/core';
import {type Observable} from 'rxjs';

export interface User {
    readonly avatar: string;
    readonly login: string;
    readonly name: string;
}

@Component({
    selector: 'tui-dropdown-selection-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownSelectionExample2 {
    @ViewChildren(TuiOptionComponent, {read: ElementRef})
    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiDriver)
    protected readonly driver?: Observable<boolean>;

    protected value = 'Type @ to see a dropdown';

    protected readonly items = [
        {
            name: 'Alexander Inkin',
            avatar: assets`/images/avatar.jpg`,
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    protected predicate: TuiBooleanHandler<Range> = range =>
        tuiGetWordRange(range).toString().startsWith('@');

    protected onArrow(event: Event, which: 'first' | 'last'): void {
        const item = this.options[which];

        if (!item) {
            return;
        }

        event.preventDefault();
        item.nativeElement.focus();
    }

    protected filterItems(textarea: HTMLTextAreaElement): readonly User[] {
        const search = this.getCurrentSearch(textarea).replace('@', '');

        return this.getFilteredItems(this.items, search);
    }

    protected onClick(login: string, textarea: HTMLTextAreaElement): void {
        const search = this.getCurrentSearch(textarea);
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        textarea.focus();
        textarea.value = value;
        textarea.setSelectionRange(caret, caret);
    }

    @tuiPure
    private getFilteredItems(items: readonly User[], search: string): readonly User[] {
        return items.filter(
            ({name, login}) => login.startsWith(search) || name.startsWith(search),
        );
    }

    private getCurrentSearch(textarea: HTMLTextAreaElement): string {
        return textarea.value.slice(textarea.value.indexOf('@'), textarea.selectionStart);
    }
}
