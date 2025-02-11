# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
- **core:** `Textfield` with `[content]` property has invalid behavior for `<input />`
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
