import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="BadgedContent"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>BadgedContent is a wrapper for other components to add badges and notifications to them.</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="$index === 1 && description"
                [heading]="example"
            />
        }

        <ng-template #description>
            <p>
                The wrapped element is assumed to have 12px border-radius. If it is different, override the
                <code>--tui-radius</code>
                variable with actual value.
            </p>
        </ng-template>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-badged-content [style.--tui-radius]="radius">
                <tui-badge-notification tuiSlot="top">1</tui-badge-notification>
                <div
                    size="l"
                    tuiAvatar="@tui.user"
                    [round]="radius === '50%'"
                >
                    <img
                        alt=""
                        src="https://avatars.githubusercontent.com/u/11832552"
                    />
                </div>
            </tui-badged-content>
        </tui-doc-demo>
        <h3 tuiHeader="h1">CSS customization</h3>
        <table tuiDocAPI>
            <tr
                name="style.--t-radius"
                tuiDocAPIItem
                type="string"
                [items]="radiusVariants"
                [(value)]="radius"
            >
                Border radius
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
