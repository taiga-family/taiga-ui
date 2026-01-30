import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLink} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {VersionManager} from '../version-manager/version-manager.component';

@Component({
    selector: 'logo',
    imports: [RouterLink, TuiLink, VersionManager],
    templateUrl: './logo.template.html',
    styleUrl: './logo.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
    protected readonly demoRoutes = DemoRoute;
}

export const LOGO_CONTENT = new PolymorpheusComponent(Logo);
