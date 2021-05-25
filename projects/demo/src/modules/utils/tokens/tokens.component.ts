import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';

import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example6Ts} from '!!raw-loader!./examples/6/index.ts';

import {default as example7Html} from '!!raw-loader!./examples/7/index.html';
import {default as example7Ts} from '!!raw-loader!./examples/7/index.ts';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tokens',
    templateUrl: './tokens.template.html',
    changeDetection,
})
export class ExampleTokensComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
    };

    readonly example7: FrontEndExample = {
        TypeScript: example7Ts,
        HTML: example7Html,
    };
}
