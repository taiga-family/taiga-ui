import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHorizontalDirection} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-link',
    templateUrl: './link.template.html',
    changeDetection,
})
export class ExampleTuiLinkComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

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

    pseudo = false;
    iconRotated = false;

    readonly modeValues = ['positive', 'negative'] as const;

    mode: 'positive' | 'negative' | null = null;

    readonly iconAlignValues: readonly TuiHorizontalDirection[] = ['right', 'left'];

    icon: string | null = null;

    readonly iconVariants = ['tuiIconStarLarge', 'tuiIconGeoLarge'];

    iconAlign: TuiHorizontalDirection = this.iconAlignValues[0];
}
