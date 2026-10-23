# InputFiles

- **Package**: `KIT`
- **Type**: components

An input for uploading one or several files using native input file capabilities

### How to Use (Import)

```ts
import {TuiFiles} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [TuiFiles],
  //...
})
export class Example {}
```

### How to Use (Template)

```html
<label tuiInputFiles>
  <input
    tuiInputFiles
    accept="image/*"
    [multiple]="true"
    [formControl]="control"
    (reject)="onReject($event)"
  />
</label>

<tui-files>
  <tui-file
    tuiItem
    [file]="file"
  ></tui-file>
</tui-files>
```

### Example

```html
<label [tuiInputFiles]="size">
<input #validator="tuiInputFilesValidator" tuiInputFiles [accept]="accept" [formControl]="control" [invalid]="controlDoc.invalid" [maxFileSize]="maxFileSize" [multiple]="multiple" [tuiDisabled]="controlDoc.disabled" (reject)="updateRejected($event); reject.emitEvent($event)" />
</label>
<tui-files class="tui-space_top-2" [max]="maxFilesCount" [(expanded)]="expanded" >
<ng-container *ngFor="let file of files$ | async">
<tui-file *tuiItem [file]="file" [showDelete]="showDelete" [showSize]="showSize" [size]="size" (remove)="removeFile(file); remove.emitEvent($event)" />
</ng-container>
<ng-container *ngFor="let file of rejected">
<tui-file *tuiItem state="error" [file]="(file | tuiFileRejected: validator | async) || file" [showDelete]="showDelete" [showSize]="showSize" [size]="size" (remove)="removeFile(file); remove.emitEvent($event)" />
</ng-container>
</tui-files>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [accept] | `string` | Allowed formats |
| [maxFileSize] | `number` | Max file size in bytes (30 MB by default — 30 * 1000 * 1000) |
| [multiple] | `boolean` | Allows to upload several files |
| [tuiInputFiles] | `TuiSizeL` | Drop zone size |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (reject) | `TuiFileLike[]` | Emits files that were rejected. |

### Usage Examples

#### Single

**Template:**
```html
<label *ngIf="!control.value" tuiInputFiles >
<input accept="image/*" tuiInputFiles [formControl]="control" />
</label>
<tui-files class="tui-space_top-1">
<tui-file *ngIf="control.value | tuiFileRejected: {accept: 'image/*'} | async as file" state="error" [file]="file" (remove)="removeFile()" />
<tui-file *ngIf="loadedFiles$ | async as file" [file]="file" (remove)="removeFile()" />
<tui-file *ngIf="failedFiles$ | async as file" state="error" [file]="file" (remove)="removeFile()" />
<tui-file *ngIf="loadingFiles$ | async as file" state="loading" [file]="file" (remove)="removeFile()" />
</tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';
import {finalize, map, type Observable, of, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiFiles],
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

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" accept="image/*" tuiInputFiles [formControl]="control" [multiple]="true" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1">
<tui-file *ngFor="let file of accepted$ | async" [file]="file" (remove)="onRemove(file)" />
<tui-file *ngFor="let file of rejected" state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" />
</tui-files>
<tui-error [error]="['maxLength'] | tuiFieldError | async" [formControl]="control" />
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
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
import {TuiFieldErrorPipe, TuiFiles, tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiFiles,
    ],
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

**Template:**
```html
<tui-files>
<tui-file *ngFor="let file of files" state="normal" [file]="file" [showDelete]="control.enabled" />
<tui-file *ngFor="let file of rejectedFiles" state="error" [file]="file" [showDelete]="control.enabled" />
<tui-file *ngIf="loadingFile && !isE2E" state="loading" [file]="loadingFile" [showDelete]="control.enabled" (remove)="removeLoading()" />
</tui-files>
<h4>With link</h4>
<tui-files>
<a *tuiItem rel="noreferrer" state="normal" target="_blank" tuiFile [file]="fileWithLink" [href]="fileWithLink.src" [showDelete]="control.enabled" ></a>
</tui-files>
<h4>With deleted state</h4>
<tui-files>
<tui-file *ngFor="let file of removedFiles" size="l" state="deleted" [file]="file" [showDelete]="control.enabled" >
<button tuiLink type="button" (click)="restore(file)" > Restore </button>
</tui-file>
<tui-file *ngFor="let file of restoredFiles" size="l" state="normal" [file]="file" [leftContent]="icon" [showDelete]="control.enabled" (remove)="remove(file)" />
</tui-files>
<ng-template #icon>
<tui-icon src="@tui.file" />
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, NgIf, TuiFiles, TuiIcon, TuiItem, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly files: readonly TuiFileLike[] = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
        },
    ];

    protected loadingFile: TuiFileLike | null = {
        name: 'Loading file.txt',
    };

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

    protected removedFiles: TuiFileLike[] = [this.loadingFile as unknown as TuiFileLike];
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

**Template:**
```html
<tui-files [max]="3">
<ng-container *ngFor="let file of files">
<tui-file *tuiItem state="normal" [file]="file" />
</ng-container>
<ng-container *ngFor="let file of rejectedFiles">
<a *tuiItem rel="noreferrer" state="error" target="_blank" tuiFile [file]="file" ></a>
</ng-container>
</tui-files>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiFiles, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected height = 3;

    protected readonly files: readonly TuiFileLike[] = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'last_file.txt',
        },
    ];

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
        },
    ];
}
```

#### Custom content

**Template:**
```html
<label tuiInputFiles="l">
<input tuiInputFiles [formControl]="control" />
<ng-template let-dragged>
<ng-container *ngIf="dragged; else base">
<tui-avatar appearance="secondary" src="@tui.droplet" />
<div> Drop it like it's hot! <br />
<br />
</div>
</ng-container>
<ng-template #base>
<tui-avatar appearance="secondary" src="@tui.cloud-upload" />
<div> Drag and drop file here or <a tuiLink>click to upload</a>
</div>
<div class="types">PNG, JPG, JPEG, PNG, etc</div>
</ng-template>
</ng-template>
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
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TuiAvatar, TuiFiles, TuiIcon, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly file: TuiFileLike = {
        name: 'custom.txt',
    };
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

**Template:**
```html
<label *ngIf="!control.value" tuiInputFiles >
<input accept="image/*" capture="user" title="Choose files (no limits)" tuiInputFiles [formControl]="control" />
</label>
<tui-files class="tui-space_top-1">
<tui-file *ngIf="control.valueChanges | async as file" [file]="file" (remove)="removeFile()" />
</tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiFiles],
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

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" accept="image/*" tuiInputFiles [multiple]="true" [ngModel]="files" (ngModelChange)="onChange($event)" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1">
<tui-file *ngFor="let file of rejected" state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" />
<tui-file *ngFor="let file of files" state="normal" [file]="file" (remove)="onRemove(file)" />
</tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, FormsModule, NgForOf, TuiFiles],
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

**Template:**
```html
<label tuiInputFiles>
<input #validator="tuiInputFilesValidator" tuiInputFiles [formControl]="control" [multiple]="true" (reject)="onReject($event)" />
</label>
<tui-files class="tui-space_top-1">
<tui-file *ngFor="let file of accepted$ | async" [file]="file" (remove)="onRemove(file)" />
<tui-file *ngFor="let file of rejected" state="error" [file]="(file | tuiFileRejected: validator | async) || file" (remove)="onRemove(file)" />
</tui-files>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles, tuiFilesAccepted, tuiInputFilesOptionsProvider} from '@taiga-ui/kit';
import {map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgForOf, ReactiveFormsModule, TuiFiles],
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
    protected readonly control = new FormControl<File[]>([
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
