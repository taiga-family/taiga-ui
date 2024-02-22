import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-tab-bar-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTabBarExample4 {
    protected readonly load$ = new Subject<void>();

    protected readonly items$ = this.load$.pipe(
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
