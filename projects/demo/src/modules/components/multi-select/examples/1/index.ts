import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

const ITEMS: readonly string[] = [
    'Luke Skywalker and a long time ago in a galaxy far, far away..',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
];

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search: string | null = '';

    protected readonly control = new FormControl([ITEMS[0]]);

    @tuiPure
    protected filter(search: string | null): readonly string[] {
        return ITEMS.filter((item) => TUI_DEFAULT_MATCHER(item, search || ''));
    }

    protected tagValidator: TuiBooleanHandler<string> = (tag) => !tag.startsWith('Han');
}
