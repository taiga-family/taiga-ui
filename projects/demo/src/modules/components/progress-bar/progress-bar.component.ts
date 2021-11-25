import {Component} from '@angular/core';
import {TuiSizeS} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.less'],
    changeDetection,
})
export class ExampleProgressBarComponent {
    value = 6;
    max = 10;

    readonly sizeVariants: ReadonlyArray<TuiSizeS> = ['m', 's'];
    size: TuiSizeS = this.sizeVariants[0];

    readonly colorVariants: ReadonlyArray<string> = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))',
    ];

    color = this.colorVariants[0];

    readonly basicExample: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
        LESS: example1Less,
    };

    readonly multiColorExample: FrontEndExample = {
        HTML: example2Html,
        TypeScript: example2Ts,
        LESS: example2Less,
    };

    readonly sizesExample: FrontEndExample = {
        HTML: example3Html,
        TypeScript: example3Ts,
        LESS: example3Less,
    };

    readonly labelExample: FrontEndExample = {
        HTML: example4Html,
        TypeScript: example4Ts,
        LESS: example4Less,
    };

    readonly stackedExample: FrontEndExample = {
        HTML: example5Html,
        TypeScript: example5Ts,
        LESS: example5Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
