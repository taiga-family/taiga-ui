import"./chunk-HU6DUUP4.js";var i=`<tui-segmented>
    @for (item of ['s', 'm', 'l']; track $index) {
        <label>
            {{ item }}
            <input
                name="size"
                type="radio"
                [value]="item"
                [(ngModel)]="size"
            />
        </label>
    }
</tui-segmented>

@for (item of content; track $index) {
    <div
        orientation="horizontal"
        tuiFile
        [size]="size()"
    >
        @switch (item) {
            @case ('icon') {
                <tui-icon icon="@tui.image" />
            }
            @case ('button') {
                <button
                    iconStart="@tui.rotate-cw"
                    tuiIconButton
                    type="button"
                >
                    Retry
                </button>
            }
            @case ('progress') {
                <tui-progress-circle [value]="0.6" />
            }
            @case ('loader') {
                <tui-loader [size]="getSize(size() || 'l')" />
            }
            @case ('image') {
                <img
                    alt=""
                    src="assets/images/avatar.jpg"
                />
            }
            @case ('error') {
                <tui-icon
                    icon="@tui.circle-x"
                    [style.color]="'var(--tui-text-negative)'"
                />
            }
        }

        <div tuiTitle>
            file.png
            <div tuiSubtitle>30 MB</div>
        </div>

        <button tuiButtonX>Remove</button>
    </div>
}

<div
    [style.padding-inline]="0"
    [tuiCell]="size()"
>
    <span
        tuiAvatar
        [round]="false"
        [tuiSkeleton]="true"
    ></span>
    <span tuiTitle>
        <span tuiSkeleton="Loading file name"></span>
        <span
            tuiSkeleton="Loading"
            tuiSubtitle
        ></span>
    </span>
</div>
`;export{i as default};
