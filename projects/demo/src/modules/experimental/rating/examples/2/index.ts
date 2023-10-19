import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-rating-example-2',
    templateUrl: 'index.html',
    styleUrls: ['index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRatingExample2 {
    value = 0;

    readonly icon: PolymorpheusContent<TuiContextWithImplicit<number>> = ({
        $implicit,
    }) => {
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
