import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocNumberFormat,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    public readonly control = new FormControl(100);
}
