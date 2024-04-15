import {isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {TuiFormatDateService} from '@taiga-ui/core';
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
