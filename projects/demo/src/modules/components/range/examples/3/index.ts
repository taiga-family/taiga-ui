import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-range-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRangeExample3 {
    protected readonly min = 0;
    protected readonly max = 1000;
    protected readonly step = 250;
    protected readonly segments = 4;
    protected readonly labels = [...new Array(this.segments + 1).keys()].map(
        i => this.min + this.step * i,
    );

    protected value = [0, 250];

    // https://angular.io/api/common/I18nPluralPipe
    protected pluralMap = {'=0': '0', '=1': '# item', '=1000': 'MAX', other: '# items'};
}
