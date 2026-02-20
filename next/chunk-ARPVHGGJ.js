import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Shimmer"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>tuiShimmer</code>
            directive visually implements the "Shimmer" UI pattern \u2014 an animated loading indicator that simulates
            content appearance while data is being fetched. This pattern enhances the user experience by providing
            visual feedback during loading states, helping users understand that the interface is active and content is
            on its way.
        </p>

        <h3>When to Use</h3>

        <p>
            To indicate loading states in cards, headers, lists, avatars, and other UI elements. When you want to
            visually communicate that content is loading, rather than missing or frozen. Shimmer is used when you have
            cached data that is currently being refreshed and if you have no data at all \u2014 a better choice would be
            <a
                tuiLink
                [routerLink]="routes.Skeleton"
            >
                <strong>Skeleton</strong>
            </a>
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <section
                appearance="floating"
                tuiCardLarge
            >
                <header tuiHeader>
                    <hgroup
                        tuiTitle
                        [tuiShimmer]="shimmer"
                    >
                        <h5>You got $237&nbsp;000,42 left</h5>
                        <p tuiSubtitle>Where's the money, Lebowski?</p>
                    </hgroup>

                    <aside tuiAccessories>
                        <div
                            appearance="primary"
                            tuiAvatar="@tui.star"
                        ></div>
                    </aside>
                </header>
                <tui-avatar-stack [tuiShimmer]="shimmer">
                    @for (avatar of avatars; track $index) {
                        <div tuiAvatar="@tui.user">
                            <img
                                alt=""
                                [src]="avatar"
                            />
                        </div>
                    }
                </tui-avatar-stack>
                <footer>
                    <button
                        appearance="secondary"
                        size="m"
                        tuiButton
                        type="button"
                    >
                        It's down there
                    </button>
                    <button
                        size="m"
                        tuiButton
                        type="button"
                    >
                        Take another look
                    </button>
                </footer>
            </section>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiShimmer]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="shimmer"
            >
                Shimmer state
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
