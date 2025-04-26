import {AsyncPipe, NgForOf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {Component, ElementRef, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {
    EMPTY_QUERY,
    type TuiBooleanHandler,
    type TuiMapper,
    TuiMapperPipe,
} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDriver,
    TuiDropdown,
    tuiGetWordRange,
    TuiInitialsPipe,
    TuiOptionNew,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiAvatar, TuiTextarea} from '@taiga-ui/kit';
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
        AsyncPipe,
        FormsModule,
        NgForOf,
        TuiAvatar,
        TuiDataList,
        TuiDropdown,
        TuiInitialsPipe,
        TuiTextfield,
        TuiTextarea,
        TuiTextareaModule,
        TuiMapperPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChildren(TuiOptionNew, {read: ElementRef})
    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiTextarea, {read: ElementRef})
    private readonly textarea?: ElementRef<HTMLTextAreaElement>;

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

    protected get search(): string {
        const el = this.textarea?.nativeElement;

        return el?.value.slice(el.value.indexOf('@'), el.selectionStart) || '';
    }

    protected readonly filter: TuiMapper<[readonly User[], string], readonly User[]> = (
        items,
        search,
    ) =>
        items.filter(
            ({name, login}) => login.startsWith(search) || name.startsWith(search),
        );

    protected predicate: TuiBooleanHandler<Range> = (range) =>
        String(tuiGetWordRange(range)).startsWith('@');

    protected onArrow(event: Event, which: 'first' | 'last'): void {
        const item = this.options[which];

        if (!item) {
            return;
        }

        event.preventDefault();
        item.nativeElement.focus();
    }

    protected onClick(login: string): void {
        if (!this.textarea) {
            return;
        }

        const search = this.search;
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        this.textarea.nativeElement.focus();
        this.textarea.nativeElement.value = value;
        this.textarea.nativeElement.setSelectionRange(caret, caret);
    }
}
