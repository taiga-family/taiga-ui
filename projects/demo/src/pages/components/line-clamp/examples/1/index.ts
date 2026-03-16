import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {tuiWatch} from '@taiga-ui/cdk';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {TuiChip, TuiFade, TuiLineClamp} from '@taiga-ui/kit';
import {map, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiChip, TuiLineClamp, TuiNotification, TuiFade],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(WA_IS_E2E);

    protected readonly value = signal('');

    protected value$ = timer(this.isE2E ? 0 : 4000).pipe(
        map(() => `${'async fake value, '.repeat(10)}end!`),
        tuiWatch(),
    );

    public update(): void {
        this.value.set(
            'Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven Kingdoms, Breaker of Chains and Mother of Dragons',
        );
    }
}
