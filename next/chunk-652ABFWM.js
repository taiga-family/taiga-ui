import"./chunk-HU6DUUP4.js";var a=`import {AsyncPipe} from '@angular/common';
import {Component, ElementRef, viewChild, viewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {type TuiBooleanHandler, type TuiMapper, TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiDriver,
    TuiDropdown,
    tuiGetWordRange,
    TuiOption,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiInitialsPipe,
    TuiTextarea,
    TuiTextareaComponent,
} from '@taiga-ui/kit';

export interface User {
    readonly avatar: string;
    readonly login: string;
    readonly name: string;
}

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAvatar,
        TuiDataList,
        TuiDropdown,
        TuiInitialsPipe,
        TuiMapperPipe,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly textarea = viewChild.required<
        TuiTextareaComponent,
        ElementRef<HTMLTextAreaElement>
    >(TuiTextareaComponent, {read: ElementRef});

    protected readonly options = viewChildren(TuiOption, {read: ElementRef});
    protected readonly driver = viewChild(TuiDriver);
    protected value = 'Type @ to see a dropdown';
    protected readonly items = [
        {
            name: 'Alexander Inkin',
            avatar: assets\`images/avatar.jpg\`,
            login: 'a.inkin',
        },
        {
            name: 'Roman Sedov',
            avatar: '',
            login: 'r.sedov',
        },
    ];

    protected get search(): string {
        const el = this.textarea().nativeElement;

        return el.value.slice(el.value.indexOf('@'), el.selectionStart) || '';
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

    protected onArrow(event: Event, index: number): void {
        const item = this.options()[index];

        if (!item) {
            return;
        }

        event.preventDefault();
        item.nativeElement.focus();
    }

    protected onClick(login: string): void {
        const search = this.search;
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;

        this.value = value;
        this.textarea().nativeElement.focus();
        this.textarea().nativeElement.value = value;
        this.textarea().nativeElement.setSelectionRange(caret, caret);
    }
}
`;export{a as default};
