# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.22.0](https://github.com/tinkoff/taiga-ui/compare/v3.21.0...v3.22.0) (2023-03-27)

### Features

- **addon-doc:** add `TUI_DOC_MAP_PAGES` for cached map pages ([#3932](https://github.com/tinkoff/taiga-ui/issues/3932))
  ([9c227e0](https://github.com/tinkoff/taiga-ui/commit/9c227e00332a1b7d5e193721305935e093fe166a))
- **addon-doc:** add `TUI_DOC_URL_STATE_HANDLER` for override URL tree segments in history
  ([#3955](https://github.com/tinkoff/taiga-ui/issues/3955))
  ([a175c81](https://github.com/tinkoff/taiga-ui/commit/a175c81a84c0bea39cc4df9be5344407dbb2e86e))
- **addon-doc:** support `icon` for code editor button ([#3933](https://github.com/tinkoff/taiga-ui/issues/3933))
  ([6ce8572](https://github.com/tinkoff/taiga-ui/commit/6ce8572af0ea47478f5daec880d6cfeea0695562))
- **addon-editor:** improve styles for `details` component ([#4000](https://github.com/tinkoff/taiga-ui/issues/4000))
  ([ab5342b](https://github.com/tinkoff/taiga-ui/commit/ab5342bead5c14634cdd6993bcdea6074feb0700))
- **addon-editor:** support custom full color picker ([#3748](https://github.com/tinkoff/taiga-ui/issues/3748))
  ([aefb518](https://github.com/tinkoff/taiga-ui/commit/aefb51875270881cccb5b340fd1856a782c0a08b))
- **kit:** `InputFiles` customize content ([#3995](https://github.com/tinkoff/taiga-ui/issues/3995))
  ([c70ccfe](https://github.com/tinkoff/taiga-ui/commit/c70ccfeada3c56b1e739ef7f8a8ef0dd5143d756))
- **kit:** `MultiSelect` add ability to use native dropdown on mobile
  ([#3983](https://github.com/tinkoff/taiga-ui/issues/3983))
  ([35b86e0](https://github.com/tinkoff/taiga-ui/commit/35b86e0ba7670481b0a98a3ba429c8bbf7ac3040))

### Bug Fixes

- **addon-editor:** overflow `tui-editor-socket` only inside `tui-editor`
  ([#4003](https://github.com/tinkoff/taiga-ui/issues/4003))
  ([d20b0e7](https://github.com/tinkoff/taiga-ui/commit/d20b0e7d3707378dc4c53ef0a906fb4caa1403fe))
- **addon-editor:** trigger `updateValueAndValidity` after `focus/blur` events in `tui-editor`
  ([#3968](https://github.com/tinkoff/taiga-ui/issues/3968))
  ([6af090b](https://github.com/tinkoff/taiga-ui/commit/6af090b72ea545a87f6fc7daf851ff682e2bd52c))
- **addon-mobile:** `Sheet` disable scroll snap for Firefox ([#3946](https://github.com/tinkoff/taiga-ui/issues/3946))
  ([411a58a](https://github.com/tinkoff/taiga-ui/commit/411a58aaa0e5a844fa838587f56b850711cd1adc))
- **cdk:** `Resizer` leave irrelevant dimensions untouched ([#4004](https://github.com/tinkoff/taiga-ui/issues/4004))
  ([c691390](https://github.com/tinkoff/taiga-ui/commit/c69139005df2c1c29de58f11f10f27d52c9f15a7))
- **cdk:** correct extraction of id for processing in svg ([#3965](https://github.com/tinkoff/taiga-ui/issues/3965))
  ([28190fa](https://github.com/tinkoff/taiga-ui/commit/28190fa5ef8ff220c93024cb15c755a5f67c5719))
- **core:** `HintManual` fix initial state ([#3956](https://github.com/tinkoff/taiga-ui/issues/3956))
  ([091ed25](https://github.com/tinkoff/taiga-ui/commit/091ed25a0f319c4027f1fa1687f59f87cc4e19c2))
- **core:** `HostedDropdown` properly detect size in case of custom host
  ([#3957](https://github.com/tinkoff/taiga-ui/issues/3957))
  ([a7f1f8f](https://github.com/tinkoff/taiga-ui/commit/a7f1f8f909dd85bdf57b25145d13b2bec8933ba4))
- **core:** fix `Hint` position on pinch-to-zoom in webkit ([#3940](https://github.com/tinkoff/taiga-ui/issues/3940))
  ([d512952](https://github.com/tinkoff/taiga-ui/commit/d512952839a0426e4519c623effa7f5449a0d68c))
- **core:** Google Chrome fires keydown event when form autocomplete
  ([#3964](https://github.com/tinkoff/taiga-ui/issues/3964))
  ([3444080](https://github.com/tinkoff/taiga-ui/commit/3444080828922b7e23971517d88e534687baa241))
- **core:** increase default font size from 15px to 16px to remove iOS zoom
  ([#3994](https://github.com/tinkoff/taiga-ui/issues/3994))
  ([75461d4](https://github.com/tinkoff/taiga-ui/commit/75461d4670f94ef411c3f87753ee1cf37bb927cb))
- **kit:** `InputTag` remove trailing comma for non editable mode
  ([#3980](https://github.com/tinkoff/taiga-ui/issues/3980))
  ([83f0305](https://github.com/tinkoff/taiga-ui/commit/83f0305db038fcb2e910ff7b00a24620500c7322))
- **kit:** align for multiSelectTexts ([#3978](https://github.com/tinkoff/taiga-ui/issues/3978))
  ([376c2b9](https://github.com/tinkoff/taiga-ui/commit/376c2b99ce4404f78fe0dee6ecd4aaf8a24cb0b2))
- **kit:** align placeholder ([#3999](https://github.com/tinkoff/taiga-ui/issues/3999))
  ([872919e](https://github.com/tinkoff/taiga-ui/commit/872919e27828ece252eeb5c85b3c99371bbfb82b))

## [3.21.0](https://github.com/tinkoff/taiga-ui/compare/v3.20.0...v3.21.0) (2023-03-20)

### Features

- **core:** add helper `tuiNumberFormatProvider` ([#3884](https://github.com/tinkoff/taiga-ui/issues/3884))
  ([7e136dc](https://github.com/tinkoff/taiga-ui/commit/7e136dc795d6efebd1d518fbaa7bcc1b0ab14996))
- **demo:** add example with named outlets ([#3821](https://github.com/tinkoff/taiga-ui/issues/3821))
  ([5e897f7](https://github.com/tinkoff/taiga-ui/commit/5e897f79ec26d7fc9d68461dfb07f3c16824a9bf))
- **kit:** `DialogForm` add new service ([#3851](https://github.com/tinkoff/taiga-ui/issues/3851))
  ([10813f5](https://github.com/tinkoff/taiga-ui/commit/10813f5b3f95f9a9316a469e1ea7675467270a97))
- **styles:** add `--tui-skeleton-radius` for skeleton ([#3890](https://github.com/tinkoff/taiga-ui/issues/3890))
  ([3dc67b1](https://github.com/tinkoff/taiga-ui/commit/3dc67b14334d5fb91f2f5ba7e921bd196a757f84))

### Bug Fixes

- **addon-charts:** `dot` dont shrink to fit own width for `legend-item`
  ([#3905](https://github.com/tinkoff/taiga-ui/issues/3905))
  ([4109764](https://github.com/tinkoff/taiga-ui/commit/4109764c38ff2614da325d8f90bee262657ee39d))
- **addon-commerce:** emulate focus on iOS by `tuiAutoFocus` ([#3799](https://github.com/tinkoff/taiga-ui/issues/3799))
  ([57b263d](https://github.com/tinkoff/taiga-ui/commit/57b263d654d6e204a85eb6b137126e2ea9011eff))
- **addon-editor:** dispatch `ImageNode` in `viewModel` ([#3872](https://github.com/tinkoff/taiga-ui/issues/3872))
  ([89869ef](https://github.com/tinkoff/taiga-ui/commit/89869ef3a95f4b44b67fcd0db48c95786a69e497))
- **cdk:** `tuiIfMap` add operator ([#3920](https://github.com/tinkoff/taiga-ui/issues/3920))
  ([4ef2de6](https://github.com/tinkoff/taiga-ui/commit/4ef2de6513a55747e45a53e947415ccba3279199))
- **cdk:** correct safari detection ([#3855](https://github.com/tinkoff/taiga-ui/issues/3855))
  ([ee474b8](https://github.com/tinkoff/taiga-ui/commit/ee474b8e59a62455f0f444d0db0e747e1c32221e))
- **cdk:** improve type annotation for `tuiForAsync` ([#3767](https://github.com/tinkoff/taiga-ui/issues/3767))
  ([731c8bf](https://github.com/tinkoff/taiga-ui/commit/731c8bfe772f17a5a22f5ec79b6bd117e483e0c2))
- **core:** `Dialog` fix `dismissible` property ([#3848](https://github.com/tinkoff/taiga-ui/issues/3848))
  ([ea4730f](https://github.com/tinkoff/taiga-ui/commit/ea4730f0982f856759d45a5359e2f12ab0328825))
- **core:** `Textarea` fix line breaks in disabled/readonly state
  ([#3833](https://github.com/tinkoff/taiga-ui/issues/3833))
  ([301a505](https://github.com/tinkoff/taiga-ui/commit/301a505712d22df2538b0aa3199f5d4e6a3de959))
- **core:** escape event doesn't work in Safari ([#3751](https://github.com/tinkoff/taiga-ui/issues/3751))
  ([32774b2](https://github.com/tinkoff/taiga-ui/commit/32774b2c93652bc8d8b55ae99f5405731d8098e2))
- **core:** set `text` input mode for iOS devices when use negative values
  ([#3899](https://github.com/tinkoff/taiga-ui/issues/3899))
  ([8797bea](https://github.com/tinkoff/taiga-ui/commit/8797bea743d1fade8bed9ff6e9acdaa21d6d2013))
- **kit:** `InputCount` fix formatting, fix cutting by min value, use `InputNumber` inside
  ([#3824](https://github.com/tinkoff/taiga-ui/issues/3824))
  ([fc96c86](https://github.com/tinkoff/taiga-ui/commit/fc96c8682b98fead3c3247afb7d9041b59b54bef))
- **kit:** `InputPhoneInternational` change Mauritius phone pattern
  ([#3901](https://github.com/tinkoff/taiga-ui/issues/3901))
  ([47eb6ae](https://github.com/tinkoff/taiga-ui/commit/47eb6ae653fe88f803710171da3b137dd8c95bd6))
- **kit:** `InputTag`, `Multiselect` fix placeholder ([#3832](https://github.com/tinkoff/taiga-ui/issues/3832))
  ([75d4b6e](https://github.com/tinkoff/taiga-ui/commit/75d4b6efbe5bc9f607b74b711352c592e358b006))
- **kit:** `InputTime` fix wrong preudofocus state ([#3896](https://github.com/tinkoff/taiga-ui/issues/3896))
  ([dea3de7](https://github.com/tinkoff/taiga-ui/commit/dea3de782d622b9e14597c9eabd898733ca15bf1))
- **kit:** use ellipsis for label in `pdf-viewer` when overflow text
  ([#3845](https://github.com/tinkoff/taiga-ui/issues/3845))
  ([dd308ac](https://github.com/tinkoff/taiga-ui/commit/dd308ac295ac2e8bab04f1fee06e520cef138f2a))
- **kit:** use wrap for non-breaking string in `line-clamp` ([#3876](https://github.com/tinkoff/taiga-ui/issues/3876))
  ([68169bf](https://github.com/tinkoff/taiga-ui/commit/68169bfa9294a9f31344cd710a50967ce4ec673e))

## [3.20.0](https://github.com/tinkoff/taiga-ui/compare/v3.19.0...v3.20.0) (2023-03-07)

### Features

- **kit:** `InputDate` add ability to use native date picker on mobile
  ([#3790](https://github.com/tinkoff/taiga-ui/issues/3790))
  ([99a25b1](https://github.com/tinkoff/taiga-ui/commit/99a25b150cd5c2980b8a92205e85b4b0444654f3))

### Bug Fixes

- **cdk:** `schematics` fix global-styles migration ([#3797](https://github.com/tinkoff/taiga-ui/issues/3797))
  ([21cc5fa](https://github.com/tinkoff/taiga-ui/commit/21cc5fad61c10da9a52034b240d90ac2fb28dd27))
- **core:** `Hint`/`Dropdown` fix directives order mattering ([#3726](https://github.com/tinkoff/taiga-ui/issues/3726))
  ([263c713](https://github.com/tinkoff/taiga-ui/commit/263c71356b0453f199daf645a0419a3fb31660dd))
- **kit:** `TabsWithMore` sync max index on active index change
  ([#3747](https://github.com/tinkoff/taiga-ui/issues/3747))
  ([6af42b3](https://github.com/tinkoff/taiga-ui/commit/6af42b3ee12d8dad94331c6942d7d6660e49ff24))

## [3.19.0](https://github.com/tinkoff/taiga-ui/compare/v3.18.0...v3.19.0) (2023-02-21)

### Features

- **addon-doc:** new `TUI_DOC_EXAMPLE_OPTIONS` DI-token ([#3729](https://github.com/tinkoff/taiga-ui/issues/3729))
  ([705e36a](https://github.com/tinkoff/taiga-ui/commit/705e36ab1346ebe48aee6402d20b4cc741207399))
- **addon-doc:** night mode toggle redesign ([#3702](https://github.com/tinkoff/taiga-ui/issues/3702))
  ([e5d9955](https://github.com/tinkoff/taiga-ui/commit/e5d9955d6b253c8d52550b0b7bc121dce5576ee5))
- **addon-editor:** add `highlight` extension ([#3688](https://github.com/tinkoff/taiga-ui/issues/3688))
  ([6d27db4](https://github.com/tinkoff/taiga-ui/commit/6d27db4eeee3c441a59b9b0203b652e4d26e7847))
- **core:** implement `tuiTextfieldAppearance` directive ([#3007](https://github.com/tinkoff/taiga-ui/issues/3007))
  ([87714f5](https://github.com/tinkoff/taiga-ui/commit/87714f519a6335f2696c177fe6b9ee07b49f1bba))
- **core:** new `tuiFlag` pipe ([#3725](https://github.com/tinkoff/taiga-ui/issues/3725))
  ([af78ec0](https://github.com/tinkoff/taiga-ui/commit/af78ec05af3a786bcc4be5b333c4917449ca083b))
- **kit:** add routable dialog ([#3369](https://github.com/tinkoff/taiga-ui/issues/3369))
  ([daadcab](https://github.com/tinkoff/taiga-ui/commit/daadcab6594f9b9a6076bbc4c94bc00622197975))

### Bug Fixes

- **addon-editor:** do not inherit previous text style for heading
  ([#3695](https://github.com/tinkoff/taiga-ui/issues/3695))
  ([91949f9](https://github.com/tinkoff/taiga-ui/commit/91949f96f19b8d44623baa6cc77d52afc6ba4bde))
- **cdk:** correct schematics' messages ([#3734](https://github.com/tinkoff/taiga-ui/issues/3734))
  ([4452896](https://github.com/tinkoff/taiga-ui/commit/4452896798c63ee459a9e48ee25bb2372baaa4d2))
- **i18n:** correct translate for `indent/outdent` ([#3711](https://github.com/tinkoff/taiga-ui/issues/3711))
  ([f7e2357](https://github.com/tinkoff/taiga-ui/commit/f7e235749b8ee002242f8fea3be9778d0ff33bfa))
- **kit:** `InputPhoneInternational` after changing country the mask does not render
  ([#3596](https://github.com/tinkoff/taiga-ui/issues/3596))
  ([0f86ec9](https://github.com/tinkoff/taiga-ui/commit/0f86ec94b7c790b2dd60e1637b0d91cad0d6dfa7))
- **kit:** `TabsWithMore` properly calculate overflow ([#3697](https://github.com/tinkoff/taiga-ui/issues/3697))
  ([da6fde0](https://github.com/tinkoff/taiga-ui/commit/da6fde09937aca78cca02272859b16922b64c9a4))
- **kit:** set `pointer-events: none` by readonly state for checkbox
  ([#3712](https://github.com/tinkoff/taiga-ui/issues/3712))
  ([a12f1fc](https://github.com/tinkoff/taiga-ui/commit/a12f1fcebbbd3b035de6e10eb405cd2790654866))

## [3.18.0](https://github.com/tinkoff/taiga-ui/compare/v3.17.0...v3.18.0) (2023-02-15)

### Features

- **addon-editor:** add a little bit space between top and bottom in editor
  ([#3647](https://github.com/tinkoff/taiga-ui/issues/3647))
  ([c105795](https://github.com/tinkoff/taiga-ui/commit/c105795abf539a00daab516923744c10fad1e09e))
- **addon-editor:** customize css classes for font-tool in toolbar
  ([#3662](https://github.com/tinkoff/taiga-ui/issues/3662))
  ([ef5398b](https://github.com/tinkoff/taiga-ui/commit/ef5398bbe9334fec8789f1c11c8c0a356ea84aff))
- **addon-editor:** support drop/paste event for resizable ([#3646](https://github.com/tinkoff/taiga-ui/issues/3646))
  ([7e446bd](https://github.com/tinkoff/taiga-ui/commit/7e446bd4d80076f53267e9822781092918da8818))
- **addon-editor:** support focus extension ([#3649](https://github.com/tinkoff/taiga-ui/issues/3649))
  ([be04427](https://github.com/tinkoff/taiga-ui/commit/be04427c0309126d5d993ebef541777ffeed39d8))
- **core:** `Dialog` allow closing confirmation ([#3638](https://github.com/tinkoff/taiga-ui/issues/3638))
  ([7ac0c1e](https://github.com/tinkoff/taiga-ui/commit/7ac0c1e0f58b250828c5f6dfb51f1c0417456264))
- **core:** `Tooltip` remove delay on click ([#3502](https://github.com/tinkoff/taiga-ui/issues/3502))
  ([d6ed9e0](https://github.com/tinkoff/taiga-ui/commit/d6ed9e0698344a2d9b67bba51314a39f9f212cee))
- **core:** `TUI_VIEWPORT` add new token ([#3617](https://github.com/tinkoff/taiga-ui/issues/3617))
  ([a0093a0](https://github.com/tinkoff/taiga-ui/commit/a0093a010a9263f2880c5e10fafd3df7c76c657a))
- **core:** support options for dropdown-hover directive ([#3643](https://github.com/tinkoff/taiga-ui/issues/3643))
  ([241616b](https://github.com/tinkoff/taiga-ui/commit/241616b86068279ec39a11824828f4f6c2d12baf))
- **icons:** `FeatherIcons` add full icon pack ([#3577](https://github.com/tinkoff/taiga-ui/issues/3577))
  ([19ea759](https://github.com/tinkoff/taiga-ui/commit/19ea759d7a9f846a9788b2d1a8aab292de91f19d))
- **styles:** remove legacy browser clearfix ([#3639](https://github.com/tinkoff/taiga-ui/issues/3639))
  ([191b0ab](https://github.com/tinkoff/taiga-ui/commit/191b0ab7edf9e4ae6af0b1eff0b1f126c12232f5))

### Bug Fixes

- **addon-doc:** change activeItemIndex from NaN to 0 ([#3660](https://github.com/tinkoff/taiga-ui/issues/3660))
  ([6f7f31d](https://github.com/tinkoff/taiga-ui/commit/6f7f31dab359b380c9b612be664fbfc8c21a3591))
- **addon-editor:** pin dependencies ([#3652](https://github.com/tinkoff/taiga-ui/issues/3652))
  ([eda6a37](https://github.com/tinkoff/taiga-ui/commit/eda6a37a8612ab9cba510d36b7642ce89dd35951))
- **addon-editor:** support `Drag and Drop` for resizable images
  ([#3654](https://github.com/tinkoff/taiga-ui/issues/3654))
  ([0cd3c2f](https://github.com/tinkoff/taiga-ui/commit/0cd3c2f603299ac24bfc03d45a49dd9a5b60bc1e))
- **addon-editor:** use `imageEditor` extension instead of `image` for copy-paste
  ([#3680](https://github.com/tinkoff/taiga-ui/issues/3680))
  ([f311845](https://github.com/tinkoff/taiga-ui/commit/f311845309f121b29f29e15abaa66fc54551722f))
- **cdk:** support redefine properties for parent class ([#3618](https://github.com/tinkoff/taiga-ui/issues/3618))
  ([a7a5bee](https://github.com/tinkoff/taiga-ui/commit/a7a5beeca50cb103dc25fc0530a48e958661f870))

## [3.17.0](https://github.com/tinkoff/taiga-ui/compare/v3.16.0...v3.17.0) (2023-02-07)

### Features

- **addon-commerce:** add `tuiGetCurrencyByCode` ([#3563](https://github.com/tinkoff/taiga-ui/issues/3563))
  ([f9982ef](https://github.com/tinkoff/taiga-ui/commit/f9982ef272c31baf5e2585ecd192c9379a7dc243))
- **addon-editor:** add `Iframe` extension ([#3520](https://github.com/tinkoff/taiga-ui/issues/3520))
  ([778f678](https://github.com/tinkoff/taiga-ui/commit/778f67815cb90295d45c44bd0091ce90e5aeff13))
- **addon-editor:** support `audio/video` tag in editor ([#3585](https://github.com/tinkoff/taiga-ui/issues/3585))
  ([5f65b72](https://github.com/tinkoff/taiga-ui/commit/5f65b72eddd23882318d598558524d32bbb3ecd8))
- **core:** introduce new font variables ([#3518](https://github.com/tinkoff/taiga-ui/issues/3518))
  ([3ae2572](https://github.com/tinkoff/taiga-ui/commit/3ae257250319cf511143943962276cbbea5514a2))
- **eslint-plugin:** add strict-doc-example-extensions rule ([#3534](https://github.com/tinkoff/taiga-ui/issues/3534))
  ([8e5efbf](https://github.com/tinkoff/taiga-ui/commit/8e5efbfa4fe15823ccc2e8d4ad5d85e6aa260c80))
- **kit:** `ElasticContainer` add new component ([#3492](https://github.com/tinkoff/taiga-ui/issues/3492))
  ([3e9a53c](https://github.com/tinkoff/taiga-ui/commit/3e9a53c653a520e32e00c6c599fc81967d2829a8))
- **kit:** support customization for rating component ([#3556](https://github.com/tinkoff/taiga-ui/issues/3556))
  ([6f9b7d9](https://github.com/tinkoff/taiga-ui/commit/6f9b7d9a4f0d96d5adfbb15560e3e0ca2d6de6bf))

### Bug Fixes

- **addon-doc:** prevent convert invalid number to `NaN` ([#3528](https://github.com/tinkoff/taiga-ui/issues/3528))
  ([6e259f4](https://github.com/tinkoff/taiga-ui/commit/6e259f479184a6197cc9a50e03a3b986be62beed))
- **addon-editor:** explicit provide `@tiptap/extension-blockquote`
  ([#3609](https://github.com/tinkoff/taiga-ui/issues/3609))
  ([ed878e6](https://github.com/tinkoff/taiga-ui/commit/ed878e6c4ab2d135b63e0c48e19497e51cdebd44))
- **addon-editor:** prevent recursive overwriting value ([#3567](https://github.com/tinkoff/taiga-ui/issues/3567))
  ([045af4c](https://github.com/tinkoff/taiga-ui/commit/045af4ce7a4ac07352da47a3a9cf90bb0b8d01be))
- **addon-mobile:** wait before update viewport dimension ([#3536](https://github.com/tinkoff/taiga-ui/issues/3536))
  ([c2cf685](https://github.com/tinkoff/taiga-ui/commit/c2cf6853470e9869046906c483f06999872e869a))
- **cdk:** `Schematics` add `tuiDropdownContext` migration ([#3558](https://github.com/tinkoff/taiga-ui/issues/3558))
  ([a2c3ce8](https://github.com/tinkoff/taiga-ui/commit/a2c3ce8cfaaeb7889fcb473b3d21a13aa05ef7f7))
- **cdk:** `schematics` fix require() of ES modules error ([#3569](https://github.com/tinkoff/taiga-ui/issues/3569))
  ([941039b](https://github.com/tinkoff/taiga-ui/commit/941039be708e86a640c1fe61122e85687925de9b))
- **core:** `DropdownContext` fix closing (ng14) ([#3511](https://github.com/tinkoff/taiga-ui/issues/3511))
  ([5f34896](https://github.com/tinkoff/taiga-ui/commit/5f34896b3782208f0ef4cd2e9513956509994f2e))
- **core:** `DropdownHover` properly reflect state for `HostedDropdown`
  ([#3507](https://github.com/tinkoff/taiga-ui/issues/3507))
  ([78b8e92](https://github.com/tinkoff/taiga-ui/commit/78b8e921482793c35f04e1501397b4ea74f273bd))
- **core:** `TUI_DIALOG_CLOSE_STREAM` event targets ([#3541](https://github.com/tinkoff/taiga-ui/issues/3541))
  ([11c6b7c](https://github.com/tinkoff/taiga-ui/commit/11c6b7c14b8a93acd7faf8786df8d8c7eceee599))
- **core:** visible incorrect initial position from `TuiDropdownComponent` & `TuiHintComponent` without animation &
  ngZoneEventCoalescing ([#3529](https://github.com/tinkoff/taiga-ui/issues/3529))
  ([e570eab](https://github.com/tinkoff/taiga-ui/commit/e570eab68864828fa417cd0d62f280faee014704))
- **kit:** `Carousel` fix drag to next slide ([#3583](https://github.com/tinkoff/taiga-ui/issues/3583))
  ([92f5373](https://github.com/tinkoff/taiga-ui/commit/92f5373d2a81dde0fb77098d28f810b5d62353ea))
- **kit:** use `TUI_CHECKBOX_OPTIONS/TUI_RADIO_OPTIONS` for `checkbox/radio-labeled`
  ([#3555](https://github.com/tinkoff/taiga-ui/issues/3555))
  ([1f0e337](https://github.com/tinkoff/taiga-ui/commit/1f0e33750de2f164cef104ca55ade2ea446f3464))

## [3.16.0](https://github.com/tinkoff/taiga-ui/compare/v3.15.0...v3.16.0) (2023-01-24)

### Features

- `tslib` should be a transitive dependency from `@taiga/cdk` ([#3430](https://github.com/tinkoff/taiga-ui/issues/3430))
  ([abc5323](https://github.com/tinkoff/taiga-ui/commit/abc5323fe9a806ef73bfe8af2dd061c3c18cbfdf))
- **addon-editor:** add `@tiptap/extension-youtube` ([#3481](https://github.com/tinkoff/taiga-ui/issues/3481))
  ([a1efcf0](https://github.com/tinkoff/taiga-ui/commit/a1efcf0527c95164c0cf4b9f734995bdd3419e8a))
- **addon-mobile:** improve typing for `tuiRipple` ([#3379](https://github.com/tinkoff/taiga-ui/issues/3379))
  ([0d9197e](https://github.com/tinkoff/taiga-ui/commit/0d9197e441d439e528932cce61f65640905c148e))
- **addon-table:** rename icons `tuiIconSortDown/tuiIconSortUp` to `tuiIconSortAscending/Descending`
  ([#3443](https://github.com/tinkoff/taiga-ui/issues/3443))
  ([2dc71da](https://github.com/tinkoff/taiga-ui/commit/2dc71da7b2192c4363c851bb035a6ea76018095a))
- **cdk:** drop `~` imports for all `.less` files ([#3484](https://github.com/tinkoff/taiga-ui/issues/3484))
  ([e1607d7](https://github.com/tinkoff/taiga-ui/commit/e1607d7e8cfd1385fda15696ff5e024fc892253a))
- compat with rxjs `7.x` and `8.x-alpha` ([#3428](https://github.com/tinkoff/taiga-ui/issues/3428))
  ([0804b74](https://github.com/tinkoff/taiga-ui/commit/0804b745325dd4ea33e3b42b984d771a00a8a3b5))
- **eslint-plugin:** add `no-typeof` rule ([#3449](https://github.com/tinkoff/taiga-ui/issues/3449))
  ([c4e82fa](https://github.com/tinkoff/taiga-ui/commit/c4e82fa9586e966ddf4a43b33d4e7d105826584e))
- **kit:** `Multiselect` add max number of rows for expandable mode
  ([#3388](https://github.com/tinkoff/taiga-ui/issues/3388))
  ([e3bcca0](https://github.com/tinkoff/taiga-ui/commit/e3bcca0239217c507cb2736b079b2e70132fe47e))
- **kit:** provide custom `formatSize` handler in `TuiFileComponent`
  ([#3483](https://github.com/tinkoff/taiga-ui/issues/3483))
  ([fb9d0cd](https://github.com/tinkoff/taiga-ui/commit/fb9d0cdc4d7f79f026e332268518cde5ec2eccea))
- **kit:** support override padding for items in carousel ([#3462](https://github.com/tinkoff/taiga-ui/issues/3462))
  ([a39fae9](https://github.com/tinkoff/taiga-ui/commit/a39fae90383373c295ed806c53d1c2792827531a))

### Bug Fixes

- **addon-charts:** `LineDaysChart` fix hint circle not disappearing
  ([#3486](https://github.com/tinkoff/taiga-ui/issues/3486))
  ([caa5f9a](https://github.com/tinkoff/taiga-ui/commit/caa5f9a390929905bdf43cb08d51f6a800670680))
- **addon-doc:** convert number value to string by `documentationPropertyType`
  ([#3439](https://github.com/tinkoff/taiga-ui/issues/3439))
  ([90165de](https://github.com/tinkoff/taiga-ui/commit/90165de26296cbe577f96c7b36fb47e25ee5ce56))
- **addon-doc:** preserve whitespace between links ([#3441](https://github.com/tinkoff/taiga-ui/issues/3441))
  ([24b76e0](https://github.com/tinkoff/taiga-ui/commit/24b76e0a0f0076ddb814b29d349a48a454722642))
- **cdk:** `Schematics` add missing moduleSpecifier ([#3468](https://github.com/tinkoff/taiga-ui/issues/3468))
  ([250e843](https://github.com/tinkoff/taiga-ui/commit/250e8433a299ff4dac82b9c486f6079496b76b4f))
- **core:** remove quotes inside `url(*)` function in fonts.less
  ([#3469](https://github.com/tinkoff/taiga-ui/issues/3469))
  ([592ad35](https://github.com/tinkoff/taiga-ui/commit/592ad35464546c88f337b56b1fd5b5476505884f))
- **core:** top border of tuiTable first row's td is not visible
  ([#3454](https://github.com/tinkoff/taiga-ui/issues/3454))
  ([1a39ed1](https://github.com/tinkoff/taiga-ui/commit/1a39ed1e759005b31e011d61fa6c193967270a71))
- **core:** use `nowrap` for content in `value-decoration` ([#3496](https://github.com/tinkoff/taiga-ui/issues/3496))
  ([4b20993](https://github.com/tinkoff/taiga-ui/commit/4b2099326ff00af4576dc7b3f75caa689ec21365))
- **kit:** `InputSlider` not working `border-bottom-left-radius` for slider (Firefox)
  ([#3494](https://github.com/tinkoff/taiga-ui/issues/3494))
  ([514374b](https://github.com/tinkoff/taiga-ui/commit/514374b98f87f8d03c13cc154fecf168b01bab56))
- **kit:** `InputSlider` wrong slider's width in Firefox ([#3488](https://github.com/tinkoff/taiga-ui/issues/3488))
  ([c7fe7e1](https://github.com/tinkoff/taiga-ui/commit/c7fe7e1ece07c826fda815fcb042bd5b0e34d845))
- **kit:** `InputTag` fix overflow ([#3397](https://github.com/tinkoff/taiga-ui/issues/3397))
  ([4e88d8e](https://github.com/tinkoff/taiga-ui/commit/4e88d8e057578e3f4b21bfa1240364ac69bdee28))
- **kit:** `MultiSelect` fix dropdown for various `updateOn` options
  ([#3479](https://github.com/tinkoff/taiga-ui/issues/3479))
  ([554c519](https://github.com/tinkoff/taiga-ui/commit/554c51987281478eb50b7d31dde4d640c0e63ee3))
- **kit:** `Multiselect` fix scrolling to end ([#3493](https://github.com/tinkoff/taiga-ui/issues/3493))
  ([d320900](https://github.com/tinkoff/taiga-ui/commit/d320900df9286fa802358fb10ac4a7bd802ca9a8))
- **kit:** `Slider` has wrong height of the progress in Firefox
  ([#3497](https://github.com/tinkoff/taiga-ui/issues/3497))
  ([dbd2059](https://github.com/tinkoff/taiga-ui/commit/dbd205929c491a9b44910fccf5d6af7af38ff57f))
- **kit:** `Tabs` can't detect active tab during SSR ([#3395](https://github.com/tinkoff/taiga-ui/issues/3395))
  ([cbc96ae](https://github.com/tinkoff/taiga-ui/commit/cbc96aeb92547b86cad72d4940a9510565c8ed45))
- **kit:** `Tabs` SSR-error `TypeError: Cannot read properties of undefined (reading 'type')`
  ([#3391](https://github.com/tinkoff/taiga-ui/issues/3391))
  ([9fb85db](https://github.com/tinkoff/taiga-ui/commit/9fb85db40ef399a1fb9b73feee528821a4e3746f))
- **kit:** add missing `TUI_COUNTRIES_MASKS` for New Caledonia
  ([#3409](https://github.com/tinkoff/taiga-ui/issues/3409))
  ([29bf460](https://github.com/tinkoff/taiga-ui/commit/29bf460c2c1a2ff44a417c1fbe012a7d19338662))
- **kit:** fix `TUI_COUNTRIES_MASKS` of French Polynesia ([#3435](https://github.com/tinkoff/taiga-ui/issues/3435))
  ([926bb66](https://github.com/tinkoff/taiga-ui/commit/926bb66a9f5480f85760b106a873decd3f118224))
- **kit:** support `updateOn` of `blur` and `submit` types for `multi-select` component
  ([#3398](https://github.com/tinkoff/taiga-ui/issues/3398))
  ([0a2daff](https://github.com/tinkoff/taiga-ui/commit/0a2daff2f3edfc44089a8dd1ac9b4e2d3db6ff37))
- **kit:** update statically `HostBinding` in `line-clamp` ([#3394](https://github.com/tinkoff/taiga-ui/issues/3394))
  ([3835043](https://github.com/tinkoff/taiga-ui/commit/3835043401c18a065fbb937302abd3447e4a4534))
- **kit:** use `new-password` as lucky solution for disable autofill of input elements
  ([#3389](https://github.com/tinkoff/taiga-ui/issues/3389))
  ([9458439](https://github.com/tinkoff/taiga-ui/commit/94584393e806fcb19e677fa06842c12cf085d56b))

## [3.15.0](https://github.com/tinkoff/taiga-ui/compare/v3.14.0...v3.15.0) (2022-12-30)

### Features

- **addon-doc:** add `TUI_DOC_EXCLUDED_PROPERTIES` token to exclude inherited props
  ([#3267](https://github.com/tinkoff/taiga-ui/issues/3267))
  ([07d0aac](https://github.com/tinkoff/taiga-ui/commit/07d0aac5a9029caec63b298773b03eb2697d60c6))
- **addon-editor:** support hilite groups ([#3283](https://github.com/tinkoff/taiga-ui/issues/3283))
  ([c632052](https://github.com/tinkoff/taiga-ui/commit/c632052754ac3c2513b36ec3828d36ec72d0b66c))
- **addon-table:** add items to `TUI_TABLE_PAGINATION_OPTIONS` token
  ([#3276](https://github.com/tinkoff/taiga-ui/issues/3276))
  ([5dbdae0](https://github.com/tinkoff/taiga-ui/commit/5dbdae071af013c51a678dc85b29d08c1cdf4433))
- **cdk:** `Schematics` add root path option ([#3274](https://github.com/tinkoff/taiga-ui/issues/3274))
  ([00a0e4d](https://github.com/tinkoff/taiga-ui/commit/00a0e4d7d8c467db705b59435bef312583e77e9d))
- **core:** `tuiDropdownSidedOffset` add new input ([#3345](https://github.com/tinkoff/taiga-ui/issues/3345))
  ([0215211](https://github.com/tinkoff/taiga-ui/commit/02152111dc55021b88bb7f9bce0eb4580bce772c))
- **core:** dynamic switch view of calendar when value changes
  ([#3337](https://github.com/tinkoff/taiga-ui/issues/3337))
  ([bc05066](https://github.com/tinkoff/taiga-ui/commit/bc050662ff20b27d0cbc9658fa52bc58739ae505))
- **core:** replace `TUI_DROPDOWN_OFFSET` with injection token
  ([#3141](https://github.com/tinkoff/taiga-ui/issues/3141))
  ([a126af0](https://github.com/tinkoff/taiga-ui/commit/a126af04e22da277182989fef57bb4629c53f798))
- **kit:** `InputTag` add max number of rows for `expandable` mode
  ([#3339](https://github.com/tinkoff/taiga-ui/issues/3339))
  ([82d2679](https://github.com/tinkoff/taiga-ui/commit/82d2679888c2fa1a2bc3a75e9e0513cde6576256))
- **kit:** add `showDelete` input prop for `TuiFileComponent` ([#3342](https://github.com/tinkoff/taiga-ui/issues/3342))
  ([67c40f3](https://github.com/tinkoff/taiga-ui/commit/67c40f374d88fd766e1ee52085c653070200969f))
- **kit:** support empty value in `InputCount` ([#3317](https://github.com/tinkoff/taiga-ui/issues/3317))
  ([a1e112b](https://github.com/tinkoff/taiga-ui/commit/a1e112b7c7e632bcfea4cb98c9f8254376bdbb72))

### Bug Fixes

- **addon-table:** export `TuiTablePagination` ([#3331](https://github.com/tinkoff/taiga-ui/issues/3331))
  ([e93cda3](https://github.com/tinkoff/taiga-ui/commit/e93cda32ec30d065f021e191c352bfd25fd20bcc))
- **core:** `DropdownContext` fix nested dropdowns ([#3288](https://github.com/tinkoff/taiga-ui/issues/3288))
  ([6fca3d4](https://github.com/tinkoff/taiga-ui/commit/6fca3d43ac7d8111aaf65744beac80f0e17fd670))
- **core:** fix overlapping prefix and value when resizing textfield
  ([#3316](https://github.com/tinkoff/taiga-ui/issues/3316))
  ([97999e6](https://github.com/tinkoff/taiga-ui/commit/97999e6c82987bf1453f92599564f5bf1dfa531f))
- **kit:** `Accordion` fix incorrectly focusing item ([#3289](https://github.com/tinkoff/taiga-ui/issues/3289))
  ([a81b132](https://github.com/tinkoff/taiga-ui/commit/a81b1321f1861afd9d2a4e1fdbd39161836f7ac6))
- **kit:** `NativeSelect` fix readonly state ([#3347](https://github.com/tinkoff/taiga-ui/issues/3347))
  ([ab9a266](https://github.com/tinkoff/taiga-ui/commit/ab9a266a4c2234512495050546f3d9a2b60918f5))
- **kit:** fix reopening nested dropdown ([#3263](https://github.com/tinkoff/taiga-ui/issues/3263))
  ([f08f1aa](https://github.com/tinkoff/taiga-ui/commit/f08f1aaa3cf5883966798909c120ea554b282bba))
- **testing:** skip unavailable cell for calendar ([#3334](https://github.com/tinkoff/taiga-ui/issues/3334))
  ([fe80197](https://github.com/tinkoff/taiga-ui/commit/fe80197e1fa7651a713104bcecaff1670e12b665))

## [3.14.0](https://github.com/tinkoff/taiga-ui/compare/v3.13.0...v3.14.0) (2022-12-19)

### Features

- **cdk:** `Resizer` add new directive ([#3248](https://github.com/tinkoff/taiga-ui/issues/3248))
  ([121e977](https://github.com/tinkoff/taiga-ui/commit/121e9775c3fe2b9ba0538fa1b9ebaed9fedc265d))
- **cdk:** add `--tui-backdrop` variable for dialog overlay ([#3251](https://github.com/tinkoff/taiga-ui/issues/3251))
  ([ebe2d80](https://github.com/tinkoff/taiga-ui/commit/ebe2d8024cf36dd52c0769e349db905263a46b09))
- **core:** `TextfieldController` add prefix, postfix and filler
  ([#3188](https://github.com/tinkoff/taiga-ui/issues/3188))
  ([75276fb](https://github.com/tinkoff/taiga-ui/commit/75276fb79ec5380bdd3428ff4c3861bd538cf439))
- **kit:** `ItemsWithMore` add new component ([#3230](https://github.com/tinkoff/taiga-ui/issues/3230))
  ([de63d7b](https://github.com/tinkoff/taiga-ui/commit/de63d7b056534320b1cc37aa452c5682ed7d5e76))
- **kit:** `SortCountries` add pipe for `InputPhoneInternational`
  ([#3257](https://github.com/tinkoff/taiga-ui/issues/3257))
  ([ffb6cd1](https://github.com/tinkoff/taiga-ui/commit/ffb6cd17972efbadd0c17041989487f0e0c88ac6))
- **kit:** `TextArea` support `s` size, fix `m` font and padding
  ([#3242](https://github.com/tinkoff/taiga-ui/issues/3242))
  ([cdb9c05](https://github.com/tinkoff/taiga-ui/commit/cdb9c052257301e79cc55876f3db901fc3661872))

### Bug Fixes

- **cdk:** share a single subscription to the underlying source observable between multiple subscribers
  ([#3174](https://github.com/tinkoff/taiga-ui/issues/3174))
  ([6ee6f50](https://github.com/tinkoff/taiga-ui/commit/6ee6f501882883f3c1bc11ec469d19f47a38ef56))
- **kit:** `File` fix background ([#3247](https://github.com/tinkoff/taiga-ui/issues/3247))
  ([9300260](https://github.com/tinkoff/taiga-ui/commit/93002604c05deb1c06f9d7022d97403f108a8a1f))
- **schematics:** exclude popular hidden directories ([#3252](https://github.com/tinkoff/taiga-ui/issues/3252))
  ([6ea575e](https://github.com/tinkoff/taiga-ui/commit/6ea575e3c3cd57341d2cd5614512916a518ca8d9))

## [3.13.0](https://github.com/tinkoff/taiga-ui/compare/v3.12.1...v3.13.0) (2022-12-12)

### Features

- **addon-table:** add paginationChange event ([#3105](https://github.com/tinkoff/taiga-ui/issues/3105))
  ([453c65f](https://github.com/tinkoff/taiga-ui/commit/453c65ff262aa687da375fd3a5f8a019f85bc7e9))
- **kit:** use `tuiIconClose` for size `s` ([#3192](https://github.com/tinkoff/taiga-ui/issues/3192))
  ([a80c85d](https://github.com/tinkoff/taiga-ui/commit/a80c85d4c277fdae1024e33e1d3639ab2bb32c5b))

### Bug Fixes

- **addon-tablebars:** fixed close button in table bar ([#3184](https://github.com/tinkoff/taiga-ui/issues/3184))
  ([bf5d6bd](https://github.com/tinkoff/taiga-ui/commit/bf5d6bd518a7fc83e29d0e8401dd21c41abd407d))
- **addon-table:** don't update direction order when updating sorter programmatically
  ([#3196](https://github.com/tinkoff/taiga-ui/issues/3196))
  ([0197d56](https://github.com/tinkoff/taiga-ui/commit/0197d5617acf55f2c80ea536b8e3eed060c0ac5c))
- **core:** `DataList` fix default size ([#3217](https://github.com/tinkoff/taiga-ui/issues/3217))
  ([9ab7a53](https://github.com/tinkoff/taiga-ui/commit/9ab7a53e40ef286cc251fdc68f13c1fc229e3733))
- **core:** `Dropdown` fix change detection inside dialogs ([#3200](https://github.com/tinkoff/taiga-ui/issues/3200))
  ([74df80d](https://github.com/tinkoff/taiga-ui/commit/74df80dd302c0fa8fdabfcaf063d2d99cc18c815))
- **i18n:** fix dutch translations for `multiSelectTexts` ([#3211](https://github.com/tinkoff/taiga-ui/issues/3211))
  ([41cb92e](https://github.com/tinkoff/taiga-ui/commit/41cb92eacda9ffbab5503c6bad3a6ef73ace6ebb))
- **kit:** `Tiles` fix handle inside Shadow DOM ([#3216](https://github.com/tinkoff/taiga-ui/issues/3216))
  ([35e5399](https://github.com/tinkoff/taiga-ui/commit/35e5399a47c12fb521456f2628b620c487fb89d7))

### [3.12.1](https://github.com/tinkoff/taiga-ui/compare/v3.12.0...v3.12.1) (2022-12-08)

### Bug Fixes

- **addon-commerce:** truncate float values without rounding ([#3176](https://github.com/tinkoff/taiga-ui/issues/3176))
  ([70e6887](https://github.com/tinkoff/taiga-ui/commit/70e6887fdb2dfaf0267f0362a6716a66751341a2))
- **i18n:** fix french `TUI_COUNTRIES_MASKS` should accept numbers without leading 0
  ([#3191](https://github.com/tinkoff/taiga-ui/issues/3191))
  ([11ee5ed](https://github.com/tinkoff/taiga-ui/commit/11ee5edfab20f09eec92a2604dcf8b7538d63e14))
- **kit:** `InputFiles` fix style encapsulation issue ([#3194](https://github.com/tinkoff/taiga-ui/issues/3194))
  ([cd907c0](https://github.com/tinkoff/taiga-ui/commit/cd907c0bc9b4c5a27605c6adf09309b14b85d35b))

## [3.12.0](https://github.com/tinkoff/taiga-ui/compare/v3.11.0...v3.12.0) (2022-12-05)

### Features

- **cdk:** `Schematics` migration multiple projects ([#3144](https://github.com/tinkoff/taiga-ui/issues/3144))
  ([cf25f6a](https://github.com/tinkoff/taiga-ui/commit/cf25f6a9ba142b25a6f6db4bd1034e8fe6aa5fe0))
- **cdk:** support `SafeHtml` input value in `tui-svg` ([#3166](https://github.com/tinkoff/taiga-ui/issues/3166))
  ([aad787b](https://github.com/tinkoff/taiga-ui/commit/aad787b76e662b49c44b3c62ab4202a9f2ffdab7))
- **kit:** avatar now accepts `SafeResourceUrl` as `avatarUrl`
  ([#3149](https://github.com/tinkoff/taiga-ui/issues/3149))
  ([d4bdf64](https://github.com/tinkoff/taiga-ui/commit/d4bdf64fd05f6dc58620fbb4159d158f822e2f37))

### Bug Fixes

- **addon-charts:** `Bar`, `BarSet` fix color getter ([#3148](https://github.com/tinkoff/taiga-ui/issues/3148))
  ([e7c517c](https://github.com/tinkoff/taiga-ui/commit/e7c517cfc94d2be3b77900d124e2bf7f5a32c828))
- **addon-editor:** allow paste base64 image ([#3138](https://github.com/tinkoff/taiga-ui/issues/3138))
  ([4222293](https://github.com/tinkoff/taiga-ui/commit/42222934708aa72139feb263ef926269ae595d6c))
- **addon-table:** `Reorder` fix wrong order when toggling visibility
  ([#3145](https://github.com/tinkoff/taiga-ui/issues/3145))
  ([0e7eb9b](https://github.com/tinkoff/taiga-ui/commit/0e7eb9b09a06f5e8b2154028bbd8852c3a1b660b))
- **cdk:** add `tuiControlValue` to schematic ([#3137](https://github.com/tinkoff/taiga-ui/issues/3137))
  ([465f834](https://github.com/tinkoff/taiga-ui/commit/465f834b1062496342f0eee5d405bca45cb32ac2))
- **kit:** `InputPhone` cut value by max phone length ([#3160](https://github.com/tinkoff/taiga-ui/issues/3160))
  ([67d80fc](https://github.com/tinkoff/taiga-ui/commit/67d80fc345918b9f13b727d1872b54ddd0880cfc))
- **kit:** `Range` broken alignment + artifact line before track
  ([#3136](https://github.com/tinkoff/taiga-ui/issues/3136))
  ([17dd30b](https://github.com/tinkoff/taiga-ui/commit/17dd30ba396f7ece9b0a45664cb01448bd0ebb69))
- **kit:** `Tiles` remove binding with JS to allow media query control
  ([#3164](https://github.com/tinkoff/taiga-ui/issues/3164))
  ([91e9f5f](https://github.com/tinkoff/taiga-ui/commit/91e9f5f230702ef564b70bcd6d3a443fd7846f45))
- **kit:** `Tiles` switch to CSS `order` to prevent DOM redraw
  ([#3170](https://github.com/tinkoff/taiga-ui/issues/3170))
  ([e90da1d](https://github.com/tinkoff/taiga-ui/commit/e90da1d82e11b71f0556158d4d681aebaef1160e))
- **kit:** Add missing `TUI_COUNTRIES_MASKS` for Overseas France
  ([#3112](https://github.com/tinkoff/taiga-ui/issues/3112))
  ([8c2a1c9](https://github.com/tinkoff/taiga-ui/commit/8c2a1c9540cc745ca4e4c62d2a7654df03737e7b))
- **kit:** fixed label text align for input files ([#3156](https://github.com/tinkoff/taiga-ui/issues/3156))
  ([699d473](https://github.com/tinkoff/taiga-ui/commit/699d47397d0b97d64e6f4adedadbd3424e9e2a05))

## [3.11.0](https://github.com/tinkoff/taiga-ui/compare/v3.10.0...v3.11.0) (2022-11-28)

### Features

- **kit:** `Tiles` add component ([#3124](https://github.com/tinkoff/taiga-ui/issues/3124))
  ([6facd5a](https://github.com/tinkoff/taiga-ui/commit/6facd5a80f793991edd79e0348e67f14d091de67))
- **kit:** support capture in input files ([#3065](https://github.com/tinkoff/taiga-ui/issues/3065))
  ([64d212c](https://github.com/tinkoff/taiga-ui/commit/64d212c120dd628b96fb051f15c654303cdd8c83))
- **testing:** calendar harness test ([#3058](https://github.com/tinkoff/taiga-ui/issues/3058))
  ([cfdb866](https://github.com/tinkoff/taiga-ui/commit/cfdb866b6bc74bf357af539ecc2cf6ec05acf877))

### Bug Fixes

- **addon-charts:** remove location origin from mask ([#3125](https://github.com/tinkoff/taiga-ui/issues/3125))
  ([eaaa1fa](https://github.com/tinkoff/taiga-ui/commit/eaaa1fa112dd487167d954c8ee0375cd27c1bfe3))
- **core:** `Dropdown` fix direction set with binding ([#3084](https://github.com/tinkoff/taiga-ui/issues/3084))
  ([866675e](https://github.com/tinkoff/taiga-ui/commit/866675e3d95ae951ceff28e728f0ebc7d1a7098e))
- **i18n:** fix vietnamese ([#3115](https://github.com/tinkoff/taiga-ui/issues/3115))
  ([9ae15c7](https://github.com/tinkoff/taiga-ui/commit/9ae15c7f4387c1ee5e378414cbe808c6d697ab31))
- **kit:** `Input` fix mask ([#3107](https://github.com/tinkoff/taiga-ui/issues/3107))
  ([9d721e1](https://github.com/tinkoff/taiga-ui/commit/9d721e1740e0597ae498b322884d2462d264af6d))
- **kit:** `Stepper` fix gap according to design spec ([#3095](https://github.com/tinkoff/taiga-ui/issues/3095))
  ([aafd26e](https://github.com/tinkoff/taiga-ui/commit/aafd26ebb90dd3c4d81863fa6d1d78d1b1434bf0))
- **kit:** `Stepper` scroll to active step when activeItemIndex changes
  ([#3080](https://github.com/tinkoff/taiga-ui/issues/3080))
  ([235100e](https://github.com/tinkoff/taiga-ui/commit/235100e01fcdb7e019a6a1ce93eadc89506253bf))
- **kit:** correct default active month based on `min/max` ([#3092](https://github.com/tinkoff/taiga-ui/issues/3092))
  ([e1668e7](https://github.com/tinkoff/taiga-ui/commit/e1668e7d85e91c20bc2e7eaeddeed3098ec239d2))

## [3.10.0](https://github.com/tinkoff/taiga-ui/compare/v3.9.0...v3.10.0) (2022-11-16)

### Features

- **addon-editor:** improve ux for edit links ([#3008](https://github.com/tinkoff/taiga-ui/issues/3008))
  ([b432f04](https://github.com/tinkoff/taiga-ui/commit/b432f0433049ecb36e76ae34691796d34dff6033))
- **addon-editor:** support attach files ([#3056](https://github.com/tinkoff/taiga-ui/issues/3056))
  ([7a3fbad](https://github.com/tinkoff/taiga-ui/commit/7a3fbad244df4e7905ac0f784857d162878e4a4c))
- **addon-editor:** support nested counters in ordered list ([#3012](https://github.com/tinkoff/taiga-ui/issues/3012))
  ([1fc6ee6](https://github.com/tinkoff/taiga-ui/commit/1fc6ee69358f3226916559d436a661398f60ccdb))
- **addon-editor:** upgrade all tiptap dependencies ([#3001](https://github.com/tinkoff/taiga-ui/issues/3001))
  ([c0ba4e3](https://github.com/tinkoff/taiga-ui/commit/c0ba4e3b8748ad46f9569251eac7fb6099cd7d3b))
- **cdk:** implement `tuiIsPresent` pipe ([#3002](https://github.com/tinkoff/taiga-ui/issues/3002))
  ([db4a29b](https://github.com/tinkoff/taiga-ui/commit/db4a29bf617b574815db7df13ffc319f1208dd35))
- **core:** `DataList` add `size` input, deprecate `size` for `Option`
  ([#3071](https://github.com/tinkoff/taiga-ui/issues/3071))
  ([765ea01](https://github.com/tinkoff/taiga-ui/commit/765ea0129d1984d51700712395c18ac6d5ab6a71))
- **core:** `HostedDropdown` add `sided` input and `close` method to context
  ([#3060](https://github.com/tinkoff/taiga-ui/issues/3060))
  ([60bd0db](https://github.com/tinkoff/taiga-ui/commit/60bd0dbc65af2bbd4f8562c1addefa1163e1a172))
- **core:** change underline color for today cell in calendar ([#3037](https://github.com/tinkoff/taiga-ui/issues/3037))
  ([331158a](https://github.com/tinkoff/taiga-ui/commit/331158a78bcf0794d1effe04a23ff4b7a3d8832d))
- **testing:** accordion harness test ([#3018](https://github.com/tinkoff/taiga-ui/issues/3018))
  ([5905545](https://github.com/tinkoff/taiga-ui/commit/590554541d16f11d9241f5641ce2c5c582338fe1))
- **testing:** avatar harness test ([#3019](https://github.com/tinkoff/taiga-ui/issues/3019))
  ([970e1d0](https://github.com/tinkoff/taiga-ui/commit/970e1d08f1584ef279abafd7621b398130cd0a9d))

### Bug Fixes

- **addon-commerce:** `InputExpire` fix translation in safari ([#3043](https://github.com/tinkoff/taiga-ui/issues/3043))
  ([1a258c5](https://github.com/tinkoff/taiga-ui/commit/1a258c50960ee65745791367ea564c917a0e9e25))
- **addon-commerce:** fix safari expire autofill ([#3015](https://github.com/tinkoff/taiga-ui/issues/3015))
  ([c2aac4b](https://github.com/tinkoff/taiga-ui/commit/c2aac4b2ad5ede251da8b8fb1a66d8d8be70bb61))
- **addon-doc:** scroll to last element in DOM if there are several
  ([#3040](https://github.com/tinkoff/taiga-ui/issues/3040))
  ([883db38](https://github.com/tinkoff/taiga-ui/commit/883db38ac63aad27e72819838bbf75afac023986))
- **addon-editor:** support long words inside bulleted or ordered list
  ([#3038](https://github.com/tinkoff/taiga-ui/issues/3038))
  ([c93ae27](https://github.com/tinkoff/taiga-ui/commit/c93ae2781367565cf36455c268a3f7cc8f207696))
- **addon-editor:** support write simple text after marked link
  ([#3021](https://github.com/tinkoff/taiga-ui/issues/3021))
  ([a2f0123](https://github.com/tinkoff/taiga-ui/commit/a2f01236e6df6974e8bf31315ac3b40bccb5135a))
- **core:** `Dialog` fix padding ([#3009](https://github.com/tinkoff/taiga-ui/issues/3009))
  ([0a68461](https://github.com/tinkoff/taiga-ui/commit/0a68461150e1e95564fe99e4a7bb86d9d018d0fa))
- **core:** hide autofill button for Safari ([#3061](https://github.com/tinkoff/taiga-ui/issues/3061))
  ([27a6aa2](https://github.com/tinkoff/taiga-ui/commit/27a6aa24205c1cb42a8eb88f872c624a946d1822))
- **eslint-plugin:** broken `no-deep-imports` on `Windows`-OS ([#3053](https://github.com/tinkoff/taiga-ui/issues/3053))
  ([a3451c2](https://github.com/tinkoff/taiga-ui/commit/a3451c28a809b1ad2afc32d13cfa7288bf4cc253))
- **i18n:** fix french translations ([#3017](https://github.com/tinkoff/taiga-ui/issues/3017))
  ([2afc420](https://github.com/tinkoff/taiga-ui/commit/2afc4207866f1afd3f71dfd82458e866f430a68e))
- **kit:** icon in date-related components occupies space when hidden
  ([#2966](https://github.com/tinkoff/taiga-ui/issues/2966))
  ([27c2d79](https://github.com/tinkoff/taiga-ui/commit/27c2d79a7d1313a4372d04b5bfe93ba2f98afe2f))

## [3.9.0](https://github.com/tinkoff/taiga-ui/compare/v3.8.0...v3.9.0) (2022-10-31)

### Features

- **addon-editor:** add anchor extension ([#2931](https://github.com/tinkoff/taiga-ui/issues/2931))
  ([1e3a22a](https://github.com/tinkoff/taiga-ui/commit/1e3a22a6c245f5fd1a7eaa57547b7b0182d94175))
- **cdk:** `ScrollService` support `Window` ([#2955](https://github.com/tinkoff/taiga-ui/issues/2955))
  ([ccac3c0](https://github.com/tinkoff/taiga-ui/commit/ccac3c02d463c2186a240316ab36006aae8435fc))
- **core:** `DataList` update styles ([#2949](https://github.com/tinkoff/taiga-ui/issues/2949))
  ([3c219c1](https://github.com/tinkoff/taiga-ui/commit/3c219c1c39de08ced81e42fe29845e60322b7df7))
- **kit:** `Avatar`, `MarkerIcon` synchronize sizes ([#2975](https://github.com/tinkoff/taiga-ui/issues/2975))
  ([ebb8676](https://github.com/tinkoff/taiga-ui/commit/ebb8676e24cf99761e63d161862177e9321842b6))
- **kit:** `Select` add ability to use native select on mobile
  ([#2964](https://github.com/tinkoff/taiga-ui/issues/2964))
  ([c909bec](https://github.com/tinkoff/taiga-ui/commit/c909bec49bda91c83744c4295242c8b4a8990026))
- **kit:** add tokens for customizing different bundled dialogs
  ([#2490](https://github.com/tinkoff/taiga-ui/issues/2490))
  ([66e1aca](https://github.com/tinkoff/taiga-ui/commit/66e1acaaf8be5c10e8ba37f1708fdacb57eafe08))

### Bug Fixes

- **addon-editor:** support original order of colors in palette
  ([#2986](https://github.com/tinkoff/taiga-ui/issues/2986))
  ([0c869ca](https://github.com/tinkoff/taiga-ui/commit/0c869caaedff6242f336b3d8475e4c5d7f6b1550))
- **addon-editor:** support overflow content of table ([#2985](https://github.com/tinkoff/taiga-ui/issues/2985))
  ([89af6a9](https://github.com/tinkoff/taiga-ui/commit/89af6a91082795834e2d8b160c1894800980a259))
- **cdk:** add wrapper style migration ([#2971](https://github.com/tinkoff/taiga-ui/issues/2971))
  ([2f736a1](https://github.com/tinkoff/taiga-ui/commit/2f736a1b02da1120c11989356a4759a02109ebc9))
- **eslint-plugin:** fix incorrect project name search ([#2962](https://github.com/tinkoff/taiga-ui/issues/2962))
  ([dfbb09e](https://github.com/tinkoff/taiga-ui/commit/dfbb09eb0d1bbfdf3c3c94ce1ac922366aceb532))

## [3.8.0](https://github.com/tinkoff/taiga-ui/compare/v3.7.1...v3.8.0) (2022-10-24)

### Features

- **core:** `Button` add padding customization ([#2932](https://github.com/tinkoff/taiga-ui/issues/2932))
  ([91c1b81](https://github.com/tinkoff/taiga-ui/commit/91c1b81b57f5768dca877588e964fee53af8a90a))
- **core:** `PrimitiveCalendar` add ability to change the color of the days
  ([#2904](https://github.com/tinkoff/taiga-ui/issues/2904))
  ([3a14454](https://github.com/tinkoff/taiga-ui/commit/3a144547e0da3d5d8f33640b991fea39fd944fd9))
- **core:** disable smooth scrolling when users have prefers-reduced-motion enabled
  ([#2943](https://github.com/tinkoff/taiga-ui/issues/2943))
  ([05027f4](https://github.com/tinkoff/taiga-ui/commit/05027f451caed201e7e907677bc0e0fc621612e1))
- **core:** update shadows styles ([#2933](https://github.com/tinkoff/taiga-ui/issues/2933))
  ([37144b5](https://github.com/tinkoff/taiga-ui/commit/37144b526e2d5c1279b2e74026aea3993089e447))
- **icons:** add `tuiIconAnchorLarge` ([#2944](https://github.com/tinkoff/taiga-ui/issues/2944))
  ([1e28581](https://github.com/tinkoff/taiga-ui/commit/1e28581b376aa4b8751428ddfefc5879f34c3d57))
- **kit:** `InputYear` add new component ([#2919](https://github.com/tinkoff/taiga-ui/issues/2919))
  ([214fc30](https://github.com/tinkoff/taiga-ui/commit/214fc30a0d71ee0031860a1e26abf433ee2fcbb0))
- **testing:** add harness class for toggle component ([#2939](https://github.com/tinkoff/taiga-ui/issues/2939))
  ([3dd08ce](https://github.com/tinkoff/taiga-ui/commit/3dd08ce321bca9b80f3f62dd76026061ed3de5c7))

### Bug Fixes

- **cdk:** `schematics` always install styles package when migrating
  ([#2922](https://github.com/tinkoff/taiga-ui/issues/2922))
  ([52feffd](https://github.com/tinkoff/taiga-ui/commit/52feffdd817fd53b5ec7421d320e208023824d8b))
- **core:** fix notification padding and background color ([#2937](https://github.com/tinkoff/taiga-ui/issues/2937))
  ([4ef310d](https://github.com/tinkoff/taiga-ui/commit/4ef310d0454456d5081b4a6e7300b66c35299e9d))
- **kit:** `InputTag` fix pasting behaviour ([#2936](https://github.com/tinkoff/taiga-ui/issues/2936))
  ([cd5d309](https://github.com/tinkoff/taiga-ui/commit/cd5d3096497f59ea9c1da7282124d3760e65b82e))
- **kit:** `MarkerIcon` only show hover state for interactive elements
  ([#2950](https://github.com/tinkoff/taiga-ui/issues/2950))
  ([90da7d5](https://github.com/tinkoff/taiga-ui/commit/90da7d5bc93a393b8ae5718f5f92d2db37d30ecb))
- **kit:** `TextArea` fix height for size `m` ([#2952](https://github.com/tinkoff/taiga-ui/issues/2952))
  ([e17346d](https://github.com/tinkoff/taiga-ui/commit/e17346d9b51426e92b9e460a01955955b19c9d48))

### [3.7.1](https://github.com/tinkoff/taiga-ui/compare/v3.7.0...v3.7.1) (2022-10-18)

### Bug Fixes

- **addon-editor:** revert some breaking packages ([#2920](https://github.com/tinkoff/taiga-ui/issues/2920))
  ([48e3597](https://github.com/tinkoff/taiga-ui/commit/48e3597181aed9fcd19df9eda5f0bdb965e3ce6d))

## [3.7.0](https://github.com/tinkoff/taiga-ui/compare/v3.6.0...v3.7.0) (2022-10-18)

### Features

- **addon-editor:** upgrade `@tiptap/*` to latest ([#2855](https://github.com/tinkoff/taiga-ui/issues/2855))
  ([79e14c8](https://github.com/tinkoff/taiga-ui/commit/79e14c8d93abb7a7a5986f447d168156798ad893))
- **demo:** stackblitz starter available via `https://taiga-ui.dev/stackblitz`
  ([#2907](https://github.com/tinkoff/taiga-ui/issues/2907))
  ([71225b0](https://github.com/tinkoff/taiga-ui/commit/71225b0619c8c54253dafcb0c82c5c8869711904))
- **kit:** `ProgressBar` add `:indeterminate`-state ([#2876](https://github.com/tinkoff/taiga-ui/issues/2876))
  ([e311069](https://github.com/tinkoff/taiga-ui/commit/e3110694a2a9af0d7a3201daf29dc1a7b92351b2))
- **kit:** `Tabs` add vertical option ([#2862](https://github.com/tinkoff/taiga-ui/issues/2862))
  ([a0513c8](https://github.com/tinkoff/taiga-ui/commit/a0513c8f4d23466406f6d5f2dd46740db00d7bf1))
- **testing:** add harness tests for tag component ([#2746](https://github.com/tinkoff/taiga-ui/issues/2746))
  ([fb12283](https://github.com/tinkoff/taiga-ui/commit/fb12283ebe4abbea910a355f30b7b9a9811e1d1e))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix wrong offset for card number
  ([#2878](https://github.com/tinkoff/taiga-ui/issues/2878))
  ([c387fb2](https://github.com/tinkoff/taiga-ui/commit/c387fb288bd5c73c9a42d62c6b207f43ec8f7223))
- **addon-editor:** downgrade `@tiptap/extension-table` ([#2888](https://github.com/tinkoff/taiga-ui/issues/2888))
  ([93b0ed6](https://github.com/tinkoff/taiga-ui/commit/93b0ed66982d949e8b5cca204052f49e4a98db5d))
- **addon-table:** `Table` don't render column with unspecified template
  ([#2896](https://github.com/tinkoff/taiga-ui/issues/2896))
  ([526c40a](https://github.com/tinkoff/taiga-ui/commit/526c40a760fe72624bafd056e9bac17223e6248b))
- **core:** `DataList` fix first label padding ([#2870](https://github.com/tinkoff/taiga-ui/issues/2870))
  ([1988491](https://github.com/tinkoff/taiga-ui/commit/1988491739d53980991091bc34809374501a9a1b))
- **core:** `Hint` fix mobile offscreen overflow ([#2879](https://github.com/tinkoff/taiga-ui/issues/2879))
  ([5d606b3](https://github.com/tinkoff/taiga-ui/commit/5d606b3bca6ab6504035065935563af4410a4ac1))
- **core:** `TUI_FIRST_DAY_OF_WEEK` ignores DI-hierarchy ([#2868](https://github.com/tinkoff/taiga-ui/issues/2868))
  ([169cd5c](https://github.com/tinkoff/taiga-ui/commit/169cd5c30e80e91dba141d0af948aae034d09264))
- **docs:** Typo in the description of the tuiTextfieldMaxLength attribute
  ([#2882](https://github.com/tinkoff/taiga-ui/issues/2882))
  ([00ec432](https://github.com/tinkoff/taiga-ui/commit/00ec4327acf399e086a41674955589711e442980))
- **kit:** `MultiSelect` fix sanitizer warnings ([#2903](https://github.com/tinkoff/taiga-ui/issues/2903))
  ([0356d7d](https://github.com/tinkoff/taiga-ui/commit/0356d7d09716b65040c08867bef76c02ea267e7a))
- **kit:** `TextArea` add ability to override minHeight when using maxLength
  ([#2899](https://github.com/tinkoff/taiga-ui/issues/2899))
  ([7292a70](https://github.com/tinkoff/taiga-ui/commit/7292a709f8df4a3b41d729f6a66b4bb706d3649f))
- **styles:** put tui-island_transparent after tui-island_hoverable
  ([#2910](https://github.com/tinkoff/taiga-ui/issues/2910))
  ([833e4de](https://github.com/tinkoff/taiga-ui/commit/833e4de327a629045c4de91dd303cd82c9decba4))

### Deprecations

- **addon-table:** `*tuiRow` deprecation (use `*ngFor` + `tuiTableSort`-pipe)
  ([#2736](https://github.com/tinkoff/taiga-ui/issues/2736))
  ([5723e1b](https://github.com/tinkoff/taiga-ui/commit/5723e1b3f4569ad494d326ed3bd852d7e9156743))

## [3.6.0](https://github.com/tinkoff/taiga-ui/compare/v3.5.0...v3.6.0) (2022-10-11)

### Features

- **addon-table:** add `TuiDirectionOrderDirective` to sort by order
  ([#2782](https://github.com/tinkoff/taiga-ui/issues/2782))
  ([962084a](https://github.com/tinkoff/taiga-ui/commit/962084a36a9504166a47c45c4bce0f46324573f7))
- **kit:** `Avatar` add stacking option ([#2811](https://github.com/tinkoff/taiga-ui/issues/2811))
  ([0264b38](https://github.com/tinkoff/taiga-ui/commit/0264b388a43c916a1409ec187ba77754257188c5))
- **kit:** `Avatar` allow Taiga UI icons ([#2824](https://github.com/tinkoff/taiga-ui/issues/2824))
  ([cfa5ead](https://github.com/tinkoff/taiga-ui/commit/cfa5ead78c2c60c6bb469843b0272a3a882eaed6))
- **kit:** `Badge` add overflow elipsis and title ([#2806](https://github.com/tinkoff/taiga-ui/issues/2806))
  ([02713d6](https://github.com/tinkoff/taiga-ui/commit/02713d63ebfd7290420df66d37b5919db9138c3c))
- **kit:** `Carousel` allow vertical alignment control ([#2814](https://github.com/tinkoff/taiga-ui/issues/2814))
  ([36d3c6f](https://github.com/tinkoff/taiga-ui/commit/36d3c6f019e61203e021d6c7854c9cdc7559286b))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` add options DI token for custom icons
  ([#2785](https://github.com/tinkoff/taiga-ui/issues/2785))
  ([0fe5d5b](https://github.com/tinkoff/taiga-ui/commit/0fe5d5b7197ee435e64cea2155ff296e9a046c30))
- **kit:** `InputMonth`, `InputMonthRange` add options DI token
  ([#2840](https://github.com/tinkoff/taiga-ui/issues/2840))
  ([217d670](https://github.com/tinkoff/taiga-ui/commit/217d670a2df74139b76a047302558a07fa70bc43))

### Bug Fixes

- **addon-doc:** misaligned column fix ([#2815](https://github.com/tinkoff/taiga-ui/issues/2815))
  ([783f59c](https://github.com/tinkoff/taiga-ui/commit/783f59c4e78215d277e882a4f986daacf5ed46b8))
- **addon-editor:** edit link modal shouldn't overlap content ([#2803](https://github.com/tinkoff/taiga-ui/issues/2803))
  ([7f8643a](https://github.com/tinkoff/taiga-ui/commit/7f8643adc5ef562a63276ab9771ee3584c2c7477))
- **addon-editor:** normalize h1-h6 heading in editor socket ([#2808](https://github.com/tinkoff/taiga-ui/issues/2808))
  ([c8ff2d2](https://github.com/tinkoff/taiga-ui/commit/c8ff2d2d197802c3aa711e29f2d23270b29ee80c))
- **addon-editor:** removing all `!important` styles ([#2798](https://github.com/tinkoff/taiga-ui/issues/2798))
  ([a59afe8](https://github.com/tinkoff/taiga-ui/commit/a59afe8bddc1a084c819fb6389612b3fdbe2029e))
- **addon-editor:** support nested ordered list inside a bullet list
  ([#2805](https://github.com/tinkoff/taiga-ui/issues/2805))
  ([340ebdc](https://github.com/tinkoff/taiga-ui/commit/340ebdc4877d8a10fee83b71d0c2d4fe0557aede))
- **addon-editor:** use `starterKit` only from custom extension
  ([#2845](https://github.com/tinkoff/taiga-ui/issues/2845))
  ([98311f8](https://github.com/tinkoff/taiga-ui/commit/98311f877c3136eb6438d5b84e02f3dde91dce28))
- **cdk:** `Obscured` fix for SSR ([#2835](https://github.com/tinkoff/taiga-ui/issues/2835))
  ([6b69efb](https://github.com/tinkoff/taiga-ui/commit/6b69efba4e1dad508f9f835b2d5928d1fce8ace7))
- **cdk:** `schematics` error `Cannot read property 'getInitializer' of undefined`
  ([#2828](https://github.com/tinkoff/taiga-ui/issues/2828))
  ([8d5f40b](https://github.com/tinkoff/taiga-ui/commit/8d5f40bff6d17cc5bd35f98e412c5a6c22a50fa0))
- **kit:** `MultiSelect` fix overflow issues ([#2847](https://github.com/tinkoff/taiga-ui/issues/2847))
  ([372410e](https://github.com/tinkoff/taiga-ui/commit/372410e4a6057e3fd09b390abf71fee25e4bd629))
- **kit:** `RadioLabeled` fix disabled label style ([#2842](https://github.com/tinkoff/taiga-ui/issues/2842))
  ([001c0ad](https://github.com/tinkoff/taiga-ui/commit/001c0ad208d33477156038c14faf90e3ddb58c92))
- **styles:** move required styles from `styles` package to tui-root
  ([#2854](https://github.com/tinkoff/taiga-ui/issues/2854))
  ([033960d](https://github.com/tinkoff/taiga-ui/commit/033960de23f90f516f810e76a07d37271b6390cd))
- **styles:** pseudo elements `:after` aren't removed in Safari 16
  ([#2825](https://github.com/tinkoff/taiga-ui/issues/2825))
  ([fdab37a](https://github.com/tinkoff/taiga-ui/commit/fdab37ac0ac27dd7836b23691cc463165d6eb70b))

## [3.5.0](https://github.com/tinkoff/taiga-ui/compare/v3.4.0...v3.5.0) (2022-10-03)

### Features

- **addon-charts:** `BarSet` add label ([#2780](https://github.com/tinkoff/taiga-ui/issues/2780))
  ([d4f4ce0](https://github.com/tinkoff/taiga-ui/commit/d4f4ce05678f663437e092bcbc5c18c6a7e73f97))
- **addon-commerce:** `InputCard` extend custom icon type to `PolymorpheusContent`
  ([#2788](https://github.com/tinkoff/taiga-ui/issues/2788))
  ([b8eff54](https://github.com/tinkoff/taiga-ui/commit/b8eff54e8e10da6ba6fcafd60aed0e818116db59))
- **core:** `Dialog` allow `Default` change detection strategy to work
  ([#2762](https://github.com/tinkoff/taiga-ui/issues/2762))
  ([f71ed71](https://github.com/tinkoff/taiga-ui/commit/f71ed7145ae88b7099becd67915426785dfdcd5a))
- **kit:** `InputTime` add checkmark near selected time ([#2763](https://github.com/tinkoff/taiga-ui/issues/2763))
  ([75be9bc](https://github.com/tinkoff/taiga-ui/commit/75be9bcb19257e2427690eecc94f8eb4b00c7c83))

### Bug Fixes

- **addon-charts:** make hint properties dynamic ([#2774](https://github.com/tinkoff/taiga-ui/issues/2774))
  ([0a7a068](https://github.com/tinkoff/taiga-ui/commit/0a7a0689f247082932f2f43876e2ec5dd78341d1))
- **addon-commerce:** show caret color when filling in input card group value
  ([#2794](https://github.com/tinkoff/taiga-ui/issues/2794))
  ([aae0212](https://github.com/tinkoff/taiga-ui/commit/aae0212c82854deec152f8e99998aed4592e57c0))
- **addon-editor:** add missing starterkit dependencies ([#2764](https://github.com/tinkoff/taiga-ui/issues/2764))
  ([3d017b6](https://github.com/tinkoff/taiga-ui/commit/3d017b66f88bc5112d243f666847b07095aa30a0))
- **core:** `Expand` return `tuiExpandContent`-directive ([#2753](https://github.com/tinkoff/taiga-ui/issues/2753))
  ([0027332](https://github.com/tinkoff/taiga-ui/commit/00273321b5b7b1115ba899d622654e7946de2e45))
- **kit:** `InputNumber` introduce safe integers for min/max props
  ([#2781](https://github.com/tinkoff/taiga-ui/issues/2781))
  ([27f7c86](https://github.com/tinkoff/taiga-ui/commit/27f7c86dd3146145318070fb0fdf10cba18e5d6c))

## [3.4.0](https://github.com/tinkoff/taiga-ui/compare/v3.3.0...v3.4.0) (2022-09-27)

### Features

- **testing:** add component harness test for primitive-textfield component
  ([#2584](https://github.com/tinkoff/taiga-ui/issues/2584))
  ([40e2a91](https://github.com/tinkoff/taiga-ui/commit/40e2a916564c5d669750dbbee9c799b82d442775))
- **testing:** add harness for island ([#2727](https://github.com/tinkoff/taiga-ui/issues/2727))
  ([f938d49](https://github.com/tinkoff/taiga-ui/commit/f938d491bc7c0a9a806b354776f0d50709d04e32))

### Bug Fixes

- **addon-editor:** add deps for starter-kit ([#2757](https://github.com/tinkoff/taiga-ui/issues/2757))
  ([8c07868](https://github.com/tinkoff/taiga-ui/commit/8c078689ee01aa9a242237b70ecd628a329a3fe8))
- **cdk:** `schematics` add `Node.js < 16`-support ([#2744](https://github.com/tinkoff/taiga-ui/issues/2744))
  ([69d20d5](https://github.com/tinkoff/taiga-ui/commit/69d20d508dd92dc353dc0e080cf138446bbb7fa2))
- **core:** `Hint` fix offscreen position on small devices ([#2749](https://github.com/tinkoff/taiga-ui/issues/2749))
  ([e249a54](https://github.com/tinkoff/taiga-ui/commit/e249a54c740cf3ac35bf57234542d950a867e5e3))
- **core:** `PrimitiveTextfield` drop wrong `text-overflow: ellipsis` (horizontal scroll bug)
  ([#2733](https://github.com/tinkoff/taiga-ui/issues/2733))
  ([2ddc249](https://github.com/tinkoff/taiga-ui/commit/2ddc24947b5324f58cc3a903a2e63a48f9c1d673))
- **demo:** `Stackblitz` broken styles ([#2747](https://github.com/tinkoff/taiga-ui/issues/2747))
  ([1bf9e2d](https://github.com/tinkoff/taiga-ui/commit/1bf9e2d88f4543fb259d8807f666791239c5059f))
- **eslint-plugin:** `no-deep-imports` add `Windows`-OS support
  ([#2741](https://github.com/tinkoff/taiga-ui/issues/2741))
  ([e54e3de](https://github.com/tinkoff/taiga-ui/commit/e54e3de79d47afdfab45e2c59932059aa42c57d7))

## [3.3.0](https://github.com/tinkoff/taiga-ui/compare/v3.2.0...v3.3.0) (2022-09-16)

### Features

- **eslint-plugin:** new `no-deep-imports`-rule ([#2666](https://github.com/tinkoff/taiga-ui/issues/2666))
  ([467420e](https://github.com/tinkoff/taiga-ui/commit/467420edc83da349fce9dfa00a099d7845b0913f))
- **eslint-plugin:** new `prefer-inject-decorator`-rule ([#2688](https://github.com/tinkoff/taiga-ui/issues/2688))
  ([3105204](https://github.com/tinkoff/taiga-ui/commit/3105204efdc4c7ecaa9d51e12a3f5c1110bc79c7))

### Bug Fixes

- **addon-table:** support partial objects ([#2722](https://github.com/tinkoff/taiga-ui/issues/2722))
  ([550b11a](https://github.com/tinkoff/taiga-ui/commit/550b11ade0fd951a6f42659909de9cc58f392b50))
- **core:** `styles` sync `.scss`-files with `.less`-files ([#2717](https://github.com/tinkoff/taiga-ui/issues/2717))
  ([1549898](https://github.com/tinkoff/taiga-ui/commit/154989812739818b2c21c439411aedb9f562a02b))
- **kit:** `InputFlies` new value of i18n-token `TUI_INPUT_FILE_TEXTS` triggers text changes
  ([#2711](https://github.com/tinkoff/taiga-ui/issues/2711))
  ([fa4e1e1](https://github.com/tinkoff/taiga-ui/commit/fa4e1e184b9bdac06add3b4c249bca151f2b8d9f))
- **kit:** `InputPhoneInternational` extend country masks for Croatia and Bosnia
  ([#2713](https://github.com/tinkoff/taiga-ui/issues/2713))
  ([d26b3cb](https://github.com/tinkoff/taiga-ui/commit/d26b3cbf51264f423c3680b04df1efefaeb8360d))

## [3.2.0](https://github.com/tinkoff/taiga-ui/compare/v3.1.0...v3.2.0) (2022-09-12)

### Features

- **eslint-plugin:** new `injection-token-description`-rule ([#2661](https://github.com/tinkoff/taiga-ui/issues/2661))
  ([3a30d5b](https://github.com/tinkoff/taiga-ui/commit/3a30d5b61e09f567309de7526fe46d534b77f5c6))
- **kit:** `InputDateRange` navigate months in sync, cancel unfinished range on esc
  ([#2647](https://github.com/tinkoff/taiga-ui/issues/2647))
  ([14f2907](https://github.com/tinkoff/taiga-ui/commit/14f2907ceb775bfaf6b303a2fe2fbe21754fffa5))

### Bug Fixes

- **addon-editor:** using editor-socket inside editor to fix editor styles
  ([#2631](https://github.com/tinkoff/taiga-ui/issues/2631))
  ([68b0acb](https://github.com/tinkoff/taiga-ui/commit/68b0acb048eb6a3f3544f5fe077b3ede0c048bd8))
- **addon-table:** Type string is not assignable to type keyof T
  ([#2649](https://github.com/tinkoff/taiga-ui/issues/2649))
  ([bb6d824](https://github.com/tinkoff/taiga-ui/commit/bb6d824c37a986d248e7af1aa1f2c7aa9c13a7b1))
- **cdk:** `schematics` migration 3.x `Error: Cannot determine project target configuration`
  ([#2669](https://github.com/tinkoff/taiga-ui/issues/2669))
  ([eba43c0](https://github.com/tinkoff/taiga-ui/commit/eba43c0ddd716f23eb0ed7cdfd1989c0977aafd7))
- **core:** support `text-overflow` in `tuiTextfield` ([#2657](https://github.com/tinkoff/taiga-ui/issues/2657))
  ([9b72134](https://github.com/tinkoff/taiga-ui/commit/9b72134f54d83a501dbd858d6178cf73d8dcd2ff))
- **demo:** make `Stackblitz` to be compatible with `Taiga UI 3.0`
  ([#2636](https://github.com/tinkoff/taiga-ui/issues/2636))
  ([5130208](https://github.com/tinkoff/taiga-ui/commit/51302086222762ce7254b70a6c3744aea6f8e80d))

## [3.1.0](https://github.com/tinkoff/taiga-ui/compare/v3.0.1...v3.1.0) (2022-09-07)

### Features

- **addon-table:** `TUI_TABLE_PAGINATION_OPTIONS` add `showPages` option
  ([#2586](https://github.com/tinkoff/taiga-ui/issues/2586))
  ([dc70f38](https://github.com/tinkoff/taiga-ui/commit/dc70f38d27319bd77185df095c8e4e7b41c0239f))
- **testing:** `SVG`, `Badge` component harness ([#2582](https://github.com/tinkoff/taiga-ui/issues/2582))
  ([1a8b77a](https://github.com/tinkoff/taiga-ui/commit/1a8b77a83e8614ddbf817e516787d2bddb1bec70)),
  ([#2583](https://github.com/tinkoff/taiga-ui/issues/2583))
  ([5797282](https://github.com/tinkoff/taiga-ui/commit/579728279707bc600aa5d7043fdbd51fcdaa9eff))

### Bug Fixes

- add compatibility with TypeScript 4.8 ([#2608](https://github.com/tinkoff/taiga-ui/issues/2608))
  ([42f8d91](https://github.com/tinkoff/taiga-ui/commit/42f8d91f8d6b57a564f72be8781c8a09ef527c46))
- **addon-commerce:** `InputCardGrouped` fix dropdown width ([#2616](https://github.com/tinkoff/taiga-ui/issues/2616))
  ([4aa5026](https://github.com/tinkoff/taiga-ui/commit/4aa502682e37ca8de5e89df166bb2588be021c11))
- **addon-table:** `ThGroup` fix columns updating ([#2602](https://github.com/tinkoff/taiga-ui/issues/2602))
  ([1de7c24](https://github.com/tinkoff/taiga-ui/commit/1de7c2447582ac29dbbb425973c3fd6d30105b68))
- **cdk:** `parse5` & `ng-morph` move `dependencies` => `optionalDependencies`
  ([#2604](https://github.com/tinkoff/taiga-ui/issues/2604))
  ([8a6d3a8](https://github.com/tinkoff/taiga-ui/commit/8a6d3a8262807839e69db077bab270f6b804fd0e))
- **core:** fix dialog header type ([#2559](https://github.com/tinkoff/taiga-ui/issues/2559))
  ([36d0aa4](https://github.com/tinkoff/taiga-ui/commit/36d0aa4abc2ef1065110a698f246e8f56be30996))
- **kit:** `Carousel` reset autoscroll timer when index changes
  ([#2614](https://github.com/tinkoff/taiga-ui/issues/2614))
  ([4c1b958](https://github.com/tinkoff/taiga-ui/commit/4c1b9586579900101ed44805f3463c1b18fbea5c))
- **kit:** `InputNumber` fix positive min/negative max clipping
  ([#2575](https://github.com/tinkoff/taiga-ui/issues/2575))
  ([87b13f7](https://github.com/tinkoff/taiga-ui/commit/87b13f7381ca945ad56b93accccbeb45d0bceb25))

### [3.0.1](https://github.com/tinkoff/taiga-ui/compare/v3.0.0...v3.0.1) (2022-09-01)

### Bug Fixes

- **cdk:** `schematics` fix 3.0-migration for `tuiTextfieldInputMode`
  ([#2544](https://github.com/tinkoff/taiga-ui/issues/2544))
  ([9f8fd3d](https://github.com/tinkoff/taiga-ui/commit/9f8fd3d2454e1a32b1dd40cd455292524857b658))
- **core:** `DropdownContext` close previous dropdown after new one is opened
  ([#2535](https://github.com/tinkoff/taiga-ui/issues/2535))
  ([ae45123](https://github.com/tinkoff/taiga-ui/commit/ae451233a3cf1c79ca137431b51a39df028abeb0))

## [3.0.0](https://github.com/tinkoff/taiga-ui/compare/v2.62.1...v3.0.0) (2022-08-30)

### ⚠ BREAKING CHANGES

- Update to Angular 12 ([#2080](https://github.com/tinkoff/taiga-ui/issues/2080),
  [#2097](https://github.com/tinkoff/taiga-ui/issues/2097), [#2110](https://github.com/tinkoff/taiga-ui/issues/2110)).
  Enable `Ivy` by default ([#2076](https://github.com/tinkoff/taiga-ui/issues/2076)). Drop legacy `View Engine`-support.
- Migrate to [Polymorpheus](https://github.com/Tinkoff/ng-polymorpheus) 4.x.x
  ([#2165](https://github.com/tinkoff/taiga-ui/issues/2165)).
- Update supported browser versions. Drop support of legacy not-chromium Edge (EdgeHTML)
  ([#2318](https://github.com/tinkoff/taiga-ui/issues/2318)). Bump supported `Safari` to `12.1+`
  ([#2391](https://github.com/tinkoff/taiga-ui/issues/2391)).
- All exported entities without `tui`-prefix was renamed to the same one with prefix: functions, constants, pipes,
  classes, etc.
- **styles:** move all global styles from `@taiga-ui/core` to new optional package `@taiga-ui/styles`
  ([#2320](https://github.com/tinkoff/taiga-ui/issues/2320)). Delete `tui-palette.less` (`data-tui-background` and
  `data-tui-color` global states) ([#2473](https://github.com/tinkoff/taiga-ui/issues/2473)).
- **core:** `Dropdown` refactor dropdowns completely ([#2389](https://github.com/tinkoff/taiga-ui/issues/2389)).
- **kit:** remove legacy `InputFile` component ([#2087](https://github.com/tinkoff/taiga-ui/issues/2087)). Use new
  `InputFiles` component instead.
- **addon-editor:** replace legacy `Editor` with new one based on popular open-source solution
  [TipTap](https://tiptap.dev).
- **core:** `Hint` support 12 directions ([#2256](https://github.com/tinkoff/taiga-ui/issues/2256)). Add context input
  ([#2273](https://github.com/tinkoff/taiga-ui/issues/2273)). Add new directive `HintDescribe`
  ([#2495](https://github.com/tinkoff/taiga-ui/issues/2495)). `HintController` remove separate module (move inside
  `TuiHintModule`) ([#2484](https://github.com/tinkoff/taiga-ui/issues/2484)).
- **core:** `TuiTextfieldController` delete `tuiTextfieldAutocomplete`, `tuiTextfieldExampleText`,
  `tuiTextfieldInputMode`, `tuiTextfieldMaxLength`, `tuiTextfieldType`
  ([#2410](https://github.com/tinkoff/taiga-ui/issues/2410)) in favor of native input alternatives. Allow passing icons
  at both sides simultaneously in textfield components ([#2037](https://github.com/tinkoff/taiga-ui/issues/2037)).
- **kit:** `Slider` | `InputSlider` | `Range` | `InputRange` drop all deprecated API
  ([#2200](https://github.com/tinkoff/taiga-ui/issues/2200), [#2207](https://github.com/tinkoff/taiga-ui/issues/2207),
  [#2215](https://github.com/tinkoff/taiga-ui/issues/2215), [#2243](https://github.com/tinkoff/taiga-ui/issues/2243)).
  Use strict version of `TuiKeySteps` ([#2220](https://github.com/tinkoff/taiga-ui/issues/2220)). Delete legacy
  `<tui-slider />` ([#2184](https://github.com/tinkoff/taiga-ui/issues/2184)).
- **kit:** `Action` new selector `button[tuiAction], a[tuiAction]`
  ([#2479](https://github.com/tinkoff/taiga-ui/issues/2479)). Better customization + new API
  ([#2505](https://github.com/tinkoff/taiga-ui/issues/2505))
- **kit:** `Stepper` rename `state` input (=> `stepState`) to avoid collision with `routerLink`
  ([#2437](https://github.com/tinkoff/taiga-ui/issues/2437)).
- **core:** remove `tuiExpandContent` directive ([#2501](https://github.com/tinkoff/taiga-ui/issues/2501))
- **kit:** `DataListDropdownManager` move into separate module
  ([#2317](https://github.com/tinkoff/taiga-ui/issues/2317))
- **cdk:** `Let` directive can emit `null` ([#2496](https://github.com/tinkoff/taiga-ui/issues/2496))
- **cdk:** remove deprecated `setNativeFocused`,`tuiCustomEvents`, `tuiPadStart`, `getClosestElement`, `fallbackValue`
  ([#2074](https://github.com/tinkoff/taiga-ui/issues/2074), [#2276](https://github.com/tinkoff/taiga-ui/issues/2276)).
  Use native alternatives.
- **core:** `tuiFormatNumber(value, configs)` new function signature
  ([#2309](https://github.com/tinkoff/taiga-ui/issues/2309))
- **cdk:** `tuiGetClosestFocusableElement(configs)` new function signature
  ([#2436](https://github.com/tinkoff/taiga-ui/issues/2436))
- **core:** new names of css breakpoints ([#2393](https://github.com/tinkoff/taiga-ui/issues/2393)).
- **core:** remove deprecated pluralize ([#2222](https://github.com/tinkoff/taiga-ui/issues/2222)). Use Angular built-in
  [I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe).
- **core:** move fonts to separate file `taiga-ui-fonts.less` ([#2132](https://github.com/tinkoff/taiga-ui/issues/2132))
- Replace deprecated directives (`*tuiTab`, `*tuiBreadcrumb`,`[tuiToolbarTool]`) with universal `tuiItem`-directive
  ([#2069](https://github.com/tinkoff/taiga-ui/issues/2069))
- Move all color-converter utils (`addon-editor` / `addon-doc` => `cdk`)
  ([#2280](https://github.com/tinkoff/taiga-ui/issues/2280))
- Remove `tui-wrapper`, `tui-group`, `table-mode`, `field-error` component, `tui-breadcrumb` items
  ([#2121](https://github.com/tinkoff/taiga-ui/issues/2121)).
- **kit:** remove deprecated `TUI_MOBILE_AWARE` ([#2099](https://github.com/tinkoff/taiga-ui/issues/2099)).
- **core:** `AlertComponent` use new context ([#2362](https://github.com/tinkoff/taiga-ui/issues/2362))
- **cdk:** `PortalService` switch to using `PolymorpheusComponent`
- **addon-commerce, addon-chart:** remove deprecated enums ([#2095](https://github.com/tinkoff/taiga-ui/issues/2095))
- remove deprecated core-enums, `TuiColor`, `colorFallback`, `DEFAULT_COLORS`, `TuiColorHandler`
  ([#2158](https://github.com/tinkoff/taiga-ui/issues/2158))
- remove date-time related deprecations, `EMPTY_VALIDATOR` ([#2164](https://github.com/tinkoff/taiga-ui/issues/2164))
- remove deprecated properties from `AbstractTuiInteractive` ([#2124](https://github.com/tinkoff/taiga-ui/issues/2124))
- remove autofill enums ([#2500](https://github.com/tinkoff/taiga-ui/issues/2500)).

### Migration guide

This release introduces a lot of breaking changes.<br/> Most of them can be solved automatically with the following
command:

```
ng update @taiga-ui/cdk
```

**Troubleshooting:**

- Npm 7 has a known [issue](https://github.com/npm/cli/issues/3666). If you face "Conflicting peer dependency"-error,
  try the following workaround:<br/> `ng update @taiga-ui/cdk --force`.
- If you face any other issues, try to update all Taiga UI's packages manually.<br/> Then check that
  `node_modules/@taiga-ui/cdk/package.json` contains `3.x.x`-version.<br/> After all, run
  `ng update @taiga-ui/cdk --migrate-only --from=2 --to=3`.
- If any problem still persists, please, [create an issue](https://github.com/Tinkoff/taiga-ui/issues/new/choose).

## [2.x CHANGELOG...](https://taiga-ui.dev/v2/changelog)
