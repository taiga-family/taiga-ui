import {Clipboard} from '@angular/cdk/clipboard';
import {Component, Inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiRequiredSetter} from '@taiga-ui/cdk';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';

import {DemoTuiIconsList} from '../icons.tokens';

@Component({
    selector: `icons-group`,
    templateUrl: `./icons-group.template.html`,
    styleUrls: [`./icons-group.style.less`],
    changeDetection,
})
export class IconsGroupComponent {
    iconsValues: Record<string, DemoTuiIconsList> = {};
    keys: string[] = [];
    search = ``;

    @Input()
    @tuiRequiredSetter()
    set icons(icons: Record<string, DemoTuiIconsList>) {
        this.keys = Object.keys(icons);
        this.iconsValues = icons;
    }

    constructor(
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    copyPath(name: string): void {
        this.clipboard.copy(name);
        this.alertService
            .open(`The name ${name} copied`, {status: TuiNotification.Success})
            .subscribe();
    }
}
