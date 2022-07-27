import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-manual-hint-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
})
export class TuiManualHintExample1 {
    hintShown = false;

    toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
