import {I18nPluralPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiRange, FormsModule, NgForOf, NgIf, I18nPluralPipe, TuiIcon, JsonPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
