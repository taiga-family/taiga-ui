import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import {TuiOptionComponent} from '@taiga-ui/core';
import {tuiGetWordRange} from '@taiga-ui/kit';

export interface User {
    readonly name: string;
    readonly avatar: string;
    readonly login: string;
}

@Component({
    selector: `tui-dropdown-selection-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDropdownSelectionExample2 {
    @ViewChildren(TuiOptionComponent, {read: ElementRef})
    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    value = `Type @ to see a dropdown`;

    readonly items = [
        {
            name: `Alexander Inkin`,
            avatar: assets`/images/avatar.jpg`,
            login: `a.inkin`,
        },
        {
            name: `Roman Sedov`,
            avatar: ``,
            login: `r.sedov`,
        },
    ];

    get focused(): true | null {
        return !!this.options.length || null;
    }

    predicate: TuiBooleanHandler<Range> = range =>
        tuiGetWordRange(range).toString().startsWith(`@`);

    onArrow(event: Event, which: 'first' | 'last'): void {
        const item = this.options[which];

        if (!item) {
            return;
        }

        event.preventDefault();
        setNativeFocused(item.nativeElement);
    }

    filterItems(textarea: HTMLTextAreaElement): readonly User[] {
        const search = this.getCurrentSearch(textarea).replace(`@`, ``);

        return this.getFilteredItems(this.items, search);
    }

    onClick(login: string, textarea: HTMLTextAreaElement): void {
        const search = this.getCurrentSearch(textarea);
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        setNativeFocused(textarea);
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
        return textarea.value.slice(textarea.value.indexOf(`@`), textarea.selectionStart);
    }
}
