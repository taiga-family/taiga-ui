import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {map, of, startWith, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiProgress],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(40)
            : timer(300, 300).pipe(
                  map((i) => i + 30),
                  startWith(30),
              );
}
`;export{o as default};
