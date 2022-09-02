import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    selector: `example-notification`,
    templateUrl: `./notification.template.html`,
    changeDetection,
})
export class ExampleTuiNotificationComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleOptions = import(`./examples/import/define-options.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
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
