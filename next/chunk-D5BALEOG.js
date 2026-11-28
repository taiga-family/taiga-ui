import"./chunk-LQ6M4NCU.js";var t=`<label tuiInputFiles>
    <input
        tuiInputFiles
        [formControl]="control"
    />
    <ng-template let-dragged>
        @if (dragged) {
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
        } @else {
            <div
                appearance="secondary"
                size="l"
                tuiAvatar="@tui.cloud-upload"
            ></div>
            <div>
                Drag and drop file here or
                <a tuiLink>click to upload</a>
            </div>
            <div class="types">PNG, JPG, JPEG, PNG, etc</div>
        }
    </ng-template>
</label>

<tui-files>
    <tui-file
        [file]="file"
        [leftContent]="content"
    >
        <span>file is on checking</span>
    </tui-file>
</tui-files>

<ng-template #content>
    <tui-icon icon="@tui.clock" />
</ng-template>
`;export{t as default};
