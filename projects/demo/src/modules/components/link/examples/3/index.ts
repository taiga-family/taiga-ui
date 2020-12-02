import {Component, Inject} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {LogService} from '../../../../app/log.service';

@Component({
    selector: 'tui-link-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [LogService],
})
export class TuiLinkExample3 {
    constructor(@Inject(LogService) private readonly log: LogService) {}

    onClick(event: MouseEvent) {
        this.log.event('click', event);
    }
}
