import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface Hero {
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'tui-multi-select-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample3 {
    readonly items: ReadonlyArray<Hero> = [
        {id: 1, name: 'Luke Skywalker'},
        {id: 2, name: 'Leia Organa Solo'},
        {id: 3, name: 'Darth Vader'},
        {id: 4, name: 'Han Solo'},
        {id: 5, name: 'Obi-Wan Kenobi'},
        {id: 6, name: 'Yoda'},
    ];

    readonly control = new FormControl([
        {
            id: 4,
            name: 'Han Solo',
        },
    ]);

    readonly stringify: TuiStringHandler<Hero | TuiContextWithImplicit<Hero>> = item =>
        'name' in item ? item.name : item.$implicit.name;

    readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>
        hero1.id === hero2.id;
}
