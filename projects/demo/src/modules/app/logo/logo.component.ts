import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `logo`,
    templateUrl: `./logo.template.html`,
    styleUrls: [`./logo.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
