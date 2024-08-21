import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import {from, isObservable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-icon',
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/icon.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-icon]': 'iconUrl()',
        '[style.--t-icon-bg]': 'backgroundUrl()',
    },
})
export class TuiIcon {
    private readonly destroyRef = inject(DestroyRef);
    protected readonly iconUrl = signal('');
    protected readonly backgroundUrl = signal('');
    protected readonly resolver = tuiInjectIconResolver();

    constructor() {
        this.icon =
            inject(TUI_ICON_START, {self: true, optional: true}) ||
            inject(TUI_ICON_END, {self: true, optional: true}) ||
            '';
    }

    @Input()
    public set icon(icon: string) {
        this.resolve(icon, (result) => this.iconUrl.set(result));
    }

    @Input()
    public set background(background: string) {
        this.resolve(background, (result) => this.backgroundUrl.set(result));
    }

    private resolve(value: string, callback: (result: string) => void): void {
        const result = this.resolver(value);

        if (typeof result === 'string') {
            callback(`url(${result})`);
        } else {
            const stream = isObservable(result) ? result : from(result);

            stream
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((value) => callback(`url(${value})`));
        }
    }
}
