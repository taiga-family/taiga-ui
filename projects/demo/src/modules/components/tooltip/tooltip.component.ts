import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Less from '!!raw-loader!./examples/3/index.less';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiDirection, TuiHintMode} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tooltip',
    templateUrl: './tooltip.template.html',
    changeDetection,
})
export class ExampleTuiTooltipComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };
    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly modeVariants: ReadonlyArray<TuiHintMode> = [TuiHintMode.Error];

    mode: TuiHintMode | null = null;

    directionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    direction: TuiDirection = this.directionVariants[2];

    describeId = '';
}
