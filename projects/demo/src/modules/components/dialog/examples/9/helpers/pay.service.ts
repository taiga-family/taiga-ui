import {Inject, Injectable} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

import {MOCK_CARDS} from './mock-cards';
import {AccountCard, FetchedCards} from './models';

@Injectable({
    providedIn: `root`,
})
export class PayService {
    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}

    preparePayment(amount: number): Observable<number> {
        return timer(this.getRandomDelay()).pipe(map(() => amount));
    }

    getPrimaryCard(): Observable<FetchedCards> {
        return timer(this.getRandomDelay()).pipe(
            map(() => MOCK_CARDS),
            map((cards: AccountCard[]) => ({primary: cards[0], cards})),
        );
    }

    pay(): Observable<void> {
        return timer(this.getRandomDelay()).pipe(map(() => undefined));
    }

    private getRandomDelay(): number {
        return this.isCypress ? 0 : 3000 * Math.random();
    }
}
