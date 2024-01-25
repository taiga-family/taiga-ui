import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'video[tuiMedia], audio[tuiMedia]',
    exportAs: 'tuiMedia',
})
export class TuiMediaDirective {
    private readonly el: HTMLMediaElement = inject(ElementRef).nativeElement;

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

    @Input()
    set currentTime(currentTime: number) {
        if (Math.abs(currentTime - this.currentTime) > 0.05) {
            this.el.currentTime = currentTime;
        }
    }

    get currentTime(): number {
        return this.el.currentTime;
    }

    @Input()
    set paused(paused: boolean) {
        if (paused) {
            this.el.pause();
        } else {
            void this.el.play();
            this.updatePlaybackRate(this.playbackRate);
        }
    }

    get paused(): boolean {
        return this.el.paused;
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
        this.volume = this.el.volume;
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
        this.el.playbackRate = this.playbackRate;
    }
}
