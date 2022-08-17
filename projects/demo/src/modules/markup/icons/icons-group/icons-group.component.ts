import {Clipboard} from '@angular/cdk/clipboard';
import {Component, ContentChild, Inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER, tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

import {IconsGroupDirective} from './icons-group.directive';

@Component({
    selector: `icons-group`,
    templateUrl: `./icons-group.template.html`,
    styleUrls: [`./icons-group.style.less`],
    changeDetection,
})
export class IconsGroupComponent {
    @ContentChild(IconsGroupDirective)
    readonly iconGroup?: IconsGroupDirective;

    @Input()
    @tuiDefaultProp()
    icons: Record<string, readonly string[]> = {};

    matcher = TUI_DEFAULT_MATCHER;
    search = ``;

    constructor(
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService) private readonly alertService: TuiAlertService,
    ) {}

    copyPath = (name: string): void => {
        this.clipboard.copy(name);
        this.alertService
            .open(`The name ${name} copied`, {status: TuiNotification.Success})
            .subscribe();
    };
}
