import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

import {TuiBadgeNotificationExample1} from './examples/1';
import {TuiBadgeNotificationExample2} from './examples/2';

@Component({
    standalone: true,
    selector: 'example-badge-notification',
    imports: [
        TuiBadgeNotificationComponent,
        TuiExamplePipe,
        TuiAddonDocModule,
        TuiBadgeNotificationExample1,
        TuiBadgeNotificationExample2,
    ],
    templateUrl: './badge-notification.template.html',
    changeDetection,
})
export default class ExampleTuiBadgeNotificationComponent {
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
