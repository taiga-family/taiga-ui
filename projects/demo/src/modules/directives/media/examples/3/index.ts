import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-media-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiMediaExample3 {
    currentTime = 0;
    paused = true;

    get icon(): string {
        return this.paused ? 'tuiIconPlay2Large' : 'tuiIconPause2Large';
    }

    toggleState() {
        this.paused = !this.paused;
    }
}
