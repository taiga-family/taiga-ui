import"./chunk-HU6DUUP4.js";var i=`<header tuiNavigationHeader>
    <div
        tuiGroup
        [collapsed]="true"
        [style.margin]="'auto'"
    >
        <label
            appearance=""
            tuiBlock="s"
        >
            <input
                tuiBlock="s"
                type="radio"
                value="basic"
                [(ngModel)]="current"
            />
            Basic
        </label>
        <label
            appearance=""
            tuiBlock="s"
        >
            <input
                tuiBlock="s"
                type="radio"
                value="input"
                [(ngModel)]="current"
            />
            Input
        </label>
        <label
            appearance=""
            tuiBlock="s"
        >
            <input
                tuiBlock="s"
                type="radio"
                value="card"
                [(ngModel)]="current"
            />
            Card
        </label>
    </div>
</header>
<main tuiNavigationMain>
    <header tuiSubheader>
        @if (current === 'basic') {
            <ng-container>
                <a
                    iconStart="@tui.chevron-left"
                    tuiLink
                    [textContent]="'Repositories'"
                ></a>
                <h2 tuiHeader>
                    <div tuiTitle>
                        <div tuiNavigationLogo>
                            <tui-icon icon="@tui.gitlab" />
                            <span tuiFade>Research and Development Platform</span>
                            <tui-icon
                                iconStart="@tui.heart"
                                tuiBadge
                            />
                        </div>
                        <div tuiSubtitle>
                            Here you can initiate and participate in the review of package objects. Each object have up
                            to 3 groups of reviewers, with one response required from each type, and any other
                            participant can change both positive.
                        </div>
                        <div
                            tuiSubtitle
                            [style.display]="'flex'"
                            [style.gap.rem]="1"
                        >
                            <span>
                                <tui-icon icon="@tui.user" />
                                Alex Inkin
                            </span>
                            Edited 6 minutes ago
                            <span>
                                <tui-icon icon="@tui.lock" />
                                Private
                            </span>
                        </div>
                    </div>
                    <div tuiAccessories>
                        <button
                            tuiButton
                            type="button"
                        >
                            Button
                        </button>
                        <button
                            appearance="primary"
                            tuiButton
                            type="button"
                        >
                            Button
                        </button>
                        <button
                            iconStart="@tui.ellipsis"
                            tuiIconButton
                            type="button"
                        >
                            More
                        </button>
                    </div>
                </h2>
            </ng-container>
        }
        @if (current === 'input') {
            <ng-container>
                <h2 tuiHeader>
                    <div tuiTitle>Projects</div>
                    <div tuiAccessories>
                        <button
                            appearance="primary"
                            tuiButton
                            type="button"
                        >
                            Create
                        </button>
                    </div>
                </h2>
                <tui-textfield iconStart="@tui.search">
                    <input
                        placeholder="Search"
                        tuiInput
                    />
                </tui-textfield>
            </ng-container>
        }

        @if (current === 'card') {
            <ng-container>
                <tui-breadcrumbs>
                    <a
                        *tuiItem
                        tuiLink
                    >
                        Code
                    </a>
                    <a
                        *tuiItem
                        tuiLink
                    >
                        Repositories
                    </a>
                    <span *tuiItem>Taiga UI</span>
                </tui-breadcrumbs>
                <div
                    appearance="floating"
                    tuiCardLarge="compact"
                    tuiHeader
                >
                    <h2 tuiTitle>
                        Personal and Development Plan
                        <span tuiSubtitle>
                            Here you can initiate and participate in the review of package objects. Each object have up
                            to 3 groups of reviewers, with one response required from each type, and any other
                            participant can change both positive
                        </span>
                    </h2>
                </div>
            </ng-container>
        }

        <tui-tabs>
            <button
                tuiTab
                type="button"
            >
                First tab
            </button>
            <button
                tuiTab
                type="button"
            >
                Second tab
            </button>
            <button
                tuiTab
                type="button"
            >
                Third tab
            </button>
            <button
                tuiButton
                type="button"
            >
                Button
            </button>
            <button
                tuiButton
                type="button"
            >
                Button
            </button>
        </tui-tabs>
    </header>

    @for (_ of '-'.repeat(10); track $index) {
        <div
            appearance="floating"
            tuiCardLarge="compact"
            tuiHeader
            [style.grid-column]="'span 6'"
        >
            <h2 tuiTitle>
                Some random content
                <span tuiSubtitle>A subtitle</span>
            </h2>
        </div>
    }
</main>
`;export{i as default};
