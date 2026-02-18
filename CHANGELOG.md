# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.71.1](https://github.com/taiga-family/taiga-ui/compare/v4.71.0...v4.71.1) (2026-02-18)

### 🐞 Bug Fixes

- **addon-mobile:** `DropdownMobile` fix `_TuiActiveZone matches multiple times` error
  ([#13314](https://github.com/taiga-family/taiga-ui/issues/13314))
  ([adc7ea3](https://github.com/taiga-family/taiga-ui/commit/adc7ea38a0ff396e92a59493eac60ad1722fb5a4))

## [4.71.0](https://github.com/taiga-family/taiga-ui/compare/v4.70.0...v4.71.0) (2026-02-17)

### 🐞 Bug Fixes

- **addon-mobile:** `DropdownMobile` fix visibility of inactive textfield
  ([#13290](https://github.com/taiga-family/taiga-ui/issues/13290))
  ([978f7cc](https://github.com/taiga-family/taiga-ui/commit/978f7cc858619b467533b5a616dd7da4c1fdf06f))
- **core:** `Hint` fix flicker in iOS ([#13256](https://github.com/taiga-family/taiga-ui/issues/13256))
  ([673aeae](https://github.com/taiga-family/taiga-ui/commit/673aeaed3486698407ec5e9b40df90d6a462c268))
- **core:** changed behavior on clear button press ([#13103](https://github.com/taiga-family/taiga-ui/issues/13103))
  ([8e70aef](https://github.com/taiga-family/taiga-ui/commit/8e70aeff811bb687ffcaeec2efdcf49eaed8999f))
- **core:** do not mark input as invalid if it is not touched
  ([#13244](https://github.com/taiga-family/taiga-ui/issues/13244))
  ([9304526](https://github.com/taiga-family/taiga-ui/commit/9304526a348ac74e56860af98c2ff6e0229c08e5))

### 🚀 Features

- **addon-mobile:** `SheetDialog` add button to closable string content
  ([#13262](https://github.com/taiga-family/taiga-ui/issues/13262))
  ([09b9fab](https://github.com/taiga-family/taiga-ui/commit/09b9fab284565964b8ebf243086a1091be5e41db))
- **core:** dropdown aligned to host with root html zoom
  ([#13239](https://github.com/taiga-family/taiga-ui/issues/13239))
  ([96306a8](https://github.com/taiga-family/taiga-ui/commit/96306a8e0c184bb06a3cf6f7eed809c18eb0348a))
- **kit:** `InputChip` make chip hoverable in disabled mode
  ([#13275](https://github.com/taiga-family/taiga-ui/issues/13275))
  ([5cc40da](https://github.com/taiga-family/taiga-ui/commit/5cc40daf35779b6d1e686c053d3ed37955c76f18))
- **kit:** compatibility `tuiInputNumber` with zoneless
  ([#13240](https://github.com/taiga-family/taiga-ui/issues/13240))
  ([e54b064](https://github.com/taiga-family/taiga-ui/commit/e54b064d4188ccd54334cacd132b3fa8c16374a6))

## [4.70.0](https://github.com/taiga-family/taiga-ui/compare/v4.69.0...v4.70.0) (2026-02-09)

### 🐞 Bug Fixes

- **core:** `Surface` fix shadow for floating appearance
  ([#13196](https://github.com/taiga-family/taiga-ui/issues/13196))
  ([e0a3fd0](https://github.com/taiga-family/taiga-ui/commit/e0a3fd0851135189e3900317673dd48f36182783))
- **core:** do not emit onChange on initialization of TuiItemsHandlersValidator
  ([#13172](https://github.com/taiga-family/taiga-ui/issues/13172))
  ([8bf0372](https://github.com/taiga-family/taiga-ui/commit/8bf03729d287f80a037d5cb5003e7371dd8d1da8))
- **core:** incorrect browser render on `tuiFade` ([#13207](https://github.com/taiga-family/taiga-ui/issues/13207))
  ([ef7f4fb](https://github.com/taiga-family/taiga-ui/commit/ef7f4fbb87482238b66aa35ffe9636a7669a41a9))
- **core:** revert wrong display on `tui-textfield-item`
  ([#13211](https://github.com/taiga-family/taiga-ui/issues/13211))
  ([4f5b41f](https://github.com/taiga-family/taiga-ui/commit/4f5b41faa54afc57a087284399bac09ba404d855))
- **core:** tui-textfield still has `_disabled` class after enabling a control
  ([#13085](https://github.com/taiga-family/taiga-ui/issues/13085))
  ([aa55275](https://github.com/taiga-family/taiga-ui/commit/aa552755e5086e37908aff3f17e183495e0c31de))
- **kit:** add correct size behaviour for TuiBlock ([#13158](https://github.com/taiga-family/taiga-ui/issues/13158))
  ([5efa89c](https://github.com/taiga-family/taiga-ui/commit/5efa89cdaecebb2440ff7c02077edac6f04b3b15))
- **kit:** support dark mode in `tuiButtonCopy` ([#13150](https://github.com/taiga-family/taiga-ui/issues/13150))
  ([a19b43a](https://github.com/taiga-family/taiga-ui/commit/a19b43a5b1173ffccd30e7d42cf2bfa4cd61f2f2))

### 🚀 Features

- **addon-mobile:** `SwipeActions` add onboarding animation
  ([#13175](https://github.com/taiga-family/taiga-ui/issues/13175))
  ([8e547c4](https://github.com/taiga-family/taiga-ui/commit/8e547c43b613e33387a1bd8ee1af10e743c28a21))
- **layout:** use signals in `tui-elastic-container` ([#13170](https://github.com/taiga-family/taiga-ui/issues/13170))
  ([f79d0b2](https://github.com/taiga-family/taiga-ui/commit/f79d0b2ba155e492e5f5e1f3b3a33830bc41cf94))

## [4.69.0](https://github.com/taiga-family/taiga-ui/compare/v4.68.0...v4.69.0) (2026-02-02)

### 🚀 Features

- **kit:** add `tuiButtonCopy` ([#13131](https://github.com/taiga-family/taiga-ui/issues/13131))
  ([6cc066b](https://github.com/taiga-family/taiga-ui/commit/6cc066b6828750213b29336c6c4f8df1e44e75b9))

### 🐞 Bug Fixes

- **core:** `Surface` update presets according to specs
  ([#13127](https://github.com/taiga-family/taiga-ui/issues/13127))
  ([1f8bc6e](https://github.com/taiga-family/taiga-ui/commit/1f8bc6e87cf795cbf221e70da310730c195be9a2))
- **core:** gaps between input chips are collapsing ([#13118](https://github.com/taiga-family/taiga-ui/issues/13118))
  ([af50640](https://github.com/taiga-family/taiga-ui/commit/af50640dff1eaaf3cd224bc23183eb593881449f))
- **core:** hide webkit spin buttons ([#13109](https://github.com/taiga-family/taiga-ui/issues/13109))
  ([05e4776](https://github.com/taiga-family/taiga-ui/commit/05e477615a285e041b7fd15915767524ad67ee0d))
- **kit:** `InputChip` fix pasting value with newlines ([#13134](https://github.com/taiga-family/taiga-ui/issues/13134))
  ([4de0bc6](https://github.com/taiga-family/taiga-ui/commit/4de0bc6a4df6002bfae8ac64983810436a2ed6ce))
- **kit:** input chip filter should ignore empty stringified values
  ([#13095](https://github.com/taiga-family/taiga-ui/issues/13095))
  ([db8b85a](https://github.com/taiga-family/taiga-ui/commit/db8b85a20002bfa089113bdf6e2b63c46377bfea))

## [4.68.0](https://github.com/taiga-family/taiga-ui/compare/v4.67.0...v4.68.0) (2026-01-27)

### 🐞 Bug Fixes

- **core:** `Link` has invalid `mask-size` for icons ([#13038](https://github.com/taiga-family/taiga-ui/issues/13038))
  ([3977c19](https://github.com/taiga-family/taiga-ui/commit/3977c19050b1f220d8f63735cc108742180ccd7a))
- **core:** update data-list paddings according to specs
  ([#13031](https://github.com/taiga-family/taiga-ui/issues/13031))
  ([c917bf8](https://github.com/taiga-family/taiga-ui/commit/c917bf85148f514f5164c4ab30eb1ba6f7e74cb2))
- **kit:** `InputChip` fix pasting with whitespace separator, fix caret position
  ([#13019](https://github.com/taiga-family/taiga-ui/issues/13019))
  ([d414d5c](https://github.com/taiga-family/taiga-ui/commit/d414d5c0ff6755efaa92c6f04d1a7915c80d332a))
- **kit:** `InputRange` not updating on blur ([#13037](https://github.com/taiga-family/taiga-ui/issues/13037))
  ([f90f735](https://github.com/taiga-family/taiga-ui/commit/f90f735e564f405b5c58c48421223cea0ebf837d))
- **layout:** new behavior for horizontal boundary of a scrolling area
  ([#13023](https://github.com/taiga-family/taiga-ui/issues/13023))
  ([2c6a9a6](https://github.com/taiga-family/taiga-ui/commit/2c6a9a67deac0e150a08352997ccb5c7eaf67409))

### 🚀 Features

- **core:** add ability to copy multiselect content ([#13078](https://github.com/taiga-family/taiga-ui/issues/13078))
  ([d9ab520](https://github.com/taiga-family/taiga-ui/commit/d9ab520494bece316fa4f1cb5c00942fb05da462))
- **i18n:** `Back` add ([#13046](https://github.com/taiga-family/taiga-ui/issues/13046))
  ([79dc291](https://github.com/taiga-family/taiga-ui/commit/79dc291cf319d582ee19348040126fb2aef62d52))
- **layout:** add `tuiList` directive ([#13071](https://github.com/taiga-family/taiga-ui/issues/13071))
  ([9fcc7c0](https://github.com/taiga-family/taiga-ui/commit/9fcc7c046d7c028a196d4be4280bab4ba93e041c))

## [4.67.0](https://github.com/taiga-family/taiga-ui/compare/v4.66.0...v4.67.0) (2026-01-19)

### 🐞 Bug Fixes

- **addon-doc:** `DocDocumentation` throws `NG0500: During hydration expected <tr> but found <tbody>`
  ([#12933](https://github.com/taiga-family/taiga-ui/issues/12933))
  ([2b36d77](https://github.com/taiga-family/taiga-ui/commit/2b36d773441ed8097642de06f6ff74aa66ad2db0))
- **cdk:** downgrade parse5 ([#12963](https://github.com/taiga-family/taiga-ui/issues/12963))
  ([2792bf2](https://github.com/taiga-family/taiga-ui/commit/2792bf2fbcd60de60c51b81c5c38ff2aa00797f7))
- **cdk:** migration fails with `JavaScript heap out of memory` because of `allure-results` directory
  ([#12932](https://github.com/taiga-family/taiga-ui/issues/12932))
  ([683ca3f](https://github.com/taiga-family/taiga-ui/commit/683ca3fb3ff3014cd3fabfc17c4c8d1de967d6bf))
- **kit:** `InputChip` make chip hoverable in readonly mode
  ([#12983](https://github.com/taiga-family/taiga-ui/issues/12983))
  ([61fc246](https://github.com/taiga-family/taiga-ui/commit/61fc246dda50a0c5a12b1220106a084addeea454))
- **kit:** `TuiTransitioned` matches multiple times ([#12920](https://github.com/taiga-family/taiga-ui/issues/12920))
  ([6ef1785](https://github.com/taiga-family/taiga-ui/commit/6ef17859c25213620d419171d2838ae3e0b9b251))
- **kit:** added zero blur padding for InputDateTime ([#12945](https://github.com/taiga-family/taiga-ui/issues/12945))
  ([7087652](https://github.com/taiga-family/taiga-ui/commit/70876525d9321d053f8cd58cb8b98d81d312ce26))
- **kit:** do not use `tuiFade` for sheet dialog ([#12994](https://github.com/taiga-family/taiga-ui/issues/12994))
  ([90fec63](https://github.com/taiga-family/taiga-ui/commit/90fec639426755045e0d65299826a166ddfb9585))
- **kit:** resolve `Preview` zoom hint bug ([#12947](https://github.com/taiga-family/taiga-ui/issues/12947))
  ([fb3a45e](https://github.com/taiga-family/taiga-ui/commit/fb3a45e52a43034b70c4f182a2ef2e1757261ae0))

## [4.66.0](https://github.com/taiga-family/taiga-ui/compare/v4.65.0...v4.66.0) (2025-12-19)

### 🚀 Features

- **layout:** add cell `:active` state on mobile ([#12870](https://github.com/taiga-family/taiga-ui/issues/12870))
  ([dffe503](https://github.com/taiga-family/taiga-ui/commit/dffe503d0259206707a727dd8a5313c2aba41e4f))

### 🐞 Bug Fixes

- **cdk:** `tuiValueChanges` should not work for same control value emission
  ([#12850](https://github.com/taiga-family/taiga-ui/issues/12850))
  ([94dfd4f](https://github.com/taiga-family/taiga-ui/commit/94dfd4f8058ffd9a9f471ae0390443abc031cf12))
- **kit:** `MultiSelect` fix native on desktop ([#12891](https://github.com/taiga-family/taiga-ui/issues/12891))
  ([272638b](https://github.com/taiga-family/taiga-ui/commit/272638b1db0d7e303f2b3f5462f4590772653bf8))
- **kit:** `Select` should ignore `Backspace`/`Delete` keyboard keys if cleaner is disabled
  ([#12866](https://github.com/taiga-family/taiga-ui/issues/12866))
  ([56794a5](https://github.com/taiga-family/taiga-ui/commit/56794a532baade8712cf78a6133d1c0eca2ef3b2))
- **kit:** `TabsWithMore` duplicates tabs on client hydration
  ([#12863](https://github.com/taiga-family/taiga-ui/issues/12863))
  ([2777b37](https://github.com/taiga-family/taiga-ui/commit/2777b3719cfa4ee2dd4e54111f8ea19a9d6829fe))

## [4.65.0](https://github.com/taiga-family/taiga-ui/compare/v4.64.0...v4.65.0) (2025-12-15)

### 🚀 Features

- **layout:** `Card` add options token ([#12834](https://github.com/taiga-family/taiga-ui/issues/12834))
  ([e719fb4](https://github.com/taiga-family/taiga-ui/commit/e719fb4364bbc2f21b89cd1928379cbff8e1850c))

### 🐞 Bug Fixes

- **kit:** `MultiSelect` fix native on newer Androids ([#12840](https://github.com/taiga-family/taiga-ui/issues/12840))
  ([0fa3797](https://github.com/taiga-family/taiga-ui/commit/0fa3797afdf22685d4f300def64f227aadcdb645))
- **kit:** confirm content receives dialog context ([#12838](https://github.com/taiga-family/taiga-ui/issues/12838))
  ([3522c48](https://github.com/taiga-family/taiga-ui/commit/3522c487fe7a1c0c4e945c2b8243807ca197194c))

## [4.64.0](https://github.com/taiga-family/taiga-ui/compare/v4.63.0...v4.64.0) (2025-12-09)

### 🚀 Features

- **core:** `Hint` make offset configurable ([#12767](https://github.com/taiga-family/taiga-ui/issues/12767))
  ([4641ba8](https://github.com/taiga-family/taiga-ui/commit/4641ba8dd09e8bddcdfeb3d8438dc584dd5a9460))
- **core:** add `TUI_FONT_OFFSET` signal token ([#12701](https://github.com/taiga-family/taiga-ui/issues/12701))
  ([fdca425](https://github.com/taiga-family/taiga-ui/commit/fdca425ad72108b26119f7d9ddea9d300b072c10))
- **core:** make line height grow with increased font size
  ([#12755](https://github.com/taiga-family/taiga-ui/issues/12755))
  ([43be83e](https://github.com/taiga-family/taiga-ui/commit/43be83e597b9fbd307ab12fa5a631f217cdab2bd))
- **kit:** `ButtonSelect` add ability to work with array
  ([#12720](https://github.com/taiga-family/taiga-ui/issues/12720))
  ([7b4be4c](https://github.com/taiga-family/taiga-ui/commit/7b4be4cb0202196a5703ea82e52667a1438db313))

### 🐞 Bug Fixes

- **addon-mobile:** center `ProgressBar` inside `AppBar` on android
  ([#12727](https://github.com/taiga-family/taiga-ui/issues/12727))
  ([de300f0](https://github.com/taiga-family/taiga-ui/commit/de300f01791abc2756f634456b52e4f975bc6530))
- **core:** hover event from `TuiHint` faster than hover event of `TuiHintPointer`
  ([#12773](https://github.com/taiga-family/taiga-ui/issues/12773))
  ([3ccfc68](https://github.com/taiga-family/taiga-ui/commit/3ccfc68b454409743f14b915ce2eb6e96083dd27))
- **kit:** `Switch` fix icon position according to specs
  ([#12746](https://github.com/taiga-family/taiga-ui/issues/12746))
  ([f38ff15](https://github.com/taiga-family/taiga-ui/commit/f38ff15f7663dce6a626229d2feca15adde33205))
- **layout:** `AppBarBack` fix font size on desktop ([#12763](https://github.com/taiga-family/taiga-ui/issues/12763))
  ([0dd3354](https://github.com/taiga-family/taiga-ui/commit/0dd335464431b3eed4512aa889c8d66b0fcf9656))

## [4.63.0](https://github.com/taiga-family/taiga-ui/compare/v4.62.0...v4.63.0) (2025-12-01)

### 🚀 Features

- **cdk:** milliseconds just be a non-negative integer ([#12699](https://github.com/taiga-family/taiga-ui/issues/12699))
  ([41242bb](https://github.com/taiga-family/taiga-ui/commit/41242bbb08e0a8aaf778bd34e602584894d8c68a))
- **kit:** add screen reader support to preview-zoom component
  ([#12515](https://github.com/taiga-family/taiga-ui/issues/12515))
  ([3d55157](https://github.com/taiga-family/taiga-ui/commit/3d55157327682962a34d8db48b9f1f30bf400dcd))

### 🐞 Bug Fixes

- **addon-table:** `TableControl` fix empty list view ([#12694](https://github.com/taiga-family/taiga-ui/issues/12694))
  ([b22ed2a](https://github.com/taiga-family/taiga-ui/commit/b22ed2a36a6e179a8de0efab10c6a0c952be46ab))
- **cdk:** `Animated` remove tick ([#12670](https://github.com/taiga-family/taiga-ui/issues/12670))
  ([d4347bb](https://github.com/taiga-family/taiga-ui/commit/d4347bb6aaad61ff7279e5c529476915225bed42))

## [4.62.0](https://github.com/taiga-family/taiga-ui/compare/v4.61.0...v4.62.0) (2025-11-24)

### 🐞 Bug Fixes

- **addon-table:** remove generic type constraint from `TuiTableSortPipe`
  ([#12574](https://github.com/taiga-family/taiga-ui/issues/12574))
  ([e98f6fd](https://github.com/taiga-family/taiga-ui/commit/e98f6fd14070ae3830be441053f581b8ff4fdede))
- **cdk:** fix append month in backward direction for last day of month in TuiDay
  ([#12565](https://github.com/taiga-family/taiga-ui/issues/12565))
  ([660926e](https://github.com/taiga-family/taiga-ui/commit/660926eb97ac4e78294e838887aa5973dbbc3b4c))
- **core:** `ActiveZone` fix inside dialogs for Safari ([#12634](https://github.com/taiga-family/taiga-ui/issues/12634))
  ([240884b](https://github.com/taiga-family/taiga-ui/commit/240884bd052fe7550407f14b32264e5bfab03c8e))
- **core:** `tuiLink` with `iconStart` has double transition
  ([#12507](https://github.com/taiga-family/taiga-ui/issues/12507))
  ([b819205](https://github.com/taiga-family/taiga-ui/commit/b819205e4741ef3c0926e39c89318fc966cbb1dc))
- **kit:** `inputChip` - add special character clearing
  ([#12640](https://github.com/taiga-family/taiga-ui/issues/12640))
  ([242f272](https://github.com/taiga-family/taiga-ui/commit/242f2723afb901c9bb699b7a37fea81d4c6c27b0))
- **kit:** `InputNumber` with long `[prefix]`/`[postfix]` has invalid input length restriction
  ([#12516](https://github.com/taiga-family/taiga-ui/issues/12516))
  ([55776cc](https://github.com/taiga-family/taiga-ui/commit/55776cc7daa4a8ad5b10332dce10c2dedb9750d9))
- **kit:** `Select` with native picker has invalid appearance for initial value
  ([#12644](https://github.com/taiga-family/taiga-ui/issues/12644))
  ([aa1564f](https://github.com/taiga-family/taiga-ui/commit/aa1564f4282bd2ee774f5dd459578bb1019d3702))
- **kit:** impossible to select the first option in native `Select` without placeholder
  ([#12641](https://github.com/taiga-family/taiga-ui/issues/12641))
  ([e54577e](https://github.com/taiga-family/taiga-ui/commit/e54577e4d6e5d366cb8aba7550a8b7a987f810b6))
- **layout:** `CardLarge` is not compatible with `Header` (font has CSS specificity problem)
  ([#12549](https://github.com/taiga-family/taiga-ui/issues/12549))
  ([a94e65a](https://github.com/taiga-family/taiga-ui/commit/a94e65ad91ac731ab86d7cee0a6a9c2b80388649))
- **layout:** fix app-bar-back padding inside dialog on desktop
  ([#12500](https://github.com/taiga-family/taiga-ui/issues/12500))
  ([f0ac438](https://github.com/taiga-family/taiga-ui/commit/f0ac4389c0113375be2ae9c2c46dd9b205c6d2e6))
- **layout:** support html in hint aside ([#12562](https://github.com/taiga-family/taiga-ui/issues/12562))
  ([758af9e](https://github.com/taiga-family/taiga-ui/commit/758af9e7ccf7502a7edf323e75d46c6dca53c95f))

## [4.61.0](https://github.com/taiga-family/taiga-ui/compare/v4.60.0...v4.61.0) (2025-11-10)

### 🐞 Bug Fixes

- `Present` workaround for ios26 ([#12480](https://github.com/taiga-family/taiga-ui/issues/12480))
  ([82c9590](https://github.com/taiga-family/taiga-ui/commit/82c959000b5493f8863bd01ba909ca1f616624b7))
- **addon-charts:** line-chart shouldn't re-render when it goes out of viewport
  ([#12436](https://github.com/taiga-family/taiga-ui/issues/12436))
  ([b63e28f](https://github.com/taiga-family/taiga-ui/commit/b63e28f0edc9ac4de674bf86a30e1f9451586820))
- **addon-commerce:** introduce collapsed offset variables
  ([#12407](https://github.com/taiga-family/taiga-ui/issues/12407))
  ([8ab226e](https://github.com/taiga-family/taiga-ui/commit/8ab226e83c8bc255918f289872f1665d252c9275))
- **addon-mobile:** `BottomSheet` fix reacting to scroll in ios26
  ([#12483](https://github.com/taiga-family/taiga-ui/issues/12483))
  ([e052b72](https://github.com/taiga-family/taiga-ui/commit/e052b72c86366baab540167ebff088e3c00cfda7))
- **layout:** app bar button font weight and style ([#12485](https://github.com/taiga-family/taiga-ui/issues/12485))
  ([60da7b2](https://github.com/taiga-family/taiga-ui/commit/60da7b206bbbe7bdefb3b06fbd56c7425c071e72))

## [4.60.0](https://github.com/taiga-family/taiga-ui/compare/v4.59.0...v4.60.0) (2025-10-27)

### 🚀 Features

- **kit:** align close button to top for closable preset in tuiCell
  ([#12347](https://github.com/taiga-family/taiga-ui/issues/12347))
  ([9316d08](https://github.com/taiga-family/taiga-ui/commit/9316d0840e9b140e03d0d24c76d181268561c722))
- **schematics:** add support for migration app bar ([#12371](https://github.com/taiga-family/taiga-ui/issues/12371))
  ([cb662b4](https://github.com/taiga-family/taiga-ui/commit/cb662b4309d3ed64973a45cb414ebc94ad8df9ae))
- **schematics:** add support for migration onboarding flow
  ([#12372](https://github.com/taiga-family/taiga-ui/issues/12372))
  ([3410baa](https://github.com/taiga-family/taiga-ui/commit/3410baab60266cca37bd44dafdcc4ff1bac1b36b))
- **schematics:** add support for migration responsive dialog
  ([#12374](https://github.com/taiga-family/taiga-ui/issues/12374))
  ([8c71f9a](https://github.com/taiga-family/taiga-ui/commit/8c71f9a4067bf0c470a508593fd9f98ed22439e5))
- **schematics:** add support for migration skeleton ([#12368](https://github.com/taiga-family/taiga-ui/issues/12368))
  ([2ad6783](https://github.com/taiga-family/taiga-ui/commit/2ad678325e71f50497ddcdcb00718f9c36d1969e))

### 🐞 Bug Fixes

- **kit:** `ProgressColorSegments` color misaligned with `ProgressSegmented`
  ([#12342](https://github.com/taiga-family/taiga-ui/issues/12342))
  ([a6a30eb](https://github.com/taiga-family/taiga-ui/commit/a6a30eb4f4420bc9243f7404d7285d005d349459))
- **kit:** failed to execute setSelectionRange on HTMLInputElement
  ([#12387](https://github.com/taiga-family/taiga-ui/issues/12387))
  ([9fbaa8e](https://github.com/taiga-family/taiga-ui/commit/9fbaa8ed11a6a61e732d768edcf02b6f70dfccb6))

## [4.59.0](https://github.com/taiga-family/taiga-ui/compare/v4.58.0...v4.59.0) (2025-10-20)

### 🐞 Bug Fixes

- **addon-doc:** `tuiRawLoad` is incompatible with esbuild loaders
  ([#12270](https://github.com/taiga-family/taiga-ui/issues/12270))
  ([ee2c23d](https://github.com/taiga-family/taiga-ui/commit/ee2c23d5d2a9b9f3084f00ea173cd22ca279ae91))
- **cdk:** rename to correct migration warning for illustrations
  ([#12249](https://github.com/taiga-family/taiga-ui/issues/12249))
  ([5ac70f0](https://github.com/taiga-family/taiga-ui/commit/5ac70f01bb899db864b3fa6fa4235cbe69bf9ade))
- **experimental:** `PdfPreview` use `isMobileRes` token for header
  ([#12293](https://github.com/taiga-family/taiga-ui/issues/12293))
  ([b815b91](https://github.com/taiga-family/taiga-ui/commit/b815b910bd42b6e752431f3506c51643dad025fc))
- **kit:** correct tooltip hint inside tui-textfield on iOS
  ([#12245](https://github.com/taiga-family/taiga-ui/issues/12245))
  ([d735b7e](https://github.com/taiga-family/taiga-ui/commit/d735b7e004f36ac7f40b6ed145fcd5d8c95aaba7))
- **schematics:** the path argument must be of type string
  ([#12292](https://github.com/taiga-family/taiga-ui/issues/12292))
  ([bd75b60](https://github.com/taiga-family/taiga-ui/commit/bd75b60b39c3d79fdc44f50dbb7e41b384677734))

### 🚀 Features

- **addon-doc:** configurable page by router providers ([#12272](https://github.com/taiga-family/taiga-ui/issues/12272))
  ([cbbb56e](https://github.com/taiga-family/taiga-ui/commit/cbbb56e2d2cb4e18fad16cd086eec7f85ba398f9))
- **kit:** `Copy` support `tuiCopyProcessor` and trim content by default
  ([#12329](https://github.com/taiga-family/taiga-ui/issues/12329))
  ([8773222](https://github.com/taiga-family/taiga-ui/commit/8773222ce191e14f809c1aa5c59ecc143514074b))

## [4.58.0](https://github.com/taiga-family/taiga-ui/compare/v4.57.0...v4.58.0) (2025-10-13)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix stacking order of labels
  ([#12240](https://github.com/taiga-family/taiga-ui/issues/12240))
  ([7991362](https://github.com/taiga-family/taiga-ui/commit/7991362ddc1c0b121008e78301885737ba265dd8))
- **cdk:** `CloseWatcher` add try/catch ([#12237](https://github.com/taiga-family/taiga-ui/issues/12237))
  ([2abff4b](https://github.com/taiga-family/taiga-ui/commit/2abff4bcbe9cb7b047b0a1e322461ff655ee392a))
- **cdk:** `TuiDay` incorrectly appends month in backward direction
  ([#12191](https://github.com/taiga-family/taiga-ui/issues/12191))
  ([93fea20](https://github.com/taiga-family/taiga-ui/commit/93fea202252961983ea720e0ddd2905d1dfb32e8))
- **core:** "TuiDataListAccessor.getOptions()" should not be deprecated
  ([#12159](https://github.com/taiga-family/taiga-ui/issues/12159))
  ([a1c4659](https://github.com/taiga-family/taiga-ui/commit/a1c4659012d6bb2463323f87267d58c0b32a5d98))
- **kit:** select does not open when clicking near the border in TuiInputPhoneInternational
  ([#12241](https://github.com/taiga-family/taiga-ui/issues/12241))
  ([1bdad78](https://github.com/taiga-family/taiga-ui/commit/1bdad78fb8ab8ae6ff466f9f2d983d99f80a02e8))

### 🚀 Features

- **addon-commerce:** `InputCardGroup` add `compact` mode
  ([#12236](https://github.com/taiga-family/taiga-ui/issues/12236))
  ([7ec2847](https://github.com/taiga-family/taiga-ui/commit/7ec284730f120afdc28ea056acafe564fe629299))
- **core:** support empty appearance ([#12206](https://github.com/taiga-family/taiga-ui/issues/12206))
  ([da497e8](https://github.com/taiga-family/taiga-ui/commit/da497e812931bd4089c2e3433123b66ba6df0618))

## [4.57.0](https://github.com/taiga-family/taiga-ui/compare/v4.56.0...v4.57.0) (2025-10-06)

### 🚀 Features

- **kit:** `InputRange` has new appearance for readonly/disabled state
  ([#12136](https://github.com/taiga-family/taiga-ui/issues/12136))
  ([8de5832](https://github.com/taiga-family/taiga-ui/commit/8de5832502191a90b53622edffc6a65709146e06))

### 🐞 Bug Fixes

- **cdk:** `Obscured` properly handle offscreen case ([#12135](https://github.com/taiga-family/taiga-ui/issues/12135))
  ([d6e105e](https://github.com/taiga-family/taiga-ui/commit/d6e105e60fac59d429ca5236564661d4e9034c3c))
- **core:** `Textfield` fix label size and position ([#12137](https://github.com/taiga-family/taiga-ui/issues/12137))
  ([b65ad6a](https://github.com/taiga-family/taiga-ui/commit/b65ad6a926bc30581e851491cef11a4f32fa7dd4))
- **kit:** `InputSlider` has broken drag behavior for slider in Firefox
  ([#12084](https://github.com/taiga-family/taiga-ui/issues/12084))
  ([1bba1df](https://github.com/taiga-family/taiga-ui/commit/1bba1dff0e3e680121a2fdaef3896b4c0f92047f))

## [4.56.0](https://github.com/taiga-family/taiga-ui/compare/v4.55.0...v4.56.0) (2025-09-30)

### 🚀 Features

- **cdk:** ensure `TUI_MOBILE_REGEXP` ([#12040](https://github.com/taiga-family/taiga-ui/issues/12040))
  ([b4349e1](https://github.com/taiga-family/taiga-ui/commit/b4349e15bf89a45aa1ac681db73b6cb3ef5478c4))
- **kit:** `ConfirmService` allow component customization
  ([#12051](https://github.com/taiga-family/taiga-ui/issues/12051))
  ([492bb8c](https://github.com/taiga-family/taiga-ui/commit/492bb8cea18962ef778019badf34fd48d9882541))
- **kit:** `InputSlider` has new paddings for slider track
  ([#12074](https://github.com/taiga-family/taiga-ui/issues/12074))
  ([f497ad6](https://github.com/taiga-family/taiga-ui/commit/f497ad6df40f5b56597942673e5c033175c9b7ab))
- **kit:** `InputSlider` hides slider for non-interactive state
  ([#12072](https://github.com/taiga-family/taiga-ui/issues/12072))
  ([0f9aab9](https://github.com/taiga-family/taiga-ui/commit/0f9aab9431dff13df378a544a5fb41227f102565))
- **kit:** `Rating` add `filled` to icon context ([#12035](https://github.com/taiga-family/taiga-ui/issues/12035))
  ([7dc0d93](https://github.com/taiga-family/taiga-ui/commit/7dc0d93085122c0dd733a31909288f60ed600711))
- **kit:** `Rating` add background color customization ([#12034](https://github.com/taiga-family/taiga-ui/issues/12034))
  ([9ced233](https://github.com/taiga-family/taiga-ui/commit/9ced2336798d3a527873836abd7f5a5bdd7dd50c))
- **kit:** `Toast` add service ([#11959](https://github.com/taiga-family/taiga-ui/issues/11959))
  ([d8915e6](https://github.com/taiga-family/taiga-ui/commit/d8915e6aacc8f467fd97d7132aaf792e4fe29b68))

### 🐞 Bug Fixes

- **addon-doc:** ignore min-height if header title is not provided
  ([#12095](https://github.com/taiga-family/taiga-ui/issues/12095))
  ([161fa01](https://github.com/taiga-family/taiga-ui/commit/161fa01150777ccedcd7f8b09d99639dc7d85fb0))
- **addon-table:** ensure default sorter always has a unique reference
  ([#12009](https://github.com/taiga-family/taiga-ui/issues/12009))
  ([82a743c](https://github.com/taiga-family/taiga-ui/commit/82a743c72bcc9e5d15ecf926e59cd948a698d286))
- **core:** ensure box-shadow works in Safari 26 for `tuiAppearance`
  ([#12082](https://github.com/taiga-family/taiga-ui/issues/12082))
  ([ccc740c](https://github.com/taiga-family/taiga-ui/commit/ccc740cc4ed92647f3b7f1e8fcc6113780af1d49))
- **kit:** `Checkbox`/`Radio`/`Switch` increase style specificity for disabled state
  ([#12050](https://github.com/taiga-family/taiga-ui/issues/12050))
  ([93a99e3](https://github.com/taiga-family/taiga-ui/commit/93a99e39866ecacbd111f360a574379432dc1227))
- **kit:** `MultiSelectGroup` fix empty view ([#12087](https://github.com/taiga-family/taiga-ui/issues/12087))
  ([446c2fc](https://github.com/taiga-family/taiga-ui/commit/446c2fc303770494b72332d1446e6a554ecfbcfe))
- **kit:** `TuiQuantumValueTransformer` has invalid default value
  ([#12060](https://github.com/taiga-family/taiga-ui/issues/12060))
  ([a718822](https://github.com/taiga-family/taiga-ui/commit/a718822e3c387e2635baec6f88bca7b2a4244167))

## [4.55.0](https://github.com/taiga-family/taiga-ui/compare/v4.54.0...v4.55.0) (2025-09-22)

### 🐞 Bug Fixes

- **addon-mobile:** close sheet dialog when navigating to a new route
  ([#11991](https://github.com/taiga-family/taiga-ui/issues/11991))
  ([947c94b](https://github.com/taiga-family/taiga-ui/commit/947c94b1100a0f9f7d3643fbdd1bac5da66f8483))
- **cdk:** `Animated` fix memory leak ([#11986](https://github.com/taiga-family/taiga-ui/issues/11986))
  ([04b4e2e](https://github.com/taiga-family/taiga-ui/commit/04b4e2ea9104a56f720b0779ad453033a51da556))
- **experimental:** `Dialog` fix `label` ([#12019](https://github.com/taiga-family/taiga-ui/issues/12019))
  ([b2d3c42](https://github.com/taiga-family/taiga-ui/commit/b2d3c424cfb55a03b7335873b0eddd2b3ba8af74))

### 🚀 Features

- **addon-commerce:** `InputCardGroup` add 'm' size ([#11949](https://github.com/taiga-family/taiga-ui/issues/11949))
  ([55c0265](https://github.com/taiga-family/taiga-ui/commit/55c0265bd146efd978855f1a6a76fc07310bf3ba))
- **core:** `Dialogs` auto attach to current active zone
  ([#11995](https://github.com/taiga-family/taiga-ui/issues/11995))
  ([f8911f5](https://github.com/taiga-family/taiga-ui/commit/f8911f5343c9cb3cb19e5b7b6d3f9178e3f70c17))
- **kit:** add toast component ([#11556](https://github.com/taiga-family/taiga-ui/issues/11556))
  ([c867cb8](https://github.com/taiga-family/taiga-ui/commit/c867cb8cec34fe0660d34a9c89285d04f97c4e0b))
- **kit:** more intuitive way for users to remove input chips by backspace
  ([#11980](https://github.com/taiga-family/taiga-ui/issues/11980))
  ([8a6613f](https://github.com/taiga-family/taiga-ui/commit/8a6613fa7733f32b0b71d444be47a62649fc1b98))

## [4.54.0](https://github.com/taiga-family/taiga-ui/compare/v4.53.0...v4.54.0) (2025-09-15)

### 🐞 Bug Fixes

- **addon-mobile:** update button's spec ([#11929](https://github.com/taiga-family/taiga-ui/issues/11929))
  ([d2e28b9](https://github.com/taiga-family/taiga-ui/commit/d2e28b9a4df03e923339eb5746e1abf0e5da838d))
- **cdk:** `Transitioned` fix for `Textfield` and `Switch`
  ([#11874](https://github.com/taiga-family/taiga-ui/issues/11874))
  ([0b2e480](https://github.com/taiga-family/taiga-ui/commit/0b2e4801a394c3bfaca5673e01485ab966b64547))
- **kit:** `InputNumber` updateOn: "blur" ([#11901](https://github.com/taiga-family/taiga-ui/issues/11901))
  ([2cc325f](https://github.com/taiga-family/taiga-ui/commit/2cc325f63c200e381ad22cc45fd00130229a0eb8))
- **kit:** Safari bug where line clamp ellipsis doesn't hide properly
  ([#11872](https://github.com/taiga-family/taiga-ui/issues/11872))
  ([17aca0e](https://github.com/taiga-family/taiga-ui/commit/17aca0e4b71394f31c90ddb3b021618e4f9e2dd6))
- **kit:** update pager by new specification ([#11881](https://github.com/taiga-family/taiga-ui/issues/11881))
  ([bb53f4d](https://github.com/taiga-family/taiga-ui/commit/bb53f4d6f6a24b08aa0e58988c674a46c3d03e06))
- **kit:** update switch by correct specification ([#11891](https://github.com/taiga-family/taiga-ui/issues/11891))
  ([80f0139](https://github.com/taiga-family/taiga-ui/commit/80f0139fdb629afad1a202e8fb9ca6b29ce14ee7))

## [4.53.0](https://github.com/taiga-family/taiga-ui/compare/v4.52.0...v4.53.0) (2025-09-08)

### 🚀 Features

- **addon-mobile:** `SheetDialog` add basic HTML support
  ([#11858](https://github.com/taiga-family/taiga-ui/issues/11858))
  ([b9bbe71](https://github.com/taiga-family/taiga-ui/commit/b9bbe7173be4b6505e50f6be75f6c43a0d10de6a))
- **experimental:** `PdfViewer` add new component ([#11823](https://github.com/taiga-family/taiga-ui/issues/11823))
  ([5ebadc7](https://github.com/taiga-family/taiga-ui/commit/5ebadc7be0fe48ad40adb019edac181b4c68d6ad))
- **kit:** update the badge margin inside the chip according to the specs
  ([#11827](https://github.com/taiga-family/taiga-ui/issues/11827))
  ([20c92dd](https://github.com/taiga-family/taiga-ui/commit/20c92dd2963de871af3e683ff00da041405be64d))

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` label raised on first focus
  ([#11832](https://github.com/taiga-family/taiga-ui/issues/11832))
  ([8d87d6a](https://github.com/taiga-family/taiga-ui/commit/8d87d6afc75201148c6694daddc65aa4f7479a03))
- **core:** `Fullscreen` add scroll ([#11855](https://github.com/taiga-family/taiga-ui/issues/11855))
  ([#11861](https://github.com/taiga-family/taiga-ui/issues/11861))
  ([20b7b6a](https://github.com/taiga-family/taiga-ui/commit/20b7b6a22ea55d486c6805319ae8bbe82265ea2a))
- **core:** `TUI_DARK_MODE` factory effect in reactive context
  ([#11864](https://github.com/taiga-family/taiga-ui/issues/11864))
  ([61c6c79](https://github.com/taiga-family/taiga-ui/commit/61c6c792b15bfd42bb02c013ca56154acb2be681))

## [4.52.0](https://github.com/taiga-family/taiga-ui/compare/v4.51.0...v4.52.0) (2025-09-01)

### 🐞 Bug Fixes

- **core:** `Textfield` ensure non-erasable affixes actually deleted
  ([#11779](https://github.com/taiga-family/taiga-ui/issues/11779))
  ([9405526](https://github.com/taiga-family/taiga-ui/commit/940552608c6aa6d30198d269cdb9863e3bd0e892))
- **core:** `Textfield` fix conditionally adding input tag
  ([#11784](https://github.com/taiga-family/taiga-ui/issues/11784))
  ([70d0b5b](https://github.com/taiga-family/taiga-ui/commit/70d0b5b66017fcc734520e51e61f27e18f3e0736))
- **kit:** `InputPin` fix longtap ([#11771](https://github.com/taiga-family/taiga-ui/issues/11771))
  ([5f6a9a9](https://github.com/taiga-family/taiga-ui/commit/5f6a9a98cc38bb051afd933e9cf3aa595d4851b8))

### 🚀 Features

- **addon-table:** respect min-width and max-width constraints
  ([#11704](https://github.com/taiga-family/taiga-ui/issues/11704))
  ([2ba2a99](https://github.com/taiga-family/taiga-ui/commit/2ba2a995161e6e5869c43e2e1fd596feb86c8e4b))
- **cdk:** `provideOptions` allow functions to extract options from DI
  ([#11805](https://github.com/taiga-family/taiga-ui/issues/11805))
  ([bc5a778](https://github.com/taiga-family/taiga-ui/commit/bc5a7786faf7e3e6bf97ed72ac26d64095682e5a))
- **core:** implement icon mode resolution system ([#10938](https://github.com/taiga-family/taiga-ui/issues/10938))
  ([#11592](https://github.com/taiga-family/taiga-ui/issues/11592))
  ([64a0022](https://github.com/taiga-family/taiga-ui/commit/64a00225cb5b99b5ec4127f921a212a191415866))
- **kit:** `NotificationMiddle` add new component ([#11797](https://github.com/taiga-family/taiga-ui/issues/11797))
  ([9a91b83](https://github.com/taiga-family/taiga-ui/commit/9a91b8375d6c9eced538dc8eb34b4593456f9af1))
- **kit:** improved UX for input chip element ([#11807](https://github.com/taiga-family/taiga-ui/issues/11807))
  ([1c3b201](https://github.com/taiga-family/taiga-ui/commit/1c3b20172c3b3acbed80fd88a393282b58ab2c37))
- **schematics:** update parse5 ([#11736](https://github.com/taiga-family/taiga-ui/issues/11736))
  ([d411dfa](https://github.com/taiga-family/taiga-ui/commit/d411dfa82a381006220d00d8e700b822058dece2))

## [4.51.0](https://github.com/taiga-family/taiga-ui/compare/v4.50.0...v4.51.0) (2025-08-27)

### 🚀 Features

- **experimental:** `Dialog` add fullscreen appearance ([#11707](https://github.com/taiga-family/taiga-ui/issues/11707))
  ([9760d44](https://github.com/taiga-family/taiga-ui/commit/9760d44aff79be6e82c13ebcc91178e4e7c34339))
- **kit:** `Slides` add new component ([#11761](https://github.com/taiga-family/taiga-ui/issues/11761))
  ([8f4781b](https://github.com/taiga-family/taiga-ui/commit/8f4781b9bca8504f7ba8371f2289528c1744c733))
- **kit:** new version of `InputRange` ([#11645](https://github.com/taiga-family/taiga-ui/issues/11645))
  ([6f08601](https://github.com/taiga-family/taiga-ui/commit/6f08601d2cb673bc50458f38566306619afadfa3))
- **testing:** supports merging large images ([#11768](https://github.com/taiga-family/taiga-ui/issues/11768))
  ([c39bc82](https://github.com/taiga-family/taiga-ui/commit/c39bc82d411806a56328f67de0d099ab72b057ea))

### 🐞 Bug Fixes

- **addon-table:** `TableControl` fix change detection ([#11691](https://github.com/taiga-family/taiga-ui/issues/11691))
  ([f46a6e2](https://github.com/taiga-family/taiga-ui/commit/f46a6e2745f55f1def73ba2a00b9a857193c5ce9))
- **cdk:** `Transitioned` add directive to hide initial transitions
  ([#11770](https://github.com/taiga-family/taiga-ui/issues/11770))
  ([e0c3047](https://github.com/taiga-family/taiga-ui/commit/e0c304709740f9456fd44b770e21353e4157151e))
- **core:** `Scrollbar` fix bars overflowing container ([#11712](https://github.com/taiga-family/taiga-ui/issues/11712))
  ([e2fca23](https://github.com/taiga-family/taiga-ui/commit/e2fca237d9baebb644edcba79100fc6a1ff39dd0))
- **core:** add `try/catch` around `showPicker()` to handle cross-origin iframe errors
  ([#11669](https://github.com/taiga-family/taiga-ui/issues/11669))
  ([e7e62a1](https://github.com/taiga-family/taiga-ui/commit/e7e62a12704b82d6deea87f3953d80f924258609))
- **kit:** `Avatar` hide overflowing content ([#11703](https://github.com/taiga-family/taiga-ui/issues/11703))
  ([8bacb20](https://github.com/taiga-family/taiga-ui/commit/8bacb20521766172f961aaccb4de8d7b5c1ad30d))
- **kit:** `InputChip` fix long items in string view ([#11708](https://github.com/taiga-family/taiga-ui/issues/11708))
  ([5b4ec51](https://github.com/taiga-family/taiga-ui/commit/5b4ec51dc525e711da6e434563cf1e05da8fc096))
- **kit:** `InputChip` fix multiple style issues ([#11765](https://github.com/taiga-family/taiga-ui/issues/11765))
  ([28b4bd9](https://github.com/taiga-family/taiga-ui/commit/28b4bd90066cba9a45a1d80c7669e8d9d4f33790))
- **kit:** `InputSlider` has broken alignment for slider ticks
  ([#11688](https://github.com/taiga-family/taiga-ui/issues/11688))
  ([2c9ec95](https://github.com/taiga-family/taiga-ui/commit/2c9ec950f6b93dd7cd35dd6f95842a18763fb3f6))
- **kit:** `Switch` fix icon position ([#11677](https://github.com/taiga-family/taiga-ui/issues/11677))
  ([e7a7616](https://github.com/taiga-family/taiga-ui/commit/e7a7616a28e058bb44c5394e5a70d440211670af))
- **kit:** `Textarea` fix focusing when scrollbar is dragged
  ([#11758](https://github.com/taiga-family/taiga-ui/issues/11758))
  ([12f4172](https://github.com/taiga-family/taiga-ui/commit/12f4172c3c352361be5a2aa2dfd5a2f8f44e0584))
- **kit:** `Textarea` increase style specificity for safari 15
  ([#11733](https://github.com/taiga-family/taiga-ui/issues/11733))
  ([ed0b5c7](https://github.com/taiga-family/taiga-ui/commit/ed0b5c7b42766e511dda33bac48dab5a152aefb6))

## [4.50.0](https://github.com/taiga-family/taiga-ui/compare/v4.49.0...v4.50.0) (2025-08-18)

### 🚀 Features

- **addon-table:** `TableControl` add new directive ([#11536](https://github.com/taiga-family/taiga-ui/issues/11536))
  ([3cf004d](https://github.com/taiga-family/taiga-ui/commit/3cf004d17d883d4c6c7e9e41a3dffa390f8a1a79))
- **core:** `Hint` add hover state event emitter ([#11513](https://github.com/taiga-family/taiga-ui/issues/11513))
  ([1adf5ad](https://github.com/taiga-family/taiga-ui/commit/1adf5ad81cb0fb8b476690fc0f6be6dc353ede94))
- **experimental:** `Dialog` add new component ([#11595](https://github.com/taiga-family/taiga-ui/issues/11595))
  ([8ea68a7](https://github.com/taiga-family/taiga-ui/commit/8ea68a7ea1e78d47109477b4580f6e4c591e1b52))
- **kit:** `AvatarStack` update offset according to specs
  ([#11621](https://github.com/taiga-family/taiga-ui/issues/11621))
  ([e182355](https://github.com/taiga-family/taiga-ui/commit/e18235536fa21b54a84f32228d09d5892d878b13))
- **kit:** `ThumbnailCard` update icon size according to specs
  ([#11625](https://github.com/taiga-family/taiga-ui/issues/11625))
  ([1e942c4](https://github.com/taiga-family/taiga-ui/commit/1e942c44df6ede9689b28584cc7a86bd3b659885))

### 🐞 Bug Fixes

- **addon-mobile:** `Notification` fix subtitle color on mobile
  ([#11672](https://github.com/taiga-family/taiga-ui/issues/11672))
  ([e139de7](https://github.com/taiga-family/taiga-ui/commit/e139de715ec37cdbc0b58704290052a207ce2861))
- **addon-table:** properly clear sort ([#11563](https://github.com/taiga-family/taiga-ui/issues/11563))
  ([ffd6a77](https://github.com/taiga-family/taiga-ui/commit/ffd6a7799b4f4c1ade93746ad7c7089e7d8242df))
- **core:** fix invalid state of appearances when used on `TextfieldMulti`
  ([#11623](https://github.com/taiga-family/taiga-ui/issues/11623))
  ([989fd38](https://github.com/taiga-family/taiga-ui/commit/989fd38a9f781e8072dc7ed9823fefc826cdaadc))
- **kit:** `formControl.setValue()` inside `effect` should not produce circular dependency
  ([#11627](https://github.com/taiga-family/taiga-ui/issues/11627))
  ([c59f438](https://github.com/taiga-family/taiga-ui/commit/c59f43801ed89c4f8c42fd3c6d2c3fe4995acc71))
- **kit:** `InputFiles` fix `invalid` property ([#11540](https://github.com/taiga-family/taiga-ui/issues/11540))
  ([0990df7](https://github.com/taiga-family/taiga-ui/commit/0990df7fb70d58cc69bd3f69e2a8462ca228b805))
- **kit:** `InputNumber` is incompatible with `AbsValueTransformer`
  ([#11570](https://github.com/taiga-family/taiga-ui/issues/11570))
  ([5fd8326](https://github.com/taiga-family/taiga-ui/commit/5fd832612725cd05611f70c9121d6dd3d2452bb6))
- **kit:** `InputNumber` with `[postfix]="value | i18nPlural"` has race condition for `[ngModel]`
  ([#11608](https://github.com/taiga-family/taiga-ui/issues/11608))
  ([90dced1](https://github.com/taiga-family/taiga-ui/commit/90dced1ac000ff0fb12fdb4a5a6d08afabd78d5e))
- **kit:** `Slider` fix thickness in Firefox ([#11616](https://github.com/taiga-family/taiga-ui/issues/11616))
  ([87ff2d6](https://github.com/taiga-family/taiga-ui/commit/87ff2d6a9866176a356ff176ccfb6b1a876f5da5))
- **kit:** fixes file container size for prevent overflow extension of file
  ([#11605](https://github.com/taiga-family/taiga-ui/issues/11605))
  ([eded1db](https://github.com/taiga-family/taiga-ui/commit/eded1dbda74704bfac7321015d5405aa651298a6))

## [4.49.0](https://github.com/taiga-family/taiga-ui/compare/v4.48.0...v4.49.0) (2025-08-11)

### 🐞 Bug Fixes

- **cdk:** `NativeValidator` fix premature validation ([#11559](https://github.com/taiga-family/taiga-ui/issues/11559))
  ([f9ea7b2](https://github.com/taiga-family/taiga-ui/commit/f9ea7b28e994db383ee0a6192459b9963c18eff3))
- **core:** `Appearance` update `outline` according to the specs
  ([#11530](https://github.com/taiga-family/taiga-ui/issues/11530))
  ([653ff65](https://github.com/taiga-family/taiga-ui/commit/653ff658d1bd442fc02b323adbd9ec604a69e5ca))
- **core:** `DropdownSelection` fix position inside new textarea
  ([#11560](https://github.com/taiga-family/taiga-ui/issues/11560))
  ([366a3fe](https://github.com/taiga-family/taiga-ui/commit/366a3feac2d36f86ed4f05b3c209ac045a054ec1))
- **core:** `DropdownSided` change position depending on height instead of min-height
  ([#11539](https://github.com/taiga-family/taiga-ui/issues/11539))
  ([b720596](https://github.com/taiga-family/taiga-ui/commit/b720596ab5587e1956f5a9e780a994e2ba139273))
- **core:** `Textfield` with `[content]` has CD problems on form control value patch
  ([#11531](https://github.com/taiga-family/taiga-ui/issues/11531))
  ([93e01aa](https://github.com/taiga-family/taiga-ui/commit/93e01aa61fd41250d05246fd41f403d67db62866))

### 🚀 Features

- **addon-mobile:** `DropdownMobile` safe-area top/bottom support
  ([#11497](https://github.com/taiga-family/taiga-ui/issues/11497))
  ([3cb228f](https://github.com/taiga-family/taiga-ui/commit/3cb228ff7c4ad9374cb407a72994d231fd41e065))
- **cdk:** detect webdriver by default in e2e token ([#11523](https://github.com/taiga-family/taiga-ui/issues/11523))
  ([a30d3e0](https://github.com/taiga-family/taiga-ui/commit/a30d3e0fbb908e7f9babb636fe76438fb284cef3))
- **kit:** `InputNumber` & `InputSlider` support `quantum` property
  ([#11567](https://github.com/taiga-family/taiga-ui/issues/11567))
  ([19aef91](https://github.com/taiga-family/taiga-ui/commit/19aef91d49c0c7a4f5fbc5377f1e0acb5d118851))
- **kit:** `InputPhone` add new component ([#11498](https://github.com/taiga-family/taiga-ui/issues/11498))
  ([0b5890f](https://github.com/taiga-family/taiga-ui/commit/0b5890f30509654f0650fd54c87a8bd00202f2fd))
- **kit:** `Slider`/`Range` allow track thickness customization
  ([#11528](https://github.com/taiga-family/taiga-ui/issues/11528))
  ([f3799af](https://github.com/taiga-family/taiga-ui/commit/f3799afca4e270ed55d14c163b73940550f3f806))

## [4.48.0](https://github.com/taiga-family/taiga-ui/compare/v4.47.0...v4.48.0) (2025-08-04)

### 🚀 Features

- **kit:** `Copy` add component ([#11510](https://github.com/taiga-family/taiga-ui/issues/11510))
  ([72f54ab](https://github.com/taiga-family/taiga-ui/commit/72f54ab17d366ac9663afd9f7ac52dc690f46e70))
- **kit:** `InputNumber` supports continuous stepping on mouse hold over buttons
  ([#10923](https://github.com/taiga-family/taiga-ui/issues/10923))
  ([2bcb326](https://github.com/taiga-family/taiga-ui/commit/2bcb326e3d9145f8e09ae78776fde120d3fe5507))
- **kit:** `Range` supports RTL ([#11474](https://github.com/taiga-family/taiga-ui/issues/11474))
  ([0534bde](https://github.com/taiga-family/taiga-ui/commit/0534bde7266f66fd6fd48934b3f73d35bdf0deae))
- **testing:** configure env variables ([#11487](https://github.com/taiga-family/taiga-ui/issues/11487))
  ([b304a4a](https://github.com/taiga-family/taiga-ui/commit/b304a4a76cb3871fd0bf549f742c54cbb7a8b07d))

### 🐞 Bug Fixes

- **addon-doc:** ignore padding when header is not defined
  ([#11483](https://github.com/taiga-family/taiga-ui/issues/11483))
  ([2bea4d0](https://github.com/taiga-family/taiga-ui/commit/2bea4d00eb3d441d63e29c80f0538c81f60b487a))
- **kit:** `ComboBox` should recompute stringified textfield value on new value of `stringify` handler
  ([#11501](https://github.com/taiga-family/taiga-ui/issues/11501))
  ([582230f](https://github.com/taiga-family/taiga-ui/commit/582230f5be27fc457fd64e19bac9c090a5e50c88))
- **kit:** `FluidTypography` update default values according to the spec
  ([#11476](https://github.com/taiga-family/taiga-ui/issues/11476))
  ([fa64a58](https://github.com/taiga-family/taiga-ui/commit/fa64a586c52678b857d4cb6f71f97b0b56ee18e6))
- **kit:** `InputDate` & `InputDateRange` fail to clear value on `formControl.reset()`
  ([#11406](https://github.com/taiga-family/taiga-ui/issues/11406))
  ([e2835bb](https://github.com/taiga-family/taiga-ui/commit/e2835bbbfb4b3eafb02255d13e9cb3572fc860ff))
- **kit:** `InputDateMulti` fix `TuiNativeValidator matches multiple times` error
  ([#11500](https://github.com/taiga-family/taiga-ui/issues/11500))
  ([775599e](https://github.com/taiga-family/taiga-ui/commit/775599e4392255a48fd41778bf5c983b21c6b58b))
- **kit:** `InputTime`, `InputDate`, `InputMonth` with native picker ignore initial form control value
  ([#11460](https://github.com/taiga-family/taiga-ui/issues/11460))
  ([0c189f3](https://github.com/taiga-family/taiga-ui/commit/0c189f3d8811cad3cdc49ffff147bca60fca6435))
- **legacy:** broken backward compatibility for `TUI_OPTION_CONTENT` of legacy `Option` component
  ([#11521](https://github.com/taiga-family/taiga-ui/issues/11521))
  ([abc1f54](https://github.com/taiga-family/taiga-ui/commit/abc1f541bf6efd9c8dc4f5e7ac9014695189b511))
- **styles:** revert wrong replacing ([#11499](https://github.com/taiga-family/taiga-ui/issues/11499))
  ([373d9ea](https://github.com/taiga-family/taiga-ui/commit/373d9ea86f558c32c5881c932725b1cc699fe1ee))

## [4.47.0](https://github.com/taiga-family/taiga-ui/compare/v4.46.0...v4.47.0) (2025-07-29)

### 🚀 Features

- **addon-mobile:** add support for required option in sheet dialog
  ([#11327](https://github.com/taiga-family/taiga-ui/issues/11327))
  ([65ea12b](https://github.com/taiga-family/taiga-ui/commit/65ea12b553d7dcf2cbe29032dbd5600e94490ee2))
- **core:** compute CSS URL resource only when icon name has changed
  ([#11462](https://github.com/taiga-family/taiga-ui/issues/11462))
  ([5715ba3](https://github.com/taiga-family/taiga-ui/commit/5715ba3cc638dabd31e1e65226b97b2f9cded8c9))
- **kit:** `Drawer` support safe-area top/bottom ([#11296](https://github.com/taiga-family/taiga-ui/issues/11296))
  ([b796cb7](https://github.com/taiga-family/taiga-ui/commit/b796cb70e166ca2d259fe1965e90806eb7362df3))
- **kit:** `InputYear` refactor to new `Textfield` ([#11258](https://github.com/taiga-family/taiga-ui/issues/11258))
  ([e5cb537](https://github.com/taiga-family/taiga-ui/commit/e5cb537520d3e110c37cd0d9ef8c2fa8c2a90c46))
- **kit:** `Preview` supports configuration of initial zoom
  ([#11436](https://github.com/taiga-family/taiga-ui/issues/11436))
  ([3b06ea4](https://github.com/taiga-family/taiga-ui/commit/3b06ea4d0fa01e6f6cfb5238118702b7aec4928e))

### 🐞 Bug Fixes

- **addon-table:** double emit sorting events, when sort other key
  ([#11432](https://github.com/taiga-family/taiga-ui/issues/11432))
  ([29ba453](https://github.com/taiga-family/taiga-ui/commit/29ba453b00b49ce805ec12c4d5a5712b580773df))
- **cdk:** `TuiDay.toLocalNativeDate()` does not support year < 1900
  ([#11407](https://github.com/taiga-family/taiga-ui/issues/11407))
  ([5b796cc](https://github.com/taiga-family/taiga-ui/commit/5b796cc603f9c7c16dbc4abb2159974dc9d29455))
- **core:** prevent click handling when the button has type submit
  ([#11317](https://github.com/taiga-family/taiga-ui/issues/11317))
  ([249847f](https://github.com/taiga-family/taiga-ui/commit/249847fb1755a72752f47653427a03018150328f))
- **kit, legacy:** date-related controls & `ComboBox` with `readOnly=true` should not open dropdown on click
  ([#11461](https://github.com/taiga-family/taiga-ui/issues/11461))
  ([d99469c](https://github.com/taiga-family/taiga-ui/commit/d99469c7a62783c9ff0c6b8bcaba0907c166c6b1))
- **kit:** `Avatar` do not inherit border-radius for colored svg
  ([#11421](https://github.com/taiga-family/taiga-ui/issues/11421))
  ([4173de2](https://github.com/taiga-family/taiga-ui/commit/4173de2af591c034c98d1cc68f24759de569b2c5))
- **kit:** `ComboBox` fails to use zero as form control value
  ([#11414](https://github.com/taiga-family/taiga-ui/issues/11414))
  ([aa6c74c](https://github.com/taiga-family/taiga-ui/commit/aa6c74ccaa4219a75c08c7a12457889d575c05e3))
- **kit:** `ComboBox` with virtual scroll resets form control value on scroll
  ([#11413](https://github.com/taiga-family/taiga-ui/issues/11413))
  ([7f92639](https://github.com/taiga-family/taiga-ui/commit/7f926393a3462483d5d20cb8e92cc4a35be32ad6))
- **kit:** `InputChip` fix overriding X icon ([#11435](https://github.com/taiga-family/taiga-ui/issues/11435))
  ([606af04](https://github.com/taiga-family/taiga-ui/commit/606af0412eb5a1c6ef6dd4b5dd975e0998424413))
- **kit:** `InputDateMulti` fix importing ([#11444](https://github.com/taiga-family/taiga-ui/issues/11444))
  ([cefd30b](https://github.com/taiga-family/taiga-ui/commit/cefd30ba18001d9d090d243b92f5ff20722093d2))
- **kit:** escape key propagation in preview dialog to prevent closing parent dialog
  ([#11419](https://github.com/taiga-family/taiga-ui/issues/11419))
  ([ac86533](https://github.com/taiga-family/taiga-ui/commit/ac8653330dc14007149ef88d1321d31efc69d77d))

## [4.46.0](https://github.com/taiga-family/taiga-ui/compare/v4.45.0...v4.46.0) (2025-07-22)

### 🐞 Bug Fixes

- **addon-doc:** add `[new]` attribute to option in i18n select button
  ([#11320](https://github.com/taiga-family/taiga-ui/issues/11320))
  ([8d214f0](https://github.com/taiga-family/taiga-ui/commit/8d214f0ba489b5bbbc909a5969d8c25160029484))
- **core:** add fine-grained reactivity update in textfield
  ([#11328](https://github.com/taiga-family/taiga-ui/issues/11328))
  ([1e34b31](https://github.com/taiga-family/taiga-ui/commit/1e34b314be34d637c3642702d2b1c15a20b9a093))
- **kit:** `Avatar` fix 404 in safari ([#11367](https://github.com/taiga-family/taiga-ui/issues/11367))
  ([e2b4c0b](https://github.com/taiga-family/taiga-ui/commit/e2b4c0bf3db4133a09b3a0e7a0f6e79fb3c54c6b))
- **kit:** `ComboBox` / `InputTime` has broken cleaner ([#11326](https://github.com/taiga-family/taiga-ui/issues/11326))
  ([1e093fc](https://github.com/taiga-family/taiga-ui/commit/1e093fc9347f69b14f56e7234a0f9d225be956d1))
- **kit:** `Textarea` throws `NG0502: During hydration, Angular expected an element to be present at this location`
  ([#11387](https://github.com/taiga-family/taiga-ui/issues/11387))
  ([19eed34](https://github.com/taiga-family/taiga-ui/commit/19eed34bfcfbe00135429664f9616d1c75a63381))
- **kit:** correct open dropdown in textfield ([#11325](https://github.com/taiga-family/taiga-ui/issues/11325))
  ([5b72c24](https://github.com/taiga-family/taiga-ui/commit/5b72c24cc1a8a69c6251187cde8ab4ee83811166))
- **kit:** improve `tuiBadge` with `tuiStatus` in small size
  ([#11334](https://github.com/taiga-family/taiga-ui/issues/11334))
  ([b0bb2a3](https://github.com/taiga-family/taiga-ui/commit/b0bb2a3d50636c1ad813a824aa539b948b6068d5))
- **legacy:** `MultiSelect` has missing checked indicator
  ([#11385](https://github.com/taiga-family/taiga-ui/issues/11385))
  ([e1908d8](https://github.com/taiga-family/taiga-ui/commit/e1908d8586d827ab782e51a59611c3b5a41b9870))

### 🚀 Features

- **kit:** `BadgedContent` add border when using image ([#11336](https://github.com/taiga-family/taiga-ui/issues/11336))
  ([6b4bf84](https://github.com/taiga-family/taiga-ui/commit/6b4bf8409392edfc67e10b075cedf57e6cdfadf7))
- **kit:** `InputDateMulti` add new component ([#11287](https://github.com/taiga-family/taiga-ui/issues/11287))
  ([172c753](https://github.com/taiga-family/taiga-ui/commit/172c753922caa291f77df8ae8ccd6b20d733358a))
- **kit:** `InputDateTime` add new `Textfield` based version
  ([#11305](https://github.com/taiga-family/taiga-ui/issues/11305))
  ([1730461](https://github.com/taiga-family/taiga-ui/commit/17304612750b39db40929014b7d4b8a1cb764753))
- **kit:** `Pager` support rtl ([#11389](https://github.com/taiga-family/taiga-ui/issues/11389))
  ([2a54805](https://github.com/taiga-family/taiga-ui/commit/2a548059038715aff2d1d1b3cf32b612c2d5a657))

## [4.45.0](https://github.com/taiga-family/taiga-ui/compare/v4.44.0...v4.45.0) (2025-07-14)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCard` use non-breaking spaces to support RTL
  ([#11284](https://github.com/taiga-family/taiga-ui/issues/11284))
  ([a42aae9](https://github.com/taiga-family/taiga-ui/commit/a42aae94ae6357749ee231900b0f4daefe1a85de))
- **core:** `Group` support for RTL ([#11265](https://github.com/taiga-family/taiga-ui/issues/11265))
  ([da2242c](https://github.com/taiga-family/taiga-ui/commit/da2242c8b3e2170bda318633fcf47fb40c6bcfdd))
- **core:** `Scrollbar` support for RTL ([#11277](https://github.com/taiga-family/taiga-ui/issues/11277))
  ([8431f17](https://github.com/taiga-family/taiga-ui/commit/8431f17a9c553cf8c63f74cb5439f5d172e4a20c))
- **core:** chevron buttons support for RTL ([#11276](https://github.com/taiga-family/taiga-ui/issues/11276))
  ([94d7cc8](https://github.com/taiga-family/taiga-ui/commit/94d7cc8ac0aa6f61dae8a1365531e5af47fecca8))
- **core:** support invalid highlight inside `tuiTable`
  ([#11297](https://github.com/taiga-family/taiga-ui/issues/11297))
  ([3f1af5a](https://github.com/taiga-family/taiga-ui/commit/3f1af5a4048a6d6b550b92157c8ed0fb850a70e5))
- **kit:** `Fade` support for RTL ([#11266](https://github.com/taiga-family/taiga-ui/issues/11266))
  ([2c12ba9](https://github.com/taiga-family/taiga-ui/commit/2c12ba92f439280f956e61e8ecc471afa02a2009))
- **kit:** `InputDate` fix closing parent dropdown ([#11302](https://github.com/taiga-family/taiga-ui/issues/11302))
  ([3ef0874](https://github.com/taiga-family/taiga-ui/commit/3ef0874cab0dd9e7d4e21d5ab22688864a764e5d))
- **kit:** `InputNumber` support for RTL ([#11282](https://github.com/taiga-family/taiga-ui/issues/11282))
  ([06ba9a9](https://github.com/taiga-family/taiga-ui/commit/06ba9a98d712ab6769fd89760547c1cd025bbdab))
- **kit:** `Slider` support for RTL ([#11267](https://github.com/taiga-family/taiga-ui/issues/11267))
  ([a472927](https://github.com/taiga-family/taiga-ui/commit/a472927f5a153f811a7d42c51e77ce57a96a61a3))
- **layout:** `Navigation` support for RTL ([#11300](https://github.com/taiga-family/taiga-ui/issues/11300))
  ([1d93615](https://github.com/taiga-family/taiga-ui/commit/1d93615a4b0baa0ef6ec9e26802d58442fcd3fab))

### 🚀 Features

- **addon-commerce:** `InputCardGroup` custom initial label and RTL support
  ([#11291](https://github.com/taiga-family/taiga-ui/issues/11291))
  ([1584bde](https://github.com/taiga-family/taiga-ui/commit/1584bde42bb77be4a7e2134458c282e59b8962e0))
- **addon-mobile:** `SwipeActions` support for RTL ([#11304](https://github.com/taiga-family/taiga-ui/issues/11304))
  ([a2a2748](https://github.com/taiga-family/taiga-ui/commit/a2a27488cf6935970e18300bae1cfd50734bb69f))
- **core:** `Textfield` dispatches `(input)` event on cleaner click
  ([#11313](https://github.com/taiga-family/taiga-ui/issues/11313))
  ([20e7a5d](https://github.com/taiga-family/taiga-ui/commit/20e7a5d791360a528e64b6365bd55f8be6ebc72e))
- improve safe-area support for WebView ([#11299](https://github.com/taiga-family/taiga-ui/issues/11299))
  ([0b06748](https://github.com/taiga-family/taiga-ui/commit/0b06748645755d2c484166e38f7814f67c480e96))
- **kit:** `ActionBar` support safe-area top/bottom ([#11308](https://github.com/taiga-family/taiga-ui/issues/11308))
  ([454afcb](https://github.com/taiga-family/taiga-ui/commit/454afcbfa376cdc294670a829011dc2002732518))
- **kit:** `InputColor` add new component ([#11263](https://github.com/taiga-family/taiga-ui/issues/11263))
  ([5c01902](https://github.com/taiga-family/taiga-ui/commit/5c01902978bf3f8178eddc939c7c81d6362b11ec))
- **kit:** `PdfViewer` support safe-area top/bottom ([#11310](https://github.com/taiga-family/taiga-ui/issues/11310))
  ([b1eb78b](https://github.com/taiga-family/taiga-ui/commit/b1eb78b27a2f3ce481d97acd199c209c737e49a2))
- **kit:** `Preview` support safe-area top/bottom ([#11309](https://github.com/taiga-family/taiga-ui/issues/11309))
  ([9dce522](https://github.com/taiga-family/taiga-ui/commit/9dce522236c1b38a0a8512be8a705d3b899aaf54))
- **kit:** `Shimmer` add directive ([#11245](https://github.com/taiga-family/taiga-ui/issues/11245))
  ([61dc804](https://github.com/taiga-family/taiga-ui/commit/61dc804cb88d324737591d709dc14d980bda02f0))
- **testing:** export cypress and playwright utils ([#11312](https://github.com/taiga-family/taiga-ui/issues/11312))
  ([8d992d5](https://github.com/taiga-family/taiga-ui/commit/8d992d514453529d0c3f181d51d0cb8fe1494a98))

## [4.44.0](https://github.com/taiga-family/taiga-ui/compare/v4.43.0...v4.44.0) (2025-07-07)

### 🐞 Bug Fixes

- **addon-doc:** `Example` has broken anchor link navigation for `pageTab` with index > 1
  ([#11247](https://github.com/taiga-family/taiga-ui/issues/11247))
  ([b2f315f](https://github.com/taiga-family/taiga-ui/commit/b2f315f333abb04a2137052559fa7f6ddfb26b89))
- **addon-mobile:** `MobileCalendar` fix for iOS 18 ([#11242](https://github.com/taiga-family/taiga-ui/issues/11242))
  ([8dab365](https://github.com/taiga-family/taiga-ui/commit/8dab365eaff41b03148480d76a14918258c73f9d))
- **core:** `tuiDialog` support optional context ([#11256](https://github.com/taiga-family/taiga-ui/issues/11256))
  ([7d12258](https://github.com/taiga-family/taiga-ui/commit/7d12258383e2432560779566878aa855c3810fd6))
- **kit:** `ComboBox` with `[strict]=false` should not stringify matched item inside form control value
  ([#11240](https://github.com/taiga-family/taiga-ui/issues/11240))
  ([2a8e4f9](https://github.com/taiga-family/taiga-ui/commit/2a8e4f9529abe6e5df476e5cfce98b69568797e8))
- **kit:** `Multiselect` fix export type ([#11225](https://github.com/taiga-family/taiga-ui/issues/11225))
  ([adb00be](https://github.com/taiga-family/taiga-ui/commit/adb00be59b3a31fd4c9ff3e11800148ed1b6eb87))

### 🚀 Features

- **addon-doc:** support for switching text direction in documentation
  ([#11193](https://github.com/taiga-family/taiga-ui/issues/11193))
  ([f5dab65](https://github.com/taiga-family/taiga-ui/commit/f5dab6509b320fd08de18ec1dd6ef15560d2dbd0))
- **cdk:** improve error message for portals ([#11241](https://github.com/taiga-family/taiga-ui/issues/11241))
  ([7b8c194](https://github.com/taiga-family/taiga-ui/commit/7b8c194af47283ee354298af0015d1c8eb8e0443))
- **core:** `Textfield` auto-open dropdown if it is added when input is focused
  ([#11232](https://github.com/taiga-family/taiga-ui/issues/11232))
  ([cec8712](https://github.com/taiga-family/taiga-ui/commit/cec87125c0bc1a759fd9ae196201f07801eee410))
- **core:** `Textfield` auto-open dropdown if it is added when input is focused
  ([#11236](https://github.com/taiga-family/taiga-ui/issues/11236))
  ([fa97d79](https://github.com/taiga-family/taiga-ui/commit/fa97d79b1d747ed1d0cb8304c52268d5f511ca0b))
- **kit:** `InputTime` supports `[prefix]` / `[postfix]`
  ([#11252](https://github.com/taiga-family/taiga-ui/issues/11252))
  ([fd4ba2f](https://github.com/taiga-family/taiga-ui/commit/fd4ba2fdafbae54c68c84b625d09defa620bec69))
- **kit:** `MultiSelect` add native mode on mobile ([#11249](https://github.com/taiga-family/taiga-ui/issues/11249))
  ([6dbfd96](https://github.com/taiga-family/taiga-ui/commit/6dbfd964d721717b64f6366899fd08b0fd792a97))
- **kit:** `Pagination` adjust button size ([#11149](https://github.com/taiga-family/taiga-ui/issues/11149))
  ([69c23cb](https://github.com/taiga-family/taiga-ui/commit/69c23cb87f9b75b4079e622ec6fa5828a18a2edd))

## [4.43.0](https://github.com/taiga-family/taiga-ui/compare/v4.42.0...v4.43.0) (2025-07-01)

### 🐞 Bug Fixes

- **core:** `CalendarYear` fix range mode ([#11184](https://github.com/taiga-family/taiga-ui/issues/11184))
  ([a22e1d8](https://github.com/taiga-family/taiga-ui/commit/a22e1d8c9394fea5a63387683338624c740633cb))
- **core:** `Notification` RTL layout support ([#11180](https://github.com/taiga-family/taiga-ui/issues/11180))
  ([bb5e0ab](https://github.com/taiga-family/taiga-ui/commit/bb5e0abfc7142cf1150424b0eb7971e368b9f4aa))
- **core:** dialog RTL layout support ([#11177](https://github.com/taiga-family/taiga-ui/issues/11177))
  ([fad6afc](https://github.com/taiga-family/taiga-ui/commit/fad6afc9283c8e73be9c8ee4fa5b1741786ceddf))
- **core:** loader RTL layout support ([#11170](https://github.com/taiga-family/taiga-ui/issues/11170))
  ([a1d4758](https://github.com/taiga-family/taiga-ui/commit/a1d4758c0f7ea8277ac3332d1816ae0bfe21d53c))
- **i18n:** export all localizations ([#11189](https://github.com/taiga-family/taiga-ui/issues/11189))
  ([82347f9](https://github.com/taiga-family/taiga-ui/commit/82347f95fc65a5c71938d1f694b7b046dc1f6e7e))
- **kit:** `DataListWrapper` fails to emit `(itemClick)` event
  ([#11201](https://github.com/taiga-family/taiga-ui/issues/11201))
  ([8f6ba67](https://github.com/taiga-family/taiga-ui/commit/8f6ba679894d24aa7cc6cdcd7aae6a8bb21e7a1e))
- **kit:** `InputChip` fix icons position ([#11162](https://github.com/taiga-family/taiga-ui/issues/11162))
  ([229e9d1](https://github.com/taiga-family/taiga-ui/commit/229e9d112185b2b1130f46320aa1be928ce8aad4))
- **kit:** `ProgressCircle` prevents possible shrinkage (with shape distortion) inside flex container
  ([#11157](https://github.com/taiga-family/taiga-ui/issues/11157))
  ([68b6409](https://github.com/taiga-family/taiga-ui/commit/68b6409530f2a8773dfb59d68f2d6d653de918b3))
- **kit:** fix TuiStatus for TuiBadge custom style ([#11145](https://github.com/taiga-family/taiga-ui/issues/11145))
  ([b6bf169](https://github.com/taiga-family/taiga-ui/commit/b6bf1699fe4c663df01cdb8d4fe310db58a1ccfb))
- **kit:** tabs rtl support ([#11186](https://github.com/taiga-family/taiga-ui/issues/11186))
  ([a0a2307](https://github.com/taiga-family/taiga-ui/commit/a0a23074f45517cfb8f4b9146451d8236ac4f69a))

### 🚀 Features

- **kit:** `HideSelected` add pipe ([#11196](https://github.com/taiga-family/taiga-ui/issues/11196))
  ([3986ca8](https://github.com/taiga-family/taiga-ui/commit/3986ca851aae19d62dd3439b95dace7cfaa5690f))
- **kit:** `InputChip` add RTL support ([#11173](https://github.com/taiga-family/taiga-ui/issues/11173))
  ([de349ab](https://github.com/taiga-family/taiga-ui/commit/de349abe480b8ff7b4b463a7df6bc5dab3793bd4))
- **kit:** `InputDate` use `SelectOption` ([#11207](https://github.com/taiga-family/taiga-ui/issues/11207))
  ([e50cf8d](https://github.com/taiga-family/taiga-ui/commit/e50cf8d81766aa37e2359edcb3a07909868376da))
- **kit:** `MultiSelectOption` add new `Option` ([#11212](https://github.com/taiga-family/taiga-ui/issues/11212))
  ([9bed030](https://github.com/taiga-family/taiga-ui/commit/9bed030f0d41e41384a02218fa5ca7e9415d3d89))
- **kit:** `ProgressCircle` has arc mode ([#11156](https://github.com/taiga-family/taiga-ui/issues/11156))
  ([0b1beb2](https://github.com/taiga-family/taiga-ui/commit/0b1beb2353020385e26dd8f17f5f3501e119e030))
- **kit:** refactor `InputTime` to new `Textfield` ([#11069](https://github.com/taiga-family/taiga-ui/issues/11069))
  ([41c88e5](https://github.com/taiga-family/taiga-ui/commit/41c88e5e47c62cad849d7dfb2cca48003d7523bb))

## [4.42.0](https://github.com/taiga-family/taiga-ui/compare/v4.41.0...v4.42.0) (2025-06-24)

### 🐞 Bug Fixes

- **addon-mobile:** `Card` fix buttons stretching in header
  ([#11151](https://github.com/taiga-family/taiga-ui/issues/11151))
  ([f95e701](https://github.com/taiga-family/taiga-ui/commit/f95e7016f91d2f1ed822d6e4b9416ab193eb078b))
- **addon-table:** skip hydration for table-expand ([#11141](https://github.com/taiga-family/taiga-ui/issues/11141))
  ([f0c5e8e](https://github.com/taiga-family/taiga-ui/commit/f0c5e8e3ced068264321a1afe96fdaafc706f8d8))
- **core:** `Dialog` throws `TypeError: undefined is not an object (evaluating 'n.key.toLowerCase')`
  ([#11127](https://github.com/taiga-family/taiga-ui/issues/11127))
  ([79cf29a](https://github.com/taiga-family/taiga-ui/commit/79cf29a14535d5e6dd4a5d9e804072da26884057))
- **core:** `DropdownOpen` has unexpected auto focus inside Shadow DOM
  ([#11090](https://github.com/taiga-family/taiga-ui/issues/11090))
  ([37e7431](https://github.com/taiga-family/taiga-ui/commit/37e7431e443f5aeb67a5a799c07eb8e181e079c0))
- **core:** `Textfield` label transform only for `L` size
  ([#11143](https://github.com/taiga-family/taiga-ui/issues/11143))
  ([70f9ced](https://github.com/taiga-family/taiga-ui/commit/70f9cedb501b55b88f052d233611de5236ceea19))
- **core:** `Textfield` throws `RuntimeError: NG0600` ([#11126](https://github.com/taiga-family/taiga-ui/issues/11126))
  ([4634537](https://github.com/taiga-family/taiga-ui/commit/463453793dd98c9cc4a9120acf7c7c8cb26011f3))
- **kit:** `ButtonClose` update size to match other buttons
  ([#11124](https://github.com/taiga-family/taiga-ui/issues/11124))
  ([cd933a4](https://github.com/taiga-family/taiga-ui/commit/cd933a403fbfc9c2c9e988817f4a10699b4108d1))
- **kit:** `InputDate` fix textfield value after resetting
  ([#11131](https://github.com/taiga-family/taiga-ui/issues/11131))
  ([e095aa7](https://github.com/taiga-family/taiga-ui/commit/e095aa7bce49eacda9f88dac5ba1002c5d6d5d38))
- **kit:** `LineClamp` fix `TuiAnimated matches multiple times` error
  ([#11146](https://github.com/taiga-family/taiga-ui/issues/11146))
  ([406dec3](https://github.com/taiga-family/taiga-ui/commit/406dec3b0c205bee93689d8716d913a6c6f22984))
- **kit:** `Slider` fix being draggable when disabled ([#11050](https://github.com/taiga-family/taiga-ui/issues/11050))
  ([3cbb208](https://github.com/taiga-family/taiga-ui/commit/3cbb208ffab48ad4065f6271535c817f2ddbd857))
- **kit:** fix incorrect import from i18n ([#11115](https://github.com/taiga-family/taiga-ui/issues/11115))
  ([7853a79](https://github.com/taiga-family/taiga-ui/commit/7853a7944ecaa7b7c71425df7003adb4d8ef2603))
- **kit:** use `LOCALE_ID` in `FileRejected` pipe ([#11128](https://github.com/taiga-family/taiga-ui/issues/11128))
  ([e464506](https://github.com/taiga-family/taiga-ui/commit/e46450651edc1f362b06e3430e99c4e112c1de49))
- **legacy:** `InputColor` fix orientation inside `Accordion`
  ([#11152](https://github.com/taiga-family/taiga-ui/issues/11152))
  ([702ff16](https://github.com/taiga-family/taiga-ui/commit/702ff166d814a9614af3f2728bc8e91c3bbd0718))

### 🚀 Features

- `InputChip` add new component ([#10852](https://github.com/taiga-family/taiga-ui/issues/10852))
  ([0c75661](https://github.com/taiga-family/taiga-ui/commit/0c75661b12bd8eb202307a2ebcd5f023876eabb4))
- **i18n:** add Arabic ([#11091](https://github.com/taiga-family/taiga-ui/issues/11091))
  ([5fa3e29](https://github.com/taiga-family/taiga-ui/commit/5fa3e2906fb308de17a21131492beefb8d40b4a2))

## [4.41.0](https://github.com/taiga-family/taiga-ui/compare/v4.40.0...v4.41.0) (2025-06-16)

### 🐞 Bug Fixes

- **kit:** `InputNumber` has missing minus sign for `min < 0` on Samsung with system keyboard
  ([#11103](https://github.com/taiga-family/taiga-ui/issues/11103))
  ([a348167](https://github.com/taiga-family/taiga-ui/commit/a34816755727f852f4508d8611d6775a0a685fef))

### 🚀 Features

- **layout:** `Form` add default options ([#11016](https://github.com/taiga-family/taiga-ui/issues/11016))
  ([d66945a](https://github.com/taiga-family/taiga-ui/commit/d66945a90964810d6a6fe39ff2638ae7dd4f6732))

## [4.40.0](https://github.com/taiga-family/taiga-ui/compare/v4.39.2...v4.40.0) (2025-06-10)

### 🚀 Features

- **core:** add css variables to `:host` ([#11046](https://github.com/taiga-family/taiga-ui/issues/11046))
  ([3c13004](https://github.com/taiga-family/taiga-ui/commit/3c13004394fca47f6429addcfb215d6e7a28ed6d))
- **kit:** `InputDateRange` add new `Textfield` based version
  ([#11043](https://github.com/taiga-family/taiga-ui/issues/11043))
  ([804031a](https://github.com/taiga-family/taiga-ui/commit/804031a196fe1b04c91556f26f6a3aa348621ffc))
- **kit:** `Segmented` change active item style according to specs
  ([#11026](https://github.com/taiga-family/taiga-ui/issues/11026))
  ([914b6a9](https://github.com/taiga-family/taiga-ui/commit/914b6a949771fb3ffe1f89326f0e095137cc85ab))

### 🐞 Bug Fixes

- **core:** `Dropdown` check for fixed parent only once
  ([#11066](https://github.com/taiga-family/taiga-ui/issues/11066))
  ([902713b](https://github.com/taiga-family/taiga-ui/commit/902713bbf7511a852a80246a5831133050fbb0db))
- **core:** `Textfield` label offset em to rem ([#11070](https://github.com/taiga-family/taiga-ui/issues/11070))
  ([51bb425](https://github.com/taiga-family/taiga-ui/commit/51bb425692166725e57ed0bedd414dc24a01c2ba))
- **kit:** `ComboBox` should retrigger value matching on new items in datalist
  ([#11039](https://github.com/taiga-family/taiga-ui/issues/11039))
  ([e35fddd](https://github.com/taiga-family/taiga-ui/commit/e35fddd5b705530f0b3bf2fd4c127c81652dcecb))
- **kit:** `InputPin` fix focus ([#11036](https://github.com/taiga-family/taiga-ui/issues/11036))
  ([0d09391](https://github.com/taiga-family/taiga-ui/commit/0d093917f046a5edce31906d29dbb065757208f0))
- **kit:** `InputSlider` has broken `min`/`max` when `keySteps=null`
  ([#11078](https://github.com/taiga-family/taiga-ui/issues/11078))
  ([0927cb9](https://github.com/taiga-family/taiga-ui/commit/0927cb909862e71a34f3f99f57e17f4458af950d))
- **kit:** `TuiFile` & `tuiFormatSize` uses `LOCALE_ID` instead of hard coded locale
  ([#11004](https://github.com/taiga-family/taiga-ui/issues/11004))
  ([31339c4](https://github.com/taiga-family/taiga-ui/commit/31339c4969331db25062dbd48429df6ea37951fb))

### [4.39.2](https://github.com/taiga-family/taiga-ui/compare/v4.39.1...v4.39.2) (2025-05-28)

### 🐞 Bug Fixes

- **cdk:** `Animation` fix for Angular 18+ ([#11032](https://github.com/taiga-family/taiga-ui/issues/11032))
  ([c95d085](https://github.com/taiga-family/taiga-ui/commit/c95d085d0e5cfee504711f28839d9d5df92765e2))

### [4.39.1](https://github.com/taiga-family/taiga-ui/compare/v4.39.0...v4.39.1) (2025-05-28)

### 🐞 Bug Fixes

- **core:** `Textfield` fix errors and issues with chevron + dropdown
  ([#11025](https://github.com/taiga-family/taiga-ui/issues/11025))
  ([b8ab88d](https://github.com/taiga-family/taiga-ui/commit/b8ab88d616d697ff90d774b992e9afa04816fd80))

## [4.39.0](https://github.com/taiga-family/taiga-ui/compare/v4.38.0...v4.39.0) (2025-05-27)

### 🐞 Bug Fixes

- **addon-mobile:** `SheetDialog` scroll with closeable: false
  ([#10998](https://github.com/taiga-family/taiga-ui/issues/10998))
  ([76d5991](https://github.com/taiga-family/taiga-ui/commit/76d599118cf89117e559a9f350c05bd7893fd68c))
- **addon-table:** `Th` allow aligning to the right when sortable
  ([#11012](https://github.com/taiga-family/taiga-ui/issues/11012))
  ([92e5eb0](https://github.com/taiga-family/taiga-ui/commit/92e5eb0ef27771e99d2e73ab4b3ace32b7391304))
- **cdk:** `TuiControl` should use `untracked` for signals inside `onChange`
  ([#11002](https://github.com/taiga-family/taiga-ui/issues/11002))
  ([a3c8b14](https://github.com/taiga-family/taiga-ui/commit/a3c8b14d66f26675fbd7261c553211d617534c1e))
- **core:** `DARK_MODE` fix for disabled local storage ([#10991](https://github.com/taiga-family/taiga-ui/issues/10991))
  ([49304f2](https://github.com/taiga-family/taiga-ui/commit/49304f2481e61bd6c682afeedc741c03ea2dacdf))
- **core:** `Dropdown` fix positioning in Firefox ([#11015](https://github.com/taiga-family/taiga-ui/issues/11015))
  ([73c78f4](https://github.com/taiga-family/taiga-ui/commit/73c78f4e7c757ea8d59cb9f606756844a8d9b261))
- **core:** `Root` fix broken fullscreen content inside dialogs
  ([#10999](https://github.com/taiga-family/taiga-ui/issues/10999))
  ([203d90c](https://github.com/taiga-family/taiga-ui/commit/203d90c06098666ab87124c7805d98d4e77650c8))
- **core:** `Textfield` make right icon click area bigger
  ([#11013](https://github.com/taiga-family/taiga-ui/issues/11013))
  ([99e3a33](https://github.com/taiga-family/taiga-ui/commit/99e3a330d81164896546f4535b4b276119e5eeb5))
- **kit:** `Carousel` fix hydration error `NG0506` ([#10997](https://github.com/taiga-family/taiga-ui/issues/10997))
  ([08b9c02](https://github.com/taiga-family/taiga-ui/commit/08b9c027a87958eb6380af51b2d6fdde75cce8cd))
- **legacy:** `Input` fix default data-list limit width
  ([#11003](https://github.com/taiga-family/taiga-ui/issues/11003))
  ([df028e3](https://github.com/taiga-family/taiga-ui/commit/df028e31a1a24a5caf9e88aee25a18b885cdd77f))

### 🚀 Features

- add 'MM:SS' option to TuiTimeMode ([#11008](https://github.com/taiga-family/taiga-ui/issues/11008))
  ([7728984](https://github.com/taiga-family/taiga-ui/commit/7728984af0638dff3e63ddd54fefa22f28d80ced))
- **cdk:** `Animated` add new directive, drop all Angular animations
  ([#10966](https://github.com/taiga-family/taiga-ui/issues/10966))
  ([507d44d](https://github.com/taiga-family/taiga-ui/commit/507d44da0071fc32101b9ca193e2beeb9cd87f6e))
- **core:** `Alert` add safe-area support ([#11006](https://github.com/taiga-family/taiga-ui/issues/11006))
  ([be6bf86](https://github.com/taiga-family/taiga-ui/commit/be6bf8684362132ef05058be025c5526736cc948))
- **kit:** `ComboBox` refactor to new `Textfield` ([#10980](https://github.com/taiga-family/taiga-ui/issues/10980))
  ([e497841](https://github.com/taiga-family/taiga-ui/commit/e4978417875e204b048a4a0e5801dc3b19f98e2c))
- **kit:** `InputDate` add new `Textfield` based version
  ([#11009](https://github.com/taiga-family/taiga-ui/issues/11009))
  ([8c19a18](https://github.com/taiga-family/taiga-ui/commit/8c19a180ca16aea0395162ab220fa48093451b68))

## [4.38.0](https://github.com/taiga-family/taiga-ui/compare/v4.37.0...v4.38.0) (2025-05-19)

### 🐞 Bug Fixes

- **addon-charts:** `ArcChart` fix zoom in Safari ([#10982](https://github.com/taiga-family/taiga-ui/issues/10982))
  ([ab6c5a1](https://github.com/taiga-family/taiga-ui/commit/ab6c5a10756b15b8fbb77775bbff5260da93baf8))
- **core:** fix dropdown position on render ([#10971](https://github.com/taiga-family/taiga-ui/issues/10971))
  ([094d660](https://github.com/taiga-family/taiga-ui/commit/094d660f22830afe0a0aa50d5930dd24f0125bcc))
- **kit:** `CalendarRange` fix value change events order
  ([#10984](https://github.com/taiga-family/taiga-ui/issues/10984))
  ([97ed6e7](https://github.com/taiga-family/taiga-ui/commit/97ed6e771f9c322c10af13a4b14700516029db80))
- **kit:** `CalendarRange` is is not limited by `maxLength`
  ([#10988](https://github.com/taiga-family/taiga-ui/issues/10988))
  ([9e529a5](https://github.com/taiga-family/taiga-ui/commit/9e529a571aff3b82a4fd4f5eea3e420883b75849))
- **layout:** `AsideItem` fix `_custom` class ([#10972](https://github.com/taiga-family/taiga-ui/issues/10972))
  ([efd8648](https://github.com/taiga-family/taiga-ui/commit/efd86484576ac360fcc5de3455d47e0e7b980fef))
- **layout:** `InputSearch` fix setting placeholder ([#10973](https://github.com/taiga-family/taiga-ui/issues/10973))
  ([1943ed9](https://github.com/taiga-family/taiga-ui/commit/1943ed91027f454865246a0773ad31f8e5146caa))

### 🚀 Features

- **cdk:** `tuiValue` add new util ([#10902](https://github.com/taiga-family/taiga-ui/issues/10902))
  ([e7da31c](https://github.com/taiga-family/taiga-ui/commit/e7da31cfdfea80a032e2dd22d199a852a24bff31))
- **cdk:** add `Let` migration ([#10979](https://github.com/taiga-family/taiga-ui/issues/10979))
  ([0f22b87](https://github.com/taiga-family/taiga-ui/commit/0f22b8728d0d543556fbe256a17a02c18af28852))
- **cdk:** new `Obfuscate` pipe ([#10893](https://github.com/taiga-family/taiga-ui/issues/10893))
  ([6e03fe3](https://github.com/taiga-family/taiga-ui/commit/6e03fe31f6721c31b9519e62a7d929cd3d54b0ac))
- **core:** `Dialog` add safe-area support ([#10981](https://github.com/taiga-family/taiga-ui/issues/10981))
  ([fdf34bb](https://github.com/taiga-family/taiga-ui/commit/fdf34bb054638e6c16f5a02dbcceaa6e76dcdb36))

## [4.37.0](https://github.com/taiga-family/taiga-ui/compare/v4.36.0...v4.37.0) (2025-05-12)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix icons position
  ([#10952](https://github.com/taiga-family/taiga-ui/issues/10952))
  ([63253b8](https://github.com/taiga-family/taiga-ui/commit/63253b822cd9a4456372306cfcd8e2de94ec6170))
- **core:** `Dialogs` fix overlay scrolling out of viewport
  ([#10953](https://github.com/taiga-family/taiga-ui/issues/10953))
  ([c39887e](https://github.com/taiga-family/taiga-ui/commit/c39887e53fea2a4077adaa49f2465e2f17117fd8))

## [4.36.0](https://github.com/taiga-family/taiga-ui/compare/v4.35.0...v4.36.0) (2025-05-05)

### 🐞 Bug Fixes

- **core:** `Dialogs` fix long words wrapping ([#10947](https://github.com/taiga-family/taiga-ui/issues/10947))
  ([9ac123c](https://github.com/taiga-family/taiga-ui/commit/9ac123cd8abfe1009c07073c6ec54262f2f71bf9))
- **core:** change label font size in data list ([#10928](https://github.com/taiga-family/taiga-ui/issues/10928))
  ([3e04536](https://github.com/taiga-family/taiga-ui/commit/3e045363d1938711bb11a61aadbc0dc5a8620071))

## [4.35.0](https://github.com/taiga-family/taiga-ui/compare/v4.34.0...v4.35.0) (2025-04-28)

### 🚀 Features

- **addon-table:** `TableExpand` add new component ([#10694](https://github.com/taiga-family/taiga-ui/issues/10694))
  ([f8df2a7](https://github.com/taiga-family/taiga-ui/commit/f8df2a7bace92f532a94b596ee0b433fd59ba5fc))

### 🐞 Bug Fixes

- **addon-charts:** hint appearance not passed to bar-chart
  ([#10899](https://github.com/taiga-family/taiga-ui/issues/10899))
  ([#10907](https://github.com/taiga-family/taiga-ui/issues/10907))
  ([dec0854](https://github.com/taiga-family/taiga-ui/commit/dec085475bab25d6538d9873f1f2c61f38ea7b0d))
- **addon-mobile:** `DropdownMobile` fix when used in a dialog
  ([#10856](https://github.com/taiga-family/taiga-ui/issues/10856))
  ([7b7adbb](https://github.com/taiga-family/taiga-ui/commit/7b7adbbcc73ddb03627b906bc89c9081e3e30a3f))
- **core:** `DropdownOpen` fix error in autofill ([#10918](https://github.com/taiga-family/taiga-ui/issues/10918))
  ([e34b17c](https://github.com/taiga-family/taiga-ui/commit/e34b17c8ffddd9e4ac68f524c08aa32602cd9476))
- **core:** `Root` fix dropdowns when scrollable ([#10891](https://github.com/taiga-family/taiga-ui/issues/10891))
  ([f3c7d23](https://github.com/taiga-family/taiga-ui/commit/f3c7d238d8595c324d0b1c4f3b35aa2729448b04))
- **core:** `SelectOption` has change detection problems with checked state
  ([#10888](https://github.com/taiga-family/taiga-ui/issues/10888))
  ([e961c51](https://github.com/taiga-family/taiga-ui/commit/e961c51b9867f1e7c4c3f5097edc91df1faad147))
- **core:** `Textfield` icons should focus input & open dropdown on click
  ([#10879](https://github.com/taiga-family/taiga-ui/issues/10879))
  ([d7059ef](https://github.com/taiga-family/taiga-ui/commit/d7059ef441b3ff1d080c485571333ae0c37ffa08))
- **core:** fixed parent closing when nested hint is closed
  ([#10919](https://github.com/taiga-family/taiga-ui/issues/10919))
  ([b073a5f](https://github.com/taiga-family/taiga-ui/commit/b073a5f8b57ee5b5fd33bb40d694bbc079367a5b))
- **kit:** `InputMonth` with enabled native picker should never show desktop dropdown
  ([#10911](https://github.com/taiga-family/taiga-ui/issues/10911))
  ([bf02841](https://github.com/taiga-family/taiga-ui/commit/bf028416d4e1c0adac8f53b34cdac0cb0ff98dd8))
- **kit:** `InputNumber` supports non-erasable minus (as prefix) for `max <= 0`
  ([#10917](https://github.com/taiga-family/taiga-ui/issues/10917))
  ([2ed04d3](https://github.com/taiga-family/taiga-ui/commit/2ed04d34ff1ea61bb782159b8b7de878ed54fc38))
- **kit:** `Textarea` fix table and autofill styles ([#10920](https://github.com/taiga-family/taiga-ui/issues/10920))
  ([b1c2686](https://github.com/taiga-family/taiga-ui/commit/b1c2686fee0ce5a667a67ab1a0c352f59827a5ae))
- **kit:** get rid of dot before extension-less files ([#10915](https://github.com/taiga-family/taiga-ui/issues/10915))
  ([eb15821](https://github.com/taiga-family/taiga-ui/commit/eb158217eabc6453bb720f2b1078e8e81c6103a2))
- **kit:** skeleton animation does not depend on animation speed
  ([#10875](https://github.com/taiga-family/taiga-ui/issues/10875))
  ([0c4cce0](https://github.com/taiga-family/taiga-ui/commit/0c4cce04c609420aa48bf237c3820c1da03d7924))

## [4.34.0](https://github.com/taiga-family/taiga-ui/compare/v4.33.0...v4.34.0) (2025-04-21)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix autofill issues
  ([#10830](https://github.com/taiga-family/taiga-ui/issues/10830))
  ([c15e530](https://github.com/taiga-family/taiga-ui/commit/c15e5308255182005a1b0f40158bab7989a59d22))
- **addon-mobile:** support block status without image ([#10876](https://github.com/taiga-family/taiga-ui/issues/10876))
  ([d305f15](https://github.com/taiga-family/taiga-ui/commit/d305f153c605e98daad6ddf31921a7ba65d6b25d))
- **core:** `Link` fix `Chevron` not rotating ([#10873](https://github.com/taiga-family/taiga-ui/issues/10873))
  ([11c644f](https://github.com/taiga-family/taiga-ui/commit/11c644f98f410a9457729e4619c2bf9e9768fa9d))
- **core:** `Textfield` fix leaking unencapsulated styles
  ([#10847](https://github.com/taiga-family/taiga-ui/issues/10847))
  ([2355cfd](https://github.com/taiga-family/taiga-ui/commit/2355cfdb375e6afaee76573d4274f6ad4e6b8c31))
- **kit:** `InputSlider` throws `not statically analyzable` error
  ([#10867](https://github.com/taiga-family/taiga-ui/issues/10867))
  ([00eee52](https://github.com/taiga-family/taiga-ui/commit/00eee5253256d482aedbeda98dff08b04773bfca))
- **kit:** `Range` has change detection problems with active state of thumb
  ([#10859](https://github.com/taiga-family/taiga-ui/issues/10859))
  ([b6f3eae](https://github.com/taiga-family/taiga-ui/commit/b6f3eae1c61f5f0902ae8e7fd7875fcea09ccea1))
- **kit:** `Select` supports dark theme for native picker in Windows OS
  ([#10851](https://github.com/taiga-family/taiga-ui/issues/10851))
  ([f5cbf76](https://github.com/taiga-family/taiga-ui/commit/f5cbf76651d1cf8aca09f1a3e7867e7b72c54ccd))
- **kit:** `Textarea` fix change detection issues ([#10869](https://github.com/taiga-family/taiga-ui/issues/10869))
  ([d78e58e](https://github.com/taiga-family/taiga-ui/commit/d78e58e79a9d173d380feb5c70413713e2284426))
- **legacy:** return possibility to use any data type in `TUI_DATE_TIME_VALUE_TRANSFORMER`
  ([#10803](https://github.com/taiga-family/taiga-ui/issues/10803))
  ([6405d59](https://github.com/taiga-family/taiga-ui/commit/6405d5975a296bc31f49f041b222e54fc7908722))

### 🚀 Features

- **core:** update `tuiLink` appearance by spec ([#10825](https://github.com/taiga-family/taiga-ui/issues/10825))
  ([8f2850a](https://github.com/taiga-family/taiga-ui/commit/8f2850af42c44aac6f9473bad50f976027e26528))
- **kit:** `FloatingContainer` add new directive ([#10541](https://github.com/taiga-family/taiga-ui/issues/10541))
  ([52abe54](https://github.com/taiga-family/taiga-ui/commit/52abe54af915565b9ea93a1c1ccae04ab7f44b01))
- **kit:** `Slider` supports not equidistant `segments` order
  ([#10746](https://github.com/taiga-family/taiga-ui/issues/10746))
  ([a65a5bd](https://github.com/taiga-family/taiga-ui/commit/a65a5bd84db65c5f066e826b18f67766c668cfcd))
- **layout:** `InputSearch` add manual open control ([#10872](https://github.com/taiga-family/taiga-ui/issues/10872))
  ([781d6ae](https://github.com/taiga-family/taiga-ui/commit/781d6ae2fa1b45008711cf505e455b48a592b5b6))

## [4.33.0](https://github.com/taiga-family/taiga-ui/compare/v4.32.0...v4.33.0) (2025-04-14)

### 🚀 Features

- **addon-doc:** customize fullscreen buttons ([#10791](https://github.com/taiga-family/taiga-ui/issues/10791))
  ([2a11b88](https://github.com/taiga-family/taiga-ui/commit/2a11b8810c13480b863be72c5d3c542616f47ac6))
- **addon-doc:** hide fullscreen button when device doesn't support fullscreen API
  ([#10800](https://github.com/taiga-family/taiga-ui/issues/10800))
  ([9c3b5f8](https://github.com/taiga-family/taiga-ui/commit/9c3b5f81fe135439392506a17ad14289ac5cfe41))
- **addon-mobile:** `DropdownMobile` supports new `Select`
  ([#10782](https://github.com/taiga-family/taiga-ui/issues/10782))
  ([cc413dc](https://github.com/taiga-family/taiga-ui/commit/cc413dc87bb39282f893d6ad79c3d7cb2d9db536))
- **core:** `Dropdown` take virtual keyboard into account when positioning
  ([#10801](https://github.com/taiga-family/taiga-ui/issues/10801))
  ([fbf1ccd](https://github.com/taiga-family/taiga-ui/commit/fbf1ccdfef17d049de2351d41f826a6e8de982ac))
- **kit:** `Select` refactor to new `Textfield` ([#10642](https://github.com/taiga-family/taiga-ui/issues/10642))
  ([e2eb470](https://github.com/taiga-family/taiga-ui/commit/e2eb470e2976be250749b50ad49bbd66e6fb29a3))
- **kit:** `Textarea` add new component ([#10778](https://github.com/taiga-family/taiga-ui/issues/10778))
  ([9134d77](https://github.com/taiga-family/taiga-ui/commit/9134d77e6ca0617352fdfe7d7d97e6b69bc9bfe2))

### 🐞 Bug Fixes

- add `ngSkipHydration` for `<input/>`-s with template inside (to prevent SSR hydration error)
  ([#10818](https://github.com/taiga-family/taiga-ui/issues/10818))
  ([b86ac36](https://github.com/taiga-family/taiga-ui/commit/b86ac3628d26a4a93ff4a53b65961a09858f4704))
- **addon-doc:** set fixed width for last API column ([#10788](https://github.com/taiga-family/taiga-ui/issues/10788))
  ([7dfd59c](https://github.com/taiga-family/taiga-ui/commit/7dfd59cd819d5ddc76be40f7a839fb802def428a))
- **addon-mobile:** `SheetDialog` add `env(safe-area-inset-top)`
  ([#10776](https://github.com/taiga-family/taiga-ui/issues/10776))
  ([1087a07](https://github.com/taiga-family/taiga-ui/commit/1087a07d316e3729820ffe97f2949b9c84b6db2d))
- **cdk:** `FontSize` early return when disabled ([#10794](https://github.com/taiga-family/taiga-ui/issues/10794))
  ([da70031](https://github.com/taiga-family/taiga-ui/commit/da70031330a77fd83efd84a84c1292a1b5fe950e))
- **cdk:** `ng-add` fix wrapping with tui-root for `UTF-8 with BOM` templates
  ([#10786](https://github.com/taiga-family/taiga-ui/issues/10786))
  ([67993cb](https://github.com/taiga-family/taiga-ui/commit/67993cb0b0d906a12aa39f1e5f1b83a34bff04c6))
- **core:** `DropdownOpen` sync state when changed externally
  ([#10812](https://github.com/taiga-family/taiga-ui/issues/10812))
  ([591a502](https://github.com/taiga-family/taiga-ui/commit/591a502c0bdfac34c8f660360eaa6a107f4be4aa))
- **core:** `InputMonth` should hide Android text select handle
  ([#10760](https://github.com/taiga-family/taiga-ui/issues/10760))
  ([db9f021](https://github.com/taiga-family/taiga-ui/commit/db9f021763b717c42ce5580a7d16f383a6002533))
- **core:** `Option` has stuck hover effect for mobile devices
  ([#10824](https://github.com/taiga-family/taiga-ui/issues/10824))
  ([0062550](https://github.com/taiga-family/taiga-ui/commit/00625500ccded99d1b9db564a4eab8266fefc09f))
- **core:** `Textfield` add vertical padding ([#10754](https://github.com/taiga-family/taiga-ui/issues/10754))
  ([707aaf4](https://github.com/taiga-family/taiga-ui/commit/707aaf49dcb2b5b8fe99990193ce55e9bbe6dd69))
- **core:** `Textfield` has invalid width for `[tuiChevron]`'s icon
  ([#10761](https://github.com/taiga-family/taiga-ui/issues/10761))
  ([efeaa5f](https://github.com/taiga-family/taiga-ui/commit/efeaa5f6d527a54d8be34f341d5b4c17f1ac5c47))
- enable pointer events on disabled tuiOption ([#10780](https://github.com/taiga-family/taiga-ui/issues/10780))
  ([ebd6884](https://github.com/taiga-family/taiga-ui/commit/ebd6884dce0e3fbfd143a404aebb02e998c92cec))
- **kit:** `InputMonth` should not use `cursor: pointer` for disabled state
  ([#10820](https://github.com/taiga-family/taiga-ui/issues/10820))
  ([74ac17e](https://github.com/taiga-family/taiga-ui/commit/74ac17e8d60087059cc08fa662bbb28612a92e1d))
- **kit:** `LineClamp` fix `overflownChange` calculation
  ([#10781](https://github.com/taiga-family/taiga-ui/issues/10781))
  ([2d37fa3](https://github.com/taiga-family/taiga-ui/commit/2d37fa37b9e4711e4deba96dc066641bff35650d))
- **kit:** add deeper import for `TuiChevron` ([#10775](https://github.com/taiga-family/taiga-ui/issues/10775))
  ([26aa905](https://github.com/taiga-family/taiga-ui/commit/26aa905a04761c1dd081af1741384c13b8d920a5))
- **kit:** navigate to active element after first render for `tuiStepper`
  ([#10777](https://github.com/taiga-family/taiga-ui/issues/10777))
  ([d45aff8](https://github.com/taiga-family/taiga-ui/commit/d45aff807a9cbd6961258d5cb9ab67af8045f9d9))
- **layout:** `AppBar` add transparency in supporting browsers
  ([#10796](https://github.com/taiga-family/taiga-ui/issues/10796))
  ([fdf3ac0](https://github.com/taiga-family/taiga-ui/commit/fdf3ac057b7f474c38b300fa74cd15f68a7af9bb))
- **layout:** `Navigation` fix aside highlights ([#10785](https://github.com/taiga-family/taiga-ui/issues/10785))
  ([c2dae17](https://github.com/taiga-family/taiga-ui/commit/c2dae170b78d03449d1c8996783732a665464160))
- **legacy:** `InputDateTime` has incorrect typings for control value
  ([#10779](https://github.com/taiga-family/taiga-ui/issues/10779))
  ([8b074a9](https://github.com/taiga-family/taiga-ui/commit/8b074a92c2e0ddcce7f6630c362200f32e4f0a48))
- **legacy:** reuse `identityMatcher` inside `tuiMultiSelectGroup`
  ([#10774](https://github.com/taiga-family/taiga-ui/issues/10774))
  ([a8d8409](https://github.com/taiga-family/taiga-ui/commit/a8d84095ebf5939fe574a7afe1c6f6d348087769))

## [4.32.0](https://github.com/taiga-family/taiga-ui/compare/v4.31.0...v4.32.0) (2025-04-07)

### 🚀 Features

- **cdk:** add `tuiFullscreen` ([#10672](https://github.com/taiga-family/taiga-ui/issues/10672))
  ([03fe94e](https://github.com/taiga-family/taiga-ui/commit/03fe94ef2525ae4efeab129339bf8b361c341e43))
- **core:** `Dialog`/`Dropdown` use `CloseWatcher` to close on Android native back button
  ([#10300](https://github.com/taiga-family/taiga-ui/issues/10300))
  ([e2ea300](https://github.com/taiga-family/taiga-ui/commit/e2ea300d74647e69715b561a3672ba42cb604fb0))
- **core:** add `<tui-popups />` ([#10717](https://github.com/taiga-family/taiga-ui/issues/10717))
  ([080cadf](https://github.com/taiga-family/taiga-ui/commit/080cadfa32a25ca1cda4b63e44eff7ff3c3bdd8a))
- **layout:** `CardCollapsed` add new directive ([#10735](https://github.com/taiga-family/taiga-ui/issues/10735))
  ([9cff79f](https://github.com/taiga-family/taiga-ui/commit/9cff79f76e0c1c016b640ff40b6297fd10b6a020))
- **styles:** adjust gap sizes for status component based on data-siz…
  ([#10740](https://github.com/taiga-family/taiga-ui/issues/10740))
  ([4ae7bb5](https://github.com/taiga-family/taiga-ui/commit/4ae7bb5658ea075be62a1c9c0ec821fec29067c3))

### 🐞 Bug Fixes

- **core:** `Textfield` fix left padding with `iconStart`
  ([#10742](https://github.com/taiga-family/taiga-ui/issues/10742))
  ([7bc7cbd](https://github.com/taiga-family/taiga-ui/commit/7bc7cbdc3eee64ae450ecbb59a7d548217076c4f))
- **core:** do not use hardcoded `tui-hint` selector ([#10715](https://github.com/taiga-family/taiga-ui/issues/10715))
  ([79e8449](https://github.com/taiga-family/taiga-ui/commit/79e84499449908813282391a3d669a4019d9212f))
- **kit:** `InputMonth` should have `cursor: pointer` ([#10712](https://github.com/taiga-family/taiga-ui/issues/10712))
  ([33c0cca](https://github.com/taiga-family/taiga-ui/commit/33c0cca52e3530a64a63d142e4fecae4df8951c6))
- **kit:** ignore transition directly on tile ([#10689](https://github.com/taiga-family/taiga-ui/issues/10689))
  ([f252c6f](https://github.com/taiga-family/taiga-ui/commit/f252c6f0c192aec0c2348b7e0c7ee98c2f0dda5f))
- **layout:** `Cell` increase `tuiCellActions` specificity
  ([#10747](https://github.com/taiga-family/taiga-ui/issues/10747))
  ([d4aa00e](https://github.com/taiga-family/taiga-ui/commit/d4aa00eac28d33f4241af16d24ab94ab8e2ce742))
- **layout:** `TuiDynamicHeader` import as const ([#10750](https://github.com/taiga-family/taiga-ui/issues/10750))
  ([dd8735e](https://github.com/taiga-family/taiga-ui/commit/dd8735ebfa224f8efcdb57c189811c4cd6518264))
- **legacy:** `InputTime` should hide icon if it equals to empty string
  ([#10719](https://github.com/taiga-family/taiga-ui/issues/10719))
  ([d16e2ec](https://github.com/taiga-family/taiga-ui/commit/d16e2ec8c8e151e9e67e462aee74fc1aec2b8c48))
- **legacy:** do not match value until user is writing value in `InputTime`
  ([#10731](https://github.com/taiga-family/taiga-ui/issues/10731))
  ([ededf5f](https://github.com/taiga-family/taiga-ui/commit/ededf5f04666343eb26cb8dd9b015d21aeeff633))

## [4.31.0](https://github.com/taiga-family/taiga-ui/compare/v4.30.0...v4.31.0) (2025-03-31)

### 🚀 Features

- add `tui-pager` ([#10325](https://github.com/taiga-family/taiga-ui/issues/10325))
  ([640fc05](https://github.com/taiga-family/taiga-ui/commit/640fc0511ad293d64beff834c9918bf3de708a3f))
- **addon-doc:** add `TuiDocAPINumberItem` for configure input api option
  ([#10693](https://github.com/taiga-family/taiga-ui/issues/10693))
  ([d8aebbe](https://github.com/taiga-family/taiga-ui/commit/d8aebbe5afb6add3c18a913c334df8002873cfac))
- **core:** new version of `TuiOption` ([#10660](https://github.com/taiga-family/taiga-ui/issues/10660))
  ([2c89246](https://github.com/taiga-family/taiga-ui/commit/2c892463cbacee8dc73b47637e8609ec12db406e))
- **kit:** `ItemsWithMore` add multiline mode ([#10641](https://github.com/taiga-family/taiga-ui/issues/10641))
  ([d554c19](https://github.com/taiga-family/taiga-ui/commit/d554c19245a027f67fa5608aff7d316a516f6dee))
- **kit:** add `shift` output event to `carousel` component
  ([#10659](https://github.com/taiga-family/taiga-ui/issues/10659))
  ([2368b41](https://github.com/taiga-family/taiga-ui/commit/2368b41240eb6456c7c2f976ae635c931967cd3c))
- **layout:** `ItemGroup` add new directive ([#10671](https://github.com/taiga-family/taiga-ui/issues/10671))
  ([b02d3f2](https://github.com/taiga-family/taiga-ui/commit/b02d3f23dd8eb6b7d45ad56ba3e8719601b8fd40))

### 🐞 Bug Fixes

- `Filter` fix short items ([#10681](https://github.com/taiga-family/taiga-ui/issues/10681))
  ([c3c744a](https://github.com/taiga-family/taiga-ui/commit/c3c744a4e64a072641c9d396b9327a76ceb9ac6f))
- **addon-charts:** fix chart colors for 10+ items ([#10676](https://github.com/taiga-family/taiga-ui/issues/10676))
  ([7827c27](https://github.com/taiga-family/taiga-ui/commit/7827c270314ee06f29a3bdc478945bf74c7fa03e))
- **addon-mobile:** use `display: block` on sheet host ([#10700](https://github.com/taiga-family/taiga-ui/issues/10700))
  ([c0be4d9](https://github.com/taiga-family/taiga-ui/commit/c0be4d9938e3b00942d5958c1a7d5eda68f100d2))
- **cdk:** `tuiCreateToken` with no arguments should not create token with default `undefined`-value
  ([#10682](https://github.com/taiga-family/taiga-ui/issues/10682))
  ([feadfcd](https://github.com/taiga-family/taiga-ui/commit/feadfcdae2b04a30650e4a2369a84d4715854f28))
- **core:** `Dialog` content section inherit border-radius
  ([#10669](https://github.com/taiga-family/taiga-ui/issues/10669))
  ([9a5a49d](https://github.com/taiga-family/taiga-ui/commit/9a5a49d247e54c0da04739dd8e64f80f661fbcc8))
- **core:** add hint marker to custom components ([#10687](https://github.com/taiga-family/taiga-ui/issues/10687))
  ([d74a2d2](https://github.com/taiga-family/taiga-ui/commit/d74a2d23b8e171e70f28dd9cfd40337903304d4f))
- **experimental:** valid references for compilation step
  ([#10702](https://github.com/taiga-family/taiga-ui/issues/10702))
  ([44d53ac](https://github.com/taiga-family/taiga-ui/commit/44d53ac694ef859c09128ed94ea5f73d0a5ad71c))
- **legacy:** late init control binding in `tuiMultiSelectGroup`
  ([#10679](https://github.com/taiga-family/taiga-ui/issues/10679))
  ([787bb60](https://github.com/taiga-family/taiga-ui/commit/787bb609207e9be2053ff760040b007aa5341928))

## [4.30.0](https://github.com/taiga-family/taiga-ui/compare/v4.29.0...v4.30.0) (2025-03-24)

### 🐞 Bug Fixes

- **addon-table:** `TablePagination` fix incorrect calculating start page
  ([#10623](https://github.com/taiga-family/taiga-ui/issues/10623))
  ([ae887a2](https://github.com/taiga-family/taiga-ui/commit/ae887a2b9addfe17084566a3cd1c6891a75e18db))
- **core:** synchronize driver's state ([#10592](https://github.com/taiga-family/taiga-ui/issues/10592))
  ([32a9a1a](https://github.com/taiga-family/taiga-ui/commit/32a9a1af4e7145fb026e7023d119c17a68d2b19d))

### 🚀 Features

- **addon-charts:** add `tapColumn` output event in `tui-bar-chart`
  ([#10636](https://github.com/taiga-family/taiga-ui/issues/10636))
  ([9081a1a](https://github.com/taiga-family/taiga-ui/commit/9081a1ae072c5a95b057a434022e78f00c9b4f8a))
- **addon-doc:** prettify object in popup notification ([#10637](https://github.com/taiga-family/taiga-ui/issues/10637))
  ([dd5f606](https://github.com/taiga-family/taiga-ui/commit/dd5f6063f78e5eafd210884a2684fcf6f8b0ea05))
- **kit:** `InputSlider` refactor to new `Textfield` ([#10288](https://github.com/taiga-family/taiga-ui/issues/10288))
  ([c02c28f](https://github.com/taiga-family/taiga-ui/commit/c02c28f939df0d34386e3c7ee9cc1e58075f0923))
- **kit:** elastic container integration in button group
  ([#10651](https://github.com/taiga-family/taiga-ui/issues/10651))
  ([633ed27](https://github.com/taiga-family/taiga-ui/commit/633ed2763096b042f7f5e62de2187dbeb1a56ebb))
- **layout:** `DynamicHeader` add directive ([#10523](https://github.com/taiga-family/taiga-ui/issues/10523))
  ([82c7e04](https://github.com/taiga-family/taiga-ui/commit/82c7e04cd4e43bdf1a5b145c81f2a00dbd777fb5))

## [4.29.0](https://github.com/taiga-family/taiga-ui/compare/v4.28.0...v4.29.0) (2025-03-18)

### 🚀 Features

- **cdk:** add `tuiAnimation` ([#10609](https://github.com/taiga-family/taiga-ui/issues/10609))
  ([f1d3230](https://github.com/taiga-family/taiga-ui/commit/f1d32306c244e5825aabd963155547437f8092d0))
- **kit:** `InputMonthRange` refactor to new `Textfield`
  ([#10569](https://github.com/taiga-family/taiga-ui/issues/10569))
  ([6ff50eb](https://github.com/taiga-family/taiga-ui/commit/6ff50ebc490b3df1f229151a7ebadf3d09165c1a))

### 🐞 Bug Fixes

- **addon-table:** `tuiSortChange` event should emit when `requiredSort` is enabled
  ([#10619](https://github.com/taiga-family/taiga-ui/issues/10619))
  ([78f2d01](https://github.com/taiga-family/taiga-ui/commit/78f2d01e0b9c4f95b2f4ffdfe56ddbe70edbfdc6))
- **addon-table:** improve `tuiSortChange` event type ([#10556](https://github.com/taiga-family/taiga-ui/issues/10556))
  ([443b218](https://github.com/taiga-family/taiga-ui/commit/443b218d3eb4550e9462e298363ed314df3692de))
- **experimental:** `Accordion` fix dynamic children ([#10457](https://github.com/taiga-family/taiga-ui/issues/10457))
  ([1a14a32](https://github.com/taiga-family/taiga-ui/commit/1a14a3291800eb56843a1341f8c1a88f3e15a32a))
- **kit:** `Block` fix style for input inside ([#10604](https://github.com/taiga-family/taiga-ui/issues/10604))
  ([7a42e5e](https://github.com/taiga-family/taiga-ui/commit/7a42e5e07d21240b0e54148cc24cf4a22bd990ac))
- **kit:** `Chip` as text input is not properly clickable
  ([#10572](https://github.com/taiga-family/taiga-ui/issues/10572))
  ([4112ac6](https://github.com/taiga-family/taiga-ui/commit/4112ac6a865ffb23c930065ba711cb4e04049078))
- **kit:** disabled checkbox must not be interactive ([#10583](https://github.com/taiga-family/taiga-ui/issues/10583))
  ([20d966e](https://github.com/taiga-family/taiga-ui/commit/20d966ee7d78dc33bebfe6e747bc39369071e1e8))
- **layout:** `BlockStatus` fix margin when description block is empty
  ([#10579](https://github.com/taiga-family/taiga-ui/issues/10579))
  ([678f185](https://github.com/taiga-family/taiga-ui/commit/678f18533ba7df7af3952a018c1960762df65f4c))
- **legacy:** `InputTag` remove unnecessary scrollbar ([#10582](https://github.com/taiga-family/taiga-ui/issues/10582))
  ([b4b2fb6](https://github.com/taiga-family/taiga-ui/commit/b4b2fb6eae91e4ea9965aba9cfa00a56ea67a570))
- **legacy:** do not expand textarea horizontally for long word
  ([#10566](https://github.com/taiga-family/taiga-ui/issues/10566))
  ([9b3570b](https://github.com/taiga-family/taiga-ui/commit/9b3570b86ef02f7d89742160e5f3cf984fb9f547))

## [4.28.0](https://github.com/taiga-family/taiga-ui/compare/v4.27.1...v4.28.0) (2025-03-11)

### 🚀 Features

- **kit:** `InputMonth` refactor to new `Textfield` ([#10345](https://github.com/taiga-family/taiga-ui/issues/10345))
  ([03068fb](https://github.com/taiga-family/taiga-ui/commit/03068fb0c0de2ffd4f1785a0c4cbf4abe763a186))
- **nx-cloud:** set up nx workspace ([#10520](https://github.com/taiga-family/taiga-ui/issues/10520))
  ([a76b804](https://github.com/taiga-family/taiga-ui/commit/a76b8048d0c54dadf74c90cccde25e3719a766cd))

### 🐞 Bug Fixes

- **core:** `TuiDataList` attr(data-label) not correct working in Chrome
  ([#10551](https://github.com/taiga-family/taiga-ui/issues/10551))
  ([1dc4778](https://github.com/taiga-family/taiga-ui/commit/1dc4778e950c2917b3344d8901084a287c3bb7a8))
- **core:** focus option by mousemove only in dropdown manager
  ([#10534](https://github.com/taiga-family/taiga-ui/issues/10534))
  ([a5b4a02](https://github.com/taiga-family/taiga-ui/commit/a5b4a02387b115c2a1368170885ff177f1a0b7ea))
- **kit:** expand `tui-data-list-wrapper[labels]` generic type
  ([#10545](https://github.com/taiga-family/taiga-ui/issues/10545))
  ([65dc556](https://github.com/taiga-family/taiga-ui/commit/65dc556d839013fc852f0f8ac85520b5cce9bb94))
- **kit:** support customizing number of visible lines in `tui-push`
  ([#10554](https://github.com/taiga-family/taiga-ui/issues/10554))
  ([a48bd61](https://github.com/taiga-family/taiga-ui/commit/a48bd61cf5f3356c0900445610533af1c713807a))
- **legacy:** textarea flickering when type space ([#10557](https://github.com/taiga-family/taiga-ui/issues/10557))
  ([98bd592](https://github.com/taiga-family/taiga-ui/commit/98bd5924ab108e828d03d1c15a0d788ac454fa48))

### [4.27.1](https://github.com/taiga-family/taiga-ui/compare/v4.27.0...v4.27.1) (2025-03-05)

### 🐞 Bug Fixes

- skeleton view without animation ([#10509](https://github.com/taiga-family/taiga-ui/issues/10509))
  ([2311df9](https://github.com/taiga-family/taiga-ui/commit/2311df9d483da461512770e8abc406d11257bbdc))

## [4.27.0](https://github.com/taiga-family/taiga-ui/compare/v4.26.1...v4.27.0) (2025-03-04)

### 🚀 Features

- **addon-mobile:** `SheetDialog` add `fullscreen` ([#10442](https://github.com/taiga-family/taiga-ui/issues/10442))
  ([a0a1709](https://github.com/taiga-family/taiga-ui/commit/a0a1709414d8ec004761115a65ab99be7d558c5b))
- **layout:** `BlockStatus` add extra-description and status blocks
  ([#10486](https://github.com/taiga-family/taiga-ui/issues/10486))
  ([818eb20](https://github.com/taiga-family/taiga-ui/commit/818eb20b20197f31fe384b1158fe4c50fc87c912))

### 🐞 Bug Fixes

- **core:** reuse safe position for hint depend on viewport
  ([#10498](https://github.com/taiga-family/taiga-ui/issues/10498))
  ([59441d1](https://github.com/taiga-family/taiga-ui/commit/59441d11e7626844d580ce1183f16421585f010c))
- **kit:** `Comment` add min-width ([#10500](https://github.com/taiga-family/taiga-ui/issues/10500))
  ([05a7b85](https://github.com/taiga-family/taiga-ui/commit/05a7b857848417aa02132e79876080323a5509ec))
- **kit:** add additional overload to `tuiFilterByInput` pipe
  ([#10493](https://github.com/taiga-family/taiga-ui/issues/10493))
  ([f31e0b9](https://github.com/taiga-family/taiga-ui/commit/f31e0b931fb5fcd1a5146f062da1a9ed0364db64))

### [4.26.1](https://github.com/taiga-family/taiga-ui/compare/v4.26.0...v4.26.1) (2025-02-28)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` should remove browser autofill styles for Chrome on IOS
  ([#10480](https://github.com/taiga-family/taiga-ui/issues/10480))
  ([834fd1c](https://github.com/taiga-family/taiga-ui/commit/834fd1c869e3dc63a899905984a84b95c95b5da7))

## [4.26.0](https://github.com/taiga-family/taiga-ui/compare/v4.25.0...v4.26.0) (2025-02-27)

### 🐞 Bug Fixes

- **addon-doc:** `tuiCoerceValue` fails to parse `%` symbol
  ([#10403](https://github.com/taiga-family/taiga-ui/issues/10403))
  ([f4fac1d](https://github.com/taiga-family/taiga-ui/commit/f4fac1da4664fb2dd65451cea96ffe7716c3f099))
- **core:** `DataList` fix empty content ([#10431](https://github.com/taiga-family/taiga-ui/issues/10431))
  ([18e6cbc](https://github.com/taiga-family/taiga-ui/commit/18e6cbc853b4e56c6813684045c5899c08601f9d))
- **core:** fix dropdown when host is svg element ([#10430](https://github.com/taiga-family/taiga-ui/issues/10430))
  ([6d065a8](https://github.com/taiga-family/taiga-ui/commit/6d065a83160afdbb29f8f8bd06dab527d9ba7600))
- **kit:** `InputNumber` should support `[attr.maxLength]`
  ([#10455](https://github.com/taiga-family/taiga-ui/issues/10455))
  ([aba9d25](https://github.com/taiga-family/taiga-ui/commit/aba9d25fc44062273ce4cb6fce851450b21307ab))
- **kit:** add additional overload to `tuiFilterByInput` pipe
  ([#10408](https://github.com/taiga-family/taiga-ui/issues/10408))
  ([47a9809](https://github.com/taiga-family/taiga-ui/commit/47a98092c2f683a18d201e02459b30ec70e55b91))
- **kit:** improve caret management for `InputNumber` on step action
  ([#10405](https://github.com/taiga-family/taiga-ui/issues/10405))
  ([0422514](https://github.com/taiga-family/taiga-ui/commit/042251451106184d880c60b82cc008af7a338cbd))

### 🚀 Features

- **addon-mobile:** `Chip` add mobile styles ([#10461](https://github.com/taiga-family/taiga-ui/issues/10461))
  ([4f9f612](https://github.com/taiga-family/taiga-ui/commit/4f9f612088a425c428a05093d53759b335f4038f))
- **addon-mobile:** `TuiSheetDialog` provide `TUI_SCROLL_REF`
  ([#10418](https://github.com/taiga-family/taiga-ui/issues/10418))
  ([6920680](https://github.com/taiga-family/taiga-ui/commit/6920680ed0a87a103ac68628bc18d9d6a314708a))
- **layout:** `Form` simplify columns ([#10412](https://github.com/taiga-family/taiga-ui/issues/10412))
  ([d7e0661](https://github.com/taiga-family/taiga-ui/commit/d7e0661b8f5b2046878c83ce2c9a422f2e1532cf))
- **layout:** `Navigation` update according to specs ([#10411](https://github.com/taiga-family/taiga-ui/issues/10411))
  ([7ac5898](https://github.com/taiga-family/taiga-ui/commit/7ac5898c5f05784d62bc1f7606530e5f5132a5da))

## [4.25.0](https://github.com/taiga-family/taiga-ui/compare/v4.24.0...v4.25.0) (2025-02-18)

### 🚀 Features

- **addon-table:** add new output event with sort and direction changes
  ([#10268](https://github.com/taiga-family/taiga-ui/issues/10268))
  ([6bc1db2](https://github.com/taiga-family/taiga-ui/commit/6bc1db240b61cbdd1ca7e806c06c497474ad8616))
- **core:** add font scaling option ([#10343](https://github.com/taiga-family/taiga-ui/issues/10343))
  ([6fb390a](https://github.com/taiga-family/taiga-ui/commit/6fb390ac3c92e680d496cd6226d0a93d1b2fc408))
- **i18n:** update Belarusian translation ([#10348](https://github.com/taiga-family/taiga-ui/issues/10348))
  ([b2bd352](https://github.com/taiga-family/taiga-ui/commit/b2bd35292f0bff2474f8b3b0db2cfd69f6d153f3))
- **kit:** `Chip` add default rules for `Fade` ([#10347](https://github.com/taiga-family/taiga-ui/issues/10347))
  ([882462c](https://github.com/taiga-family/taiga-ui/commit/882462c7fce21dc2c0af561ddf6b676d6cf1bc3b))
- **kit:** `Tiles` add reorder strategies ([#10360](https://github.com/taiga-family/taiga-ui/issues/10360))
  ([1277754](https://github.com/taiga-family/taiga-ui/commit/12777547f086f12db86b58db2ab60e146579c507))
- **kit:** `UnfinishedValidator` allow dynamic messages
  ([#10377](https://github.com/taiga-family/taiga-ui/issues/10377))
  ([bda084a](https://github.com/taiga-family/taiga-ui/commit/bda084a88a0a83a0c564d7d95a1881bd4edfad89))
- **testing:** add resize observer polyfill ([#10370](https://github.com/taiga-family/taiga-ui/issues/10370))
  ([5da8fec](https://github.com/taiga-family/taiga-ui/commit/5da8feca9c22481fe2f6c9c32d419f421ac11e55))

### 🐞 Bug Fixes

- **core:** check tuiDropdownContext activeZone only when dropdown is open
  ([#10353](https://github.com/taiga-family/taiga-ui/issues/10353))
  ([15da31b](https://github.com/taiga-family/taiga-ui/commit/15da31bf648e25cd470d8b892a09a8ccfb98c6f7))
- **core:** enable pointer events on disabled button ([#10378](https://github.com/taiga-family/taiga-ui/issues/10378))
  ([bf14135](https://github.com/taiga-family/taiga-ui/commit/bf1413509e5685e8583d3df2d07a2ab36de9f359))
- **core:** redundant padding around title when header block exists
  ([#10386](https://github.com/taiga-family/taiga-ui/issues/10386))
  ([3832adf](https://github.com/taiga-family/taiga-ui/commit/3832adfd3f7bcc3caca85ae2f01de0613ed6fd9a))
- **core:** use `TUI_DARK_MODE` instead of element in dropdown
  ([#10341](https://github.com/taiga-family/taiga-ui/issues/10341))
  ([d63f358](https://github.com/taiga-family/taiga-ui/commit/d63f358b2badde610166cfdaf79f90bcda3c1b94))
- **experimental:** `InputPhoneInternational` detects `countryIsoCode` on control update with complete phone
  ([#10358](https://github.com/taiga-family/taiga-ui/issues/10358))
  ([106c961](https://github.com/taiga-family/taiga-ui/commit/106c961db85eb7838455ec1e5d3ac339b3db644d))
- **kit:** `ActionBar` fix background color ([#10379](https://github.com/taiga-family/taiga-ui/issues/10379))
  ([5fdc0f1](https://github.com/taiga-family/taiga-ui/commit/5fdc0f16d2b6e3e73b4d94954c47637dd0e23c5f))
- **kit:** `Checkbox`, `Radio`, `Switch` return the lost appearance mode
  ([#10390](https://github.com/taiga-family/taiga-ui/issues/10390))
  ([eaaecf8](https://github.com/taiga-family/taiga-ui/commit/eaaecf8976b3fd66833aed1237e7119ad71aa991))
- **kit:** `Files` hide element when empty ([#10380](https://github.com/taiga-family/taiga-ui/issues/10380))
  ([189ee07](https://github.com/taiga-family/taiga-ui/commit/189ee07d7dc686e7ac2ee0c55f8d76199ef4aa70))
- **kit:** input should be below text ([#10324](https://github.com/taiga-family/taiga-ui/issues/10324))
  ([4301760](https://github.com/taiga-family/taiga-ui/commit/4301760d158abd3618af3bd58b571c9f3359ce9e))
- **kit:** valid font size for stepper ([#10392](https://github.com/taiga-family/taiga-ui/issues/10392))
  ([923be34](https://github.com/taiga-family/taiga-ui/commit/923be34f48c0e119458105384cc9d1a7004e713e))
- **layout:** `Card` add default background color ([#10388](https://github.com/taiga-family/taiga-ui/issues/10388))
  ([636ca10](https://github.com/taiga-family/taiga-ui/commit/636ca105fc587b0f862badc762bf2d2e6d022863))
- **legacy:** `InputDateMulti` include first/last date as valid
  ([#10373](https://github.com/taiga-family/taiga-ui/issues/10373))
  ([5021999](https://github.com/taiga-family/taiga-ui/commit/50219990f3d83156ea875e657d709a76b8c5d53e))
- **testing:** mock the platform before each test ([#10361](https://github.com/taiga-family/taiga-ui/issues/10361))
  ([2c11b56](https://github.com/taiga-family/taiga-ui/commit/2c11b5674c69707961dc7085cd0490664b55172b))

## [4.24.0](https://github.com/taiga-family/taiga-ui/compare/v4.23.0...v4.24.0) (2025-02-10)

### 🐞 Bug Fixes

- **core:** regression of selecting day when used min length
  ([#10302](https://github.com/taiga-family/taiga-ui/issues/10302))
  ([30ca18a](https://github.com/taiga-family/taiga-ui/commit/30ca18a28bc5511d3310350a9e30c595b3b8dbdd))
- **experimental:** `SearchResults` fix focusing hidden tabs
  ([#10318](https://github.com/taiga-family/taiga-ui/issues/10318))
  ([fb1ade2](https://github.com/taiga-family/taiga-ui/commit/fb1ade2e26f22722ceee225065d74032bce36f86))
- **kit:** `Avatar` fix icon color for appearances ([#10328](https://github.com/taiga-family/taiga-ui/issues/10328))
  ([d9c821c](https://github.com/taiga-family/taiga-ui/commit/d9c821c3d08687e6783f06ed718882b97fcc1012))
- **kit:** `Tabs` properly inherit font styles ([#10336](https://github.com/taiga-family/taiga-ui/issues/10336))
  ([e830f55](https://github.com/taiga-family/taiga-ui/commit/e830f552568f78ade56143ec9ebe45fc04762b54))
- **legacy:** `InputDate` ignore null value if internal value is already null
  ([#10322](https://github.com/taiga-family/taiga-ui/issues/10322))
  ([5e8430e](https://github.com/taiga-family/taiga-ui/commit/5e8430eecf1282d3d9dbd84efc45374c815a8e77))
- **legacy:** add tuiUnfinishedValidator behaviour for InputDateTimeComponent
  ([#10164](https://github.com/taiga-family/taiga-ui/issues/10164))
  ([fa4c079](https://github.com/taiga-family/taiga-ui/commit/fa4c079ae0c8eaf83eb827c3b815a3dd5afbec02))

### 🚀 Features

- **addon-mobile:** `@taiga-ui/layout` should be peer dependency
  ([#10332](https://github.com/taiga-family/taiga-ui/issues/10332))
  ([91dbb6c](https://github.com/taiga-family/taiga-ui/commit/91dbb6cf64ec4a31da7185dfbb8a8b271515d6af))
- **addon-mobile:** `SheetDialog` content inherit border-radius
  ([#10320](https://github.com/taiga-family/taiga-ui/issues/10320))
  ([b52e9da](https://github.com/taiga-family/taiga-ui/commit/b52e9da0e85bae9113a9d5378dfae0bd8b759c20))
- **cdk:** `FontSize` add new directive ([#10327](https://github.com/taiga-family/taiga-ui/issues/10327))
  ([dac1ba5](https://github.com/taiga-family/taiga-ui/commit/dac1ba5a3ae7c7964d2cf4842876bdb842481b0b))
- **kit:** `Connected` add support for `Accordion` ([#10329](https://github.com/taiga-family/taiga-ui/issues/10329))
  ([74fdab5](https://github.com/taiga-family/taiga-ui/commit/74fdab54054a5412c017ff67d467cdae889035d7))
- **layout:** `Cell` add disabled state ([#10307](https://github.com/taiga-family/taiga-ui/issues/10307))
  ([bd06ee0](https://github.com/taiga-family/taiga-ui/commit/bd06ee0cde806574e2b9f6d15a83323b6ca91908))
- **testing:** change `PLATFORM_ID` to server on jest environment
  ([#10335](https://github.com/taiga-family/taiga-ui/issues/10335))
  ([ec9752d](https://github.com/taiga-family/taiga-ui/commit/ec9752dd8a1a74faf5eb859b1ad8377f1710d71d))

## [4.23.0](https://github.com/taiga-family/taiga-ui/compare/v4.22.0...v4.23.0) (2025-02-03)

### 🐞 Bug Fixes

- **addon-doc:** `DocAPIItem` throws error for signal-based output handlers
  ([#10292](https://github.com/taiga-family/taiga-ui/issues/10292))
  ([548a212](https://github.com/taiga-family/taiga-ui/commit/548a2122a9515e4be22da77d6873d0dc3a24a1d8))
- **addon-mobile:** `ElasticSticky` recalculates offsetTop if host content was changed
  ([#10253](https://github.com/taiga-family/taiga-ui/issues/10253))
  ([a93868b](https://github.com/taiga-family/taiga-ui/commit/a93868b0564cb273ad9aa09de2d8bbc556e1ab02))
- **kit:** `Carousel` fix autoscroll in ssr ([#10293](https://github.com/taiga-family/taiga-ui/issues/10293))
  ([63e0564](https://github.com/taiga-family/taiga-ui/commit/63e056491b6092487d7be9148eae415e178fb713))
- **kit:** `Connected` make compatible with `Chevron` ([#10265](https://github.com/taiga-family/taiga-ui/issues/10265))
  ([a9640fb](https://github.com/taiga-family/taiga-ui/commit/a9640fb0d8c27e29fcbedcb51f69444d72caf9f4))
- **kit:** `InputNumber` should handle programmatic control update with `NaN` as empty textfield
  ([#10276](https://github.com/taiga-family/taiga-ui/issues/10276))
  ([ede4715](https://github.com/taiga-family/taiga-ui/commit/ede471512306858fb398b17997976d1f8ab996c9))
- **layout:** `CardLarge` fix title boldness ([#10271](https://github.com/taiga-family/taiga-ui/issues/10271))
  ([0c9a4e9](https://github.com/taiga-family/taiga-ui/commit/0c9a4e927e0f7ef2617513b2eac2d8256c37c1db))
- **layout:** `Search` allow other elements via `[tuiSearchField]` attribute
  ([#10294](https://github.com/taiga-family/taiga-ui/issues/10294))
  ([f5c80ea](https://github.com/taiga-family/taiga-ui/commit/f5c80ead36eccb4fafe96d853b3f398104f42e15))

### 🚀 Features

- **addon-mobile:** `BottomSheet` add new component ([#10269](https://github.com/taiga-family/taiga-ui/issues/10269))
  ([1fff4f5](https://github.com/taiga-family/taiga-ui/commit/1fff4f574eb24118a585a438724488e5bf584a28))
- **legacy:** input tag converts the last element to tag after paste event
  ([#10270](https://github.com/taiga-family/taiga-ui/issues/10270))
  ([89076b3](https://github.com/taiga-family/taiga-ui/commit/89076b387f7f3bfd10fb5822a79b0aab45333d26))

## [4.22.0](https://github.com/taiga-family/taiga-ui/compare/v4.21.0...v4.22.0) (2025-01-27)

### 🚀 Features

- **addon-mobile:** `Checkbox` update mobile design ([#10204](https://github.com/taiga-family/taiga-ui/issues/10204))
  ([10c4174](https://github.com/taiga-family/taiga-ui/commit/10c4174f1958ec8139b9c3d7ee9682523d0ee90d))
- **core:** `DataList` update labels design according to specs
  ([#10205](https://github.com/taiga-family/taiga-ui/issues/10205))
  ([b2081d7](https://github.com/taiga-family/taiga-ui/commit/b2081d72cccb3d0568771b0b9bd710c299f8a5bf))
- **demo:** `Button` add example with two labels ([#10242](https://github.com/taiga-family/taiga-ui/issues/10242))
  ([5f24171](https://github.com/taiga-family/taiga-ui/commit/5f241713f5f694234659c97d4f813351d96d03e7))
- **layout:** `Header` add body-l and body-m sizes ([#10212](https://github.com/taiga-family/taiga-ui/issues/10212))
  ([fa92c17](https://github.com/taiga-family/taiga-ui/commit/fa92c17257995a6a024812ecd0774e656ed21c13))
- **layout:** `InputSearch` add new component ([#10197](https://github.com/taiga-family/taiga-ui/issues/10197))
  ([e810a15](https://github.com/taiga-family/taiga-ui/commit/e810a15cc5db431e21de4f3dac9fadbd61d2ad12))
- **layout:** `Cell` add new height modes ([#10209](https://github.com/taiga-family/taiga-ui/issues/10209))
  ([e8e1986](https://github.com/taiga-family/taiga-ui/commit/e8e198642375b1be50cd37146f5de789cc35f7b1))

### 🐞 Bug Fixes

- **addon-mobile:** `DataList` inside `DropdownMobile` should not have built-in horizontal indent
  ([#10213](https://github.com/taiga-family/taiga-ui/issues/10213))
  ([fe5d3f5](https://github.com/taiga-family/taiga-ui/commit/fe5d3f59ae6f6b6a7e8d3045368937fedbe3d8da))
- **addon-mobile:** `SheetDialog` fix background blackout and longtap events
  ([#10244](https://github.com/taiga-family/taiga-ui/issues/10244))
  ([bbff629](https://github.com/taiga-family/taiga-ui/commit/bbff629f4355259282571c4aa1dd632fcebe3f40))
- **core:** `Hint` fix dark mode colors ([#10225](https://github.com/taiga-family/taiga-ui/issues/10225))
  ([64c269f](https://github.com/taiga-family/taiga-ui/commit/64c269f7d08eaaac80b48f6f79d4e305f6d3ae6b))
- **kit** `TuiControl` fix CD problems for `writeValue` of empty value
  ([#10220](https://github.com/taiga-family/taiga-ui/issues/10220))
  ([647dcaa](https://github.com/taiga-family/taiga-ui/commit/647dcaade43175382097ea51166e352ca72594ce))
- **kit:** `CalendarRange` should not require extra click to start new range after same day range
  ([#9847](https://github.com/taiga-family/taiga-ui/issues/9847))
  ([2643187](https://github.com/taiga-family/taiga-ui/commit/2643187007f9c849b4b03c12cb3a9dfc0aad20ab))
- **kit:** `LineClamp` debounce `overflownChange` event
  ([#10188](https://github.com/taiga-family/taiga-ui/issues/10188))
  ([07e335a](https://github.com/taiga-family/taiga-ui/commit/07e335ad1cde0340333c7fe2cc53893a52d0a7b8))
- **legacy:** `ColorPicker` fixed missing pointer ([#10201](https://github.com/taiga-family/taiga-ui/issues/10201))
  ([30b57fe](https://github.com/taiga-family/taiga-ui/commit/30b57fedd3e7a49b9f4911e8bf0d11bbd3375414))

## [4.21.0](https://github.com/taiga-family/taiga-ui/compare/v4.20.0...v4.21.0) (2025-01-20)

### 🚀 Features

- **core:** `Textfield` add new table appearance ([#10179](https://github.com/taiga-family/taiga-ui/issues/10179))
  ([6cea767](https://github.com/taiga-family/taiga-ui/commit/6cea7678f5ca6a75e2fd641c54a9415ed86ee4d1))

### 🐞 Bug Fixes

- **addon-mobile:** `SwipeActions` fix actions in IOS safari
  ([#10163](https://github.com/taiga-family/taiga-ui/issues/10163))
  ([bd53957](https://github.com/taiga-family/taiga-ui/commit/bd539579e8274ca3046af52d5b4cc9365ad2eca6))
- **core:** `Hint` fix not using custom `Viewport` limits
  ([#10183](https://github.com/taiga-family/taiga-ui/issues/10183))
  ([0dc9b76](https://github.com/taiga-family/taiga-ui/commit/0dc9b76876c63a71d129ecb79f57d4d9e7290da1))
- **core:** `tuiDialog` fix typings for classes with constructor parameters
  ([#10193](https://github.com/taiga-family/taiga-ui/issues/10193))
  ([6568200](https://github.com/taiga-family/taiga-ui/commit/65682009a6f92d96b5d329bce6da75d0b30a6693))
- **core:** fix unknown selector warnings in Angular 17+
  ([#10162](https://github.com/taiga-family/taiga-ui/issues/10162))
  ([f7192b9](https://github.com/taiga-family/taiga-ui/commit/f7192b9621d8fcfd67ae2c36942727ba3e70a0d2))
- **experimental:** `Accordion` fix error with dynamic items
  ([#10182](https://github.com/taiga-family/taiga-ui/issues/10182))
  ([a4fe7b3](https://github.com/taiga-family/taiga-ui/commit/a4fe7b3058885bc75037951b82e7537bbd135a3d))
- **kit** `Textfield` controls should handle initial `ngModel` phantom `null` value
  ([#10171](https://github.com/taiga-family/taiga-ui/issues/10171))
  ([b490860](https://github.com/taiga-family/taiga-ui/commit/b490860bb8ff14a2b6eba781eec1e70d892bad54))
- **kit:** `InputNumber` provide `TuiControl` for DI ([#10176](https://github.com/taiga-family/taiga-ui/issues/10176))
  ([be0c38c](https://github.com/taiga-family/taiga-ui/commit/be0c38c5cc39b2157cec45f12b5edec68f9c46f5))
- **layout:** `AsideItem` calculate collapsed hint dynamically
  ([#10173](https://github.com/taiga-family/taiga-ui/issues/10173))
  ([96797d5](https://github.com/taiga-family/taiga-ui/commit/96797d54a2a0610f79a3a3251f53a3a55b8ed4b8))
- **layout:** `Navigation` fix main content positioning
  ([#10191](https://github.com/taiga-family/taiga-ui/issues/10191))
  ([967ae88](https://github.com/taiga-family/taiga-ui/commit/967ae88d50ec3206cb6439001bcbfb79506cbeef))

## [4.20.0](https://github.com/taiga-family/taiga-ui/compare/v4.19.0...v4.20.0) (2025-01-13)

### 🐞 Bug Fixes

- **addon-commerce:** `Amount` hide negative sign when value is zero
  ([#10147](https://github.com/taiga-family/taiga-ui/issues/10147))
  ([9244f1a](https://github.com/taiga-family/taiga-ui/commit/9244f1a1f24cc28049e1b8ed0e7731e22ae8ebda))
- **cdk:** `TuiTime.shift` doesn't shift higher order units
  ([#10065](https://github.com/taiga-family/taiga-ui/issues/10065))
  ([5939585](https://github.com/taiga-family/taiga-ui/commit/5939585c90acdba148a57b15b86ab27c4ec9b8a6))
- **core:** `Group` fix overlaid border in collapsed mode
  ([#10094](https://github.com/taiga-family/taiga-ui/issues/10094))
  ([1b7628a](https://github.com/taiga-family/taiga-ui/commit/1b7628a26c733eae91dba96506bc9682eb96d035))
- **core:** `Textfield` with `[content]` property has invalid behavior for `<input />`
  ([#10066](https://github.com/taiga-family/taiga-ui/issues/10066))
  ([aa9ff64](https://github.com/taiga-family/taiga-ui/commit/aa9ff64bd66a726afc49e4da96a6f2a2d19bca3b))
- **kit:** `LineClamp` fix initial transition ([#10070](https://github.com/taiga-family/taiga-ui/issues/10070))
  ([14426cd](https://github.com/taiga-family/taiga-ui/commit/14426cddecc050b3a606ae9c9ba426da70444399))
- **kit:** `Radio`, `Checkbox` and `Switch` fix change detection
  ([#10102](https://github.com/taiga-family/taiga-ui/issues/10102))
  ([824da0c](https://github.com/taiga-family/taiga-ui/commit/824da0c41154f868889865e4f05748d25263ca2d))
- **kit:** `Confirm` fix text overflow ([#10085](https://github.com/taiga-family/taiga-ui/issues/10085))
  ([166bc37](https://github.com/taiga-family/taiga-ui/commit/166bc37617d58cc26970528afb8e127cc99fe468))
- **layout:** `BlockStatus` fix image height ([#10121](https://github.com/taiga-family/taiga-ui/issues/10121))
  ([570f67c](https://github.com/taiga-family/taiga-ui/commit/570f67cc642694bdc59b4ff93246f920b6c61efe))
- **legacy:** `InputPhone` incorrectly parses paste of the short phone number
  ([#10063](https://github.com/taiga-family/taiga-ui/issues/10063))
  ([1df2480](https://github.com/taiga-family/taiga-ui/commit/1df2480178fde2f5c5769fed4d88a809bafd760e))
- **legacy:** `MultiSelect` fix arrow rotation ([#10050](https://github.com/taiga-family/taiga-ui/issues/10050))
  ([e96d4eb](https://github.com/taiga-family/taiga-ui/commit/e96d4eb76604f6dcfd96594778ee1b87109d9259))
- **legacy:** `InputTag` fix table appearance and placeholder
  ([#10052](https://github.com/taiga-family/taiga-ui/issues/10052))
  ([416dd8b](https://github.com/taiga-family/taiga-ui/commit/416dd8bf28e20f7b8b600acfa771b5c1bef18308))
- **legacy:** `InputDateRange` fix active period together with transformer
  ([#10135](https://github.com/taiga-family/taiga-ui/issues/10135))
  ([3b8651b](https://github.com/taiga-family/taiga-ui/commit/3b8651bca8083eb33fa4164c6df2c7b3bd254061))
- **legacy:** `Textfield` wrong prefix placement in table context
  ([#10045](https://github.com/taiga-family/taiga-ui/issues/10045))
  ([99cb0bc](https://github.com/taiga-family/taiga-ui/commit/99cb0bcd250d310e3612dc56b0f4b64d1738903c))

### 🚀 Features

- **core:** `tuiDialog` add `injector` to options ([#10056](https://github.com/taiga-family/taiga-ui/issues/10056))
  ([bcc02bc](https://github.com/taiga-family/taiga-ui/commit/bcc02bc88350be9ec7cbffe6a4baf1696b837493))
- **core:** `TuiWithDropdownOpen` expose `tuiDropdownEnabled`
  ([#10101](https://github.com/taiga-family/taiga-ui/issues/10101))
  ([562bbc6](https://github.com/taiga-family/taiga-ui/commit/562bbc6accf83b375c5a18c7792de65572c0e987))
- **core:** disable dark theme for print mode ([#10110](https://github.com/taiga-family/taiga-ui/issues/10110))
  ([8c9c616](https://github.com/taiga-family/taiga-ui/commit/8c9c6168cf37842ce5fe62e0ab898f8df39cb168))
- **core:** `HintManual` enable hover when is value is `null`
  ([#9955](https://github.com/taiga-family/taiga-ui/issues/9955))
  ([e0e5861](https://github.com/taiga-family/taiga-ui/commit/e0e58614e7a8b6d16dd6abcbfee7ff8807ea023c))
- **experimental:** `Accordion` add refactored component
  ([#10103](https://github.com/taiga-family/taiga-ui/issues/10103))
  ([62109de](https://github.com/taiga-family/taiga-ui/commit/62109dec07637af61faa996629ffde155132e823))
- **experimental:** `Expand` add refactored component ([#10069](https://github.com/taiga-family/taiga-ui/issues/10069))
  ([272db9b](https://github.com/taiga-family/taiga-ui/commit/272db9b5f5ad753d441a3db2909e0340c40db81c))
- **experimental:** `Hint` add refactored component ([#10051](https://github.com/taiga-family/taiga-ui/issues/10051))
  ([92e8b21](https://github.com/taiga-family/taiga-ui/commit/92e8b21213e08e22d8bc92d8b7bf6225fa09c651))
- **kit:** `InputPin` add new component ([#10084](https://github.com/taiga-family/taiga-ui/issues/10084))
  ([36b45fa](https://github.com/taiga-family/taiga-ui/commit/36b45fa55aa7eb22e8d5aff711c5fedef2c64029))
- **kit:** `Tooltip` add small size ([#10154](https://github.com/taiga-family/taiga-ui/issues/10154))
  ([32e78bf](https://github.com/taiga-family/taiga-ui/commit/32e78bfe4e90fdf2e74c7ce50e8a8d08018e5886))
- **kit:** `InputNumber` refactor to new `Textfield` ([#10099](https://github.com/taiga-family/taiga-ui/issues/10099))
  ([a32d2a4](https://github.com/taiga-family/taiga-ui/commit/a32d2a4d88598dfd28bef3d838f0613cdc4f22f2))

## [4.19.0](https://github.com/taiga-family/taiga-ui/compare/v4.18.0...v4.19.0) (2024-12-23)

### 🐞 Bug Fixes

- **addon-mobile:** `MobileCalendar` fix virtual scroll flickers during scroll in zoneless mode
  ([#10023](https://github.com/taiga-family/taiga-ui/issues/10023))
  ([e3cfbc9](https://github.com/taiga-family/taiga-ui/commit/e3cfbc940e2cb0c196b551e39ff58a9ffa8ff1cb))
- **addon-table:** fix calculating start page ([#9980](https://github.com/taiga-family/taiga-ui/issues/9980))
  ([d26f32b](https://github.com/taiga-family/taiga-ui/commit/d26f32b11948a3060e7840a9844a6b97e8a58ef8))
- **cdk:** `tuiFocusedIn` fix error when focus events happened in reactive context
  ([#10020](https://github.com/taiga-family/taiga-ui/issues/10020))
  ([12e9a29](https://github.com/taiga-family/taiga-ui/commit/12e9a29436b309f5d7b2229249c1113b06a2ff3d))
- **core:** `CalendarRange` do not allow to select disabled dates
  ([#10007](https://github.com/taiga-family/taiga-ui/issues/10007))
  ([b5d328c](https://github.com/taiga-family/taiga-ui/commit/b5d328cb41a0e8c663c5fe875ef2db9a8f929036))
- **kit:** `Carousel` fix scrolling page on mobile devices
  ([#10009](https://github.com/taiga-family/taiga-ui/issues/10009))
  ([13dcf7c](https://github.com/taiga-family/taiga-ui/commit/13dcf7c8c92f7d1198325f79816823dd0ee7eea4))
- **kit:** `InputNumber` has rounding problems on blur with large numbers
  ([#9974](https://github.com/taiga-family/taiga-ui/issues/9974))
  ([9ec1e7b](https://github.com/taiga-family/taiga-ui/commit/9ec1e7b27301594df2e7f3d86862a16dc3d9b691))
- **kit:** `Skeleton` fix animation speed customization ([#9984](https://github.com/taiga-family/taiga-ui/issues/9984))
  ([b8bb938](https://github.com/taiga-family/taiga-ui/commit/b8bb938ec1f9b47d8b9b9e3f9e2f12e04841da28))
- **kit:** `Tiles` fix selection when dragging in Safari ([#9952](https://github.com/taiga-family/taiga-ui/issues/9952))
  ([80614b3](https://github.com/taiga-family/taiga-ui/commit/80614b310e626092e3b0e316713e1a595ab4a693))
- **legacy:** `InputDateRange` reset cached active period
  ([#9946](https://github.com/taiga-family/taiga-ui/issues/9946))
  ([1144fae](https://github.com/taiga-family/taiga-ui/commit/1144fae8c7589118c7ebe62eded7a3a7e9f219fd))

### 🚀 Features

- **addon-commerce:** `InputCardGroup` add `inputs` option
  ([#10033](https://github.com/taiga-family/taiga-ui/issues/10033))
  ([5e20a26](https://github.com/taiga-family/taiga-ui/commit/5e20a2612839a5c7be2b49df26be6175bb22b431))
- **addon-commerce:** `ThumbnailCard` has new `xs` size ([#9969](https://github.com/taiga-family/taiga-ui/issues/9969))
  ([436e351](https://github.com/taiga-family/taiga-ui/commit/436e351a4c65d866db6b14056087256660222008))
- **addon-table:** `Table` fix resize issues ([#9961](https://github.com/taiga-family/taiga-ui/issues/9961))
  ([a16071a](https://github.com/taiga-family/taiga-ui/commit/a16071af434df266afd09b7bae4d5330c595b674))
- **experimental:** `InputPhoneInternational` refactor to new textfield approach
  ([#9976](https://github.com/taiga-family/taiga-ui/issues/9976))
  ([08f924d](https://github.com/taiga-family/taiga-ui/commit/08f924de9c3f756a72ce8cee0ac0f3072557b338))
- **layout:** `Navigation` add `Subheader` component ([#10041](https://github.com/taiga-family/taiga-ui/issues/10041))
  ([7de5985](https://github.com/taiga-family/taiga-ui/commit/7de59857276cddbbb608343524932668b1a243f6))

## [4.18.0](https://github.com/taiga-family/taiga-ui/compare/v4.17.0...v4.18.0) (2024-12-10)

### 🐞 Bug Fixes

- **addon-table:** `Th` fix sort icons being reversed ([#9904](https://github.com/taiga-family/taiga-ui/issues/9904))
  ([a6c0a36](https://github.com/taiga-family/taiga-ui/commit/a6c0a3604df7ef63b361ed4b63cbe99305498195))
- **core:** `Dropdown` fix initial width ([#9867](https://github.com/taiga-family/taiga-ui/issues/9867))
  ([76d8d01](https://github.com/taiga-family/taiga-ui/commit/76d8d01006481564500ec1e1f328fe748b6d9879))
- **core:** `DropdownOpen` fix CD problems after enabling
  ([#9888](https://github.com/taiga-family/taiga-ui/issues/9888))
  ([4249cd9](https://github.com/taiga-family/taiga-ui/commit/4249cd926f73a3378c9d94ebd740723a6827dc6a))
- **core:** `Icon` fix for old Safari ([#9917](https://github.com/taiga-family/taiga-ui/issues/9917))
  ([8c3a228](https://github.com/taiga-family/taiga-ui/commit/8c3a228152f5b74662c12bf115f9a3f44ae62d57))
- **core:** `DataList` fix focusing the first element ([#9891](https://github.com/taiga-family/taiga-ui/issues/9891))
  ([ab7dfde](https://github.com/taiga-family/taiga-ui/commit/ab7dfde75788131943e68cbbcf84dc6f230c42a9))
- **core:** `Tiles` fix transform breaking fixed position
  ([#9905](https://github.com/taiga-family/taiga-ui/issues/9905))
  ([369d9a4](https://github.com/taiga-family/taiga-ui/commit/369d9a45489012dcca454992c3532459c106f991))
- **kit:** `Carousel` fix dragging in chrome ([#9864](https://github.com/taiga-family/taiga-ui/issues/9864))
  ([6b1f985](https://github.com/taiga-family/taiga-ui/commit/6b1f9855c16ac58b382769bab60bb3f1fcbc7ee0))
- **kit:** `InputInline` fix broken scroll in Safari & Firefox
  ([#9818](https://github.com/taiga-family/taiga-ui/issues/9818))
  ([76634f1](https://github.com/taiga-family/taiga-ui/commit/76634f1d55bff5858d4139c9f21f020e504e42fc))
- **kit:** `Segmented` fix shadow clipping in Safari ([#9931](https://github.com/taiga-family/taiga-ui/issues/9931))
  ([c6c9c38](https://github.com/taiga-family/taiga-ui/commit/c6c9c3819ad2595afc6bd5ed35ffb445e9d06687))
- **kit:** `Tabs` fix multiple emitting of `activeItemIndexChange`
  ([#9934](https://github.com/taiga-family/taiga-ui/issues/9934))
  ([4d4dbf1](https://github.com/taiga-family/taiga-ui/commit/4d4dbf1dcac03ce283ecf7640e6eca88d53ad1f1))
- **kit:** `Tree` fix parallel lazy loading nodes ([#9939](https://github.com/taiga-family/taiga-ui/issues/9939))
  ([c2a88d4](https://github.com/taiga-family/taiga-ui/commit/c2a88d4a83abaac8e2279762631ee957d63654fc))
- **legacy:** `InputDateRange`/`InputDateTime` fix filler CD problems
  ([#9932](https://github.com/taiga-family/taiga-ui/issues/9932))
  ([026d13c](https://github.com/taiga-family/taiga-ui/commit/026d13c3ce2d28d62799cd77476fec1ea5a6a813))
- **legacy:** `InputNumber` fix support of dynamic postfix
  ([#9899](https://github.com/taiga-family/taiga-ui/issues/9899))
  ([fefdcff](https://github.com/taiga-family/taiga-ui/commit/fefdcff14f5579727ae3aeb24400f728b25029af))
- **legacy:** `MultiSelect` fix pristine and updateOn: blur issues
  ([#9900](https://github.com/taiga-family/taiga-ui/issues/9900))
  ([d70edfb](https://github.com/taiga-family/taiga-ui/commit/d70edfbb350cb2b191a78cd2955a847402bdc67d))

### 🚀 Features

- **layout:** `Form` add new component ([#9933](https://github.com/taiga-family/taiga-ui/issues/9933))
  ([52ab367](https://github.com/taiga-family/taiga-ui/commit/52ab3677ba7bc2dc8f84ac17d48c7e38586e6ad2))
- **legacy:** `MultiSelect` allow checkbox on the right side
  ([#9910](https://github.com/taiga-family/taiga-ui/issues/9910))
  ([8aa063b](https://github.com/taiga-family/taiga-ui/commit/8aa063baafc1c91e4d937c2b3321d9d94ce46a61))
- **legacy:** `InputTime` add `itemsHidden` property ([#9908](https://github.com/taiga-family/taiga-ui/issues/9908))
  ([b3db7bc](https://github.com/taiga-family/taiga-ui/commit/b3db7bcf8bbefef7034cd7f11556588d563c31e6))
- **legacy:** `InputTag` limit last tag width to 80% to avoid wrapping
  ([#9886](https://github.com/taiga-family/taiga-ui/issues/9886))
  ([54f5c65](https://github.com/taiga-family/taiga-ui/commit/54f5c65eed218de02020ed16f16cc343293684e0))

## [4.17.0](https://github.com/taiga-family/taiga-ui/compare/v4.16.0...v4.17.0) (2024-11-27)

### 🐞 Bug Fixes

- **addon-mobile:** fix font of large buttons on mobile ([#9816](https://github.com/taiga-family/taiga-ui/issues/9816))
  ([b45de14](https://github.com/taiga-family/taiga-ui/commit/b45de144503f8a60d4c6c81581966972e5a0dc49))
- **cdk:** fix Angular v19 `allowSignalWrites` warning ([#9810](https://github.com/taiga-family/taiga-ui/issues/9810))
  ([8b6b78a](https://github.com/taiga-family/taiga-ui/commit/8b6b78a3a01da05786d960c353cd3e7684164087))
- **layout:** `Navigation` fix `Aside` width according to spec
  ([#9815](https://github.com/taiga-family/taiga-ui/issues/9815))
  ([b92202e](https://github.com/taiga-family/taiga-ui/commit/b92202efe6bb0daf2647468bbad97a110e56f4ab))
- **legacy:** `InputDateTime` validators not triggered when value change
  ([#9838](https://github.com/taiga-family/taiga-ui/issues/9838))
  ([a515c2c](https://github.com/taiga-family/taiga-ui/commit/a515c2c55f328f10742ecaba67bd07660958fcbe))
- **legacy:** add `styles` entrypoint to `exports` of `package.json`
  ([#9813](https://github.com/taiga-family/taiga-ui/issues/9813))
  ([eee448d](https://github.com/taiga-family/taiga-ui/commit/eee448d02dc4fc971bfbdde3cb6459320ddf9ea1))

## [4.16.0](https://github.com/taiga-family/taiga-ui/compare/v4.15.0...v4.16.0) (2024-11-20)

### 🚀 Features

- **i18n:** add greek language ([#9762](https://github.com/taiga-family/taiga-ui/issues/9762))
  ([f81c996](https://github.com/taiga-family/taiga-ui/commit/f81c996718a6a2c908911607a08cc2a11829c571))

### 🐞 Bug Fixes

- **addon-mobile:** `DropdownMobile` make compatible with `DropdownHover`
  ([#9736](https://github.com/taiga-family/taiga-ui/issues/9736))
  ([b57149a](https://github.com/taiga-family/taiga-ui/commit/b57149aa7a36d69c8dbe446d0a64224be2107f59))
- **cdk:** `FocusTrap` fix race condition problems ([#9759](https://github.com/taiga-family/taiga-ui/issues/9759))
  ([d84b437](https://github.com/taiga-family/taiga-ui/commit/d84b437a518fe3b1f29e78a1971acd68437a0b82))
- **core:** `Hint` fix custom bubble ([#9776](https://github.com/taiga-family/taiga-ui/issues/9776))
  ([ae83d2d](https://github.com/taiga-family/taiga-ui/commit/ae83d2d36b0d965431f183f6ce991edcd638f48f))
- **kit:** `Tiles` fix box shadow on after dragged ([#9733](https://github.com/taiga-family/taiga-ui/issues/9733))
  ([91af99f](https://github.com/taiga-family/taiga-ui/commit/91af99f655c966bb18bd6479c8167e1f1890584e))
- **kit:** `CalendarRange` fix presets filtration ([#9777](https://github.com/taiga-family/taiga-ui/issues/9777))
  ([bfeb254](https://github.com/taiga-family/taiga-ui/commit/bfeb25404fb4f8c9b65bb7d04b3a36bc45862f3c))

## [4.15.0](https://github.com/taiga-family/taiga-ui/compare/v4.14.0...v4.15.0) (2024-11-13)

### 🚀 Features

- **core:** add readable media aliases ([#9696](https://github.com/taiga-family/taiga-ui/issues/9696))
  ([41d89b3](https://github.com/taiga-family/taiga-ui/commit/41d89b3882e68de82079c1bda05b2072261300eb))
- **kit:** `Message` add component ([#9694](https://github.com/taiga-family/taiga-ui/issues/9694))
  ([0b08fb4](https://github.com/taiga-family/taiga-ui/commit/0b08fb4140b4bcaaf680230bca32f825cb4cf71f))
- **kit:** `ProgressBar` add `ProgressFixedGradient` directive
  ([#9648](https://github.com/taiga-family/taiga-ui/issues/9648))
  ([ca81b5c](https://github.com/taiga-family/taiga-ui/commit/ca81b5cb599a509ea106cf50993f253cfad508c7))
- **layout:** `AppBarBack` add ability to use custom appearance
  ([#9715](https://github.com/taiga-family/taiga-ui/issues/9715))
  ([1e0928d](https://github.com/taiga-family/taiga-ui/commit/1e0928db9678064edb887a01800a40bb6651598b))

### 🐞 Bug Fixes

- **addon-charts:** `LineChart` fix division by zero ([#9722](https://github.com/taiga-family/taiga-ui/issues/9722))
  ([c12a315](https://github.com/taiga-family/taiga-ui/commit/c12a315eefc768a26bae831323587555c9e3d5a7))
- **addon-mobile:** `PullToRefreshService` fix pulling stream by calling `TUI_PULL_TO_REFRESH_LOADED.next()` on `onPull`
  event ([#9716](https://github.com/taiga-family/taiga-ui/issues/9716))
  ([3b978be](https://github.com/taiga-family/taiga-ui/commit/3b978bef943d96d5f90ded1c49860ac388e89e12))
- **kit:** `CalendarRange` not switch month with selected value
  ([#9695](https://github.com/taiga-family/taiga-ui/issues/9695))
  ([0e5f250](https://github.com/taiga-family/taiga-ui/commit/0e5f250f75e13e003fc036a0aaa26e7c38ed0c64))
- **kit:** `TabsWithMore` should share `ActiveZone` for nested dropdowns inside more section
  ([#9714](https://github.com/taiga-family/taiga-ui/issues/9714))
  ([f7c8fd5](https://github.com/taiga-family/taiga-ui/commit/f7c8fd5fd699b821d18d6935db87bd8dd6f53d93))
- **layout:** `Navigation` fix various style issues ([#9723](https://github.com/taiga-family/taiga-ui/issues/9723))
  ([a8aaf04](https://github.com/taiga-family/taiga-ui/commit/a8aaf046472413fd4b9893d23aa76fc70d2c48bc))
- **layout:** `BlockStatus` remove margins for empty image
  ([#9741](https://github.com/taiga-family/taiga-ui/issues/9741))
  ([e86afea](https://github.com/taiga-family/taiga-ui/commit/e86afeabf143cb3aa918e20457783d74a3f8cc3d))
- **legacy:** `InputDateRange` double backspace to clear textfield
  ([#9707](https://github.com/taiga-family/taiga-ui/issues/9707))
  ([c80cadc](https://github.com/taiga-family/taiga-ui/commit/c80cadc72b7d1f5f248f9464e0784c440847403e))
- **legacy:** fix icons looking interactive in readonly textfields
  ([#9711](https://github.com/taiga-family/taiga-ui/issues/9711))
  ([85d6afd](https://github.com/taiga-family/taiga-ui/commit/85d6afdeba660f30db28ed66b6eadf9a193ba8b9))
- **layout** remove default styling from `a` tag in card component
  ([#9681](https://github.com/taiga-family/taiga-ui/issues/9681))
  ([1b6e32b](https://github.com/taiga-family/taiga-ui/commit/1b6e32b8c2c1a18986a1f47de999439cff10d09e))

## [4.14.0](https://github.com/taiga-family/taiga-ui/compare/v4.13.0...v4.14.0) (2024-11-05)

### 🚀 Features

- **core:** `Hint` support direction priority list ([#9669](https://github.com/taiga-family/taiga-ui/issues/9669))
  ([bbf13b5](https://github.com/taiga-family/taiga-ui/commit/bbf13b5747a141236c25a82d19403e32db18c61f))
- **kit:** `File` add `HintOverflow` for file name ([#9659](https://github.com/taiga-family/taiga-ui/issues/9659))
  ([b5062bc](https://github.com/taiga-family/taiga-ui/commit/b5062bce0e7a5d7db995393d6ce3ab1722a32e72))
- **layout:** `BlockStatus` add desktop "m" size ([#9651](https://github.com/taiga-family/taiga-ui/issues/9651))
  ([8cd3eb8](https://github.com/taiga-family/taiga-ui/commit/8cd3eb8780dac69d7d58902ad77b3c83b3e77a1a))

### 🐞 Bug Fixes

- **addon-mobile:** `ElasticStickyService` teardown observable zone fix
  ([#9657](https://github.com/taiga-family/taiga-ui/issues/9657))
  ([5908330](https://github.com/taiga-family/taiga-ui/commit/5908330f97cd6edeb4657ae7b2b561ccd2f9d12f))
- **kit:** `CalendarRange` switch months if any input updated, when date range selected
  ([#9665](https://github.com/taiga-family/taiga-ui/issues/9665))
  ([f43bc2b](https://github.com/taiga-family/taiga-ui/commit/f43bc2b7a185f20f309a0cfbcbdfa8d9184c2634))
- **kit:** `Files` fix link styles ([#9635](https://github.com/taiga-family/taiga-ui/issues/9635))
  ([6923102](https://github.com/taiga-family/taiga-ui/commit/6923102fa6b4ba3355b578e06a10ebc824937661))
- **kit:** `Stepper` fix flashing styles ([#9638](https://github.com/taiga-family/taiga-ui/issues/9638))
  ([059c1de](https://github.com/taiga-family/taiga-ui/commit/059c1dea61464fca072faac90052d1050d923c5a))
- **kit:** `Switch` should have dark knob for the dark theme in web platform
  ([#9658](https://github.com/taiga-family/taiga-ui/issues/9658))
  ([1c9664a](https://github.com/taiga-family/taiga-ui/commit/1c9664a46da2278cd93d7a3a7cfe3ae9f07a2411))
- **legacy:** `InputDate` incorrect value after backspace
  ([#9650](https://github.com/taiga-family/taiga-ui/issues/9650))
  ([6a10460](https://github.com/taiga-family/taiga-ui/commit/6a1046031cffa605c66c27ff0fbe9d2835c1a437))
- **legacy:** `InputPhone` fix format paste if value has space after plus sign
  ([#9634](https://github.com/taiga-family/taiga-ui/issues/9634))
  ([2b54390](https://github.com/taiga-family/taiga-ui/commit/2b543906f2ebf59a03bd2c141a4a110ded1e7b59))
- **legacy:** `InputTime`/`InputDateTime` should switch `inputMode` for time modes with AM / PM
  ([#9643](https://github.com/taiga-family/taiga-ui/issues/9643))
  ([ee53428](https://github.com/taiga-family/taiga-ui/commit/ee534287ab22af645adadaedb924fa881f06689b))

## [4.13.0](https://github.com/taiga-family/taiga-ui/compare/v4.12.0...v4.13.0) (2024-10-28)

### 🐞 Bug Fixes

- **addon-commerce:** `ThumbnailCard` fix border-radius with blur effect
  ([#9604](https://github.com/taiga-family/taiga-ui/issues/9604))
  ([b25cbd5](https://github.com/taiga-family/taiga-ui/commit/b25cbd5fdaa66effdc2114bc23a2248da3d0c0a5))
- **core:** `DropdownOpen` fix initial open state ([#9581](https://github.com/taiga-family/taiga-ui/issues/9581))
  ([6b6863e](https://github.com/taiga-family/taiga-ui/commit/6b6863e9c97781fa83db5644ced097883faa0244))
- **core:** `Notification` remove flex layout ([#9580](https://github.com/taiga-family/taiga-ui/issues/9580))
  ([b4f4f32](https://github.com/taiga-family/taiga-ui/commit/b4f4f32b43e78a47aa66cdaa6ed411c5ccb02f71))
- **kit:** `Badge` fix font size on desktop ([#9593](https://github.com/taiga-family/taiga-ui/issues/9593))
  ([9828c85](https://github.com/taiga-family/taiga-ui/commit/9828c8528566d59d9603fe162590cd9f6697d9fd))
- **kit:** `InputPhoneInternational` fix dropdown issues ([#9569](https://github.com/taiga-family/taiga-ui/issues/9569))
  ([e996d18](https://github.com/taiga-family/taiga-ui/commit/e996d189546c568f9ee0394f813721def2739e2e))
- **layout:** `Navigation` fix drawer positioning ([#9594](https://github.com/taiga-family/taiga-ui/issues/9594))
  ([d0560c8](https://github.com/taiga-family/taiga-ui/commit/d0560c89091ab6475a8e9960611c15863d98ea31))

### 🚀 Features

- **core:** `Popup` add service for arbitrary portal items
  ([#9605](https://github.com/taiga-family/taiga-ui/issues/9605))
  ([6ab1756](https://github.com/taiga-family/taiga-ui/commit/6ab17567882ec42f9e8396fe7e9556c2388c2c1a))
- **kit:** `Drawer` add new component ([#9614](https://github.com/taiga-family/taiga-ui/issues/9614))
  ([5b43400](https://github.com/taiga-family/taiga-ui/commit/5b43400212f7dba94f1350cd27a6003f91d677c0))
- **kit:** `Tooltip` add DI options ([#9571](https://github.com/taiga-family/taiga-ui/issues/9571))
  ([e2f17c4](https://github.com/taiga-family/taiga-ui/commit/e2f17c40c8e36d44f99fb790d0df6376f7f7c9c5))
- **kit:** `InputPhoneInternational` add separator customization
  ([#9601](https://github.com/taiga-family/taiga-ui/issues/9601))
  ([7939bc5](https://github.com/taiga-family/taiga-ui/commit/7939bc5aa3e015dcef81a5f7c93386764886f860))
- **legacy:** `InputTime`/`InputDateTime` add AM/PM support
  ([#9595](https://github.com/taiga-family/taiga-ui/issues/9595))
  ([0f67a78](https://github.com/taiga-family/taiga-ui/commit/0f67a78475ef771ac95d03b5abcff568b299d5eb))

## [4.12.0](https://github.com/taiga-family/taiga-ui/compare/v4.11.0...v4.12.0) (2024-10-21)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` safari autofill focus
  ([#9520](https://github.com/taiga-family/taiga-ui/issues/9520))
  ([7858373](https://github.com/taiga-family/taiga-ui/commit/78583732bc2c7a6fe3965ec9d0a51b677a31b634))
- **cdk:** `Control` fix initial status ([#9539](https://github.com/taiga-family/taiga-ui/issues/9539))
  ([cb5f29a](https://github.com/taiga-family/taiga-ui/commit/cb5f29af07040183809755769450519008e567ae))
- **cdk:** support `:` inside path segment in url ([#9549](https://github.com/taiga-family/taiga-ui/issues/9549))
  ([8317b67](https://github.com/taiga-family/taiga-ui/commit/8317b67ea8e5fc89b4326f4e85661fbaec6c5ae1))
- **core:** fix `floating` appearance not reacting to the theme
  ([#9504](https://github.com/taiga-family/taiga-ui/issues/9504))
  ([847305a](https://github.com/taiga-family/taiga-ui/commit/847305aad700ac0a4691faf52a48245bc90b96fd))
- **kit:** `Skeleton` fix for `ProgressCircle` ([#9507](https://github.com/taiga-family/taiga-ui/issues/9507))
  ([2598626](https://github.com/taiga-family/taiga-ui/commit/25986264429ef19da78946823cc062b86f5e77df))
- **legacy:** `InputNumber` fix hydration ([#9434](https://github.com/taiga-family/taiga-ui/issues/9434))
  ([e0aac04](https://github.com/taiga-family/taiga-ui/commit/e0aac049cbbb931e60278c21c168cbf1e51693a7))
- **legacy:** `InputTime` has broken support of native date picker
  ([#9540](https://github.com/taiga-family/taiga-ui/issues/9540))
  ([049b289](https://github.com/taiga-family/taiga-ui/commit/049b2898f68dbf34b00aac63ec75ad57dc06b3b6))

### 🚀 Features

- **addon-mobile:** `ResponsiveDialog` add new service and refactor `SheetDialog` to new spec
  ([#9459](https://github.com/taiga-family/taiga-ui/issues/9459))
  ([10198a1](https://github.com/taiga-family/taiga-ui/commit/10198a1e32c14576d03fdcb8cfe2753e8136096a))
- **core:** `Hint` add mobile behavior ([#9547](https://github.com/taiga-family/taiga-ui/issues/9547))
  ([e650f38](https://github.com/taiga-family/taiga-ui/commit/e650f3856b62eb4b026c0f635f565134cadf3f08))
- **core:** add `tuiDialog` typed factory util ([#9446](https://github.com/taiga-family/taiga-ui/issues/9446))
  ([f507d2e](https://github.com/taiga-family/taiga-ui/commit/f507d2e7116ed67ac0485bdd477e8dfe559fa384))
- **core:** add new appearances ([#9526](https://github.com/taiga-family/taiga-ui/issues/9526))
  ([c3cd8f2](https://github.com/taiga-family/taiga-ui/commit/c3cd8f260d1be566ac7822a9c8a7000432ba71f3))
- **core:** improve `a11y` for textfield ([#9449](https://github.com/taiga-family/taiga-ui/issues/9449))
  ([19fbbe6](https://github.com/taiga-family/taiga-ui/commit/19fbbe646688671c4c0a232cf5d9c7d9bb5b12a2))

## [4.11.0](https://github.com/taiga-family/taiga-ui/compare/v4.8.1...v4.11.0) (2024-10-14)

### 🐞 Bug Fixes

- **addon-doc:** add legacy package as peer dependency ([#9367](https://github.com/taiga-family/taiga-ui/issues/9367))
  ([069b680](https://github.com/taiga-family/taiga-ui/commit/069b680507605d7fbf08c052d94f54153f6194ea))
- **addon-doc:** glitch width content between value from DOM and sandbox width from url
  ([#9341](https://github.com/taiga-family/taiga-ui/issues/9341))
  ([b5c4156](https://github.com/taiga-family/taiga-ui/commit/b5c4156ab7277865b6ab28c37e0e146875a4acc5))
- **addon-mobile:** `InputDateRange` throws error on single date selection
  ([#9411](https://github.com/taiga-family/taiga-ui/issues/9411))
  ([93c08d4](https://github.com/taiga-family/taiga-ui/commit/93c08d483c5dff47258188176e0865945355f1ce))
- **addon-table:** `Tr`, `ThGroup` fix hydration issues ([#9460](https://github.com/taiga-family/taiga-ui/issues/9460))
  ([c5fd3f9](https://github.com/taiga-family/taiga-ui/commit/c5fd3f9b0d21fab9c37fcbbc1769842573dfa118))
- **addon-table:** drop legacy package dependency ([#9373](https://github.com/taiga-family/taiga-ui/issues/9373))
  ([1171fbc](https://github.com/taiga-family/taiga-ui/commit/1171fbc3807ece6ec0b5baefa57b3535ebed2b9e))
- **addon-table:** fix hydration error while configuring table
  ([#9374](https://github.com/taiga-family/taiga-ui/issues/9374))
  ([7100f73](https://github.com/taiga-family/taiga-ui/commit/7100f730b34b71d4ffdef0c858c07112e6cb18a2))
- **core:** `FallbackSrc` support empty avatar src ([#9454](https://github.com/taiga-family/taiga-ui/issues/9454))
  ([8a52bbc](https://github.com/taiga-family/taiga-ui/commit/8a52bbc88b5a6f1c545d0fa472a092db0fe406dd))
- **core:** `tuiIconsProvider` support empty icon value ([#9408](https://github.com/taiga-family/taiga-ui/issues/9408))
  ([d0577d6](https://github.com/taiga-family/taiga-ui/commit/d0577d6f34da51b478a101c40cc5a155c2ac9487))
- **kit:** `Accordion` fix hydration ([#9453](https://github.com/taiga-family/taiga-ui/issues/9453))
  ([e22d2ba](https://github.com/taiga-family/taiga-ui/commit/e22d2baf1649564fa6276701be5d3fbc63ed2383))
- **legacy:** `InputDateTime` fix native option for empty value
  ([#9464](https://github.com/taiga-family/taiga-ui/issues/9464))
  ([b36e9dc](https://github.com/taiga-family/taiga-ui/commit/b36e9dc9e3e16bb3364188c2678c3ee1c8dca7d8))
- **legacy:** `Select` fix hydration ([#9433](https://github.com/taiga-family/taiga-ui/issues/9433))
  ([7f597a6](https://github.com/taiga-family/taiga-ui/commit/7f597a68d404d490c91dc7a0e50adbfa6c8fd56f))

### 🚀 Features

- **addon-doc:** allow adding extra tabs with DI ([#9381](https://github.com/taiga-family/taiga-ui/issues/9381))
  ([421a92e](https://github.com/taiga-family/taiga-ui/commit/421a92e274b6d531aa67d8b2a5177fca75423e6e))
- **cdk:** `RepeatTimes` add new pipe ([#9262](https://github.com/taiga-family/taiga-ui/issues/9262))
  ([712c5b3](https://github.com/taiga-family/taiga-ui/commit/712c5b3e31d65874abeb13e57a2a104ceca00b00))
- **core:** add animation params ([#9312](https://github.com/taiga-family/taiga-ui/issues/9312))
  ([f3f104a](https://github.com/taiga-family/taiga-ui/commit/f3f104a4a570a200cf79df42dc77451558c8de13))
- **layout:** `Navigation` allow manual control of `AsideGroup`
  ([#9412](https://github.com/taiga-family/taiga-ui/issues/9412))
  ([b7f75d9](https://github.com/taiga-family/taiga-ui/commit/b7f75d9344ca7c8ebdb12c118c0acfb1300fff00))
- **table-addon:** `Th` add `requiredSort` option ([#9036](https://github.com/taiga-family/taiga-ui/issues/9036))
  ([38c5b20](https://github.com/taiga-family/taiga-ui/commit/38c5b20c6e511c6be2ac8c89abcb317c1c182531))

## [4.10.0](https://github.com/taiga-family/taiga-ui/compare/v4.8.1...v4.10.0) (2024-10-08)

### 🐞 Bug Fixes

- **addon-doc:** add `legacy` package as peer dependency ([#9367](https://github.com/taiga-family/taiga-ui/issues/9367))
  ([069b680](https://github.com/taiga-family/taiga-ui/commit/069b680507605d7fbf08c052d94f54153f6194ea))
- **addon-table:** drop legacy package dependency ([#9373](https://github.com/taiga-family/taiga-ui/issues/9373))
  ([1171fbc](https://github.com/taiga-family/taiga-ui/commit/1171fbc3807ece6ec0b5baefa57b3535ebed2b9e))
- **addon-table:** hydration error while configuring table
  ([#9374](https://github.com/taiga-family/taiga-ui/issues/9374))
  ([7100f73](https://github.com/taiga-family/taiga-ui/commit/7100f730b34b71d4ffdef0c858c07112e6cb18a2))
- **cdk:** `Control` react to `markAsTouched` on Angular 18+
  ([#9330](https://github.com/taiga-family/taiga-ui/issues/9330))
  ([1b732e8](https://github.com/taiga-family/taiga-ui/commit/1b732e8d63473532025e0ca70289865e92a85536))
- **core:** `Hint` fix change detection when changing content programmatically
  ([#9291](https://github.com/taiga-family/taiga-ui/issues/9291))
  ([57f80ed](https://github.com/taiga-family/taiga-ui/commit/57f80edb688d12e0fc144dc5a698a8b55e901a8b))
- **core:** `Textfield` with initial value with `filler` ([#9375](https://github.com/taiga-family/taiga-ui/issues/9375))
  ([8217c90](https://github.com/taiga-family/taiga-ui/commit/8217c9030781b30ae6102f57dc4d13f64199f6c1))
- **core:** `DropdownContext` fix opening after single touch on iOS
  ([#9287](https://github.com/taiga-family/taiga-ui/issues/9287))
  ([8a5ff74](https://github.com/taiga-family/taiga-ui/commit/8a5ff7446ddf2330b5ae9750af3aaaccd9af96c4))
- **core:** `Dropdown` fix overriding default options ([#9348](https://github.com/taiga-family/taiga-ui/issues/9348))
  ([db84c4c](https://github.com/taiga-family/taiga-ui/commit/db84c4c9c5e782e4f6280e347a002987f6fca7e1))
- **kit:** `Chip` size ([#9169](https://github.com/taiga-family/taiga-ui/issues/9169))
  ([a92153a](https://github.com/taiga-family/taiga-ui/commit/a92153ae08ae17dcf93edfd06d23ba021bdc47ee))
- **layout:** `Header` fix subtitile padding on mobile ([#9282](https://github.com/taiga-family/taiga-ui/issues/9282))
  ([faeca9e](https://github.com/taiga-family/taiga-ui/commit/faeca9e9f506c78e63581a9564ea49be55c2aa16))
- **legacy:** `InputTag` fix pasting multiple invalid tags
  ([#9340](https://github.com/taiga-family/taiga-ui/issues/9340))
  ([8b8161d](https://github.com/taiga-family/taiga-ui/commit/8b8161d8fb36b08830b6dc7db2aa9ef3f2c2d2cf))
- **legacy:** `Multiselect` do not clear input on separator keydown, fix pasting
  ([#9345](https://github.com/taiga-family/taiga-ui/issues/9345))
  ([56d4a18](https://github.com/taiga-family/taiga-ui/commit/56d4a18a38a9c9e19184c5ce7c14c150024397a1))

### 🚀 Features

- **addon-doc:** allow adding extra tabs with DI ([#9381](https://github.com/taiga-family/taiga-ui/issues/9381))
  ([421a92e](https://github.com/taiga-family/taiga-ui/commit/421a92e274b6d531aa67d8b2a5177fca75423e6e))
- **addon-table:** `Sortable` make dynamic ([#9384](https://github.com/taiga-family/taiga-ui/issues/9384))
  ([ea62a09](https://github.com/taiga-family/taiga-ui/commit/ea62a09e23c6279046406a820097aa5dad4b90a1))
- **core:** add `color-scheme` by default for `tuiTheme` ([#9315](https://github.com/taiga-family/taiga-ui/issues/9315))
  ([d3ce6b1](https://github.com/taiga-family/taiga-ui/commit/d3ce6b1c0ca3345c1407482a25cc088fded6c4e3))
- **core:** support using native scrollbar ([#9276](https://github.com/taiga-family/taiga-ui/issues/9276))
  ([d144675](https://github.com/taiga-family/taiga-ui/commit/d144675c6b7d8f0bf4e19f84ba4961c96f1acf3f))
- **i18n:** add Lithuanian ([#9307](https://github.com/taiga-family/taiga-ui/issues/9307))
  ([29fabea](https://github.com/taiga-family/taiga-ui/commit/29fabea9cc325534ebaf729f143d3835c3741c50))
- **kit:** `ActionBar` add `s` size and update according to spec
  ([#9310](https://github.com/taiga-family/taiga-ui/issues/9310))
  ([3cb028b](https://github.com/taiga-family/taiga-ui/commit/3cb028b2a1918af3e1288064522f1e1dcf000f53))
- **kit:** `Breadcrumbs` add `itemsLimit` option ([#9370](https://github.com/taiga-family/taiga-ui/issues/9370))
  ([b20f6bf](https://github.com/taiga-family/taiga-ui/commit/b20f6bf94fd2bae3e5be84aa126becaa73d8fe12))
- **kit:** `ItemsWithMore` add `side` option ([#9363](https://github.com/taiga-family/taiga-ui/issues/9363))
  ([47d7178](https://github.com/taiga-family/taiga-ui/commit/47d717827f05a682f5fa6ecd819be0dc26fc6c71))
- **kit:** `tuiValidationErrorsProvider` add util ([#9342](https://github.com/taiga-family/taiga-ui/issues/9342))
  ([b22e9c2](https://github.com/taiga-family/taiga-ui/commit/b22e9c2f0a4f54df75e277e2b7b9584f9a2ee62d))
- **kit:** `InputPhoneInternational` added search for countries
  ([#8546](https://github.com/taiga-family/taiga-ui/issues/8546))
  ([24572b1](https://github.com/taiga-family/taiga-ui/commit/24572b1cdc7e0bbd48b3bcbf7faf3960e80c4372))
- **legacy:** support fieldset disable ([#9376](https://github.com/taiga-family/taiga-ui/issues/9376))
  ([cb31858](https://github.com/taiga-family/taiga-ui/commit/cb3185874af2a0aeb7bc1db52dcf26d09dec71a4))

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
- **cdk:** `RepeatTimes` add new pipe ([#9262](https://github.com/taiga-family/taiga-ui/issues/9262))
  ([712c5b3](https://github.com/taiga-family/taiga-ui/commit/712c5b3e31d65874abeb13e57a2a104ceca00b00))
- **table-addon:** `Table` add `requireSort` option ([#9036](https://github.com/taiga-family/taiga-ui/issues/9036))
  ([38c5b20](https://github.com/taiga-family/taiga-ui/commit/38c5b20c6e511c6be2ac8c89abcb317c1c182531))

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix Safari autofill
  ([#9198](https://github.com/taiga-family/taiga-ui/issues/9198))
  ([1f5dfa5](https://github.com/taiga-family/taiga-ui/commit/1f5dfa57839157c7690e0ce1ad246d732aeaa106))
- **addon-doc:** provide languages icon ([#9236](https://github.com/taiga-family/taiga-ui/issues/9236))
  ([bc5caf7](https://github.com/taiga-family/taiga-ui/commit/bc5caf71856a1b10fbea957af40b1694c3426acd))
- **addon-mobile:** `MobileCalendar` fix `minLength` and `maxLength` properties
  ([#9118](https://github.com/taiga-family/taiga-ui/issues/9118))
  ([c84dd39](https://github.com/taiga-family/taiga-ui/commit/c84dd39af211b89fa0c27f5abf1864d5b772175a))
- **cdk:** support any query string inside URL ([#9254](https://github.com/taiga-family/taiga-ui/issues/9254))
  ([af4aa7e](https://github.com/taiga-family/taiga-ui/commit/af4aa7e3bb8a780f18b793ad5c4d8e258aec9129))
- **core:** `Scrollbar` fix scroll leaking to both directions
  ([#9217](https://github.com/taiga-family/taiga-ui/issues/9217))
  ([ff829fc](https://github.com/taiga-family/taiga-ui/commit/ff829fcdf68bf1461be5dbf18f0d0a8625a1a22d))
- **core:** `Textfield` fix change detection problems for `filler`
  ([#9243](https://github.com/taiga-family/taiga-ui/issues/9243))
  ([a45df07](https://github.com/taiga-family/taiga-ui/commit/a45df07ca6e8fae2bc28b2b0fb101e8cf9bec785))
- **core:** `DropdownOpen` close when host is hidden via CSS
  ([#9189](https://github.com/taiga-family/taiga-ui/issues/9189))
  ([3e991f9](https://github.com/taiga-family/taiga-ui/commit/3e991f91323b43664f5466b60e1a599a8bf6c81b))
- **kit:** `Chip` size ([#9169](https://github.com/taiga-family/taiga-ui/issues/9169))
  ([a92153a](https://github.com/taiga-family/taiga-ui/commit/a92153ae08ae17dcf93edfd06d23ba021bdc47ee))
- **kit:** `Radio`, `Checkbox`, `Switch` remove non-functioning `appearance` input
  ([#9221](https://github.com/taiga-family/taiga-ui/issues/9221))
  ([6dc4ce0](https://github.com/taiga-family/taiga-ui/commit/6dc4ce05f5b100ac5045de74097109ebcd6a7e47))
- **kit:** `ImgLazyLoading` fix compatibility with SSR ([#9184](https://github.com/taiga-family/taiga-ui/issues/9184))
  ([710166f](https://github.com/taiga-family/taiga-ui/commit/710166f199334b3f851e503ff765c48b29e67a5a))
- **legacy:** `Input` fix for `[(tuiDropdownOpen)]` ([#9214](https://github.com/taiga-family/taiga-ui/issues/9214))
  ([65981bc](https://github.com/taiga-family/taiga-ui/commit/65981bcaefcce811891887a697c496d53108fce2))

### [4.8.1](https://github.com/taiga-family/taiga-ui/compare/v4.8.0...v4.8.1) (2024-09-24)

### 🐞 Bug Fixes

- **addon-charts:** `LineChart` fix line thickness on 0 and max
  ([#9167](https://github.com/taiga-family/taiga-ui/issues/9167))
  ([c51f8ec](https://github.com/taiga-family/taiga-ui/commit/c51f8ecd8cfa4f0e9acef426aa7d17a4940f361c))
- **core:** `DropdownContext` fix for Shadow DOM ([#9171](https://github.com/taiga-family/taiga-ui/issues/9171))
  ([e76e27e](https://github.com/taiga-family/taiga-ui/commit/e76e27ebe0cde3f4993e381eb4600e4821702181))
- **kit:** `Password` fix not exporting options ([#9159](https://github.com/taiga-family/taiga-ui/issues/9159))
  ([688405e](https://github.com/taiga-family/taiga-ui/commit/688405eb375c095c699fc9b8dd82982879fe2e57))
- **legacy:** `MultiSelect` fix for long items overflowing
  ([#9160](https://github.com/taiga-family/taiga-ui/issues/9160))
  ([80fdfd0](https://github.com/taiga-family/taiga-ui/commit/80fdfd0a1bd28f34d86b837c1f33c67ec9d7d139))

## [4.8.0](https://github.com/taiga-family/taiga-ui/compare/v4.7.0...v4.8.0) (2024-09-24)

### 🚀 Features

- **addon-doc:** add ability to disable default search bar
  ([#9099](https://github.com/taiga-family/taiga-ui/issues/9099))
  ([90cc083](https://github.com/taiga-family/taiga-ui/commit/90cc083677a3f117f41cbce3d91c16da4977ad9d))
- **addon-doc:** full prerender pages for SSR and improve UX
  ([#9073](https://github.com/taiga-family/taiga-ui/issues/9073))
  ([d2fa1ac](https://github.com/taiga-family/taiga-ui/commit/d2fa1ac5d505e8beb0417b039a8ae2a53905d855))
- **cdk:** `AutoFocus` support custom query selector ([#9062](https://github.com/taiga-family/taiga-ui/issues/9062))
  ([ae149f5](https://github.com/taiga-family/taiga-ui/commit/ae149f50c9e1777a6028de1859a5470d6fca9fd0))
- **kit:** `Like` add new component ([#8989](https://github.com/taiga-family/taiga-ui/issues/8989))
  ([0814ae8](https://github.com/taiga-family/taiga-ui/commit/0814ae876168a2dfa05fd52dfb9d1d7fd141a6b1))
- **kit:** `Highlight` add an options token for customizing
  ([#8812](https://github.com/taiga-family/taiga-ui/issues/8812))
  ([21a80c7](https://github.com/taiga-family/taiga-ui/commit/21a80c73ad750c6c82196405a047c2888833c4ce))
- **kit:** `ImageLoading` improve IDEA auto import ([#9090](https://github.com/taiga-family/taiga-ui/issues/9090))
  ([f45c899](https://github.com/taiga-family/taiga-ui/commit/f45c899b5f2d1f8b36b76b1aba1796e2bbbffb85))
- **layout:** `AppBar` add auto size directive ([#9119](https://github.com/taiga-family/taiga-ui/issues/9119))
  ([d5628e7](https://github.com/taiga-family/taiga-ui/commit/d5628e71ecfa1f89c6c654f8a713da93ef169589))

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix for older Safari
  ([#9117](https://github.com/taiga-family/taiga-ui/issues/9117))
  ([29044f9](https://github.com/taiga-family/taiga-ui/commit/29044f92cfc80d3eda1a3520c06cc9a478131b77))
- **addon-mobile:** `AppBar` correct height on iOS/Android
  ([#9031](https://github.com/taiga-family/taiga-ui/issues/9031))
  ([a669fd6](https://github.com/taiga-family/taiga-ui/commit/a669fd6a7db19b764af0a2aaa729f71bbfb52ab1))
- **core:** `Appearance` remove initial transition ([#9059](https://github.com/taiga-family/taiga-ui/issues/9059))
  ([88a8f5b](https://github.com/taiga-family/taiga-ui/commit/88a8f5bd53acdeb8ab6a554c60d44f16ff2b4ed8))
- **core:** `Loader` fix leaving `ActiveZone` ([#9115](https://github.com/taiga-family/taiga-ui/issues/9115))
  ([d4099d2](https://github.com/taiga-family/taiga-ui/commit/d4099d24c2d36548114a3c6e581a12b1832dd3e8))
- **core:** do not override nested tui-icon styles ([#9065](https://github.com/taiga-family/taiga-ui/issues/9065))
  ([4e07f24](https://github.com/taiga-family/taiga-ui/commit/4e07f24bed4c1ed2a4c1d2b3409e69b4fdd6144d))
- **kit:** `CalendarRange` shows last available month when max and items set
  ([#9147](https://github.com/taiga-family/taiga-ui/issues/9147))
  ([14d644f](https://github.com/taiga-family/taiga-ui/commit/14d644f191ed9257a9b79d36ea865b271c792621))
- **kit:** `InputDateRange` fix dark mode issues and list item size
  ([#9098](https://github.com/taiga-family/taiga-ui/issues/9098))
  ([6820698](https://github.com/taiga-family/taiga-ui/commit/68206987de81810e8b4fa8239bc80e2f84b18ffe))
- **kit:** `LineClamp` do not override white-space for children
  ([#9025](https://github.com/taiga-family/taiga-ui/issues/9025))
  ([f77a783](https://github.com/taiga-family/taiga-ui/commit/f77a78356e31867f2a7c0169a0971e695dd8ab58))
- **kit:** `LineClamp` fix memory leak ([#9014](https://github.com/taiga-family/taiga-ui/issues/9014))
  ([93fb577](https://github.com/taiga-family/taiga-ui/commit/93fb577eebdc3c6b9e4f6fe08a022a66c6ddc031))
- **kit:** drop image skeleton when handle of lazy loading error
  ([#9032](https://github.com/taiga-family/taiga-ui/issues/9032))
  ([2af496b](https://github.com/taiga-family/taiga-ui/commit/2af496bda0b7a67bb3b14e382edbaba0785e0536))
- **layout:** `AppBar` use proper appearance for back button
  ([#9061](https://github.com/taiga-family/taiga-ui/issues/9061))
  ([6019863](https://github.com/taiga-family/taiga-ui/commit/601986355e64b21a232fe42a034be7810492b031))
- **layout:** `CardLarge` fix style leaking into `Badge` ([#9097](https://github.com/taiga-family/taiga-ui/issues/9097))
  ([83300f1](https://github.com/taiga-family/taiga-ui/commit/83300f1c9552310b8a3ddc142a09d16829d8eaa1))
- **layout:** `CardLarge` fix with headless `Cell` list ([#9114](https://github.com/taiga-family/taiga-ui/issues/9114))
  ([941c856](https://github.com/taiga-family/taiga-ui/commit/941c85601f59f838bdcf97876165afce37be2e8d))
- **legacy:** `MultiSelect` fix empty line when non-empty `placeholder` and `valueContent`
  ([#9123](https://github.com/taiga-family/taiga-ui/issues/9123))
  ([eda9293](https://github.com/taiga-family/taiga-ui/commit/eda9293cfd488b72e822b25799d1ce56d5454164))
- **legacy:** during serialization angular was unable to find an element in the DOM
  ([#9063](https://github.com/taiga-family/taiga-ui/issues/9063))
  ([7817c18](https://github.com/taiga-family/taiga-ui/commit/7817c18bf02dfd976d492ca94f29ace2ccdd521c))
- **legacy:** fix scroll jumping on readonly input focusing in safari
  ([#9088](https://github.com/taiga-family/taiga-ui/issues/9088))
  ([dbf2510](https://github.com/taiga-family/taiga-ui/commit/dbf251012f0e4f992efe02c60c10d7f2578c6f1b))
- **table:** `TableFilters` fix pipe types ([#9076](https://github.com/taiga-family/taiga-ui/issues/9076))
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

- **addon-mobile:** export styles ([#9007](https://github.com/taiga-family/taiga-ui/issues/9007))
  ([d9915bb](https://github.com/taiga-family/taiga-ui/commit/d9915bbe38d6aea9b998ff73a753ad2004363172))
- **core:** `Calendar` fix visual gaps in range ([#8961](https://github.com/taiga-family/taiga-ui/issues/8961))
  ([8ec81aa](https://github.com/taiga-family/taiga-ui/commit/8ec81aa86356af764ac881177c207abd4b71b925))
- **core:** `Dropdown` fix options leaking upwards ([#9051](https://github.com/taiga-family/taiga-ui/issues/9051))
  ([350ba52](https://github.com/taiga-family/taiga-ui/commit/350ba524cc5a15b970fcd1157f3553899050e7a2))
- **kit:** `Connected` work with `CardLarge` ([#9040](https://github.com/taiga-family/taiga-ui/issues/9040))
  ([71f699c](https://github.com/taiga-family/taiga-ui/commit/71f699cec9cda4ba0e4890f10620112e5a009320))
- **kit:** `FilterByInputPipe` add overload ([#8912](https://github.com/taiga-family/taiga-ui/issues/8912))
  ([6883ea6](https://github.com/taiga-family/taiga-ui/commit/6883ea63666157e4e1ca91850459419405398c60))
- **kit:** `Skeleton` block user selection ([#9001](https://github.com/taiga-family/taiga-ui/issues/9001))
  ([49b0e03](https://github.com/taiga-family/taiga-ui/commit/49b0e0375155b5cca4e29be78a8ff05f9b35f2ab))

## [4.6.0](https://github.com/taiga-family/taiga-ui/compare/v4.5.0...v4.6.0) (2024-09-10)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` fix autofill styles
  ([#8794](https://github.com/taiga-family/taiga-ui/issues/8794))
  ([de3a923](https://github.com/taiga-family/taiga-ui/commit/de3a9230508fccf9224023287ec35d3de07aabd8))
- **addon-mobile:** `Card` fix paddings on mobile devices
  ([#8949](https://github.com/taiga-family/taiga-ui/issues/8949))
  ([12ebe35](https://github.com/taiga-family/taiga-ui/commit/12ebe35a0e21805fa3e3d8e57251f9c8559b8285))
- **addon-table:** `TableDirective` Content Security Policy error v4
  ([#8872](https://github.com/taiga-family/taiga-ui/issues/8872))
  ([a7ae8f3](https://github.com/taiga-family/taiga-ui/commit/a7ae8f329e3439b9b0b98c8b06cc0fb489c64446))
- **cdk:** `NativeValidator` fix touched state ([#8818](https://github.com/taiga-family/taiga-ui/issues/8818))
  ([2a5e754](https://github.com/taiga-family/taiga-ui/commit/2a5e754856545b3f59b4aacfb9bce76ae09d7b79))
- **core:** `Textfield` fix expression change error ([#8809](https://github.com/taiga-family/taiga-ui/issues/8809))
  ([7206c29](https://github.com/taiga-family/taiga-ui/commit/7206c2920e145cf6fead63c420c1709dcd1c968d))
- **core:** `DataList` show empty content in correct detect changes cycle
  ([#8837](https://github.com/taiga-family/taiga-ui/issues/8837))
  ([f102ad3](https://github.com/taiga-family/taiga-ui/commit/f102ad3ab38547868821bd33ce5da7cbd7740cec))
- **kit:** `InputFiles` fix validity and drag states ([#8845](https://github.com/taiga-family/taiga-ui/issues/8845))
  ([a7f1332](https://github.com/taiga-family/taiga-ui/commit/a7f13325bbf247128758731de8778df6532836ac))
- **kit:** `InputTime` fix selection of the nearest value from items
  ([#8902](https://github.com/taiga-family/taiga-ui/issues/8902))
  ([0b3894c](https://github.com/taiga-family/taiga-ui/commit/0b3894c85730037c9ada32083fc038f0734e23aa))
- **kit:** `BadgedContent` icon is positioned incorrectly when it's shown with a delay
  ([#8932](https://github.com/taiga-family/taiga-ui/issues/8932))
  ([96c476b](https://github.com/taiga-family/taiga-ui/commit/96c476b9bcd21075083c3d48d0694ca0fae8f5e0))
- **kit:** `CalendarRange` click again on selected item does not switch to item date
  ([#8843](https://github.com/taiga-family/taiga-ui/issues/8843))
  ([4853671](https://github.com/taiga-family/taiga-ui/commit/4853671fb67d7e57002c4ddefc6ffb3cefaf90d0))
- **kit:** `InputInline` fix styles for browser spellcheck
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
- **addon-doc:** code glitch in SSR ([#8705](https://github.com/taiga-family/taiga-ui/issues/8705))
  ([59712a2](https://github.com/taiga-family/taiga-ui/commit/59712a2988a2c7db699d86c901e6b9f3ac48b6a9))
- **core:** `Dropdown` fix triggering change detection too frequently
  ([#8738](https://github.com/taiga-family/taiga-ui/issues/8738))
  ([8bdcb19](https://github.com/taiga-family/taiga-ui/commit/8bdcb190e1e445b4e6de06caa7c368341a2cf66d))
- **core:** `Icons` fix mask shorthand ([#8711](https://github.com/taiga-family/taiga-ui/issues/8711))
  ([a292756](https://github.com/taiga-family/taiga-ui/commit/a29275647565b0b2c37ac281f7c58f996d85c5ba))
- **core:** `Textfield` fix color of chevron in readonly ([#8754](https://github.com/taiga-family/taiga-ui/issues/8754))
  ([2e21615](https://github.com/taiga-family/taiga-ui/commit/2e21615e732112ea28fe2ab5f3c25d5c753c51bb))
- **kit:** `InputPhoneInternational` fix opening dropdown while readonly
  ([#8764](https://github.com/taiga-family/taiga-ui/issues/8764))
  ([fcca2fa](https://github.com/taiga-family/taiga-ui/commit/fcca2fa6815dfcde4a5f6f9eac66958fb3cc9af9))
- **kit:** `CalendarRange` shows end of range ([#8774](https://github.com/taiga-family/taiga-ui/issues/8774))
  ([6604fd6](https://github.com/taiga-family/taiga-ui/commit/6604fd68f5688450aa40778b0326434535fe3bf7))
- **kit:** `CalendarRange` fix switch to selected item ([#8784](https://github.com/taiga-family/taiga-ui/issues/8784))
  ([ad138ab](https://github.com/taiga-family/taiga-ui/commit/ad138abed3656a19e5ecb05576f76e3306855eff))
- **kit:** `Avatar` fix width for image ([#8723](https://github.com/taiga-family/taiga-ui/issues/8723))
  ([c9014a2](https://github.com/taiga-family/taiga-ui/commit/c9014a23e0ff2076b5dcbbfa2340428a89292e2f))
- **layout:** `Navigation` fix style specificity for `AsideItem`
  ([#8790](https://github.com/taiga-family/taiga-ui/issues/8790))
  ([77a1eea](https://github.com/taiga-family/taiga-ui/commit/77a1eea69fdc3d956215d28a721ea72e2d26d596))
- **legacy:** `InputDateRange` fix triggering cyclic change detection ticks
  ([#8706](https://github.com/taiga-family/taiga-ui/issues/8706))
  ([c7bc044](https://github.com/taiga-family/taiga-ui/commit/c7bc04403b7b379e184bad2fa978b62bcc9a500c))
- **legacy:** restore `autoColor` for `InputTag` and `MultiSelect`
  ([#8783](https://github.com/taiga-family/taiga-ui/issues/8783))
  ([e5477c4](https://github.com/taiga-family/taiga-ui/commit/e5477c401e5b3cb046c24fa2b64993917376c20f))
- **legacy:** fix placeholder when using autofill ([#8779](https://github.com/taiga-family/taiga-ui/issues/8779))
  ([464dee4](https://github.com/taiga-family/taiga-ui/commit/464dee4c6bdb5dc47f8a9b657d188788fd5e6531))

### 🚀 Features

- improve style for A11y ([#8408](https://github.com/taiga-family/taiga-ui/issues/8408))
  ([918e11f](https://github.com/taiga-family/taiga-ui/commit/918e11f0115a8fea8f6c9662a69ba40e2b60eb35))
- **addon-commerce:** `ThumbnailCard` add `<img>` support
  ([#8789](https://github.com/taiga-family/taiga-ui/issues/8789))
  ([9fdb499](https://github.com/taiga-family/taiga-ui/commit/9fdb499790e3a7bf16a94162d6e01d26c19e252e))
- **addon-doc:** improve ui for link to sample ([#8406](https://github.com/taiga-family/taiga-ui/issues/8406))
  ([e5beb47](https://github.com/taiga-family/taiga-ui/commit/e5beb47843a578b8232431d9246daafdb0591165))
- **cdk:** add `tuiInjectId` ([#8730](https://github.com/taiga-family/taiga-ui/issues/8730))
  ([6b3bbb0](https://github.com/taiga-family/taiga-ui/commit/6b3bbb09d6c9917776ceb5c83ffaedbbe2c82dc9))
- **core:** `Textfield` add `ViewContainerRef` ([#8781](https://github.com/taiga-family/taiga-ui/issues/8781))
  ([5fee17a](https://github.com/taiga-family/taiga-ui/commit/5fee17a23c7ed83d3e8ea6befc49e804b3fa16ad))
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
- **kit:** `Tiles` fix reorder issue ([#8663](https://github.com/taiga-family/taiga-ui/issues/8663))
  ([9ea0162](https://github.com/taiga-family/taiga-ui/commit/9ea0162c3a7371c50d390e9718b2a175ad30c001))
- **legacy:** `Textarea` use balance text-wrap in Safari ([#8666](https://github.com/taiga-family/taiga-ui/issues/8666))
  ([cbaac1b](https://github.com/taiga-family/taiga-ui/commit/cbaac1b1c87b884cb692f979b44094ebb583ef1a))

### 🚀 Features

- **core:** `TUI_DARK_MODE` add new token ([#8657](https://github.com/taiga-family/taiga-ui/issues/8657))
  ([f409942](https://github.com/taiga-family/taiga-ui/commit/f409942f3cb21fa8dc66fe59e4dcbe316fc045c9))
- **kit:** `CalendarRange` add `item` property for correctly switch value outside
  ([#8617](https://github.com/taiga-family/taiga-ui/issues/8617))
  ([39e3419](https://github.com/taiga-family/taiga-ui/commit/39e3419b1f03176770f49ebd03118a2c067546a1))
- **kit:** `IconBadge` add new directive ([#8667](https://github.com/taiga-family/taiga-ui/issues/8667))
  ([1d2c286](https://github.com/taiga-family/taiga-ui/commit/1d2c28614407307801fdb1e0c63b4896b86471d1))
- **layout:** `Search` add new component ([#8648](https://github.com/taiga-family/taiga-ui/issues/8648))
  ([8cb50c0](https://github.com/taiga-family/taiga-ui/commit/8cb50c024bbfeda2b691c170cecef80c9cc46e7d))

## [4.3.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.3.0) (2024-08-21)

### 🚀 Features

- **addon-mobile:** add ability to drop mobile calendar header
  ([#8265](https://github.com/taiga-family/taiga-ui/issues/8265))
  ([819b17b](https://github.com/taiga-family/taiga-ui/commit/819b17ba2bf87d6ff92be9bf2d3508ae9a25ae01))
- **kit:** `ButtonSelect` add new directive ([#8559](https://github.com/taiga-family/taiga-ui/issues/8559))
  ([6cba52c](https://github.com/taiga-family/taiga-ui/commit/6cba52c140bc182cb8014809116356fb49c3c6e2))

### 🐞 Bug Fixes

([9e6e865](https://github.com/taiga-family/taiga-ui/commit/9e6e865ec5c4a287dab14a46751fd53ff181a138))

- **addon-mobile:** `PullToRefresh` do not trigger pulled if dialog is inside
  ([#8597](https://github.com/taiga-family/taiga-ui/issues/8597))
  ([7474d6e](https://github.com/taiga-family/taiga-ui/commit/7474d6ea455fecf07a785a86cab2d61bd45f0d34))
- **core:** do not call icon resolver multiple time ([#8578](https://github.com/taiga-family/taiga-ui/issues/8578))
  ([6e5c9f4](https://github.com/taiga-family/taiga-ui/commit/6e5c9f4487d4f5a2633c13812c4ad4e2b221b5b3))
  ([02e1c73](https://github.com/taiga-family/taiga-ui/commit/02e1c738f626f36425de0efdf424a006911d3b10))
- **kit:** `InputPhoneInternational` fix size for `border-box`
  ([#8633](https://github.com/taiga-family/taiga-ui/issues/8633))
  ([1dec452](https://github.com/taiga-family/taiga-ui/commit/1dec4524c8db8a0290eb82f10c302cb79c5d86ec))
- **kit:** `InputPhoneInternational` improve tree-shakeability
  ([#8603](https://github.com/taiga-family/taiga-ui/issues/8603))
  ([abfba9e](https://github.com/taiga-family/taiga-ui/commit/abfba9e8ba64988b4676387b7bbed3e5b0da7f5b))
- **kit:** `Segmented` fix native reset form action ([#8605](https://github.com/taiga-family/taiga-ui/issues/8605))
  ([ec87062](https://github.com/taiga-family/taiga-ui/commit/ec87062e2414d03bc212fd76d268b7890a40c1f8))
- **kit:** `Segmented` fix subscription to control value changes
  ([#8574](https://github.com/taiga-family/taiga-ui/issues/8574))
  ([e6cf175](https://github.com/taiga-family/taiga-ui/commit/e6cf1759eb427c7f8b2ee1496f8fdfc3effe9ee4))
- **legacy:** display view/hide password button with `readOnly` property
  ([#8584](https://github.com/taiga-family/taiga-ui/issues/8584))
  ([15857bc](https://github.com/taiga-family/taiga-ui/commit/15857bc81f7088956127cd331afe2b65dc495d94))
- **legacy:** `InputNumber` prevent add/remove suffixes while readonly
  ([#8568](https://github.com/taiga-family/taiga-ui/issues/8568))
  ([7a58d78](https://github.com/taiga-family/taiga-ui/commit/7a58d7824a4fc72563558b3407889602b6714f89))
- **legacy:** set correct font size for small and medium sizes
  ([#8548](https://github.com/taiga-family/taiga-ui/issues/8548))
  ([8acfb39](https://github.com/taiga-family/taiga-ui/commit/8acfb394e899ffd69b4e666bca6742e44149830f))

## [4.2.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.1...v4.2.0) (2024-08-14)

### 🚀 Features

- **i18n:** add japanese ([#8420](https://github.com/taiga-family/taiga-ui/issues/8420))
  ([ef9f992](https://github.com/taiga-family/taiga-ui/commit/ef9f9929ccaa778811a2eda86803c35f726a1de2))
- **i18n:** improve literal string union ([#8516](https://github.com/taiga-family/taiga-ui/issues/8516))
  ([9bf0f8c](https://github.com/taiga-family/taiga-ui/commit/9bf0f8c39727cfccd481636433e44963b8b88331))

### 🐞 Bug Fixes

- **core:** ios menu is not triggered ([#8348](https://github.com/taiga-family/taiga-ui/issues/8348))
  ([8b00807](https://github.com/taiga-family/taiga-ui/commit/8b008072936d0c246a1eb6c7435360b39305bf8f))
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
- **kit:** `CalendarRange` prevent disabled date selection
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

- **cdk:** remove redundant assert log if hours are greater than 23
  ([#8448](https://github.com/taiga-family/taiga-ui/issues/8448))
  ([c3a7e49](https://github.com/taiga-family/taiga-ui/commit/c3a7e4923eb958154e90b6bef7bda582ba8427fd))
- **core:** `Root` fix background ([#8468](https://github.com/taiga-family/taiga-ui/issues/8468))
  ([bbbb82e](https://github.com/taiga-family/taiga-ui/commit/bbbb82ece14906531fc140a8063bf0fc0ba217de))
- **core:** add `type=button` to `textfield` for ignore submit event
  ([#8455](https://github.com/taiga-family/taiga-ui/issues/8455))
  ([4700e5d](https://github.com/taiga-family/taiga-ui/commit/4700e5d143f33ca5af175be40cffea3d55f8241d))

## [4.0.0](https://github.com/taiga-family/taiga-ui/compare/v4.0.0-rc.10...v4.0.0) (2024-08-09)

- Update to Angular 16 [#6966](https://github.com/taiga-family/taiga-ui/pull/6966).
- Update supported browser versions [#6818](https://github.com/taiga-family/taiga-ui/pull/6818).
- Rename **all** entities: drop `Module` / `Component` / `Directive` postfix.
- Use deep entrypoints in **all** imports paths inside packages for microfrontends tree-shaking support.
- **@taiga-ui/legacy** create new package ([#7501](https://github.com/taiga-family/taiga-ui/pull/7501)).
- **@taiga-ui/browserslist-config** create new package [#5344](https://github.com/taiga-family/taiga-ui/pull/5344).
- **@taiga-ui/core:**
  - `Textfield` add new component ([#6298](https://github.com/taiga-family/taiga-ui/pull/6298)).
  - `Icon` add new component ([#5872](https://github.com/taiga-family/taiga-ui/pull/5872)).
    ([#6053](https://github.com/taiga-family/taiga-ui/pull/6053))
  - `Icon` add new pipe [#7244](https://github.com/taiga-family/taiga-ui/pull/7244).
  - `Icons` add new directive
  - `Icons` new approach **based on mask** ([#7752](https://github.com/taiga-family/taiga-ui/pull/7752),
    [#7658](https://github.com/taiga-family/taiga-ui/pull/7658),
    [#7714](https://github.com/taiga-family/taiga-ui/pull/7714)).
  - `Scrollbar` add mode [#8246](https://github.com/taiga-family/taiga-ui/pull/8246).
  - `Notification` simplify to directive [#8168](https://github.com/taiga-family/taiga-ui/pull/8168).
  - `Notification` Add interactive mode [#6760](https://github.com/taiga-family/taiga-ui/pull/6760).
  - `HintOverflow` add new directive [#8111](https://github.com/taiga-family/taiga-ui/pull/8111).
  - `DropdownContext` implement for iOS [#7814](https://github.com/taiga-family/taiga-ui/pull/7814).
  - `Root` use `Platform` directive [#7931](https://github.com/taiga-family/taiga-ui/pull/7931).
  - `Tooltip` refactored from component to directive [#7810](https://github.com/taiga-family/taiga-ui/pull/7810).
  - `Dropdown` nested no longer needs manual active zone [#7744](https://github.com/taiga-family/taiga-ui/pull/7744).
  - `WithDataList` add host directive [#7693](https://github.com/taiga-family/taiga-ui/pull/7693).
  - `Appearance` switch to `data-mode` [#7651](https://github.com/taiga-family/taiga-ui/pull/7651).
  - `Maskito` instead `input[tuiMaskAccessor]` directive [#7646](https://github.com/taiga-family/taiga-ui/pull/7646).
  - `Alert`, `Dialog` no longer need module imports [#6670](https://github.com/taiga-family/taiga-ui/pull/6670).
  - `Loader` add new algorithm to calculate `stroke-width` [#6550](https://github.com/taiga-family/taiga-ui/pull/6550).
  - `Loader` new animation [#6538](https://github.com/taiga-family/taiga-ui/pull/6538).
  - Use `TUI_ANIMATIONS_SPEED` instead `TUI_ANIMATIONS_DURATION`
    [#6542](https://github.com/taiga-family/taiga-ui/pull/6542).
- **@taiga-ui/kit:**
  - `Radio`, `Checkbox`, `Switch` new components based on directives
    ([#5319](https://github.com/taiga-family/taiga-ui/pull/5319),
    [#6929](https://github.com/taiga-family/taiga-ui/pull/6929)).
  - `Sensitive` add new directive ([#5425](https://github.com/taiga-family/taiga-ui/pull/5425),
    [#6491](https://github.com/taiga-family/taiga-ui/pull/6491),
    [#6960](https://github.com/taiga-family/taiga-ui/pull/6960)).
  - `Skeleton` add new directive ([#6934](https://github.com/taiga-family/taiga-ui/pull/6934)).
  - `Segmented` add new component ([#6527](https://github.com/taiga-family/taiga-ui/pull/6527),
    [#7192](https://github.com/taiga-family/taiga-ui/pull/7192)).
  - `Tabs` refactor and drop `MobileTabs` in favor of `Segmented`
    ([#7047](https://github.com/taiga-family/taiga-ui/pull/7047)).
  - `Fade` add new directive ([#5169](https://github.com/taiga-family/taiga-ui/pull/5169)).
  - `Avatar` add colored icons mode ([#7806](https://github.com/taiga-family/taiga-ui/pull/7806)).
  - `Connected` add directive for `Cell` and `Stepper` ([#8025](https://github.com/taiga-family/taiga-ui/pull/8025)).
  - `InputPhoneInternational` switch to `@maskito/phone` ([#7580](https://github.com/taiga-family/taiga-ui/pull/7580)).
  - `FluidTypography` add new directive [#8316](https://github.com/taiga-family/taiga-ui/pull/8316).
  - `Progress` add options with DI [#8061](https://github.com/taiga-family/taiga-ui/pull/8061).
  - `Status` add new component [#8057](https://github.com/taiga-family/taiga-ui/pull/8057).
  - `Emails` add pipe [#7596](https://github.com/taiga-family/taiga-ui/pull/7596).
  - `Pulse` add new component [#7544](https://github.com/taiga-family/taiga-ui/pull/7544).
  - `Chevron` add new directive [#7153](https://github.com/taiga-family/taiga-ui/pull/7153).
  - `AvatarOutline` add new directive [#7087](https://github.com/taiga-family/taiga-ui/pull/7087).
  - `NumberFormat` allow dynamic changes [#6856](https://github.com/taiga-family/taiga-ui/pull/6856).
  - `Block` add new component [#6892](https://github.com/taiga-family/taiga-ui/pull/6892).
- **@taiga-ui/cdk:**
  - `Dialogs` refactor creation way [#6660](https://github.com/taiga-family/taiga-ui/pull/6660).
  - `Provide` add new util [#7168](https://github.com/taiga-family/taiga-ui/pull/7168).
  - `TakeUntilDestroyed` add helper [#7381](https://github.com/taiga-family/taiga-ui/pull/7381).
  - `NativeElement` add util [#7393](https://github.com/taiga-family/taiga-ui/pull/7393).
  - `ToArray` add util [#7489](https://github.com/taiga-family/taiga-ui/pull/7489).
  - `DirectiveBinding` / `DirectiveListener` add utils [#7611](https://github.com/taiga-family/taiga-ui/pull/7611).
  - `Control` add signal based abstraction [#7650](https://github.com/taiga-family/taiga-ui/pull/7650).
  - `ThemeColorService` add service [#8240](https://github.com/taiga-family/taiga-ui/pull/8240).
  - `Portal` refactor abstractions [#6692](https://github.com/taiga-family/taiga-ui/pull/6692).
  - Rename and remove some helper instances [#7065](https://github.com/taiga-family/taiga-ui/pull/7065).
  - Scroll controls visible only inside `Root` area [#6623](https://github.com/taiga-family/taiga-ui/pull/6623).
- **@taiga-ui/layout:**
  - `Title`, `BlockDetails`, `Comment` add new components ([#5743](https://github.com/taiga-family/taiga-ui/pull/5743),
    [#7010](https://github.com/taiga-family/taiga-ui/pull/7010)).
  - `CardMedium`, `CardLarge` add new components ([#7260](https://github.com/taiga-family/taiga-ui/pull/7260)).
  - `Cell` add new component ([#5460](https://github.com/taiga-family/taiga-ui/pull/5460),
    [#7235](https://github.com/taiga-family/taiga-ui/pull/7235)).
  - `Navigation` implement grid [#8377](https://github.com/taiga-family/taiga-ui/pull/8377).
  - `Navigation` simplify 2nd level aside [#8141](https://github.com/taiga-family/taiga-ui/pull/8141).
- **@taiga-ui/addon-commerce:**
  - `InputCard` migrate to new `Textfield` ([#7581](https://github.com/taiga-family/taiga-ui/pull/7581)).
- **@taiga-ui/addon-doc:**
  - `ThemeSwitcher` add new component [#7966](https://github.com/taiga-family/taiga-ui/pull/7966).
  - `Preview` lazy component support [#7048](https://github.com/taiga-family/taiga-ui/pull/7048).
  - Support target property for links [#6874](https://github.com/taiga-family/taiga-ui/pull/6874).
- **@taiga-ui/addon-mobile:**
  - `SwipeActions` add new component ([#6644](https://github.com/taiga-family/taiga-ui/pull/6644)).
  - `DropdownMobile` add new directive ([#7428](https://github.com/taiga-family/taiga-ui/pull/7428),
    [#8094](https://github.com/taiga-family/taiga-ui/pull/8094)).
- **@taiga-ui/addon-table:**
  - `Reorder` add possibility to transfer a template [#6967](https://github.com/taiga-family/taiga-ui/pull/6967).
  - `TableSort` support nullable values [#7888](https://github.com/taiga-family/taiga-ui/pull/7888).
- **@taiga-ui/i18n**:
  - `Hebrew` add support [#8242](https://github.com/taiga-family/taiga-ui/pull/8242).
  - `Belarusian` add support [#6421](https://github.com/taiga-family/taiga-ui/pull/6421).

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
