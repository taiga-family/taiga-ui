import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core/components/root';

@Component({
    selector: '[tuiFullscreen]',
    imports: [TuiRoot],
    template: '<tui-root><ng-content /></tui-root>',
    styleUrl: './fullscreen.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(document:fullscreenchange)': 'closedByEscape($event)'},
})
export class TuiFullscreen {
    @ViewChild(TuiRoot, {read: ElementRef})
    private readonly root?: ElementRef<HTMLElement>;

    readonly #doc = inject(DOCUMENT);
    protected readonly open = signal(false);

    @Output('tuiFullscreenChange')
    public readonly opened = new EventEmitter<boolean>();

    @Input('tuiFullscreenOptions')
    public options?: FullscreenOptions = {navigationUI: 'auto'};

    @Input('tuiFullscreen')
    public set fullscreen(open: boolean) {
        if (this.open() === open) {
            return;
        }

        if (open) {
            this.root?.nativeElement
                .requestFullscreen(this.options)
                .then(() => this.#fullscreenState(open));
        } else {
            this.#doc
                .exitFullscreen()
                .then(() => this.#fullscreenState(open))
                .catch((error: unknown) =>
                    console.error('Failed to exit fullscreen:', error),
                );
        }
    }

    protected closedByEscape(event: Event): void {
        if (!this.#doc.fullscreenElement && event.target === this.root?.nativeElement) {
            this.#fullscreenState(false);
        }
    }

    #fullscreenState(open: boolean): void {
        this.open.set(open);
        this.opened.emit(open);
    }
}
