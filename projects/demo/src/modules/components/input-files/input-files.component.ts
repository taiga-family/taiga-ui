import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-files`,
    templateUrl: `./input-files.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputFilesComponent),
        },
    ],
})
export class ExampleTuiInputFilesComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    readonly control = new FormControl();
    content = ``;
    contentVariants = [``, `Drop your file here`, `Place for your file`];
    multiple = true;
    showSize = true;
    accept = ``;
    acceptVariants = [`image/*`, `application/pdf`, `image/*,application/pdf`];
    readonly maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
    override readonly sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    override size = this.sizeVariants[0];
    rejectedFiles: TuiFileLike[] = [];
    maxFileSize = this.maxFileSizeVariants[2];

    removeFile(file: TuiFileLike): void {
        this.control.setValue(
            this.control.value.filter((current: File) => current.name !== file.name),
        );
    }

    removeRejected(file: TuiFileLike): void {
        this.rejectedFiles = this.rejectedFiles.filter(
            rejectedFile => rejectedFile.name !== file.name,
        );
    }

    updateRejected(file: TuiFileLike | readonly TuiFileLike[]): void {
        this.rejectedFiles = [
            ...this.rejectedFiles,
            ...(Array.isArray(file) ? file : [file]),
        ];
    }

    multipleChange(multiple: boolean): void {
        this.rejectedFiles = [];
        this.control.setValue(null);
        this.multiple = multiple;
    }
}
