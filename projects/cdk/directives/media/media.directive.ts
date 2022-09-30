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

@Directive({
    selector: `video[tuiMedia], audio[tuiMedia]`,
    exportAs: `tuiMedia`,
})
export class TuiMediaDirective {
    private playbackRate = 1;

    @Input()
    @HostBinding(`volume`)
    @tuiDefaultProp((volume: number) => isFinite(volume) && volume >= 0 && volume <= 1)
    volume = 1;

    @Input(`playbackRate`)
    @tuiRequiredSetter(nonNegativeFiniteAssertion)
    set playbackRateSetter(playbackRate: number) {
        this.updatePlaybackRate(playbackRate);
    }

    @Input()
    @tuiRequiredSetter(nonNegativeFiniteAssertion)
    set currentTime(currentTime: number) {
        if (Math.abs(currentTime - this.currentTime) > 0.05) {
            this.elementRef.nativeElement.currentTime = currentTime;
        }
    }

    @Input()
    set paused(paused: boolean) {
        if (paused) {
            this.elementRef.nativeElement.pause();
        } else {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
    @HostListener(`ended`, [`true`])
    @HostListener(`pause`, [`true`])
    @HostListener(`play`, [`false`])
    onPausedChange(paused: boolean): void {
        this.pausedChange.emit(paused);
        this.updatePlaybackRate(this.playbackRate);
    }

    @HostListener(`volumechange`)
    onVolumeChange(): void {
        this.volume = this.elementRef.nativeElement.volume;
        this.volumeChange.emit(this.volume);
    }

    @HostListener(`timeupdate`)
    @HostListener(`seeking`)
    @HostListener(`seeked`)
    onCurrentTimeChange(): void {
        this.currentTimeChange.emit(this.currentTime);
    }

    @HostListener(`durationchange`)
    changeDetectionTrigger(): void {
        // @bad TODO: consider if other events need to trigger CD
    }

    private updatePlaybackRate(playbackRate: number): void {
        this.playbackRate = playbackRate;
        this.elementRef.nativeElement.playbackRate = this.playbackRate;
    }
}

function nonNegativeFiniteAssertion(value: number): boolean {
    return isFinite(value) && value >= 0;
}
