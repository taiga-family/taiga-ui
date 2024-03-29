import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiRatingComponent} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [TuiRatingComponent, TuiLabelModule, FormsModule, NgFor, NgIf],
    templateUrl: 'index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
