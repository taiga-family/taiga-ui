import {Clipboard} from '@angular/cdk/clipboard';
import {Component, ContentChild, Inject, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, share} from 'rxjs/operators';

import {IconsGroupDirective} from './icons-group.directive';

@Component({
    selector: 'icons-group',
    templateUrl: './icons-group.template.html',
    styleUrls: ['./icons-group.style.less'],
    changeDetection,
})
export class IconsGroupComponent {
    @ContentChild(IconsGroupDirective)
    readonly iconGroup?: IconsGroupDirective;

    @Input()
    icons: Record<string, readonly string[]> = {};

    matcher = TUI_DEFAULT_MATCHER;

    control = new FormControl('');

    search$: Observable<string> = this.control.valueChanges.pipe(
        debounceTime(500),
        filter((search: string) => search.length > 2 || search.length === 0),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    ) {}

    copyPath = (name: string): void => {
        this.clipboard.copy(name);
        this.alerts
            .open(`The name ${name} copied`, {status: TuiNotification.Success})
            .subscribe();
    };
}
