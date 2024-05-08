import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {TuiFocusTrapDirective} from '@taiga-ui/cdk';
import {tuiHost} from '@taiga-ui/core/animations';
import {
    TuiScrollControlsComponent,
    TuiScrollRefDirective,
} from '@taiga-ui/core/components/scroll-controls';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import {TUI_DIALOGS} from './dialog.tokens';

@Component({
    standalone: true,
    selector: 'tui-dialogs',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiScrollRefDirective,
        TuiScrollControlsComponent,
        TuiFocusTrapDirective,
    ],
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [tuiHost],
    host: {
        '(keydown.silent)': 'el.scrollTop = el.scrollHeight / 2',
    },
})
export class TuiDialogsComponent {
    protected readonly el: HTMLElement = inject(ElementRef).nativeElement;
    protected readonly dialogs$: Observable<ReadonlyArray<TuiPopover<any, any>>> =
        inject(TUI_DIALOGS);
}
