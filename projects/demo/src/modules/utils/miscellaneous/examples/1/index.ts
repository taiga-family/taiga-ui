import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAssert} from '@taiga-ui/cdk';

@Component({
    selector: `tui-miscellaneous-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample1 {
    get assertResult(): string {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;

        tuiAssert.assert(isFriday, `Today is not a friday`);

        return isFriday
            ? `Nothing in console`
            : `There is a console assert: 'Today is not a friday'`;
    }
}
