import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, watch} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit';
import {combineLatest, Observable, Subject, timer} from 'rxjs';
import {mapTo, startWith, switchMap, takeUntil} from 'rxjs/operators';

class RejectedFile {
    constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function isRejectedFile(file: any): file is RejectedFile {
    return file instanceof RejectedFile;
}

function getRemoved<T>(oldArray: readonly T[], newArray: readonly T[]): T | null {
    const filtered = oldArray.filter(item => !newArray.includes(item));

    return filtered.length === 1 ? filtered[0] : null;
}

function isNarrowed<T>(oldArray: readonly T[], newArray: readonly T[]): boolean {
    return newArray.every(item => oldArray.includes(item));
}

function convertRejected({file, reason}: RejectedFile): TuiFileLike {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        content: reason,
    };
}

@Component({
    selector: 'tui-input-file-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiInputFileExample3 {
    private readonly files$ = new Subject<readonly TuiFileLike[]>();

    files: readonly TuiFileLike[] = [
        {
            name: 'Loading file.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
            src: 'https://tools.ietf.org/html/rfc675',
        },
    ];

    loadingFiles: readonly TuiFileLike[] = [this.files[0]];
    rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {
        this.files$
            .pipe(
                switchMap(files =>
                    combineLatest(
                        files.map(file => this.serverRequest(file).pipe(startWith(file))),
                    ),
                ),
                watch(changeDetectorRef),
                takeUntil(destroy$),
            )
            .subscribe(response => {
                this.processResponse(response);
            });
    }

    onModelChange(files: readonly TuiFileLike[]): void {
        this.processNotification(files);

        if (isNarrowed(this.files, files)) {
            this.files = files;
            this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));

            return;
        }

        this.files = files;
        this.loadingFiles = this.files;
        this.files$.next(this.files);
    }

    private processNotification(files: readonly TuiFileLike[]): void {
        const removed = getRemoved(this.files, files);

        if (removed) {
            this.alertService.open(`"${removed.name}" was removed`).subscribe();
        }
    }

    private processResponse(
        files: ReadonlyArray<RejectedFile | TuiFileLike | null>,
    ): void {
        this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));

        const newRejectedFiles = files
            .filter(
                (element: RejectedFile | TuiFileLike | null): element is RejectedFile =>
                    isRejectedFile(element),
            )
            .filter(({file}) => this.files.includes(file));

        if (newRejectedFiles.length === 0) {
            return;
        }

        this.rejectedFiles = [
            ...this.rejectedFiles,
            ...newRejectedFiles.map(element => convertRejected(element)),
        ];
        this.files = this.files.filter(file =>
            newRejectedFiles.every(rejectedFile => rejectedFile.file !== file),
        );
    }

    private serverRequest(file: TuiFileLike): Observable<RejectedFile | File | null> {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result =
            delay % 2
                ? null
                : new RejectedFile(file, 'Server responded for odd number of time');

        return timer(delay).pipe(mapTo(result));
    }
}
