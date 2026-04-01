import"./chunk-HU6DUUP4.js";var i=`<button
    size="m"
    tuiButton
    type="button"
    class="tui-space_bottom-4"
    (click)="show()"
>
    Show preview
</button>

<ng-template
    #preview
    let-preview
>
    <tui-preview
        [rotatable]="!(contentUnavailable$ | async)"
        [zoomable]="!(contentUnavailable$ | async) && !(loading$ | async)"
    >
        <tui-preview-title>{{ title$ | async }}</tui-preview-title>
        <tui-preview-pagination
            [index]="index$$.value"
            [length]="items.length"
            (indexChange)="index$$.next($event)"
        />

        <button
            iconStart="@tui.download"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="download()"
        >
            Download
        </button>

        <button
            iconStart="@tui.x"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="preview.complete()"
        >
            Close
        </button>

        @if (contentUnavailable$ | async) {
            <div
                tuiTheme="dark"
                class="t-container"
            >
                <tui-icon
                    icon="@tui.file"
                    class="t-icon"
                />
                <div>Preview unavailable</div>
            </div>
        }

        @if (imageSrc$ | async; as src) {
            <img
                alt="img source"
                height="512"
                width="512"
                [src]="src"
            />
        }

        @if (loading$ | async) {
            <tui-loader
                size="xl"
                class="t-loader"
            />
        }
    </tui-preview>
</ng-template>
`;export{i as default};
