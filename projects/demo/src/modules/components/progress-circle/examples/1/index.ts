import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiProgressModule} from '@taiga-ui/kit';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiProgressModule, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly max = 100;
    protected readonly value$ =
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  map(i => i + 30),
                  startWith(30),
                  takeWhile(value => value <= this.max),
              );
}
