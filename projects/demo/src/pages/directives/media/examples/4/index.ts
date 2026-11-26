import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMedia} from '@taiga-ui/cdk';

@Component({
    imports: [TuiMedia],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected paused = true;
    protected buffering = false;
    protected error = false;
    protected seeking = false;

    protected syncBuffering(audio: HTMLAudioElement): void {
        this.buffering =
            !audio.paused &&
            audio.networkState === audio.NETWORK_LOADING &&
            audio.readyState <= audio.HAVE_CURRENT_DATA;
    }
}
