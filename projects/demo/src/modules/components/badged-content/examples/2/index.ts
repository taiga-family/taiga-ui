import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiNotification, TuiSupportColor} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-badged-content-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiBadgedContentExample2 {
    testForm = new FormGroup({
        testValue: new FormControl(''),
    });

    badgeValueCount = 0;

    buttonStatusTop: TuiNotification | TuiStatus | TuiSupportColor | null = null;

    contentTop: PolymorpheusContent | null = null;

    get badgeValue(): number {
        return this.testForm.value.testValue.length;
    }

    onClick() {
        this.badgeValueCount++;

        this.contentTop = this.badgeValueCount;

        if (this.badgeValueCount > 0) {
            this.buttonStatusTop = TuiStatus.Error;
        }

        if (this.badgeValueCount === 50) {
            this.contentTop = 'tuiIconCheck';
        }
    }
}
