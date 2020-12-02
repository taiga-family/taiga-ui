import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-list-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRadioListExample2 {
    readonly items = [
        {
            name: 'Простой',
            description: 'Это описание простого тарифа. Он совсем прост.',
        },
        {
            name: 'Продвинутый',
            description: 'Это описание продвинутого тарифа.',
        },
        {
            name: 'Профессиональный',
            description:
                'Это описание профессионального тарифа. Это наш самый крутой тариф.',
        },
    ];

    readonly testForm = new FormGroup({
        tariff: new FormControl(this.items[0]),
    });
}
