import"./chunk-LQ6M4NCU.js";var o=`<tui-doc-page
    header="Theme"
    type="directives"
>
    <ng-template pageTab>
        <code>tuiTheme</code>
        allows to set style for a DOM branch. By default
        <code>dark</code>
        and
        <code>light</code>
        are included. Importing is not required.

        <tui-doc-example
            heading="Themes"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Toggling"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="description"
        >
            <ng-template #description>
                To keep the chosen theme between visits and prevent a flash of the wrong theme on load, see
                <a
                    fragment="dark-theme"
                    tuiLink
                    [routerLink]="[routes.GettingStarted, 'Config']"
                >
                    Dark theme setup
                </a>
            </ng-template>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{o as default};
