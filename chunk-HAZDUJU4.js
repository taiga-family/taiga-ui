import"./chunk-HU6DUUP4.js";var e=`import {AsyncPipe} from '@angular/common';
import {type AfterViewInit, Component, ViewChild} from '@angular/core';
import {outputToObservable} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiScrollbar} from '@taiga-ui/core';
import {distinctUntilChanged, map, type Observable, startWith} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiAmountPipe, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example implements AfterViewInit {
    @ViewChild(TuiElasticSticky)
    protected readonly elasticSticky?: TuiElasticSticky;

    protected scale$?: Observable<number>;

    public ngAfterViewInit(): void {
        if (!this.elasticSticky) {
            return;
        }

        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = outputToObservable(this.elasticSticky.tuiElasticSticky).pipe(
            map((scale) => tuiClamp(scale, 0.5, 1)),
            startWith(1),
            distinctUntilChanged(),
        );
    }
}
`;export{e as default};
