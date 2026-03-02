import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp, TuiZoom, type TuiZoomEvent} from '@taiga-ui/cdk';
import {map, scan, startWith, Subject} from 'rxjs';

@Component({
    imports: [AsyncPipe, DecimalPipe, TuiZoom],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly delta$ = new Subject<number>();

    protected readonly scale$ = this.delta$.pipe(
        scan((scale, next) => tuiClamp(scale + next, 0.5, 3), 1),
        startWith(1),
    );

    protected readonly transform$ = this.scale$.pipe(map((scale) => \`scale(\${scale})\`));

    protected onZoom({delta}: TuiZoomEvent): void {
        this.delta$.next(delta);
    }
}
`;export{o as default};
