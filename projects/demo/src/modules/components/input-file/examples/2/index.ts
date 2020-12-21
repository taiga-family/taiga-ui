import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';
import {combineLatest, Observable, Subject, timer} from 'rxjs';
import {
    distinctUntilChanged,
    map,
    mapTo,
    scan,
    share,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

class RejectedFile {
    constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function isFile(file: any): file is File {
    return file instanceof File;
}

function isRejectedFile(file: any): file is RejectedFile {
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
    selector: 'tui-input-file-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputFileExample2 {
    readonly files = new FormControl([]);

    private readonly rejectedFiles$ = new Subject<ReadonlyArray<TuiFileLike>>();

    @tuiPure
    get files$(): Observable<ReadonlyArray<RejectedFile | File | null>> {
        return this.files.valueChanges.pipe(
            // We only listen to changes where new files are added
            distinctUntilChanged<ReadonlyArray<File>>((previous, current) =>
                current.some(file => previous.indexOf(file) === -1),
            ),
            // We map files to server requests
            switchMap(files =>
                combineLatest(
                    // Server requests start with file and end with null for success or IRejectedFile for error
                    files.map(file => this.serverRequest(file).pipe(startWith(file))),
                ),
            ),
            share(),
        );
    }

    @tuiPure
    get loading$(): Observable<ReadonlyArray<File>> {
        return this.files$.pipe(
            // We filter out nulls and RejectedFiles to remove successfully loaded files and errors from loading array
            map(files => files.filter(isFile)),
            switchMap(loading =>
                this.files.valueChanges.pipe(
                    startWith(this.files.value),
                    // We filter out loading items that were removed from control before server responded
                    map(value => loading.filter(file => value.indexOf(file) !== -1)),
                ),
            ),
            startWith([]),
        );
    }

    @tuiPure
    get rejected$(): Observable<ReadonlyArray<TuiFileLike>> {
        // We start with internal changes (i.e. wrong format or size found or user removed existing error message)
        return this.rejectedFiles$.pipe(
            switchMap(rejectedFiles =>
                this.files$.pipe(
                    // We filter out nulls and Files to ignore successfully loaded and loading files
                    map(files => files.filter(isRejectedFile)),
                    // We collect all newly rejected files and previously rejected since we switch mapped
                    scan<RejectedFile[]>(
                        (previous, current) => [
                            ...previous,
                            ...current.filter(
                                ({file}) => this.files.value.indexOf(file) !== -1,
                            ),
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
    }

    onRejectedFilesChange(rejectedFiles: ReadonlyArray<TuiFileLike>) {
        this.rejectedFiles$.next(rejectedFiles);
    }

    private removeRejected(rejectedFiles: ReadonlyArray<RejectedFile>) {
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
                : new RejectedFile(file, 'Server responded for odd number of time');

        return timer(delay).pipe(mapTo(result));
    }
}
