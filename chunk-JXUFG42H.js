import"./chunk-HU6DUUP4.js";var i=`<div
    appearance="floating"
    tuiCardLarge
>
    <h3 tuiTitle="m">Inside a block</h3>
    @for (item of items; track item) {
        <button
            tuiCell
            type="button"
        >
            <div
                appearance="accent"
                [tuiAvatar]="item.icon"
            ></div>
            <span tuiTitle>
                {{ item.title }}
                <span tuiSubtitle>{{ item.subtitle }}</span>
            </span>
        </button>
    }
</div>

<div tuiNotification>
    <code>Cell</code>
    is used inside
    <code>DataList</code>
    options and
    <code>Textfield</code>
    template by default.
</div>

<tui-textfield
    tuiChevron
    [content]="content"
    [tuiTextfieldCleaner]="false"
>
    <input
        tuiSelect
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [itemContent]="content"
        [items]="items"
    />
    <ng-template
        #content
        let-item
    >
        <div
            appearance="primary"
            [tuiAvatar]="item.icon"
        ></div>
        <span tuiTitle>
            {{ item.title }}
            <span tuiSubtitle>{{ item.subtitle }}</span>
        </span>
    </ng-template>
</tui-textfield>
`;export{i as default};
