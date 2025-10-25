import {Directive, effect, EventEmitter, Input, model, Output} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    selector: 'video[tuiMedia], audio[tuiMedia]',
    exportAs: 'tuiMedia',
    host: {
        '[volume]': 'volume()',
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

    private readonly setElCurrentTime = effect(() => {
        if (Math.abs(this.currentTime() - this.el.currentTime) > 0.05) {
            this.el.currentTime = this.currentTime();
        }
    });

    private playbackRate = 1;

    public readonly volume = model<number>(1);

    public readonly currentTime = model<number>(this.el.currentTime ?? 0);

    @Output()
    public readonly pausedChange = new EventEmitter<boolean>();

    @Input('playbackRate')
    public set playbackRateSetter(playbackRate: number) {
        this.updatePlaybackRate(playbackRate);
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

    public get paused(): boolean {
        return this.el.paused;
    }

    protected onPausedChange(paused: boolean): void {
        this.pausedChange.emit(paused);
        this.updatePlaybackRate(this.playbackRate);
    }

    protected onVolumeChange(): void {
        this.volume.set(this.el.volume);
    }

    protected onCurrentTimeChange(): void {
        this.currentTime.set(this.el.currentTime);
    }

    private updatePlaybackRate(playbackRate: number): void {
        this.playbackRate = playbackRate;
        this.el.playbackRate = this.playbackRate;
    }
}
