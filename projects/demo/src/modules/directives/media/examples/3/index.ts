import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiMedia, TuiButton, TuiLink, TuiSlider, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? '@tui.play' : '@tui.pause';
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
