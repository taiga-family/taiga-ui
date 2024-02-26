import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {SECONDS_IN_MINUTE} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-media-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMediaExample2 {
    protected currentTime = 0;
    protected paused = true;

    protected get icon(): string {
        return this.paused ? 'tuiIconPlayLarge' : 'tuiIconPauseLarge';
    }

    protected getTime(time: number): string {
        const integer = Math.round(time || 0);
        const seconds = integer % SECONDS_IN_MINUTE;
        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;
        const secondsString = String(seconds);
        const minutesString = String(minutes);
        const paddedSeconds =
            secondsString.length === 1 ? `0${secondsString}` : secondsString;
        const paddedMinutes =
            minutesString.length === 1 ? `0${minutesString}` : minutesString;

        return `${paddedMinutes}:${paddedSeconds}`;
    }

    protected toggleState(): void {
        this.paused = !this.paused;
    }
}
