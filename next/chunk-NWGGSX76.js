import"./chunk-HU6DUUP4.js";var s=`<video
    controls
    tuiMedia
    width="320"
    class="video"
    [(currentTime)]="currentTime"
    [(paused)]="paused"
    [(volume)]="volume"
>
    <source
        *tuiHighDpi
        src="assets/media/bbb_dpi.ogv"
        type="video/ogg"
    />
    <source
        src="assets/media/bbb.mp4"
        type="video/mp4"
    />
</video>
<p>currentTime: {{ currentTime }}</p>
<p>volume: {{ volume }}</p>
<p>paused: {{ paused }}</p>
`;export{s as default};
