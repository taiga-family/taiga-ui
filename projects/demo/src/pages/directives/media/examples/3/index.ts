import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiLink, TuiMedia, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
