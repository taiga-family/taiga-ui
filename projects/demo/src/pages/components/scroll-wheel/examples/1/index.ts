import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiScrollWheel} from '@taiga-ui/experimental';
import {TuiAutoColorPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiItem, TuiScrollWheel],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected getHeight(seed: number): number {
        let t = seed + 0x6d2b79f5;

        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

        return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * 75) + 25;
    }
}
