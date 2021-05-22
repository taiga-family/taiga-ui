import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-file',
    templateUrl: './input-file.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputFileComponent),
        },
    ],
})
export class ExampleTuiInputFileComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

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

    readonly control = new FormControl();
    link = 'Choose a file';
    label = 'or drop\u00A0it\u00A0here';
    multiple = false;
    showSize = true;
    accept = '';
    acceptVariants = ['image/*', 'application/pdf'];
    readonly maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];
    readonly rejectedFilesVariants: ReadonlyArray<ReadonlyArray<TuiFileLike>> = [
        [],
        [
            {
                name: 'test.txt',
                size: 123,
                content: 'File is too boring',
            },
            {
                name: 'Waterplea — Strays.mp3',
                size: 237,
                content: 'File already exists',
            },
        ],
    ];

    size = this.sizeVariants[0];
    rejectedFiles = this.rejectedFilesVariants[0];
    maxFileSize = this.maxFileSizeVariants[2];
}
