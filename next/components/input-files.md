# InputFiles

- **Package**: `KIT`
- **Type**: components

An input for uploading one or several files using native input file capabilities

### Example

```html
<label [tuiInputFiles]="size">
<input #validator="tuiInputFilesValidator" tuiInputFiles [accept]="accept" [formControl]="control" [invalid]="controlDoc.invalid" [maxFileSize]="maxFileSize" [multiple]="multiple" [tuiDisabled]="controlDoc.disabled" (reject)="updateRejected($event); reject.emitEvent($event)" />
</label>
<tui-files class="tui-space_top-2" [max]="maxFilesCount" [(expanded)]="expanded" > @for (file of files$ | async; track file) { <tui-file *tuiItem [file]="file" [showDelete]="showDelete" [showSize]="showSize" [size]="size" (remove)="removeFile(file); remove.emitEvent($event)" /> } @for (file of rejected; track file) { <tui-file *tuiItem state="error" [file]="(file | tuiFileRejected: validator | async) || file" [showDelete]="showDelete" [showSize]="showSize" [size]="size" (remove)="removeFile(file); remove.emitEvent($event)" /> } </tui-files>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [accept] | `string` | allowed formats |
| [maxFileSize] | `number` | max file size in bytes (30 MB by default — 30 * 1000 * 1000) |
| [multiple] | `boolean` | allows to upload several files |
| [tuiInputFiles] | `TuiSizeL` | drop zone size |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (reject) | `TuiFileLike[]` | emits files that were rejected. |

### TuiFiles - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [max] | `number` | maximum number of displayed files |
| [(expanded)] | `boolean` | expanded/collapsed state for multiple files that are limited by the max property |

### TuiFile - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [showDelete] | `boolean \| 'always'` | allow to delete file after attach it |
| [file] | `TuiFileLike` | — |
| [state] | `TuiFileState` | state of the file |
| [showSize] | `boolean` | show file size |
| [size] | `TuiSizeL` | — |

### TuiFile - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (remove) | `void` | emits on click on close button. When subscribed to, close button appears. |

### Usage Examples

#### Single

Selecting one file at a time

**Template:**
```html
@if (!control.value) { <label tuiInputFiles>
<input accept="image/*" tuiInputFiles [formControl]="control" />
</label> } <tui-files class="tui-space_top-1"> @if (control.value | tuiFileRejected: {accept: 'image/*'} | async; as file) { <tui-file state="error" [file]="file" (remove)="removeFile()" /> } @if (loadedFiles$ | async; as file) { <tui-file size="l" [file]="file" (remove)="removeFile()" /> } @if (failedFiles$ | async; as file) { <tui-file state="error" [file]="file" (remove)="removeFile()" /> } @if (loadingFiles$ | async; as file) { <tui-file state="loading" [file]="file" (remove)="removeFile()" /> } </tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';
import {finalize, map, type Observable, of, Subject, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(
        null,
        Validators.required,
    );

    protected readonly failedFiles$ = new Subject<TuiFileLike | null>();
    protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();

    protected readonly loadedFiles$ = this.control.valueChanges.pipe(
        switchMap((file) => this.processFile(file)),
    );

    protected removeFile(): void {
        this.control.setValue(null);
    }

    protected processFile(file: TuiFileLike | null): Observable<TuiFileLike | null> {
        this.failedFiles$.next(null);

        if (this.control.invalid || !file) {
            return of(null);
        }

        this.loadingFiles$.next(file);

        return timer(1000).pipe(
            map(() => {
                if (Math.random() > 0.5) {
                    return file;
                }

                this.failedFiles$.next(file);

                return null;
            }),
            finalize(() => this.loadingFiles$.next(null)),
        );
    }
}
```

#### Multiple

Selecting and processing multiple files at once

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" accept="image/*" tuiInputFiles [formControl]="control" [multiple]="true" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1"> @for (file of accepted$ | async; track file) { <tui-file [file]="file" (remove)="onRemove(file)" /> } @for (file of rejected; track file) { <tui-file state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" /> } </tui-files>
<tui-error [formControl]="control" [order]="['maxLength']" />
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    ReactiveFormsModule,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFiles, tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiError, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);

    protected readonly accepted$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    protected rejected: readonly File[] = [];

    protected onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    protected onRemove(file: File): void {
        this.rejected = this.rejected.filter((rejected) => rejected !== file);
        this.control.setValue(
            this.control.value?.filter((current) => current !== file) ?? [],
        );
    }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
    return ({value}: AbstractControl) =>
        value.length > maxLength
            ? {
                  maxLength: new TuiValidationError(
                      'Error: maximum limit - 5 files for upload',
                  ),
              }
            : null;
}
```

#### Standalone

Displaying file-like items without the input

**Template:**
```html
<tui-files> @for (file of files; track file) { <tui-file state="normal" [file]="file" [showDelete]="control.enabled" /> } @for (file of rejectedFiles; track file) { <tui-file state="error" [file]="file" [showDelete]="control.enabled" /> } @if (loadingFile && !isE2E) { <tui-file state="loading" [file]="loadingFile" [showDelete]="control.enabled" (remove)="removeLoading()" /> } </tui-files>
<h4>With link</h4>
<tui-files>
<a *tuiItem rel="noreferrer" state="normal" target="_blank" tuiFile [file]="fileWithLink" [href]="fileWithLink.src" [showDelete]="control.enabled" ></a>
</tui-files>
<h4>With deleted state</h4>
<tui-files> @for (file of removedFiles; track file) { <tui-file size="l" state="deleted" [file]="file" [showDelete]="control.enabled" >
<button tuiLink type="button" (click)="restore(file)" > Restore </button>
</tui-file> } @for (file of restoredFiles; track file) { <tui-file size="l" state="normal" [file]="file" [leftContent]="icon" [showDelete]="control.enabled" (remove)="remove(file)" /> } </tui-files>
<ng-template #icon>
<tui-icon src="@tui.file" />
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiFiles, TuiIcon, TuiItem, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly files: readonly TuiFileLike[] = [
        {name: 'Loaded.txt'},
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
        },
    ];

    protected loadingFile: TuiFileLike | null = {name: 'Loading file.txt'};

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    protected readonly fileWithLink: TuiFileLike = {
        name: 'with link.txt',
        src: 'https://tools.ietf.org/html/rfc675',
    };

    protected removedFiles = [this.loadingFile as unknown as TuiFileLike];
    protected restoredFiles: TuiFileLike[] = [];

    protected removeLoading(): void {
        this.loadingFile = null;
    }

    protected restore(file: TuiFileLike | null): void {
        if (!file) {
            return;
        }

        this.restoredFiles = [...this.restoredFiles, file];
        this.removedFiles = this.removedFiles.filter(
            (removed) => file.name !== removed?.name,
        );
    }

    protected remove(file: TuiFileLike): void {
        this.removedFiles = [...this.removedFiles, file];
        this.restoredFiles = this.restoredFiles.filter(
            (restored) => file.name !== restored?.name,
        );
    }
}
```

#### With button

Collapsing files list when it's too long

**Template:**
```html
<tui-files [max]="3"> @for (file of files; track file) { <tui-file *tuiItem state="normal" [file]="file" /> } @for (file of rejectedFiles; track file) { <a *tuiItem rel="noreferrer" state="error" target="_blank" tuiFile [file]="file" ></a> } </tui-files>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiFiles, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected height = 3;

    protected readonly files: readonly TuiFileLike[] = [
        {name: 'Loaded.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'last_file.txt'},
    ];

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {name: 'File with an error.txt'},
    ];
}
```

#### Custom content

Customizing drop area

**Template:**
```html
<label tuiInputFiles>
<input tuiInputFiles [formControl]="control" />
<ng-template let-dragged> @if (dragged) { <div appearance="secondary" size="l" tuiAvatar="@tui.droplet" ></div>
<div> Drop it like it's hot! <br />
<br />
</div> } @else { <div appearance="secondary" size="l" tuiAvatar="@tui.cloud-upload" ></div>
<div> Drag and drop file here or <a tuiLink>click to upload</a>
</div>
<div class="types">PNG, JPG, JPEG, PNG, etc</div> } </ng-template>
</label>
<tui-files class="tui-space_top-4">
<tui-file [file]="file" [leftContent]="content" >
<span class="tui-text_body-s-2">file is on checking</span>
</tui-file>
</tui-files>
<ng-template #content>
<tui-icon icon="@tui.clock" />
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiAvatar, TuiFiles, TuiIcon, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);
    protected readonly file: TuiFileLike = {name: 'custom.txt'};
}
```

**LESS:**
```less
:host {
    display: block;
    min-inline-size: 25rem;
}

.types {
    color: var(--tui-text-secondary);
    font-size: 0.6875rem;
}
```

#### Camera capture

The capture attribute works only on mobile browsers

**Template:**
```html
@if (!control.value) { <label tuiInputFiles>
<input accept="image/*" capture="user" title="Choose files (no limits)" tuiInputFiles [formControl]="control" />
</label> } <tui-files class="tui-space_top-1"> @if (control.valueChanges | async; as file) { <tui-file [file]="file" (remove)="removeFile()" /> } </tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected removeFile(): void {
        this.control.setValue(null);
    }
}
```

#### Model

Using template driven forms

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" accept="image/*" tuiInputFiles [multiple]="true" [ngModel]="files" (ngModelChange)="onChange($event)" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1"> @for (file of rejected; track file) { <tui-file state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" /> } @for (file of files; track file) { <tui-file state="normal" [file]="file" (remove)="onRemove(file)" /> } </tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [AsyncPipe, FormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected files: File[] = [];
    protected rejected: File[] = [];

    protected onRemove(remove: File): void {
        this.files = this.files.filter((file) => file !== remove);
        this.rejected = this.rejected.filter((file) => file !== remove);
    }

    protected onChange(files: File[]): void {
        this.files = files.filter((file) => !this.rejected.includes(file));
    }

    protected onReject(rejected: File[]): void {
        this.rejected = rejected;
    }
}
```

#### Accept

Uploading files with accept attribute containing multiple extensions separated by spaces

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" tuiInputFiles [formControl]="control" [multiple]="true" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1"> @for (file of accepted$ | async; track file) { <tui-file [file]="file" (remove)="onRemove(file)" /> } @for (file of rejected; track file) { <tui-file state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" /> } </tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles, tuiFilesAccepted, tuiInputFilesOptionsProvider} from '@taiga-ui/kit';
import {map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, ReactiveFormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputFilesOptionsProvider({
            accept: '.jpeg, .jpg, .png, .pdf, .doc, .docx, .zip, .tif',
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl([
        new File(['mock zip content'], 'valid.zip', {type: 'application/zip'}),
        new File(['Lorem ipsum'], 'wrong.txt', {type: 'application/txt'}),
    ]);

    protected readonly accepted$ = this.control.valueChanges.pipe(
        startWith(this.control.value),
        map(() => tuiFilesAccepted(this.control)),
    );

    protected rejected: readonly File[] = [];

    protected onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    protected onRemove(file: File): void {
        this.rejected = this.rejected.filter((current) => current !== file);
        this.control.setValue(
            this.control.value?.filter((current) => current !== file) ?? [],
        );
    }
}
```
