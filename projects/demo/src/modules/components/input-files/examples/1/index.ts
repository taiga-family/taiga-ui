import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiFileLike} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {finalize, map, of, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-input-files-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample1 {
    protected readonly control = new FormControl<TuiFileLike | null>(null);
    protected readonly failedFiles$ = new Subject<TuiFileLike | null>();
    protected readonly loadingFiles$ = new Subject<TuiFileLike | null>();
    protected readonly loadedFiles$ = this.control.valueChanges.pipe(
        switchMap(file => this.processFile(file)),
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
