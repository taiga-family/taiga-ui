import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component, Inject} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {LogService} from '../../../../app/log.service';

@Component({
    selector: 'tui-button-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [LogService],
})
export class TuiButtonExample1 {
    readonly avatarUrl = avatar;

    constructor(@Inject(LogService) private readonly log: LogService) {
        console.log(avatar);
    }

    onClick(event: MouseEvent) {
        this.log.event('click', event);
    }
}
