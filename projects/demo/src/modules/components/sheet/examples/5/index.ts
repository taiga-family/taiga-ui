import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {TuiSheetOptions} from '@taiga-ui/legacy';
import {TuiSheetModule} from '@taiga-ui/legacy';

const FRAMES = 166;

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiSheetModule, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: ['4.5rem'],
    };

    protected toggle(): void {
        this.open = !this.open;
    }

    protected getTransform(y: number | null): string {
        const frame = Math.round((y || 0) / 2);
        const looped = frame % FRAMES;
        const percent = (100 / FRAMES) * looped;

        return `translate3d(0, -${percent}%, 0)`;
    }
}
