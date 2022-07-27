import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiInputCardGroupedComponent} from '@taiga-ui/addon-commerce';

@Component({
    selector: `tui-input-card-grouped-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
})
export class TuiInputCardGroupedExample2 {
    readonly items = [
        {card: `4321***1234`, expire: `12/21`, name: `Salary`, bank: `Tinkoff`},
        {
            card: `8765***5678`,
            expire: `03/42`,
            cvc: `***`,
            name: `Tips`,
            bank: `Bank of America`,
        },
        {card: `4200***9000`, name: `Dogecoins`, bank: `Crypto`},
    ];

    readonly control = new FormControl(this.items[0]);

    onClick(component: TuiInputCardGroupedComponent): void {
        this.control.setValue(null);
        this.onEsc(component);
    }

    onEsc(component: TuiInputCardGroupedComponent): void {
        component.nativeFocusableElement?.focus();
        component.open = false;
    }
}
