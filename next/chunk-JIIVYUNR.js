import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Filter"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            Components shows separated items that can be used to filter content on the page. There are also an option
            with badges.
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With badges"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Custom"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="With all button"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [fullsize]="true"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-filter
                    [badgeHandler]="badgeHandler"
                    [disabledItemHandler]="disabledItemHandler"
                    [formControl]="control"
                    [items]="items"
                    [size]="size"
                    (toggledItem)="itemToggle.emitEvent($event)"
                />
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[badgeHandler]"
                tuiDocAPIItem
                type="TuiHandler<T>"
                [items]="badgeHandlerVariants"
                [(value)]="badgeHandler"
            >
                Function that gets and item and returns a badge value. Uses
                <code>valueOf</code>
                to get a number to show by default
            </tr>
            <tr
                name="[content]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Template for custom content in filter
            </tr>
            <tr
                name="[disabledItemHandler]"
                tuiDocAPIItem
                type="TuiBooleanHandler"
                [items]="disabledItemHandlerVariants"
                [(value)]="disabledItemHandler"
            >
                <div>A handler that gets a date and returns true if it is disabled.</div>

                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[identityMatcher]"
                tuiDocAPIItem
                type="TuiIdentityMatcher"
            >
                Function that matches value and items, e.g. if objects are copied. Uses
                <code>===</code>
                by default.

                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[items]"
                tuiDocAPIItem
                type="T[]"
                [items]="itemsVariants"
                [(value)]="items"
            >
                Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses
                <code>toString</code>
                for view
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
            <tr
                #itemToggle
                name="(toggledItem)"
                tuiDocAPIItem
                type="T"
            >
                Toggled event of item
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
