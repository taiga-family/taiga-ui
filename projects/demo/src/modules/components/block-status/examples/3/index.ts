import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiBreakpointService, TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgIf, AsyncPipe, TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map((key) => (key === 'mobile' ? 'm' : 'l')),
    );
}
