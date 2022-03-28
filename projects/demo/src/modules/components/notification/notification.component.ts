import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiNotification} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-notification',
    templateUrl: './notification.template.html',
    changeDetection,
})
export class ExampleTuiNotificationComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly exampleOptions = exampleOptions;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    hasIcon = true;

    readonly statusVariants: readonly TuiNotification[] = [
        TuiNotification.Info,
        TuiNotification.Error,
        TuiNotification.Warning,
        TuiNotification.Success,
    ];

    status = this.statusVariants[0];
}
