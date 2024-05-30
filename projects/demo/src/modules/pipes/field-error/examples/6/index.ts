import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {
    TuiCellDirective,
    TuiTableDirective,
    TuiTbodyComponent,
    TuiTdComponent,
    TuiThComponent,
    TuiThGroupComponent,
    TuiTrComponent,
} from '@taiga-ui/addon-table';
import {TuiHintDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TUI_VALIDATION_ERRORS, TuiFieldErrorContentPipe} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTableDirective,
        TuiThGroupComponent,
        TuiThComponent,
        TuiTbodyComponent,
        NgForOf,
        TuiTrComponent,
        TuiCellDirective,
        TuiTdComponent,
        TuiInputNumberModule,
        TuiHintDirective,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiFieldErrorContentPipe,
        TuiCurrencyPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Enter this!',
                max: (context: {max: number}): string =>
                    `Too expensive, max ${context.max}`,
            },
        },
    ],
})
export default class ExampleComponent {
    protected readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;

    protected latteControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(6),
    ]);

    protected cappuccinoControl = new FormControl<number | null>(null, [
        Validators.required,
        Validators.max(5),
    ]);

    protected controls = [this.latteControl, this.cappuccinoControl];

    protected readonly columns = ['name', 'price'];
}
