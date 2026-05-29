import"./chunk-HU6DUUP4.js";var t=`import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiButtonX,
    TuiHint,
    TuiIcon,
    TuiLoader,
    TuiTitle,
} from '@taiga-ui/core';
import {TUI_FILE_OPTIONS_OPTIONS, TuiFile} from '@taiga-ui/experimental';
import {TuiProgress, TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonX,
        TuiFile,
        TuiHint,
        TuiIcon,
        TuiLoader,
        TuiProgress,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly size = signal(inject(TUI_FILE_OPTIONS_OPTIONS).size);

    protected readonly content = [
        'icon',
        'button',
        'progress',
        'loader',
        'image',
        'error',
    ];
}
`;export{t as default};
