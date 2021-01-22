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
import {tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk/decorators';

export function nonNegativeFiniteAssertion(value: number): boolean {
    return isFinite(value) && value >= 0;
}

export function volumeAssertion(volume: number): boolean {
    return isFinite(volume) && volume >= 0 && volume <= 1;
}

@Directive({
    selector: 'video[tuiMedia], audio[tuiMedia]',
    exportAs: 'tuiMedia',
})
export class TuiMediaDirective {
    @Input()
    @HostBinding('volume')
    @tuiDefaultProp(volumeAssertion)
    volume = 1;

    @Input('playbackRate')
    @tuiRequiredSetter(nonNegativeFiniteAssertion)
    set playbackRateSetter(playbackRate: number) {
        this.updatePlaybackRate(playbackRate);
    }

    @Input()
    @tuiRequiredSetter(nonNegativeFiniteAssertion)
    set currentTime(currentTime: number) {
        if (Math.abs(currentTime - this.currentTime) > 0.001) {
            this.elementRef.nativeElement.currentTime = currentTime;
        }
    }

    @Input()
    set paused(paused: boolean) {
        if (paused) {
            this.elementRef.nativeElement.pause();
        } else {
            this.elementRef.nativeElement.play();
            this.updatePlaybackRate(this.playbackRate);
        }
    }

    @Output()
    readonly currentTimeChange = new EventEmitter<number>();

    @Output()
    readonly pausedChange = new EventEmitter<boolean>();

    @Output()
    readonly volumeChange = new EventEmitter<number>();

    private playbackRate = 1;

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLMediaElement>,
    ) {}

    get paused(): boolean {
        return this.elementRef.nativeElement.paused;
    }

    get currentTime(): number {
        return this.elementRef.nativeElement.currentTime;
    }

    // @bad TODO: Make sure no other events can affect this like network issues etc.
    @HostListener('ended', ['true'])
    @HostListener('pause', ['true'])
    @HostListener('play', ['false'])
    onPausedChange(paused: boolean) {
        this.pausedChange.emit(paused);
        this.updatePlaybackRate(this.playbackRate);
    }

    @HostListener('volumechange')
    onVolumeChange() {
        this.volume = this.elementRef.nativeElement.volume;
        this.volumeChange.emit(this.volume);
    }

    @HostListener('timeupdate')
    @HostListener('seeking')
    @HostListener('seeked')
    onCurrentTimeChange() {
        this.currentTimeChange.emit(this.currentTime);
    }

    @HostListener('durationchange')
    changeDetectionTrigger() {
        // @bad TODO: consider if other events need to trigger CD
    }

    private updatePlaybackRate(playbackRate: number) {
        this.playbackRate = playbackRate;
        this.elementRef.nativeElement.playbackRate = this.playbackRate;
    }
}
