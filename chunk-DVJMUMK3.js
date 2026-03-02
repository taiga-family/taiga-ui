import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiTabBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly load$ = new Subject<void>();

    protected readonly items$ = this.load$.pipe(
        startWith(null),
        switchMap(() =>
            timer(3000).pipe(
                map(() => [
                    {
                        text: 'Favorites',
                        icon: '@tui.heart',
                    },
                    {
                        text: 'Calls',
                        icon: '@tui.phone',
                    },
                    {
                        text: 'Profile',
                        icon: '@tui.user',
                    },
                    {
                        text: 'Settings and configuration',
                        icon: '@tui.settings',
                    },
                ]),
                startWith([]),
            ),
        ),
    );
}
`;export{i as default};
