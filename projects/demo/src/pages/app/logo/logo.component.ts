import {afterNextRender, ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLoader} from '@taiga-ui/core';
import {TuiSlides} from '@taiga-ui/layout';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {VersionManager} from '../version-manager/version-manager.component';

@Component({
    imports: [RouterLink, TuiLoader, TuiSlides, VersionManager],
    templateUrl: './logo.template.html',
    styleUrl: './logo.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
    protected readonly ready = signal(false);
    protected readonly demoRoutes = DemoRoute;

    constructor() {
        afterNextRender(() => this.ready.set(true));
    }
}

export const LOGO_CONTENT = new PolymorpheusComponent(Logo);
