import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-media-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiMediaExample3 {
    currentTime = 0;
    paused = true;

    get icon(): string {
        return this.paused ? `tuiIconPlayLarge` : `tuiIconPauseLarge`;
    }

    toggleState(): void {
        this.paused = !this.paused;
    }
}
