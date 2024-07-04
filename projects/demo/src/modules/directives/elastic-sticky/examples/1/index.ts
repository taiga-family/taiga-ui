import {AsyncPipe} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiScrollbar} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiScrollbar, TuiElasticSticky, TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(
            map((scale) => tuiClamp(scale, 0.5, 1)),
            startWith(1),
            distinctUntilChanged(),
        );
    }
}
