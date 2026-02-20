import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="TabBar"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <p>Component for creating mobile navigation.</p>

        <tui-doc-example
            heading="Buttons"
            [content]="1 | tuiExample"
        >
            <label
                tuiLabel
                class="tui-space_bottom-4"
            >
                <input
                    tuiCheckbox
                    type="checkbox"
                    [(ngModel)]="fixed"
                />
                Fixed
            </label>
            @if (!fixed) {
                <tui-tab-bar-example class="bar" />
            }
            <tui-tab-bar-example
                *tuiPopup="fixed"
                class="fixed"
            />
        </tui-doc-example>

        <tui-doc-example
            heading="Links"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        >
            <div
                tuiNotification
                class="bar tui-space_bottom-4"
            >
                If you use
                <code>routerLink</code>
                you must also add
                <code>routerLinkActive</code>
                directive.
            </div>
        </tui-doc-example>

        <tui-doc-example
            heading="Customization"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Skeleton"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        >
            <div
                tuiNotification
                class="bar tui-space_bottom-4"
            >
                When there are no
                <code>TabBarItem</code>
                children, the component shows skeleton for 4 items
            </div>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{o as default};
