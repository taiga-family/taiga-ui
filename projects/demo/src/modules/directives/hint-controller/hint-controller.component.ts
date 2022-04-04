import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-hint-controller',
    templateUrl: './hint-controller.template.html',
    changeDetection,
})
export class ExampleTuiHintControllerComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
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
