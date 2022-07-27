import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiDurationOptions, tuiFadeIn} from '@taiga-ui/core';
import {from, of} from 'rxjs';
import {concatMap, delay, repeat, startWith} from 'rxjs/operators';

@Component({
    selector: `tui-fade-in-example`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    animations: [tuiFadeIn],
})
export class TuiFadeInExample {
    @Input()
    speed = 0;

    isShown$ = from([false, true]).pipe(
        concatMap(val => of(val).pipe(delay(1.5 * this.speed))),
        repeat(),
        startWith(true),
    );

    @tuiPure
    getAnimation(duration: number): TuiDurationOptions {
        return {value: ``, params: {duration}};
    }
}
