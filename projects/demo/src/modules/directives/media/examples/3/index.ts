import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiMediaDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiMediaDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiSlider,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class ExampleComponent {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? 'tuiIconPlay' : 'tuiIconPause';
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
