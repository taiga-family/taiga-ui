import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLinkDirective} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [TuiLinkDirective, RouterLink],
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
    protected readonly demoRoutes = DemoRoute;
}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
