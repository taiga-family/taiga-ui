import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const ITEMS: readonly string[] = [
    'Люк Скайуокер',
    'Принцесса Лея',
    'Дарт Вейдер',
    'Хан Соло',
    'Оби-Ван Кеноби',
    'Йода',
];

@Component({
    selector: 'tui-multi-select-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample1 {
    search = '';

    readonly control = new FormControl([ITEMS[0]]);

    @tuiPure
    filter(search: string | null): readonly string[] {
        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
    }
}
