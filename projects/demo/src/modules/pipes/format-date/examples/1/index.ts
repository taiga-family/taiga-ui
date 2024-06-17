import {AsyncPipe, isPlatformBrowser} from '@angular/common';
import {Component, inject, Injectable, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatDatePipe, TuiFormatDateService} from '@taiga-ui/core';
import {formatDistance} from 'date-fns';
import type {Observable} from 'rxjs';
import {map, of, timer} from 'rxjs';

@Injectable()
export class FormatService extends TuiFormatDateService {
    private readonly delay$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? timer(0, 1000)
        : of(0);

    public override format(timestamp: number): Observable<string> {
        return this.delay$.pipe(map(() => formatDistance(timestamp, Date.now())));
    }
}

@Component({
    standalone: true,
    imports: [TuiFormatDatePipe, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TuiFormatDateService,
            useClass: FormatService,
        },
    ],
})
export default class Example {
    protected readonly now = Date.now();
}
