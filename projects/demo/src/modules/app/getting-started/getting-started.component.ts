import {Component, Inject, InjectionToken, Type} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {HomeComponent} from '../home/home.component';

export const TUI_HOME_COMPONENT = new InjectionToken<Type<any>>('Home page', {
    factory: () => HomeComponent,
});

@Component({
    selector: 'getting-started',
    templateUrl: './getting-started.template.html',
    changeDetection,
})
export class GettingStartedComponent {
    constructor(@Inject(TUI_HOME_COMPONENT) readonly component: Type<any>) {}
}
