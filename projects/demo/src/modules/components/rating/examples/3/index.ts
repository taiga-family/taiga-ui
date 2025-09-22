import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRating, type TuiRatingContext} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [FormsModule, TuiRating],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly icon: PolymorpheusContent<TuiRatingContext> = ({filled}) =>
        filled ? '@tui.star-filled' : '@tui.star';
}
