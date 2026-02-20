import"./chunk-HU6DUUP4.js";var e=`<label tuiInputFiles>
    <input
        tuiInputFiles
        [formControl]="control"
    />
    <ng-template let-dragged>
        @if (dragged) {
            <div class="content">
                <div
                    appearance="secondary"
                    size="l"
                    tuiAvatar="@tui.droplet"
                ></div>
                <div>
                    Drop it like it's hot!
                    <br />
                    <br />
                </div>
            </div>
        } @else {
            <div class="content">
                <div
                    appearance="secondary"
                    size="l"
                    tuiAvatar="@tui.cloud-upload"
                ></div>
                <div>
                    Drag and drop file here or
                    <a tuiLink>click to upload</a>
                </div>
            </div>
        }
    </ng-template>
</label>

<tui-files class="tui-space_top-4">
    <tui-file
        [file]="file"
        [leftContent]="content"
    >
        <span class="tui-text_body-s-2">file is on checking</span>
    </tui-file>
</tui-files>

<ng-template #content>
    <tui-icon icon="@tui.clock" />
</ng-template>
`;export{e as default};
