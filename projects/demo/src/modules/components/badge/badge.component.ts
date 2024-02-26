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
