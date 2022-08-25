import {Component, Inject} from '@angular/core';
import {TuiSidebar, TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

interface CustomOptions {
    mode: 'over' | 'side' | 'push';
    hasBackdrop: boolean;
}

@Component({
    selector: `my-sidebar`,
    templateUrl: `./my-sidebar.component.html`,
    styleUrls: [`./my-sidebar.component.less`],
})
export class MySidebarComponent implements TuiSidebar {
    constructor(
        @Inject(TuiSidebarDirective)
        private readonly directive: TuiSidebarDirective<
            Record<string, unknown>,
            CustomOptions
        >,
    ) {}

    get content(): PolymorpheusContent {
        return this.directive.content;
    }

    get options(): CustomOptions {
        return this.directive.options;
    }

    ngDoCheck(): void {
        this.directive.check();
    }
}
