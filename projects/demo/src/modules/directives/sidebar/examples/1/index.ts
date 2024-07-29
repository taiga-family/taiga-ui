import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ALWAYS_FALSE_HANDLER, tuiPure} from '@taiga-ui/cdk';
import {Observable, Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-sidebar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSidebarExample1 {
    readonly load$ = new Subject<void>();

    open = false;

    readonly webApis = ['Common', 'Audio', 'Canvas', 'Geolocation', 'MIDI', 'Workers'];

    readonly links = ['Taiga-UI', 'ng-event-plugins', 'ng-polymorpheus', 'ng-dompurify'];

    @tuiPure
    get fakeRequest$(): Observable<boolean> {
        return this.load$.pipe(
            switchMap(() => timer(2000).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true))),
        );
    }

    toggle(open: boolean): void {
        this.open = open;
    }
}
