import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {Component, ElementRef, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {EMPTY_QUERY, tuiPure} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDriver,
    TuiDropdown,
    tuiGetWordRange,
    TuiInitialsPipe,
    TuiOption,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiTextareaModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';

export interface User {
    readonly avatar: string;
    readonly login: string;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        TuiTextareaModule,
        TuiDropdown,
        FormsModule,
        AsyncPipe,
        TuiDataList,
        NgIf,
        NgForOf,
        TuiAvatarComponent,
        TuiInitialsPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChildren(TuiOption, {read: ElementRef})
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
