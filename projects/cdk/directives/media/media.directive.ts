import {Directive, effect, input, model, untracked} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
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

    protected readonly setElCurrentTime = effect(() => {
        if (Math.abs(this.currentTime() - this.el.currentTime) > 0.05) {
            this.el.currentTime = this.currentTime();
        }
    });

    protected readonly setElPlaybackRate = effect(() => {
        this.updatePlaybackRate(this.playbackRate());
    });

    protected readonly setElPaused = effect(() => {
        const paused = this.paused();

        if (paused) {
            this.el.pause?.();
        } else {
            void this.el.play?.();
        }

        this.updatePlaybackRate(untracked(this.playbackRate));
    });

    public readonly playbackRate = input<number>(1);

    public readonly volume = model<number>(1);

    public readonly currentTime = model<number>(this.el.currentTime ?? 0);

    public readonly paused = model<boolean>(this.el.paused);

    protected onPausedChange(paused: boolean): void {
        this.paused.set(paused);
    }

    protected onVolumeChange(): void {
        this.volume.set(this.el.volume);
    }

    protected onCurrentTimeChange(): void {
        this.currentTime.set(this.el.currentTime);
    }

    private updatePlaybackRate(playbackRate: number): void {
        this.el.playbackRate = playbackRate;
    }
}
