import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-field-error-content-pipe-example-6',
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
export class TuiFieldErrorContentPipeExample6 {
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
