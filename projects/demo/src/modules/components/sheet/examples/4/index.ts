import {Component} from '@angular/core';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-sheet-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample4 {
    open = false;

    elastic = 1;

    readonly options: Partial<TuiSheetOptions> = {
        stops: ['12rem'],
    };

    get transform(): string {
        return `scale(${this.elastic * this.elastic})`;
    }

    toggle() {
        this.elastic = 1;
        this.open = !this.open;
    }

    onElastic(elastic: number) {
        this.elastic = elastic;
    }
}
