import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="ItemsWithMore"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component to hide overflown items behind custom content.</p>

        <div tuiNotification>Resize the screen to see extra items disappear</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="true"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Hiding excessive items and showing text.
                        }
                        @case (1) {
                            Putting extra items in a dropdown.
                        }
                        @case (2) {
                            Handling excessive items at the beginning of the list.
                        }
                        @case (3) {
                            Hiding extra items in a multi line container.
                        }
                        @case (4) {
                            Showing compact version of text in a
                            <a
                                tuiLink
                                [routerLink]="routes.Cell"
                            >
                                Cell
                            </a>
                            in limited space.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-items-with-more
                [itemsLimit]="itemsLimit"
                [linesLimit]="linesLimit"
                [required]="required"
                [side]="side"
            >
                @for (item of items; track item) {
                    <span
                        *tuiItem
                        tuiChip
                        class="tui-space_right-2 tui-space_vertical-1"
                    >
                        {{ item }}
                    </span>
                }
                <span
                    *tuiMore
                    class="tui-space_right-2 tui-space_vertical-1"
                >
                    <span
                        appearance="secondary"
                        tuiChip
                    >
                        and now!
                    </span>
                </span>
            </tui-items-with-more>
        </tui-doc-demo>
        <p>
            Use
            <code>Item</code>
            directive for each item
        </p>
        <p>
            Use
            <code>More</code>
            directive for "See more" content
        </p>
        <table tuiDocAPI>
            <tr
                name="[itemsLimit]"
                tuiDocAPIItem
                type="number"
                [items]="itemsLimitVariants"
                [(value)]="itemsLimit"
            >
                Artificial limit on visible items
            </tr>
            <tr
                name="[linesLimit]"
                tuiDocAPIItem
                type="number"
                [items]="linesLimitVariants"
                [(value)]="linesLimit"
            >
                Limit on visible lines
            </tr>
            <tr
                name="[required]"
                tuiDocAPIItem
                type="number"
                [items]="requiredVariants"
                [(value)]="required"
            >
                Index of an item that must remain visible
            </tr>
            <tr
                name="[side]"
                tuiDocAPIItem
                type="number"
                [items]="sideVariants"
                [(value)]="side"
            >
                Side of the "See more" content (for one-line mode only)
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
