import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-is-present-example1`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiIsPresentExample1 {
    readonly items = [`String`, `null`, `undefined`];
    readonly control = new FormControl(null);

    get value(): string | null | undefined {
        return this.objectifyValue(this.control.value ?? ``);
    }

    private objectifyValue(value: string): string | null | undefined {
        if (value === `null`) {
            return null;
        }

        if (value === `undefined`) {
            return undefined;
        }

        return value;
    }
}
