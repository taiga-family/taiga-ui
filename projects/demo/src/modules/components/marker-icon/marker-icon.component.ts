import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {TuiMarkerIconModeT} from '@taiga-ui/kit';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-marker-icon',
    changeDetection,
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
})
export class ExampleTuiMarkerIconComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly icons = ['tuiIconAttachLarge', 'tuiIconCallLarge', 'tuiIconStarLarge'];

    selectedIcon = this.icons[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    size: TuiSizeXS | TuiSizeXL = this.sizeVariants[2];

    readonly modeVariants: readonly TuiMarkerIconModeT[] = [
        'link',
        'primary',
        'warning',
        'white',
        'secondary',
        'success',
        'error',
    ];

    mode: TuiMarkerIconModeT | null = null;
}
