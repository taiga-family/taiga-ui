import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-hint-controller',
    templateUrl: './hint-controller.template.html',
    changeDetection,
})
export class ExampleTuiHintControllerComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly modeVariants: readonly TuiHintModeT[] = ['error'];

    tuiHintContent = 'Example hint content';

    tuiHintMode: TuiHintModeT | null = null;

    readonly directionVariants: readonly TuiDirection[] = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'bottom-middle',
        'top-left',
        'top-right',
        'top-middle',
    ];

    tuiHintDirection: TuiDirection = this.directionVariants[2];

    tuiHintShowDelay = 500;

    tuiHintHideDelay = 200;
}
