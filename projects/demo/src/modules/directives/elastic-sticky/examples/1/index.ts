import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';
import {clamp} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-elastic-sticky-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiElasticStickyExample1 implements AfterViewInit {
    @ViewChild(TuiElasticStickyDirective)
    readonly elasticSticky?: TuiElasticStickyDirective;

    scale$?: Observable<number>;

    ngAfterViewInit() {
        if (!this.elasticSticky) {
            return;
        }

        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(
            map(scale => clamp(scale, 0.5, 1)),
            startWith(1),
            distinctUntilChanged(),
        );
    }
}
