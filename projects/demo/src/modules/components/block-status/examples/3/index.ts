import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiBreakpointService, TuiButtonDirective} from '@taiga-ui/core';
import {TuiBlockStatusModule} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgIf, AsyncPipe, TuiBlockStatusModule, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map(key => (key === 'mobile' ? 'm' : 'l')),
    );
}
