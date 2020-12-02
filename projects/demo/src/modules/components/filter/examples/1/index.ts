import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-filter-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    items = [
        'Новое',
        'Еда и алкогольные напитки',
        'Одежда и обувь',
        'Популярное',
        'Продукты',
        'Мебель',
        'Техника',
        'Стройматериалы',
    ];

    disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;

    form = new FormGroup({
        filters: new FormControl(['Еда и алкогольные напитки']),
    });
}
