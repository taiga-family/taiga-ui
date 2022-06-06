import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit';

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
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    readonly control = new FormControl();
    link = 'Choose a file';
    label = 'or drop\u00A0it\u00A0here';
    multiple = false;
    showSize = true;
    accept = '';
    acceptVariants = ['image/*', 'application/pdf', 'image/*,application/pdf'];
    readonly maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    readonly rejectedFilesVariants: ReadonlyArray<readonly TuiFileLike[]> = [
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
