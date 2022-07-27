import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

@Component({
    selector: `tui-field-error-content-pipe-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: `Enter this!`,
                max: (context: {max: number}): string =>
                    `Too expensive, max ${context.max}`,
            },
        },
    ],
})
export class TuiFieldErrorContentPipeExample6 {
    readonly data = [{name: `Latte`}, {name: `Cappuccino`}] as const;

    latteControl = new FormControl(null, [Validators.required, Validators.max(6)]);
    cappuccinoControl = new FormControl(null, [Validators.required, Validators.max(5)]);
    controls = [this.latteControl, this.cappuccinoControl];

    readonly columns = [`name`, `price`];
}
