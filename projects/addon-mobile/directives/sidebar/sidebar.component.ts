import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TuiHorizontalDirection, tuiSlideIn} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiSidebarDirective} from './sidebar.directive';

@Component({
    selector: 'aside[tuiSidebar]',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideIn],
})
export class TuiSidebarComponent {
    constructor(
        @Inject(TuiSidebarDirective) private readonly directive: TuiSidebarDirective,
    ) {}

    @HostBinding('class')
    @HostBinding('@tuiSlideIn')
    get direction(): TuiHorizontalDirection {
        return this.directive.direction;
    }

    get content(): PolymorpheusContent {
        return this.directive.content;
    }
}
