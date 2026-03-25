import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiButtonX,
    TuiIcon,
    TuiLoader,
    type TuiSizeL,
    type TuiSizeS,
    type TuiSizeXS,
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

    protected getSize(size: TuiSizeL | TuiSizeS): TuiSizeXS {
        switch (size) {
            case 'l':
                return 'm';
            case 'm':
                return 's';
            case 's':
                return 'xs';
        }
    }
}
