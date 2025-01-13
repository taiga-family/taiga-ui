import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    tuiFadeIn,
    TuiPopup,
    tuiSlideIn,
    TuiTitle,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {TuiRating} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAppearance,
        TuiAutoFocus,
        TuiButton,
        TuiCardLarge,
        TuiPopup,
        TuiRating,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    animations: [tuiFadeIn, tuiSlideIn],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly animation = {...tuiToAnimationOptions(), value: 'right'};
    protected readonly step = signal(0);
    protected rating = 0;
    protected comment = '';

    protected close(): void {
        this.rating = 0;
        this.comment = '';
        this.step.set(0);
    }
}
