import {AsyncPipe, isPlatformBrowser, NgIf} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {tuiFadeIn} from '@taiga-ui/core';
import {concatMap, delay, from, of, repeat, startWith} from 'rxjs';

import {AnimationState} from '../../state';

@Component({
    standalone: true,
    imports: [NgIf, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export default class ExampleComponent {
    protected speed = inject(AnimationState);

    protected isShown$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? from([false, true]).pipe(
              concatMap(val => of(val).pipe(delay(1.5 * this.speed.value))),
              repeat(),
              startWith(true),
          )
        : of(true);

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
