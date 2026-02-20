import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputPhoneInternational"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Allows to input phone number in international format</p>

        <p>
            <code>InputPhoneInternational</code>
            is based on
            <a
                href="https://maskito.dev/addons/phone"
                target="_blank"
                tuiLink
            >
                <strong>&#64;maskito/phone</strong>
            </a>
            and
            <a
                href="https://www.npmjs.com/package/libphonenumber-js"
                target="_blank"
                tuiLink
            >
                <strong>libphonenumber-js</strong>
            </a>
            libraries.
        </p>

        <div tuiNotification>
            <a
                href="https://github.com/google/libphonenumber"
                target="_blank"
                tuiLink
            >
                <strong>libphonenumber</strong>
            </a>
            is an ultimate phone number formatting and parsing library developed by
            <strong>Google</strong>
            .

            <p>
                This library
                <a
                    href="https://github.com/google/libphonenumber/blob/master/FAQ.md#where-do-we-get-information-from-to-determine-if-a-number-range-is-valid"
                    tuiLink
                >
                    <span>collects</span>
                </a>
                the latest phone number rules from ITU documents, user bug reports, telecom company home pages and
                government telecommunication authorities. It is always up-to-date (for more than 10 years), and releases
                are published almost every month. It means that
                <code>InputPhoneInternational</code>
                has the robust source of truth!
            </p>
        </div>

        <tui-doc-example
            heading="Choose metadata"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="metadataDescription"
        >
            <ng-template #metadataDescription>
                <p class="tui-space_top-0">
                    The first step is to choose the size of
                    <code>
                        metadata
                        <tui-icon
                            tuiHintDirection="top"
                            [tuiTooltip]="metadataDefinition"
                        />

                        <ng-template #metadataDefinition>
                            <strong>Google</strong>
                            <a
                                appearance="action-grayscale"
                                href="https://github.com/google/libphonenumber/blob/master/FAQ.md#what-do-we-mean-by-metadata"
                                target="_blank"
                                tuiLink
                                tuiTheme="dark"
                            >
                                <span>uses</span>
                            </a>
                            the word
                            <strong>"metadata"</strong>
                            to refer to all information about phone numbering in a particular country - what the country
                            code, international and national dialling prefixes are, what carrier codes are operational,
                            which phone numbers are possible or valid for a particular country, how to optimally format
                            them, which prefixes represent a particular geographical area, etc.
                        </ng-template>
                    </code>
                    .
                </p>

                <p>
                    The complete list of all phone rules is huge, so
                    <code>libphonenumber-js</code>
                    provides different "metadata" sets to provides a way to optimize bundle size by choosing between
                    <code>max</code>
                    ,
                    <code>min</code>
                    (default value) and
                    <code>mobile</code>
                    sets.
                </p>

                <p class="tui-space_bottom-0">
                    Read in-depth
                    <a
                        href="https://github.com/catamphetamine/libphonenumber-js?tab=readme-ov-file#min-vs-max-vs-mobile-vs-core"
                        target="_blank"
                        tuiLink
                    >
                        description\xA0about\xA0every\xA0set
                    </a>
                    .
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Choose any countries"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="selectCountriesDescription"
        >
            <ng-template #selectCountriesDescription>
                Parameter
                <code>countries</code>
                allows you to choose which countries user can select from the dropdown.

                <p class="tui-space_top-0">
                    You can even pick all possible countries by built-in utility
                    <code>getCountries</code>
                    from
                    <code>libphonenumber-js</code>
                    .
                </p>

                <p class="tui-space_bottom-0">
                    Use
                    <code>TuiSortCountriesPipe</code>
                    to sort countries according to your current language.
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Mobile dropdown"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [description]="mobileDescription"
        >
            <ng-template #mobileDescription>
                You can enable mobile specific dropdown design on mobile devices by adding
                <code>TuiDropdownMobile</code>
                directive.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Customize with icons"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="iconsDescription"
        >
            <ng-template #iconsDescription>
                You can put static
                <a
                    tuiLink
                    [routerLink]="routes.Icon"
                >
                    Icon
                </a>
                or even interactive
                <a
                    tuiLink
                    [routerLink]="routes.Tooltip"
                >
                    Tooltip
                </a>
                at the right side of the textfield.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Customize separator"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
            [description]="separatorDescription"
        >
            <ng-template #separatorDescription>
                Using
                <code>tuiInputPhoneInternationalOptionsProvider</code>
                you can provide custom separator for input instead of the default
                <code>-</code>
                .
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Use phone format helpers"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="phoneFormatHelpersDescription"
        >
            <ng-template #phoneFormatHelpersDescription>
                <code>InputPhoneInternational</code>
                internally uses
                <strong>Maskito</strong>
                to format phone number.
                <br />
                Don't hesitate to use it too to manually format any phone number.
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="formControl">
            <ng-template>
                <tui-textfield
                    [tuiDropdownAlign]="dropdown.align"
                    [tuiDropdownAppearance]="dropdown.appearance"
                    [tuiDropdownDirection]="dropdown.direction"
                    [tuiDropdownLimitWidth]="dropdown.limitWidth"
                    [tuiDropdownMaxHeight]="dropdown.maxHeight"
                    [tuiDropdownMinHeight]="dropdown.minHeight"
                    [tuiDropdownOffset]="dropdown.offset"
                    [tuiTextfieldCleaner]="textfield.cleaner"
                    [tuiTextfieldSize]="textfield.size"
                >
                    @if (textfield.size !== 's') {
                        <label tuiLabel>Type a phone number</label>
                    }
                    <input
                        tuiInputPhoneInternational
                        [countries]="countries"
                        [countrySearch]="countrySearch"
                        [focused]="input.focused"
                        [formControl]="formControl"
                        [invalid]="control.invalid"
                        [placeholder]="textfield.size === 's' ? 'Type a phone number' : ''"
                        [readOnly]="control.readonly"
                        [state]="input.state"
                        [tuiDisabled]="control.disabled"
                        [(countryIsoCode)]="countryIsoCode"
                    />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[countries]"
                tuiDocAPIItem
                type="ReadonlyArray<TuiCountryIsoCode>"
                [items]="countriesVariants"
                [(value)]="countries"
            >
                Array of ISO-codes of countries to choose
            </tr>
            <tr
                name="[countrySearch]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="countrySearch"
            >
                Enable filter input for countries
            </tr>
            <tr
                name="[(countryIsoCode)]"
                tuiDocAPIItem
                type="boolean"
                [items]="countryIsoCodeVariants"
                [(value)]="countryIsoCode"
            >
                ISO-code of selected country
            </tr>
            <tbody
                #textfield
                tuiDocTextfield
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #control
                tuiDocControl
            ></tbody>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="['open', 'tuiDropdownEnabled', 'dropdownSided', 'dropdownSidedOffset']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
