import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {clamp, TuiZoom} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

@Component({
    selector: `tui-zoom-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiZoomExample1 {
    readonly delta$ = new Subject<number>();

    readonly scale$ = this.delta$.pipe(
        scan((scale, next) => clamp(scale + next, 0.5, 3), 1),
        startWith(1),
    );

    readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));

    onZoom({delta}: TuiZoom): void {
        this.delta$.next(delta);
    }
}
