import"./chunk-HU6DUUP4.js";var o=`import {isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiProgressCircle, TuiToast} from '@taiga-ui/kit';
import {BehaviorSubject, of, switchMap, take, timer} from 'rxjs';

@Component({
    imports: [TuiButton, TuiLoader, TuiPlatform, TuiProgressCircle, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly trigger$ = new BehaviorSubject(0);
    protected readonly value = toSignal(
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : this.trigger$.pipe(switchMap(() => timer(0, 200).pipe(take(100)))),
        {initialValue: 0},
    );
}
`;export{o as default};
