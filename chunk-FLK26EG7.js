import"./chunk-HU6DUUP4.js";var n=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {SECONDS_IN_MINUTE, TuiMedia} from '@taiga-ui/cdk';
import {TuiButton, TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiMedia, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? '@tui.play' : '@tui.pause';
    }

    protected getTime(time: number): string {
        const integer = Math.round(time || 0);
        const seconds = integer % SECONDS_IN_MINUTE;
        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;
        const secondsString = String(seconds);
        const minutesString = String(minutes);
        const paddedSeconds =
            secondsString.length === 1 ? \`0\${secondsString}\` : secondsString;
        const paddedMinutes =
            minutesString.length === 1 ? \`0\${minutesString}\` : minutesString;

        return \`\${paddedMinutes}:\${paddedSeconds}\`;
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
`;export{n as default};
