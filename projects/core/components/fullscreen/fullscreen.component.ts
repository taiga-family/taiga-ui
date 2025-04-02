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
    standalone: true,
    selector: '[tuiFullscreen]',
    imports: [TuiRoot],
    template: '<tui-root><ng-content /></tui-root>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:fullscreenchange)': 'closedByEscape($event)',
    },
})
export class TuiFullscreen {
    @ViewChild(TuiRoot, {read: ElementRef})
    private readonly root?: ElementRef<HTMLElement>;

    private readonly doc = inject(DOCUMENT);
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
                .then(() => this.fullscreenState(open));
        } else {
            this.doc
                .exitFullscreen()
                .then(() => this.fullscreenState(open))
                .catch((error: unknown) =>
                    console.error('Failed to exit fullscreen:', error),
                );
        }
    }

    protected closedByEscape(event: Event): void {
        const escaped =
            !this.doc.fullscreenElement && event.target === this.root?.nativeElement;

        if (escaped) {
            this.fullscreenState(false);
        }
    }

    private fullscreenState(open: boolean): void {
        this.open.set(open);
        this.opened.emit(open);
    }
}
