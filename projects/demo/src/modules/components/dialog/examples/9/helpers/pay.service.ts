import {inject, Injectable} from '@angular/core';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, type Observable, timer} from 'rxjs';

import {MOCK_CARDS} from './mock-cards';
import {type AccountCard, type FetchedCards} from './models';

@Injectable({
    providedIn: 'root',
})
export class PayService {
    private readonly isE2E = inject(TUI_IS_E2E);

    public preparePayment(amount: number): Observable<number> {
        return timer(this.getRandomDelay()).pipe(map(() => amount));
    }

    public getPrimaryCard(): Observable<FetchedCards> {
        return timer(this.getRandomDelay()).pipe(
            map(() => MOCK_CARDS),
            map((cards: AccountCard[]) => ({primary: cards[0], cards})),
        );
    }

    public pay(): Observable<void> {
        return timer(this.getRandomDelay()).pipe(map(() => undefined));
    }

    private getRandomDelay(): number {
        return this.isE2E ? 0 : 3000 * Math.random();
    }
}
