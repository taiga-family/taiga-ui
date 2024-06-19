import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core';
import {TuiLineClampComponent} from '@taiga-ui/kit';
import {map, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiLineClampComponent, TuiNotification, NgIf, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);

    protected value$ = timer(this.isE2E ? 0 : 4000).pipe(
        map(() => `${'async fake value, '.repeat(10)}end!`),
    );
}
