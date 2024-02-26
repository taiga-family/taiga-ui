import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

@Component({
    selector: 'example-badge',
    templateUrl: './badge.template.html',
    changeDetection,
})
export class ExampleTuiBadgeComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly appearanceVariants = [
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

    appearance = this.appearanceVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = ['s', 'm', 'l', 'xl'];

    size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    contentTypeVariants = ['text', 'with icon', 'image'];
    contentType = this.contentTypeVariants[0];

    dot = false;
}
