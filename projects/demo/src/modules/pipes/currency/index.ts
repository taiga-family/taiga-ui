import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiLinkDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        RouterLink,
        TuiLinkDirective,
        TuiInputNumberModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiCurrencyPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly currencyVariants = [null, 826, 840, 'EUR', 'RUB', 'UGX', 'USD'];
    protected currency = this.currencyVariants[0];

    protected readonly control = new FormControl(6432, Validators.required);
}
