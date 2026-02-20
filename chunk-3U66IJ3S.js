import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeL} from '@taiga-ui/core';
import {TuiFiles, tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [ReactiveFormsModule, TuiDemo, TuiDocControl, TuiFiles],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Single',
        'Multiple',
        'Standalone',
        'With button',
        'Custom content',
        'Camera capture',
        'Model',
    ];

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
    protected maxFileSize = this.maxFileSizeVariants[2]!;

    protected readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    protected size = this.sizeVariants[0]!;
    protected readonly control = new FormControl<File[] | null>(null);
    protected readonly files$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    protected removeFile(file: File): void {
        this.rejected = this.rejected.filter((current) => current !== file);
        this.control.setValue(
            this.control.value?.filter((current) => current !== file) || null,
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
`;export{o as default};
