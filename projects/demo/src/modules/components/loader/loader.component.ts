import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, ViewChild} from '@angular/core';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {PolymorpheusContent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-loader',
    templateUrl: './loader.template.html',
    styleUrls: ['./loader.style.less'],
    changeDetection,
})
export class ExampleTuiLoaderComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    showLoader = false;

    inheritColor = false;

    overlay = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizeVariants[2];

    selectedTemplate: string | null = null;

    @ViewChild('textTemplate')
    readonly textTemplate?: PolymorpheusTemplate<{}>;

    readonly textVariants: string[] = ['template', 'строка'];

    get template(): PolymorpheusContent | null {
        switch (this.selectedTemplate) {
            case 'template': {
                return this.textTemplate || null;
            }
            case 'строка': {
                return 'строка';
            }
            default: {
                return null;
            }
        }
    }
}
