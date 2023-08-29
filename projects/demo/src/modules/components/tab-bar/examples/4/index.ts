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
                        icon: 'tuiIconHeartLarge',
                        text: 'Favorites',
                    },
                    {
                        icon: 'tuiIconPhoneLarge',
                        text: 'Calls',
                    },
                    {
                        icon: 'tuiIconUserLarge',
                        text: 'Profile',
                    },
                    {
                        icon: 'tuiIconSettingsLarge',
                        text: 'Settings and configuration',
                    },
                ]),
                startWith([]),
            ),
        ),
    );
}
