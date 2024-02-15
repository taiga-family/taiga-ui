import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {BehaviorSubject, map} from 'rxjs';

@Component({
    selector: 'tui-pan-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPanExample1 {
    private readonly sanitizer = inject(DomSanitizer);

    readonly coordinates$ = new BehaviorSubject([0, 0]);

    readonly transform$ = this.coordinates$.pipe(
        map(coords =>
            this.sanitizer.bypassSecurityTrustStyle(
                `translate(${coords[0]}px, ${coords[1]}px)`,
            ),
        ),
    );

    onPan(delta: readonly [number, number]): void {
        this.coordinates$.next([
            this.currentCoords[0] + delta[0],
            this.currentCoords[1] + delta[1],
        ]);
    }

    get currentCoords(): number[] {
        return this.coordinates$.value;
    }
}
