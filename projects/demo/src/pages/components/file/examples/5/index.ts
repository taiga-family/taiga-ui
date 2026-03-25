import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiProgressCircle, TuiSegmented} from '@taiga-ui/kit';
import {TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiButton,
        TuiFile,
        TuiIcon,
        TuiLoader,
        TuiProgressCircle,
        TuiSegmented,
        TuiSlides,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly orientations = ['horizontal', 'vertical'] as const;
    protected readonly state = signal('normal');

    protected readonly states = [
        'normal',
        'progress',
        'loader',
        'error',
        'button',
    ] as const;
}
