import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {BehaviorSubject, map, startWith, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-copy',
    imports: [ClipboardModule, CommonModule, TuiButton, TuiHint],
    templateUrl: './copy.template.html',
    styleUrls: ['./copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCopyComponent {
    public readonly copied$ = new BehaviorSubject<boolean>(false);
    public readonly hint$ = this.copied$.pipe(
        switchMap((copied) =>
            timer(2000).pipe(map(TUI_FALSE_HANDLER), startWith(copied)),
        ),
    );
}
