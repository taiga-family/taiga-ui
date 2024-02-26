import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiContext} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-rating-example-2',
    templateUrl: 'index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRatingExample2 {
    protected value = 0;

    protected readonly icon: PolymorpheusContent<TuiContext<number>> = ({$implicit}) => {
        switch ($implicit) {
            case 1:
                return 'tuiIconFrownLarge';
            case 2:
                return 'tuiIconMehLarge';
            default:
                return 'tuiIconSmileLarge';
        }
    };
}
