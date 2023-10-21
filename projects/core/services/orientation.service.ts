import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map, shareReplay, startWith} from 'rxjs/operators';

@Injectable({
    providedIn: `root`,
})
export class TuiOrientationService extends Observable<ScreenOrientation> {
    private readonly stream$ = tuiTypedFromEvent(
        this.win.screen.orientation,
        `change`,
    ).pipe(
        startWith(this.win.screen.orientation),
        map(() => this.win.screen.orientation),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    constructor(@Inject(WINDOW) private readonly win: Window) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
