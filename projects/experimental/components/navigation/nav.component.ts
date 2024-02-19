import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiBadgeOptionsProvider} from '@taiga-ui/experimental/components/badge';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';

@Component({
    selector: 'nav[tuiNav]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./nav.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiBadgeOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
})
export class TuiNavComponent {}
