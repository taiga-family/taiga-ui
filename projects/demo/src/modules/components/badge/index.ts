import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {type TuiSizeS, type TuiSizeXL} from '@taiga-ui/core';
import {TuiBadge, TuiFadeDirective, TuiRadioListComponent} from '@taiga-ui/kit';

import {TuiBadgeExample1} from './examples/1';
import {TuiBadgeExample2} from './examples/2';
import {TuiBadgeExample3} from './examples/3';
import {TuiBadgeExample4} from './examples/4';
import {TuiBadgeExample5} from './examples/5';
import {TuiBadgeExample6} from './examples/6';

@Component({
    standalone: true,
    imports: [
        TuiBadge,
        TuiFadeDirective,
        TuiRadioListComponent,
        FormsModule,
        TuiBadgeExample1,
        TuiBadgeExample2,
        TuiBadgeExample3,
        TuiBadgeExample4,
        TuiBadgeExample5,
        TuiBadgeExample6,
        TuiDemo,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly appearanceVariants = [
        '',
        'accent',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
        'info',
        'neutral',
    ];

    protected appearance = this.appearanceVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = [
        's',
        'm',
        'l',
        'xl',
    ];

    protected size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    protected contentTypeVariants = ['text', 'with icon', 'image'];
    protected contentType = this.contentTypeVariants[0];

    protected dot = false;
}
