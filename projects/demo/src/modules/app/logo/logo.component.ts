import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLink} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'logo',
    imports: [TuiLink, RouterLink],
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
    protected readonly demoRoutes = DemoRoute;
}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
