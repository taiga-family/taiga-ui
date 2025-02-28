import {AsyncPipe, isPlatformServer, NgIf} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiPager, TuiProgress} from '@taiga-ui/kit';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, FormsModule, NgIf, TuiButton, TuiPager, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected length = 10;
    protected index = 0;

    protected readonly width$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(100)
            : timer(10, 10).pipe(
                  startWith(0),
                  map((i) => i + 20),
                  takeWhile((value) => value <= 40),
              );

    protected readonly value$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(50, 50).pipe(
                  map((i) => i + 100),
                  startWith(30),
                  takeWhile((value) => value <= 100),
              );

    protected prev(): void {
        this.index = Math.max(this.index - 1, 0);
    }

    protected next(): void {
        this.index = Math.min(this.index + 1, this.length - 1);
    }
}
