import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext, TuiIdentityMatcher, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Hero {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        TuiDataList,
        NgForOf,
        TuiDataListWrapper,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly Hero[] = [
        {id: 1, name: 'Luke Skywalker'},
        {id: 2, name: 'Leia Organa Solo'},
        {id: 3, name: 'Darth Vader'},
        {id: 4, name: 'Han Solo'},
        {id: 5, name: 'Obi-Wan Kenobi'},
        {id: 6, name: 'Yoda'},
    ];

    protected readonly control = new FormControl([this.items[3], this.items[4]]);

    protected readonly stringify: TuiStringHandler<Hero | TuiContext<Hero>> = item =>
        'name' in item ? item.name : item.$implicit.name;

    protected readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>
        hero1.id === hero2.id;
}
