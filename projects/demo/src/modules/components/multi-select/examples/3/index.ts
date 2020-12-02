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
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample3 {
    readonly items: ReadonlyArray<Hero> = [
        {id: 1, name: 'Люк Скайуокер'},
        {id: 2, name: 'Принцесса Лея'},
        {id: 3, name: 'Дарт Вейдер'},
        {id: 4, name: 'Хан Соло'},
        {id: 5, name: 'Оби-Ван Кеноби'},
        {id: 6, name: 'Йода'},
    ];

    readonly control = new FormControl([
        {
            id: 4,
            name: 'Хан Соло',
        },
    ]);

    readonly stringify: TuiStringHandler<Hero | TuiContextWithImplicit<Hero>> = item =>
        'name' in item ? item.name : item.$implicit.name;

    readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>
        hero1.id === hero2.id;
}
