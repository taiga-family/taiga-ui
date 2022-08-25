import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: `example-tui-push`,
    templateUrl: `./push.template.html`,
    changeDetection,
})
export class ExampleTuiPushComponent {
    readonly exampleImportModule = import(
        `!!raw-loader!./examples/import/import-module.md`
    );

    readonly exampleInsertTemplate = import(
        `!!raw-loader!./examples/import/insert-template.md`
    );

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    heading = ``;
    type = ``;
    timestamp = 0;

    constructor(@Inject(TuiAlertService) private readonly alert: TuiAlertService) {}

    onClose(): void {
        this.alert
            .open(`Close button is visible when you subscribe to (close) output`)
            .subscribe();
    }
}
