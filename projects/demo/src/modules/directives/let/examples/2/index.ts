import {Component, Inject} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {LogService} from '../../../../app/log.service';

@Component({
    selector: 'tui-let-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [LogService],
})
export class TuiLetExample2 {
    constructor(@Inject(LogService) private readonly log: LogService) {}

    get getter(): string {
        this.log.log('Getter дёрнулся');

        return '🐳';
    }
}
