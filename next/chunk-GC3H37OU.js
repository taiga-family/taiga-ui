import"./chunk-B4AJQJMI.js";var i=`<div
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
    <code>DataList</code>
    already uses
    <code>Cell</code>
    for the options, but if you need to show it in value template as well \u2013 add a wrapping element with
    <code>Cell</code>
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
        <span tuiCell>
            <div
                appearance="primary"
                [tuiAvatar]="item.icon"
            ></div>
            <span tuiTitle>
                {{ item.title }}
                <span tuiSubtitle>{{ item.subtitle }}</span>
            </span>
        </span>
    </ng-template>
</tui-textfield>
`;export{i as default};
