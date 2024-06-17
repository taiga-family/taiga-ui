import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiRatingComponent} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiRatingComponent, FormsModule, NgFor, NgIf, TuiButton],
    templateUrl: 'index.html',
    styleUrls: ['index.less'],
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
