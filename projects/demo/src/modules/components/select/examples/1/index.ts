import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-select-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiSelectExample1 {
    items = [
        'Люк Скайуокер',
        'Принцесса Лея',
        'Дарт Вейдер',
        'Хан Соло',
        'Оби-Ван Кеноби',
        'Йода',
    ];

    testValue = new FormControl(this.items[0]);
}
