import"./chunk-HU6DUUP4.js";var i=`<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
    <ng-container #vcr />
</div>
<header tuiNavigationHeader>
    <button
        portal
        title="Menu"
        tuiIconButton
        tuiNavigationDrawer
        type="button"
        [(open)]="open"
    >
        <tui-data-list>
            @for (group of drawer | keyvalue; track group) {
                <tui-opt-group [label]="group.key">
                    @for (item of group.value; track item) {
                        <button
                            tuiOption
                            type="button"
                            (click)="open = false"
                        >
                            <img
                                alt="icon"
                                [src]="item.icon"
                            />
                            {{ item.name }}
                        </button>
                    }
                </tui-opt-group>
            }
            <hr />
            <tui-opt-group>
                <label tuiOption>
                    <input
                        size="s"
                        tuiSwitch
                        type="checkbox"
                        [(ngModel)]="switch"
                    />
                    Dark mode
                </label>
            </tui-opt-group>
        </tui-data-list>
    </button>
    <span tuiNavigationLogo>
        <tui-icon icon="@tui.home" />
        <span tuiFade>A very very long product name</span>
        <div tuiBadge>Test</div>
    </span>
    <span tuiNavigationSegments>
        <button
            appearance="secondary-grayscale"
            tuiButton
            type="button"
        >
            Link 1
        </button>
        <button
            appearance="secondary-grayscale"
            tuiButton
            type="button"
        >
            Link 2
        </button>
        <button
            appearance="secondary-grayscale"
            tuiButton
            tuiChevron
            tuiDropdownAuto
            type="button"
            [tuiDropdown]="products"
        >
            <span
                [style.overflow]="'hidden'"
                [style.text-overflow]="'ellipsis'"
            >
                A very very long project
            </span>
            <ng-template #products>
                <tui-data-list size="s">
                    <button
                        tuiOption
                        type="button"
                    >
                        A very very long project
                        <tui-icon
                            icon="@tui.check"
                            [style.font-size.em]="1"
                            [style.margin-inline-start.rem]="0.5"
                        />
                    </button>
                    <button
                        tuiOption
                        type="button"
                    >
                        Something else
                    </button>
                </tui-data-list>
            </ng-template>
        </button>
    </span>
    <hr />
    <button
        appearance="secondary-grayscale"
        iconStart="@tui.plus"
        tuiButton
        type="button"
    >
        Create
    </button>
    <button
        iconStart="@tui.bell"
        tuiIconButton
        type="button"
    >
        Notifications
        <tui-badge-notification />
    </button>
    <button
        iconStart="@tui.ellipsis"
        tuiIconButton
        type="button"
    >
        More
    </button>
    <div tuiAvatar="AI"></div>
</header>
<div [style.display]="'flex'">
    <aside
        [style.height.rem]="27"
        [tuiNavigationAside]="expanded()"
    >
        <header>
            <button
                iconStart="@tui.home"
                type="button"
                [tuiAsideItem]="hint"
            >
                <ng-container [ngTemplateOutlet]="hint" />
                <ng-template #hint>
                    <span tuiFade>A very very long product name</span>
                    <div
                        appearance="accent"
                        tuiBadge
                    >
                        Alpha
                    </div>
                </ng-template>
            </button>
        </header>
        <button
            iconStart="@tui.search"
            tuiAsideItem
            type="button"
        >
            Search

            @if (expanded()) {
                <div
                    appearance="accent"
                    tuiBadge
                >
                    12
                </div>
            }
        </button>
        <a
            iconStart="@tui.users"
            tuiAsideItem
            [routerLink]="routes.Navigation"
        >
            Groups
        </a>
        <tui-aside-group>
            <button
                automation-id="setting"
                iconStart="@tui.settings"
                tuiAsideItem
                tuiChevron
                type="button"
            >
                Settings
                <ng-template>
                    <button
                        tuiAsideItem
                        type="button"
                    >
                        Account
                    </button>
                    <button
                        tuiAsideItem
                        type="button"
                    >
                        Notifications
                    </button>
                    <button
                        tuiAsideItem
                        type="button"
                    >
                        Privacy
                    </button>
                </ng-template>
            </button>
        </tui-aside-group>
        <button
            automation-id="hint"
            iconStart="@tui.heart"
            tuiAsideItem
            type="button"
        >
            <span tuiFade>By default ellipsis is used but you can use fade too</span>
        </button>
        <button
            iconEnd="@tui.chevron-right"
            iconStart="@tui.ellipsis"
            tuiAsideItem
            tuiDropdownAuto
            tuiDropdownHover
            type="button"
            [tuiDropdown]="more"
        >
            More
            <ng-template
                #more
                let-close
            >
                <tui-data-list tuiDataListDropdownManager>
                    <button
                        iconStart="@tui.pencil"
                        tuiAsideItem
                        type="button"
                    >
                        Write
                    </button>
                    <button
                        iconStart="@tui.pie-chart"
                        tuiAsideItem
                        type="button"
                        [tuiDropdown]="submenu"
                    >
                        Categories
                        <ng-template #submenu>
                            <tui-data-list>
                                <button
                                    tuiAsideItem
                                    type="button"
                                    (click)="close()"
                                >
                                    Fiction (will close menu)
                                </button>
                                <button
                                    tuiAsideItem
                                    type="button"
                                >
                                    Non-Fiction
                                </button>
                                <button
                                    tuiAsideItem
                                    type="button"
                                >
                                    Children
                                </button>
                            </tui-data-list>
                        </ng-template>
                    </button>
                </tui-data-list>
            </ng-template>
        </button>
        <hr />
        <button
            iconStart="@tui.plus"
            tuiAsideItem
            type="button"
        >
            Add
        </button>
        <footer>
            <button
                iconStart="@tui.star"
                tuiAsideItem
                type="button"
            >
                Favorites
            </button>
            <button
                tuiAsideItem
                type="button"
                [iconStart]="expanded() ? '@tui.chevron-left' : '@tui.chevron-right'"
                (click)="handleToggle()"
            >
                {{ expanded() ? 'Collapse' : 'Expand' }}
            </button>
        </footer>
    </aside>
    <main tuiNavigationMain>
        <nav
            compact
            tuiSubheader
            [style.position]="'sticky'"
        >
            <tui-breadcrumbs [itemsLimit]="10">
                @for (item of breadcrumbs; track item) {
                    @if ($last) {
                        <strong
                            *tuiItem
                            tuiFade
                        >
                            {{ item }}
                        </strong>
                    }
                    @if (!$last) {
                        <button
                            *tuiItem
                            tuiLink
                            type="button"
                        >
                            {{ item }}
                        </button>
                    }
                }
            </tui-breadcrumbs>
            <tui-tabs tuiFade>
                <button
                    tuiTab
                    type="button"
                >
                    Default view
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Details
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Followers
                </button>
            </tui-tabs>
            <button
                appearance="secondary"
                tuiButton
                type="button"
            >
                Secondary
            </button>
            <button
                tuiButton
                type="button"
            >
                Primary
            </button>
        </nav>
        <ng-container>
            @for (_ of '-'.repeat(10); track $index) {
                <form
                    appearance="floating"
                    tuiCardLarge
                    tuiForm="m"
                    [style.grid-column]="'2 / span 7'"
                    [style.margin-block-start.rem]="1"
                >
                    <header tuiHeader>
                        <h2 tuiTitle>
                            Registration form
                            <span tuiSubtitle>Tell us about yourself</span>
                        </h2>
                    </header>
                    <tui-textfield>
                        <label tuiLabel>Name</label>
                        <input
                            placeholder="John Wick"
                            tuiInput
                        />
                    </tui-textfield>
                    <footer>
                        <button
                            appearance="secondary"
                            tuiButton
                            type="button"
                        >
                            Cancel
                        </button>
                        <button
                            tuiButton
                            type="submit"
                        >
                            Ok
                        </button>
                    </footer>
                </form>
                <div
                    appearance="outline-grayscale"
                    tuiCardLarge
                    [style.grid-column]="'span 3'"
                    [style.margin-block-start.rem]="1"
                >
                    <h2 tuiTitle>
                        Sidebar content
                        <span tuiSubtitle>Use CSS grid to position</span>
                    </h2>
                </div>
            }
        </ng-container>
    </main>
</div>
`;export{i as default};
