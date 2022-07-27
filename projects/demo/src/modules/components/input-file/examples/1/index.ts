import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';
import {Observable, of, timer} from 'rxjs';
import {map, mapTo, share, startWith, switchMap, tap} from 'rxjs/operators';

class RejectedFile {
    constructor(readonly file: TuiFileLike, readonly reason: string) {}
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
    selector: `tui-input-file-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputFileExample1 {
    readonly control = new FormControl();

    @tuiPure
    get loading$(): Observable<readonly File[]> {
        return this.requests$.pipe(
            map(file => (file instanceof File ? [file] : [])),
            startWith([]),
        );
    }

    @tuiPure
    get rejected$(): Observable<readonly TuiFileLike[]> {
        return this.requests$.pipe(
            map(file => (file instanceof RejectedFile ? [convertRejected(file)] : [])),
            tap(({length}) => {
                if (length) {
                    this.control.setValue(null);
                }
            }),
            startWith([]),
        );
    }

    @tuiPure
    private get requests$(): Observable<RejectedFile | File | null> {
        return this.control.valueChanges.pipe(
            switchMap(file =>
                file ? this.serverRequest(file).pipe(startWith(file)) : of(null),
            ),
            share(),
        );
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
