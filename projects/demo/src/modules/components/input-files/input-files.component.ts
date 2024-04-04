import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-files',
    templateUrl: './input-files.template.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputFilesComponent)],
})
export class ExampleTuiInputFilesComponent extends AbstractExampleTuiControl {
    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    public override size = this.sizeVariants[0];
    public readonly control = new FormControl<File[] | null>(null);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    protected readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
    };

    protected readonly files$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    protected multiple = true;
    protected showSize = true;
    protected showDelete: boolean | 'always' = true;
    protected expanded = false;
    protected maxFilesCount = 3;
    protected accept = '';
    protected acceptVariants = ['image/*', 'application/pdf', 'image/*,application/pdf'];

    protected readonly showDeleteVariants: Array<boolean | 'always'> = [
        true,
        false,
        'always',
    ];

    protected readonly maxFileSizeVariants = [
        100,
        512000,
        30 * 1000 * 1000,
        2.2 * 1000 * 1000,
    ];

    protected rejected: readonly File[] = [];
    protected maxFileSize = this.maxFileSizeVariants[2];

    protected removeFile(file: File): void {
        this.rejected = this.rejected.filter(current => current !== file);
        this.control.setValue(
            this.control.value?.filter(current => current !== file) || null,
        );
    }

    protected updateRejected(rejected: readonly File[]): void {
        this.rejected = rejected;
    }

    protected multipleChange(multiple: boolean): void {
        this.rejected = [];
        this.control.setValue(null);
        this.multiple = multiple;
    }
}
