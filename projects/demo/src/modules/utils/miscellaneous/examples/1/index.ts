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

        tuiAssert.assert(isFriday, 'Сегодня не пятница');

        return isFriday
            ? 'В консоль ничего не выведено'
            : `В консоль выведен assert: 'Сегодня не пятница'`;
    }
}
