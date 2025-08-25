import {ViewportScroller} from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Router, Scroll} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {filter, map} from 'rxjs';

import {Home} from './examples/3/home';
import {Notifications} from './examples/3/notifications';
import {Settings} from './examples/3/settings';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    host: {class: 'tui-slides'},
})
export default class Page {
    protected readonly routes = DemoRoute;
    protected readonly examples = ['Crossfade', 'Stepper', 'Routing', 'Dialog'];

    constructor() {
        const scroller = inject(ViewportScroller);
        const router = inject(Router);
        const route = router.config.find(
            ({path}) => path === this.routes.Slides.replace('/', ''),
        );
        const length = route?.children?.length ?? 0;

        router.events
            .pipe(
                filter((event) => event instanceof Scroll),
                map(() => scroller.getScrollPosition()),
                takeUntilDestroyed(),
            )
            .subscribe((position) => {
                setTimeout(() => scroller.scrollToPosition(position));
            });

        if (length > 1) {
            return;
        }

        route?.children?.unshift({path: '1', component: Home});
        route?.children?.unshift({path: '2', component: Notifications});
        route?.children?.unshift({path: '3', component: Settings});

        router.resetConfig(router.config);
    }
}
