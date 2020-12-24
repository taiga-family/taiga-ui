import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import {TuiOptionComponent} from '@taiga-ui/core';
import {getWordRange} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

export interface User {
    readonly name: string;
    readonly avatar: string;
    readonly login: string;
}

@Component({
    selector: 'tui-dropdown-selection-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownSelectionExample2 {
    value = 'Type @ to see a dropdown';

    @ViewChildren(TuiOptionComponent, {read: ElementRef})
    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    predicate: TuiBooleanHandler<Range> = range =>
        getWordRange(range).toString().startsWith('@');

    readonly items = [
        {
            name: 'Alexander Inkin',
            avatar,
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    get focused(): true | null {
        return !!this.options.length || null;
    }

    onArrow(event: KeyboardEvent, which: 'first' | 'last') {
        const item = this.options[which];

        if (!item) {
            return;
        }

        event.preventDefault();
        setNativeFocused(item.nativeElement);
    }

    filterItems(textarea: HTMLTextAreaElement): ReadonlyArray<User> {
        const search = this.getCurrentSearch(textarea).replace('@', '');

        return this.getFilteredItems(this.items, search);
    }

    onClick(login: string, textarea: HTMLTextAreaElement) {
        const search = this.getCurrentSearch(textarea);
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        setNativeFocused(textarea);
        textarea.value = value;
        textarea.setSelectionRange(caret, caret);
    }

    private getCurrentSearch(textarea: HTMLTextAreaElement): string {
        return textarea.value.substring(
            textarea.value.indexOf('@'),
            textarea.selectionStart,
        );
    }

    @tuiPure
    private getFilteredItems(
        items: ReadonlyArray<User>,
        search: string,
    ): ReadonlyArray<User> {
        return items.filter(
            ({name, login}) => login.startsWith(search) || name.startsWith(search),
        );
    }
}
