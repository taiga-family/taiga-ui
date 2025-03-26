import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiPager, TuiProgress} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {map, of, takeWhile, tap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiMapperPipe, TuiPager, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected static = inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));
    protected length = 10;
    protected activeIndex = signal(0);

    protected readonly toProgress = (active: boolean): Observable<number> =>
        active && !this.static
            ? timer(0, 100).pipe(
                  map((i) => i * 5 + 20),
                  takeWhile((value) => value <= 100),
                  tap({complete: () => this.next()}),
              )
            : of(100);

    protected prev(): void {
        this.activeIndex.update((index) => Math.max(index - 1, 0));
    }

    protected next(): void {
        this.activeIndex.update((index) => Math.min(index + 1, this.length - 1));
    }
}
