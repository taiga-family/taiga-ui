import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);
    protected readonly users = this.items.map((name, index) => ({name, index}));

    protected writable: string[] = [];
    protected sheet: string[] = [];
    protected native: User[] = [{name: this.items[0] || '', index: 0}];

    protected readonly disabled = (item: string): boolean => !this.items.includes(item);
    protected readonly identity: TuiIdentityMatcher<User> = (a, b) => a.index === b.index;
    protected readonly stringify = ({name}: User): string => name;
}
