import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';

@Component({
    standalone: true,
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    templateUrl: './app-bar-back.template.html',
    styleUrls: ['./app-bar-back.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
    hostDirectives: [TuiAppearance],
})
export class TuiAppBarBack implements TuiAppearanceOptions {
    public appearance = 'link';
}
