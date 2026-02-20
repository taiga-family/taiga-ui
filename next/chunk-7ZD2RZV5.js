import"./chunk-HU6DUUP4.js";var e=`<tui-filter
    size="s"
    [formControl]="control"
    [items]="items"
/>

<tui-action-bar
    *tuiPopup="open"
    [expanded]="!!isMobile() && expanded"
>
    <tui-data-list role="menu">
        <tui-opt-group>
            <button
                role="menuitem"
                tuiOption
                type="button"
            >
                <span>
                    <tui-icon
                        icon="@tui.send"
                        class="tui-space_right-3"
                    />
                    Send
                </span>
            </button>
            <button
                role="menuitem"
                tuiOption
                type="button"
            >
                <span>
                    <tui-icon
                        icon="@tui.trash"
                        class="tui-space_right-3"
                    />
                    Delete
                </span>
            </button>
        </tui-opt-group>
        <hr />
        <tui-opt-group>
            <button
                role="menuitem"
                tuiOption
                type="button"
                [disabled]="selected === items.length"
                (click)="control.setValue(items)"
            >
                <span>
                    <tui-icon
                        icon="@tui.layout-grid"
                        class="tui-space_right-3"
                    />
                    Select all
                </span>
            </button>
            <button
                role="menuitem"
                tuiOption
                type="button"
                (click)="close()"
            >
                <span>
                    <tui-icon
                        icon="@tui.x"
                        class="tui-space_right-3"
                    />
                    Select none and close
                </span>
            </button>
        </tui-opt-group>
        <hr />
        <tui-opt-group>
            @for (_ of '-'.repeat(5); track $index) {
                <button
                    role="menuitem"
                    tuiOption
                    type="button"
                >
                    <span>
                        <tui-icon
                            icon="@tui.star"
                            class="tui-space_right-3"
                        />
                        Action {{ $index + 1 }}
                    </span>
                </button>
            }
        </tui-opt-group>
    </tui-data-list>

    <div>
        <strong>Selected: {{ selected }} of {{ items.length }}</strong>
        @if (!isMobile()) {
            <button
                tuiLink
                type="button"
                [style.margin-inline-start.rem]="0.75"
                [style.text-decoration-line]="'underline'"
                [style.text-decoration-style]="'dashed'"
                (click)="toggleSelect()"
            >
                {{ selected < items.length ? 'Select all' : 'Select none' }}
            </button>
        }
    </div>

    <tui-items-with-more>
        @for (_ of '-'.repeat(5); track $index) {
            <button
                *tuiItem
                iconStart="@tui.star"
                tuiButton
                type="button"
            >
                Action {{ $index + 1 }}
            </button>
        }
        <ng-template
            let-lastIndex
            tuiMore
        >
            <button
                iconStart="@tui.ellipsis"
                tuiButton
                tuiDropdownAlign="end"
                tuiDropdownAuto
                type="button"
                [tuiDropdown]="dropdown"
            >
                More
            </button>
            <ng-template #dropdown>
                <tui-data-list size="l">
                    @for (_ of '-'.repeat(5); track $index) {
                        @if ($index > lastIndex) {
                            <button
                                tuiOption
                                type="button"
                            >
                                Action {{ $index + 1 }}
                            </button>
                        }
                    }
                </tui-data-list>
            </ng-template>
        </ng-template>
    </tui-items-with-more>

    @if (!isMobile()) {
        <button
            iconStart="@tui.send"
            tuiButton
            type="button"
        >
            Send
        </button>
    }
    @if (!isMobile()) {
        <button
            iconStart="@tui.trash"
            tuiButton
            type="button"
            (click)="close()"
        >
            Delete
        </button>
    }

    @if (isMobile()) {
        <button
            iconStart="@tui.send"
            tuiIconButton
            type="button"
        >
            Send
        </button>
    }
    @if (isMobile()) {
        <button
            iconStart="@tui.ellipsis"
            tuiIconButton
            type="button"
            (click)="expanded = !expanded"
        >
            More
        </button>
    }

    @if (!isMobile()) {
        <button
            appearance="icon"
            iconStart="@tui.x"
            tuiIconButton
            type="button"
            (click)="close()"
        >
            Close
        </button>
    }
</tui-action-bar>
`;export{e as default};
