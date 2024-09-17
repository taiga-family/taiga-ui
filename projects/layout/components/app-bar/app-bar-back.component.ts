import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    TuiAppearance,
    type TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    templateUrl: './app-bar-back.template.html',
    styleUrls: ['./app-bar-back.style.less'],
    hostDirectives: [TuiAppearance],
    providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAppBarBack implements TuiAppearanceOptions {
    appearance = 'link';
}
