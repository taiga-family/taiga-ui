import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: `tui-sheet-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample4 {
    open = false;

    elastic = 1;

    readonly options: Partial<TuiSheetOptions> = {
        stops: [`12rem`],
    };

    get transform(): string {
        return `scale(${this.elastic * this.elastic})`;
    }

    toggle(): void {
        this.elastic = 1;
        this.open = !this.open;
    }

    onElastic(elastic: number): void {
        this.elastic = elastic;
    }
}
