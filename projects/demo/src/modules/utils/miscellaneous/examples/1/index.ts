import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAssert} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-miscellaneous-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMiscellaneousExample1 {
    protected get assertResult(): string {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;

        ngDevMode && tuiAssert.assert(isFriday, 'Today is not a friday');

        return isFriday
            ? 'Nothing in console'
            : 'There is a console assert: <br> "Today is not a friday"';
    }
}
