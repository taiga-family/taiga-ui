import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Inject,
    ViewEncapsulation,
} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';
import {TuiBrightness, TuiModeDirective} from '@taiga-ui/core';
import {Subject} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-doc-main',
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiDocMainComponent),
        },
    ],
})
export class TuiDocMainComponent {
    night =
        this.windowRef.matchMedia('(prefers-color-scheme: dark)').matches ||
        this.storage.getItem('night') === 'true';

    readonly change$ = new Subject<void>();

    constructor(
        @Inject(LOCAL_STORAGE) private readonly storage: Storage,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    get mode(): TuiBrightness | null {
        return this.night ? 'onDark' : null;
    }

    onMode(night: boolean) {
        this.night = night;
        this.change$.next();
        this.storage.setItem('night', String(night));
    }
}
