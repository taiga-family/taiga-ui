import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    NavigationStart,
    Router,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlides, TuiTabs} from '@taiga-ui/kit';
import {filter, map, pairwise} from 'rxjs';

@Component({
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet, TuiSlides, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly direction = toSignal(
        inject(Router).events.pipe(
            filter((event) => event instanceof NavigationStart),
            map(({url}: any) => Number(url.split('/').at(-1))),
            pairwise(),
            map(([prev, next]) => next - prev),
        ),
        {initialValue: 1},
    );
}
