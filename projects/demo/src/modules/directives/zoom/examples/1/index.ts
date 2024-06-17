import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiZoom} from '@taiga-ui/cdk';
import {tuiClamp, TuiZoomDirective} from '@taiga-ui/cdk';
import {map, scan, startWith, Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiZoomDirective, AsyncPipe, DecimalPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly delta$ = new Subject<number>();

    protected readonly scale$ = this.delta$.pipe(
        scan((scale, next) => tuiClamp(scale + next, 0.5, 3), 1),
        startWith(1),
    );

    protected readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));

    protected onZoom({delta}: TuiZoom): void {
        this.delta$.next(delta);
    }
}
