# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.10.0](https://github.com/taiga-family/taiga-ui/compare/v4.8.1...v4.10.0) (2024-10-08)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix Safari autofill
  ([#9198](https://github.com/taiga-family/taiga-ui/issues/9198))
  ([1f5dfa5](https://github.com/taiga-family/taiga-ui/commit/1f5dfa57839157c7690e0ce1ad246d732aeaa106))
- **addon-doc:** add `legacy` package as peer dependency ([#9367](https://github.com/taiga-family/taiga-ui/issues/9367))
  ([069b680](https://github.com/taiga-family/taiga-ui/commit/069b680507605d7fbf08c052d94f54153f6194ea))
- **addon-doc:** glitch width content between value from DOM and sandbox width from url
  ([#9341](https://github.com/taiga-family/taiga-ui/issues/9341))
  ([b5c4156](https://github.com/taiga-family/taiga-ui/commit/b5c4156ab7277865b6ab28c37e0e146875a4acc5))
- **addon-doc:** provide languages icon ([#9236](https://github.com/taiga-family/taiga-ui/issues/9236))
  ([bc5caf7](https://github.com/taiga-family/taiga-ui/commit/bc5caf71856a1b10fbea957af40b1694c3426acd))
- **addon-mobile:** fix minLength and maxLength properties for range in mobile calendar
  ([#9118](https://github.com/taiga-family/taiga-ui/issues/9118))
  ([c84dd39](https://github.com/taiga-family/taiga-ui/commit/c84dd39af211b89fa0c27f5abf1864d5b772175a))
- **addon-table:** drop legacy package dependency ([#9373](https://github.com/taiga-family/taiga-ui/issues/9373))
  ([1171fbc](https://github.com/taiga-family/taiga-ui/commit/1171fbc3807ece6ec0b5baefa57b3535ebed2b9e))
- **addon-table:** hydration error while configuring table
  ([#9374](https://github.com/taiga-family/taiga-ui/issues/9374))
  ([7100f73](https://github.com/taiga-family/taiga-ui/commit/7100f730b34b71d4ffdef0c858c07112e6cb18a2))
- **cdk:** `Control` react to `markAsTouched` on Angular 18+
  ([#9330](https://github.com/taiga-family/taiga-ui/issues/9330))
  ([1b732e8](https://github.com/taiga-family/taiga-ui/commit/1b732e8d63473532025e0ca70289865e92a85536))
- **cdk:** support any query string inside URL ([#9254](https://github.com/taiga-family/taiga-ui/issues/9254))
  ([af4aa7e](https://github.com/taiga-family/taiga-ui/commit/af4aa7e3bb8a780f18b793ad5c4d8e258aec9129))
- **core:** `Hint` fix change detection when changing content programmatically
  ([#9291](https://github.com/taiga-family/taiga-ui/issues/9291))
  ([57f80ed](https://github.com/taiga-family/taiga-ui/commit/57f80edb688d12e0fc144dc5a698a8b55e901a8b))
- **core:** `Scrollbar` fix scroll leaking to both directions
  ([#9217](https://github.com/taiga-family/taiga-ui/issues/9217))
  ([ff829fc](https://github.com/taiga-family/taiga-ui/commit/ff829fcdf68bf1461be5dbf18f0d0a8625a1a22d))
- **core:** `Textfield` has change detection problems for `[filler]`
  ([#9243](https://github.com/taiga-family/taiga-ui/issues/9243))
  ([a45df07](https://github.com/taiga-family/taiga-ui/commit/a45df07ca6e8fae2bc28b2b0fb101e8cf9bec785))
- **core:** `Textfield` with initial value has change detection problems with `filler`
  ([#9375](https://github.com/taiga-family/taiga-ui/issues/9375))
  ([8217c90](https://github.com/taiga-family/taiga-ui/commit/8217c9030781b30ae6102f57dc4d13f64199f6c1))
- **core:** close dropdown when dropdown host is hidden via css
  ([#9189](https://github.com/taiga-family/taiga-ui/issues/9189))
  ([3e991f9](https://github.com/taiga-family/taiga-ui/commit/3e991f91323b43664f5466b60e1a599a8bf6c81b))
- **core:** fix open DropdownContext after single touch on iOS
  ([#9287](https://github.com/taiga-family/taiga-ui/issues/9287))
  ([8a5ff74](https://github.com/taiga-family/taiga-ui/commit/8a5ff7446ddf2330b5ae9750af3aaaccd9af96c4))
- **core:** fix overriding default dropdown options ([#9348](https://github.com/taiga-family/taiga-ui/issues/9348))
  ([db84c4c](https://github.com/taiga-family/taiga-ui/commit/db84c4c9c5e782e4f6280e347a002987f6fca7e1))
- **deps:** update dependency lucide-static to v0.447.0 ([#9305](https://github.com/taiga-family/taiga-ui/issues/9305))
  ([9ac86a3](https://github.com/taiga-family/taiga-ui/commit/9ac86a3e9ef7a223c587cfb75d4d8fd5d960a700))
- **deps:** update dependency lucide-static to v0.449.0 ([#9383](https://github.com/taiga-family/taiga-ui/issues/9383))
  ([7aa6ee4](https://github.com/taiga-family/taiga-ui/commit/7aa6ee463e0f5064bcfe530cba72a718d049df91))
- **deps:** update dependency lucide-static to v0.451.0 ([#9387](https://github.com/taiga-family/taiga-ui/issues/9387))
  ([7c33c90](https://github.com/taiga-family/taiga-ui/commit/7c33c90d442322c7e5d5375e66f0747148e3c767))
- **deps:** update dependency ng-morph to v4.8.4 ([#9264](https://github.com/taiga-family/taiga-ui/issues/9264))
  ([91dab47](https://github.com/taiga-family/taiga-ui/commit/91dab47d788652be07440554105f2d039d3960f2))
- **deps:** update maskito to ^3.0.3 ([#9191](https://github.com/taiga-family/taiga-ui/issues/9191))
  ([61170a6](https://github.com/taiga-family/taiga-ui/commit/61170a6cdfeb71b57ef1da2e12a125d15551f6e4))
- **deps:** update taiga-ui family dependencies ([#9265](https://github.com/taiga-family/taiga-ui/issues/9265))
  ([bcd1ef4](https://github.com/taiga-family/taiga-ui/commit/bcd1ef4c7c319923bd3bee0cf4f8bab32fa0ec34))
- **deps:** update taiga-ui to ^4.6.4 ([#9180](https://github.com/taiga-family/taiga-ui/issues/9180))
  ([ffbee63](https://github.com/taiga-family/taiga-ui/commit/ffbee63587b516dbd60b27c796e037ebb0368246))
- **kit:** `Chip` size
  ([904725c](https://github.com/taiga-family/taiga-ui/commit/904725c7e43e182fe12a4ed1e9ba9101b39d958d))
- **kit:** `Chip` size ([#9169](https://github.com/taiga-family/taiga-ui/issues/9169))
  ([a92153a](https://github.com/taiga-family/taiga-ui/commit/a92153ae08ae17dcf93edfd06d23ba021bdc47ee))
- **kit:** `Radio`, `Checkbox`, `Switch` remove non-functioning `appearance` input
  ([#9221](https://github.com/taiga-family/taiga-ui/issues/9221))
  ([6dc4ce0](https://github.com/taiga-family/taiga-ui/commit/6dc4ce05f5b100ac5045de74097109ebcd6a7e47))
- **kit:** `TuiImgLazyLoading` compat with SSR ([#9184](https://github.com/taiga-family/taiga-ui/issues/9184))
  ([710166f](https://github.com/taiga-family/taiga-ui/commit/710166f199334b3f851e503ff765c48b29e67a5a))
- **layout:** `Header` fix subtitile padding on mobile ([#9282](https://github.com/taiga-family/taiga-ui/issues/9282))
  ([faeca9e](https://github.com/taiga-family/taiga-ui/commit/faeca9e9f506c78e63581a9564ea49be55c2aa16))
- **legacy:** `Input` fix [(tuiDropdownOpen)] ([#9214](https://github.com/taiga-family/taiga-ui/issues/9214))
  ([65981bc](https://github.com/taiga-family/taiga-ui/commit/65981bcaefcce811891887a697c496d53108fce2))
- **legacy:** `InputTag` fix pasting multiple invalid tags
  ([#9340](https://github.com/taiga-family/taiga-ui/issues/9340))
  ([8b8161d](https://github.com/taiga-family/taiga-ui/commit/8b8161d8fb36b08830b6dc7db2aa9ef3f2c2d2cf))
- **legacy:** `Multiselect` do not clear input on separator keydown, fix pasting
  ([#9345](https://github.com/taiga-family/taiga-ui/issues/9345))
  ([56d4a18](https://github.com/taiga-family/taiga-ui/commit/56d4a18a38a9c9e19184c5ce7c14c150024397a1))
- **legacy:** revert `ngSkipHydration` ([#9320](https://github.com/taiga-family/taiga-ui/issues/9320))
  ([7c43df8](https://github.com/taiga-family/taiga-ui/commit/7c43df8cc75c1d37dde82a62499c4cd6d5d6c74c))

### 🚀 Features

- **addon-doc:** add `TUI_DOC_SUPPORT_LANGUAGE` token ([#9201](https://github.com/taiga-family/taiga-ui/issues/9201))
  ([7aef5f8](https://github.com/taiga-family/taiga-ui/commit/7aef5f8a6166b8a5610a696985e7efc0bdfcc936))
- **addon-doc:** allow adding extra tabs with DI ([#9381](https://github.com/taiga-family/taiga-ui/issues/9381))
  ([421a92e](https://github.com/taiga-family/taiga-ui/commit/421a92e274b6d531aa67d8b2a5177fca75423e6e))
- **addon-doc:** improve UX when switch global dark mode on API page
  ([#9053](https://github.com/taiga-family/taiga-ui/issues/9053))
  ([f9579da](https://github.com/taiga-family/taiga-ui/commit/f9579dac98dbed9b86701592b287f57db3ad0bef))
- **addon-doc:** move language switcher to page from header
  ([#9155](https://github.com/taiga-family/taiga-ui/issues/9155))
  ([e1768c4](https://github.com/taiga-family/taiga-ui/commit/e1768c47f8de7d15c2854375ebcfd74940e278a4))
- **addon-table:** `Sortable` make dynamic ([#9384](https://github.com/taiga-family/taiga-ui/issues/9384))
  ([ea62a09](https://github.com/taiga-family/taiga-ui/commit/ea62a09e23c6279046406a820097aa5dad4b90a1))
- **cdk:** add `TuiRepeatTimes` pipe ([#9262](https://github.com/taiga-family/taiga-ui/issues/9262))
  ([712c5b3](https://github.com/taiga-family/taiga-ui/commit/712c5b3e31d65874abeb13e57a2a104ceca00b00))
- **core:** add `color-scheme` by default for `tuiTheme` ([#9315](https://github.com/taiga-family/taiga-ui/issues/9315))
  ([d3ce6b1](https://github.com/taiga-family/taiga-ui/commit/d3ce6b1c0ca3345c1407482a25cc088fded6c4e3))
- **core:** add animation params ([#9312](https://github.com/taiga-family/taiga-ui/issues/9312))
  ([f3f104a](https://github.com/taiga-family/taiga-ui/commit/f3f104a4a570a200cf79df42dc77451558c8de13))
- **core:** support using native scrollbar ([#9276](https://github.com/taiga-family/taiga-ui/issues/9276))
  ([d144675](https://github.com/taiga-family/taiga-ui/commit/d144675c6b7d8f0bf4e19f84ba4961c96f1acf3f))
- **i18n:** add `Lithuanian` ([#9307](https://github.com/taiga-family/taiga-ui/issues/9307))
  ([29fabea](https://github.com/taiga-family/taiga-ui/commit/29fabea9cc325534ebaf729f143d3835c3741c50))
- **kit:** `ActionBar` add `s` size and update according to spec
  ([#9310](https://github.com/taiga-family/taiga-ui/issues/9310))
  ([3cb028b](https://github.com/taiga-family/taiga-ui/commit/3cb028b2a1918af3e1288064522f1e1dcf000f53))
- **kit:** `Breadcrumbs` add `itemsLimit` option ([#9370](https://github.com/taiga-family/taiga-ui/issues/9370))
  ([b20f6bf](https://github.com/taiga-family/taiga-ui/commit/b20f6bf94fd2bae3e5be84aa126becaa73d8fe12))
- **kit:** `ItemsWithMore` add `side` option ([#9363](https://github.com/taiga-family/taiga-ui/issues/9363))
  ([47d7178](https://github.com/taiga-family/taiga-ui/commit/47d717827f05a682f5fa6ecd819be0dc26fc6c71))
- **kit:** add `tuiValidationErrorsProvider` ([#9342](https://github.com/taiga-family/taiga-ui/issues/9342))
  ([b22e9c2](https://github.com/taiga-family/taiga-ui/commit/b22e9c2f0a4f54df75e277e2b7b9584f9a2ee62d))
- **kit:** added search function in international phone component
  ([#8546](https://github.com/taiga-family/taiga-ui/issues/8546))
  ([24572b1](https://github.com/taiga-family/taiga-ui/commit/24572b1cdc7e0bbd48b3bcbf7faf3960e80c4372))
- **legacy:** support fieldset disable ([#9376](https://github.com/taiga-family/taiga-ui/issues/9376))
  ([cb31858](https://github.com/taiga-family/taiga-ui/commit/cb3185874af2a0aeb7bc1db52dcf26d09dec71a4))
- **table-addon:** add requireSort option to table ([#9036](https://github.com/taiga-family/taiga-ui/issues/9036))
  ([38c5b20](https://github.com/taiga-family/taiga-ui/commit/38c5b20c6e511c6be2ac8c89abcb317c1c182531))

## [4.9.0](https://github.com/taiga-family/taiga-ui/compare/v4.8.1...v4.9.0) (2024-09-30)

### 🚀 Features

- **addon-doc:** add `TUI_DOC_SUPPORT_LANGUAGE` token ([#9201](https://github.com/taiga-family/taiga-ui/issues/9201))
  ([7aef5f8](https://github.com/taiga-family/taiga-ui/commit/7aef5f8a6166b8a5610a696985e7efc0bdfcc936))
- **addon-doc:** improve UX when switch global dark mode on API page
  ([#9053](https://github.com/taiga-family/taiga-ui/issues/9053))
  ([f9579da](https://github.com/taiga-family/taiga-ui/commit/f9579dac98dbed9b86701592b287f57db3ad0bef))
- **addon-doc:** move language switcher to page from header
  ([#9155](https://github.com/taiga-family/taiga-ui/issues/9155))
  ([e1768c4](https://github.com/taiga-family/taiga-ui/commit/e1768c47f8de7d15c2854375ebcfd74940e278a4))
- **cdk:** add `TuiRepeatTimes` pipe ([#9262](https://github.com/taiga-family/taiga-ui/issues/9262))
  ([712c5b3](https://github.com/taiga-family/taiga-ui/commit/712c5b3e31d65874abeb13e57a2a104ceca00b00))
- **table-addon:** add requireSort option to table ([#9036](https://github.com/taiga-family/taiga-ui/issues/9036))
  ([38c5b20](https://github.com/taiga-family/taiga-ui/commit/38c5b20c6e511c6be2ac8c89abcb317c1c182531))

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix Safari autofill
  ([#9198](https://github.com/taiga-family/taiga-ui/issues/9198))
  ([1f5dfa5](https://github.com/taiga-family/taiga-ui/commit/1f5dfa57839157c7690e0ce1ad246d732aeaa106))
- **addon-doc:** provide languages icon ([#9236](https://github.com/taiga-family/taiga-ui/issues/9236))
  ([bc5caf7](https://github.com/taiga-family/taiga-ui/commit/bc5caf71856a1b10fbea957af40b1694c3426acd))
- **addon-mobile:** fix minLength and maxLength properties for range in mobile calendar
  ([#9118](https://github.com/taiga-family/taiga-ui/issues/9118))
  ([c84dd39](https://github.com/taiga-family/taiga-ui/commit/c84dd39af211b89fa0c27f5abf1864d5b772175a))
- **cdk:** support any query string inside URL ([#9254](https://github.com/taiga-family/taiga-ui/issues/9254))
  ([af4aa7e](https://github.com/taiga-family/taiga-ui/commit/af4aa7e3bb8a780f18b793ad5c4d8e258aec9129))
- **core:** `Scrollbar` fix scroll leaking to both directions
  ([#9217](https://github.com/taiga-family/taiga-ui/issues/9217))
  ([ff829fc](https://github.com/taiga-family/taiga-ui/commit/ff829fcdf68bf1461be5dbf18f0d0a8625a1a22d))
- **core:** `Textfield` has change detection problems for `[filler]`
  ([#9243](https://github.com/taiga-family/taiga-ui/issues/9243))
  ([a45df07](https://github.com/taiga-family/taiga-ui/commit/a45df07ca6e8fae2bc28b2b0fb101e8cf9bec785))
- **core:** close dropdown when dropdown host is hidden via css
  ([#9189](https://github.com/taiga-family/taiga-ui/issues/9189))
  ([3e991f9](https://github.com/taiga-family/taiga-ui/commit/3e991f91323b43664f5466b60e1a599a8bf6c81b))
- **deps:** update dependency ng-morph to v4.8.4 ([#9264](https://github.com/taiga-family/taiga-ui/issues/9264))
  ([91dab47](https://github.com/taiga-family/taiga-ui/commit/91dab47d788652be07440554105f2d039d3960f2))
- **deps:** update maskito to ^3.0.3 ([#9191](https://github.com/taiga-family/taiga-ui/issues/9191))
  ([61170a6](https://github.com/taiga-family/taiga-ui/commit/61170a6cdfeb71b57ef1da2e12a125d15551f6e4))
- **deps:** update taiga-ui family dependencies ([#9265](https://github.com/taiga-family/taiga-ui/issues/9265))
  ([bcd1ef4](https://github.com/taiga-family/taiga-ui/commit/bcd1ef4c7c319923bd3bee0cf4f8bab32fa0ec34))
- **deps:** update taiga-ui to ^4.6.4 ([#9180](https://github.com/taiga-family/taiga-ui/issues/9180))
  ([ffbee63](https://github.com/taiga-family/taiga-ui/commit/ffbee63587b516dbd60b27c796e037ebb0368246))
- **kit:** `Chip` size
  ([904725c](https://github.com/taiga-family/taiga-ui/commit/904725c7e43e182fe12a4ed1e9ba9101b39d958d))
- **kit:** `Chip` size ([#9169](https://github.com/taiga-family/taiga-ui/issues/9169))
  ([a92153a](https://github.com/taiga-family/taiga-ui/commit/a92153ae08ae17dcf93edfd06d23ba021bdc47ee))
- **kit:** `Radio`, `Checkbox`, `Switch` remove non-functioning `appearance` input
  ([#9221](https://github.com/taiga-family/taiga-ui/issues/9221))
  ([6dc4ce0](https://github.com/taiga-family/taiga-ui/commit/6dc4ce05f5b100ac5045de74097109ebcd6a7e47))
- **kit:** `TuiImgLazyLoading` compat with SSR ([#9184](https://github.com/taiga-family/taiga-ui/issues/9184))
  ([710166f](https://github.com/taiga-family/taiga-ui/commit/710166f199334b3f851e503ff765c48b29e67a5a))
- **legacy:** `Input` fix [(tuiDropdownOpen)] ([#9214](https://github.com/taiga-family/taiga-ui/issues/9214))
  ([65981bc](https://github.com/taiga-family/taiga-ui/commit/65981bcaefcce811891887a697c496d53108fce2))

### [4.8.1](https://github.com/taiga-family/taiga-ui/compare/v4.8.0...v4.8.1) (2024-09-24)

### 🐞 Bug Fixes

- **addon-charts:** `LineChart` fix line thickness on 0 and max
  ([#9167](https://github.com/taiga-family/taiga-ui/issues/9167))
  ([c51f8ec](https://github.com/taiga-family/taiga-ui/commit/c51f8ecd8cfa4f0e9acef426aa7d17a4940f361c))
- **core:** `DropdownContext` fix for Shadow DOM ([#9171](https://github.com/taiga-family/taiga-ui/issues/9171))
  ([e76e27e](https://github.com/taiga-family/taiga-ui/commit/e76e27ebe0cde3f4993e381eb4600e4821702181))
- **kit:** export password options ([#9159](https://github.com/taiga-family/taiga-ui/issues/9159))
  ([688405e](https://github.com/taiga-family/taiga-ui/commit/688405eb375c095c699fc9b8dd82982879fe2e57))
- **legacy:** `MultiSelect` fix for long items overflowing
  ([#9160](https://github.com/taiga-family/taiga-ui/issues/9160))
  ([80fdfd0](https://github.com/taiga-family/taiga-ui/commit/80fdfd0a1bd28f34d86b837c1f33c67ec9d7d139))

## [4.8.0](https://github.com/taiga-family/taiga-ui/compare/v4.7.0...v4.8.0) (2024-09-24)

### 🚀 Features

- **addon-doc:** add ability to disable default search-bar
  ([#9099](https://github.com/taiga-family/taiga-ui/issues/9099))
  ([90cc083](https://github.com/taiga-family/taiga-ui/commit/90cc083677a3f117f41cbce3d91c16da4977ad9d))
- **addon-doc:** add aria-label for dark mode button ([#9108](https://github.com/taiga-family/taiga-ui/issues/9108))
  ([58bfb70](https://github.com/taiga-family/taiga-ui/commit/58bfb706e04f42a91c37819b431e1e386a598b49))
- **addon-doc:** full prerender page for ssr and improve ux
  ([#9073](https://github.com/taiga-family/taiga-ui/issues/9073))
  ([d2fa1ac](https://github.com/taiga-family/taiga-ui/commit/d2fa1ac5d505e8beb0417b039a8ae2a53905d855))
- **addon-doc:** heading elements are not in a sequentially-descending order
  ([#9110](https://github.com/taiga-family/taiga-ui/issues/9110))
  ([46a1a17](https://github.com/taiga-family/taiga-ui/commit/46a1a179da2474606e493177a58ec77dc2953d36))
- **cdk:** add `TuiLooseUnion` ([#9068](https://github.com/taiga-family/taiga-ui/issues/9068))
  ([e7642cb](https://github.com/taiga-family/taiga-ui/commit/e7642cb4e99eaa5601078a1a42a0f98c424ceede))
- **cdk:** support provide custom query selector for auto focus directive
  ([#9062](https://github.com/taiga-family/taiga-ui/issues/9062))
  ([ae149f5](https://github.com/taiga-family/taiga-ui/commit/ae149f50c9e1777a6028de1859a5470d6fca9fd0))
- **kit:** `Like` add new component ([#8989](https://github.com/taiga-family/taiga-ui/issues/8989))
  ([0814ae8](https://github.com/taiga-family/taiga-ui/commit/0814ae876168a2dfa05fd52dfb9d1d7fd141a6b1))
- **kit:** add an options token for customizing TuiHighlight
  ([#8812](https://github.com/taiga-family/taiga-ui/issues/8812))
  ([21a80c7](https://github.com/taiga-family/taiga-ui/commit/21a80c73ad750c6c82196405a047c2888833c4ce))
- **kit:** improve IDEA auto import for `TuiImageLoading`
  ([#9090](https://github.com/taiga-family/taiga-ui/issues/9090))
  ([f45c899](https://github.com/taiga-family/taiga-ui/commit/f45c899b5f2d1f8b36b76b1aba1796e2bbbffb85))
- **layout:** `AppBar` add auto size directive ([#9119](https://github.com/taiga-family/taiga-ui/issues/9119))
  ([d5628e7](https://github.com/taiga-family/taiga-ui/commit/d5628e71ecfa1f89c6c654f8a713da93ef169589))

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix for older Safari
  ([#9117](https://github.com/taiga-family/taiga-ui/issues/9117))
  ([29044f9](https://github.com/taiga-family/taiga-ui/commit/29044f92cfc80d3eda1a3520c06cc9a478131b77))
- **addon-mobile:** correct height for `tui-app-bar` on ios/android
  ([#9031](https://github.com/taiga-family/taiga-ui/issues/9031))
  ([a669fd6](https://github.com/taiga-family/taiga-ui/commit/a669fd6a7db19b764af0a2aaa729f71bbfb52ab1))
- **cdk:** remove global styles patching from auto-focus directive
  ([#8974](https://github.com/taiga-family/taiga-ui/issues/8974))
  ([fa81919](https://github.com/taiga-family/taiga-ui/commit/fa81919382566a63c572a23ee32e87882d86c85d))
- **cdk:** unsubscribe from pan service when directive is destroyed
  ([#9021](https://github.com/taiga-family/taiga-ui/issues/9021))
  ([5ce088a](https://github.com/taiga-family/taiga-ui/commit/5ce088ab2becd92062f3f4ef94a0bf0a8373c975))
- **cdk:** unsubscribe from swipe service when directive is destroyed
  ([#9022](https://github.com/taiga-family/taiga-ui/issues/9022))
  ([ce15783](https://github.com/taiga-family/taiga-ui/commit/ce15783eb48e5e612df21231ca68c5fff9f06b90))
- **cdk:** unsubscribe from zoom service when directive is destroyed
  ([#9069](https://github.com/taiga-family/taiga-ui/issues/9069))
  ([36ee705](https://github.com/taiga-family/taiga-ui/commit/36ee7052e9ce5530b66154bbb4ff6e394a2eaa83))
- **core:** `Appearance` remove initial transition ([#9059](https://github.com/taiga-family/taiga-ui/issues/9059))
  ([88a8f5b](https://github.com/taiga-family/taiga-ui/commit/88a8f5bd53acdeb8ab6a554c60d44f16ff2b4ed8))
- **core:** `Loader` fix leaving `ActiveZone` ([#9115](https://github.com/taiga-family/taiga-ui/issues/9115))
  ([d4099d2](https://github.com/taiga-family/taiga-ui/commit/d4099d24c2d36548114a3c6e581a12b1832dd3e8))
- **core:** do not override nested tui-icon styles ([#9065](https://github.com/taiga-family/taiga-ui/issues/9065))
  ([4e07f24](https://github.com/taiga-family/taiga-ui/commit/4e07f24bed4c1ed2a4c1d2b3409e69b4fdd6144d))
- **demo:** `Lists` changes the `ts` representation to `html`
  ([#9078](https://github.com/taiga-family/taiga-ui/issues/9078))
  ([4bca8b7](https://github.com/taiga-family/taiga-ui/commit/4bca8b7b1b4d71ef8797e9756358e64b3fdc4e0a))
- **deps:** update dependency date-fns to v4 ([#9038](https://github.com/taiga-family/taiga-ui/issues/9038))
  ([bee65c9](https://github.com/taiga-family/taiga-ui/commit/bee65c930fb845c3983ef44c9f3b5d9d7d867086))
- **deps:** update dependency ng-morph to v4.8.2 ([#9137](https://github.com/taiga-family/taiga-ui/issues/9137))
  ([9a802a0](https://github.com/taiga-family/taiga-ui/commit/9a802a0b748c19bb02820a6ad9a0aa39bc2d8d2f))
- **deps:** update maskito to ^3.0.2 ([#9139](https://github.com/taiga-family/taiga-ui/issues/9139))
  ([00a78be](https://github.com/taiga-family/taiga-ui/commit/00a78bef3069128b078cad83c099d4b31e83afd8))
- **deps:** update taiga-ui ([#9142](https://github.com/taiga-family/taiga-ui/issues/9142))
  ([dc80717](https://github.com/taiga-family/taiga-ui/commit/dc807171e09e513e9defe287a6e3c9d1feddaf0d))
- **kit:** `CalendarRange` shows last available month when max and items set
  ([#9147](https://github.com/taiga-family/taiga-ui/issues/9147))
  ([14d644f](https://github.com/taiga-family/taiga-ui/commit/14d644f191ed9257a9b79d36ea865b271c792621))
- **kit:** `InputDateRange` fix dark mode issues and list item size
  ([#9098](https://github.com/taiga-family/taiga-ui/issues/9098))
  ([6820698](https://github.com/taiga-family/taiga-ui/commit/68206987de81810e8b4fa8239bc80e2f84b18ffe))
- **kit:** do not override white-space for children of line-clamp
  ([#9025](https://github.com/taiga-family/taiga-ui/issues/9025))
  ([f77a783](https://github.com/taiga-family/taiga-ui/commit/f77a78356e31867f2a7c0169a0971e695dd8ab58))
- **kit:** drop image skeleton when handle of lazy loading error
  ([#9032](https://github.com/taiga-family/taiga-ui/issues/9032))
  ([2af496b](https://github.com/taiga-family/taiga-ui/commit/2af496bda0b7a67bb3b14e382edbaba0785e0536))
- **kit:** memory leak in line-clamp ([#9014](https://github.com/taiga-family/taiga-ui/issues/9014))
  ([93fb577](https://github.com/taiga-family/taiga-ui/commit/93fb577eebdc3c6b9e4f6fe08a022a66c6ddc031))
- **layout:** `AppBar` use proper appearance for back button
  ([#9061](https://github.com/taiga-family/taiga-ui/issues/9061))
  ([6019863](https://github.com/taiga-family/taiga-ui/commit/601986355e64b21a232fe42a034be7810492b031))
- **layout:** `CardLarge` fix style leaking into `Badge` ([#9097](https://github.com/taiga-family/taiga-ui/issues/9097))
  ([83300f1](https://github.com/taiga-family/taiga-ui/commit/83300f1c9552310b8a3ddc142a09d16829d8eaa1))
- **layout:** `CardLarge` with headless `Cell` list ([#9114](https://github.com/taiga-family/taiga-ui/issues/9114))
  ([941c856](https://github.com/taiga-family/taiga-ui/commit/941c85601f59f838bdcf97876165afce37be2e8d))
- **legacy:** `MultiSelect` empty line when non empty `placeholder` and `valueContent`
  ([#9123](https://github.com/taiga-family/taiga-ui/issues/9123))
  ([eda9293](https://github.com/taiga-family/taiga-ui/commit/eda9293cfd488b72e822b25799d1ce56d5454164))
- **legacy:** during serialization angular was unable to find an element in the DOM
  ([#9063](https://github.com/taiga-family/taiga-ui/issues/9063))
  ([7817c18](https://github.com/taiga-family/taiga-ui/commit/7817c18bf02dfd976d492ca94f29ace2ccdd521c))
- **legacy:** fix scroll jumping on readonly input focusing in safari
  ([#9088](https://github.com/taiga-family/taiga-ui/issues/9088))
  ([dbf2510](https://github.com/taiga-family/taiga-ui/commit/dbf251012f0e4f992efe02c60c10d7f2578c6f1b))
- **table:** table filters pipe types ([#9076](https://github.com/taiga-family/taiga-ui/issues/9076))
  ([0635555](https://github.com/taiga-family/taiga-ui/commit/06355550805d97d53f1d48247f9967ad2a5f934a))

## [4.7.0](https://github.com/taiga-family/taiga-ui/compare/v4.6.0...v4.7.0) (2024-09-16)

### 🚀 Features

- **addon-doc:** `API` add new component ([#9015](https://github.com/taiga-family/taiga-ui/issues/9015))
  ([a87b608](https://github.com/taiga-family/taiga-ui/commit/a87b60879bf6318a04b1b83c5d2a7e04227288f1))
- **addon-doc:** adds keybindings to the search field ([#8830](https://github.com/taiga-family/taiga-ui/issues/8830))
  ([8d03673](https://github.com/taiga-family/taiga-ui/commit/8d03673bc6597dfaceb54ec1512acf96cb8eb23b))
- **core:** `Appearance` allow multiple modes ([#9042](https://github.com/taiga-family/taiga-ui/issues/9042))
  ([e1853dd](https://github.com/taiga-family/taiga-ui/commit/e1853dd2842352cbe67f7c82447250b206c49db3))

### 🐞 Bug Fixes

- **addon-doc:** `TuiDocScrollIntoViewLink` should be export from root
  ([#9039](https://github.com/taiga-family/taiga-ui/issues/9039))
  ([ad1979a](https://github.com/taiga-family/taiga-ui/commit/ad1979a31bfaa48fbb94131377f01b513fab17a7))
- **addon-mobile:** export styles ([#9007](https://github.com/taiga-family/taiga-ui/issues/9007))
  ([d9915bb](https://github.com/taiga-family/taiga-ui/commit/d9915bbe38d6aea9b998ff73a753ad2004363172))
- **core:** `Calendar` fix visual gaps in range ([#8961](https://github.com/taiga-family/taiga-ui/issues/8961))
  ([8ec81aa](https://github.com/taiga-family/taiga-ui/commit/8ec81aa86356af764ac881177c207abd4b71b925))
- **core:** `Dropdown` fix options leaking upwards ([#9051](https://github.com/taiga-family/taiga-ui/issues/9051))
  ([350ba52](https://github.com/taiga-family/taiga-ui/commit/350ba524cc5a15b970fcd1157f3553899050e7a2))
- **core:** rely only on `[tuiOption]` html attribute for search options
  ([#8965](https://github.com/taiga-family/taiga-ui/issues/8965))
  ([df8228c](https://github.com/taiga-family/taiga-ui/commit/df8228ca3f2bf83a6b3ee3923da45f750d7ec3d4))
- **deps:** update dependency ng-morph to v4.7.0 ([#9008](https://github.com/taiga-family/taiga-ui/issues/9008))
  ([e6d273d](https://github.com/taiga-family/taiga-ui/commit/e6d273d7b2a30df9cd5684caf3c51f152c16a5a6))
- **deps:** update dependency ng-morph to v4.8.0 ([#9011](https://github.com/taiga-family/taiga-ui/issues/9011))
  ([99fabf5](https://github.com/taiga-family/taiga-ui/commit/99fabf5fbd1d3d046007215dd36c07e9f02ab21d))
- **deps:** update dependency ng-morph to v4.8.1 ([#9013](https://github.com/taiga-family/taiga-ui/issues/9013))
  ([1f814e0](https://github.com/taiga-family/taiga-ui/commit/1f814e09657cd272adafcd8d49aa72b664e17ec8))
- **deps:** update ng-web-apis to ^4.5.0 ([#9006](https://github.com/taiga-family/taiga-ui/issues/9006))
  ([1377647](https://github.com/taiga-family/taiga-ui/commit/1377647103c72c164d229e72672ce9cc391c9a19))
- **deps:** update ng-web-apis to ^4.6.0 ([#9046](https://github.com/taiga-family/taiga-ui/issues/9046))
  ([40943ea](https://github.com/taiga-family/taiga-ui/commit/40943ea7901794dc2f3049eccc3b08e52d564db2))
- **kit:** `Connected` work with `CardLarge` ([#9040](https://github.com/taiga-family/taiga-ui/issues/9040))
  ([71f699c](https://github.com/taiga-family/taiga-ui/commit/71f699cec9cda4ba0e4890f10620112e5a009320))
- **kit:** add overload for `TuiFilterByInputPipe` ([#8912](https://github.com/taiga-family/taiga-ui/issues/8912))
  ([6883ea6](https://github.com/taiga-family/taiga-ui/commit/6883ea63666157e4e1ca91850459419405398c60))
- **kit:** block user selection in skeleton ([#9001](https://github.com/taiga-family/taiga-ui/issues/9001))
  ([49b0e03](https://github.com/taiga-family/taiga-ui/commit/49b0e0375155b5cca4e29be78a8ff05f9b35f2ab))

## [4.6.0](https://github.com/taiga-family/taiga-ui/compare/v4.5.0...v4.6.0) (2024-09-10)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix autofill styles
  ([#8794](https://github.com/taiga-family/taiga-ui/issues/8794))
  ([de3a923](https://github.com/taiga-family/taiga-ui/commit/de3a9230508fccf9224023287ec35d3de07aabd8))
- **addon-mobile:** `Card` fix paddings on mobile devices
  ([#8949](https://github.com/taiga-family/taiga-ui/issues/8949))
  ([12ebe35](https://github.com/taiga-family/taiga-ui/commit/12ebe35a0e21805fa3e3d8e57251f9c8559b8285))
- **addon-table:** TuiTableDirective Content Security Policy error v4
  ([#8872](https://github.com/taiga-family/taiga-ui/issues/8872))
  ([a7ae8f3](https://github.com/taiga-family/taiga-ui/commit/a7ae8f329e3439b9b0b98c8b06cc0fb489c64446))
- **cdk:** `NativeValidator` fix touched state ([#8818](https://github.com/taiga-family/taiga-ui/issues/8818))
  ([2a5e754](https://github.com/taiga-family/taiga-ui/commit/2a5e754856545b3f59b4aacfb9bce76ae09d7b79))
- **core:** `Textfield` fix expression change error ([#8809](https://github.com/taiga-family/taiga-ui/issues/8809))
  ([7206c29](https://github.com/taiga-family/taiga-ui/commit/7206c2920e145cf6fead63c420c1709dcd1c968d))
- **core:** show empty content in correct detect changes cycle
  ([#8837](https://github.com/taiga-family/taiga-ui/issues/8837))
  ([f102ad3](https://github.com/taiga-family/taiga-ui/commit/f102ad3ab38547868821bd33ce5da7cbd7740cec))
- **kit:** `BadgedContent` icon is positioned incorrectly when it's shown with a delay
  ([#8932](https://github.com/taiga-family/taiga-ui/issues/8932))
  ([96c476b](https://github.com/taiga-family/taiga-ui/commit/96c476b9bcd21075083c3d48d0694ca0fae8f5e0))
- **kit:** `CalendarRange` revert computedMonth changes ([#8909](https://github.com/taiga-family/taiga-ui/issues/8909))
  ([848d12c](https://github.com/taiga-family/taiga-ui/commit/848d12cfcc8e0d391bdb5b5c3ff5338e6dbf328e))
- **kit:** `InputFiles` fix validity and drag states ([#8845](https://github.com/taiga-family/taiga-ui/issues/8845))
  ([a7f1332](https://github.com/taiga-family/taiga-ui/commit/a7f13325bbf247128758731de8778df6532836ac))
- **kit:** `InputTime` fix selection of the nearest value from items
  ([#8902](https://github.com/taiga-family/taiga-ui/issues/8902))
  ([0b3894c](https://github.com/taiga-family/taiga-ui/commit/0b3894c85730037c9ada32083fc038f0734e23aa))
- **kit:** BadgedContent: icon is positioned incorrectly when it's shown with a delay
  ([4a26b1a](https://github.com/taiga-family/taiga-ui/commit/4a26b1a56f8e048eb5e5af0583584da491e1e630))
- **kit:** CalendarRange click again on selected item not switch to item date
  ([#8843](https://github.com/taiga-family/taiga-ui/issues/8843))
  ([4853671](https://github.com/taiga-family/taiga-ui/commit/4853671fb67d7e57002c4ddefc6ffb3cefaf90d0))
- **kit:** fix styles for input-inline when spellcheck marks word incorrect
  ([#8836](https://github.com/taiga-family/taiga-ui/issues/8836))
  ([7938dd5](https://github.com/taiga-family/taiga-ui/commit/7938dd5d51773781b04764b07eb7d820c07c2c65))
- **layout:** `Card` fix `Label` title font weight when `Label` is placed inside a card
  ([#8931](https://github.com/taiga-family/taiga-ui/issues/8931))
  ([b7e871c](https://github.com/taiga-family/taiga-ui/commit/b7e871c46a2c99fbeeb55278ba505c76a73c721c))

### 🚀 Features

- **addon-mobile:** `InputSearch` add iOS imitating input
  ([#8838](https://github.com/taiga-family/taiga-ui/issues/8838))
  ([7437250](https://github.com/taiga-family/taiga-ui/commit/743725047d9221782f49264ddf18f371b94620f4))
- **core:** `Dialog` add fade transition for multiple dialogs
  ([#8950](https://github.com/taiga-family/taiga-ui/issues/8950))
  ([5843da5](https://github.com/taiga-family/taiga-ui/commit/5843da5e2740a545298f3aa0385a840a7888265e))
- **kit:** `Copy` and `Password` add interactive icons to `Textfield`
  ([#8833](https://github.com/taiga-family/taiga-ui/issues/8833))
  ([c8bdaf0](https://github.com/taiga-family/taiga-ui/commit/c8bdaf03ce8d1df76870d13a342681299312225c))
- **kit:** `Segmented` update to the spec v1.1.0 ([#8825](https://github.com/taiga-family/taiga-ui/issues/8825))
  ([44d7d5b](https://github.com/taiga-family/taiga-ui/commit/44d7d5b5e3622d183a7d05666e42954caba0751e))
- **layout:** `Cell` add border-radius ([#8801](https://github.com/taiga-family/taiga-ui/issues/8801))
  ([1b05ba4](https://github.com/taiga-family/taiga-ui/commit/1b05ba45a0756e6d81fa5a9d1feb521ab427ff87))
- **testing:** adds link harness ([#8771](https://github.com/taiga-family/taiga-ui/issues/8771))
  ([e38cdb5](https://github.com/taiga-family/taiga-ui/commit/e38cdb55e5134b68529af56e7de2bb4fd8a7b567))

## [4.5.0](https://github.com/taiga-family/taiga-ui/compare/v4.4.1...v4.5.0) (2024-09-02)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCard` fix autofill ([#8728](https://github.com/taiga-family/taiga-ui/issues/8728))
  ([226a763](https://github.com/taiga-family/taiga-ui/commit/226a763ea0b6d0636de1b5b78f98f2209cfa81f0))
- **addon-doc:** code glitch in ssr ([#8705](https://github.com/taiga-family/taiga-ui/issues/8705))
  ([59712a2](https://github.com/taiga-family/taiga-ui/commit/59712a2988a2c7db699d86c901e6b9f3ac48b6a9))
- **core:** `Dropdown` triggers change detection too frequently
  ([#8738](https://github.com/taiga-family/taiga-ui/issues/8738))
  ([8bdcb19](https://github.com/taiga-family/taiga-ui/commit/8bdcb190e1e445b4e6de06caa7c368341a2cf66d))
- **core:** `Icons` fix mask shorthand ([#8711](https://github.com/taiga-family/taiga-ui/issues/8711))
  ([a292756](https://github.com/taiga-family/taiga-ui/commit/a29275647565b0b2c37ac281f7c58f996d85c5ba))
- **core:** `Textfield` should not change color of chevron on hover if `readOnly` is enabled
  ([#8754](https://github.com/taiga-family/taiga-ui/issues/8754))
  ([2e21615](https://github.com/taiga-family/taiga-ui/commit/2e21615e732112ea28fe2ab5f3c25d5c753c51bb))
- **kit:** `CalendarRange` shows end of range ([#8774](https://github.com/taiga-family/taiga-ui/issues/8774))
  ([6604fd6](https://github.com/taiga-family/taiga-ui/commit/6604fd68f5688450aa40778b0326434535fe3bf7))
- **kit:** `InputPhoneInternational` should not allow to open dropdown if `readOnly=true`
  ([#8764](https://github.com/taiga-family/taiga-ui/issues/8764))
  ([fcca2fa](https://github.com/taiga-family/taiga-ui/commit/fcca2fa6815dfcde4a5f6f9eac66958fb3cc9af9))
- **kit:** CalendarRange not switch to selected item ([#8784](https://github.com/taiga-family/taiga-ui/issues/8784))
  ([ad138ab](https://github.com/taiga-family/taiga-ui/commit/ad138abed3656a19e5ecb05576f76e3306855eff))
- **kit:** contain width for img in avatar ([#8723](https://github.com/taiga-family/taiga-ui/issues/8723))
  ([c9014a2](https://github.com/taiga-family/taiga-ui/commit/c9014a23e0ff2076b5dcbbfa2340428a89292e2f))
- **layout:** `Navigation` fix style specificity for `AsideItem`
  ([#8790](https://github.com/taiga-family/taiga-ui/issues/8790))
  ([77a1eea](https://github.com/taiga-family/taiga-ui/commit/77a1eea69fdc3d956215d28a721ea72e2d26d596))
- **legacy:** `InputDateRange` triggers cyclic change detection ticks
  ([#8706](https://github.com/taiga-family/taiga-ui/issues/8706))
  ([c7bc044](https://github.com/taiga-family/taiga-ui/commit/c7bc04403b7b379e184bad2fa978b62bcc9a500c))
- **legacy:** restore `autoColor` for `InputTag` and `MultiSelect`
  ([#8783](https://github.com/taiga-family/taiga-ui/issues/8783))
  ([e5477c4](https://github.com/taiga-family/taiga-ui/commit/e5477c401e5b3cb046c24fa2b64993917376c20f))
- **legacy:** trigger transform placeholder when using autofill
  ([#8779](https://github.com/taiga-family/taiga-ui/issues/8779))
  ([464dee4](https://github.com/taiga-family/taiga-ui/commit/464dee4c6bdb5dc47f8a9b657d188788fd5e6531))

### 🚀 Features

- **addon-commerce:** `ThumbnailCard` add `<img>` support
  ([#8789](https://github.com/taiga-family/taiga-ui/issues/8789))
  ([9fdb499](https://github.com/taiga-family/taiga-ui/commit/9fdb499790e3a7bf16a94162d6e01d26c19e252e))
- **addon-doc:** improve ui for link to sample ([#8406](https://github.com/taiga-family/taiga-ui/issues/8406))
  ([e5beb47](https://github.com/taiga-family/taiga-ui/commit/e5beb47843a578b8232431d9246daafdb0591165))
- **cdk:** add `tuiInjectId` ([#8730](https://github.com/taiga-family/taiga-ui/issues/8730))
  ([6b3bbb0](https://github.com/taiga-family/taiga-ui/commit/6b3bbb09d6c9917776ceb5c83ffaedbbe2c82dc9))
- **core:** `Textfield` add `ViewContainerRef` ([#8781](https://github.com/taiga-family/taiga-ui/issues/8781))
  ([5fee17a](https://github.com/taiga-family/taiga-ui/commit/5fee17a23c7ed83d3e8ea6befc49e804b3fa16ad))
- improve style for A11y ([#8408](https://github.com/taiga-family/taiga-ui/issues/8408))
  ([918e11f](https://github.com/taiga-family/taiga-ui/commit/918e11f0115a8fea8f6c9662a69ba40e2b60eb35))
- **kit:** `InputPassword` add new version, deprecate legacy
  ([#8786](https://github.com/taiga-family/taiga-ui/issues/8786))
  ([7a655de](https://github.com/taiga-family/taiga-ui/commit/7a655defe64cd89fc39b2da9092fe63b08b7d048))
- **kit:** `InputPhoneInternational` can be customized with `Icon` / `Tooltip`
  ([#8750](https://github.com/taiga-family/taiga-ui/issues/8750))
  ([b20459b](https://github.com/taiga-family/taiga-ui/commit/b20459b326a917c64ad10da54d68905af5720042))
- **layout:** `Navigation` add `Drawer` ([#8757](https://github.com/taiga-family/taiga-ui/issues/8757))
  ([cc64434](https://github.com/taiga-family/taiga-ui/commit/cc6443477b3c1941185c9e6556dfed38301d6731))
- **testing:** adds size harness for button ([#8760](https://github.com/taiga-family/taiga-ui/issues/8760))
  ([71e654f](https://github.com/taiga-family/taiga-ui/commit/71e654f75f447f494ce67503d8b45307dda249cf))

### [4.4.1](https://github.com/taiga-family/taiga-ui/compare/v4.4.0...v4.4.1) (2024-08-27)

### 🐞 Bug Fixes

- **cdk:** `schematics` fix bad import ([#8696](https://github.com/taiga-family/taiga-ui/issues/8696))
  ([c46899e](https://github.com/taiga-family/taiga-ui/commit/c46899e812f3354937fc5c8495a324f8fbafefca))

## [4.4.0](https://github.com/taiga-family/taiga-ui/compare/v4.3.0...v4.4.0) (2024-08-26)

### 🐞 Bug Fixes

- **addon-mobile:** `PullToRefresh` fix scroll ref ([#8684](https://github.com/taiga-family/taiga-ui/issues/8684))
  ([c9eef96](https://github.com/taiga-family/taiga-ui/commit/c9eef96273244c069c12bc512c888aadcc152a45))
- **cdk:** `ActiveZone` do not exit zone when scrollable container becomes non-scrollable
  ([#8631](https://github.com/taiga-family/taiga-ui/issues/8631))
  ([#8653](https://github.com/taiga-family/taiga-ui/issues/8653))
  ([b796d0d](https://github.com/taiga-family/taiga-ui/commit/b796d0d761e7fac064479da128a221a4b896885e))
- **kit:** `ButtonClose` fix icon ([#8659](https://github.com/taiga-family/taiga-ui/issues/8659))
  ([7287016](https://github.com/taiga-family/taiga-ui/commit/728701659554f263e5f5baafc1f2bb012da7494a))
- **kit:** `CalendarRange` delete code for `availableRange` property
  ([#8688](https://github.com/taiga-family/taiga-ui/issues/8688))
  ([18d9b07](https://github.com/taiga-family/taiga-ui/commit/18d9b0790be9fb66f0d6a8c81846a3b0f65bb7c0))
- **kit:** `Tiles` fix reorder issue ([#8663](https://github.com/taiga-family/taiga-ui/issues/8663))
  ([9ea0162](https://github.com/taiga-family/taiga-ui/commit/9ea0162c3a7371c50d390e9718b2a175ad30c001))
- **legacy:** `Textarea` use balance text-wrap in safari ([#8666](https://github.com/taiga-family/taiga-ui/issues/8666))
  ([cbaac1b](https://github.com/taiga-family/taiga-ui/commit/cbaac1b1c87b884cb692f979b44094ebb583ef1a))
- **legacy:** invalid css variable ([#8619](https://github.com/taiga-family/taiga-ui/issues/8619))
  ([4fa7631](https://github.com/taiga-family/taiga-ui/commit/4fa7631a81842abe7c47e3b8212a16121399d4c4))

### 🚀 Features

- **core:** `TUI_DARK_MODE` add new token ([#8657](https://github.com/taiga-family/taiga-ui/issues/8657))
  ([f409942](https://github.com/taiga-family/taiga-ui/commit/f409942f3cb21fa8dc66fe59e4dcbe316fc045c9))
- **icons:** drop useless comments inside svg file ([#8660](https://github.com/taiga-family/taiga-ui/issues/8660))
  ([327f470](https://github.com/taiga-family/taiga-ui/commit/327f4700ee0628a6cadb2e1deba35287ca8e83fe))
- **kit:** `CalendarRange` add `item` property for correctly switch value outside
  ([#8617](https://github.com/taiga-family/taiga-ui/issues/8617))
  ([39e3419](https://github.com/taiga-family/taiga-ui/commit/39e3419b1f03176770f49ebd03118a2c067546a1))
- **kit:** `IconBadge` add new directive ([#8667](https://github.com/taiga-family/taiga-ui/issues/8667))
  ([1d2c286](https://github.com/taiga-family/taiga-ui/commit/1d2c28614407307801fdb1e0c63b4896b86471d1))
- **layout:** `Search` add new component ([#8648](https://github.com/taiga-family/taiga-ui/issues/8648))
  ([8cb50c0](https://github.com/taiga-family/taiga-ui/commit/8cb50c024bbfeda2b691c170cecef80c9cc46e7d))

## [4.3.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.3.0) (2024-08-21)

### 🚀 Features

- **addon-mobile:** possibility drop mobile calendar header
  ([#8265](https://github.com/taiga-family/taiga-ui/issues/8265))
  ([819b17b](https://github.com/taiga-family/taiga-ui/commit/819b17ba2bf87d6ff92be9bf2d3508ae9a25ae01))
- **kit:** `ButtonSelect` add new directive ([#8559](https://github.com/taiga-family/taiga-ui/issues/8559))
  ([6cba52c](https://github.com/taiga-family/taiga-ui/commit/6cba52c140bc182cb8014809116356fb49c3c6e2))

### 🐞 Bug Fixes

- **addon-doc:** strange behavior on safari ([#8588](https://github.com/taiga-family/taiga-ui/issues/8588))
  ([9e6e865](https://github.com/taiga-family/taiga-ui/commit/9e6e865ec5c4a287dab14a46751fd53ff181a138))
- **addon-mobile:** PullToRefresh do not trigger pulled if dialog is inside
  ([#8597](https://github.com/taiga-family/taiga-ui/issues/8597))
  ([7474d6e](https://github.com/taiga-family/taiga-ui/commit/7474d6ea455fecf07a785a86cab2d61bd45f0d34))
- **core:** do not call resolver multiple time ([#8578](https://github.com/taiga-family/taiga-ui/issues/8578))
  ([6e5c9f4](https://github.com/taiga-family/taiga-ui/commit/6e5c9f4487d4f5a2633c13812c4ad4e2b221b5b3))
- **core:** user selection on safari ([#8587](https://github.com/taiga-family/taiga-ui/issues/8587))
  ([02e1c73](https://github.com/taiga-family/taiga-ui/commit/02e1c738f626f36425de0efdf424a006911d3b10))
- **kit:** `InputPhoneInternational` fix size for `border-box`
  ([#8633](https://github.com/taiga-family/taiga-ui/issues/8633))
  ([1dec452](https://github.com/taiga-family/taiga-ui/commit/1dec4524c8db8a0290eb82f10c302cb79c5d86ec))
- **kit:** `Segmented` fix native reset form action ([#8605](https://github.com/taiga-family/taiga-ui/issues/8605))
  ([ec87062](https://github.com/taiga-family/taiga-ui/commit/ec87062e2414d03bc212fd76d268b7890a40c1f8))
- **kit:** improve tree-shakeability of `InputPhoneInternational`
  ([#8603](https://github.com/taiga-family/taiga-ui/issues/8603))
  ([abfba9e](https://github.com/taiga-family/taiga-ui/commit/abfba9e8ba64988b4676387b7bbed3e5b0da7f5b))
- **kit:** segmented subscription to control value changes
  ([#8574](https://github.com/taiga-family/taiga-ui/issues/8574))
  ([e6cf175](https://github.com/taiga-family/taiga-ui/commit/e6cf1759eb427c7f8b2ee1496f8fdfc3effe9ee4))
- **legacy:** display view/hide password button with `readOnly` property
  ([#8584](https://github.com/taiga-family/taiga-ui/issues/8584))
  ([15857bc](https://github.com/taiga-family/taiga-ui/commit/15857bc81f7088956127cd331afe2b65dc495d94))
- **legacy:** prevent add/remove suffixes while InputNumber is readonly
  ([#8568](https://github.com/taiga-family/taiga-ui/issues/8568))
  ([7a58d78](https://github.com/taiga-family/taiga-ui/commit/7a58d7824a4fc72563558b3407889602b6714f89))
- **legacy:** set correct font size for small and medium sizes
  ([#8548](https://github.com/taiga-family/taiga-ui/issues/8548))
  ([8acfb39](https://github.com/taiga-family/taiga-ui/commit/8acfb394e899ffd69b4e666bca6742e44149830f))

## [4.2.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.2.0) (2024-08-14)

### 🚀 Features

- add `@taiga-ui/icons-fontawesome` ([#8493](https://github.com/taiga-family/taiga-ui/issues/8493))
  ([131b3ed](https://github.com/taiga-family/taiga-ui/commit/131b3ed6a007c3229fe65f13fd9bfe014d68e7c2))
- add `@taiga-ui/icons-material` ([#8454](https://github.com/taiga-family/taiga-ui/issues/8454))
  ([3315a29](https://github.com/taiga-family/taiga-ui/commit/3315a29f5e6539956d3dc7d6b4a01b1a0c3d45e4))
- **i18n:** add japanese ([#8420](https://github.com/taiga-family/taiga-ui/issues/8420))
  ([ef9f992](https://github.com/taiga-family/taiga-ui/commit/ef9f9929ccaa778811a2eda86803c35f726a1de2))
- **i18n:** add korean ([#8486](https://github.com/taiga-family/taiga-ui/issues/8486))
  ([691328f](https://github.com/taiga-family/taiga-ui/commit/691328f889c95346f18ced853fe2b91bd08e300f))
- **i18n:** improve literal string union ([#8516](https://github.com/taiga-family/taiga-ui/issues/8516))
  ([9bf0f8c](https://github.com/taiga-family/taiga-ui/commit/9bf0f8c39727cfccd481636433e44963b8b88331))
- **kit:** prevent disabled date selection for calendar-range
  ([#8329](https://github.com/taiga-family/taiga-ui/issues/8329))
  ([951779d](https://github.com/taiga-family/taiga-ui/commit/951779def714e366bb31c915be56ce9ee50115ee))

### 🐞 Bug Fixes

- **core:** ios menu is not triggered ([#8348](https://github.com/taiga-family/taiga-ui/issues/8348))
  ([8b00807](https://github.com/taiga-family/taiga-ui/commit/8b008072936d0c246a1eb6c7435360b39305bf8f))
- **i18n:** redundant whitespace ([#8501](https://github.com/taiga-family/taiga-ui/issues/8501))
  ([0f809a7](https://github.com/taiga-family/taiga-ui/commit/0f809a72b009e469e99ea0c773e446e8e9dafebd))
- **legacy:** fix issues with custom injector in templates
  ([#8523](https://github.com/taiga-family/taiga-ui/issues/8523))
  ([ce49bac](https://github.com/taiga-family/taiga-ui/commit/ce49bac400287512ca6c97231ce04c4336b9794c))

## [4.1.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.1.0) (2024-08-13)

### 🚀 Features

- add `@taiga-ui/icons-fontawesome` ([#8493](https://github.com/taiga-family/taiga-ui/issues/8493))
  ([131b3ed](https://github.com/taiga-family/taiga-ui/commit/131b3ed6a007c3229fe65f13fd9bfe014d68e7c2))
- add `@taiga-ui/icons-material` ([#8454](https://github.com/taiga-family/taiga-ui/issues/8454))
  ([3315a29](https://github.com/taiga-family/taiga-ui/commit/3315a29f5e6539956d3dc7d6b4a01b1a0c3d45e4))
- **i18n:** add korean ([#8486](https://github.com/taiga-family/taiga-ui/issues/8486))
  ([691328f](https://github.com/taiga-family/taiga-ui/commit/691328f889c95346f18ced853fe2b91bd08e300f))
- **kit:** prevent disabled date selection for calendar-range
  ([#8329](https://github.com/taiga-family/taiga-ui/issues/8329))
  ([951779d](https://github.com/taiga-family/taiga-ui/commit/951779def714e366bb31c915be56ce9ee50115ee))

### 🐞 Bug Fixes

- **core:** `Group` fix edge overlay ([#8509](https://github.com/taiga-family/taiga-ui/issues/8509))
  ([bd43b97](https://github.com/taiga-family/taiga-ui/commit/bd43b977e00e554bbed373ed4987816dce49831f))
- **kit:** `InputPhoneInternational` fix chevron ([#8491](https://github.com/taiga-family/taiga-ui/issues/8491))
  ([a0397d6](https://github.com/taiga-family/taiga-ui/commit/a0397d6e6a20da1094367d11fa070f178dc6a9fc))
- **legacy:** `InputTime` has missing zero padding on blur for `HH:MM` mode
  ([#8492](https://github.com/taiga-family/taiga-ui/issues/8492))
  ([84c3aae](https://github.com/taiga-family/taiga-ui/commit/84c3aaec0eaeb60cd4e5a4f101f6e056942c7a6c))

### [4.0.1](https://github.com/taiga-family/taiga-ui/compare/v4.0.0...v4.0.1) (2024-08-12)

### 🐞 Bug Fixes

- **cdk:** redundant assert log if hours are greater than 23
  ([#8448](https://github.com/taiga-family/taiga-ui/issues/8448))
  ([c3a7e49](https://github.com/taiga-family/taiga-ui/commit/c3a7e4923eb958154e90b6bef7bda582ba8427fd))
- **core:** `Root` fix background ([#8468](https://github.com/taiga-family/taiga-ui/issues/8468))
  ([bbbb82e](https://github.com/taiga-family/taiga-ui/commit/bbbb82ece14906531fc140a8063bf0fc0ba217de))
- **core:** add `type=button` to `textfield` for ignore submit event
  ([#8455](https://github.com/taiga-family/taiga-ui/issues/8455))
  ([4700e5d](https://github.com/taiga-family/taiga-ui/commit/4700e5d143f33ca5af175be40cffea3d55f8241d))
- **kit:** `TuiDataListGroupWrapperComponent` is not assignable to the same property in base type
  ([#8461](https://github.com/taiga-family/taiga-ui/issues/8461))
  ([933be65](https://github.com/taiga-family/taiga-ui/commit/933be658d84d426d5b71e6535d808aa3145a1293))

## [4.0.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.0-rc.10...v4.0.0) (2024-08-09)

- Update to Angular 16 (https://github.com/taiga-family/taiga-ui/pull/6966).
- Update supported browser versions (https://github.com/taiga-family/taiga-ui/pull/6818).
- Rename **all** entities: drop `Module` / `Component` / `Directive` postfix.
- Use deep entrypoints in **all** imports paths inside packages for microfrontends tree-shaking support.
- **@taiga-ui/legacy** create new package ([#7501](https://github.com/taiga-family/taiga-ui/pull/7501)).
- **@taiga-ui/browserslist-config** create new package (https://github.com/taiga-family/taiga-ui/pull/5344).
- **@taiga-ui/core:**
  - `Textfield` add new component ([#6298](https://github.com/taiga-family/taiga-ui/pull/6298)).
  - `Icon` add new component ([#5872](https://github.com/taiga-family/taiga-ui/pull/5872)). `Icons` add new directive
    ([#6053](https://github.com/taiga-family/taiga-ui/pull/6053)) `Icon` add new pipe
    (https://github.com/taiga-family/taiga-ui/pull/7244).
  - `Icons` new approach **based on mask** ([#7752](https://github.com/taiga-family/taiga-ui/pull/7752),
    [#7658](https://github.com/taiga-family/taiga-ui/pull/7658),
    [#7714](https://github.com/taiga-family/taiga-ui/pull/7714)).
  - `Scrollbar` add mode (https://github.com/taiga-family/taiga-ui/pull/8246).
  - `Notification` simplify to directive (https://github.com/taiga-family/taiga-ui/pull/8168). Add interactive mode
    (https://github.com/taiga-family/taiga-ui/pull/6760).
  - `HintOverflow` add new directive (https://github.com/taiga-family/taiga-ui/pull/8111).
  - `DropdownContext` implement for `IOS` (https://github.com/taiga-family/taiga-ui/pull/7814).
  - `Root` use `Platform` directive (https://github.com/taiga-family/taiga-ui/pull/7931).
  - `Tooltip` are refactored from component to just directive (https://github.com/taiga-family/taiga-ui/pull/7810).
  - `Dropdown` nested no longer needs manual active zone (https://github.com/taiga-family/taiga-ui/pull/7744). BREAKING
    CHANGE: `ActiveZone` is removed from context in favor of close method.
  - `WithDataList` add host directive (https://github.com/taiga-family/taiga-ui/pull/7693).
  - `Appearance` switch to data-mode (https://github.com/taiga-family/taiga-ui/pull/7651).
  - `Maskito` instead `input[tuiMaskAccessor]` directive (https://github.com/taiga-family/taiga-ui/pull/7646).
  - `Alert`, `Dialog` no longer need module imports (https://github.com/taiga-family/taiga-ui/pull/6670).
  - `Loader` add new algorithm to calculate `stroke-width` (https://github.com/taiga-family/taiga-ui/pull/6550).
    `Loader` new animation (https://github.com/taiga-family/taiga-ui/pull/6538).
  - Use `TUI_ANIMATIONS_SPEED` instead `TUI_ANIMATIONS_DURATION` (https://github.com/taiga-family/taiga-ui/pull/6542).
- **@taiga-ui/kit:**
  - `Radio`, `Checkbox`, `Switch` new components based on directives
    ([#5319](https://github.com/taiga-family/taiga-ui/pull/5319),
    [#6929](https://github.com/taiga-family/taiga-ui/pull/6929)).
  - `Sensitive` add new directive ([#5425](https://github.com/taiga-family/taiga-ui/pull/5425),
    [#6491](https://github.com/taiga-family/taiga-ui/pull/6491),
    [#6960](https://github.com/taiga-family/taiga-ui/pull/6960)).
  - `Skeleton` add new directive ([#6934](https://github.com/taiga-family/taiga-ui/pull/6934)).
  - `Segmented` add new component ([#6527](https://github.com/taiga-family/taiga-ui/pull/6527),
    [#7192](https://github.com/taiga-family/taiga-ui/pull/7192)). Tabs refactor and drop `MobileTabs` in favor of
    `Segmented` ([#7047](https://github.com/taiga-family/taiga-ui/pull/7047)).
  - `Fade` add new directive ([#5169](https://github.com/taiga-family/taiga-ui/pull/5169)).
  - `Avatar` add colored icons mode ([#7806](https://github.com/taiga-family/taiga-ui/pull/7806)).
  - `Connected` add directive for `Cell` and `Stepper` ([#8025](https://github.com/taiga-family/taiga-ui/pull/8025)).
  - Use `@maskito/phone` ([#7580](https://github.com/taiga-family/taiga-ui/pull/7580)) in `InputPhoneInternational`.
  - `FluidTypography` add new directive (https://github.com/taiga-family/taiga-ui/pull/8316).
  - `Progress` add options with DI (https://github.com/taiga-family/taiga-ui/pull/8061).
  - `Status` add new component (https://github.com/taiga-family/taiga-ui/pull/8057).
  - `Emails` add pipe (https://github.com/taiga-family/taiga-ui/pull/7596).
  - `Pulse` add new component (https://github.com/taiga-family/taiga-ui/pull/7544).
  - `Chevron` add new directive (https://github.com/taiga-family/taiga-ui/pull/7153).
  - `AvatarOutline` add new directive (https://github.com/taiga-family/taiga-ui/pull/7087).
  - `NumberFormat` allow dynamic changes (https://github.com/taiga-family/taiga-ui/pull/6856). BREAKING CHANGES: remove
    `TUI_NUMBER_FORMAT_OBSERVABLE` in favour of `TUI_NUMBER_FORMAT`, `tuiFormatNumber` pipe requires async pipe now.
  - `Block` add new component (https://github.com/taiga-family/taiga-ui/pull/6892).
- **@taiga-ui/cdk:**
  - `Dialogs` refactor creation way (https://github.com/taiga-family/taiga-ui/pull/6660).
  - `Provide` add new util (https://github.com/taiga-family/taiga-ui/pull/7168).
  - `TakeUntilDestroyed` add helper (https://github.com/taiga-family/taiga-ui/pull/7381).
  - `NativeElement` add util (https://github.com/taiga-family/taiga-ui/pull/7393).
  - `ToArray` add util (https://github.com/taiga-family/taiga-ui/pull/7489).
  - `DirectiveBinding` / `DirectiveListener` add utils (https://github.com/taiga-family/taiga-ui/pull/7611).
  - `Control` add signal based abstraction (https://github.com/taiga-family/taiga-ui/pull/7650).
  - `ThemeColorService` add service (https://github.com/taiga-family/taiga-ui/pull/8240).
  - `Portal` refactor abstractions (https://github.com/taiga-family/taiga-ui/pull/6692).
  - Rename and remove some helper instances (https://github.com/taiga-family/taiga-ui/pull/7065).
  - Scroll controls visible only inside `tui-root` area (https://github.com/taiga-family/taiga-ui/pull/6623).
- **@taiga-ui/layout:**
  - `Title`, `BlockDetails`, `Comment` add new components ([#5743](https://github.com/taiga-family/taiga-ui/pull/5743),
    [#7010](https://github.com/taiga-family/taiga-ui/pull/7010)).
  - `CardMedium`, `CardLarge` add new components ([#7260](https://github.com/taiga-family/taiga-ui/pull/7260)).
  - `Cell` add new component ([#5460](https://github.com/taiga-family/taiga-ui/pull/5460),
    [#7235](https://github.com/taiga-family/taiga-ui/pull/7235)).
  - `Navigation` implement grid (https://github.com/taiga-family/taiga-ui/pull/8377). Simplify 2nd level aside
    (https://github.com/taiga-family/taiga-ui/pull/8141).
- **@taiga-ui/addon-commerce:**
  - `InputCard` migrate to new `Textfield` ([#7581](https://github.com/taiga-family/taiga-ui/pull/7581)).
- **@taiga-ui/addon-doc:**
  - `ThemeSwitcher` add new component (https://github.com/taiga-family/taiga-ui/pull/7966).
  - `Preview` lazy component support (https://github.com/taiga-family/taiga-ui/pull/7048).
  - Support target property for links (https://github.com/taiga-family/taiga-ui/pull/6874).
- **@taiga-ui/addon-mobile:**
  - `SwipeActions` add new component ([#6644](https://github.com/taiga-family/taiga-ui/pull/6644)).
  - `DropdownMobile` add new directive ([#7428](https://github.com/taiga-family/taiga-ui/pull/7428),
    [#8094](https://github.com/taiga-family/taiga-ui/pull/8094)).
- **@taiga-ui/addon-table:**
  - `Reorder` add possibility to transfer a template (https://github.com/taiga-family/taiga-ui/pull/6967).
  - `TableSort` support nullable values (https://github.com/taiga-family/taiga-ui/pull/7888).
- **@taiga-ui/i18n**:
  - `Hebrew` add support (https://github.com/taiga-family/taiga-ui/pull/8242).
  - `Belarusian` add support (https://github.com/taiga-family/taiga-ui/pull/6421).

<div id="migration"> </div>

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

**Angular CLI:**

```
ng update @taiga-ui/cdk
```

**Nx CLI:**

```
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v3.x/CHANGELOG.md)

## [2.x CHANGELOG...](https://github.com/taiga-family/taiga-ui/blob/v2.x/CHANGELOG.md)
