import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiPopup, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiRating, TuiTextarea} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAnimated,
        TuiAppearance,
        TuiAutoFocus,
        TuiButton,
        TuiCardLarge,
        TuiPopup,
        TuiRating,
        TuiTextarea,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = signal(0);
    protected rating = 0;
    protected comment = '';

    protected close(): void {
        this.rating = 0;
        this.comment = '';
        this.step.set(0);
    }
}
