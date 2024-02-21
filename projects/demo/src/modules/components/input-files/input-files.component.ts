import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';
import {tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-files',
    templateUrl: './input-files.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputFilesComponent),
        },
    ],
})
export class ExampleTuiInputFilesComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
    };

    readonly control = new FormControl<File[] | null>(null);
    readonly files$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    multiple = true;
    showSize = true;
    showDelete: boolean | 'always' = true;
    expanded = false;
    maxFilesCount = 3;
    accept = '';
    acceptVariants = ['image/*', 'application/pdf', 'image/*,application/pdf'];

    readonly showDeleteVariants: Array<boolean | 'always'> = [true, false, 'always'];
    readonly maxFileSizeVariants = [100, 512000, 30 * 1000 * 1000, 2.2 * 1000 * 1000];
    override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    override size = this.sizeVariants[0];
    rejected: readonly File[] = [];
    maxFileSize = this.maxFileSizeVariants[2];

    removeFile(file: File): void {
        this.rejected = this.rejected.filter(current => current !== file);
        this.control.setValue(
            this.control.value?.filter(current => current !== file) || null,
        );
    }

    updateRejected(rejected: readonly File[]): void {
        this.rejected = rejected;
    }

    multipleChange(multiple: boolean): void {
        this.rejected = [];
        this.control.setValue(null);
        this.multiple = multiple;
    }
}
