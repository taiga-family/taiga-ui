import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page header="Appearances">
    <p>
        Most Taiga UI components rely on
        <a
            tuiLink
            [routerLink]="routes.Appearance"
        >
            Appearance
        </a>
        directive to represent their interactive state \u2014 you will find
        <code>appearance</code>
        input on many components, such as
        <a
            tuiLink
            [routerLink]="routes.Button"
        >
            Button
        </a>
        ,
        <a
            tuiLink
            [routerLink]="routes.Chip"
        >
            Chip
        </a>
        ,
        <a
            tuiLink
            [routerLink]="routes.Notification"
        >
            Notification
        </a>
        etc.
    </p>
    <p>
        When you include Taiga UI theme what you do is define light and dark mode values for CSS
        <a
            tuiLink
            [routerLink]="routes.Variables"
        >
            variables
        </a>
        and make built-in appearances, such as
        <code>primary</code>
        or
        <code>outline</code>
        , available to use in components.
    </p>
    <p>
        You can easily create your own appearances with the help of mixins (both LESS and SCSS) to define style rules
        for particular states:
    </p>
    <ul>
        @for (item of mixins; track item) {
            <li>
                <tui-doc-copy
                    class="var"
                    [cdkCopyToClipboard]="item"
                >
                    <code>{{ item }}</code>
                </tui-doc-copy>
            </li>
        }
    </ul>
    <p>
        Don't forget to import
        <code>&#64;import '&#64;taiga-ui/styles/utils';</code>
    </p>

    <tui-doc-example
        heading="Imitate material"
        [content]="example1"
    >
        <tui-wrapper-example-1 />
    </tui-doc-example>
</tui-doc-page>
`;export{a as default};
