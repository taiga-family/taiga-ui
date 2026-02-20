import"./chunk-HU6DUUP4.js";var i=`<div class="player">
    <video
        #video
        tuiMedia
        width="320"
        class="video"
        [(currentTime)]="currentTime"
        [(paused)]="paused"
        (click)="toggleState()"
    >
        <source
            src="assets/media/bbb.mp4"
            type="video/mp4"
        />
    </video>
    <div class="controls">
        <button
            appearance="glass"
            size="s"
            title="Play/Pause"
            tuiIconButton
            tuiTheme="dark"
            type="button"
            [iconStart]="icon"
            [style.border-radius.%]="100"
            (click)="toggleState()"
        ></button>
        <input
            step="any"
            tuiSlider
            type="range"
            class="slider"
            [max]="video.duration"
            [(ngModel)]="currentTime"
        />
        <div class="time">
            <time [attr.datetime]="getTime(currentTime)">
                {{ getTime(currentTime) }}
            </time>
            /
            <time [attr.datetime]="getTime(video.duration)">
                {{ getTime(video.duration) }}
            </time>
        </div>
    </div>
</div>
`;export{i as default};
