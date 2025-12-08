import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    effect,
    ElementRef,
    inject,
    input,
    model,
    viewChild,
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
    private readonly root = viewChild(TuiRoot, {read: ElementRef});

    private readonly doc = inject(DOCUMENT);

    public readonly options = input<FullscreenOptions>(
        {navigationUI: 'auto'},
        {alias: 'tuiFullscreenOptions'},
    );

    public readonly tuiFullscreen = model<boolean>(false);

    protected readonly handleState = effect(async () => {
        const open = this.tuiFullscreen();

        if (open) {
            await this.root()?.nativeElement.requestFullscreen(this.options());
        } else {
            try {
                await this.doc.exitFullscreen();
            } catch (error: unknown) {
                console.error('Failed to exit fullscreen:', error);
            }
        }
    });

    protected closedByEscape(event: Event): void {
        if (!this.doc.fullscreenElement && event.target === this.root()?.nativeElement) {
            this.tuiFullscreen.set(false);
        }
    }
}
