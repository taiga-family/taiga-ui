import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives/animated';
import {TuiFocusTrap} from '@taiga-ui/cdk/directives/focus-trap';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_DIALOGS} from './dialog.tokens';

@Component({
    selector: 'tui-dialogs',
    imports: [
        NgForOf,
        PolymorpheusOutlet,
        TuiAnimatedParent,
        TuiFocusTrap,
        TuiScrollControls,
        TuiScrollRef,
    ],
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
})
export class TuiDialogs {
    protected readonly dialogs: Signal<ReadonlyArray<TuiPopover<any, any>>> = toSignal(
        inject(TUI_DIALOGS),
        {initialValue: []},
    );
}
