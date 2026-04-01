import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiRating} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiButton, TuiRating],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;

    protected readonly icon: PolymorpheusContent<TuiContext<number>> = ({$implicit}) => {
        switch ($implicit) {
            case 1:
                return '@tui.frown';
            case 2:
                return '@tui.meh';
            default:
                return '@tui.smile';
        }
    };
}
`;export{o as default};
