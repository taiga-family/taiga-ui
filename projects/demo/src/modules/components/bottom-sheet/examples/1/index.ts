import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';
import {TuiMessage} from '@taiga-ui/kit';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiTextareaModule,
        FormsModule,
        TuiMessage,
        TuiButton,
        NgForOf,
        TuiBottomSheet,
        TuiScrollbar,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected messages = ['Check that awesome bottom sheet out!'];
    protected value = '';

    onSubmit() {
        this.messages = this.messages.concat(this.value);
        this.value = '';
    }
}
