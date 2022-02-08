import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
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
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection,
})
export class ExampleProgressCircleComponent {
    value = 6;
    max = 10;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = ['s', 'm', 'l', 'xl'];
    size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    readonly colorVariants: ReadonlyArray<string> = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'url(#gradient)',
    ];

    color = this.colorVariants[0];

    readonly basicExample: FrontEndExample = {
        HTML: example1Html,
        TypeScript: example1Ts,
    };

    readonly sizesExample: FrontEndExample = {
        HTML: example2Html,
        LESS: example2Less,
        TypeScript: example2Ts,
    };

    readonly labelExample: FrontEndExample = {
        HTML: example3Html,
        LESS: example3Less,
        TypeScript: example3Ts,
    };

    readonly colorsExample: FrontEndExample = {
        HTML: example4Html,
        LESS: example4Less,
        TypeScript: example4Ts,
    };

    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
}
