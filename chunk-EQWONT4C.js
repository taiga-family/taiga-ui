import"./chunk-HU6DUUP4.js";var e=`<div class="tui-player">
    <audio
        #audio
        src="assets/media/strays.mp3"
        tuiMedia
        [(currentTime)]="currentTime"
        [(paused)]="paused"
    ></audio>
    <button
        appearance="secondary"
        title="Play/Pause"
        tuiIconButton
        type="button"
        [iconStart]="icon"
        [style.border-radius.%]="100"
        (click)="toggleState()"
    ></button>
    <div>
        <a
            href="https://waterplea.bandcamp.com/"
            tuiLink
        >
            Waterplea
        </a>
        \u2014 Strays
        <input
            step="any"
            tuiSlider
            type="range"
            class="slider"
            [max]="audio.duration"
            [(ngModel)]="currentTime"
        />
    </div>
</div>
`;export{e as default};
