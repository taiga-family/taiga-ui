import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-range-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiRangeExample3 {
    readonly min = 0;
    readonly max = 1000;
    readonly quantum = 250;
    readonly segments = 4;
    readonly labels = [...new Array(this.segments + 1).keys()].map(
        i => this.min + this.quantum * i,
    );

    value = [0, 250];

    // https://angular.io/api/common/I18nPluralPipe
    pluralMap = {'=0': `0`, '=1': `# item`, '=1000': `MAX`, other: `# items`};
}
