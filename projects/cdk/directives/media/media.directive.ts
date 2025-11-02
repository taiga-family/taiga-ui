import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    selector: 'video[tuiMedia], audio[tuiMedia]',
    exportAs: 'tuiMedia',
    host: {
        '[volume]': 'volume',
        '(durationchange)': '0',
        '(ended)': 'onPausedChange(true)',
        '(pause)': 'onPausedChange(true)',
        '(play)': 'onPausedChange(false)',
        '(volumechange)': 'onVolumeChange()',
        '(timeupdate)': 'onCurrentTimeChange()',
        '(seeking)': 'onCurrentTimeChange()',
        '(seeked)': 'onCurrentTimeChange()',
    },
})
export class TuiMedia {
    private readonly el = tuiInjectElement<HTMLMediaElement>();

    private playbackRate = 1;

    @Input()
    public volume = 1;

    @Output()
    public readonly currentTimeChange = new EventEmitter<number>();

    @Output()
    public readonly pausedChange = new EventEmitter<boolean>();

    @Output()
    public readonly volumeChange = new EventEmitter<number>();

    @Input('playbackRate')
    public set playbackRateSetter(playbackRate: number) {
        this.updatePlaybackRate(playbackRate);
    }

    @Input()
    public set currentTime(currentTime: number) {
        if (Math.abs(currentTime - this.currentTime) > 0.05) {
            this.el.currentTime = currentTime;
        }
    }

    @Input()
    public set paused(paused: boolean) {
        if (paused) {
            this.el.pause?.();
        } else {
            void this.el.play?.();
            this.updatePlaybackRate(this.playbackRate);
        }
    }

    public get currentTime(): number {
        return this.el.currentTime ?? 0;
    }

    public get paused(): boolean {
        return this.el.paused;
    }

    protected onPausedChange(paused: boolean): void {
        this.pausedChange.emit(paused);
        this.updatePlaybackRate(this.playbackRate);
    }

    protected onVolumeChange(): void {
        this.volume = this.el.volume;
        this.volumeChange.emit(this.volume);
    }

    protected onCurrentTimeChange(): void {
        this.currentTimeChange.emit(this.currentTime);
    }

    private updatePlaybackRate(playbackRate: number): void {
        this.playbackRate = playbackRate;
        this.el.playbackRate = this.playbackRate;
    }
}
