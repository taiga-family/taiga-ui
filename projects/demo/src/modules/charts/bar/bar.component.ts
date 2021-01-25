import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component} from '@angular/core';
import {TuiColorHandler, TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts';
import {TuiBaseColor, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

const zebraHandler: TuiColorHandler = index =>
    index % 2 ? TuiBaseColor.Success : TuiBaseColor.Error;

@Component({
    selector: 'example-tui-bar',
    templateUrl: './bar.template.html',
    styleUrls: ['./bar.style.scss'],
    changeDetection,
})
export class ExampleTuiBarComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        SCSS: example1Scss,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        SCSS: example2Scss,
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size = this.sizeVariants[1];

    readonly valueVariants = [
        [30, 20, 10],
        [237, 50, 10, 5, 1],
    ];

    value = this.valueVariants[0];

    readonly colorHandlerVariants: ReadonlyArray<TuiColorHandler> = [
        TUI_DEFAULT_COLOR_HANDLER,
        zebraHandler,
    ];

    colorHandler = this.colorHandlerVariants[0];
}
