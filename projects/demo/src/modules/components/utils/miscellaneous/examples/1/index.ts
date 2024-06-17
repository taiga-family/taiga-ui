import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected get assertResult(): string {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;

        ngDevMode && console.assert(isFriday, 'Today is not a friday');

        return isFriday
            ? 'Nothing in console'
            : 'There is a console assert: <br> "Today is not a friday"';
    }
}
