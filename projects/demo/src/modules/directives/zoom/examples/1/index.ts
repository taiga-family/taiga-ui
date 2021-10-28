import {Component} from '@angular/core';
import {clamp, TuiZoom} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';
import {map, scan} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-zoom-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiZoomExample1 {
    readonly delta$ = new Subject<number>();

    readonly transform$ = this.delta$.pipe(
        scan((scale, next) => clamp(scale + next, 0.5, 3), 1),
        map(scale => `scale(${scale})`),
    );

    onZoom({delta}: TuiZoom) {
        this.delta$.next(delta);
    }
}
