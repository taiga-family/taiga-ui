import {Component} from '@angular/core';
import {SECONDS_IN_MINUTE} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-media-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMediaExample2 {
    currentTime = 0;
    paused = true;

    get icon(): string {
        return this.paused ? 'tuiIconPlayLarge' : 'tuiIconPauseLarge';
    }

    getTime(time: number): string {
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

    toggleState() {
        this.paused = !this.paused;
    }
}
