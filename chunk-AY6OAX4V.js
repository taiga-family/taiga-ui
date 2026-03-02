import"./chunk-HU6DUUP4.js";var t=`import {I18nPluralPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiIcon, TuiRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = 0;
    protected readonly max = 100;
    protected readonly step = 25;
    protected readonly segments = 4;
    protected readonly labels = Array.from(
        {length: this.segments + 1},
        (_, i) => this.min + this.step * i,
    );

    protected value = [0, 25];

    // https://angular.dev/api/common/I18nPluralPipe#example
    protected pluralMap = {'=0': '0', '=1': '# item', '=100': 'MAX', other: '# items'};
}
`;export{t as default};
