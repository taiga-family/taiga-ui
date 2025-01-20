# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.21.0](https://github.com/taiga-family/taiga-ui/compare/v4.20.0...v4.21.0) (2025-01-20)

### 🚀 Features

- **core:** new appearance `table` (compatible with new `Textfield`)
  ([#10179](https://github.com/taiga-family/taiga-ui/issues/10179))
  ([6cea767](https://github.com/taiga-family/taiga-ui/commit/6cea7678f5ca6a75e2fd641c54a9415ed86ee4d1))

### 🐞 Bug Fixes

- **addon-doc:** pin "ngx-highlightjs" peer dependency version
  ([#10186](https://github.com/taiga-family/taiga-ui/issues/10186))
  ([a66d891](https://github.com/taiga-family/taiga-ui/commit/a66d89148f7a6fdba62f23962aed9cbbbedd8f87))
- **addon-mobile:** `SwipeActions` fix actions in IOS safari
  ([#10163](https://github.com/taiga-family/taiga-ui/issues/10163))
  ([bd53957](https://github.com/taiga-family/taiga-ui/commit/bd539579e8274ca3046af52d5b4cc9365ad2eca6))
- **core:** correct reuse of viewport for hint position
  ([#10183](https://github.com/taiga-family/taiga-ui/issues/10183))
  ([0dc9b76](https://github.com/taiga-family/taiga-ui/commit/0dc9b76876c63a71d129ecb79f57d4d9e7290da1))
- **core:** fix tuiDialog typings for classes with constructor parameters
  ([#10193](https://github.com/taiga-family/taiga-ui/issues/10193))
  ([6568200](https://github.com/taiga-family/taiga-ui/commit/65682009a6f92d96b5d329bce6da75d0b30a6693))
- **core:** fix unknown selector warnings in Angular 17+
  ([#10162](https://github.com/taiga-family/taiga-ui/issues/10162))
  ([f7192b9](https://github.com/taiga-family/taiga-ui/commit/f7192b9621d8fcfd67ae2c36942727ba3e70a0d2))
- **experimental:** `Accordion` fix error with dynamic items
  ([#10182](https://github.com/taiga-family/taiga-ui/issues/10182))
  ([a4fe7b3](https://github.com/taiga-family/taiga-ui/commit/a4fe7b3058885bc75037951b82e7537bbd135a3d))
- **kit,legacy:** all textfield controls should handle initial `ngModel` phantom `null` value
  ([#10171](https://github.com/taiga-family/taiga-ui/issues/10171))
  ([b490860](https://github.com/taiga-family/taiga-ui/commit/b490860bb8ff14a2b6eba781eec1e70d892bad54))
- **kit:** `InputNumber` should handle initial `ngModel` phantom `null` value
  ([#10168](https://github.com/taiga-family/taiga-ui/issues/10168))
  ([f259826](https://github.com/taiga-family/taiga-ui/commit/f2598260085297f494bed5b115e0ccf9eec663d1))
- **kit:** new version of `InputNumber` should provide `TuiControl` for DI
  ([#10176](https://github.com/taiga-family/taiga-ui/issues/10176))
  ([be0c38c](https://github.com/taiga-family/taiga-ui/commit/be0c38c5cc39b2157cec45f12b5edec68f9c46f5))
- **layout:** get view only on demand in `tuiAsideItem`
  ([#10173](https://github.com/taiga-family/taiga-ui/issues/10173))
  ([96797d5](https://github.com/taiga-family/taiga-ui/commit/96797d54a2a0610f79a3a3251f53a3a55b8ed4b8))
- **layout:** update justify-content to place-content for improved main content
  ([#10191](https://github.com/taiga-family/taiga-ui/issues/10191))
  ([967ae88](https://github.com/taiga-family/taiga-ui/commit/967ae88d50ec3206cb6439001bcbfb79506cbeef))

## [4.20.0](https://github.com/taiga-family/taiga-ui/compare/v4.19.0...v4.20.0) (2025-01-13)

### 🐞 Bug Fixes

- **addon-commerce:** tuiAmount hiding negative sign when value is zero
  ([#10147](https://github.com/taiga-family/taiga-ui/issues/10147))
  ([9244f1a](https://github.com/taiga-family/taiga-ui/commit/9244f1a1f24cc28049e1b8ed0e7731e22ae8ebda))
- **cdk:** `TuiTime.shift` doesn't shift higher order units
  ([#10065](https://github.com/taiga-family/taiga-ui/issues/10065))
  ([5939585](https://github.com/taiga-family/taiga-ui/commit/5939585c90acdba148a57b15b86ab27c4ec9b8a6))
- **core:** `Group` fix overlayed border in collapsed mode
  ([#10094](https://github.com/taiga-family/taiga-ui/issues/10094))
  ([1b7628a](https://github.com/taiga-family/taiga-ui/commit/1b7628a26c733eae91dba96506bc9682eb96d035))
- **core:** `Textfield` with `[content]` property has invalid behavior for `<input />`
  ([#10066](https://github.com/taiga-family/taiga-ui/issues/10066))
  ([aa9ff64](https://github.com/taiga-family/taiga-ui/commit/aa9ff64bd66a726afc49e4da96a6f2a2d19bca3b))
- **kit:** `LineClamp` fix initial transition ([#10070](https://github.com/taiga-family/taiga-ui/issues/10070))
  ([14426cd](https://github.com/taiga-family/taiga-ui/commit/14426cddecc050b3a606ae9c9ba426da70444399))
- **kit:** fix change detection in `Radio`, `Checkbox` and `Switch`
  ([#10102](https://github.com/taiga-family/taiga-ui/issues/10102))
  ([824da0c](https://github.com/taiga-family/taiga-ui/commit/824da0c41154f868889865e4f05748d25263ca2d))
- **kit:** fix text overflow in Confirm component ([#10085](https://github.com/taiga-family/taiga-ui/issues/10085))
  ([166bc37](https://github.com/taiga-family/taiga-ui/commit/166bc37617d58cc26970528afb8e127cc99fe468))
- **layout:** `BlockStatus` fix image height ([#10121](https://github.com/taiga-family/taiga-ui/issues/10121))
  ([570f67c](https://github.com/taiga-family/taiga-ui/commit/570f67cc642694bdc59b4ff93246f920b6c61efe))
- **legacy:** `InputPhone` incorrectly parses paste of the shorten phone number
  ([#10063](https://github.com/taiga-family/taiga-ui/issues/10063))
  ([1df2480](https://github.com/taiga-family/taiga-ui/commit/1df2480178fde2f5c5769fed4d88a809bafd760e))
- **legacy:** `TuiMultiSelect` fix arrow ([#10050](https://github.com/taiga-family/taiga-ui/issues/10050))
  ([e96d4eb](https://github.com/taiga-family/taiga-ui/commit/e96d4eb76604f6dcfd96594778ee1b87109d9259))
- **legacy:** incorrect InputTag table appearance and PrimitiveTextfield placeholderRaisable calculation
  ([#10052](https://github.com/taiga-family/taiga-ui/issues/10052))
  ([416dd8b](https://github.com/taiga-family/taiga-ui/commit/416dd8bf28e20f7b8b600acfa771b5c1bef18308))
- **legacy:** use transformed value in `tui-input-date-range` for find active period
  ([#10135](https://github.com/taiga-family/taiga-ui/issues/10135))
  ([3b8651b](https://github.com/taiga-family/taiga-ui/commit/3b8651bca8083eb33fa4164c6df2c7b3bd254061))
- **legacy:** wrong prefix placement in table context ([#10045](https://github.com/taiga-family/taiga-ui/issues/10045))
  ([99cb0bc](https://github.com/taiga-family/taiga-ui/commit/99cb0bcd250d310e3612dc56b0f4b64d1738903c))

### 🚀 Features

- **core:** add `injector` to tuiDialog options ([#10056](https://github.com/taiga-family/taiga-ui/issues/10056))
  ([bcc02bc](https://github.com/taiga-family/taiga-ui/commit/bcc02bc88350be9ec7cbffe6a4baf1696b837493))
- **core:** added `tuiDropdownEnabled` to exposed inputs of `TuiWithDropdownOpen`
  ([#10101](https://github.com/taiga-family/taiga-ui/issues/10101))
  ([562bbc6](https://github.com/taiga-family/taiga-ui/commit/562bbc6accf83b375c5a18c7792de65572c0e987))
- **core:** disable dark theme for print mode ([#10110](https://github.com/taiga-family/taiga-ui/issues/10110))
  ([8c9c616](https://github.com/taiga-family/taiga-ui/commit/8c9c6168cf37842ce5fe62e0ab898f8df39cb168))
- **core:** enable TuiHint hover when TuiHintManual is null
  ([#9955](https://github.com/taiga-family/taiga-ui/issues/9955))
  ([e0e5861](https://github.com/taiga-family/taiga-ui/commit/e0e58614e7a8b6d16dd6abcbfee7ff8807ea023c))
- **experimental:** `Accordion` add new component ([#10103](https://github.com/taiga-family/taiga-ui/issues/10103))
  ([62109de](https://github.com/taiga-family/taiga-ui/commit/62109dec07637af61faa996629ffde155132e823))
- **experimental:** `Expand` add new component ([#10069](https://github.com/taiga-family/taiga-ui/issues/10069))
  ([272db9b](https://github.com/taiga-family/taiga-ui/commit/272db9b5f5ad753d441a3db2909e0340c40db81c))
- **experimental:** `Hint` add new component with updated styles
  ([#10051](https://github.com/taiga-family/taiga-ui/issues/10051))
  ([92e8b21](https://github.com/taiga-family/taiga-ui/commit/92e8b21213e08e22d8bc92d8b7bf6225fa09c651))
- **kit:** `InputPin` add new component ([#10084](https://github.com/taiga-family/taiga-ui/issues/10084))
  ([36b45fa](https://github.com/taiga-family/taiga-ui/commit/36b45fa55aa7eb22e8d5aff711c5fedef2c64029))
- **kit:** `Tooltip` add small size ([#10154](https://github.com/taiga-family/taiga-ui/issues/10154))
  ([32e78bf](https://github.com/taiga-family/taiga-ui/commit/32e78bfe4e90fdf2e74c7ce50e8a8d08018e5886))
- **kit:** introduce new version of `InputNumber` ([#10099](https://github.com/taiga-family/taiga-ui/issues/10099))
  ([a32d2a4](https://github.com/taiga-family/taiga-ui/commit/a32d2a4d88598dfd28bef3d838f0613cdc4f22f2))

## [4.19.0](https://github.com/taiga-family/taiga-ui/compare/v4.18.0...v4.19.0) (2024-12-23)

### 🐞 Bug Fixes

- **addon-mobile:** virtual-scroll flickers during scroll in zoneless mode
  ([#10023](https://github.com/taiga-family/taiga-ui/issues/10023))
  ([e3cfbc9](https://github.com/taiga-family/taiga-ui/commit/e3cfbc940e2cb0c196b551e39ff58a9ffa8ff1cb))
- **addon-table:** fix calculating start page ([#9980](https://github.com/taiga-family/taiga-ui/issues/9980))
  ([d26f32b](https://github.com/taiga-family/taiga-ui/commit/d26f32b11948a3060e7840a9844a6b97e8a58ef8))
- **cdk:** fix tuiFocusedIn error when focus events happened in reactive context
  ([#10020](https://github.com/taiga-family/taiga-ui/issues/10020))
  ([12e9a29](https://github.com/taiga-family/taiga-ui/commit/12e9a29436b309f5d7b2229249c1113b06a2ff3d))
- **core:** dialog has padding for close button event when not closeable
  ([#10012](https://github.com/taiga-family/taiga-ui/issues/10012))
  ([97d24ad](https://github.com/taiga-family/taiga-ui/commit/97d24ad3a7c74f7c0447804234badc46997aca34))
- **core:** dont allow to select disabled dates in calendar
  ([#10007](https://github.com/taiga-family/taiga-ui/issues/10007))
  ([b5d328c](https://github.com/taiga-family/taiga-ui/commit/b5d328cb41a0e8c663c5fe875ef2db9a8f929036))
- **core:** emit tuiDropdownOpenChange on distinct values
  ([#9962](https://github.com/taiga-family/taiga-ui/issues/9962))
  ([f8ea2f2](https://github.com/taiga-family/taiga-ui/commit/f8ea2f2d41351dae33362acee7dd12e99767eea2))
- **kit:** `Carousel` fix scrolling page on mobile devices
  ([#10009](https://github.com/taiga-family/taiga-ui/issues/10009))
  ([13dcf7c](https://github.com/taiga-family/taiga-ui/commit/13dcf7c8c92f7d1198325f79816823dd0ee7eea4))
- **kit:** `InputNumber` has rounding problems on blur with float large numbers
  ([#9974](https://github.com/taiga-family/taiga-ui/issues/9974))
  ([9ec1e7b](https://github.com/taiga-family/taiga-ui/commit/9ec1e7b27301594df2e7f3d86862a16dc3d9b691))
- **kit:** skeleton animation speed slow down after speed up `TUI_ANIMATION`
  ([#9984](https://github.com/taiga-family/taiga-ui/issues/9984))
  ([b8bb938](https://github.com/taiga-family/taiga-ui/commit/b8bb938ec1f9b47d8b9b9e3f9e2f12e04841da28))
- **kit:** strange behavior in Safari when working with tiles
  ([#9952](https://github.com/taiga-family/taiga-ui/issues/9952))
  ([80614b3](https://github.com/taiga-family/taiga-ui/commit/80614b310e626092e3b0e316713e1a595ab4a693))
- **legacy:** reset cached active period in `tui-input-date-range`
  ([#9946](https://github.com/taiga-family/taiga-ui/issues/9946))
  ([1144fae](https://github.com/taiga-family/taiga-ui/commit/1144fae8c7589118c7ebe62eded7a3a7e9f219fd))

### 🚀 Features

- **addon-commerce:** `InputCardGroup` add `inputs` option
  ([#10033](https://github.com/taiga-family/taiga-ui/issues/10033))
  ([5e20a26](https://github.com/taiga-family/taiga-ui/commit/5e20a2612839a5c7be2b49df26be6175bb22b431))
- **addon-commerce:** `ThumbnailCard` has new `xs` size
  ([fc1ec3e](https://github.com/taiga-family/taiga-ui/commit/fc1ec3eba8e1e4d2e944a43f59f39f14b7dca99e))
- **addon-commerce:** `ThumbnailCard` has new `xs` size ([#9969](https://github.com/taiga-family/taiga-ui/issues/9969))
  ([436e351](https://github.com/taiga-family/taiga-ui/commit/436e351a4c65d866db6b14056087256660222008))
- **addon-table:** allow resize more than 100% width of table
  ([#9961](https://github.com/taiga-family/taiga-ui/issues/9961))
  ([a16071a](https://github.com/taiga-family/taiga-ui/commit/a16071af434df266afd09b7bae4d5330c595b674))
- **experimental:** `InputPhoneInternational` refactor to new textfield approach
  ([#9976](https://github.com/taiga-family/taiga-ui/issues/9976))
  ([08f924d](https://github.com/taiga-family/taiga-ui/commit/08f924de9c3f756a72ce8cee0ac0f3072557b338))
- **kit:** safety change active index in stepper ([#10004](https://github.com/taiga-family/taiga-ui/issues/10004))
  ([286b6d2](https://github.com/taiga-family/taiga-ui/commit/286b6d2274b1adeaa467b4fa4401f32bd9d0a72a))
- **layout:** `Navigation` add `Subheader` component ([#10041](https://github.com/taiga-family/taiga-ui/issues/10041))
  ([7de5985](https://github.com/taiga-family/taiga-ui/commit/7de59857276cddbbb608343524932668b1a243f6))

## [4.18.0](https://github.com/taiga-family/taiga-ui/compare/v4.17.0...v4.18.0) (2024-12-10)

### 🐞 Bug Fixes

- **addon-table:** sort icons are reversed ([#9904](https://github.com/taiga-family/taiga-ui/issues/9904))
  ([a6c0a36](https://github.com/taiga-family/taiga-ui/commit/a6c0a3604df7ef63b361ed4b63cbe99305498195))
- **core:** `Dropdown` fix initial width ([#9867](https://github.com/taiga-family/taiga-ui/issues/9867))
  ([76d8d01](https://github.com/taiga-family/taiga-ui/commit/76d8d01006481564500ec1e1f328fe748b6d9879))
- **core:** `DropdownOpen` has CD problems after switching of `tuiDropdownEnabled` (`false`=>`true`)
  ([#9888](https://github.com/taiga-family/taiga-ui/issues/9888))
  ([4249cd9](https://github.com/taiga-family/taiga-ui/commit/4249cd926f73a3378c9d94ebd740723a6827dc6a))
- **core:** `Icon` fix for old safari ([#9917](https://github.com/taiga-family/taiga-ui/issues/9917))
  ([8c3a228](https://github.com/taiga-family/taiga-ui/commit/8c3a228152f5b74662c12bf115f9a3f44ae62d57))
- **core:** focus first element in data-list ([#9891](https://github.com/taiga-family/taiga-ui/issues/9891))
  ([ab7dfde](https://github.com/taiga-family/taiga-ui/commit/ab7dfde75788131943e68cbbcf84dc6f230c42a9))
- **core:** transform breaks fixed position in tiles ([#9905](https://github.com/taiga-family/taiga-ui/issues/9905))
  ([369d9a4](https://github.com/taiga-family/taiga-ui/commit/369d9a45489012dcca454992c3532459c106f991))
- **kit:** `Carousel` fix dragging in chrome ([#9864](https://github.com/taiga-family/taiga-ui/issues/9864))
  ([6b1f985](https://github.com/taiga-family/taiga-ui/commit/6b1f9855c16ac58b382769bab60bb3f1fcbc7ee0))
- **kit:** `InputInline` has broken scroll in Safari & Firefox
  ([#9818](https://github.com/taiga-family/taiga-ui/issues/9818))
  ([76634f1](https://github.com/taiga-family/taiga-ui/commit/76634f1d55bff5858d4139c9f21f020e504e42fc))
- **kit:** `Segmented` fix shadow clipping in Safari ([#9931](https://github.com/taiga-family/taiga-ui/issues/9931))
  ([c6c9c38](https://github.com/taiga-family/taiga-ui/commit/c6c9c3819ad2595afc6bd5ed35ffb445e9d06687))
- **kit:** `Tabs` fix multiple emitting of activeItemIndexChange
  ([#9934](https://github.com/taiga-family/taiga-ui/issues/9934))
  ([4d4dbf1](https://github.com/taiga-family/taiga-ui/commit/4d4dbf1dcac03ce283ecf7640e6eca88d53ad1f1))
- **kit:** fix parallel lazy loading tree nodes ([#9939](https://github.com/taiga-family/taiga-ui/issues/9939))
  ([c2a88d4](https://github.com/taiga-family/taiga-ui/commit/c2a88d4a83abaac8e2279762631ee957d63654fc))
- **kit:** removed redundant space ([#9916](https://github.com/taiga-family/taiga-ui/issues/9916))
  ([e10d0eb](https://github.com/taiga-family/taiga-ui/commit/e10d0ebd7cee8ce577afdc472ca2a51248363fc6))
- **legacy:** `InputDate{Range|Time}` + `input[tuiTextfieldLegacy]` + `tuiTextfieldFiller` has CD problems
  ([#9932](https://github.com/taiga-family/taiga-ui/issues/9932))
  ([026d13c](https://github.com/taiga-family/taiga-ui/commit/026d13c3ce2d28d62799cd77476fec1ea5a6a813))
- **legacy:** `InputNumber` has bad support of dynamic postfix
  ([#9899](https://github.com/taiga-family/taiga-ui/issues/9899))
  ([fefdcff](https://github.com/taiga-family/taiga-ui/commit/fefdcff14f5579727ae3aeb24400f728b25029af))
- **legacy:** `MultiSelect` fix pristine and updateOn: blur issues
  ([#9900](https://github.com/taiga-family/taiga-ui/issues/9900))
  ([d70edfb](https://github.com/taiga-family/taiga-ui/commit/d70edfbb350cb2b191a78cd2955a847402bdc67d))

### 🚀 Features

- **addon-doc:** limit select width ([#9880](https://github.com/taiga-family/taiga-ui/issues/9880))
  ([84fd6e4](https://github.com/taiga-family/taiga-ui/commit/84fd6e4bb73e99d808dcbc63e1bb4eafd32f5423))
- **layout:** `Form` add new component ([#9933](https://github.com/taiga-family/taiga-ui/issues/9933))
  ([52ab367](https://github.com/taiga-family/taiga-ui/commit/52ab3677ba7bc2dc8f84ac17d48c7e38586e6ad2))
- **legacy:** `MultiSelect` allow checkbox on the right side
  ([#9910](https://github.com/taiga-family/taiga-ui/issues/9910))
  ([8aa063b](https://github.com/taiga-family/taiga-ui/commit/8aa063baafc1c91e4d937c2b3321d9d94ce46a61))
- **legacy:** add `itemsHidden` prop to `tui-input-time` ([#9908](https://github.com/taiga-family/taiga-ui/issues/9908))
  ([b3db7bc](https://github.com/taiga-family/taiga-ui/commit/b3db7bcf8bbefef7034cd7f11556588d563c31e6))
- **legacy:** limit `tui-tag` width to `80%` to avoid wrapping in selects
  ([#9886](https://github.com/taiga-family/taiga-ui/issues/9886))
  ([54f5c65](https://github.com/taiga-family/taiga-ui/commit/54f5c65eed218de02020ed16f16cc343293684e0))

## [4.17.0](https://github.com/taiga-family/taiga-ui/compare/v4.16.0...v4.17.0) (2024-11-27)

### 🐞 Bug Fixes

- **addon-mobile:** update font of large buttons on mobile
  ([#9816](https://github.com/taiga-family/taiga-ui/issues/9816))
  ([b45de14](https://github.com/taiga-family/taiga-ui/commit/b45de144503f8a60d4c6c81581966972e5a0dc49))
- **cdk:** Angular v19 `allowSignalWrites` warning ([#9810](https://github.com/taiga-family/taiga-ui/issues/9810))
  ([8b6b78a](https://github.com/taiga-family/taiga-ui/commit/8b6b78a3a01da05786d960c353cd3e7684164087))
- **cdk:** missing migration schematic for `createStackingContext` mixin
  ([#9800](https://github.com/taiga-family/taiga-ui/issues/9800))
  ([e5aa261](https://github.com/taiga-family/taiga-ui/commit/e5aa261c5d3d90bb39cd4854369bd7ad22e05a46))
- **cdk:** missing migration schematic for mixins from `@taiga-ui/legacy/styles/taiga-ui-local`
  ([#9802](https://github.com/taiga-family/taiga-ui/issues/9802))
  ([ca9e2e0](https://github.com/taiga-family/taiga-ui/commit/ca9e2e093cf7cd4d54292facf701c394dc8f859e))
- **layout:** `Navigation` fix aside width according to spec
  ([#9815](https://github.com/taiga-family/taiga-ui/issues/9815))
  ([b92202e](https://github.com/taiga-family/taiga-ui/commit/b92202efe6bb0daf2647468bbad97a110e56f4ab))
- **legacy:** `InputDateTime` validators not triggered when value change
  ([d7291cd](https://github.com/taiga-family/taiga-ui/commit/d7291cda2bcc8381d90885997fc948706c018191))
- **legacy:** `InputDateTime` validators not triggered when value change
  ([#9838](https://github.com/taiga-family/taiga-ui/issues/9838))
  ([a515c2c](https://github.com/taiga-family/taiga-ui/commit/a515c2c55f328f10742ecaba67bd07660958fcbe))
- **legacy:** add `styles` entrypoint to `exports` of `package.json`
  ([#9813](https://github.com/taiga-family/taiga-ui/issues/9813))
  ([eee448d](https://github.com/taiga-family/taiga-ui/commit/eee448d02dc4fc971bfbdde3cb6459320ddf9ea1))

## [4.16.0](https://github.com/taiga-family/taiga-ui/compare/v4.15.0...v4.16.0) (2024-11-20)

### 🚀 Features

- **addon-doc:** use only one property on route for expose input prop value
  ([#9774](https://github.com/taiga-family/taiga-ui/issues/9774))
  ([8602e4e](https://github.com/taiga-family/taiga-ui/commit/8602e4e9b40bbb7ef5305430a13ecd71caf7b3ca))
- **i18n:** add greek language ([#9762](https://github.com/taiga-family/taiga-ui/issues/9762))
  ([f81c996](https://github.com/taiga-family/taiga-ui/commit/f81c996718a6a2c908911607a08cc2a11829c571))

### 🐞 Bug Fixes

- **addon-mobile:** `DropdownMobile` is not compatible with `DropdownHover`
  ([#9736](https://github.com/taiga-family/taiga-ui/issues/9736))
  ([b57149a](https://github.com/taiga-family/taiga-ui/commit/b57149aa7a36d69c8dbe446d0a64224be2107f59))
- **cdk:** `FocusTrap` has race condition problems ([#9759](https://github.com/taiga-family/taiga-ui/issues/9759))
  ([d84b437](https://github.com/taiga-family/taiga-ui/commit/d84b437a518fe3b1f29e78a1971acd68437a0b82))
- **core:** fix custom hint ([#9776](https://github.com/taiga-family/taiga-ui/issues/9776))
  ([ae83d2d](https://github.com/taiga-family/taiga-ui/commit/ae83d2d36b0d965431f183f6ce991edcd638f48f))
- **kit:** correctly loose box shadow on tile after dragged
  ([#9733](https://github.com/taiga-family/taiga-ui/issues/9733))
  ([91af99f](https://github.com/taiga-family/taiga-ui/commit/91af99f655c966bb18bd6479c8167e1f1890584e))
- **kit:** fix calendar range presets filtration ([#9777](https://github.com/taiga-family/taiga-ui/issues/9777))
  ([bfeb254](https://github.com/taiga-family/taiga-ui/commit/bfeb25404fb4f8c9b65bb7d04b3a36bc45862f3c))

## [4.15.0](https://github.com/taiga-family/taiga-ui/compare/v4.14.0...v4.15.0) (2024-11-13)

### 🚀 Features

- **core:** add readable media aliases ([#9696](https://github.com/taiga-family/taiga-ui/issues/9696))
  ([41d89b3](https://github.com/taiga-family/taiga-ui/commit/41d89b3882e68de82079c1bda05b2072261300eb))
- **kit:** `Message` add component
  ([5b03210](https://github.com/taiga-family/taiga-ui/commit/5b03210d7d9ec0790cd8cf8f27120d3cd9446cc3))
- **kit:** `Message` add component ([#9694](https://github.com/taiga-family/taiga-ui/issues/9694))
  ([0b08fb4](https://github.com/taiga-family/taiga-ui/commit/0b08fb4140b4bcaaf680230bca32f825cb4cf71f))
- **kit:** add `ProgressFixedGradient` directive for `ProgressBar`
  ([#9648](https://github.com/taiga-family/taiga-ui/issues/9648))
  ([ca81b5c](https://github.com/taiga-family/taiga-ui/commit/ca81b5cb599a509ea106cf50993f253cfad508c7))
- **layout:** `AppBarBack` add ability to use custom appearance
  ([#9715](https://github.com/taiga-family/taiga-ui/issues/9715))
  ([1e0928d](https://github.com/taiga-family/taiga-ui/commit/1e0928db9678064edb887a01800a40bb6651598b))

### 🐞 Bug Fixes

- **addon-charts:** fix division by zero in LineChart ([#9722](https://github.com/taiga-family/taiga-ui/issues/9722))
  ([c12a315](https://github.com/taiga-family/taiga-ui/commit/c12a315eefc768a26bae831323587555c9e3d5a7))
- **addon-mobile:** `TuiPullToRefreshService` fix pulling$ stream by calling `TUI_PULL_TO_REFRESH_LOADED.next()` on
  `onPull` event ([#9716](https://github.com/taiga-family/taiga-ui/issues/9716))
  ([3b978be](https://github.com/taiga-family/taiga-ui/commit/3b978bef943d96d5f90ded1c49860ac388e89e12))
- **kit:** `CalendarRange` not switch month with selected value
  ([#9695](https://github.com/taiga-family/taiga-ui/issues/9695))
  ([0e5f250](https://github.com/taiga-family/taiga-ui/commit/0e5f250f75e13e003fc036a0aaa26e7c38ed0c64))
- **kit:** `TuiTabsWithMore` should share `TuiActiveZone` for nested dropdowns inside `more`-section
  ([#9714](https://github.com/taiga-family/taiga-ui/issues/9714))
  ([f7c8fd5](https://github.com/taiga-family/taiga-ui/commit/f7c8fd5fd699b821d18d6935db87bd8dd6f53d93))
- **layout:** `Navigation` fix various style issues ([#9723](https://github.com/taiga-family/taiga-ui/issues/9723))
  ([a8aaf04](https://github.com/taiga-family/taiga-ui/commit/a8aaf046472413fd4b9893d23aa76fc70d2c48bc))
- **layout:** TuiBlockStatus remove margins for empty t-block-image
  ([#9741](https://github.com/taiga-family/taiga-ui/issues/9741))
  ([e86afea](https://github.com/taiga-family/taiga-ui/commit/e86afeabf143cb3aa918e20457783d74a3f8cc3d))
- **legacy:** `InputDateRange` double backspace to clear textfield
  ([#9707](https://github.com/taiga-family/taiga-ui/issues/9707))
  ([c80cadc](https://github.com/taiga-family/taiga-ui/commit/c80cadc72b7d1f5f248f9464e0784c440847403e))
- **legacy:** fix icons looking interactive in readonly textfields
  ([#9711](https://github.com/taiga-family/taiga-ui/issues/9711))
  ([85d6afd](https://github.com/taiga-family/taiga-ui/commit/85d6afdeba660f30db28ed66b6eadf9a193ba8b9))
- remove default styling from `a` tag in card component ([#9681](https://github.com/taiga-family/taiga-ui/issues/9681))
  ([1b6e32b](https://github.com/taiga-family/taiga-ui/commit/1b6e32b8c2c1a18986a1f47de999439cff10d09e))

## [4.14.0](https://github.com/taiga-family/taiga-ui/compare/v4.13.0...v4.14.0) (2024-11-05)

### 🚀 Features

- **core:** tuiHintDirection priority list ([#9669](https://github.com/taiga-family/taiga-ui/issues/9669))
  ([bbf13b5](https://github.com/taiga-family/taiga-ui/commit/bbf13b5747a141236c25a82d19403e32db18c61f))
- **kit:** `TuiFile` added tuiHintOverflow for file name ([#9659](https://github.com/taiga-family/taiga-ui/issues/9659))
  ([b5062bc](https://github.com/taiga-family/taiga-ui/commit/b5062bce0e7a5d7db995393d6ce3ab1722a32e72))
- **layout:** `BlockStatus` add desktop "m" size ([#9651](https://github.com/taiga-family/taiga-ui/issues/9651))
  ([8cd3eb8](https://github.com/taiga-family/taiga-ui/commit/8cd3eb8780dac69d7d58902ad77b3c83b3e77a1a))

### 🐞 Bug Fixes

- **addon-mobile:** `TuiElasticStickyService` teardown observable zone fix
  ([#9657](https://github.com/taiga-family/taiga-ui/issues/9657))
  ([5908330](https://github.com/taiga-family/taiga-ui/commit/5908330f97cd6edeb4657ae7b2b561ccd2f9d12f))
- **core:** do not hide scrollbars on desktop when dialog is open
  ([#9633](https://github.com/taiga-family/taiga-ui/issues/9633))
  ([5075a74](https://github.com/taiga-family/taiga-ui/commit/5075a746aa8713c34c20c354944431e53b3f3afc))
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
  ([466fda7](https://github.com/taiga-family/taiga-ui/commit/466fda7544ffe55564b0318e974d86d3ac7e5a14))
- **legacy:** `InputDate` incorrect value after backspace
  ([#9650](https://github.com/taiga-family/taiga-ui/issues/9650))
  ([6a10460](https://github.com/taiga-family/taiga-ui/commit/6a1046031cffa605c66c27ff0fbe9d2835c1a437))
- **legacy:** `InputDate` nativeValue set empty instead of handle mask
  ([ff8d5b3](https://github.com/taiga-family/taiga-ui/commit/ff8d5b3d11e3baed388f1b5314a0eb7cc1bc6a69))
- **legacy:** `InputPhone` fix format paste if value has space after plus sign
  ([#9634](https://github.com/taiga-family/taiga-ui/issues/9634))
  ([2b54390](https://github.com/taiga-family/taiga-ui/commit/2b543906f2ebf59a03bd2c141a4a110ded1e7b59))
- **legacy:** `InputTime` & `InputDateTime` should switch `inputMode` for time modes with AM / PM
  ([#9643](https://github.com/taiga-family/taiga-ui/issues/9643))
  ([ee53428](https://github.com/taiga-family/taiga-ui/commit/ee534287ab22af645adadaedb924fa881f06689b))

## [4.13.0](https://github.com/taiga-family/taiga-ui/compare/v4.12.0...v4.13.0) (2024-10-28)

### 🐞 Bug Fixes

- **addon-commerce:** `ThumbnailCard` with blur effect should keep its initial border-radius
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

- **addon-mobile:** `MobileCalendar` add (mousedown.prevent)
  ([3efbd50](https://github.com/taiga-family/taiga-ui/commit/3efbd5023a0be72f7959da8d35da18fa2dd5dd3f))
- **core:** `Calendar` not switch to large date
  ([683e6bc](https://github.com/taiga-family/taiga-ui/commit/683e6bc631ba4c6d0b1d84576b7868de81620168))
- **core:** `Calendar` not switch to large date ([#9587](https://github.com/taiga-family/taiga-ui/issues/9587))
  ([4575a40](https://github.com/taiga-family/taiga-ui/commit/4575a40e836ff2260f0b7c24ba0bd6bfcb0bbb0e))
- **core:** `Popup` add service for arbitrary portal items
  ([#9605](https://github.com/taiga-family/taiga-ui/issues/9605))
  ([6ab1756](https://github.com/taiga-family/taiga-ui/commit/6ab17567882ec42f9e8396fe7e9556c2388c2c1a))
- **kit:** `Drawer` add new component ([#9614](https://github.com/taiga-family/taiga-ui/issues/9614))
  ([5b43400](https://github.com/taiga-family/taiga-ui/commit/5b43400212f7dba94f1350cd27a6003f91d677c0))
- **kit:** `Tooltip` add DI options ([#9571](https://github.com/taiga-family/taiga-ui/issues/9571))
  ([e2f17c4](https://github.com/taiga-family/taiga-ui/commit/e2f17c40c8e36d44f99fb790d0df6376f7f7c9c5))
- **kit:** `TuiInputPhoneInternational` has separator customization
  ([#9601](https://github.com/taiga-family/taiga-ui/issues/9601))
  ([7939bc5](https://github.com/taiga-family/taiga-ui/commit/7939bc5aa3e015dcef81a5f7c93386764886f860))
- **legacy:** `InputTime` & `InputDateTime` support `AM` / `PM` formats
  ([#9595](https://github.com/taiga-family/taiga-ui/issues/9595))
  ([0f67a78](https://github.com/taiga-family/taiga-ui/commit/0f67a78475ef771ac95d03b5abcff568b299d5eb))

## [4.12.0](https://github.com/taiga-family/taiga-ui/compare/v4.11.0...v4.12.0) (2024-10-21)

### 🐞 Bug Fixes

- **addon-commerce:** `InputCardGroup` safari autofill focus
  ([23e32c4](https://github.com/taiga-family/taiga-ui/commit/23e32c48501e5bcdea8c34168728746804d39754))
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

- **addon-doc:** improve active zone for copy button ([#9510](https://github.com/taiga-family/taiga-ui/issues/9510))
  ([424496b](https://github.com/taiga-family/taiga-ui/commit/424496b4a489c7db5a5bc274fc3f5e38ec47f087))
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

- **addon-commerce:** `InputCard` icon to signal ([#9421](https://github.com/taiga-family/taiga-ui/issues/9421))
  ([41270d6](https://github.com/taiga-family/taiga-ui/commit/41270d66cd1503bb965a522f1c033c471340eb36))
- **addon-commerce:** `InputCardGroup` fix Safari autofill
  ([#9198](https://github.com/taiga-family/taiga-ui/issues/9198))
  ([1f5dfa5](https://github.com/taiga-family/taiga-ui/commit/1f5dfa57839157c7690e0ce1ad246d732aeaa106))
- **addon-doc:** `DocDemo` remove `timer` and `tuiZonefreeScheduler`
  ([170ec4b](https://github.com/taiga-family/taiga-ui/commit/170ec4b0ccdaa3571d312ceb5852f6df579d053a))
- **addon-doc:** `DocDemo` remove `timer` and `tuiZonefreeScheduler`
  ([#9422](https://github.com/taiga-family/taiga-ui/issues/9422))
  ([25d9bfa](https://github.com/taiga-family/taiga-ui/commit/25d9bfab0d77f7573fe2ad0bac3bf12fe3d1134f))
- **addon-doc:** `DocDemo` trigger cd manually within zone-free
  ([2756608](https://github.com/taiga-family/taiga-ui/commit/27566081972d338784d26d0d393e78389e6379a0))
- **addon-doc:** add `legacy` package as peer dependency ([#9367](https://github.com/taiga-family/taiga-ui/issues/9367))
  ([069b680](https://github.com/taiga-family/taiga-ui/commit/069b680507605d7fbf08c052d94f54153f6194ea))
- **addon-doc:** glitch width content between value from DOM and sandbox width from url
  ([#9341](https://github.com/taiga-family/taiga-ui/issues/9341))
  ([b5c4156](https://github.com/taiga-family/taiga-ui/commit/b5c4156ab7277865b6ab28c37e0e146875a4acc5))
- **addon-doc:** provide languages icon ([#9236](https://github.com/taiga-family/taiga-ui/issues/9236))
  ([bc5caf7](https://github.com/taiga-family/taiga-ui/commit/bc5caf71856a1b10fbea957af40b1694c3426acd))
- **addon-mobile:** `InputDateRange` throws error on single date selection
  ([#9411](https://github.com/taiga-family/taiga-ui/issues/9411))
  ([93c08d4](https://github.com/taiga-family/taiga-ui/commit/93c08d483c5dff47258188176e0865945355f1ce))
- **addon-mobile:** fix minLength and maxLength properties for range in mobile calendar
  ([#9118](https://github.com/taiga-family/taiga-ui/issues/9118))
  ([c84dd39](https://github.com/taiga-family/taiga-ui/commit/c84dd39af211b89fa0c27f5abf1864d5b772175a))
- **addon-table:** `tr`, `thGroup` fix hydration issues ([#9460](https://github.com/taiga-family/taiga-ui/issues/9460))
  ([c5fd3f9](https://github.com/taiga-family/taiga-ui/commit/c5fd3f9b0d21fab9c37fcbbc1769842573dfa118))
- **addon-table:** drop legacy package dependency ([#9373](https://github.com/taiga-family/taiga-ui/issues/9373))
  ([1171fbc](https://github.com/taiga-family/taiga-ui/commit/1171fbc3807ece6ec0b5baefa57b3535ebed2b9e))
- **addon-table:** hydration error while configuring table
  ([#9374](https://github.com/taiga-family/taiga-ui/issues/9374))
  ([7100f73](https://github.com/taiga-family/taiga-ui/commit/7100f730b34b71d4ffdef0c858c07112e6cb18a2))
- allow to install the same cdk of peer dependencies ([#9414](https://github.com/taiga-family/taiga-ui/issues/9414))
  ([0d9ac9d](https://github.com/taiga-family/taiga-ui/commit/0d9ac9d0df670b5a1200652c79ced3722b3a8d16))
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
- **core:** support provide empty avatar src ([#9454](https://github.com/taiga-family/taiga-ui/issues/9454))
  ([8a52bbc](https://github.com/taiga-family/taiga-ui/commit/8a52bbc88b5a6f1c545d0fa472a092db0fe406dd))
- **core:** support provide empty icon value ([#9408](https://github.com/taiga-family/taiga-ui/issues/9408))
  ([d0577d6](https://github.com/taiga-family/taiga-ui/commit/d0577d6f34da51b478a101c40cc5a155c2ac9487))
- **deps:** update angular web apis plugins to ^4.7.0 ([#9395](https://github.com/taiga-family/taiga-ui/issues/9395))
  ([43ca14f](https://github.com/taiga-family/taiga-ui/commit/43ca14f247bf8e5b6841d955939a029301404229))
- **deps:** update angular web apis plugins to ^4.8.0 ([#9400](https://github.com/taiga-family/taiga-ui/issues/9400))
  ([91b968e](https://github.com/taiga-family/taiga-ui/commit/91b968e3fe7e6eda818a3b3f1f75866b06dcbe87))
- **deps:** update dependency @ng-web-apis/universal to v4.8.0
  ([#9401](https://github.com/taiga-family/taiga-ui/issues/9401))
  ([bf0bc15](https://github.com/taiga-family/taiga-ui/commit/bf0bc151a2d0d13eb2e3fea00fa6dac890d32767))
- **deps:** update dependency @playwright/test to v1.48.0
  ([#9393](https://github.com/taiga-family/taiga-ui/issues/9393))
  ([efd2e3d](https://github.com/taiga-family/taiga-ui/commit/efd2e3de7735a538888dadd9fdb3974ec2869310))
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
- **kit:** `Accordion` fix hydration issue ([#9453](https://github.com/taiga-family/taiga-ui/issues/9453))
  ([e22d2ba](https://github.com/taiga-family/taiga-ui/commit/e22d2baf1649564fa6276701be5d3fbc63ed2383))
- **kit:** `Chip` size
  ([904725c](https://github.com/taiga-family/taiga-ui/commit/904725c7e43e182fe12a4ed1e9ba9101b39d958d))
- **kit:** `Chip` size ([#9169](https://github.com/taiga-family/taiga-ui/issues/9169))
  ([a92153a](https://github.com/taiga-family/taiga-ui/commit/a92153ae08ae17dcf93edfd06d23ba021bdc47ee))
- **kit:** `InputPhoneInternational` signal `countries` ([#9452](https://github.com/taiga-family/taiga-ui/issues/9452))
  ([4f614b2](https://github.com/taiga-family/taiga-ui/commit/4f614b2d487e46eeb2d1b9a82f579d1ab10b8e3a))
- **kit:** `Radio`, `Checkbox`, `Switch` remove non-functioning `appearance` input
  ([#9221](https://github.com/taiga-family/taiga-ui/issues/9221))
  ([6dc4ce0](https://github.com/taiga-family/taiga-ui/commit/6dc4ce05f5b100ac5045de74097109ebcd6a7e47))
- **kit:** `TuiImgLazyLoading` compat with SSR ([#9184](https://github.com/taiga-family/taiga-ui/issues/9184))
  ([710166f](https://github.com/taiga-family/taiga-ui/commit/710166f199334b3f851e503ff765c48b29e67a5a))
- **layout:** `Header` fix subtitile padding on mobile ([#9282](https://github.com/taiga-family/taiga-ui/issues/9282))
  ([faeca9e](https://github.com/taiga-family/taiga-ui/commit/faeca9e9f506c78e63581a9564ea49be55c2aa16))
- **legacy:** `Input` fix [(tuiDropdownOpen)] ([#9214](https://github.com/taiga-family/taiga-ui/issues/9214))
  ([65981bc](https://github.com/taiga-family/taiga-ui/commit/65981bcaefcce811891887a697c496d53108fce2))
- **legacy:** `InputDateTime` fix native option for empty value
  ([#9464](https://github.com/taiga-family/taiga-ui/issues/9464))
  ([b36e9dc](https://github.com/taiga-family/taiga-ui/commit/b36e9dc9e3e16bb3364188c2678c3ee1c8dca7d8))
- **legacy:** `InputTag` fix pasting multiple invalid tags
  ([#9340](https://github.com/taiga-family/taiga-ui/issues/9340))
  ([8b8161d](https://github.com/taiga-family/taiga-ui/commit/8b8161d8fb36b08830b6dc7db2aa9ef3f2c2d2cf))
- **legacy:** `Multiselect` do not clear input on separator keydown, fix pasting
  ([#9345](https://github.com/taiga-family/taiga-ui/issues/9345))
  ([56d4a18](https://github.com/taiga-family/taiga-ui/commit/56d4a18a38a9c9e19184c5ce7c14c150024397a1))
- **legacy:** `Select` fix hydration ([#9433](https://github.com/taiga-family/taiga-ui/issues/9433))
  ([7f597a6](https://github.com/taiga-family/taiga-ui/commit/7f597a68d404d490c91dc7a0e50adbfa6c8fd56f))
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
- **core:** migrate to longtap event ([#9444](https://github.com/taiga-family/taiga-ui/issues/9444))
  ([e6ed552](https://github.com/taiga-family/taiga-ui/commit/e6ed552d9688545651f0e85367101888bfbcf353))
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
- **layout:** `Navigation` allow manual control of `AsideGroup`
  ([#9412](https://github.com/taiga-family/taiga-ui/issues/9412))
  ([b7f75d9](https://github.com/taiga-family/taiga-ui/commit/b7f75d9344ca7c8ebdb12c118c0acfb1300fff00))
- **legacy:** support fieldset disable ([#9376](https://github.com/taiga-family/taiga-ui/issues/9376))
  ([cb31858](https://github.com/taiga-family/taiga-ui/commit/cb3185874af2a0aeb7bc1db52dcf26d09dec71a4))
- **table-addon:** add requireSort option to table ([#9036](https://github.com/taiga-family/taiga-ui/issues/9036))
  ([38c5b20](https://github.com/taiga-family/taiga-ui/commit/38c5b20c6e511c6be2ac8c89abcb317c1c182531))
- **testing:** use jest-preset-angular by default ([#9418](https://github.com/taiga-family/taiga-ui/issues/9418))
  ([e064549](https://github.com/taiga-family/taiga-ui/commit/e0645495453c3b8d9bf6f99808064007ebb7b07d))

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
