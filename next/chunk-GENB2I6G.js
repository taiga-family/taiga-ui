import"./chunk-HU6DUUP4.js";var a=`<div
    tuiTheme="dark"
    class="wrapper"
>
    <h1 class="tui-text_h3 title">Monty Python</h1>
    <tui-tabs-with-more
        underline="#fff"
        class="tabs"
        [activeItemIndex]="activeItemIndex"
        [moreContent]="more"
    >
        @for (tab of tabs; track tab) {
            @if (isString(tab)) {
                <button
                    *tuiItem
                    tuiTab
                    type="button"
                    (click)="onClick(tab)"
                >
                    {{ tab }}
                </button>
            } @else {
                <button
                    *tuiItem
                    tuiChevron
                    tuiDropdownAuto
                    tuiTab
                    type="button"
                    [tuiDropdown]="dropdown"
                    (tui-tab-activate)="stop($event)"
                >
                    Collaborators
                </button>
            }
        }
    </tui-tabs-with-more>
</div>
<section class="content">Currently active: {{ activeElement }}</section>
<ng-template
    #dropdown
    let-close
>
    <tui-data-list tuiDataListDropdownManager>
        @for (collaborator of collaborators; track collaborator) {
            <button
                tuiOption
                type="button"
                (click)="onClick(collaborator); close()"
            >
                {{ collaborator }}
            </button>
        }
    </tui-data-list>
</ng-template>
<ng-template #more>
    <tui-icon
        aria-label="More"
        icon="@tui.ellipsis"
    />
</ng-template>
`;export{a as default};
