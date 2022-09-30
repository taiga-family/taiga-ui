import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-table-filters-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTableFiltersExample1 {
    readonly form = new FormGroup({
        balance: new FormControl(0),
    });

    readonly data = [
        {name: `Alex Inkin`, balance: 1323525},
        {name: `Roman Sedov`, balance: 523242},
        {name: `Vladimir Potekhin`, balance: 645465},
        {name: `Nikita Barsukov`, balance: 468468},
        {name: `Maxim Ivanov`, balance: 498654},
    ] as const;

    readonly columns = Object.keys(this.data[0]);

    readonly filter = (item: number, value: number): boolean => item >= value;

    onToggle(enabled: boolean): void {
        if (enabled) {
            this.form.enable();
        } else {
            this.form.disable();
        }
    }
}
