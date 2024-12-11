import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIntlFormatNumberPipe} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiInputNumberModule,
        TuiIntlFormatNumberPipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly control = new FormControl(100);

    protected readonly locales: string[] = [
        'ru-RU',
        'en-US',
        'en-IN',
        'en-GB',
        'ja-JP',
        'de-DE',
        'pt-PT',
        'zh-CN',
    ];

    protected locale = this.locales[0]!;

    protected readonly options: Intl.NumberFormatOptions[] = [
        {},
        {style: 'currency', currency: 'JPY'},
        {style: 'currency', currency: 'EUR'},
        {maximumSignificantDigits: 3},
        {
            style: 'unit',
            unit: 'kilometer-per-hour',
        },
        {
            style: 'unit',
            unit: 'liter',
            unitDisplay: 'long',
        },
    ];

    protected option = this.options[0]!;
}
