import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-tab-bar-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTabBarExample4 {
    readonly load$ = new Subject<void>();

    readonly items$ = this.load$.pipe(
        startWith(null),
        switchMap(() =>
            timer(3000).pipe(
                map(() => [
                    {
                        text: 'Favorites',
                        icon: 'tuiIconHeartLarge',
                    },
                    {
                        text: 'Calls',
                        icon: 'tuiIconPhoneLarge',
                    },
                    {
                        text: 'Profile',
                        icon: 'tuiIconUserLarge',
                    },
                    {
                        text: 'Settings and configuration',
                        icon: 'tuiIconSettingsLarge',
                    },
                ]),
                startWith([]),
            ),
        ),
    );
}
