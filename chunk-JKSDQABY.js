import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Animated"
    package="CDK"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>TuiAnimated</code>
            allows adding animation to DOM elements in the same way as Angular's
            <a
                href="https://angular.dev/guide/animations"
                tuiLink
            >
                animate
            </a>
            attribute but supported in Angular 19.
        </p>

        <div
            appearance="warning"
            tuiNotification
        >
            <p>
                In case the user's operating system has reduced motion settings turned on, Taiga UI will honor this,
                disabling animations under its control, and
                <code>TuiAnimated</code>
                will not play animations.
            </p>
            <p>
                To override this behavior, use
                <code>TUI_REDUCED_MOTION</code>
                injection token. However, this is not the recommended approach, as the user's system preferences would
                be ignored.
            </p>
        </div>

        <tui-doc-example
            heading="Usage"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab="Setup">
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                <p>Add to import:</p>

                <tui-doc-code [code]="exampleImport" />
            </li>

            <li class="tui-list__item">
                <p>Add to template:</p>

                <tui-doc-code [code]="exampleTemplate" />
            </li>

            <li class="tui-list__item">
                <p>Add to style:</p>

                <tui-doc-code [code]="exampleStyle" />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{i as default};
