import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiItemDirective, tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiNotificationComponent} from '@taiga-ui/core';
import {
    TuiFileComponent,
    TuiFileRejectedPipe,
    tuiFilesAccepted,
    TuiFilesComponent,
    TuiInputFilesComponent,
    TuiInputFilesDirective,
} from '@taiga-ui/kit';
import {map} from 'rxjs';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiInputFilesComponent,
        TuiInputFilesDirective,
        ReactiveFormsModule,
        TuiFilesComponent,
        TuiFileComponent,
        TuiItemDirective,
        TuiFileRejectedPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    public override size = this.sizeVariants[0];
    public readonly control = new FormControl<File[] | null>(null);

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
