import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

const FRAMES = 166;

@Component({
    selector: `tui-sheet-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample5 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: [`4.5rem`],
    };

    toggle(): void {
        this.open = !this.open;
    }

    getTransform(y: number | null): string {
        const frame = Math.round((y || 0) / 2);
        const looped = frame % FRAMES;
        const percent = (100 / FRAMES) * looped;

        return `translate3d(0, -${percent}%, 0)`;
    }
}
