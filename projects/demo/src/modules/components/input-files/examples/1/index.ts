import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFileLike} from '@taiga-ui/kit';
import {finalize, map, Observable, of, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-input-files-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample1 {
    readonly control = new FormControl<TuiFileLike | null>(null);
    readonly failedFiles$ = new Subject<TuiFileLike | null>();
    readonly loadingFiles$ = new Subject<TuiFileLike | null>();
    readonly loadedFiles$ = this.control.valueChanges.pipe(
        switchMap(file => this.processFile(file)),
    );

    removeFile(): void {
        this.control.setValue(null);
    }

    processFile(file: TuiFileLike | null): Observable<TuiFileLike | null> {
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
