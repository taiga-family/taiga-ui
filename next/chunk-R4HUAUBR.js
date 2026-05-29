import"./chunk-HU6DUUP4.js";var n=`@for (orientation of orientations; track $index) {
    <div
        tuiFile
        [orientation]="orientation"
    >
        <tui-icon icon="@tui.image" />
        <div tuiTitle>
            A very very long file name that spans many many lines.png
            <div tuiSubtitle>Some extra info about this file can also be very long and span multiple lines</div>
        </div>
    </div>
    <div
        tuiFile
        [orientation]="orientation"
    >
        <tui-icon icon="@tui.image" />
        <div tuiTitle>
            <div class="clamp">A very very long file name that spans many many lines.png</div>
            <div
                tuiSubtitle
                class="clamp"
            >
                You can use native
                <code>line-clamp</code>
                CSS rule to keep text under a certain number of lines
            </div>
        </div>
    </div>
}
`;export{n as default};
