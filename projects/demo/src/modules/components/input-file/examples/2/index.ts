import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {isPresent} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';
import {combineLatest, Observable, Subject, timer} from 'rxjs';
import {
    filter,
    map,
    mapTo,
    mergeScan,
    pairwise,
    scan,
    share,
    startWith,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs/operators';

class RejectedFile {
    constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function isFile(file: unknown): file is File {
    return file instanceof File;
}

function isRejectedFile(file: unknown): file is RejectedFile {
    return file instanceof RejectedFile;
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
    selector: `tui-input-file-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputFileExample2 {
    private readonly files = new FormControl([]);

    private readonly rejectedFiles$ = new Subject<readonly TuiFileLike[]>();

    private readonly files$ = this.files.valueChanges.pipe(
        // We start with empty array for pairwise to work immediately
        startWith<readonly File[]>([]),
        pairwise(),
        // We map each emit to newly added files
        map(([prev, cur]) => cur.filter(item => !prev.includes(item))),
        // We use mergeScan + combineLatest to accumulate results in one array
        mergeScan(
            (acc: ReadonlyArray<RejectedFile | File>, cur) =>
                combineLatest(
                    cur.map(file =>
                        this.serverRequest(file).pipe(
                            startWith(file),
                            takeUntil(
                                // Cancel upload if file is removed from control
                                this.files.valueChanges.pipe(
                                    filter(files => !files.includes(file)),
                                ),
                            ),
                        ),
                    ),
                    // Filtering out `null` as successfully uploaded files
                ).pipe(map(files => [...acc, ...files.filter(isPresent)])),
            [],
        ),
        // Now we have a shared Observable of currently loading Files and server-rejects
        share(),
    );

    readonly loading$: Observable<readonly TuiFileLike[]> = this.files$.pipe(
        // We filter out RejectedFiles to remove errors from loading array
        map(files => files.filter(isFile)),
        switchMap(loading =>
            this.files.valueChanges.pipe(
                startWith(this.files.value),
                // We filter out loading items that were removed from control before server responded
                map(value => loading.filter(file => value.includes(file))),
            ),
        ),
        startWith([]),
    );

    // We start with internal changes (i.e. wrong format or size found or user removed existing error message)
    readonly rejected$: Observable<readonly TuiFileLike[]> = this.rejectedFiles$.pipe(
        switchMap(rejectedFiles =>
            this.files$.pipe(
                // We filter out Files to ignore loading files
                map(files => files.filter(isRejectedFile)),
                // We collect all newly rejected files and previously rejected since we switch mapped
                scan<RejectedFile[]>(
                    (previous, current) => [
                        ...previous,
                        ...current.filter(({file}) => this.files.value.includes(file)),
                    ],
                    [],
                ),
                // We remove server errored files from control **SIDE EFFECT**
                tap(files => this.removeRejected(files)),
                // Map new RejectedFiles to TuiFileLike with rejection reason
                map(files => files.map(convertRejected)),
                // Combine with currently present rejected files
                map(filtered => [...rejectedFiles, ...filtered]),
            ),
        ),
        startWith([]),
    );

    readonly form = new FormGroup({
        files: this.files,
    });

    onRejectedFilesChange(rejectedFiles: readonly TuiFileLike[]): void {
        this.rejectedFiles$.next(rejectedFiles);
    }

    private removeRejected(rejectedFiles: readonly RejectedFile[]): void {
        const filtered = this.files.value.filter((file: File) =>
            rejectedFiles.every(rejectedFile => rejectedFile.file !== file),
        );

        if (filtered.length !== this.files.value.length) {
            this.files.setValue(filtered);
        }
    }

    private serverRequest(file: File): Observable<RejectedFile | File | null> {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result =
            delay % 2
                ? null
                : new RejectedFile(file, `Server responded for odd number of time`);

        return timer(delay).pipe(mapTo(result));
    }
}
