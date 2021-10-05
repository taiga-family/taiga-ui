import {Component} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-miscellaneous-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample1 {
    get assertResult(): string {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;

        tuiAssert.assert(isFriday, 'Today is not a friday');

        return isFriday
            ? 'Nothing in console'
            : `There is a console assert: 'Today is not a friday'`;
    }
}
