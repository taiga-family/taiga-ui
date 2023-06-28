import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';

@Directive({
    selector: 'video[tuiMedia], audio[tuiMedia]',
    exportAs: 'tuiMedia',
})
export class TuiMediaDirective {
    private playbackRate = 1;

    @Input()
    @HostBinding('volume')
    volume = 1;

    @Input('playbackRate')
    set playbackRateSetter(playbackRate: number) {
        this.updatePlaybackRate(playbackRate);
    }

    @Output()
    readonly currentTimeChange = new EventEmitter<number>();

    @Output()
    readonly pausedChange = new EventEmitter<boolean>();

    @Output()
    readonly volumeChange = new EventEmitter<number>();

    constructor(
        @Inject(ElementRef)
        private readonly el: ElementRef<HTMLMediaElement>,
    ) {}

    @Input()
    set currentTime(currentTime: number) {
        if (Math.abs(currentTime - this.currentTime) > 0.05) {
            this.el.nativeElement.currentTime = currentTime;
        }
    }

    get currentTime(): number {
        return this.el.nativeElement.currentTime;
    }

    @Input()
    set paused(paused: boolean) {
        if (paused) {
            this.el.nativeElement.pause();
        } else {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.el.nativeElement.play();
            this.updatePlaybackRate(this.playbackRate);
        }
    }

    get paused(): boolean {
        return this.el.nativeElement.paused;
    }

    // @bad TODO: Make sure no other events can affect this like network issues etc.
    @HostListener('ended', ['true'])
    @HostListener('pause', ['true'])
    @HostListener('play', ['false'])
    onPausedChange(paused: boolean): void {
        this.pausedChange.emit(paused);
        this.updatePlaybackRate(this.playbackRate);
    }

    @HostListener('volumechange')
    onVolumeChange(): void {
        this.volume = this.el.nativeElement.volume;
        this.volumeChange.emit(this.volume);
    }

    @HostListener('timeupdate')
    @HostListener('seeking')
    @HostListener('seeked')
    onCurrentTimeChange(): void {
        this.currentTimeChange.emit(this.currentTime);
    }

    @HostListener('durationchange')
    changeDetectionTrigger(): void {
        // @bad TODO: consider if other events need to trigger CD
    }

    private updatePlaybackRate(playbackRate: number): void {
        this.playbackRate = playbackRate;
        this.el.nativeElement.playbackRate = this.playbackRate;
    }
}
