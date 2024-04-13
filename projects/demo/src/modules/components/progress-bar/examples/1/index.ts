import {isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, of, startWith, timer} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-progress-bar-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiProgressBarExample1 {
    protected readonly value$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(40)
            : timer(300, 300).pipe(
                  map(i => i + 30),
                  startWith(30),
              );
}
