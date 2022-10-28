import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';

@Component({
    selector: `tui-is-present-example1`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiIsPresentExample1 {
    readonly items = [`String`, `null`, `undefined`];
    readonly value = new FormControl(null);

    get isPresent(): boolean {
        const {value} = this.value;
        const objectedValue = this.objectifyValue(value ?? ``);

        return tuiIsPresent(objectedValue);
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
