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
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly control = new FormControl();
    link = `Choose a file`;
    label = `or drop\u00A0it\u00A0here`;
    multiple = true;
    showSize = true;
    accept = ``;
    acceptVariants = [`image/*`, `application/pdf`, `image/*,application/pdf`];
    readonly maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
    readonly sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size = this.sizeVariants[0];
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
