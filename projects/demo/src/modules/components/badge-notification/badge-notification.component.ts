import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

@Component({
    selector: 'example-badge-notification',
    templateUrl: './badge-notification.template.html',
    changeDetection,
})
export class ExampleTuiBadgeNotificationComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size: TuiSizeL | TuiSizeXS = this.sizeVariants[0];
}
