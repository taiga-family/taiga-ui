import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    selector: `example-notification`,
    templateUrl: `./notification.template.html`,
    changeDetection,
})
export class ExampleTuiNotificationComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
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
