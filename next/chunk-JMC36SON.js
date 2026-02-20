import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Media"
    package="CDK"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive for declarative work with HTML5 video and audio</p>

        <tui-doc-example
            heading="Native controls"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Video"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Audio"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <audio
            controls
            src="assets/media/strays.mp3"
            tuiMedia
            [playbackRate]="playbackRate"
            [(currentTime)]="currentTime"
            [(paused)]="paused"
            [(volume)]="volume"
        ></audio>
        <table tuiDocAPI>
            <tr
                name="[(currentTime)]"
                tuiDocAPIItem
                type="number"
                [(value)]="currentTime"
            >
                Current time (seconds)
            </tr>
            <tr
                name="[(paused)]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="paused"
            >
                Paused state
            </tr>
            <tr
                name="[playbackRate]"
                tuiDocAPIItem
                type="number"
                [(value)]="playbackRate"
            >
                Playback speed
            </tr>
            <tr
                name="[(volume)]"
                tuiDocAPIItem
                type="number"
                [items]="volumeVariants"
                [(value)]="volume"
            >
                Volume
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
