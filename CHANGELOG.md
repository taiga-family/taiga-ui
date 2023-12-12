# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.58.0](https://github.com/taiga-family/taiga-ui/compare/v3.57.0...v3.58.0) (2023-12-12)

### Features

- **addon-doc:** add markdown theme ([#6221](https://github.com/taiga-family/taiga-ui/issues/6221))
  ([b73f1da](https://github.com/taiga-family/taiga-ui/commit/b73f1daeb91c8ffc94436452c524e9542f4aa70c))
- **addon-doc:** display emission in `@Output` wherever possible
  ([#6171](https://github.com/taiga-family/taiga-ui/issues/6171))
  ([8282585](https://github.com/taiga-family/taiga-ui/commit/828258501f8d4bca947592bea7e0215fc09370a7))
- **addon-doc:** improve code block ui ([#6180](https://github.com/taiga-family/taiga-ui/issues/6180))
  ([be39861](https://github.com/taiga-family/taiga-ui/commit/be39861fe7392f34ffbd4d3c8f6095988af236c5))
- **addon-doc:** use `anchorScrolling` by default ([#6182](https://github.com/taiga-family/taiga-ui/issues/6182))
  ([af24c82](https://github.com/taiga-family/taiga-ui/commit/af24c82a22a9f15e81a812af46067def1060a191))
- **addon-doc:** use white color for deprecated tag ([#6165](https://github.com/taiga-family/taiga-ui/issues/6165))
  ([bdd946f](https://github.com/taiga-family/taiga-ui/commit/bdd946f46fe835960334ac0d916f457f5264b2a0))
- **kit:** `Push` allow string in timestamp for custom formatting
  ([#6209](https://github.com/taiga-family/taiga-ui/issues/6209))
  ([33525f6](https://github.com/taiga-family/taiga-ui/commit/33525f6d0f19c90b928414326d53cc85ddc292bc))
- **kit:** support null in `tuiImmutableUpdateInputDateMulti`
  ([#6176](https://github.com/taiga-family/taiga-ui/issues/6176))
  ([3ef4f48](https://github.com/taiga-family/taiga-ui/commit/3ef4f4892ff6a01333ca8a185bd8de283c675d62))

### Bug Fixes

- **addon-commerce:** treat US Diners as Mastercard internationally
  ([#6210](https://github.com/taiga-family/taiga-ui/issues/6210))
  ([58b04a6](https://github.com/taiga-family/taiga-ui/commit/58b04a619b007aafa041824d5bcf08792a89f9f8))
- **core:** use immutable range for trigger stream in Safari
  ([#6220](https://github.com/taiga-family/taiga-ui/issues/6220))
  ([ddb07f9](https://github.com/taiga-family/taiga-ui/commit/ddb07f9611c345eb9e5d0944b37a46227cc92250))
- **i18n:** fix Malay translation ([#6161](https://github.com/taiga-family/taiga-ui/issues/6161))
  ([79aa68a](https://github.com/taiga-family/taiga-ui/commit/79aa68ae3fd6f6298bdb60355a25c074f33adef5))
- **kit:** `InputPhone` should erase value on blur if it's just country code
  ([#6214](https://github.com/taiga-family/taiga-ui/issues/6214))
  ([0b0abe9](https://github.com/taiga-family/taiga-ui/commit/0b0abe9011cd20570cb8f83a87955d1bd765510b))

## [3.57.0](https://github.com/taiga-family/taiga-ui/compare/v3.56.0...v3.57.0) (2023-12-04)

### Features

- **addon-doc:** add type reference handler for improve documentation
  ([#6086](https://github.com/taiga-family/taiga-ui/issues/6086))
  ([e139770](https://github.com/taiga-family/taiga-ui/commit/e13977086bc63bee462fb9b8e94a5d2b8c60f936))
- **core:** `*tuiHint` add new directive for customizing hint bubble
  ([#6119](https://github.com/taiga-family/taiga-ui/issues/6119))
  ([c343d3e](https://github.com/taiga-family/taiga-ui/commit/c343d3e394aeb9da678f645d4e15137f8c6411ab))
- **i18n:** add Malay language ([#6150](https://github.com/taiga-family/taiga-ui/issues/6150))
  ([d60064e](https://github.com/taiga-family/taiga-ui/commit/d60064e7729847331547d398ab791a59a1f33bce))

### Bug Fixes

- **addon-table:** fix sorting on table with dynamic columns
  ([#6103](https://github.com/taiga-family/taiga-ui/issues/6103))
  ([e0fc02b](https://github.com/taiga-family/taiga-ui/commit/e0fc02b31593c2e90528d81fc8b25d49e387839a))
- **core:** `Dropdown` fix for initial open state ([#6130](https://github.com/taiga-family/taiga-ui/issues/6130))
  ([a641af5](https://github.com/taiga-family/taiga-ui/commit/a641af53f5fcd8acd9a29ae89b351cb5f77d5cf8))
- **core:** `Expand` fix for disabled animation ([#6129](https://github.com/taiga-family/taiga-ui/issues/6129))
  ([bcbafc5](https://github.com/taiga-family/taiga-ui/commit/bcbafc56e9beefb4c122eb6479e0e1f2afcef8df))
- **core:** invalid css variable name for shadow of navigation
  ([#6128](https://github.com/taiga-family/taiga-ui/issues/6128))
  ([47dff9f](https://github.com/taiga-family/taiga-ui/commit/47dff9f05e70d7bae5c1f7bd8b8b8d76e3add53d))
- **experimental:** `Sensitive` fix svg interruption in safari
  ([#6118](https://github.com/taiga-family/taiga-ui/issues/6118))
  ([ed02bda](https://github.com/taiga-family/taiga-ui/commit/ed02bda71ad8f67498c8638dc8a530f0bb8a0b1b))
- **kit:** correct resolve date range in mobile calendar ([#5974](https://github.com/taiga-family/taiga-ui/issues/5974))
  ([016242e](https://github.com/taiga-family/taiga-ui/commit/016242ec71075687582e73ae4a34e76665213ee7))
- **kit:** possible type error reduce of empty array with no initial value
  ([#6107](https://github.com/taiga-family/taiga-ui/issues/6107))
  ([ee9d470](https://github.com/taiga-family/taiga-ui/commit/ee9d470a3b6e9c47f5c33a62a72ae2c6fa7ee98e))

## [3.56.0](https://github.com/taiga-family/taiga-ui/compare/v3.55.0...v3.56.0) (2023-11-28)

### Features

- **addon-doc:** add color for attrs ([#6100](https://github.com/taiga-family/taiga-ui/issues/6100))
  ([2cb4e62](https://github.com/taiga-family/taiga-ui/commit/2cb4e623c86c689c2540ac8d096d148985e63671))
- **addon-doc:** add ios beauty effect for header component
  ([#6062](https://github.com/taiga-family/taiga-ui/issues/6062))
  ([d23b342](https://github.com/taiga-family/taiga-ui/commit/d23b342f7ab9ca5cf439124c859031ceaf3b3126))
- **addon-doc:** improve preview inputs ([#6030](https://github.com/taiga-family/taiga-ui/issues/6030))
  ([224e946](https://github.com/taiga-family/taiga-ui/commit/224e9460559e4f2b271b4746d85e533e6b9408aa))
- **core:** add calendar initial view ([#6015](https://github.com/taiga-family/taiga-ui/issues/6015))
  ([900cb64](https://github.com/taiga-family/taiga-ui/commit/900cb646b7e303a8d8bb58c64fba9cc0dd9d1ac1))
- **core:** add shadow css variables ([#6057](https://github.com/taiga-family/taiga-ui/issues/6057))
  ([b5f7211](https://github.com/taiga-family/taiga-ui/commit/b5f7211070887e310fa09207dd43a17d273c1cef))
- **experimental:** `ButtonClose` add new directive ([#5980](https://github.com/taiga-family/taiga-ui/issues/5980))
  ([8c79059](https://github.com/taiga-family/taiga-ui/commit/8c7905967b5db7d03b22e74a469c53aa68ee804b))
- **experimental:** `Chip` add new component ([#6076](https://github.com/taiga-family/taiga-ui/issues/6076))
  ([49cd976](https://github.com/taiga-family/taiga-ui/commit/49cd976afb03e68971752d9b4876510866addd12))
- **experimental:** `Icons` add new directive ([#6053](https://github.com/taiga-family/taiga-ui/issues/6053))
  ([6883895](https://github.com/taiga-family/taiga-ui/commit/68838955599d1c3e710d33c4c39d32b5ac6cb570))
- **experimental:** `Tooltip` add new component ([#6000](https://github.com/taiga-family/taiga-ui/issues/6000))
  ([84cc401](https://github.com/taiga-family/taiga-ui/commit/84cc4014cc44715d45d3b3156099c190b4637da0))
- **experimental:** add pin ([#5221](https://github.com/taiga-family/taiga-ui/issues/5221))
  ([57f33a9](https://github.com/taiga-family/taiga-ui/commit/57f33a93975f4e965ec511c11850ff37fc916497))
- **kit:** `Slider` new design ([#4927](https://github.com/taiga-family/taiga-ui/issues/4927))
  ([e7f9769](https://github.com/taiga-family/taiga-ui/commit/e7f97693077779c944ee663a3a458132ea4478bd))

### Bug Fixes

- **addon-doc:** add border radius for copy element ([#6082](https://github.com/taiga-family/taiga-ui/issues/6082))
  ([aca4040](https://github.com/taiga-family/taiga-ui/commit/aca404031a5d56953d5c06dbf0003a1a802da9e0))
- **cdk:** add `@taiga-ui/experimental` to ng-update package group
  ([#6054](https://github.com/taiga-family/taiga-ui/issues/6054))
  ([92fbc0e](https://github.com/taiga-family/taiga-ui/commit/92fbc0ec7c5d64c1a412ede8d71df65e5c34364e))
- **cdk:** add checks before destroying hostView and viewRef
  ([#6083](https://github.com/taiga-family/taiga-ui/issues/6083))
  ([8ef84b5](https://github.com/taiga-family/taiga-ui/commit/8ef84b52c10e19b6639a3bfce90d7d421077eae2))
- **kit:** `.t-mark` in `Radio` disappears after toggling `Expand`
  ([#6037](https://github.com/taiga-family/taiga-ui/issues/6037))
  ([6999a19](https://github.com/taiga-family/taiga-ui/commit/6999a1957cb3a2bff0243d456258cd7165a114fc))
- **kit:** prevent clear country code prefix ([#6060](https://github.com/taiga-family/taiga-ui/issues/6060))
  ([1ec578e](https://github.com/taiga-family/taiga-ui/commit/1ec578e4b0aa00b6a3521ab57d6884dcd251e9bb))
- **testing:** remove jasmine dependency ([#6072](https://github.com/taiga-family/taiga-ui/issues/6072))
  ([4757034](https://github.com/taiga-family/taiga-ui/commit/47570349973bb8cce8e5f0cdeff4a47b12ef2b8e))

## [3.55.0](https://github.com/taiga-family/taiga-ui/compare/v3.54.0...v3.55.0) (2023-11-20)

### Features

- **addon-charts:** `Axes` allows to add label for the end of axisX
  ([#6016](https://github.com/taiga-family/taiga-ui/issues/6016))
  ([3a2e611](https://github.com/taiga-family/taiga-ui/commit/3a2e6118c51d97b2dd14ace31916d4f5051bcdc4))
- **addon-doc:** improve code block ([#5970](https://github.com/taiga-family/taiga-ui/issues/5970))
  ([179178d](https://github.com/taiga-family/taiga-ui/commit/179178d05b312bc4a01c583ae9f5a1d6de818931))
- **addon-doc:** improve UX for copy code ([#5918](https://github.com/taiga-family/taiga-ui/issues/5918))
  ([23e7c65](https://github.com/taiga-family/taiga-ui/commit/23e7c653f3236ae3d334e779c79228015b06a7d5))
- **addon-mobile:** initial mobile theme ([#5988](https://github.com/taiga-family/taiga-ui/issues/5988))
  ([679290a](https://github.com/taiga-family/taiga-ui/commit/679290aee119225702b32c693d4e4b6d79e2ed80))
- **experimental:** `Appearance` add new directive ([#5913](https://github.com/taiga-family/taiga-ui/issues/5913))
  ([d573ad6](https://github.com/taiga-family/taiga-ui/commit/d573ad6add6463af01b112d27834af4b0c4f1d9a))
- **experimental:** `Button` add `icon` input for new icons approach
  ([6b79aeb](https://github.com/taiga-family/taiga-ui/commit/6b79aebf02e4f37f0df3f52c3f491b830270961b))
- **experimental:** `ButtonVertical` add new directive ([#5949](https://github.com/taiga-family/taiga-ui/issues/5949))
  ([b19b33f](https://github.com/taiga-family/taiga-ui/commit/b19b33f302195713355baaac342725468a6631bb))
- **experimental:** `ProgressSegmented` can be customized to have no round corners
  ([#5933](https://github.com/taiga-family/taiga-ui/issues/5933))
  ([79fb39d](https://github.com/taiga-family/taiga-ui/commit/79fb39d73a741777fda47049f86421d26ff9db94))
- **kit:** `File` change `showDelete` type to `boolean | 'always'`
  ([#5968](https://github.com/taiga-family/taiga-ui/issues/5968))
  ([d468aa4](https://github.com/taiga-family/taiga-ui/commit/d468aa4ef8b9531d84dca8ccb7eb7d1d7b8253e7))
- **kit:** `ProgressCircle` has new sizes (add `new` attribute to enable them)
  ([#5950](https://github.com/taiga-family/taiga-ui/issues/5950))
  ([d36cc10](https://github.com/taiga-family/taiga-ui/commit/d36cc107ccdfa134f6c1d8b601f71f5f8b96a600))
- **kit:** prevent combobox dropdown opening on value reset
  ([#5641](https://github.com/taiga-family/taiga-ui/issues/5641))
  ([1664665](https://github.com/taiga-family/taiga-ui/commit/1664665b632f83128af373c548cc0fff96c699be))

### Bug Fixes

- **addon-table:** `Table` disappearing borders ([#5999](https://github.com/taiga-family/taiga-ui/issues/5999))
  ([6dcdb66](https://github.com/taiga-family/taiga-ui/commit/6dcdb666a0d692f7d85ae5176ee4d2c15eda3ae6))
- **core:** use overflow wrap for notification content ([#5944](https://github.com/taiga-family/taiga-ui/issues/5944))
  ([cd3920c](https://github.com/taiga-family/taiga-ui/commit/cd3920c0225c8eca0124cbc500983fb29da49632))
- **kit:** `InputDateRange` can have empty control value after selecting something from `[items]`
  ([#6006](https://github.com/taiga-family/taiga-ui/issues/6006))
  ([d0711da](https://github.com/taiga-family/taiga-ui/commit/d0711da595516b1636fe24e4108817d7a00d3d7d))
- **kit:** don't allow disabled options to be selected ([#5985](https://github.com/taiga-family/taiga-ui/issues/5985))
  ([948be22](https://github.com/taiga-family/taiga-ui/commit/948be225e0ad8559696779830335ecd761c8ce52))
- **kit:** preventing hover from being transmitted to nested accordion item
  ([#6028](https://github.com/taiga-family/taiga-ui/issues/6028))
  ([ac18f0f](https://github.com/taiga-family/taiga-ui/commit/ac18f0f7b948377741807070c8699c47cbbcf64f))
- **schematics:** typo in provideAnimations for animations
  ([#5975](https://github.com/taiga-family/taiga-ui/issues/5975))
  ([6be1190](https://github.com/taiga-family/taiga-ui/commit/6be1190d9f8d2a2bd9813efacf70da9530d73a21))

## [3.54.0](https://github.com/taiga-family/taiga-ui/compare/v3.53.0...v3.54.0) (2023-11-13)

### Features

- **cdk:** check document has focus after leave iframe ([#5883](https://github.com/taiga-family/taiga-ui/issues/5883))
  ([31a9483](https://github.com/taiga-family/taiga-ui/commit/31a948382cbdd5ae2e11f22cd44697c49edb4304))
- **experimental:** `Icon` add new component ([#5872](https://github.com/taiga-family/taiga-ui/issues/5872))
  ([6b278eb](https://github.com/taiga-family/taiga-ui/commit/6b278eb64840906d4c1fcc409d3cfaff3541a60c))
- **experimental:** add `TuiCard` ([#5777](https://github.com/taiga-family/taiga-ui/issues/5777))
  ([d2c5e86](https://github.com/taiga-family/taiga-ui/commit/d2c5e86ed883b847293b3a961d87c81498aa091d))
- **experimental:** new version of `ProgressSegmented` ([#5892](https://github.com/taiga-family/taiga-ui/issues/5892))
  ([a643191](https://github.com/taiga-family/taiga-ui/commit/a6431914e5c662f121bff7f719870a5c17eae24f))
- **kit:** round corners of progress can be toggled off in new version of `ProgressBar`
  ([#5912](https://github.com/taiga-family/taiga-ui/issues/5912))
  ([244f368](https://github.com/taiga-family/taiga-ui/commit/244f3687e1f0b70dd8de077d29a01b8a87449bc8))

### Bug Fixes

- **addon-mobile:** `SheetDialog` add missing label divider
  ([#5905](https://github.com/taiga-family/taiga-ui/issues/5905))
  ([5c08ef3](https://github.com/taiga-family/taiga-ui/commit/5c08ef38592a9c87cfa66cbf3d10af109bf34a2c))
- **addon-table:** `Table` disappearing borders ([#5914](https://github.com/taiga-family/taiga-ui/issues/5914))
  ([8b16199](https://github.com/taiga-family/taiga-ui/commit/8b16199a407f360447877989264d7cb876de40e5))
- **cdk:** add Angular 17 support for schematic `ng add taiga-ui`
  ([#5899](https://github.com/taiga-family/taiga-ui/issues/5899))
  ([aa776ec](https://github.com/taiga-family/taiga-ui/commit/aa776ec3fc30fbe4990ece121d159012555d1560))
- **experimental:** `Badge` remove hover state ([#5893](https://github.com/taiga-family/taiga-ui/issues/5893))
  ([085538c](https://github.com/taiga-family/taiga-ui/commit/085538cf4a656f612a272ef1b1a8dd9f485cd303))
- **kit:** `tuiProgressColorSegments` should support runtime changes of input property
  ([#5891](https://github.com/taiga-family/taiga-ui/issues/5891))
  ([16475cc](https://github.com/taiga-family/taiga-ui/commit/16475ccf7b7bcf59288bae76b63368af565890b8))
- **kit:** expression has changed in inputTag ([#5867](https://github.com/taiga-family/taiga-ui/issues/5867))
  ([615e829](https://github.com/taiga-family/taiga-ui/commit/615e82958e13a299f4a225790de95afd38b0a7aa))

## [3.53.0](https://github.com/taiga-family/taiga-ui/compare/v3.52.0...v3.53.0) (2023-11-07)

### Features

- **addon-doc:** add `tuiSortPages` ([#5817](https://github.com/taiga-family/taiga-ui/issues/5817))
  ([00f10e8](https://github.com/taiga-family/taiga-ui/commit/00f10e8d2092bbf94fcb1aea3ea2bd6c33aec42d))

### Bug Fixes

- **cdk:** remove redundant dependencies ([#5864](https://github.com/taiga-family/taiga-ui/issues/5864))
  ([50d0dbe](https://github.com/taiga-family/taiga-ui/commit/50d0dbe3cce3c3b01b26b1965ac68f8f49db2574))
- **core:** expression has changed after it was checked ([#5827](https://github.com/taiga-family/taiga-ui/issues/5827))
  ([f0408ed](https://github.com/taiga-family/taiga-ui/commit/f0408ed056f653c6f1ef2dbb94bbffe133ae5223))
- **kit:** `Toggle` fix loader position ([#5832](https://github.com/taiga-family/taiga-ui/issues/5832))
  ([b894fe7](https://github.com/taiga-family/taiga-ui/commit/b894fe766577430a326008c5ab4be673e7117a47))

## [3.52.0](https://github.com/taiga-family/taiga-ui/compare/v3.51.0...v3.52.0) (2023-10-31)

### Features

- **experimental:** `TuiAmount` add new pipe ([#5735](https://github.com/taiga-family/taiga-ui/issues/5735))
  ([33588c3](https://github.com/taiga-family/taiga-ui/commit/33588c38c0bf9a424de3f887a55c64c0ad96c49b))
- **experimental:** new component `Cell` ([#5460](https://github.com/taiga-family/taiga-ui/issues/5460))
  ([343f2e8](https://github.com/taiga-family/taiga-ui/commit/343f2e8b0b59dbb265509a45b1f249639b56b498))
- **kit:** add `InputMultiDate` ([#5620](https://github.com/taiga-family/taiga-ui/issues/5620))
  ([180930e](https://github.com/taiga-family/taiga-ui/commit/180930e44561f27ef551bdab5cd8fa2b1a3e66df))
- **layout:** `Title` add new component ([#5743](https://github.com/taiga-family/taiga-ui/issues/5743))
  ([93b51ff](https://github.com/taiga-family/taiga-ui/commit/93b51ff5fa394f1a7dcc7873fcf8bb26978248e1))
- **testing:** adds harness for dialog ([#5785](https://github.com/taiga-family/taiga-ui/issues/5785))
  ([eed5765](https://github.com/taiga-family/taiga-ui/commit/eed5765c88d33deba596fa03bffcd850d4635281))

### Bug Fixes

- **cdk:** don't use `layerX` and `layerY` for detect retargated element
  ([#5796](https://github.com/taiga-family/taiga-ui/issues/5796))
  ([8873fad](https://github.com/taiga-family/taiga-ui/commit/8873fadbd5a94b838fdb397dfef20fafe4d8dce9))
- **core:** don't remove any comments from bundled artifacts
  ([#5795](https://github.com/taiga-family/taiga-ui/issues/5795))
  ([2ff6569](https://github.com/taiga-family/taiga-ui/commit/2ff656960878be6b56bf52630479d6cf43ebf7bb))

## [3.51.0](https://github.com/taiga-family/taiga-ui/compare/v3.50.0...v3.51.0) (2023-10-25)

### Features

- **core:** use `TuiBreakpointService` instead of `TUI_IS_MOBILE_RES`
  ([#5736](https://github.com/taiga-family/taiga-ui/issues/5736))
  ([bc57278](https://github.com/taiga-family/taiga-ui/commit/bc572784251d6407fa1f662dde9ab76a58af40d2))
- **experimental:** `ThumbnailCard` add new component ([#5734](https://github.com/taiga-family/taiga-ui/issues/5734))
  ([97606f7](https://github.com/taiga-family/taiga-ui/commit/97606f79ea159d446ae4cefb0a0543cbd0f1caec))

### Bug Fixes

- **cdk:** revert breaking changes with `TuiMapper` ([#5739](https://github.com/taiga-family/taiga-ui/issues/5739))
  ([74d34c8](https://github.com/taiga-family/taiga-ui/commit/74d34c83e9382b787c38cff84df003f2d811e97f))

## [3.50.0](https://github.com/taiga-family/taiga-ui/compare/v3.49.1...v3.50.0) (2023-10-23)

### Features

- **experimental:** `Toggle`, `Checkbox`, `Radio` add new components
  ([#5319](https://github.com/taiga-family/taiga-ui/issues/5319))
  ([f805ed5](https://github.com/taiga-family/taiga-ui/commit/f805ed5975d355b36a793bdd5e6d5c361c108599))
- **i18n:** add `Kazakh` language ([#5678](https://github.com/taiga-family/taiga-ui/issues/5678))
  ([72a0136](https://github.com/taiga-family/taiga-ui/commit/72a01369398224f60259b6860d2402a4e7422d93))
- **kit:** `UnmaskHandler` add new directive ([#5687](https://github.com/taiga-family/taiga-ui/issues/5687))
  ([defd0be](https://github.com/taiga-family/taiga-ui/commit/defd0be83042606e417c348bfec6b7ecb5e29845))
- **schematics:** ng update for TuiMapper and TuiMatcher ([#5679](https://github.com/taiga-family/taiga-ui/issues/5679))
  ([13e4627](https://github.com/taiga-family/taiga-ui/commit/13e4627eac7ab48b0004ca2b77e19ac5328a7435))

### Bug Fixes

- **core:** `Group` bump CSS specificity to fix new buttons
  ([#5728](https://github.com/taiga-family/taiga-ui/issues/5728))
  ([85708cc](https://github.com/taiga-family/taiga-ui/commit/85708cceb25c58120f6bc9f7dd434020dfbeba59))
- **core:** auto break words in notification ([#5716](https://github.com/taiga-family/taiga-ui/issues/5716))
  ([ace9c3c](https://github.com/taiga-family/taiga-ui/commit/ace9c3c71bbc2c31860c5bc882cddad97ec48fb9))
- **core:** correct `TuiHostedDropdownComponent` with `tuiHostedDropdownHost`
  ([#5669](https://github.com/taiga-family/taiga-ui/issues/5669))
  ([c974b51](https://github.com/taiga-family/taiga-ui/commit/c974b51d3a86d54ecad54a8efb5996779a466d7c))
- **core:** use correct host portal viewport for dropdown position
  ([#5662](https://github.com/taiga-family/taiga-ui/issues/5662))
  ([e90c4a4](https://github.com/taiga-family/taiga-ui/commit/e90c4a4af5a591487957692aff30b667d2a4024c))
- **experimental:** rename `BadgeAlert` to `BadgeNotification`
  ([#5652](https://github.com/taiga-family/taiga-ui/issues/5652))
  ([d27927b](https://github.com/taiga-family/taiga-ui/commit/d27927bb8d65262af4e09e0769e1767ed8c39eb3))
- **kit:** `Multiselect` fix line height in value content
  ([#5686](https://github.com/taiga-family/taiga-ui/issues/5686))
  ([c9fa227](https://github.com/taiga-family/taiga-ui/commit/c9fa227466e814d6b83ceea9b1a73e94bd238d7f))
- **kit:** prevent memory leak ([#5663](https://github.com/taiga-family/taiga-ui/issues/5663))
  ([f3c21c1](https://github.com/taiga-family/taiga-ui/commit/f3c21c1ab5f0189f7d2c405bd3bd1270eebee58e))

### [3.49.1](https://github.com/taiga-family/taiga-ui/compare/v3.49.0...v3.49.1) (2023-10-17)

### Bug Fixes

- **kit:** `Multiselect` fix broken template in non-editable mode
  ([#5659](https://github.com/taiga-family/taiga-ui/issues/5659))
  ([315fda5](https://github.com/taiga-family/taiga-ui/commit/315fda578c8090c3f05afc0a558e1aa8bd85c020))

## [3.49.0](https://github.com/taiga-family/taiga-ui/compare/v3.48.0...v3.49.0) (2023-10-16)

### Features

- **addon-table:** table column direction reset on third click
  ([#5631](https://github.com/taiga-family/taiga-ui/issues/5631))
  ([85cee09](https://github.com/taiga-family/taiga-ui/commit/85cee09045f76de5ac79e7fc710d7e66c19b68af))
- **core:** add browser specific style mixins ([#5589](https://github.com/taiga-family/taiga-ui/issues/5589))
  ([27623c3](https://github.com/taiga-family/taiga-ui/commit/27623c32b63d7584d3a53a4cd5000b653ea9aff1))
- **core:** support `readonly TuiDay[]` in `calendar` ([#5574](https://github.com/taiga-family/taiga-ui/issues/5574))
  ([f1cafa8](https://github.com/taiga-family/taiga-ui/commit/f1cafa8f95e7c0029995d077ceebd89ca66ed3e6))
- **experimental:** `Rating` add new component ([#5633](https://github.com/taiga-family/taiga-ui/issues/5633))
  ([254e68b](https://github.com/taiga-family/taiga-ui/commit/254e68b638c92db8ccfe0590960b943400427946))
- **experimental:** `Surface` add new directive ([#5555](https://github.com/taiga-family/taiga-ui/issues/5555))
  ([62ac52c](https://github.com/taiga-family/taiga-ui/commit/62ac52cf95c914380973237aa37675ec9714516f))

### Bug Fixes

- **addon-commerce:** change `Rbl` to `Br` for Belarus rubles
  ([#5587](https://github.com/taiga-family/taiga-ui/issues/5587))
  ([1d4c721](https://github.com/taiga-family/taiga-ui/commit/1d4c72111f5b9cfb8e8f249150db6f384abe8024))
- **cdk:** `ValueChanges` add `distinctUntilChanged` ([#5586](https://github.com/taiga-family/taiga-ui/issues/5586))
  ([d3e40ad](https://github.com/taiga-family/taiga-ui/commit/d3e40ad233fad1833e370c47492ff4d2b12d8919))
- **cdk:** prevent page scrolling when a modal is open ([#5599](https://github.com/taiga-family/taiga-ui/issues/5599))
  ([50e5320](https://github.com/taiga-family/taiga-ui/commit/50e5320a93ff9945e557d003a31bb67cd8452d3f))
- **experimental:** `Fade` fix line height issue ([#5617](https://github.com/taiga-family/taiga-ui/issues/5617))
  ([a85ee21](https://github.com/taiga-family/taiga-ui/commit/a85ee219eb7b1d758b02fb78a8b16474e8061d91))
- **kit:** `LineClamp` fix unexpected closing ([#5630](https://github.com/taiga-family/taiga-ui/issues/5630))
  ([d6751cd](https://github.com/taiga-family/taiga-ui/commit/d6751cdacf53262e8bdc32485dc61af21b333a32))
- **kit:** `MultiSelect` fix incorrect height with multiline value content
  ([#5618](https://github.com/taiga-family/taiga-ui/issues/5618))
  ([5c41e09](https://github.com/taiga-family/taiga-ui/commit/5c41e0992ed1ae8c39b751d1434d77938ad753be))

## [3.48.0](https://github.com/taiga-family/taiga-ui/compare/v3.47.0...v3.48.0) (2023-10-09)

### Features

- **core:** introduces `TypedTuiMapper` ([#5507](https://github.com/taiga-family/taiga-ui/issues/5507))
  ([efd15bd](https://github.com/taiga-family/taiga-ui/commit/efd15bd37ff2770c33e6c372308d705210ab6e4e))
- **experimental:** `Button` improve loading accessibility
  ([#5573](https://github.com/taiga-family/taiga-ui/issues/5573))
  ([e0fd6af](https://github.com/taiga-family/taiga-ui/commit/e0fd6afac0c0a8ede51d4c2adc6bfed478c0ba20))
- **experimental:** add configuration with DI ([#5552](https://github.com/taiga-family/taiga-ui/issues/5552))
  ([39ed7d7](https://github.com/taiga-family/taiga-ui/commit/39ed7d7e30bd3aca9592fde321d6c4300e3c5889))

### Bug Fixes

- **addon-commerce:** invalid descriptions in currency code dictionary
  ([#5578](https://github.com/taiga-family/taiga-ui/issues/5578))
  ([9182165](https://github.com/taiga-family/taiga-ui/commit/9182165c135138004e3a55f7a62bbb799db9ba99))
- **addon-doc:** use code actions together ([#5570](https://github.com/taiga-family/taiga-ui/issues/5570))
  ([9451225](https://github.com/taiga-family/taiga-ui/commit/94512255f4817ca365eb60453885cf9ae8fce110))
- **cdk:** `Dialog` fix animation in safari ([#5525](https://github.com/taiga-family/taiga-ui/issues/5525))
  ([25fa994](https://github.com/taiga-family/taiga-ui/commit/25fa994a99b9f1f77b3085dfb3973c39474843d9))
- **core:** `DropdownHover` fix dropdown closing after child transition
  ([#5532](https://github.com/taiga-family/taiga-ui/issues/5532))
  ([a759118](https://github.com/taiga-family/taiga-ui/commit/a759118981e978d1312bac32a7f644f094f0cdda))
- **core:** `DropdownHover` fix unexpected closing when using nested dropdown
  ([#5541](https://github.com/taiga-family/taiga-ui/issues/5541))
  ([4b5d814](https://github.com/taiga-family/taiga-ui/commit/4b5d81483a6473034db058fbffb0185df028e972))
- **core:** scrollbar behaviour inside iframe ([#5561](https://github.com/taiga-family/taiga-ui/issues/5561))
  ([839fe33](https://github.com/taiga-family/taiga-ui/commit/839fe33614b46eafaf630332e7597cd3b4aaa51c))
- **kit:** `FilterByInput` do not reset list on match in multiselect
  ([#5538](https://github.com/taiga-family/taiga-ui/issues/5538))
  ([4d3bc9b](https://github.com/taiga-family/taiga-ui/commit/4d3bc9b36dbc2860e869714e2f61c02dc1abd7e9))

## [3.47.0](https://github.com/taiga-family/taiga-ui/compare/v3.46.0...v3.47.0) (2023-10-02)

### Features

- **addon-doc:** add copy button out-of-the-box ([#5508](https://github.com/taiga-family/taiga-ui/issues/5508))
  ([3a5dede](https://github.com/taiga-family/taiga-ui/commit/3a5dede3c21085fe3be05be27e3d93bdde1b2501))
- **core:** reuse baseHref in icons path factory ([#5445](https://github.com/taiga-family/taiga-ui/issues/5445))
  ([c975242](https://github.com/taiga-family/taiga-ui/commit/c9752420186b37793f42c2ed7ddf96f617e707ee))
- **experimental:** `BadgedContent` add new component ([#5498](https://github.com/taiga-family/taiga-ui/issues/5498))
  ([ded734c](https://github.com/taiga-family/taiga-ui/commit/ded734c57617ebe9b23005382dd56185519dba36))
- **experimental:** `Compass` add new component ([#5439](https://github.com/taiga-family/taiga-ui/issues/5439))
  ([676631d](https://github.com/taiga-family/taiga-ui/commit/676631df22c61a927bfebdb57afcaa2f0cdeaca9))
- **kit:** allow customize vertical align of `Radio` inside `RadioList`
  ([#5473](https://github.com/taiga-family/taiga-ui/issues/5473))
  ([1172151](https://github.com/taiga-family/taiga-ui/commit/117215187c46b180612a3dfeac5c7e5cf4880215))

### Bug Fixes

- **addon-charts:** `LineDaysChart` fix performance leak ([#5484](https://github.com/taiga-family/taiga-ui/issues/5484))
  ([2446882](https://github.com/taiga-family/taiga-ui/commit/2446882b900f83e217aef36df1f30a5f8de4de15))
- **addon-doc:** example should enclose inner content ([#5516](https://github.com/taiga-family/taiga-ui/issues/5516))
  ([be05e44](https://github.com/taiga-family/taiga-ui/commit/be05e446f52074795dfcdbdda6b17682ba81c96a))
- **addon-doc:** icon should be paste from subPage ([#5517](https://github.com/taiga-family/taiga-ui/issues/5517))
  ([a66d692](https://github.com/taiga-family/taiga-ui/commit/a66d692f44b88d4e18d7716987b38ba58b21d83f))
- **addon-table:** `table` controls do not work in heading
  ([#5450](https://github.com/taiga-family/taiga-ui/issues/5450))
  ([786a06d](https://github.com/taiga-family/taiga-ui/commit/786a06d9bd887779281d7d9a236c08ad93fe8ece))
- **addon-table:** improve typings for `tuiTableSort` ([#5513](https://github.com/taiga-family/taiga-ui/issues/5513))
  ([0176a37](https://github.com/taiga-family/taiga-ui/commit/0176a37baf0f4bb3adc05b9c5c56b85ace76248d))
- **core:** `Dialog` fix scrollbar width issues ([#5488](https://github.com/taiga-family/taiga-ui/issues/5488))
  ([75358a8](https://github.com/taiga-family/taiga-ui/commit/75358a81b7e9babb8c0a9fcb028b0423a1209b0f))
- **core:** `PrimitiveTextfield` with prefix/postfix has CD problem after delayed fonts loading
  ([#5477](https://github.com/taiga-family/taiga-ui/issues/5477))
  ([9a3a873](https://github.com/taiga-family/taiga-ui/commit/9a3a873c89cfdb4681c92ff2c41bd0dda03242e7))
- **core:** clicking label should not open dropdowns
  ([2c9ee62](https://github.com/taiga-family/taiga-ui/commit/2c9ee62e31636ba2466932ba0a9ab87f6ada5667))
- **kit:** `Textarea` has character descenders problems ([#5487](https://github.com/taiga-family/taiga-ui/issues/5487))
  ([f5ca9d3](https://github.com/taiga-family/taiga-ui/commit/f5ca9d377c0fdf09eaabd49dfbcac5d176058040))

## [3.46.0](https://github.com/taiga-family/taiga-ui/compare/v3.45.0...v3.46.0) (2023-09-25)

### Features

- **addon-doc:** improve search ([#5422](https://github.com/taiga-family/taiga-ui/issues/5422))
  ([d24bb94](https://github.com/taiga-family/taiga-ui/commit/d24bb945f7ef2974765c0b62c2459c431d746594))
- **addon-doc:** improve ui for code links ([#5435](https://github.com/taiga-family/taiga-ui/issues/5435))
  ([c436b77](https://github.com/taiga-family/taiga-ui/commit/c436b77c22c134911aef6c9973916ffbc160f3ce))
- **addon-doc:** support icons inside menu ([#5437](https://github.com/taiga-family/taiga-ui/issues/5437))
  ([c0eef53](https://github.com/taiga-family/taiga-ui/commit/c0eef53808e5c64d1c0d365b5940ef6921d41b7c))
- **experimental:** `BadgeAlert` add new component ([#5399](https://github.com/taiga-family/taiga-ui/issues/5399))
  ([2921a21](https://github.com/taiga-family/taiga-ui/commit/2921a21feacfae2ac98ffaf678c6f3d83f934ba3))
- **experimental:** `Button` add new appearances ([#5448](https://github.com/taiga-family/taiga-ui/issues/5448))
  ([4942dcc](https://github.com/taiga-family/taiga-ui/commit/4942dcc690e8ca5c1672e602391d4c426af4ad59))
- **experimental:** `Button` simplify icons ([#5424](https://github.com/taiga-family/taiga-ui/issues/5424))
  ([5dbd546](https://github.com/taiga-family/taiga-ui/commit/5dbd54618fd6c91766695426d9c68d799d5a42fd))
- **experimental:** `Sensitive` add new directive ([#5425](https://github.com/taiga-family/taiga-ui/issues/5425))
  ([6cfb5c1](https://github.com/taiga-family/taiga-ui/commit/6cfb5c1ebcfbf8f944ee86d732da6d118a8ad3de))

### Bug Fixes

- **core:** add break word in alert ([#5456](https://github.com/taiga-family/taiga-ui/issues/5456))
  ([efb52ab](https://github.com/taiga-family/taiga-ui/commit/efb52ab9ce669216c2a695f1877966b6bcabb18d))
- **experimental:** `Avatar` with image has redundant gap below itself
  ([#5449](https://github.com/taiga-family/taiga-ui/issues/5449))
  ([fbfd5a4](https://github.com/taiga-family/taiga-ui/commit/fbfd5a4b9d212fb11c32f4a51850a4a21f085329))
- **kit:** `Combobox` return null support for strict matcher
  ([#5441](https://github.com/taiga-family/taiga-ui/issues/5441))
  ([5c5ad77](https://github.com/taiga-family/taiga-ui/commit/5c5ad77d440d112a298438665cbe84bd44e9c1cc))
- **kit:** `InputPhone` fix initial value ([#5438](https://github.com/taiga-family/taiga-ui/issues/5438))
  ([5b240b8](https://github.com/taiga-family/taiga-ui/commit/5b240b84551f8fbe284f571981b877cf4894d307))

## [3.45.0](https://github.com/taiga-family/taiga-ui/compare/v3.44.1...v3.45.0) (2023-09-18)

### Features

- **core:** force use pointer-events auto for dropdown ([#5417](https://github.com/taiga-family/taiga-ui/issues/5417))
  ([e0ccf9d](https://github.com/taiga-family/taiga-ui/commit/e0ccf9d954088db2850fcb8afdf20832f0504844))
- **experimental:** `Button` add new component ([#5416](https://github.com/taiga-family/taiga-ui/issues/5416))
  ([605aaf5](https://github.com/taiga-family/taiga-ui/commit/605aaf58f1cc8d3a35e2e211a353a1c416f4e9a1))
- **experimental:** add new component `Badge` ([#5247](https://github.com/taiga-family/taiga-ui/issues/5247))
  ([9f16da7](https://github.com/taiga-family/taiga-ui/commit/9f16da7f95c4b51b74dd264468b254604697f626))
- **kit:** `CheckboxBlock`/`RadioBlock` add new size ([#5390](https://github.com/taiga-family/taiga-ui/issues/5390))
  ([45731b6](https://github.com/taiga-family/taiga-ui/commit/45731b61e53d62ae9de62aa4df9a176ee87ec06c))

### Bug Fixes

- **addon-commerce:** `Money` causes an extra space ([#5374](https://github.com/taiga-family/taiga-ui/issues/5374))
  ([bcf41b9](https://github.com/taiga-family/taiga-ui/commit/bcf41b944838de48ab4187c9af72d173f911005a))
- **core:** `Dropdown` reset previous position ([#5364](https://github.com/taiga-family/taiga-ui/issues/5364))
  ([e7542dd](https://github.com/taiga-family/taiga-ui/commit/e7542dda57c93a2bf2ca17e16e3b896be2a7469b))
- **core:** don't hide placeholder for input size m ([#5382](https://github.com/taiga-family/taiga-ui/issues/5382))
  ([de88b55](https://github.com/taiga-family/taiga-ui/commit/de88b55321ff370816aea08301e547c9d15d9327))
- **core:** onmouseout events don't trigger when objects move under mouse in Safari
  ([#5406](https://github.com/taiga-family/taiga-ui/issues/5406))
  ([6747a34](https://github.com/taiga-family/taiga-ui/commit/6747a349c4b2a4c2473635d86bb91b4ad0c0df9d))
- **core:** the order of the escape event is important in the dialog service
  ([#5350](https://github.com/taiga-family/taiga-ui/issues/5350))
  ([1e79863](https://github.com/taiga-family/taiga-ui/commit/1e7986326161a9f5c9d43b52d34a105436e346f8))
- **kit:** `InputRange` should not validate `quantum` if textfield is focused
  ([#5401](https://github.com/taiga-family/taiga-ui/issues/5401))
  ([452fc01](https://github.com/taiga-family/taiga-ui/commit/452fc01574ef265b4445012405dd7e897a0f9c28))
- **kit:** `InputSlider` should not validate `quantum` if textfield is focused
  ([#5389](https://github.com/taiga-family/taiga-ui/issues/5389))
  ([2b28fba](https://github.com/taiga-family/taiga-ui/commit/2b28fba99d8e19642c2e617cf5bbc2f002eb175b))
- **kit:** `Progress` fix colors and mode ([#5394](https://github.com/taiga-family/taiga-ui/issues/5394))
  ([8cc1e76](https://github.com/taiga-family/taiga-ui/commit/8cc1e76622a34856f04c47383f0c79c42c9d7c45))
- **kit:** `Select` fix dummy checkmark size ([#5384](https://github.com/taiga-family/taiga-ui/issues/5384))
  ([71cf753](https://github.com/taiga-family/taiga-ui/commit/71cf75366cd1181f01284d8d5f4dcfd7716a21bc))
- **kit:** fix tree programmatic control ([#5370](https://github.com/taiga-family/taiga-ui/issues/5370))
  ([aef8c35](https://github.com/taiga-family/taiga-ui/commit/aef8c353aa03ec11a412ebee21411ec6a67d1b07))
- **kit:** prevent focusing when remove item from multi-select
  ([#5412](https://github.com/taiga-family/taiga-ui/issues/5412))
  ([50a3b41](https://github.com/taiga-family/taiga-ui/commit/50a3b41fb6b0a5f1ad9651bc73156893987cb389))
- **kit:** update a tab when the active index has changed
  ([#5402](https://github.com/taiga-family/taiga-ui/issues/5402))
  ([aef59e0](https://github.com/taiga-family/taiga-ui/commit/aef59e04e37adbd91abcd9deafceddbb33a32a76))

### [3.44.1](https://github.com/taiga-family/taiga-ui/compare/v3.44.0...v3.44.1) (2023-09-12)

### Bug Fixes

- **core:** matchMedia is not a function in SSR ([#5358](https://github.com/taiga-family/taiga-ui/issues/5358))
  ([7c7cfa5](https://github.com/taiga-family/taiga-ui/commit/7c7cfa51f8b6e746c64542543e939abc10e5dd5c))

## [3.44.0](https://github.com/taiga-family/taiga-ui/compare/v3.43.0...v3.44.0) (2023-09-11)

### Features

- **core:** add `TUI_REDUCED_MOTION` ([#5329](https://github.com/taiga-family/taiga-ui/issues/5329))
  ([e684bdc](https://github.com/taiga-family/taiga-ui/commit/e684bdcc221a5f373a810310a1b2c8641cd1eb57))
- **experimental:** `Fade` turn into a directive for easier reuse
  ([#5333](https://github.com/taiga-family/taiga-ui/issues/5333))
  ([6e67e26](https://github.com/taiga-family/taiga-ui/commit/6e67e26e0e889a6655358888419baaf1cfa4ac72))

### Bug Fixes

- **addon-charts:** `BarSet` fix case with all bars negative
  ([#5347](https://github.com/taiga-family/taiga-ui/issues/5347))
  ([98a907f](https://github.com/taiga-family/taiga-ui/commit/98a907f9526aa0dc25eb2db15dac195f6ab6150c))
- **addon-doc:** `Example` should not show tabs if there is only default one (preview)
  ([#5331](https://github.com/taiga-family/taiga-ui/issues/5331))
  ([e651642](https://github.com/taiga-family/taiga-ui/commit/e65164258806294ff237ff5ffba6d9d30750297a))
- **addon-mobile:** remove shadow background in mobile calendar header
  ([#5326](https://github.com/taiga-family/taiga-ui/issues/5326))
  ([c174365](https://github.com/taiga-family/taiga-ui/commit/c17436595d2e49a2af93df14671625d77e5cad8c))
- **addon-table:** `Reorder` fix toggling on/off
  ([b3e7408](https://github.com/taiga-family/taiga-ui/commit/b3e7408c7d5d3396bdd6e5edbd443db7e342dd66))
- **cdk:** `BreakpointService` properly react to window resize
  ([#5345](https://github.com/taiga-family/taiga-ui/issues/5345))
  ([878f7ec](https://github.com/taiga-family/taiga-ui/commit/878f7ecb832b9e4920844d05c1795bcb08003dd7))
- **cdk:** compatibility svg processor with SSR ([#5317](https://github.com/taiga-family/taiga-ui/issues/5317))
  ([f4a1706](https://github.com/taiga-family/taiga-ui/commit/f4a17060c68ef7ed7de72ceeac6e40ca09b993dd))
- **core:** break words in notification ([#5330](https://github.com/taiga-family/taiga-ui/issues/5330))
  ([357837d](https://github.com/taiga-family/taiga-ui/commit/357837da66bcebe4087a9486ce13ed8e55f43e6f))
- **kit:** `InputNumber` ignores native attribute `maxlength`
  ([#5307](https://github.com/taiga-family/taiga-ui/issues/5307))
  ([f3d0c33](https://github.com/taiga-family/taiga-ui/commit/f3d0c335478df303521b2f31f36365034dcb177a))
- **schematics:** do not provide `BrowserAnimationsModule` for standalone application
  ([#5290](https://github.com/taiga-family/taiga-ui/issues/5290))
  ([273f6c1](https://github.com/taiga-family/taiga-ui/commit/273f6c109e4199e54e124716cabe4128b6674c59))
- **schematics:** replace whole icon name instead of substring
  ([#5334](https://github.com/taiga-family/taiga-ui/issues/5334))
  ([cdc0802](https://github.com/taiga-family/taiga-ui/commit/cdc0802fea8d48b05a2d2f16e5cd0c8243b1d0d3))

## [3.43.0](https://github.com/taiga-family/taiga-ui/compare/v3.42.1...v3.43.0) (2023-09-06)

### Features

- **core:** add neutral notification status ([#5248](https://github.com/taiga-family/taiga-ui/issues/5248))
  ([7f7abfd](https://github.com/taiga-family/taiga-ui/commit/7f7abfd73bb81a51d7b0f19fab56fddd93fcd18a))
- **core:** support appearance in dialog ([#5280](https://github.com/taiga-family/taiga-ui/issues/5280))
  ([126d3dd](https://github.com/taiga-family/taiga-ui/commit/126d3ddf4882ff4065651bc287cdd566d466d7f3))

### Bug Fixes

- **addon-commerce:** add `automation-id` for cleaner and dropdown buttons
  ([#5294](https://github.com/taiga-family/taiga-ui/issues/5294))
  ([7f11f52](https://github.com/taiga-family/taiga-ui/commit/7f11f5201148004b81a609688889addfb9d7f87a))
- **addon-mobile:** `SheetDialog` fix scrolling flicker ([#5288](https://github.com/taiga-family/taiga-ui/issues/5288))
  ([e84bf4f](https://github.com/taiga-family/taiga-ui/commit/e84bf4f41d2e76414be74e0e900687f10e355e04))
- **cdk:** add fallback color in svg for old browsers which doesn't support gradients
  ([#5227](https://github.com/taiga-family/taiga-ui/issues/5227))
  ([79af7c2](https://github.com/taiga-family/taiga-ui/commit/79af7c216010c601a3cee831f237b745c2147438))
- **cdk:** schematic error `Attempted to get information from a node that was removed or forgotten`
  ([#5303](https://github.com/taiga-family/taiga-ui/issues/5303))
  ([debf653](https://github.com/taiga-family/taiga-ui/commit/debf653d9caa8ecc71f31f7d4ef85c614ac6204f))
- **core:** drawing correctly the loader ([#5213](https://github.com/taiga-family/taiga-ui/issues/5213))
  ([71de5aa](https://github.com/taiga-family/taiga-ui/commit/71de5aa0fd9f55b78b897d0cefdb542abe52e9b6))
- **core:** overlapped by placeholder in autocomplete mode
  ([#5269](https://github.com/taiga-family/taiga-ui/issues/5269))
  ([a812112](https://github.com/taiga-family/taiga-ui/commit/a8121129aa6dab823888ff8c52fe44e946dca742))
- **kit:** update ticks color for `Slider` & `Range` ([#5266](https://github.com/taiga-family/taiga-ui/issues/5266))
  ([cd934cb](https://github.com/taiga-family/taiga-ui/commit/cd934cb2f48d8cf0cf05ab9923bde58efc1ebe0b))

### [3.42.1](https://github.com/taiga-family/taiga-ui/compare/v3.42.0...v3.42.1) (2023-08-28)

## [3.42.0](https://github.com/taiga-family/taiga-ui/compare/v2.99.0...v3.42.0) (2023-08-28)

### Features

- **addon-commerce:** rename `tui-card` to `tui-thumbnail-card`
  ([#5171](https://github.com/taiga-family/taiga-ui/issues/5171))
  ([331bed1](https://github.com/taiga-family/taiga-ui/commit/331bed1f26ab361f01c847dfdbea2969015b860b))
- **addon-doc:** support remote url for code source ([#5200](https://github.com/taiga-family/taiga-ui/issues/5200))
  ([ee528fa](https://github.com/taiga-family/taiga-ui/commit/ee528fa25b0217d4522c9656ad3dce6eb6768649))
- **core:** load icons relative base url ([#5203](https://github.com/taiga-family/taiga-ui/issues/5203))
  ([19d3440](https://github.com/taiga-family/taiga-ui/commit/19d3440ed612bfece3c83715a247aa562b996be1))
- **experimental:** add pin ([#5185](https://github.com/taiga-family/taiga-ui/issues/5185))
  ([882266f](https://github.com/taiga-family/taiga-ui/commit/882266f2e7e48b708af9f029869ab0f628c35ad3))
- **kit:** `Tiles` maintain dragged position when page is scrolled
  ([#5155](https://github.com/taiga-family/taiga-ui/issues/5155))
  ([7a8a13e](https://github.com/taiga-family/taiga-ui/commit/7a8a13e3ac7ea7d9dcee257fe36015574152c1eb))

### Bug Fixes

- **schematics:** migrate wysiwyg icons ([#5216](https://github.com/taiga-family/taiga-ui/issues/5216))
  ([b639479](https://github.com/taiga-family/taiga-ui/commit/b639479fc2800fa1a063309eab8e438f5d1ce7f6))

### [3.41.1](https://github.com/taiga-family/taiga-ui/compare/v3.41.0...v3.41.1) (2023-08-16)

### Bug Fixes

- **addon-preview:** export tokens as public api ([#5118](https://github.com/taiga-family/taiga-ui/issues/5118))
  ([4e34eb6](https://github.com/taiga-family/taiga-ui/commit/4e34eb625627effea2459c4c6da8380cb27cda1e))

## [3.41.0](https://github.com/taiga-family/taiga-ui/compare/v3.40.0...v3.41.0) (2023-08-15)

### Features

- **addon-mobile:** `TabBar` add skeletons for empty state
  ([#5073](https://github.com/taiga-family/taiga-ui/issues/5073))
  ([ccf2a81](https://github.com/taiga-family/taiga-ui/commit/ccf2a81bab29fbbab7f24d8ce804401f13efafcd))
- **core:** `Alerts` customize position ([#5072](https://github.com/taiga-family/taiga-ui/issues/5072))
  ([9bd8221](https://github.com/taiga-family/taiga-ui/commit/9bd822136cf2b1cf62d9ab513774a8bfea2a4260))
- **core:** `Dropdown` add directive to force control and monitor open state
  ([#5059](https://github.com/taiga-family/taiga-ui/issues/5059))
  ([b4643a8](https://github.com/taiga-family/taiga-ui/commit/b4643a8eb432daf9fde46482deec27c6582059e4))
- **kit:** new sizes for `ProgressBar` ([#5051](https://github.com/taiga-family/taiga-ui/issues/5051))
  ([926eadb](https://github.com/taiga-family/taiga-ui/commit/926eadbc55d880b83191f5037e00e1dec705fd7f))

### Bug Fixes

- **addon-commerce:** move `tuiGetCodeByCurrency` to public API
  ([#5075](https://github.com/taiga-family/taiga-ui/issues/5075))
  ([fda819a](https://github.com/taiga-family/taiga-ui/commit/fda819a667e8ee33d9a2d72e2817b30cdd397c2f))
- **i18n:** incorrect french translation for Bulgaria country name
  ([#5063](https://github.com/taiga-family/taiga-ui/issues/5063))
  ([c77e6b0](https://github.com/taiga-family/taiga-ui/commit/c77e6b0345f2b7a8e5de5ed9a8f990d20176760e))
- **kit:** `InputYear` should update text field value after selection from dropdown
  ([#5100](https://github.com/taiga-family/taiga-ui/issues/5100))
  ([70c4778](https://github.com/taiga-family/taiga-ui/commit/70c47784de1c140410876fff2b7951719c77ddf4))
- **kit:** paddings in MultiSelectGroups with lable ([#5026](https://github.com/taiga-family/taiga-ui/issues/5026))
  ([b8d15d7](https://github.com/taiga-family/taiga-ui/commit/b8d15d7a43d13b4c1c1195246c6c8689c07d6a61))
- **kit:** wrong compilation for `tui-text-area` ([#5104](https://github.com/taiga-family/taiga-ui/issues/5104))
  ([f82bb42](https://github.com/taiga-family/taiga-ui/commit/f82bb42b0e6c67d27f03e8dab40ae8d8ae8897c9))

## [3.40.0](https://github.com/taiga-family/taiga-ui/compare/v3.39.1...v3.40.0) (2023-08-08)

### Features

- **icons:** make the rest of components icons customizable
  ([#5046](https://github.com/taiga-family/taiga-ui/issues/5046))
  ([cc0828e](https://github.com/taiga-family/taiga-ui/commit/cc0828ec82bf2c1a5fcad7f415d381a3091a6800))
- **kit:** `InputNumber` add value transformer token ([#5033](https://github.com/taiga-family/taiga-ui/issues/5033))
  ([96c3b67](https://github.com/taiga-family/taiga-ui/commit/96c3b677cb38f01aff834a204298caf9cf7f79f4))
- **kit:** `Pagination` add smaller size ([#5021](https://github.com/taiga-family/taiga-ui/issues/5021))
  ([18ac180](https://github.com/taiga-family/taiga-ui/commit/18ac180fba420314d8f05e81e6658e98a528de1f))
- **kit:** add alias `tui-textarea` for `tui-text-area` ([#5020](https://github.com/taiga-family/taiga-ui/issues/5020))
  ([70f4a9d](https://github.com/taiga-family/taiga-ui/commit/70f4a9df194740c84f9cfc421a8bd10f708c4861))

### Bug Fixes

- **cdk:** include `tds` packages for update ([#5034](https://github.com/taiga-family/taiga-ui/issues/5034))
  ([f1f5d6d](https://github.com/taiga-family/taiga-ui/commit/f1f5d6d7ab96f137fd6e55434f0b6ff6f629e5f7))
- **eslint-plugin:** ignore naming convention for apps directory
  ([#5042](https://github.com/taiga-family/taiga-ui/issues/5042))
  ([7fb156c](https://github.com/taiga-family/taiga-ui/commit/7fb156ca1b783f52118a27e9723853eaea07f71f))
- **kit:** `ProgressCircle` should show empty circle if `max=0`
  ([#5050](https://github.com/taiga-family/taiga-ui/issues/5050))
  ([aa2f133](https://github.com/taiga-family/taiga-ui/commit/aa2f133a4d7f6f0ecfacab43cecaba4d40351665))

### [3.39.1](https://github.com/taiga-family/taiga-ui/compare/v3.39.0...v3.39.1) (2023-08-01)

### Features

- **cdk:** add array of icons, used in taiga components ([#5005](https://github.com/taiga-family/taiga-ui/issues/5005))
  ([c989f60](https://github.com/taiga-family/taiga-ui/commit/c989f60613de3213f334d992a209bdae7a15178d))

### Bug Fixes

- **kit:** revert alias `tui-textarea` for `tui-text-area`
  ([#5015](https://github.com/taiga-family/taiga-ui/issues/5015))
  ([b801d59](https://github.com/taiga-family/taiga-ui/commit/b801d5941160f71e643ee9affe9c0c59c6b2cd93))

## [3.39.0](https://github.com/taiga-family/taiga-ui/compare/v3.37.0...v3.39.0) (2023-07-31)

### Features

- **addon-mobile:** `SheetDialog` add new dialog ([#4975](https://github.com/taiga-family/taiga-ui/issues/4975))
  ([39d1b62](https://github.com/taiga-family/taiga-ui/commit/39d1b62ba94dad012d46573f8a8273c81b737c36))
- **i18n:** switch to power of 2 for file size display ([#4998](https://github.com/taiga-family/taiga-ui/issues/4998))
  ([65c3e66](https://github.com/taiga-family/taiga-ui/commit/65c3e66f0f92c9546e82c976a13feeb1f03b921d))
- **kit:** add alias `tui-textarea` for `tui-text-area` ([#4876](https://github.com/taiga-family/taiga-ui/issues/4876))
  ([bd8a319](https://github.com/taiga-family/taiga-ui/commit/bd8a319c17c5427ed7e802fdbacd728e270abec2))
- **schematics:** include `*.sass,scss,css` files for replace string
  ([#4979](https://github.com/taiga-family/taiga-ui/issues/4979))
  ([0d89620](https://github.com/taiga-family/taiga-ui/commit/0d89620d2448054bf40f1175ca74216ac69d5190))

### Bug Fixes

- **addon-commerce:** correct comparison of months for expiry date
  ([#4974](https://github.com/taiga-family/taiga-ui/issues/4974))
  ([eb5887f](https://github.com/taiga-family/taiga-ui/commit/eb5887f23a634d3350f0b5ed76d7849b1a7153f5))
- **core:** `Hint` fix positioning near the right edge of the viewport
  ([#5001](https://github.com/taiga-family/taiga-ui/issues/5001))
  ([6fcb214](https://github.com/taiga-family/taiga-ui/commit/6fcb214e239be1aff366a35043bf4662f7b464f9))
- **core:** pinned `i18n` dependency ([#4970](https://github.com/taiga-family/taiga-ui/issues/4970))
  ([001ccdd](https://github.com/taiga-family/taiga-ui/commit/001ccdd87ebbcedeb238cf04c06ed22ddf242c46))
- **kit:** `InputDateTime`'s min/max inputs should receive null
  ([#4847](https://github.com/taiga-family/taiga-ui/issues/4847))
  ([#4848](https://github.com/taiga-family/taiga-ui/issues/4848))
  ([00b3ce3](https://github.com/taiga-family/taiga-ui/commit/00b3ce3122e7c547c138b614202714f52b8fb79c))

## [3.38.0](https://github.com/taiga-family/taiga-ui/compare/v3.37.0...v3.38.0) (2023-07-25)

### Features

- **core:** `Notification` add sizes ([#4971](https://github.com/taiga-family/taiga-ui/issues/4971))
  ([6250adf](https://github.com/taiga-family/taiga-ui/commit/6250adfc7314fc7381555979f7145a78415eb2a8))

### Bug Fixes

- **core:** `Textfield` straighten up icons spacings ([#4898](https://github.com/taiga-family/taiga-ui/issues/4898))
  ([939769c](https://github.com/taiga-family/taiga-ui/commit/939769c18969ddf39d5169a6528087719660059b))
- **eslint-plugin:** disable `@angular-eslint/component-selector` rule
  ([#4943](https://github.com/taiga-family/taiga-ui/issues/4943))
  ([c0e2b87](https://github.com/taiga-family/taiga-ui/commit/c0e2b8720c0468a9d40e9538349f1ddde81d7fa8))
- **eslint-plugin:** disable `@angular-eslint/use-component-selector` rule
  ([#4948](https://github.com/taiga-family/taiga-ui/issues/4948))
  ([13e7314](https://github.com/taiga-family/taiga-ui/commit/13e731422281c4f87a99870e1aee3668f1dd681a))
- **kit:** `InputDateTime` should place caret before time after selection of a new date via calendar
  ([#4942](https://github.com/taiga-family/taiga-ui/issues/4942))
  ([89ec469](https://github.com/taiga-family/taiga-ui/commit/89ec469ab843ff54376214e48cd3d52290efac60))
- **kit:** BadgedContent badge misaligned inside flex parent
  ([#4961](https://github.com/taiga-family/taiga-ui/issues/4961))
  ([1688eaa](https://github.com/taiga-family/taiga-ui/commit/1688eaaf6bc4d889e0fdd8c79cbb560c510d91c9))

## [3.37.0](https://github.com/taiga-family/taiga-ui/compare/v3.36.2...v3.37.0) (2023-07-18)

### Features

- **addon-commerce:** add currencies ([#4910](https://github.com/taiga-family/taiga-ui/issues/4910))
  ([405314e](https://github.com/taiga-family/taiga-ui/commit/405314e4c19540b81cbe2770b6d6425ab1f539e0))

### Bug Fixes

- **addon-preview:** fix centering when zooming with slider
  ([#4893](https://github.com/taiga-family/taiga-ui/issues/4893))
  ([a268064](https://github.com/taiga-family/taiga-ui/commit/a26806424dfeecaeba1ebacf81db0d7c0e832e6d))
- **kit:** `LineClamp` recalculate size on hover ([#4906](https://github.com/taiga-family/taiga-ui/issues/4906))
  ([2debc55](https://github.com/taiga-family/taiga-ui/commit/2debc555f328c6cd2ce676ac09ba6ea9ec0bbeee))
- **kit:** change button appearance for `Files` ([#4926](https://github.com/taiga-family/taiga-ui/issues/4926))
  ([1e15be5](https://github.com/taiga-family/taiga-ui/commit/1e15be5198f56ba2b74dfa76d0c9d346c21288d9))
- **kit:** update `TUI_COUNTRIES_MASKS` (`InputPhoneInternational`) for Argentina
  ([#4891](https://github.com/taiga-family/taiga-ui/issues/4891))
  ([1d931df](https://github.com/taiga-family/taiga-ui/commit/1d931dfead6346ab2eb3365578dea202c5504635))

### [3.36.2](https://github.com/taiga-family/taiga-ui/compare/v3.36.1...v3.36.2) (2023-07-12)

### Features

- **core:** allow hierarchical DI options for components ([#4892](https://github.com/taiga-family/taiga-ui/issues/4892))
  ([01e7067](https://github.com/taiga-family/taiga-ui/commit/01e7067b3ed514c7e138613846da2235b4cdb619))

### Bug Fixes

- **cdk:** `ScrollService` fix final position ([#4887](https://github.com/taiga-family/taiga-ui/issues/4887))
  ([fb1946d](https://github.com/taiga-family/taiga-ui/commit/fb1946dddf16c43f79fe4020423883e9809389e2))
- **schematics:** `@tinkoff/tui-editor` should be installed after migration
  ([#4900](https://github.com/taiga-family/taiga-ui/issues/4900))
  ([7755254](https://github.com/taiga-family/taiga-ui/commit/77552542edf3afb6b5848efd483b86a50cd5a1bf))

### [3.36.1](https://github.com/taiga-family/taiga-ui/compare/v3.36.0...v3.36.1) (2023-07-11)

### Bug Fixes

- **cdk:** fix some icons in icon migration ([#4888](https://github.com/taiga-family/taiga-ui/issues/4888))
  ([8b9105c](https://github.com/taiga-family/taiga-ui/commit/8b9105c34661a18c1fca25c2c56f7947bd66c849))

## [3.36.0](https://github.com/taiga-family/taiga-ui/compare/v3.35.0...v3.36.0) (2023-07-10)

### Features

- **cdk:** add schematics for migrate `@taiga-ui/addon-editor` to `@tinkoff/tui-editor`
  ([#4870](https://github.com/taiga-family/taiga-ui/issues/4870))
  ([5f40437](https://github.com/taiga-family/taiga-ui/commit/5f40437ecb6e0dbc7ad560b0430615b57c83e4d6))
- **core:** support nullability in `src` property ([#4877](https://github.com/taiga-family/taiga-ui/issues/4877))
  ([8b0667f](https://github.com/taiga-family/taiga-ui/commit/8b0667fc5002c97051926649543af5e89fe6c842))
- **eslint-config:** add custom configs for reuse in another projects
  ([#4869](https://github.com/taiga-family/taiga-ui/issues/4869))
  ([c228895](https://github.com/taiga-family/taiga-ui/commit/c228895642f625b2e6a4a4f40a0d4737ba368639))
- **kit:** `InputCopy` add DI options ([#4868](https://github.com/taiga-family/taiga-ui/issues/4868))
  ([f0a2f83](https://github.com/taiga-family/taiga-ui/commit/f0a2f8393bc0020dff9f37bf48ed495f70fe616b))
- **kit:** `Tag` update styles ([#4830](https://github.com/taiga-family/taiga-ui/issues/4830))
  ([ef37091](https://github.com/taiga-family/taiga-ui/commit/ef37091287d9659253f61090997319d736ed176b))
- **kit:** fix circular dependency error `TuiInputFilesDirective` and `TuiInputFilesComponent` with UMD bundle
  ([#4880](https://github.com/taiga-family/taiga-ui/issues/4880))
  ([691109f](https://github.com/taiga-family/taiga-ui/commit/691109f9f8d28bf3a4ee63d752e8131c70b25583))

### Bug Fixes

- **core:** `DataList` properly size `emptyContent` ([#4856](https://github.com/taiga-family/taiga-ui/issues/4856))
  ([a0208cf](https://github.com/taiga-family/taiga-ui/commit/a0208cfb65f02f5ba9d5ccca5f506f07dc34224d))
- **core:** `Root` set body background ([#4867](https://github.com/taiga-family/taiga-ui/issues/4867))
  ([e831296](https://github.com/taiga-family/taiga-ui/commit/e8312960d024a448419791404dfa62e7ac07c44e))
- **kit:** `InputInline` fix width calculation ([#4878](https://github.com/taiga-family/taiga-ui/issues/4878))
  ([7518bf8](https://github.com/taiga-family/taiga-ui/commit/7518bf81e87181a4042acd86e29c232a2af335c4))
- **testing:** export `tuiAddSnapshotPlugin` by default ([#4846](https://github.com/taiga-family/taiga-ui/issues/4846))
  ([0d632ee](https://github.com/taiga-family/taiga-ui/commit/0d632ee27c9a70e7bbfba65269bb6254d08e1a0b))

### Deprecations

- **addon-editor:** replace to `@tinkoff/tui-editor` ([#4883](https://github.com/taiga-family/taiga-ui/issues/4883))
  ([27fcf52](https://github.com/taiga-family/taiga-ui/commit/27fcf526414f7aa896fd91022518beb5e40e336c))

## [3.35.0](https://github.com/taiga-family/taiga-ui/compare/v3.34.0...v3.35.0) (2023-07-03)

### Features

- **addon-editor:** support `controlList` in `video/audio`
  ([#4827](https://github.com/taiga-family/taiga-ui/issues/4827))
  ([ee5fd65](https://github.com/taiga-family/taiga-ui/commit/ee5fd652b8c6eadb080b9858caa73c860b25bcb0))
- **cdk:** `schematics` add proprietary-icons migration ([#4811](https://github.com/taiga-family/taiga-ui/issues/4811))
  ([0b7d2de](https://github.com/taiga-family/taiga-ui/commit/0b7d2de2698e7acb5478f149807f7eb73e106aa1))
- **core:** `Alert` add new directive ([#4815](https://github.com/taiga-family/taiga-ui/issues/4815))
  ([816759f](https://github.com/taiga-family/taiga-ui/commit/816759f75b47fbc3e28e98df3fae2f13f50ecb92))
- **core:** `Dropdown` add appearance option ([#4795](https://github.com/taiga-family/taiga-ui/issues/4795))
  ([0bb3d0c](https://github.com/taiga-family/taiga-ui/commit/0bb3d0c220957427df322b9aa2a08aaa453c7f08))
- **kit:** `InputNumber` uses `Maskito` instead of legacy `text-mask`
  ([#4725](https://github.com/taiga-family/taiga-ui/issues/4725))
  ([7518431](https://github.com/taiga-family/taiga-ui/commit/7518431ec61cefb55bbef2172b63d5b243e1f496))
- **kit:** `Toggle` add `appearances` to options ([#4818](https://github.com/taiga-family/taiga-ui/issues/4818))
  ([a5e1574](https://github.com/taiga-family/taiga-ui/commit/a5e157470501c08580fb2a41c4ea5625ccf31015))
- **kit:** `Tree` add trackBy input ([#4626](https://github.com/taiga-family/taiga-ui/issues/4626))
  ([#4821](https://github.com/taiga-family/taiga-ui/issues/4821))
  ([9fd8d61](https://github.com/taiga-family/taiga-ui/commit/9fd8d610f6160477c11f760c75b6250411edb496))

### Bug Fixes

- **addon-editor:** blinking caret doesn't appear in first item in list
  ([#4785](https://github.com/taiga-family/taiga-ui/issues/4785))
  ([c8df8d8](https://github.com/taiga-family/taiga-ui/commit/c8df8d89cf6a8afc2138c25ab06973976debecc0))
- **addon-mobile:** `PullToRefresh` remove transform CSS ([#4799](https://github.com/taiga-family/taiga-ui/issues/4799))
  ([26bc6aa](https://github.com/taiga-family/taiga-ui/commit/26bc6aa0db23dd6698e97ad1adbfd719ba8ba7bf))
- **addon-mobile:** `Sheet` fix premature closing ([#4806](https://github.com/taiga-family/taiga-ui/issues/4806))
  ([3dd042a](https://github.com/taiga-family/taiga-ui/commit/3dd042a37b1e065380405001c93da7eb2aae61a9))
- **addon-table:** fix z-index for 2-dimensional sticky tables
  ([#4796](https://github.com/taiga-family/taiga-ui/issues/4796))
  ([c294c82](https://github.com/taiga-family/taiga-ui/commit/c294c82c6d6ab9ddc93a0f5c444c6f8ee7d05ba8))
- **cdk:** `ng-add` fix adding providers in standalone app with config (nx 16+ default)
  ([#4794](https://github.com/taiga-family/taiga-ui/issues/4794))
  ([c0d2bfb](https://github.com/taiga-family/taiga-ui/commit/c0d2bfb5a362f5cb5c76eb5e7f3c7e87f69a13dd))
- **cdk:** `TuiStaticRequestService` should be throw error when response code is not `200`
  ([#4787](https://github.com/taiga-family/taiga-ui/issues/4787))
  ([df27b27](https://github.com/taiga-family/taiga-ui/commit/df27b27650718a472777312d612b4796e321a08d))
- **core:** `DropdownHover` allow nested `HostedDropdown`
  ([#4823](https://github.com/taiga-family/taiga-ui/issues/4823))
  ([105c0fc](https://github.com/taiga-family/taiga-ui/commit/105c0fc0cfc6597cb3ae3a423bdbbcff9e6028ca))
- **kit:** `Checkbox`/`Radio` properly react to mode ([#4797](https://github.com/taiga-family/taiga-ui/issues/4797))
  ([565ad88](https://github.com/taiga-family/taiga-ui/commit/565ad8830df9e64603316920fb974bba1ed2acd6))
- **kit:** `MultiSelect` fix `valueContent` overflow ([#4824](https://github.com/taiga-family/taiga-ui/issues/4824))
  ([57239e2](https://github.com/taiga-family/taiga-ui/commit/57239e2c239cc818363fec0cadcd145d913b06d3))
- **kit:** `Tabs` fix dropdown styles ([#4814](https://github.com/taiga-family/taiga-ui/issues/4814))
  ([3c0ce9d](https://github.com/taiga-family/taiga-ui/commit/3c0ce9dd2b83f27d37fc8b3fd8c3d809135c39b2))

## [3.34.0](https://github.com/taiga-family/taiga-ui/compare/v3.33.1...v3.34.0) (2023-06-27)

### Features

- **addon-editor:** `ColorSelector` uses `Maskito` instead of legacy `text-mask`
  ([#4774](https://github.com/taiga-family/taiga-ui/issues/4774))
  ([6f4528c](https://github.com/taiga-family/taiga-ui/commit/6f4528cdf0ea13133c29f12942f20955ea13325c))
- **cdk:** adding support ECMA Decorators for `[@tui](https://github.com/tui)Pure`
  ([#4730](https://github.com/taiga-family/taiga-ui/issues/4730))
  ([a0b275c](https://github.com/taiga-family/taiga-ui/commit/a0b275c6980779a8bb86b756bb422d08afbf9923))
- **core:** deprecate `[@tui](https://github.com/tui)DefaultProp`, `[@tui](https://github.com/tui)RequiredSetter`,
  `[@tui](https://github.com/tui)Debounce` ([#4737](https://github.com/taiga-family/taiga-ui/issues/4737))
  ([11fb027](https://github.com/taiga-family/taiga-ui/commit/11fb027cefeee9b1839efc91cbdfb7df0c2eb695))
- **kit:** `Breadcrumbs` add DI customization ([#4771](https://github.com/taiga-family/taiga-ui/issues/4771))
  ([7e01b6e](https://github.com/taiga-family/taiga-ui/commit/7e01b6e16994f2b7200d775b28aca3bb1a8931d7))

### Bug Fixes

- `tuiSlot` extend type with a string ([#4779](https://github.com/taiga-family/taiga-ui/issues/4779))
  ([1c112e8](https://github.com/taiga-family/taiga-ui/commit/1c112e8578e2ca13fbe66a6621465e6650f70883))
- **addon-charts:** `RingChart` fix mask url ([#4777](https://github.com/taiga-family/taiga-ui/issues/4777))
  ([d33887b](https://github.com/taiga-family/taiga-ui/commit/d33887b4a883813356d54ed9ea9370246c672c70))

### [3.33.1](https://github.com/taiga-family/taiga-ui/compare/v3.33.0...v3.33.1) (2023-06-23)

### Features

- **kit:** `Multiselect` add ability to use objects in native select
  ([#4733](https://github.com/taiga-family/taiga-ui/issues/4733))
  ([88bc03d](https://github.com/taiga-family/taiga-ui/commit/88bc03d6e83633d8c839669faa030bd3dcb6b41a))

### Bug Fixes

- **addon-commerce:** hide input filler in dark mode ([#4756](https://github.com/taiga-family/taiga-ui/issues/4756))
  ([f03187a](https://github.com/taiga-family/taiga-ui/commit/f03187a3794a014c41d91cbf20a62bf4358a41ae))
- **addon-mobile:** `MobileCalendar` fix initial view ([#4755](https://github.com/taiga-family/taiga-ui/issues/4755))
  ([aa0887c](https://github.com/taiga-family/taiga-ui/commit/aa0887c463640789acd293242b05c3fb9ccb43c3))

## [3.33.0](https://github.com/taiga-family/taiga-ui/compare/v3.32.0...v3.33.0) (2023-06-22)

### Features

- **kit:** `InputMonth` add ability to use native picker on mobile
  ([#4709](https://github.com/taiga-family/taiga-ui/issues/4709))
  ([9827b6b](https://github.com/taiga-family/taiga-ui/commit/9827b6bbb09cebc1017332042218cccfd6efd9e9))

### Bug Fixes

- **addon-commerce:** expired field should be clickable after reset of prefilled value
  ([#4740](https://github.com/taiga-family/taiga-ui/issues/4740))
  ([9734127](https://github.com/taiga-family/taiga-ui/commit/973412711871843aa59af462202bd250771d3e47))
- **addon-editor:** fix distance between toolbar and content without label
  ([#4701](https://github.com/taiga-family/taiga-ui/issues/4701))
  ([6f63bb8](https://github.com/taiga-family/taiga-ui/commit/6f63bb824959350dc7975b71d79d49a34a944bb3))
- **addon-editor:** prevent erasing history on empty value
  ([#4721](https://github.com/taiga-family/taiga-ui/issues/4721))
  ([7b77e9e](https://github.com/taiga-family/taiga-ui/commit/7b77e9e0d1076ce56db8d498a4cf8bb4bcc00cbe))
- **addon-mobile:** `MobileTabs` update iOS design ([#4722](https://github.com/taiga-family/taiga-ui/issues/4722))
  ([77a03fe](https://github.com/taiga-family/taiga-ui/commit/77a03fec2bc03c03f728ec53760b1bff27e812a3))
- **addon-mobile:** `PullToRefresh` properly disable when no component was provided
  ([#4745](https://github.com/taiga-family/taiga-ui/issues/4745))
  ([f58c623](https://github.com/taiga-family/taiga-ui/commit/f58c623cb090523270816a40118d52a947eabe45))
- **core:** `Dropdown` fix cyclic freeze ([#4750](https://github.com/taiga-family/taiga-ui/issues/4750))
  ([4d8e6c9](https://github.com/taiga-family/taiga-ui/commit/4d8e6c9997e80e512b20bcf873c2990a1196a5a2))
- **core:** `HintPointer` fix initial position ([#4708](https://github.com/taiga-family/taiga-ui/issues/4708))
  ([b65208a](https://github.com/taiga-family/taiga-ui/commit/b65208af5e84f14012ab7475c11ce0b532e604f5))
- **core:** `Textfield` fix label font size ([#4727](https://github.com/taiga-family/taiga-ui/issues/4727))
  ([82bbd49](https://github.com/taiga-family/taiga-ui/commit/82bbd494f601518b072141f7f00e0a79e55d978b))
- **kit:** `DataListWrapper` extend content to full width
  ([#4718](https://github.com/taiga-family/taiga-ui/issues/4718))
  ([36656e6](https://github.com/taiga-family/taiga-ui/commit/36656e654449f8701ef4434778b0d39796693b58))

## [3.32.0](https://github.com/taiga-family/taiga-ui/compare/v3.31.1...v3.32.0) (2023-06-19)

### Features

- **addon-doc:** support `fragment` in navigation links ([#4673](https://github.com/taiga-family/taiga-ui/issues/4673))
  ([ecb1c11](https://github.com/taiga-family/taiga-ui/commit/ecb1c117235463b162d3a3747cd2bd51fa8f96f4))
- **addon-editor:** support `translate/spellcheck` option in editor DI
  ([#4688](https://github.com/taiga-family/taiga-ui/issues/4688))
  ([98df5c5](https://github.com/taiga-family/taiga-ui/commit/98df5c533b2b947a10f8aebb540943bc7ae991c7))
- **addon-editor:** support custom fontSize tool ([#4670](https://github.com/taiga-family/taiga-ui/issues/4670))
  ([74d1efe](https://github.com/taiga-family/taiga-ui/commit/74d1efecfe7126db13753095812efaefd107d138))
- **cdk:** do not overlap close buttons in nested dialogs
  ([#4640](https://github.com/taiga-family/taiga-ui/issues/4640))
  ([e174fe2](https://github.com/taiga-family/taiga-ui/commit/e174fe2b2e23d9b66f63a4e33ada1757a9bc6601))
- **cdk:** support `TUI_AUTOFOCUS_OPTIONS` ([#4650](https://github.com/taiga-family/taiga-ui/issues/4650))
  ([e1a3013](https://github.com/taiga-family/taiga-ui/commit/e1a30130a71be08be8bad71dd1530a7281010bfb))

### Bug Fixes

- **cdk:** `schematics` add schematic templates to exclusion patterns
  ([#4675](https://github.com/taiga-family/taiga-ui/issues/4675))
  ([51a2535](https://github.com/taiga-family/taiga-ui/commit/51a25351c47c6cb476e57516eb58365a045fff5e))
- **kit:** `MultiSelectGroup` fix label alignment ([#4686](https://github.com/taiga-family/taiga-ui/issues/4686))
  ([1e3aba8](https://github.com/taiga-family/taiga-ui/commit/1e3aba813f4a1087876ec26bf07425348ab8d370))
- **kit:** `ProgressCircle` fix initial animation ([#4682](https://github.com/taiga-family/taiga-ui/issues/4682))
  ([efdf144](https://github.com/taiga-family/taiga-ui/commit/efdf144c3dd15cf7c1a89cfb737530e1ffee9089))
- **kit:** prevent min rate star selection ([#4680](https://github.com/taiga-family/taiga-ui/issues/4680))
  ([c29e0e8](https://github.com/taiga-family/taiga-ui/commit/c29e0e8cb428c234586b2a098193ccbd0cdb8c96))
- **kit:** prevent overflow first character inside `InputInlineComponent`
  ([#4647](https://github.com/taiga-family/taiga-ui/issues/4647))
  ([d82dbd7](https://github.com/taiga-family/taiga-ui/commit/d82dbd7d39918a5c093a5d958e1bebed6f66d97c))

### [3.31.1](https://github.com/taiga-family/taiga-ui/compare/v3.31.0...v3.31.1) (2023-06-15)

### Bug Fixes

- **addon-commerce:** `Money` fix integer part rounding ([#4659](https://github.com/taiga-family/taiga-ui/issues/4659))
  ([95207c2](https://github.com/taiga-family/taiga-ui/commit/95207c253f321251be462d222e55db2471677c20))
- **core:** `NumberFormat` fix assertion warning ([#4665](https://github.com/taiga-family/taiga-ui/issues/4665))
  ([8d483ce](https://github.com/taiga-family/taiga-ui/commit/8d483ce1c92448f28487d6a0653eea2d6860042b))
- **kit:** `InputDateRange` freezes UI if `[minLength]`/`[maxLength]` are ommited
  ([#4671](https://github.com/taiga-family/taiga-ui/issues/4671))
  ([c41d568](https://github.com/taiga-family/taiga-ui/commit/c41d5688bb7c20639012338423250e0bf9c62a00))
- **kit:** `MultiSelectGroup` fix padding when used without label
  ([#4648](https://github.com/taiga-family/taiga-ui/issues/4648))
  ([b8967b1](https://github.com/taiga-family/taiga-ui/commit/b8967b134290f6a3a0f53bb331b91c6e39037dea))

## [3.31.0](https://github.com/taiga-family/taiga-ui/compare/v3.30.0...v3.31.0) (2023-06-13)

### Features

- **addon-doc:** upgrade `ngx-highlightjs` ([#4608](https://github.com/taiga-family/taiga-ui/issues/4608))
  ([63cef10](https://github.com/taiga-family/taiga-ui/commit/63cef1023c201224ccd8db27a7bc0b492376d4c4))
- **addon-editor:** support all heading levels by default
  ([#4615](https://github.com/taiga-family/taiga-ui/issues/4615))
  ([59a30c2](https://github.com/taiga-family/taiga-ui/commit/59a30c2e42771a71ebf31f74d56dbf903da40cae))
- **addon-editor:** support any font-size in editor ([#4624](https://github.com/taiga-family/taiga-ui/issues/4624))
  ([eb19c62](https://github.com/taiga-family/taiga-ui/commit/eb19c62d89895c401e96d4d9e9e9ef165e8de82a))
- **addon-editor:** use `icon` for preview type of links in edit mode
  ([#4646](https://github.com/taiga-family/taiga-ui/issues/4646))
  ([a735d54](https://github.com/taiga-family/taiga-ui/commit/a735d5461d1cbdec43a19338181359a058934e7e))
- **core:** svg source interceptor should accept svg global options
  ([#4597](https://github.com/taiga-family/taiga-ui/issues/4597))
  ([7e6e17f](https://github.com/taiga-family/taiga-ui/commit/7e6e17fc572f5bb6bccd05f378d5ab85c1fa8e3d))

### Bug Fixes

- **addon-editor:** prevent paste `undefined` in url ([#4645](https://github.com/taiga-family/taiga-ui/issues/4645))
  ([a6c8e2e](https://github.com/taiga-family/taiga-ui/commit/a6c8e2efba69d43a6cb0215b174f4f5d891c7af2))
- **cdk:** fix change detection issue in `DialogHost` ([#4622](https://github.com/taiga-family/taiga-ui/issues/4622))
  ([bd0762a](https://github.com/taiga-family/taiga-ui/commit/bd0762a473eb9032cdb13583ec3553e1c3d74618))
- **cdk:** fix icons migration, improve performance ([#4620](https://github.com/taiga-family/taiga-ui/issues/4620))
  ([37e51dd](https://github.com/taiga-family/taiga-ui/commit/37e51dd5e6f738af44c84987f6d70b5a3b8fce27))
- **cdk:** using trackBy for re-order animations ([#4632](https://github.com/taiga-family/taiga-ui/issues/4632))
  ([29d039e](https://github.com/taiga-family/taiga-ui/commit/29d039e47df5eb130677fd182d7aa48f73d60c42))
- **core:** clear `cache string` when checking `source` path is `url` path
  ([#4623](https://github.com/taiga-family/taiga-ui/issues/4623))
  ([ec65348](https://github.com/taiga-family/taiga-ui/commit/ec6534833e619c99039b5e7d70c22cbae0b7d3d4))
- **kit:** pack items around the center in checkbox ([#4644](https://github.com/taiga-family/taiga-ui/issues/4644))
  ([eceb6f9](https://github.com/taiga-family/taiga-ui/commit/eceb6f9d6af379d7f99a4ac1dfceff198663cb1a))

## [3.30.0](https://github.com/taiga-family/taiga-ui/compare/v3.29.2...v3.30.0) (2023-06-05)

### Features

- **addon-editor:** support image as anchor ([#4428](https://github.com/taiga-family/taiga-ui/issues/4428))
  ([76845b4](https://github.com/taiga-family/taiga-ui/commit/76845b41dfc9f2c761c14143c57a09ab2a70ae09))
- **addon-mobile:** `PullToRefresh` use `TUI_SCROLL_REF` ([#4571](https://github.com/taiga-family/taiga-ui/issues/4571))
  ([2a207b6](https://github.com/taiga-family/taiga-ui/commit/2a207b668196b81c2dd8c6ce8066a3b9ed2d745d))
- **kit:** `InputPhone` uses `Maskito` instead of legacy `text-mask`
  ([#4555](https://github.com/taiga-family/taiga-ui/issues/4555))
  ([5f6b484](https://github.com/taiga-family/taiga-ui/commit/5f6b48433097b9aa41857ad7282cd714ac25dad1))
- **kit:** `ProgressCircle` design improvements ([#4577](https://github.com/taiga-family/taiga-ui/issues/4577))
  ([2b94f6f](https://github.com/taiga-family/taiga-ui/commit/2b94f6f0e233c2c74cbf9e454d93767a1f886236))

### Bug Fixes

- **addon-editor:** immediately unsubscribe streams when toolbar is destroyed
  ([#4588](https://github.com/taiga-family/taiga-ui/issues/4588))
  ([db84ded](https://github.com/taiga-family/taiga-ui/commit/db84dedec7bfea31f4a1b50b1b5bcd9e7978c0d3))
- **addon-editor:** prevent paste redundant break line ([#4587](https://github.com/taiga-family/taiga-ui/issues/4587))
  ([4c71bad](https://github.com/taiga-family/taiga-ui/commit/4c71bad71ac6f02493143d1ccc55e783b8268f99))
- **addon-mobile:** `Sheet` remove focus from under sheet with overlay
  ([#4567](https://github.com/taiga-family/taiga-ui/issues/4567))
  ([28396c8](https://github.com/taiga-family/taiga-ui/commit/28396c8936e50b1000c58e185539fbb7e61222ce))
- **core:** `PositionService` eliminate memory leak ([#4561](https://github.com/taiga-family/taiga-ui/issues/4561))
  ([b50bd1e](https://github.com/taiga-family/taiga-ui/commit/b50bd1e48a105effd0537e0593e957226182f933))
- **core:** `TUI_SCROLL_REF` fallback to `documentElement`
  ([#4566](https://github.com/taiga-family/taiga-ui/issues/4566))
  ([a3c7399](https://github.com/taiga-family/taiga-ui/commit/a3c7399953ee4d9cdd8dd85e9b13a8c0c2b6e13f))
- hosts of portals can throw `ExpressionChangedAfterItHasBeenCheckedError`
  ([#4533](https://github.com/taiga-family/taiga-ui/issues/4533))
  ([677b0d1](https://github.com/taiga-family/taiga-ui/commit/677b0d18d235cde23d725751ebe4969034b82f97))
- **kit:** `InputDateRange` fix showing same month twice when `min` is later than given month
  ([#4569](https://github.com/taiga-family/taiga-ui/issues/4569))
  ([0573b29](https://github.com/taiga-family/taiga-ui/commit/0573b29ac2eab78b3db23eba550e64b835275ba3))
- **kit:** `InputTag` fix scrolling ([#4570](https://github.com/taiga-family/taiga-ui/issues/4570))
  ([1674f69](https://github.com/taiga-family/taiga-ui/commit/1674f696c00481b0ca2b80ba25f28215c13a1390))
- **kit:** `Tabs` align dropdown design with datalist ([#4568](https://github.com/taiga-family/taiga-ui/issues/4568))
  ([fe2e810](https://github.com/taiga-family/taiga-ui/commit/fe2e810e745a28fe82a9b5d8be1fe02f48bffe15))
- **testing:** support node.js 18.16, jest 26+ ships jsdom out of the box
  ([#4590](https://github.com/taiga-family/taiga-ui/issues/4590))
  ([ad13df9](https://github.com/taiga-family/taiga-ui/commit/ad13df9960714b351eefe2d62e0a986e9172532b))

### Deprecations

- **addon-commerce:** use new `TUI_CARD_HOLDER_MASK` instead of deprecated `cardHolderMask`
  ([#4560](https://github.com/taiga-family/taiga-ui/issues/4560))
  ([ef8bc40](https://github.com/taiga-family/taiga-ui/commit/ef8bc4063bfc3f2191bc88b2dc0acf62cfb4a427))

### [3.29.2](https://github.com/taiga-family/taiga-ui/compare/v3.29.1...v3.29.2) (2023-05-31)

### Features

- **core:** add rounding mode to `TUI_NUMBER_FORMAT` ([#4548](https://github.com/taiga-family/taiga-ui/issues/4548))
  ([11a192a](https://github.com/taiga-family/taiga-ui/commit/11a192ad3110874671968280498b686fe39b2842))

### [3.29.1](https://github.com/taiga-family/taiga-ui/compare/v3.29.0...v3.29.1) (2023-05-30)

### Bug Fixes

- **addon-charts:** `BarChart` fix hover effect ([#4547](https://github.com/taiga-family/taiga-ui/issues/4547))
  ([a03aa4f](https://github.com/taiga-family/taiga-ui/commit/a03aa4fe276d6728fbcda2eb66e0ec31ade12ff4))
- **kit:** `InputNumber` fix cutting by min value ([#4553](https://github.com/taiga-family/taiga-ui/issues/4553))
  ([ab5cad0](https://github.com/taiga-family/taiga-ui/commit/ab5cad0ea2d6e1e15b08125b672473330649d382))
- **kit:** `LineClamp` fix `overflownChange` false positives
  ([#4549](https://github.com/taiga-family/taiga-ui/issues/4549))
  ([633ce65](https://github.com/taiga-family/taiga-ui/commit/633ce65f2aa1c8ffbf4210425197d48848a5e472))

## [3.29.0](https://github.com/taiga-family/taiga-ui/compare/v3.28.0...v3.29.0) (2023-05-29)

### Features

- **addon-mobile:** `PullToRefresh` allow customization ([#4530](https://github.com/taiga-family/taiga-ui/issues/4530))
  ([f592993](https://github.com/taiga-family/taiga-ui/commit/f592993c2a54a73b539a9faefed412bd80f9ea1e))
- **kit:** `InputDate` add min/max support for native input date
  ([#4519](https://github.com/taiga-family/taiga-ui/issues/4519))
  ([d09a603](https://github.com/taiga-family/taiga-ui/commit/d09a60366c3ef836b63e34d1a328dd774e6d09d6))
- **kit:** `InputDateTime` uses `Maskito` instead of legacy `text-mask`
  ([#4528](https://github.com/taiga-family/taiga-ui/issues/4528))
  ([464682a](https://github.com/taiga-family/taiga-ui/commit/464682a58aab2998f82ce1064bebe6a629781e63))
- **kit:** `Select` add ability to use objects in native select
  ([#4522](https://github.com/taiga-family/taiga-ui/issues/4522))
  ([58c4303](https://github.com/taiga-family/taiga-ui/commit/58c4303a5ff71331b24e27a349061770f6b626f5))

### Bug Fixes

- **addon-editor:** fix typo in the description of toolbar tool `justifyCenter`
  ([#4526](https://github.com/taiga-family/taiga-ui/issues/4526))
  ([5b1dd88](https://github.com/taiga-family/taiga-ui/commit/5b1dd881c130eee80c75815b5f4897ba39e6c9f4))
- **core:** `Dialog` fix closing by accident mouseup outside of content
  ([#4543](https://github.com/taiga-family/taiga-ui/issues/4543))
  ([b1d627d](https://github.com/taiga-family/taiga-ui/commit/b1d627d68b337795a8512150df43aea096f08bba))
- **core:** `PrimitiveTextfield` fix input disabled state [ng 15+]
  ([#4538](https://github.com/taiga-family/taiga-ui/issues/4538))
  ([e425847](https://github.com/taiga-family/taiga-ui/commit/e4258475ea41dd3de1b57b26c086167990f4726d))
- **kit:** `InputFiles` fix description padding ([#4529](https://github.com/taiga-family/taiga-ui/issues/4529))
  ([5b9544d](https://github.com/taiga-family/taiga-ui/commit/5b9544d56bbd342a05461681804618ea90841ce2))
- **kit:** `MultiSelect` fix placeholder in dark mode ([#4516](https://github.com/taiga-family/taiga-ui/issues/4516))
  ([e702e2f](https://github.com/taiga-family/taiga-ui/commit/e702e2ff4452a3dd9748d789a41a85946d9074f3))

## [3.28.0](https://github.com/taiga-family/taiga-ui/compare/v3.27.0...v3.28.0) (2023-05-22)

### Features

- **addon-doc:** remove redundant empty spaces after parse markdown
  ([#4475](https://github.com/taiga-family/taiga-ui/issues/4475))
  ([8572840](https://github.com/taiga-family/taiga-ui/commit/8572840916cdb6d1ed5296007a5e5741f7a5607b))
- **addon-editor:** add pretty bottom indent for content editable area
  ([#4460](https://github.com/taiga-family/taiga-ui/issues/4460))
  ([2f5d2a8](https://github.com/taiga-family/taiga-ui/commit/2f5d2a8c18ad461a9013bc18b540d5421ddbd124))
- **addon-editor:** support focus on editable area ([#4436](https://github.com/taiga-family/taiga-ui/issues/4436))
  ([eae42c9](https://github.com/taiga-family/taiga-ui/commit/eae42c9e8bc72af0d394c66cb9bf442879772efb))
- **core:** `Textfield` allow showing hints for disabled control
  ([#4500](https://github.com/taiga-family/taiga-ui/issues/4500))
  ([c1f73d1](https://github.com/taiga-family/taiga-ui/commit/c1f73d1ac22f4709e9750a280a1748fe0230be5c))
- **core:** add `tuiSvgSrcInterceptors` for multiple source processing
  ([#4402](https://github.com/taiga-family/taiga-ui/issues/4402))
  ([722a66f](https://github.com/taiga-family/taiga-ui/commit/722a66f08ef07924d5929b5fbbda7beae5f35b8b))
- **kit:** `Files` add `expanded` input-output ([#4479](https://github.com/taiga-family/taiga-ui/issues/4479))
  ([90d8efe](https://github.com/taiga-family/taiga-ui/commit/90d8efe79539f3f646332c58880ba37d1901feac))
- **kit:** `InputDate` uses `Maskito` instead of legacy `text-mask`
  ([#4486](https://github.com/taiga-family/taiga-ui/issues/4486))
  ([c558277](https://github.com/taiga-family/taiga-ui/commit/c558277b74b6eb60ca30ac379e5cb3b322452e2c))
- **kit:** `InputDateRange` uses `Maskito` instead of legacy `text-mask`
  ([#4510](https://github.com/taiga-family/taiga-ui/issues/4510))
  ([fede061](https://github.com/taiga-family/taiga-ui/commit/fede061dac5505646f9c0e4103612c5fd20eb8b0))
- **kit:** `InputTime` uses `Maskito` instead of legacy `text-mask`
  ([#4484](https://github.com/taiga-family/taiga-ui/issues/4484))
  ([1d7cf4b](https://github.com/taiga-family/taiga-ui/commit/1d7cf4bc93a564b635f3c2932954ea5ac281dcff))
- **kit:** `TextArea` enable icons ([#4512](https://github.com/taiga-family/taiga-ui/issues/4512))
  ([c6f6a7e](https://github.com/taiga-family/taiga-ui/commit/c6f6a7eb6889372af88faa4ba85bb7a461619b33))
- **kit:** ability to change tag list paddings in `input-tag`
  ([#4487](https://github.com/taiga-family/taiga-ui/issues/4487))
  ([4488eab](https://github.com/taiga-family/taiga-ui/commit/4488eabb3daa1aa7dd751c00ada614bbb464f346))
- **kit:** add `TuiExtractCountryCodePipe`, `TuiIsoToCountryCodePipe`
  ([#4297](https://github.com/taiga-family/taiga-ui/issues/4297))
  ([a86b4aa](https://github.com/taiga-family/taiga-ui/commit/a86b4aab5f04fe6d78c878b08c3f3e330c47f4de))

### Bug Fixes

- **addon-doc:** anchor and theme mode buttons get proper size of svg icons
  ([#4499](https://github.com/taiga-family/taiga-ui/issues/4499))
  ([aafa41b](https://github.com/taiga-family/taiga-ui/commit/aafa41b2700b20b76e6fabf3cc25a18ce4a4ad62))
- **addon-doc:** increasing css cascade priority for active state
  ([#4493](https://github.com/taiga-family/taiga-ui/issues/4493))
  ([e61e47d](https://github.com/taiga-family/taiga-ui/commit/e61e47dee1e8946433a8aa094cbc9787b28a1ea5))
- **addon-editor:** focus should trigger only for outside contenteditable area
  ([#4471](https://github.com/taiga-family/taiga-ui/issues/4471))
  ([6da026e](https://github.com/taiga-family/taiga-ui/commit/6da026edeffd8ad848c0981d8996f4574c53102e))
- **kit:** `InputInline` fix alignment with other elements
  ([#4505](https://github.com/taiga-family/taiga-ui/issues/4505))
  ([a8ba7ed](https://github.com/taiga-family/taiga-ui/commit/a8ba7ed6fa39c43b76a37ef4a2ce550b883d51d3))
- **kit:** `InputTag` fix vertical jumps on multi line size="m" and label inside
  ([#4506](https://github.com/taiga-family/taiga-ui/issues/4506))
  ([b1a9a65](https://github.com/taiga-family/taiga-ui/commit/b1a9a659e340a233b9d6c0214cef93638a8f6ba0))
- **kit:** `MultiSelect` properly react to height variables change
  ([#4513](https://github.com/taiga-family/taiga-ui/issues/4513))
  ([559e709](https://github.com/taiga-family/taiga-ui/commit/559e7098e99f84f638838aea86e1ff11e1954e0c))

## [3.27.0](https://github.com/taiga-family/taiga-ui/compare/v3.26.0...v3.27.0) (2023-05-15)

### Features

- **addon-charts:** `LineChart` add configuration through DI
  ([#4427](https://github.com/taiga-family/taiga-ui/issues/4427))
  ([a40ee2a](https://github.com/taiga-family/taiga-ui/commit/a40ee2aaa4241ec86dde3294ea354fae6934db62))
- **addon-commerce:** `InputCard` uses `Maskito` instead of legacy `text-mask`
  ([#4385](https://github.com/taiga-family/taiga-ui/issues/4385))
  ([717e96c](https://github.com/taiga-family/taiga-ui/commit/717e96c49224e1e3dd50a3ff23b7571fba286ad3))
- **addon-commerce:** `InputCardGrouped` uses `Maskito` instead of legacy `text-mask`
  ([#4391](https://github.com/taiga-family/taiga-ui/issues/4391))
  ([d28c01b](https://github.com/taiga-family/taiga-ui/commit/d28c01b9f9d051325f93c48ee8ef3112e327272e))
- **addon-commerce:** `InputExpire` & `InputCVC` use `Maskito` instead of legacy `text-mask`
  ([#4442](https://github.com/taiga-family/taiga-ui/issues/4442))
  ([6826b8c](https://github.com/taiga-family/taiga-ui/commit/6826b8cda1fee4a8395dd2c48247741ca53589bc))
- **addon-commerce:** add flexible payment system detection
  ([#4410](https://github.com/taiga-family/taiga-ui/issues/4410))
  ([365a136](https://github.com/taiga-family/taiga-ui/commit/365a136e118367bb9246ab742d8d4cd285043b43))
- **addon-doc:** add `TuiTextCodeDirective` for escaped brackets in code
  ([#4451](https://github.com/taiga-family/taiga-ui/issues/4451))
  ([654745f](https://github.com/taiga-family/taiga-ui/commit/654745f4552e847814560d6d810782ebd8e8c21f))
- **kit:** `InputDateRange` allow to use custom value content when using period
  ([#4383](https://github.com/taiga-family/taiga-ui/issues/4383))
  ([6e69988](https://github.com/taiga-family/taiga-ui/commit/6e699885aefc9ae3784435a6ee27e6b758d7c339))
- **kit:** `InputNumber` add `step` input and deprecate `InputCount`
  ([#4368](https://github.com/taiga-family/taiga-ui/issues/4368))
  ([8bb0b4b](https://github.com/taiga-family/taiga-ui/commit/8bb0b4be48bcac606c1bbede19948b9cb4dcce2f))
- **kit:** `InputYear` uses `Maskito` instead of legacy `text-mask`
  ([#4382](https://github.com/taiga-family/taiga-ui/issues/4382))
  ([a3183c8](https://github.com/taiga-family/taiga-ui/commit/a3183c84d2567d5d0f31dddec332ba363023618e))
- **kit:** set dark text color for auto colored tags regardless of theme
  ([#4384](https://github.com/taiga-family/taiga-ui/issues/4384))
  ([3fc5ef5](https://github.com/taiga-family/taiga-ui/commit/3fc5ef5ef5c952a4cac4658a97635f78448451fd))

### Bug Fixes

- **addon-editor:** vertical alignment of content in a list
  ([#4452](https://github.com/taiga-family/taiga-ui/issues/4452))
  ([2f224a1](https://github.com/taiga-family/taiga-ui/commit/2f224a173095e820f7f0bb8c7b6dba5e3bf0fc5c))
- **addon-table:** `TableFilters` fix registering when using structural directives
  ([#4435](https://github.com/taiga-family/taiga-ui/issues/4435))
  ([e7e8198](https://github.com/taiga-family/taiga-ui/commit/e7e81983d3169f8eb30c36e07c34eea7fa104107))
- **cdk:** `ActiveZone` ignore disabling through fieldset
  ([#4420](https://github.com/taiga-family/taiga-ui/issues/4420))
  ([30cf133](https://github.com/taiga-family/taiga-ui/commit/30cf13361e5b4bfe28624e5f6d401ec6b8ede975))
- **cdk:** `Schematics` add some missed migrations ([#4430](https://github.com/taiga-family/taiga-ui/issues/4430))
  ([a79f48f](https://github.com/taiga-family/taiga-ui/commit/a79f48f155009c6c41d45995ec33f344c9718851))
- **core:** `Control` refresh subscription after control change
  ([#4446](https://github.com/taiga-family/taiga-ui/issues/4446))
  ([b9c3cb0](https://github.com/taiga-family/taiga-ui/commit/b9c3cb0fc7b91ca4e745226c389600cd6fd72d4c))
- **core:** `Dropdown` fix initial open state ([#4417](https://github.com/taiga-family/taiga-ui/issues/4417))
  ([10c1e43](https://github.com/taiga-family/taiga-ui/commit/10c1e43f8e626f57b2be564ffa413b21f8662f28))
- **core:** explicit override svg options ([#4394](https://github.com/taiga-family/taiga-ui/issues/4394))
  ([bfd88f8](https://github.com/taiga-family/taiga-ui/commit/bfd88f8a7995ceccd58c8257ec55491e9239cebd))
- **kit:** `InputFiles` fix disabled state in Safari ([#4454](https://github.com/taiga-family/taiga-ui/issues/4454))
  ([01cd661](https://github.com/taiga-family/taiga-ui/commit/01cd661db2ad959a78d2448d9212460c0070244b))
- **kit:** `Prompt` wrap buttons to the new line if they do not fit
  ([#4443](https://github.com/taiga-family/taiga-ui/issues/4443))
  ([63ed120](https://github.com/taiga-family/taiga-ui/commit/63ed120dc733dd4d7f6728c091cc830a3931dd2b))
- **kit:** `RadioBlock`, `CheckboxBlock` properly align in `Group`
  ([#4445](https://github.com/taiga-family/taiga-ui/issues/4445))
  ([eca1ec4](https://github.com/taiga-family/taiga-ui/commit/eca1ec44ec76566964aa63fa0f0c803a20a87a58))
- **kit:** `Tag` remove mixin messing with background ([#4419](https://github.com/taiga-family/taiga-ui/issues/4419))
  ([c05abb0](https://github.com/taiga-family/taiga-ui/commit/c05abb0ce6973c1ed09d268a94745950224112de))
- **kit:** downgrade type of value in badge ([#4431](https://github.com/taiga-family/taiga-ui/issues/4431))
  ([1f6b2b7](https://github.com/taiga-family/taiga-ui/commit/1f6b2b785620449c7256ff79075ab09d461a8a45))

## [3.26.0](https://github.com/taiga-family/taiga-ui/compare/v3.25.0...v3.26.0) (2023-05-03)

### Features

- **addon-commerce:** add `TUI_INPUT_CARD_GROUPED_OPTIONS` token
  ([#4284](https://github.com/taiga-family/taiga-ui/issues/4284))
  ([9e04d58](https://github.com/taiga-family/taiga-ui/commit/9e04d58815da5050da436a4a143abcec7ca3f23c))
- **addon-commerce:** add `TUI_INPUT_CARD_OPTIONS` ([#4325](https://github.com/taiga-family/taiga-ui/issues/4325))
  ([5d19ded](https://github.com/taiga-family/taiga-ui/commit/5d19ded402f2620d10276680cb111d025b9eea7b))
- **addon-doc:** add new parameter `tabTitles` to `TUI_DOC_EXAMPLE_OPTIONS`
  ([#4360](https://github.com/taiga-family/taiga-ui/issues/4360))
  ([201dcc2](https://github.com/taiga-family/taiga-ui/commit/201dcc2770862ae15ba1112330a228e2e4cb7e00))
- **addon-doc:** support disable sticky position for demo
  ([#4310](https://github.com/taiga-family/taiga-ui/issues/4310))
  ([456130e](https://github.com/taiga-family/taiga-ui/commit/456130e77b0802e5ffb5ca8babd1d61b16884591))
- **addon-doc:** tree-shakable entry points ([#4240](https://github.com/taiga-family/taiga-ui/issues/4240))
  ([212b670](https://github.com/taiga-family/taiga-ui/commit/212b67007e071f1e77824b57243f508b6fe1770e))
- **addon-editor:** support any protocols in `link` component
  ([#4260](https://github.com/taiga-family/taiga-ui/issues/4260))
  ([9caed62](https://github.com/taiga-family/taiga-ui/commit/9caed6295ce7027a43253bd476a618ce398f6aa9))
- **cdk:** `ng-add` support apps bootstrapped using a standalone component
  ([#4257](https://github.com/taiga-family/taiga-ui/issues/4257))
  ([41b5824](https://github.com/taiga-family/taiga-ui/commit/41b5824cd18e98608f64c7b5c13a670916196a43))
- **core:** `Svg` inherit options through DI hierarchy ([#4363](https://github.com/taiga-family/taiga-ui/issues/4363))
  ([dbd9f58](https://github.com/taiga-family/taiga-ui/commit/dbd9f585bfd246df71cfa6e92e3ace2d695ca8ef))
- **core:** add ability to align dropdown to center ([#4277](https://github.com/taiga-family/taiga-ui/issues/4277))
  ([bed3cb4](https://github.com/taiga-family/taiga-ui/commit/bed3cb44b752ef765bde18284cd1941e1beb05e5))
- **core:** support cache busting for `tuiIcon...` icons ([#4369](https://github.com/taiga-family/taiga-ui/issues/4369))
  ([710ca62](https://github.com/taiga-family/taiga-ui/commit/710ca62dec810df7e75d3548bc649e3959df911d))
- **icons:** improve quality `tuiIconAliPay` ([#4361](https://github.com/taiga-family/taiga-ui/issues/4361))
  ([a69beae](https://github.com/taiga-family/taiga-ui/commit/a69beaef31c135344798d5a4f2ddfcb15e1b90c4))
- **icons:** new payments system and service icons ([#4328](https://github.com/taiga-family/taiga-ui/issues/4328))
  ([39585dc](https://github.com/taiga-family/taiga-ui/commit/39585dc541925fadd2fe0f73419dd436f0c7de73))
- **icons:** new payments system icons ([#4306](https://github.com/taiga-family/taiga-ui/issues/4306))
  ([1caad1c](https://github.com/taiga-family/taiga-ui/commit/1caad1c27dc7e4183e4fd6d11e7a0aa86d6fa835))
- **kit:** `BlockStatus` add new component ([#4111](https://github.com/taiga-family/taiga-ui/issues/4111))
  ([f5a4461](https://github.com/taiga-family/taiga-ui/commit/f5a446158b878a92f9a4b15eb53d20a705ca64c9))
- **kit:** `CheckboxBlock` support center alignment with `align-items` CSS
  ([#4370](https://github.com/taiga-family/taiga-ui/issues/4370))
  ([0426055](https://github.com/taiga-family/taiga-ui/commit/0426055b852c8691742f425a768960bbef0a4ed7))
- **kit:** `InputDateTime` add ability to use native picker on mobile
  ([#4295](https://github.com/taiga-family/taiga-ui/issues/4295))
  ([1616ddd](https://github.com/taiga-family/taiga-ui/commit/1616ddd8ec8b9271f90c3942662643ea29955799))
- **kit:** `Tag` add button selector ([#4251](https://github.com/taiga-family/taiga-ui/issues/4251))
  ([856bc57](https://github.com/taiga-family/taiga-ui/commit/856bc574815a7749e86f405b777cc95d686fe55f))
- **kit:** catch `Observable` instead of `PolymorpheusPrimitive` from `PolymorpheusHandler` in `fieldError`
  ([#4241](https://github.com/taiga-family/taiga-ui/issues/4241))
  ([ef9e771](https://github.com/taiga-family/taiga-ui/commit/ef9e7719f24eb661da975d355caa106148dbed41))
- **kit:** support `fallback` for `avatar` when img not found by `avatarUrl`
  ([#4243](https://github.com/taiga-family/taiga-ui/issues/4243))
  ([68f4922](https://github.com/taiga-family/taiga-ui/commit/68f4922724f7aeb5d651dc6cc833f6e98e9263e7))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix incorrect initial value display
  ([#4304](https://github.com/taiga-family/taiga-ui/issues/4304))
  ([b815bb8](https://github.com/taiga-family/taiga-ui/commit/b815bb83eaebf0ddd6d1e5a0edc654b8943f850e))
- **addon-editor:** class constructor `NodeView` cannot be invoked without `new`
  ([#4340](https://github.com/taiga-family/taiga-ui/issues/4340))
  ([6e071fa](https://github.com/taiga-family/taiga-ui/commit/6e071faff83b6362952256a41779f018dc0289bc))
- **core:** `Dialog` fix closing fullscreen dismissible dialog
  ([#4359](https://github.com/taiga-family/taiga-ui/issues/4359))
  ([a41cf76](https://github.com/taiga-family/taiga-ui/commit/a41cf76412812f4387544718341db0c1e2ab09d4))
- **core:** `Root` fix display extra scrollbar when using different dialogs
  ([#4351](https://github.com/taiga-family/taiga-ui/issues/4351))
  ([9791dd9](https://github.com/taiga-family/taiga-ui/commit/9791dd9df9a8f2ca9d3c25fa216315b8201aa1d8))
- **core:** expose `TuiBreakpointMediaKey` ([#4285](https://github.com/taiga-family/taiga-ui/issues/4285))
  ([5ecf38c](https://github.com/taiga-family/taiga-ui/commit/5ecf38ce883af7c6e01800c2f251bf22815d0920))
- **core:** improve message about deprecated icons ([#4365](https://github.com/taiga-family/taiga-ui/issues/4365))
  ([b681897](https://github.com/taiga-family/taiga-ui/commit/b681897b61a73a5703d6044ecced781c6c2d7ce8))
- **core:** skip import if cannot load fonts from `googleapis.com`
  ([#4366](https://github.com/taiga-family/taiga-ui/issues/4366))
  ([2ccf57a](https://github.com/taiga-family/taiga-ui/commit/2ccf57a189713511f5f18e3781db5ad67f953e05))
- **kit:** `Combobox` fix immediate reset after value change
  ([#4270](https://github.com/taiga-family/taiga-ui/issues/4270))
  ([36ffa55](https://github.com/taiga-family/taiga-ui/commit/36ffa55a117ab2262af42334abc46672dba260ca))
- **kit:** `InputDateTime` fix value setting when using valueTransformer
  ([#4299](https://github.com/taiga-family/taiga-ui/issues/4299))
  ([7547cea](https://github.com/taiga-family/taiga-ui/commit/7547cea45e960e1a0c68b51b81d4e5d72dbeff8e))
- **kit:** `Multiselect` update dropdown on search ([#4371](https://github.com/taiga-family/taiga-ui/issues/4371))
  ([ee3f4b9](https://github.com/taiga-family/taiga-ui/commit/ee3f4b97dbcaa23bf07b214a58dc8ed466f1c1ef))
- **kit:** `RadioBlock` properly handle `identityMatcher` in `hideRadio` mode
  ([#4362](https://github.com/taiga-family/taiga-ui/issues/4362))
  ([0240bea](https://github.com/taiga-family/taiga-ui/commit/0240bea72e4aeb3a456bf958ecd7acf8189cfb99))

## [3.25.0](https://github.com/taiga-family/taiga-ui/compare/v3.24.0...v3.25.0) (2023-04-18)

### Features

- **addon-doc:** support `updateOn` and `sandboxExpanded` in query params
  ([#4231](https://github.com/taiga-family/taiga-ui/issues/4231))
  ([7ece066](https://github.com/taiga-family/taiga-ui/commit/7ece06640ba6f420d1ada4de32468626a6a0ed76))
- **addon-editor:** add `TUI_EDITOR_VALUE_TRANSFORMER` token
  ([#4173](https://github.com/taiga-family/taiga-ui/issues/4173))
  ([754be1b](https://github.com/taiga-family/taiga-ui/commit/754be1beb23d98c4ef41143c0df4cdc6c2acf474))
- **addon-mobile:** `AppBar` add new component ([#4228](https://github.com/taiga-family/taiga-ui/issues/4228))
  ([e12a15e](https://github.com/taiga-family/taiga-ui/commit/e12a15e567a37685bfa65388e4274b4e193685cf))
- **core:** `Hint` support basic HTML ([#4214](https://github.com/taiga-family/taiga-ui/issues/4214))
  ([b19bb48](https://github.com/taiga-family/taiga-ui/commit/b19bb48848c18074866bc1149e1abf46ead10d8c))
- **core:** change default size for icon ([#4206](https://github.com/taiga-family/taiga-ui/issues/4206))
  ([92e82ac](https://github.com/taiga-family/taiga-ui/commit/92e82aca95849f502ff6c381a967375306bbd48d))
- **kit:** `InputTime` add ability to use native picker on mobile
  ([#4207](https://github.com/taiga-family/taiga-ui/issues/4207))
  ([df9ad7d](https://github.com/taiga-family/taiga-ui/commit/df9ad7d456fb459ffba5ec475e10dc43920a286c))

### Bug Fixes

- **addon-charts:** `LineDaysChart` fix hint circle not disappearing, fix wrong hover index
  ([#4178](https://github.com/taiga-family/taiga-ui/issues/4178))
  ([ae7edc9](https://github.com/taiga-family/taiga-ui/commit/ae7edc9db53345c45d604ab8ec3968c74bc011e9))
- **addon-editor:** use `paragraph` type for correct detect empty
  ([#4232](https://github.com/taiga-family/taiga-ui/issues/4232))
  ([b130a52](https://github.com/taiga-family/taiga-ui/commit/b130a52c1a149f8658c142edcf4b26a10e4f8261))
- **cdk:** `schematics` fix incorrectly processing `setNativeFocused`
  ([#4171](https://github.com/taiga-family/taiga-ui/issues/4171))
  ([cf04d14](https://github.com/taiga-family/taiga-ui/commit/cf04d1429daa5028820a1e82889f9353b7273ce3))
- **core:** `Dialog` fix close button appearance on mobile
  ([#4204](https://github.com/taiga-family/taiga-ui/issues/4204))
  ([7f13930](https://github.com/taiga-family/taiga-ui/commit/7f13930b15688bf874bf8dcf41b13b53da308c59))
- **core:** `Dropdown` fix scroll getting stuck ([#4191](https://github.com/taiga-family/taiga-ui/issues/4191))
  ([7c996e0](https://github.com/taiga-family/taiga-ui/commit/7c996e002ef11aa072e345b4824c961b90d5340a))
- **core:** `PrimitiveTextfield` label should not be visible when filler used and input focused
  ([#4224](https://github.com/taiga-family/taiga-ui/issues/4224))
  ([40b5276](https://github.com/taiga-family/taiga-ui/commit/40b52761e8868181595c5d5b83077e73bd48552c))
- **core:** `tuiTextfield` don't handle input inside legacy mask
  ([#4203](https://github.com/taiga-family/taiga-ui/issues/4203))
  ([b109261](https://github.com/taiga-family/taiga-ui/commit/b109261279e792d705e66a4d565cd82c6adf574f))
- **core:** fix label margin ([#4172](https://github.com/taiga-family/taiga-ui/issues/4172))
  ([0287ad1](https://github.com/taiga-family/taiga-ui/commit/0287ad177953f93f7a98b55dc2e1e5ea5d851202))
- **core:** use `tuiIconClose` for icon cleaner ([#4202](https://github.com/taiga-family/taiga-ui/issues/4202))
  ([ac35966](https://github.com/taiga-family/taiga-ui/commit/ac359666b485ad5e58f398b468b19189c7a176d6))
- **kit:** `input-count` should update value after blur event
  ([#4230](https://github.com/taiga-family/taiga-ui/issues/4230))
  ([4f825b5](https://github.com/taiga-family/taiga-ui/commit/4f825b5c8554c19d5a205a15d007d52f3080c051))
- **kit:** `InputFiles` fix incorrectly adding `capture` on mobile devices
  ([#4216](https://github.com/taiga-family/taiga-ui/issues/4216))
  ([2c40931](https://github.com/taiga-family/taiga-ui/commit/2c40931d3639301fbf74330ec3bb6ea1f78ed2bd))
- **kit:** `InputPhoneInternational` change `Gabon` phone pattern
  ([#4210](https://github.com/taiga-family/taiga-ui/issues/4210))
  ([c3fa9f6](https://github.com/taiga-family/taiga-ui/commit/c3fa9f62fe6a2ffc0924acbdb3a72edada1692e4))
- **kit:** `InputPhoneInternational` change `Ivory Coast` (`Costa de Marfil`) phone pattern
  ([#4209](https://github.com/taiga-family/taiga-ui/issues/4209))
  ([eb4252e](https://github.com/taiga-family/taiga-ui/commit/eb4252e6637db142dbe14316fc406becb4b9580f))
- **kit:** `InputPhoneInternational` change Cameroon phone pattern
  ([#4195](https://github.com/taiga-family/taiga-ui/issues/4195))
  ([94bed77](https://github.com/taiga-family/taiga-ui/commit/94bed77f5881b9c9b79283842399cd689eb327a5))
- **kit:** correct detect iso code for `Kazakhstan` when phone number start with `+7`
  ([#4217](https://github.com/taiga-family/taiga-ui/issues/4217))
  ([0080ac8](https://github.com/taiga-family/taiga-ui/commit/0080ac8bc65abcede1eafd47a02fa5b7eaadb245))

## [3.24.0](https://github.com/taiga-family/taiga-ui/compare/v3.23.1...v3.24.0) (2023-04-10)

### Features

- **addon-doc:** add `TUI_USE_DEFAULT_NIGHT_THEME` token for ignore dark theme styles
  ([#4118](https://github.com/taiga-family/taiga-ui/issues/4118))
  ([ef0e160](https://github.com/taiga-family/taiga-ui/commit/ef0e160b9942a09448258b75d0db94d608f4f709))
- **addon-editor:** decompose `editor-socket` styles ([#4104](https://github.com/taiga-family/taiga-ui/issues/4104))
  ([17bc204](https://github.com/taiga-family/taiga-ui/commit/17bc204d03bd701d503712a7abb63bb870612e08))
- **addon-mobile:** `TabBar` add new component ([#4120](https://github.com/taiga-family/taiga-ui/issues/4120))
  ([1091098](https://github.com/taiga-family/taiga-ui/commit/1091098d8e7ac4782e8fd4aa275fc383af226710))
- **cdk:** `Control` add new directive ([#4127](https://github.com/taiga-family/taiga-ui/issues/4127))
  ([6a1ddc4](https://github.com/taiga-family/taiga-ui/commit/6a1ddc477c5132389abfb9575252d423c2c96aa5))
- **cdk:** `Replace` add new pipe ([#4138](https://github.com/taiga-family/taiga-ui/issues/4138))
  ([531e322](https://github.com/taiga-family/taiga-ui/commit/531e32291985a94890d900f900b2146136b1db64))
- **cdk:** `ValueChanges` add new directive ([#4128](https://github.com/taiga-family/taiga-ui/issues/4128))
  ([6c3a293](https://github.com/taiga-family/taiga-ui/commit/6c3a293a4a791d22ba6d080fc14a763753068fff))
- **cdk:** add `@tuiParentStop` animation ([#4143](https://github.com/taiga-family/taiga-ui/issues/4143))
  ([6576bc0](https://github.com/taiga-family/taiga-ui/commit/6576bc0f754f9f24813518bad3845b27a727438f))
- **cdk:** clear timeout for `tuiForAsync` ([#4139](https://github.com/taiga-family/taiga-ui/issues/4139))
  ([33c6224](https://github.com/taiga-family/taiga-ui/commit/33c6224c63e763f7f7221a629dbf4bafd1cc616f))
- **cdk:** help to tree-shake away the code unneeded for production bundles
  ([#4149](https://github.com/taiga-family/taiga-ui/issues/4149))
  ([f5617cf](https://github.com/taiga-family/taiga-ui/commit/f5617cf23ddeac8daf9ff434ede4249f288ed829))
- **core:** `Alert` support basic HTML as string` ([#4163](https://github.com/taiga-family/taiga-ui/issues/4163))
  ([4f5a827](https://github.com/taiga-family/taiga-ui/commit/4f5a82762ce5e16430617f6dbcafe6ada19cadd4))
- **core:** `Dialog` support basic HTML as string ([#4159](https://github.com/taiga-family/taiga-ui/issues/4159))
  ([013eeac](https://github.com/taiga-family/taiga-ui/commit/013eeac994176449f9ee83d6efbcd6e7fb35da99))
- **eslint-plugin:** implement `no-assert-without-ng-dev-mode` rule
  ([#4161](https://github.com/taiga-family/taiga-ui/issues/4161))
  ([b91a8dc](https://github.com/taiga-family/taiga-ui/commit/b91a8dc14cad0e05f37d99d575226755b087aa7b))
- **kit:** `InputNumber` allow untouched decimal part ([#4114](https://github.com/taiga-family/taiga-ui/issues/4114))
  ([f005445](https://github.com/taiga-family/taiga-ui/commit/f005445ec5e7f7634a1ba80d2107b0809f02e0ae))
- **kit:** `Prompt` add autofocus on OK button ([#4155](https://github.com/taiga-family/taiga-ui/issues/4155))
  ([ba19ce0](https://github.com/taiga-family/taiga-ui/commit/ba19ce06f501d149899b2d1a8b32f73c4d9e1f39))

### Bug Fixes

- **addon-doc:** resizer shows `NaN` during SSR ([#4140](https://github.com/taiga-family/taiga-ui/issues/4140))
  ([43b49b2](https://github.com/taiga-family/taiga-ui/commit/43b49b2a7bd65811d326a9cb047a90a9ecd560e5))
- **addon-editor:** prevent override all paragraph styles inside list
  ([#4115](https://github.com/taiga-family/taiga-ui/issues/4115))
  ([9c35f55](https://github.com/taiga-family/taiga-ui/commit/9c35f55ef79d7c607a783060f7de8c5fd1afb122))
- **cdk:** make `AbstractTuiControl` constructor DI compatible
  ([#4113](https://github.com/taiga-family/taiga-ui/issues/4113))
  ([d8b7500](https://github.com/taiga-family/taiga-ui/commit/d8b7500430bafa8ebebb43d7bcb11d8b012b3b8f))
- **cdk:** support `autofill` values when trigger autofocus on `iOS`
  ([#4160](https://github.com/taiga-family/taiga-ui/issues/4160))
  ([f696de6](https://github.com/taiga-family/taiga-ui/commit/f696de6b39e304adf13d0401cfe828514fe2e5d7))
- **core:** `BreakpointService` replay value for new subscribers
  ([#4131](https://github.com/taiga-family/taiga-ui/issues/4131))
  ([a2a804a](https://github.com/taiga-family/taiga-ui/commit/a2a804a729ede5f5310095a0152261d4070aa51c))
- **core:** `Dialog` fix close button appearance ([#4141](https://github.com/taiga-family/taiga-ui/issues/4141))
  ([b4705c6](https://github.com/taiga-family/taiga-ui/commit/b4705c6db642842222846fc8be476e5cee8409a2))
- **core:** `Scrollbar` fix height in Firefox ([#4147](https://github.com/taiga-family/taiga-ui/issues/4147))
  ([93dad55](https://github.com/taiga-family/taiga-ui/commit/93dad553c897f5141198e802b29f4c7044fd3831))
- **kit:** `ElasticContainer` handle nested height transitions
  ([#4146](https://github.com/taiga-family/taiga-ui/issues/4146))
  ([543e7f4](https://github.com/taiga-family/taiga-ui/commit/543e7f4838ee687b58df649d828ed7e2a1f1a995))
- **kit:** `File` show keyboard focus ([#4126](https://github.com/taiga-family/taiga-ui/issues/4126))
  ([fd56a5e](https://github.com/taiga-family/taiga-ui/commit/fd56a5eecf733493208a36ba454e37f1970a18cb))
- **kit:** `Stepper` use `TuiScrollService` instead of scrollIntoView
  ([#4123](https://github.com/taiga-family/taiga-ui/issues/4123))
  ([3eef359](https://github.com/taiga-family/taiga-ui/commit/3eef3595f15799fe332b34b99b3f78769f14ebe1))
- **kit:** use hosts `stringify` in `FilterByInput` pipe ([#4067](https://github.com/taiga-family/taiga-ui/issues/4067))
  ([4762063](https://github.com/taiga-family/taiga-ui/commit/47620634b81891c1f8c12f456a0602d799dcde46))

### [3.23.1](https://github.com/taiga-family/taiga-ui/compare/v3.23.0...v3.23.1) (2023-04-04)

### Bug Fixes

- **addon-commerce:** `Money` fix decimal limit in integer part
  ([#4106](https://github.com/taiga-family/taiga-ui/issues/4106))
  ([a159447](https://github.com/taiga-family/taiga-ui/commit/a159447f2831a0f292c04a7ad99a8a9fcdf7e6cb))
- **addon-doc:** correct detect `Open-source` theme ([#4098](https://github.com/taiga-family/taiga-ui/issues/4098))
  ([aab2bef](https://github.com/taiga-family/taiga-ui/commit/aab2beff3a3a6732421db47fc80354596cce9147))
- **cdk:** remove `protected` from constructors ([#4100](https://github.com/taiga-family/taiga-ui/issues/4100))
  ([68cc663](https://github.com/taiga-family/taiga-ui/commit/68cc6636dde13dd91c8c3061c65efd5082477a25))
- **kit:** `FieldError` work when nested inside control ([#4107](https://github.com/taiga-family/taiga-ui/issues/4107))
  ([fb7b827](https://github.com/taiga-family/taiga-ui/commit/fb7b827a62f6081cefc970b97ef9d3351d688783))

## [3.23.0](https://github.com/taiga-family/taiga-ui/compare/v3.22.0...v3.23.0) (2023-04-03)

### Features

- **addon-doc:** prevent override theme styles when we use own custom night theme
  ([#4070](https://github.com/taiga-family/taiga-ui/issues/4070))
  ([1bfacf7](https://github.com/taiga-family/taiga-ui/commit/1bfacf7d2f40924aad8544baa4eeb081b69c7568))
- **addon-editor:** refactor code-block for correct highlight in the future
  ([#4006](https://github.com/taiga-family/taiga-ui/issues/4006))
  ([a723cec](https://github.com/taiga-family/taiga-ui/commit/a723cec629ca55eca713e8e3cf821f4d4dae9d32))
- **addon-editor:** use `https` by default for links in editor
  ([#4068](https://github.com/taiga-family/taiga-ui/issues/4068))
  ([1cc2f0a](https://github.com/taiga-family/taiga-ui/commit/1cc2f0a1278832109472739d0f889148e67b0845))
- **cdk:** `AbstractTuiControl` add `value` setter ([#4048](https://github.com/taiga-family/taiga-ui/issues/4048))
  ([8f726b7](https://github.com/taiga-family/taiga-ui/commit/8f726b7b3458a2039aca00eed5536615abee2638))
- **cdk:** move `tuiDefaultSort` from `@taiga-ui/addon-table`
  ([#4086](https://github.com/taiga-family/taiga-ui/issues/4086))
  ([3805fc2](https://github.com/taiga-family/taiga-ui/commit/3805fc288bcca9261cdad5f1ae7ea5c60644ed48))
- **core:** `BreakpointService` add new service ([#3806](https://github.com/taiga-family/taiga-ui/issues/3806))
  ([6451a66](https://github.com/taiga-family/taiga-ui/commit/6451a66a9be3150897ce85702288a5e5584a10cf))
- **core:** `HostedDropdown` support custom `PositionAccessor` directives
  ([#4016](https://github.com/taiga-family/taiga-ui/issues/4016))
  ([3224f7f](https://github.com/taiga-family/taiga-ui/commit/3224f7f6060e87131434052d497c22bf91b0c000))
- **core:** `Textfield` add unfocused error state ([#4083](https://github.com/taiga-family/taiga-ui/issues/4083))
  ([88c999f](https://github.com/taiga-family/taiga-ui/commit/88c999f19bfe1bc6e28fd9b446b6a2d55c1840b6))
- **core:** `Tooltip` close on click ([#4013](https://github.com/taiga-family/taiga-ui/issues/4013))
  ([31a5f10](https://github.com/taiga-family/taiga-ui/commit/31a5f10d5404e6e909db09cc314769182422764a))
- **core:** increase space between textfield icons ([#4012](https://github.com/taiga-family/taiga-ui/issues/4012))
  ([4770a98](https://github.com/taiga-family/taiga-ui/commit/4770a98adfb24bb5c16cfbe8921b4068cf5927b8))
- **kit:** `Multiselect` add tag validator ([#4087](https://github.com/taiga-family/taiga-ui/issues/4087))
  ([9530787](https://github.com/taiga-family/taiga-ui/commit/9530787d131903a671106ba22846ec8e9dcf18d7))
- **kit:** support `disabledItemHandler` in native select, put `tuiMultiSelectGroup` inside native multiselect
  ([#4065](https://github.com/taiga-family/taiga-ui/issues/4065))
  ([85cb74b](https://github.com/taiga-family/taiga-ui/commit/85cb74bfed99bd5258ef80d329233b17622722db))

### Bug Fixes

- **addon-editor:** compatibility with legacy html model of previous versions
  ([#4018](https://github.com/taiga-family/taiga-ui/issues/4018))
  ([b9bfffe](https://github.com/taiga-family/taiga-ui/commit/b9bfffeb3b7a1ca762d0b0bdcc1ea1832f8b29ab))
- **cdk:** correct extraction of id for processing in svg
  ([#4049](https://github.com/taiga-family/taiga-ui/issues/4049))
  ([e6b67c0](https://github.com/taiga-family/taiga-ui/commit/e6b67c094f06ee1600bfa115499c9603b94d28c0))
- **cdk:** remove `protected` from abstract classes for DI
  ([#4027](https://github.com/taiga-family/taiga-ui/issues/4027))
  ([1bbdb79](https://github.com/taiga-family/taiga-ui/commit/1bbdb79b81f04eb01764c070953b76cb4b941d6d))
- **core:** `Error` fix animation inside `Expand` ([#4082](https://github.com/taiga-family/taiga-ui/issues/4082))
  ([fba32fc](https://github.com/taiga-family/taiga-ui/commit/fba32fcd4c057047def5179b70867005d496c617))
- **core:** `Link` delete wrong icon opacity ([#4069](https://github.com/taiga-family/taiga-ui/issues/4069))
  ([174c02e](https://github.com/taiga-family/taiga-ui/commit/174c02ed5a93643f1a83f5748febce605b2717d4))
- **core:** `PrimitiveTextfield` don't show decoration when placeholder is present
  ([#4071](https://github.com/taiga-family/taiga-ui/issues/4071))
  ([ae07996](https://github.com/taiga-family/taiga-ui/commit/ae07996acd8a50d229a23cc6124f04e7a7377ac8))
- **core:** remove extra whitespace before content ([#4092](https://github.com/taiga-family/taiga-ui/issues/4092))
  ([fd47bc6](https://github.com/taiga-family/taiga-ui/commit/fd47bc6a0964d95a1e063fed695fc6d3247d0dd2))
- **kit:** `InputSlider` broken disabled state ([#4031](https://github.com/taiga-family/taiga-ui/issues/4031))
  ([f21ddc7](https://github.com/taiga-family/taiga-ui/commit/f21ddc72f59af399e0075b6dbc7e67b27ac88bc5))
- **kit:** `Stepper` - add `markForCheck` on activate step
  ([#4009](https://github.com/taiga-family/taiga-ui/issues/4009))
  ([033fd52](https://github.com/taiga-family/taiga-ui/commit/033fd52c870b339e21f668bb862a67c87d19bb4b))
- **kit:** `Tag` fix padding ([#4074](https://github.com/taiga-family/taiga-ui/issues/4074))
  ([030aa94](https://github.com/taiga-family/taiga-ui/commit/030aa94e4fd00a6c9d630f0f1f1f61c3c81a2643))
- **kit:** `Tree` fix programmatic control ([#4051](https://github.com/taiga-family/taiga-ui/issues/4051))
  ([60d94d5](https://github.com/taiga-family/taiga-ui/commit/60d94d53cfc49a81bc39b4599265f4137ee4155d))
- **kit:** add missing dependency `@ng-web-apis/resize-observer`
  ([#4011](https://github.com/taiga-family/taiga-ui/issues/4011))
  ([4bb7d81](https://github.com/taiga-family/taiga-ui/commit/4bb7d8174a4cedf771bd7797d4488b4bcfe69b64))
- **schematics:** case sensitivity in template from `let-*` instruction not preserved after parsing
  ([#4091](https://github.com/taiga-family/taiga-ui/issues/4091))
  ([9010fc9](https://github.com/taiga-family/taiga-ui/commit/9010fc9fd32d9bb8eb86f792a5b13fde5de5dcdb))

## [3.22.0](https://github.com/taiga-family/taiga-ui/compare/v3.21.0...v3.22.0) (2023-03-27)

### Features

- **addon-doc:** add `TUI_DOC_MAP_PAGES` for cached map pages
  ([#3932](https://github.com/taiga-family/taiga-ui/issues/3932))
  ([9c227e0](https://github.com/taiga-family/taiga-ui/commit/9c227e00332a1b7d5e193721305935e093fe166a))
- **addon-doc:** add `TUI_DOC_URL_STATE_HANDLER` for override URL tree segments in history
  ([#3955](https://github.com/taiga-family/taiga-ui/issues/3955))
  ([a175c81](https://github.com/taiga-family/taiga-ui/commit/a175c81a84c0bea39cc4df9be5344407dbb2e86e))
- **addon-doc:** support `icon` for code editor button ([#3933](https://github.com/taiga-family/taiga-ui/issues/3933))
  ([6ce8572](https://github.com/taiga-family/taiga-ui/commit/6ce8572af0ea47478f5daec880d6cfeea0695562))
- **addon-editor:** improve styles for `details` component
  ([#4000](https://github.com/taiga-family/taiga-ui/issues/4000))
  ([ab5342b](https://github.com/taiga-family/taiga-ui/commit/ab5342bead5c14634cdd6993bcdea6074feb0700))
- **addon-editor:** support custom full color picker ([#3748](https://github.com/taiga-family/taiga-ui/issues/3748))
  ([aefb518](https://github.com/taiga-family/taiga-ui/commit/aefb51875270881cccb5b340fd1856a782c0a08b))
- **kit:** `InputFiles` customize content ([#3995](https://github.com/taiga-family/taiga-ui/issues/3995))
  ([c70ccfe](https://github.com/taiga-family/taiga-ui/commit/c70ccfeada3c56b1e739ef7f8a8ef0dd5143d756))
- **kit:** `MultiSelect` add ability to use native dropdown on mobile
  ([#3983](https://github.com/taiga-family/taiga-ui/issues/3983))
  ([35b86e0](https://github.com/taiga-family/taiga-ui/commit/35b86e0ba7670481b0a98a3ba429c8bbf7ac3040))

### Bug Fixes

- **addon-editor:** overflow `tui-editor-socket` only inside `tui-editor`
  ([#4003](https://github.com/taiga-family/taiga-ui/issues/4003))
  ([d20b0e7](https://github.com/taiga-family/taiga-ui/commit/d20b0e7d3707378dc4c53ef0a906fb4caa1403fe))
- **addon-editor:** trigger `updateValueAndValidity` after `focus/blur` events in `tui-editor`
  ([#3968](https://github.com/taiga-family/taiga-ui/issues/3968))
  ([6af090b](https://github.com/taiga-family/taiga-ui/commit/6af090b72ea545a87f6fc7daf851ff682e2bd52c))
- **addon-mobile:** `Sheet` disable scroll snap for Firefox
  ([#3946](https://github.com/taiga-family/taiga-ui/issues/3946))
  ([411a58a](https://github.com/taiga-family/taiga-ui/commit/411a58aaa0e5a844fa838587f56b850711cd1adc))
- **cdk:** `Resizer` leave irrelevant dimensions untouched
  ([#4004](https://github.com/taiga-family/taiga-ui/issues/4004))
  ([c691390](https://github.com/taiga-family/taiga-ui/commit/c69139005df2c1c29de58f11f10f27d52c9f15a7))
- **cdk:** correct extraction of id for processing in svg
  ([#3965](https://github.com/taiga-family/taiga-ui/issues/3965))
  ([28190fa](https://github.com/taiga-family/taiga-ui/commit/28190fa5ef8ff220c93024cb15c755a5f67c5719))
- **core:** `HintManual` fix initial state ([#3956](https://github.com/taiga-family/taiga-ui/issues/3956))
  ([091ed25](https://github.com/taiga-family/taiga-ui/commit/091ed25a0f319c4027f1fa1687f59f87cc4e19c2))
- **core:** `HostedDropdown` properly detect size in case of custom host
  ([#3957](https://github.com/taiga-family/taiga-ui/issues/3957))
  ([a7f1f8f](https://github.com/taiga-family/taiga-ui/commit/a7f1f8f909dd85bdf57b25145d13b2bec8933ba4))
- **core:** fix `Hint` position on pinch-to-zoom in webkit
  ([#3940](https://github.com/taiga-family/taiga-ui/issues/3940))
  ([d512952](https://github.com/taiga-family/taiga-ui/commit/d512952839a0426e4519c623effa7f5449a0d68c))
- **core:** Google Chrome fires keydown event when form autocomplete
  ([#3964](https://github.com/taiga-family/taiga-ui/issues/3964))
  ([3444080](https://github.com/taiga-family/taiga-ui/commit/3444080828922b7e23971517d88e534687baa241))
- **core:** increase default font size from 15px to 16px to remove iOS zoom
  ([#3994](https://github.com/taiga-family/taiga-ui/issues/3994))
  ([75461d4](https://github.com/taiga-family/taiga-ui/commit/75461d4670f94ef411c3f87753ee1cf37bb927cb))
- **kit:** `InputTag` remove trailing comma for non editable mode
  ([#3980](https://github.com/taiga-family/taiga-ui/issues/3980))
  ([83f0305](https://github.com/taiga-family/taiga-ui/commit/83f0305db038fcb2e910ff7b00a24620500c7322))
- **kit:** align for multiSelectTexts ([#3978](https://github.com/taiga-family/taiga-ui/issues/3978))
  ([376c2b9](https://github.com/taiga-family/taiga-ui/commit/376c2b99ce4404f78fe0dee6ecd4aaf8a24cb0b2))
- **kit:** align placeholder ([#3999](https://github.com/taiga-family/taiga-ui/issues/3999))
  ([872919e](https://github.com/taiga-family/taiga-ui/commit/872919e27828ece252eeb5c85b3c99371bbfb82b))

## [3.21.0](https://github.com/taiga-family/taiga-ui/compare/v3.20.0...v3.21.0) (2023-03-20)

### Features

- **core:** add helper `tuiNumberFormatProvider` ([#3884](https://github.com/taiga-family/taiga-ui/issues/3884))
  ([7e136dc](https://github.com/taiga-family/taiga-ui/commit/7e136dc795d6efebd1d518fbaa7bcc1b0ab14996))
- **demo:** add example with named outlets ([#3821](https://github.com/taiga-family/taiga-ui/issues/3821))
  ([5e897f7](https://github.com/taiga-family/taiga-ui/commit/5e897f79ec26d7fc9d68461dfb07f3c16824a9bf))
- **kit:** `DialogForm` add new service ([#3851](https://github.com/taiga-family/taiga-ui/issues/3851))
  ([10813f5](https://github.com/taiga-family/taiga-ui/commit/10813f5b3f95f9a9316a469e1ea7675467270a97))
- **styles:** add `--tui-skeleton-radius` for skeleton ([#3890](https://github.com/taiga-family/taiga-ui/issues/3890))
  ([3dc67b1](https://github.com/taiga-family/taiga-ui/commit/3dc67b14334d5fb91f2f5ba7e921bd196a757f84))

### Bug Fixes

- **addon-charts:** `dot` don't shrink to fit own width for `legend-item`
  ([#3905](https://github.com/taiga-family/taiga-ui/issues/3905))
  ([4109764](https://github.com/taiga-family/taiga-ui/commit/4109764c38ff2614da325d8f90bee262657ee39d))
- **addon-commerce:** emulate focus on iOS by `tuiAutoFocus`
  ([#3799](https://github.com/taiga-family/taiga-ui/issues/3799))
  ([57b263d](https://github.com/taiga-family/taiga-ui/commit/57b263d654d6e204a85eb6b137126e2ea9011eff))
- **addon-editor:** dispatch `ImageNode` in `viewModel` ([#3872](https://github.com/taiga-family/taiga-ui/issues/3872))
  ([89869ef](https://github.com/taiga-family/taiga-ui/commit/89869ef3a95f4b44b67fcd0db48c95786a69e497))
- **cdk:** `tuiIfMap` add operator ([#3920](https://github.com/taiga-family/taiga-ui/issues/3920))
  ([4ef2de6](https://github.com/taiga-family/taiga-ui/commit/4ef2de6513a55747e45a53e947415ccba3279199))
- **cdk:** correct safari detection ([#3855](https://github.com/taiga-family/taiga-ui/issues/3855))
  ([ee474b8](https://github.com/taiga-family/taiga-ui/commit/ee474b8e59a62455f0f444d0db0e747e1c32221e))
- **cdk:** improve type annotation for `tuiForAsync` ([#3767](https://github.com/taiga-family/taiga-ui/issues/3767))
  ([731c8bf](https://github.com/taiga-family/taiga-ui/commit/731c8bfe772f17a5a22f5ec79b6bd117e483e0c2))
- **core:** `Dialog` fix `dismissible` property ([#3848](https://github.com/taiga-family/taiga-ui/issues/3848))
  ([ea4730f](https://github.com/taiga-family/taiga-ui/commit/ea4730f0982f856759d45a5359e2f12ab0328825))
- **core:** `Textarea` fix line breaks in disabled/readonly state
  ([#3833](https://github.com/taiga-family/taiga-ui/issues/3833))
  ([301a505](https://github.com/taiga-family/taiga-ui/commit/301a505712d22df2538b0aa3199f5d4e6a3de959))
- **core:** escape event doesn't work in Safari ([#3751](https://github.com/taiga-family/taiga-ui/issues/3751))
  ([32774b2](https://github.com/taiga-family/taiga-ui/commit/32774b2c93652bc8d8b55ae99f5405731d8098e2))
- **core:** set `text` input mode for iOS devices when use negative values
  ([#3899](https://github.com/taiga-family/taiga-ui/issues/3899))
  ([8797bea](https://github.com/taiga-family/taiga-ui/commit/8797bea743d1fade8bed9ff6e9acdaa21d6d2013))
- **kit:** `InputCount` fix formatting, fix cutting by min value, use `InputNumber` inside
  ([#3824](https://github.com/taiga-family/taiga-ui/issues/3824))
  ([fc96c86](https://github.com/taiga-family/taiga-ui/commit/fc96c8682b98fead3c3247afb7d9041b59b54bef))
- **kit:** `InputPhoneInternational` change Mauritius phone pattern
  ([#3901](https://github.com/taiga-family/taiga-ui/issues/3901))
  ([47eb6ae](https://github.com/taiga-family/taiga-ui/commit/47eb6ae653fe88f803710171da3b137dd8c95bd6))
- **kit:** `InputTag`, `Multiselect` fix placeholder ([#3832](https://github.com/taiga-family/taiga-ui/issues/3832))
  ([75d4b6e](https://github.com/taiga-family/taiga-ui/commit/75d4b6efbe5bc9f607b74b711352c592e358b006))
- **kit:** `InputTime` fix wrong pseudofocus state ([#3896](https://github.com/taiga-family/taiga-ui/issues/3896))
  ([dea3de7](https://github.com/taiga-family/taiga-ui/commit/dea3de782d622b9e14597c9eabd898733ca15bf1))
- **kit:** use ellipsis for label in `pdf-viewer` when overflow text
  ([#3845](https://github.com/taiga-family/taiga-ui/issues/3845))
  ([dd308ac](https://github.com/taiga-family/taiga-ui/commit/dd308ac295ac2e8bab04f1fee06e520cef138f2a))
- **kit:** use wrap for non-breaking string in `line-clamp`
  ([#3876](https://github.com/taiga-family/taiga-ui/issues/3876))
  ([68169bf](https://github.com/taiga-family/taiga-ui/commit/68169bfa9294a9f31344cd710a50967ce4ec673e))

## [3.20.0](https://github.com/taiga-family/taiga-ui/compare/v3.19.0...v3.20.0) (2023-03-07)

### Features

- **kit:** `InputDate` add ability to use native date picker on mobile
  ([#3790](https://github.com/taiga-family/taiga-ui/issues/3790))
  ([99a25b1](https://github.com/taiga-family/taiga-ui/commit/99a25b150cd5c2980b8a92205e85b4b0444654f3))

### Bug Fixes

- **cdk:** `schematics` fix global-styles migration ([#3797](https://github.com/taiga-family/taiga-ui/issues/3797))
  ([21cc5fa](https://github.com/taiga-family/taiga-ui/commit/21cc5fad61c10da9a52034b240d90ac2fb28dd27))
- **core:** `Hint`/`Dropdown` fix directives order mattering
  ([#3726](https://github.com/taiga-family/taiga-ui/issues/3726))
  ([263c713](https://github.com/taiga-family/taiga-ui/commit/263c71356b0453f199daf645a0419a3fb31660dd))
- **kit:** `TabsWithMore` sync max index on active index change
  ([#3747](https://github.com/taiga-family/taiga-ui/issues/3747))
  ([6af42b3](https://github.com/taiga-family/taiga-ui/commit/6af42b3ee12d8dad94331c6942d7d6660e49ff24))

## [3.19.0](https://github.com/taiga-family/taiga-ui/compare/v3.18.0...v3.19.0) (2023-02-21)

### Features

- **addon-doc:** new `TUI_DOC_EXAMPLE_OPTIONS` DI-token ([#3729](https://github.com/taiga-family/taiga-ui/issues/3729))
  ([705e36a](https://github.com/taiga-family/taiga-ui/commit/705e36ab1346ebe48aee6402d20b4cc741207399))
- **addon-doc:** night mode toggle redesign ([#3702](https://github.com/taiga-family/taiga-ui/issues/3702))
  ([e5d9955](https://github.com/taiga-family/taiga-ui/commit/e5d9955d6b253c8d52550b0b7bc121dce5576ee5))
- **addon-editor:** add `highlight` extension ([#3688](https://github.com/taiga-family/taiga-ui/issues/3688))
  ([6d27db4](https://github.com/taiga-family/taiga-ui/commit/6d27db4eeee3c441a59b9b0203b652e4d26e7847))
- **core:** implement `tuiTextfieldAppearance` directive ([#3007](https://github.com/taiga-family/taiga-ui/issues/3007))
  ([87714f5](https://github.com/taiga-family/taiga-ui/commit/87714f519a6335f2696c177fe6b9ee07b49f1bba))
- **core:** new `tuiFlag` pipe ([#3725](https://github.com/taiga-family/taiga-ui/issues/3725))
  ([af78ec0](https://github.com/taiga-family/taiga-ui/commit/af78ec05af3a786bcc4be5b333c4917449ca083b))
- **kit:** add routable dialog ([#3369](https://github.com/taiga-family/taiga-ui/issues/3369))
  ([daadcab](https://github.com/taiga-family/taiga-ui/commit/daadcab6594f9b9a6076bbc4c94bc00622197975))

### Bug Fixes

- **addon-editor:** do not inherit previous text style for heading
  ([#3695](https://github.com/taiga-family/taiga-ui/issues/3695))
  ([91949f9](https://github.com/taiga-family/taiga-ui/commit/91949f96f19b8d44623baa6cc77d52afc6ba4bde))
- **cdk:** correct schematics' messages ([#3734](https://github.com/taiga-family/taiga-ui/issues/3734))
  ([4452896](https://github.com/taiga-family/taiga-ui/commit/4452896798c63ee459a9e48ee25bb2372baaa4d2))
- **i18n:** correct translate for `indent/outdent` ([#3711](https://github.com/taiga-family/taiga-ui/issues/3711))
  ([f7e2357](https://github.com/taiga-family/taiga-ui/commit/f7e235749b8ee002242f8fea3be9778d0ff33bfa))
- **kit:** `InputPhoneInternational` after changing country the mask does not render
  ([#3596](https://github.com/taiga-family/taiga-ui/issues/3596))
  ([0f86ec9](https://github.com/taiga-family/taiga-ui/commit/0f86ec94b7c790b2dd60e1637b0d91cad0d6dfa7))
- **kit:** `TabsWithMore` properly calculate overflow ([#3697](https://github.com/taiga-family/taiga-ui/issues/3697))
  ([da6fde0](https://github.com/taiga-family/taiga-ui/commit/da6fde09937aca78cca02272859b16922b64c9a4))
- **kit:** set `pointer-events: none` by readonly state for checkbox
  ([#3712](https://github.com/taiga-family/taiga-ui/issues/3712))
  ([a12f1fc](https://github.com/taiga-family/taiga-ui/commit/a12f1fcebbbd3b035de6e10eb405cd2790654866))

## [3.18.0](https://github.com/taiga-family/taiga-ui/compare/v3.17.0...v3.18.0) (2023-02-15)

### Features

- **addon-editor:** add a little bit space between top and bottom in editor
  ([#3647](https://github.com/taiga-family/taiga-ui/issues/3647))
  ([c105795](https://github.com/taiga-family/taiga-ui/commit/c105795abf539a00daab516923744c10fad1e09e))
- **addon-editor:** customize css classes for font-tool in toolbar
  ([#3662](https://github.com/taiga-family/taiga-ui/issues/3662))
  ([ef5398b](https://github.com/taiga-family/taiga-ui/commit/ef5398bbe9334fec8789f1c11c8c0a356ea84aff))
- **addon-editor:** support drop/paste event for resizable
  ([#3646](https://github.com/taiga-family/taiga-ui/issues/3646))
  ([7e446bd](https://github.com/taiga-family/taiga-ui/commit/7e446bd4d80076f53267e9822781092918da8818))
- **addon-editor:** support focus extension ([#3649](https://github.com/taiga-family/taiga-ui/issues/3649))
  ([be04427](https://github.com/taiga-family/taiga-ui/commit/be04427c0309126d5d993ebef541777ffeed39d8))
- **core:** `Dialog` allow closing confirmation ([#3638](https://github.com/taiga-family/taiga-ui/issues/3638))
  ([7ac0c1e](https://github.com/taiga-family/taiga-ui/commit/7ac0c1e0f58b250828c5f6dfb51f1c0417456264))
- **core:** `Tooltip` remove delay on click ([#3502](https://github.com/taiga-family/taiga-ui/issues/3502))
  ([d6ed9e0](https://github.com/taiga-family/taiga-ui/commit/d6ed9e0698344a2d9b67bba51314a39f9f212cee))
- **core:** `TUI_VIEWPORT` add new token ([#3617](https://github.com/taiga-family/taiga-ui/issues/3617))
  ([a0093a0](https://github.com/taiga-family/taiga-ui/commit/a0093a010a9263f2880c5e10fafd3df7c76c657a))
- **core:** support options for dropdown-hover directive ([#3643](https://github.com/taiga-family/taiga-ui/issues/3643))
  ([241616b](https://github.com/taiga-family/taiga-ui/commit/241616b86068279ec39a11824828f4f6c2d12baf))
- **icons:** `FeatherIcons` add full icon pack ([#3577](https://github.com/taiga-family/taiga-ui/issues/3577))
  ([19ea759](https://github.com/taiga-family/taiga-ui/commit/19ea759d7a9f846a9788b2d1a8aab292de91f19d))
- **styles:** remove legacy browser clearfix ([#3639](https://github.com/taiga-family/taiga-ui/issues/3639))
  ([191b0ab](https://github.com/taiga-family/taiga-ui/commit/191b0ab7edf9e4ae6af0b1eff0b1f126c12232f5))

### Bug Fixes

- **addon-doc:** change activeItemIndex from NaN to 0 ([#3660](https://github.com/taiga-family/taiga-ui/issues/3660))
  ([6f7f31d](https://github.com/taiga-family/taiga-ui/commit/6f7f31dab359b380c9b612be664fbfc8c21a3591))
- **addon-editor:** pin dependencies ([#3652](https://github.com/taiga-family/taiga-ui/issues/3652))
  ([eda6a37](https://github.com/taiga-family/taiga-ui/commit/eda6a37a8612ab9cba510d36b7642ce89dd35951))
- **addon-editor:** support `Drag and Drop` for resizable images
  ([#3654](https://github.com/taiga-family/taiga-ui/issues/3654))
  ([0cd3c2f](https://github.com/taiga-family/taiga-ui/commit/0cd3c2f603299ac24bfc03d45a49dd9a5b60bc1e))
- **addon-editor:** use `imageEditor` extension instead of `image` for copy-paste
  ([#3680](https://github.com/taiga-family/taiga-ui/issues/3680))
  ([f311845](https://github.com/taiga-family/taiga-ui/commit/f311845309f121b29f29e15abaa66fc54551722f))
- **cdk:** support redefine properties for parent class ([#3618](https://github.com/taiga-family/taiga-ui/issues/3618))
  ([a7a5bee](https://github.com/taiga-family/taiga-ui/commit/a7a5beeca50cb103dc25fc0530a48e958661f870))

## [3.17.0](https://github.com/taiga-family/taiga-ui/compare/v3.16.0...v3.17.0) (2023-02-07)

### Features

- **addon-commerce:** add `tuiGetCurrencyByCode` ([#3563](https://github.com/taiga-family/taiga-ui/issues/3563))
  ([f9982ef](https://github.com/taiga-family/taiga-ui/commit/f9982ef272c31baf5e2585ecd192c9379a7dc243))
- **addon-editor:** add `Iframe` extension ([#3520](https://github.com/taiga-family/taiga-ui/issues/3520))
  ([778f678](https://github.com/taiga-family/taiga-ui/commit/778f67815cb90295d45c44bd0091ce90e5aeff13))
- **addon-editor:** support `audio/video` tag in editor ([#3585](https://github.com/taiga-family/taiga-ui/issues/3585))
  ([5f65b72](https://github.com/taiga-family/taiga-ui/commit/5f65b72eddd23882318d598558524d32bbb3ecd8))
- **core:** introduce new font variables ([#3518](https://github.com/taiga-family/taiga-ui/issues/3518))
  ([3ae2572](https://github.com/taiga-family/taiga-ui/commit/3ae257250319cf511143943962276cbbea5514a2))
- **eslint-plugin:** add strict-doc-example-extensions rule
  ([#3534](https://github.com/taiga-family/taiga-ui/issues/3534))
  ([8e5efbf](https://github.com/taiga-family/taiga-ui/commit/8e5efbfa4fe15823ccc2e8d4ad5d85e6aa260c80))
- **kit:** `ElasticContainer` add new component ([#3492](https://github.com/taiga-family/taiga-ui/issues/3492))
  ([3e9a53c](https://github.com/taiga-family/taiga-ui/commit/3e9a53c653a520e32e00c6c599fc81967d2829a8))
- **kit:** support customization for rating component ([#3556](https://github.com/taiga-family/taiga-ui/issues/3556))
  ([6f9b7d9](https://github.com/taiga-family/taiga-ui/commit/6f9b7d9a4f0d96d5adfbb15560e3e0ca2d6de6bf))

### Bug Fixes

- **addon-doc:** prevent convert invalid number to `NaN` ([#3528](https://github.com/taiga-family/taiga-ui/issues/3528))
  ([6e259f4](https://github.com/taiga-family/taiga-ui/commit/6e259f479184a6197cc9a50e03a3b986be62beed))
- **addon-editor:** explicit provide `@tiptap/extension-blockquote`
  ([#3609](https://github.com/taiga-family/taiga-ui/issues/3609))
  ([ed878e6](https://github.com/taiga-family/taiga-ui/commit/ed878e6c4ab2d135b63e0c48e19497e51cdebd44))
- **addon-editor:** prevent recursive overwriting value ([#3567](https://github.com/taiga-family/taiga-ui/issues/3567))
  ([045af4c](https://github.com/taiga-family/taiga-ui/commit/045af4ce7a4ac07352da47a3a9cf90bb0b8d01be))
- **addon-mobile:** wait before update viewport dimension
  ([#3536](https://github.com/taiga-family/taiga-ui/issues/3536))
  ([c2cf685](https://github.com/taiga-family/taiga-ui/commit/c2cf6853470e9869046906c483f06999872e869a))
- **cdk:** `Schematics` add `tuiDropdownContext` migration
  ([#3558](https://github.com/taiga-family/taiga-ui/issues/3558))
  ([a2c3ce8](https://github.com/taiga-family/taiga-ui/commit/a2c3ce8cfaaeb7889fcb473b3d21a13aa05ef7f7))
- **cdk:** `schematics` fix require() of ES modules error
  ([#3569](https://github.com/taiga-family/taiga-ui/issues/3569))
  ([941039b](https://github.com/taiga-family/taiga-ui/commit/941039be708e86a640c1fe61122e85687925de9b))
- **core:** `DropdownContext` fix closing (ng14) ([#3511](https://github.com/taiga-family/taiga-ui/issues/3511))
  ([5f34896](https://github.com/taiga-family/taiga-ui/commit/5f34896b3782208f0ef4cd2e9513956509994f2e))
- **core:** `DropdownHover` properly reflect state for `HostedDropdown`
  ([#3507](https://github.com/taiga-family/taiga-ui/issues/3507))
  ([78b8e92](https://github.com/taiga-family/taiga-ui/commit/78b8e921482793c35f04e1501397b4ea74f273bd))
- **core:** `TUI_DIALOG_CLOSE_STREAM` event targets ([#3541](https://github.com/taiga-family/taiga-ui/issues/3541))
  ([11c6b7c](https://github.com/taiga-family/taiga-ui/commit/11c6b7c14b8a93acd7faf8786df8d8c7eceee599))
- **core:** visible incorrect initial position from `TuiDropdownComponent` & `TuiHintComponent` without animation &
  ngZoneEventCoalescing ([#3529](https://github.com/taiga-family/taiga-ui/issues/3529))
  ([e570eab](https://github.com/taiga-family/taiga-ui/commit/e570eab68864828fa417cd0d62f280faee014704))
- **kit:** `Carousel` fix drag to next slide ([#3583](https://github.com/taiga-family/taiga-ui/issues/3583))
  ([92f5373](https://github.com/taiga-family/taiga-ui/commit/92f5373d2a81dde0fb77098d28f810b5d62353ea))
- **kit:** use `TUI_CHECKBOX_OPTIONS/TUI_RADIO_OPTIONS` for `checkbox/radio-labeled`
  ([#3555](https://github.com/taiga-family/taiga-ui/issues/3555))
  ([1f0e337](https://github.com/taiga-family/taiga-ui/commit/1f0e33750de2f164cef104ca55ade2ea446f3464))

## [3.16.0](https://github.com/taiga-family/taiga-ui/compare/v3.15.0...v3.16.0) (2023-01-24)

### Features

- `tslib` should be a transitive dependency from `@taiga/cdk`
  ([#3430](https://github.com/taiga-family/taiga-ui/issues/3430))
  ([abc5323](https://github.com/taiga-family/taiga-ui/commit/abc5323fe9a806ef73bfe8af2dd061c3c18cbfdf))
- **addon-editor:** add `@tiptap/extension-youtube` ([#3481](https://github.com/taiga-family/taiga-ui/issues/3481))
  ([a1efcf0](https://github.com/taiga-family/taiga-ui/commit/a1efcf0527c95164c0cf4b9f734995bdd3419e8a))
- **addon-mobile:** improve typing for `tuiRipple` ([#3379](https://github.com/taiga-family/taiga-ui/issues/3379))
  ([0d9197e](https://github.com/taiga-family/taiga-ui/commit/0d9197e441d439e528932cce61f65640905c148e))
- **addon-table:** rename icons `tuiIconSortDown/tuiIconSortUp` to `tuiIconSortAscending/Descending`
  ([#3443](https://github.com/taiga-family/taiga-ui/issues/3443))
  ([2dc71da](https://github.com/taiga-family/taiga-ui/commit/2dc71da7b2192c4363c851bb035a6ea76018095a))
- **cdk:** drop `~` imports for all `.less` files ([#3484](https://github.com/taiga-family/taiga-ui/issues/3484))
  ([e1607d7](https://github.com/taiga-family/taiga-ui/commit/e1607d7e8cfd1385fda15696ff5e024fc892253a))
- compat with rxjs `7.x` and `8.x-alpha` ([#3428](https://github.com/taiga-family/taiga-ui/issues/3428))
  ([0804b74](https://github.com/taiga-family/taiga-ui/commit/0804b745325dd4ea33e3b42b984d771a00a8a3b5))
- **eslint-plugin:** add `no-typeof` rule ([#3449](https://github.com/taiga-family/taiga-ui/issues/3449))
  ([c4e82fa](https://github.com/taiga-family/taiga-ui/commit/c4e82fa9586e966ddf4a43b33d4e7d105826584e))
- **kit:** `Multiselect` add max number of rows for expandable mode
  ([#3388](https://github.com/taiga-family/taiga-ui/issues/3388))
  ([e3bcca0](https://github.com/taiga-family/taiga-ui/commit/e3bcca0239217c507cb2736b079b2e70132fe47e))
- **kit:** provide custom `formatSize` handler in `TuiFileComponent`
  ([#3483](https://github.com/taiga-family/taiga-ui/issues/3483))
  ([fb9d0cd](https://github.com/taiga-family/taiga-ui/commit/fb9d0cdc4d7f79f026e332268518cde5ec2eccea))
- **kit:** support override padding for items in carousel
  ([#3462](https://github.com/taiga-family/taiga-ui/issues/3462))
  ([a39fae9](https://github.com/taiga-family/taiga-ui/commit/a39fae90383373c295ed806c53d1c2792827531a))

### Bug Fixes

- **addon-charts:** `LineDaysChart` fix hint circle not disappearing
  ([#3486](https://github.com/taiga-family/taiga-ui/issues/3486))
  ([caa5f9a](https://github.com/taiga-family/taiga-ui/commit/caa5f9a390929905bdf43cb08d51f6a800670680))
- **addon-doc:** convert number value to string by `documentationPropertyType`
  ([#3439](https://github.com/taiga-family/taiga-ui/issues/3439))
  ([90165de](https://github.com/taiga-family/taiga-ui/commit/90165de26296cbe577f96c7b36fb47e25ee5ce56))
- **addon-doc:** preserve whitespace between links ([#3441](https://github.com/taiga-family/taiga-ui/issues/3441))
  ([24b76e0](https://github.com/taiga-family/taiga-ui/commit/24b76e0a0f0076ddb814b29d349a48a454722642))
- **cdk:** `Schematics` add missing moduleSpecifier ([#3468](https://github.com/taiga-family/taiga-ui/issues/3468))
  ([250e843](https://github.com/taiga-family/taiga-ui/commit/250e8433a299ff4dac82b9c486f6079496b76b4f))
- **core:** remove quotes inside `url(*)` function in fonts.less
  ([#3469](https://github.com/taiga-family/taiga-ui/issues/3469))
  ([592ad35](https://github.com/taiga-family/taiga-ui/commit/592ad35464546c88f337b56b1fd5b5476505884f))
- **core:** top border of tuiTable first row's td is not visible
  ([#3454](https://github.com/taiga-family/taiga-ui/issues/3454))
  ([1a39ed1](https://github.com/taiga-family/taiga-ui/commit/1a39ed1e759005b31e011d61fa6c193967270a71))
- **core:** use `nowrap` for content in `value-decoration`
  ([#3496](https://github.com/taiga-family/taiga-ui/issues/3496))
  ([4b20993](https://github.com/taiga-family/taiga-ui/commit/4b2099326ff00af4576dc7b3f75caa689ec21365))
- **kit:** `InputSlider` not working `border-bottom-left-radius` for slider (Firefox)
  ([#3494](https://github.com/taiga-family/taiga-ui/issues/3494))
  ([514374b](https://github.com/taiga-family/taiga-ui/commit/514374b98f87f8d03c13cc154fecf168b01bab56))
- **kit:** `InputSlider` wrong slider's width in Firefox ([#3488](https://github.com/taiga-family/taiga-ui/issues/3488))
  ([c7fe7e1](https://github.com/taiga-family/taiga-ui/commit/c7fe7e1ece07c826fda815fcb042bd5b0e34d845))
- **kit:** `InputTag` fix overflow ([#3397](https://github.com/taiga-family/taiga-ui/issues/3397))
  ([4e88d8e](https://github.com/taiga-family/taiga-ui/commit/4e88d8e057578e3f4b21bfa1240364ac69bdee28))
- **kit:** `MultiSelect` fix dropdown for various `updateOn` options
  ([#3479](https://github.com/taiga-family/taiga-ui/issues/3479))
  ([554c519](https://github.com/taiga-family/taiga-ui/commit/554c51987281478eb50b7d31dde4d640c0e63ee3))
- **kit:** `Multiselect` fix scrolling to end ([#3493](https://github.com/taiga-family/taiga-ui/issues/3493))
  ([d320900](https://github.com/taiga-family/taiga-ui/commit/d320900df9286fa802358fb10ac4a7bd802ca9a8))
- **kit:** `Slider` has wrong height of the progress in Firefox
  ([#3497](https://github.com/taiga-family/taiga-ui/issues/3497))
  ([dbd2059](https://github.com/taiga-family/taiga-ui/commit/dbd205929c491a9b44910fccf5d6af7af38ff57f))
- **kit:** `Tabs` can't detect active tab during SSR ([#3395](https://github.com/taiga-family/taiga-ui/issues/3395))
  ([cbc96ae](https://github.com/taiga-family/taiga-ui/commit/cbc96aeb92547b86cad72d4940a9510565c8ed45))
- **kit:** `Tabs` SSR-error `TypeError: Cannot read properties of undefined (reading 'type')`
  ([#3391](https://github.com/taiga-family/taiga-ui/issues/3391))
  ([9fb85db](https://github.com/taiga-family/taiga-ui/commit/9fb85db40ef399a1fb9b73feee528821a4e3746f))
- **kit:** add missing `TUI_COUNTRIES_MASKS` for New Caledonia
  ([#3409](https://github.com/taiga-family/taiga-ui/issues/3409))
  ([29bf460](https://github.com/taiga-family/taiga-ui/commit/29bf460c2c1a2ff44a417c1fbe012a7d19338662))
- **kit:** fix `TUI_COUNTRIES_MASKS` of French Polynesia ([#3435](https://github.com/taiga-family/taiga-ui/issues/3435))
  ([926bb66](https://github.com/taiga-family/taiga-ui/commit/926bb66a9f5480f85760b106a873decd3f118224))
- **kit:** support `updateOn` of `blur` and `submit` types for `multi-select` component
  ([#3398](https://github.com/taiga-family/taiga-ui/issues/3398))
  ([0a2daff](https://github.com/taiga-family/taiga-ui/commit/0a2daff2f3edfc44089a8dd1ac9b4e2d3db6ff37))
- **kit:** update statically `HostBinding` in `line-clamp`
  ([#3394](https://github.com/taiga-family/taiga-ui/issues/3394))
  ([3835043](https://github.com/taiga-family/taiga-ui/commit/3835043401c18a065fbb937302abd3447e4a4534))
- **kit:** use `new-password` as lucky solution for disable autofill of input elements
  ([#3389](https://github.com/taiga-family/taiga-ui/issues/3389))
  ([9458439](https://github.com/taiga-family/taiga-ui/commit/94584393e806fcb19e677fa06842c12cf085d56b))

## [3.15.0](https://github.com/taiga-family/taiga-ui/compare/v3.14.0...v3.15.0) (2022-12-30)

### Features

- **addon-doc:** add `TUI_DOC_EXCLUDED_PROPERTIES` token to exclude inherited props
  ([#3267](https://github.com/taiga-family/taiga-ui/issues/3267))
  ([07d0aac](https://github.com/taiga-family/taiga-ui/commit/07d0aac5a9029caec63b298773b03eb2697d60c6))
- **addon-editor:** support hilite groups ([#3283](https://github.com/taiga-family/taiga-ui/issues/3283))
  ([c632052](https://github.com/taiga-family/taiga-ui/commit/c632052754ac3c2513b36ec3828d36ec72d0b66c))
- **addon-table:** add items to `TUI_TABLE_PAGINATION_OPTIONS` token
  ([#3276](https://github.com/taiga-family/taiga-ui/issues/3276))
  ([5dbdae0](https://github.com/taiga-family/taiga-ui/commit/5dbdae071af013c51a678dc85b29d08c1cdf4433))
- **cdk:** `Schematics` add root path option ([#3274](https://github.com/taiga-family/taiga-ui/issues/3274))
  ([00a0e4d](https://github.com/taiga-family/taiga-ui/commit/00a0e4d7d8c467db705b59435bef312583e77e9d))
- **core:** `tuiDropdownSidedOffset` add new input ([#3345](https://github.com/taiga-family/taiga-ui/issues/3345))
  ([0215211](https://github.com/taiga-family/taiga-ui/commit/02152111dc55021b88bb7f9bce0eb4580bce772c))
- **core:** dynamic switch view of calendar when value changes
  ([#3337](https://github.com/taiga-family/taiga-ui/issues/3337))
  ([bc05066](https://github.com/taiga-family/taiga-ui/commit/bc050662ff20b27d0cbc9658fa52bc58739ae505))
- **core:** replace `TUI_DROPDOWN_OFFSET` with injection token
  ([#3141](https://github.com/taiga-family/taiga-ui/issues/3141))
  ([a126af0](https://github.com/taiga-family/taiga-ui/commit/a126af04e22da277182989fef57bb4629c53f798))
- **kit:** `InputTag` add max number of rows for `expandable` mode
  ([#3339](https://github.com/taiga-family/taiga-ui/issues/3339))
  ([82d2679](https://github.com/taiga-family/taiga-ui/commit/82d2679888c2fa1a2bc3a75e9e0513cde6576256))
- **kit:** add `showDelete` input prop for `TuiFileComponent`
  ([#3342](https://github.com/taiga-family/taiga-ui/issues/3342))
  ([67c40f3](https://github.com/taiga-family/taiga-ui/commit/67c40f374d88fd766e1ee52085c653070200969f))
- **kit:** support empty value in `InputCount` ([#3317](https://github.com/taiga-family/taiga-ui/issues/3317))
  ([a1e112b](https://github.com/taiga-family/taiga-ui/commit/a1e112b7c7e632bcfea4cb98c9f8254376bdbb72))

### Bug Fixes

- **addon-table:** export `TuiTablePagination` ([#3331](https://github.com/taiga-family/taiga-ui/issues/3331))
  ([e93cda3](https://github.com/taiga-family/taiga-ui/commit/e93cda32ec30d065f021e191c352bfd25fd20bcc))
- **core:** `DropdownContext` fix nested dropdowns ([#3288](https://github.com/taiga-family/taiga-ui/issues/3288))
  ([6fca3d4](https://github.com/taiga-family/taiga-ui/commit/6fca3d43ac7d8111aaf65744beac80f0e17fd670))
- **core:** fix overlapping prefix and value when resizing textfield
  ([#3316](https://github.com/taiga-family/taiga-ui/issues/3316))
  ([97999e6](https://github.com/taiga-family/taiga-ui/commit/97999e6c82987bf1453f92599564f5bf1dfa531f))
- **kit:** `Accordion` fix incorrectly focusing item ([#3289](https://github.com/taiga-family/taiga-ui/issues/3289))
  ([a81b132](https://github.com/taiga-family/taiga-ui/commit/a81b1321f1861afd9d2a4e1fdbd39161836f7ac6))
- **kit:** `NativeSelect` fix readonly state ([#3347](https://github.com/taiga-family/taiga-ui/issues/3347))
  ([ab9a266](https://github.com/taiga-family/taiga-ui/commit/ab9a266a4c2234512495050546f3d9a2b60918f5))
- **kit:** fix reopening nested dropdown ([#3263](https://github.com/taiga-family/taiga-ui/issues/3263))
  ([f08f1aa](https://github.com/taiga-family/taiga-ui/commit/f08f1aaa3cf5883966798909c120ea554b282bba))
- **testing:** skip unavailable cell for calendar ([#3334](https://github.com/taiga-family/taiga-ui/issues/3334))
  ([fe80197](https://github.com/taiga-family/taiga-ui/commit/fe80197e1fa7651a713104bcecaff1670e12b665))

## [3.14.0](https://github.com/taiga-family/taiga-ui/compare/v3.13.0...v3.14.0) (2022-12-19)

### Features

- **cdk:** `Resizer` add new directive ([#3248](https://github.com/taiga-family/taiga-ui/issues/3248))
  ([121e977](https://github.com/taiga-family/taiga-ui/commit/121e9775c3fe2b9ba0538fa1b9ebaed9fedc265d))
- **cdk:** add `--tui-backdrop` variable for dialog overlay
  ([#3251](https://github.com/taiga-family/taiga-ui/issues/3251))
  ([ebe2d80](https://github.com/taiga-family/taiga-ui/commit/ebe2d8024cf36dd52c0769e349db905263a46b09))
- **core:** `TextfieldController` add prefix, postfix and filler
  ([#3188](https://github.com/taiga-family/taiga-ui/issues/3188))
  ([75276fb](https://github.com/taiga-family/taiga-ui/commit/75276fb79ec5380bdd3428ff4c3861bd538cf439))
- **kit:** `ItemsWithMore` add new component ([#3230](https://github.com/taiga-family/taiga-ui/issues/3230))
  ([de63d7b](https://github.com/taiga-family/taiga-ui/commit/de63d7b056534320b1cc37aa452c5682ed7d5e76))
- **kit:** `SortCountries` add pipe for `InputPhoneInternational`
  ([#3257](https://github.com/taiga-family/taiga-ui/issues/3257))
  ([ffb6cd1](https://github.com/taiga-family/taiga-ui/commit/ffb6cd17972efbadd0c17041989487f0e0c88ac6))
- **kit:** `TextArea` support `s` size, fix `m` font and padding
  ([#3242](https://github.com/taiga-family/taiga-ui/issues/3242))
  ([cdb9c05](https://github.com/taiga-family/taiga-ui/commit/cdb9c052257301e79cc55876f3db901fc3661872))

### Bug Fixes

- **cdk:** share a single subscription to the underlying source observable between multiple subscribers
  ([#3174](https://github.com/taiga-family/taiga-ui/issues/3174))
  ([6ee6f50](https://github.com/taiga-family/taiga-ui/commit/6ee6f501882883f3c1bc11ec469d19f47a38ef56))
- **kit:** `File` fix background ([#3247](https://github.com/taiga-family/taiga-ui/issues/3247))
  ([9300260](https://github.com/taiga-family/taiga-ui/commit/93002604c05deb1c06f9d7022d97403f108a8a1f))
- **schematics:** exclude popular hidden directories ([#3252](https://github.com/taiga-family/taiga-ui/issues/3252))
  ([6ea575e](https://github.com/taiga-family/taiga-ui/commit/6ea575e3c3cd57341d2cd5614512916a518ca8d9))

## [3.13.0](https://github.com/taiga-family/taiga-ui/compare/v3.12.1...v3.13.0) (2022-12-12)

### Features

- **addon-table:** add paginationChange event ([#3105](https://github.com/taiga-family/taiga-ui/issues/3105))
  ([453c65f](https://github.com/taiga-family/taiga-ui/commit/453c65ff262aa687da375fd3a5f8a019f85bc7e9))
- **kit:** use `tuiIconClose` for size `s` ([#3192](https://github.com/taiga-family/taiga-ui/issues/3192))
  ([a80c85d](https://github.com/taiga-family/taiga-ui/commit/a80c85d4c277fdae1024e33e1d3639ab2bb32c5b))

### Bug Fixes

- **addon-tablebars:** fixed close button in table bar ([#3184](https://github.com/taiga-family/taiga-ui/issues/3184))
  ([bf5d6bd](https://github.com/taiga-family/taiga-ui/commit/bf5d6bd518a7fc83e29d0e8401dd21c41abd407d))
- **addon-table:** don't update direction order when updating sorter programmatically
  ([#3196](https://github.com/taiga-family/taiga-ui/issues/3196))
  ([0197d56](https://github.com/taiga-family/taiga-ui/commit/0197d5617acf55f2c80ea536b8e3eed060c0ac5c))
- **core:** `DataList` fix default size ([#3217](https://github.com/taiga-family/taiga-ui/issues/3217))
  ([9ab7a53](https://github.com/taiga-family/taiga-ui/commit/9ab7a53e40ef286cc251fdc68f13c1fc229e3733))
- **core:** `Dropdown` fix change detection inside dialogs
  ([#3200](https://github.com/taiga-family/taiga-ui/issues/3200))
  ([74df80d](https://github.com/taiga-family/taiga-ui/commit/74df80dd302c0fa8fdabfcaf063d2d99cc18c815))
- **i18n:** fix dutch translations for `multiSelectTexts`
  ([#3211](https://github.com/taiga-family/taiga-ui/issues/3211))
  ([41cb92e](https://github.com/taiga-family/taiga-ui/commit/41cb92eacda9ffbab5503c6bad3a6ef73ace6ebb))
- **kit:** `Tiles` fix handle inside Shadow DOM ([#3216](https://github.com/taiga-family/taiga-ui/issues/3216))
  ([35e5399](https://github.com/taiga-family/taiga-ui/commit/35e5399a47c12fb521456f2628b620c487fb89d7))

### [3.12.1](https://github.com/taiga-family/taiga-ui/compare/v3.12.0...v3.12.1) (2022-12-08)

### Bug Fixes

- **addon-commerce:** truncate float values without rounding
  ([#3176](https://github.com/taiga-family/taiga-ui/issues/3176))
  ([70e6887](https://github.com/taiga-family/taiga-ui/commit/70e6887fdb2dfaf0267f0362a6716a66751341a2))
- **i18n:** fix french `TUI_COUNTRIES_MASKS` should accept numbers without leading 0
  ([#3191](https://github.com/taiga-family/taiga-ui/issues/3191))
  ([11ee5ed](https://github.com/taiga-family/taiga-ui/commit/11ee5edfab20f09eec92a2604dcf8b7538d63e14))
- **kit:** `InputFiles` fix style encapsulation issue ([#3194](https://github.com/taiga-family/taiga-ui/issues/3194))
  ([cd907c0](https://github.com/taiga-family/taiga-ui/commit/cd907c0bc9b4c5a27605c6adf09309b14b85d35b))

## [3.12.0](https://github.com/taiga-family/taiga-ui/compare/v3.11.0...v3.12.0) (2022-12-05)

### Features

- **cdk:** `Schematics` migration multiple projects ([#3144](https://github.com/taiga-family/taiga-ui/issues/3144))
  ([cf25f6a](https://github.com/taiga-family/taiga-ui/commit/cf25f6a9ba142b25a6f6db4bd1034e8fe6aa5fe0))
- **cdk:** support `SafeHtml` input value in `tui-svg` ([#3166](https://github.com/taiga-family/taiga-ui/issues/3166))
  ([aad787b](https://github.com/taiga-family/taiga-ui/commit/aad787b76e662b49c44b3c62ab4202a9f2ffdab7))
- **kit:** avatar now accepts `SafeResourceUrl` as `avatarUrl`
  ([#3149](https://github.com/taiga-family/taiga-ui/issues/3149))
  ([d4bdf64](https://github.com/taiga-family/taiga-ui/commit/d4bdf64fd05f6dc58620fbb4159d158f822e2f37))

### Bug Fixes

- **addon-charts:** `Bar`, `BarSet` fix color getter ([#3148](https://github.com/taiga-family/taiga-ui/issues/3148))
  ([e7c517c](https://github.com/taiga-family/taiga-ui/commit/e7c517cfc94d2be3b77900d124e2bf7f5a32c828))
- **addon-editor:** allow paste base64 image ([#3138](https://github.com/taiga-family/taiga-ui/issues/3138))
  ([4222293](https://github.com/taiga-family/taiga-ui/commit/42222934708aa72139feb263ef926269ae595d6c))
- **addon-table:** `Reorder` fix wrong order when toggling visibility
  ([#3145](https://github.com/taiga-family/taiga-ui/issues/3145))
  ([0e7eb9b](https://github.com/taiga-family/taiga-ui/commit/0e7eb9b09a06f5e8b2154028bbd8852c3a1b660b))
- **cdk:** add `tuiControlValue` to schematic ([#3137](https://github.com/taiga-family/taiga-ui/issues/3137))
  ([465f834](https://github.com/taiga-family/taiga-ui/commit/465f834b1062496342f0eee5d405bca45cb32ac2))
- **kit:** `InputPhone` cut value by max phone length ([#3160](https://github.com/taiga-family/taiga-ui/issues/3160))
  ([67d80fc](https://github.com/taiga-family/taiga-ui/commit/67d80fc345918b9f13b727d1872b54ddd0880cfc))
- **kit:** `Range` broken alignment + artifact line before track
  ([#3136](https://github.com/taiga-family/taiga-ui/issues/3136))
  ([17dd30b](https://github.com/taiga-family/taiga-ui/commit/17dd30ba396f7ece9b0a45664cb01448bd0ebb69))
- **kit:** `Tiles` remove binding with JS to allow media query control
  ([#3164](https://github.com/taiga-family/taiga-ui/issues/3164))
  ([91e9f5f](https://github.com/taiga-family/taiga-ui/commit/91e9f5f230702ef564b70bcd6d3a443fd7846f45))
- **kit:** `Tiles` switch to CSS `order` to prevent DOM redraw
  ([#3170](https://github.com/taiga-family/taiga-ui/issues/3170))
  ([e90da1d](https://github.com/taiga-family/taiga-ui/commit/e90da1d82e11b71f0556158d4d681aebaef1160e))
- **kit:** Add missing `TUI_COUNTRIES_MASKS` for Overseas France
  ([#3112](https://github.com/taiga-family/taiga-ui/issues/3112))
  ([8c2a1c9](https://github.com/taiga-family/taiga-ui/commit/8c2a1c9540cc745ca4e4c62d2a7654df03737e7b))
- **kit:** fixed label text align for input files ([#3156](https://github.com/taiga-family/taiga-ui/issues/3156))
  ([699d473](https://github.com/taiga-family/taiga-ui/commit/699d47397d0b97d64e6f4adedadbd3424e9e2a05))

## [3.11.0](https://github.com/taiga-family/taiga-ui/compare/v3.10.0...v3.11.0) (2022-11-28)

### Features

- **kit:** `Tiles` add component ([#3124](https://github.com/taiga-family/taiga-ui/issues/3124))
  ([6facd5a](https://github.com/taiga-family/taiga-ui/commit/6facd5a80f793991edd79e0348e67f14d091de67))
- **kit:** support capture in input files ([#3065](https://github.com/taiga-family/taiga-ui/issues/3065))
  ([64d212c](https://github.com/taiga-family/taiga-ui/commit/64d212c120dd628b96fb051f15c654303cdd8c83))
- **testing:** calendar harness test ([#3058](https://github.com/taiga-family/taiga-ui/issues/3058))
  ([cfdb866](https://github.com/taiga-family/taiga-ui/commit/cfdb866b6bc74bf357af539ecc2cf6ec05acf877))

### Bug Fixes

- **addon-charts:** remove location origin from mask ([#3125](https://github.com/taiga-family/taiga-ui/issues/3125))
  ([eaaa1fa](https://github.com/taiga-family/taiga-ui/commit/eaaa1fa112dd487167d954c8ee0375cd27c1bfe3))
- **core:** `Dropdown` fix direction set with binding ([#3084](https://github.com/taiga-family/taiga-ui/issues/3084))
  ([866675e](https://github.com/taiga-family/taiga-ui/commit/866675e3d95ae951ceff28e728f0ebc7d1a7098e))
- **i18n:** fix vietnamese ([#3115](https://github.com/taiga-family/taiga-ui/issues/3115))
  ([9ae15c7](https://github.com/taiga-family/taiga-ui/commit/9ae15c7f4387c1ee5e378414cbe808c6d697ab31))
- **kit:** `Input` fix mask ([#3107](https://github.com/taiga-family/taiga-ui/issues/3107))
  ([9d721e1](https://github.com/taiga-family/taiga-ui/commit/9d721e1740e0597ae498b322884d2462d264af6d))
- **kit:** `Stepper` fix gap according to design spec ([#3095](https://github.com/taiga-family/taiga-ui/issues/3095))
  ([aafd26e](https://github.com/taiga-family/taiga-ui/commit/aafd26ebb90dd3c4d81863fa6d1d78d1b1434bf0))
- **kit:** `Stepper` scroll to active step when activeItemIndex changes
  ([#3080](https://github.com/taiga-family/taiga-ui/issues/3080))
  ([235100e](https://github.com/taiga-family/taiga-ui/commit/235100e01fcdb7e019a6a1ce93eadc89506253bf))
- **kit:** correct default active month based on `min/max`
  ([#3092](https://github.com/taiga-family/taiga-ui/issues/3092))
  ([e1668e7](https://github.com/taiga-family/taiga-ui/commit/e1668e7d85e91c20bc2e7eaeddeed3098ec239d2))

## [3.10.0](https://github.com/taiga-family/taiga-ui/compare/v3.9.0...v3.10.0) (2022-11-16)

### Features

- **addon-editor:** improve ux for edit links ([#3008](https://github.com/taiga-family/taiga-ui/issues/3008))
  ([b432f04](https://github.com/taiga-family/taiga-ui/commit/b432f0433049ecb36e76ae34691796d34dff6033))
- **addon-editor:** support attach files ([#3056](https://github.com/taiga-family/taiga-ui/issues/3056))
  ([7a3fbad](https://github.com/taiga-family/taiga-ui/commit/7a3fbad244df4e7905ac0f784857d162878e4a4c))
- **addon-editor:** support nested counters in ordered list
  ([#3012](https://github.com/taiga-family/taiga-ui/issues/3012))
  ([1fc6ee6](https://github.com/taiga-family/taiga-ui/commit/1fc6ee69358f3226916559d436a661398f60ccdb))
- **addon-editor:** upgrade all tiptap dependencies ([#3001](https://github.com/taiga-family/taiga-ui/issues/3001))
  ([c0ba4e3](https://github.com/taiga-family/taiga-ui/commit/c0ba4e3b8748ad46f9569251eac7fb6099cd7d3b))
- **cdk:** implement `tuiIsPresent` pipe ([#3002](https://github.com/taiga-family/taiga-ui/issues/3002))
  ([db4a29b](https://github.com/taiga-family/taiga-ui/commit/db4a29bf617b574815db7df13ffc319f1208dd35))
- **core:** `DataList` add `size` input, deprecate `size` for `Option`
  ([#3071](https://github.com/taiga-family/taiga-ui/issues/3071))
  ([765ea01](https://github.com/taiga-family/taiga-ui/commit/765ea0129d1984d51700712395c18ac6d5ab6a71))
- **core:** `HostedDropdown` add `sided` input and `close` method to context
  ([#3060](https://github.com/taiga-family/taiga-ui/issues/3060))
  ([60bd0db](https://github.com/taiga-family/taiga-ui/commit/60bd0dbc65af2bbd4f8562c1addefa1163e1a172))
- **core:** change underline color for today cell in calendar
  ([#3037](https://github.com/taiga-family/taiga-ui/issues/3037))
  ([331158a](https://github.com/taiga-family/taiga-ui/commit/331158a78bcf0794d1effe04a23ff4b7a3d8832d))
- **testing:** accordion harness test ([#3018](https://github.com/taiga-family/taiga-ui/issues/3018))
  ([5905545](https://github.com/taiga-family/taiga-ui/commit/590554541d16f11d9241f5641ce2c5c582338fe1))
- **testing:** avatar harness test ([#3019](https://github.com/taiga-family/taiga-ui/issues/3019))
  ([970e1d0](https://github.com/taiga-family/taiga-ui/commit/970e1d08f1584ef279abafd7621b398130cd0a9d))

### Bug Fixes

- **addon-commerce:** `InputExpire` fix translation in safari
  ([#3043](https://github.com/taiga-family/taiga-ui/issues/3043))
  ([1a258c5](https://github.com/taiga-family/taiga-ui/commit/1a258c50960ee65745791367ea564c917a0e9e25))
- **addon-commerce:** fix safari expire autofill ([#3015](https://github.com/taiga-family/taiga-ui/issues/3015))
  ([c2aac4b](https://github.com/taiga-family/taiga-ui/commit/c2aac4b2ad5ede251da8b8fb1a66d8d8be70bb61))
- **addon-doc:** scroll to last element in DOM if there are several
  ([#3040](https://github.com/taiga-family/taiga-ui/issues/3040))
  ([883db38](https://github.com/taiga-family/taiga-ui/commit/883db38ac63aad27e72819838bbf75afac023986))
- **addon-editor:** support long words inside bulleted or ordered list
  ([#3038](https://github.com/taiga-family/taiga-ui/issues/3038))
  ([c93ae27](https://github.com/taiga-family/taiga-ui/commit/c93ae2781367565cf36455c268a3f7cc8f207696))
- **addon-editor:** support write simple text after marked link
  ([#3021](https://github.com/taiga-family/taiga-ui/issues/3021))
  ([a2f0123](https://github.com/taiga-family/taiga-ui/commit/a2f01236e6df6974e8bf31315ac3b40bccb5135a))
- **core:** `Dialog` fix padding ([#3009](https://github.com/taiga-family/taiga-ui/issues/3009))
  ([0a68461](https://github.com/taiga-family/taiga-ui/commit/0a68461150e1e95564fe99e4a7bb86d9d018d0fa))
- **core:** hide autofill button for Safari ([#3061](https://github.com/taiga-family/taiga-ui/issues/3061))
  ([27a6aa2](https://github.com/taiga-family/taiga-ui/commit/27a6aa24205c1cb42a8eb88f872c624a946d1822))
- **eslint-plugin:** broken `no-deep-imports` on `Windows`-OS
  ([#3053](https://github.com/taiga-family/taiga-ui/issues/3053))
  ([a3451c2](https://github.com/taiga-family/taiga-ui/commit/a3451c28a809b1ad2afc32d13cfa7288bf4cc253))
- **i18n:** fix french translations ([#3017](https://github.com/taiga-family/taiga-ui/issues/3017))
  ([2afc420](https://github.com/taiga-family/taiga-ui/commit/2afc4207866f1afd3f71dfd82458e866f430a68e))
- **kit:** icon in date-related components occupies space when hidden
  ([#2966](https://github.com/taiga-family/taiga-ui/issues/2966))
  ([27c2d79](https://github.com/taiga-family/taiga-ui/commit/27c2d79a7d1313a4372d04b5bfe93ba2f98afe2f))

## [3.9.0](https://github.com/taiga-family/taiga-ui/compare/v3.8.0...v3.9.0) (2022-10-31)

### Features

- **addon-editor:** add anchor extension ([#2931](https://github.com/taiga-family/taiga-ui/issues/2931))
  ([1e3a22a](https://github.com/taiga-family/taiga-ui/commit/1e3a22a6c245f5fd1a7eaa57547b7b0182d94175))
- **cdk:** `ScrollService` support `Window` ([#2955](https://github.com/taiga-family/taiga-ui/issues/2955))
  ([ccac3c0](https://github.com/taiga-family/taiga-ui/commit/ccac3c02d463c2186a240316ab36006aae8435fc))
- **core:** `DataList` update styles ([#2949](https://github.com/taiga-family/taiga-ui/issues/2949))
  ([3c219c1](https://github.com/taiga-family/taiga-ui/commit/3c219c1c39de08ced81e42fe29845e60322b7df7))
- **kit:** `Avatar`, `MarkerIcon` synchronize sizes ([#2975](https://github.com/taiga-family/taiga-ui/issues/2975))
  ([ebb8676](https://github.com/taiga-family/taiga-ui/commit/ebb8676e24cf99761e63d161862177e9321842b6))
- **kit:** `Select` add ability to use native select on mobile
  ([#2964](https://github.com/taiga-family/taiga-ui/issues/2964))
  ([c909bec](https://github.com/taiga-family/taiga-ui/commit/c909bec49bda91c83744c4295242c8b4a8990026))
- **kit:** add tokens for customizing different bundled dialogs
  ([#2490](https://github.com/taiga-family/taiga-ui/issues/2490))
  ([66e1aca](https://github.com/taiga-family/taiga-ui/commit/66e1acaaf8be5c10e8ba37f1708fdacb57eafe08))

### Bug Fixes

- **addon-editor:** support original order of colors in palette
  ([#2986](https://github.com/taiga-family/taiga-ui/issues/2986))
  ([0c869ca](https://github.com/taiga-family/taiga-ui/commit/0c869caaedff6242f336b3d8475e4c5d7f6b1550))
- **addon-editor:** support overflow content of table ([#2985](https://github.com/taiga-family/taiga-ui/issues/2985))
  ([89af6a9](https://github.com/taiga-family/taiga-ui/commit/89af6a91082795834e2d8b160c1894800980a259))
- **cdk:** add wrapper style migration ([#2971](https://github.com/taiga-family/taiga-ui/issues/2971))
  ([2f736a1](https://github.com/taiga-family/taiga-ui/commit/2f736a1b02da1120c11989356a4759a02109ebc9))
- **eslint-plugin:** fix incorrect project name search ([#2962](https://github.com/taiga-family/taiga-ui/issues/2962))
  ([dfbb09e](https://github.com/taiga-family/taiga-ui/commit/dfbb09eb0d1bbfdf3c3c94ce1ac922366aceb532))

## [3.8.0](https://github.com/taiga-family/taiga-ui/compare/v3.7.1...v3.8.0) (2022-10-24)

### Features

- **core:** `Button` add padding customization ([#2932](https://github.com/taiga-family/taiga-ui/issues/2932))
  ([91c1b81](https://github.com/taiga-family/taiga-ui/commit/91c1b81b57f5768dca877588e964fee53af8a90a))
- **core:** `PrimitiveCalendar` add ability to change the color of the days
  ([#2904](https://github.com/taiga-family/taiga-ui/issues/2904))
  ([3a14454](https://github.com/taiga-family/taiga-ui/commit/3a144547e0da3d5d8f33640b991fea39fd944fd9))
- **core:** disable smooth scrolling when users have prefers-reduced-motion enabled
  ([#2943](https://github.com/taiga-family/taiga-ui/issues/2943))
  ([05027f4](https://github.com/taiga-family/taiga-ui/commit/05027f451caed201e7e907677bc0e0fc621612e1))
- **core:** update shadows styles ([#2933](https://github.com/taiga-family/taiga-ui/issues/2933))
  ([37144b5](https://github.com/taiga-family/taiga-ui/commit/37144b526e2d5c1279b2e74026aea3993089e447))
- **icons:** add `tuiIconAnchorLarge` ([#2944](https://github.com/taiga-family/taiga-ui/issues/2944))
  ([1e28581](https://github.com/taiga-family/taiga-ui/commit/1e28581b376aa4b8751428ddfefc5879f34c3d57))
- **kit:** `InputYear` add new component ([#2919](https://github.com/taiga-family/taiga-ui/issues/2919))
  ([214fc30](https://github.com/taiga-family/taiga-ui/commit/214fc30a0d71ee0031860a1e26abf433ee2fcbb0))
- **testing:** add harness class for toggle component ([#2939](https://github.com/taiga-family/taiga-ui/issues/2939))
  ([3dd08ce](https://github.com/taiga-family/taiga-ui/commit/3dd08ce321bca9b80f3f62dd76026061ed3de5c7))

### Bug Fixes

- **cdk:** `schematics` always install styles package when migrating
  ([#2922](https://github.com/taiga-family/taiga-ui/issues/2922))
  ([52feffd](https://github.com/taiga-family/taiga-ui/commit/52feffdd817fd53b5ec7421d320e208023824d8b))
- **core:** fix notification padding and background color
  ([#2937](https://github.com/taiga-family/taiga-ui/issues/2937))
  ([4ef310d](https://github.com/taiga-family/taiga-ui/commit/4ef310d0454456d5081b4a6e7300b66c35299e9d))
- **kit:** `InputTag` fix pasting behaviour ([#2936](https://github.com/taiga-family/taiga-ui/issues/2936))
  ([cd5d309](https://github.com/taiga-family/taiga-ui/commit/cd5d3096497f59ea9c1da7282124d3760e65b82e))
- **kit:** `MarkerIcon` only show hover state for interactive elements
  ([#2950](https://github.com/taiga-family/taiga-ui/issues/2950))
  ([90da7d5](https://github.com/taiga-family/taiga-ui/commit/90da7d5bc93a393b8ae5718f5f92d2db37d30ecb))
- **kit:** `TextArea` fix height for size `m` ([#2952](https://github.com/taiga-family/taiga-ui/issues/2952))
  ([e17346d](https://github.com/taiga-family/taiga-ui/commit/e17346d9b51426e92b9e460a01955955b19c9d48))

### [3.7.1](https://github.com/taiga-family/taiga-ui/compare/v3.7.0...v3.7.1) (2022-10-18)

### Bug Fixes

- **addon-editor:** revert some breaking packages ([#2920](https://github.com/taiga-family/taiga-ui/issues/2920))
  ([48e3597](https://github.com/taiga-family/taiga-ui/commit/48e3597181aed9fcd19df9eda5f0bdb965e3ce6d))

## [3.7.0](https://github.com/taiga-family/taiga-ui/compare/v3.6.0...v3.7.0) (2022-10-18)

### Features

- **addon-editor:** upgrade `@tiptap/*` to latest ([#2855](https://github.com/taiga-family/taiga-ui/issues/2855))
  ([79e14c8](https://github.com/taiga-family/taiga-ui/commit/79e14c8d93abb7a7a5986f447d168156798ad893))
- **demo:** stackblitz starter available via `https://taiga-ui.dev/stackblitz`
  ([#2907](https://github.com/taiga-family/taiga-ui/issues/2907))
  ([71225b0](https://github.com/taiga-family/taiga-ui/commit/71225b0619c8c54253dafcb0c82c5c8869711904))
- **kit:** `ProgressBar` add `:indeterminate`-state ([#2876](https://github.com/taiga-family/taiga-ui/issues/2876))
  ([e311069](https://github.com/taiga-family/taiga-ui/commit/e3110694a2a9af0d7a3201daf29dc1a7b92351b2))
- **kit:** `Tabs` add vertical option ([#2862](https://github.com/taiga-family/taiga-ui/issues/2862))
  ([a0513c8](https://github.com/taiga-family/taiga-ui/commit/a0513c8f4d23466406f6d5f2dd46740db00d7bf1))
- **testing:** add harness tests for tag component ([#2746](https://github.com/taiga-family/taiga-ui/issues/2746))
  ([fb12283](https://github.com/taiga-family/taiga-ui/commit/fb12283ebe4abbea910a355f30b7b9a9811e1d1e))

### Bug Fixes

- **addon-commerce:** `InputCardGrouped` fix wrong offset for card number
  ([#2878](https://github.com/taiga-family/taiga-ui/issues/2878))
  ([c387fb2](https://github.com/taiga-family/taiga-ui/commit/c387fb288bd5c73c9a42d62c6b207f43ec8f7223))
- **addon-editor:** downgrade `@tiptap/extension-table` ([#2888](https://github.com/taiga-family/taiga-ui/issues/2888))
  ([93b0ed6](https://github.com/taiga-family/taiga-ui/commit/93b0ed66982d949e8b5cca204052f49e4a98db5d))
- **addon-table:** `Table` don't render column with unspecified template
  ([#2896](https://github.com/taiga-family/taiga-ui/issues/2896))
  ([526c40a](https://github.com/taiga-family/taiga-ui/commit/526c40a760fe72624bafd056e9bac17223e6248b))
- **core:** `DataList` fix first label padding ([#2870](https://github.com/taiga-family/taiga-ui/issues/2870))
  ([1988491](https://github.com/taiga-family/taiga-ui/commit/1988491739d53980991091bc34809374501a9a1b))
- **core:** `Hint` fix mobile offscreen overflow ([#2879](https://github.com/taiga-family/taiga-ui/issues/2879))
  ([5d606b3](https://github.com/taiga-family/taiga-ui/commit/5d606b3bca6ab6504035065935563af4410a4ac1))
- **core:** `TUI_FIRST_DAY_OF_WEEK` ignores DI-hierarchy ([#2868](https://github.com/taiga-family/taiga-ui/issues/2868))
  ([169cd5c](https://github.com/taiga-family/taiga-ui/commit/169cd5c30e80e91dba141d0af948aae034d09264))
- **docs:** Typo in the description of the tuiTextfieldMaxLength attribute
  ([#2882](https://github.com/taiga-family/taiga-ui/issues/2882))
  ([00ec432](https://github.com/taiga-family/taiga-ui/commit/00ec4327acf399e086a41674955589711e442980))
- **kit:** `MultiSelect` fix sanitizer warnings ([#2903](https://github.com/taiga-family/taiga-ui/issues/2903))
  ([0356d7d](https://github.com/taiga-family/taiga-ui/commit/0356d7d09716b65040c08867bef76c02ea267e7a))
- **kit:** `TextArea` add ability to override minHeight when using maxLength
  ([#2899](https://github.com/taiga-family/taiga-ui/issues/2899))
  ([7292a70](https://github.com/taiga-family/taiga-ui/commit/7292a709f8df4a3b41d729f6a66b4bb706d3649f))
- **styles:** put tui-island_transparent after tui-island_hoverable
  ([#2910](https://github.com/taiga-family/taiga-ui/issues/2910))
  ([833e4de](https://github.com/taiga-family/taiga-ui/commit/833e4de327a629045c4de91dd303cd82c9decba4))

### Deprecations

- **addon-table:** `*tuiRow` deprecation (use `*ngFor` + `tuiTableSort`-pipe)
  ([#2736](https://github.com/taiga-family/taiga-ui/issues/2736))
  ([5723e1b](https://github.com/taiga-family/taiga-ui/commit/5723e1b3f4569ad494d326ed3bd852d7e9156743))

## [3.6.0](https://github.com/taiga-family/taiga-ui/compare/v3.5.0...v3.6.0) (2022-10-11)

### Features

- **addon-table:** add `TuiDirectionOrderDirective` to sort by order
  ([#2782](https://github.com/taiga-family/taiga-ui/issues/2782))
  ([962084a](https://github.com/taiga-family/taiga-ui/commit/962084a36a9504166a47c45c4bce0f46324573f7))
- **kit:** `Avatar` add stacking option ([#2811](https://github.com/taiga-family/taiga-ui/issues/2811))
  ([0264b38](https://github.com/taiga-family/taiga-ui/commit/0264b388a43c916a1409ec187ba77754257188c5))
- **kit:** `Avatar` allow Taiga UI icons ([#2824](https://github.com/taiga-family/taiga-ui/issues/2824))
  ([cfa5ead](https://github.com/taiga-family/taiga-ui/commit/cfa5ead78c2c60c6bb469843b0272a3a882eaed6))
- **kit:** `Badge` add overflow ellipsis and title ([#2806](https://github.com/taiga-family/taiga-ui/issues/2806))
  ([02713d6](https://github.com/taiga-family/taiga-ui/commit/02713d63ebfd7290420df66d37b5919db9138c3c))
- **kit:** `Carousel` allow vertical alignment control ([#2814](https://github.com/taiga-family/taiga-ui/issues/2814))
  ([36d3c6f](https://github.com/taiga-family/taiga-ui/commit/36d3c6f019e61203e021d6c7854c9cdc7559286b))
- **kit:** `InputDate`, `InputDateRange`, `InputDateTime` add options DI token for custom icons
  ([#2785](https://github.com/taiga-family/taiga-ui/issues/2785))
  ([0fe5d5b](https://github.com/taiga-family/taiga-ui/commit/0fe5d5b7197ee435e64cea2155ff296e9a046c30))
- **kit:** `InputMonth`, `InputMonthRange` add options DI token
  ([#2840](https://github.com/taiga-family/taiga-ui/issues/2840))
  ([217d670](https://github.com/taiga-family/taiga-ui/commit/217d670a2df74139b76a047302558a07fa70bc43))

### Bug Fixes

- **addon-doc:** misaligned column fix ([#2815](https://github.com/taiga-family/taiga-ui/issues/2815))
  ([783f59c](https://github.com/taiga-family/taiga-ui/commit/783f59c4e78215d277e882a4f986daacf5ed46b8))
- **addon-editor:** edit link modal shouldn't overlap content
  ([#2803](https://github.com/taiga-family/taiga-ui/issues/2803))
  ([7f8643a](https://github.com/taiga-family/taiga-ui/commit/7f8643adc5ef562a63276ab9771ee3584c2c7477))
- **addon-editor:** normalize h1-h6 heading in editor socket
  ([#2808](https://github.com/taiga-family/taiga-ui/issues/2808))
  ([c8ff2d2](https://github.com/taiga-family/taiga-ui/commit/c8ff2d2d197802c3aa711e29f2d23270b29ee80c))
- **addon-editor:** removing all `!important` styles ([#2798](https://github.com/taiga-family/taiga-ui/issues/2798))
  ([a59afe8](https://github.com/taiga-family/taiga-ui/commit/a59afe8bddc1a084c819fb6389612b3fdbe2029e))
- **addon-editor:** support nested ordered list inside a bullet list
  ([#2805](https://github.com/taiga-family/taiga-ui/issues/2805))
  ([340ebdc](https://github.com/taiga-family/taiga-ui/commit/340ebdc4877d8a10fee83b71d0c2d4fe0557aede))
- **addon-editor:** use `starterKit` only from custom extension
  ([#2845](https://github.com/taiga-family/taiga-ui/issues/2845))
  ([98311f8](https://github.com/taiga-family/taiga-ui/commit/98311f877c3136eb6438d5b84e02f3dde91dce28))
- **cdk:** `Obscured` fix for SSR ([#2835](https://github.com/taiga-family/taiga-ui/issues/2835))
  ([6b69efb](https://github.com/taiga-family/taiga-ui/commit/6b69efba4e1dad508f9f835b2d5928d1fce8ace7))
- **cdk:** `schematics` error `Cannot read property 'getInitializer' of undefined`
  ([#2828](https://github.com/taiga-family/taiga-ui/issues/2828))
  ([8d5f40b](https://github.com/taiga-family/taiga-ui/commit/8d5f40bff6d17cc5bd35f98e412c5a6c22a50fa0))
- **kit:** `MultiSelect` fix overflow issues ([#2847](https://github.com/taiga-family/taiga-ui/issues/2847))
  ([372410e](https://github.com/taiga-family/taiga-ui/commit/372410e4a6057e3fd09b390abf71fee25e4bd629))
- **kit:** `RadioLabeled` fix disabled label style ([#2842](https://github.com/taiga-family/taiga-ui/issues/2842))
  ([001c0ad](https://github.com/taiga-family/taiga-ui/commit/001c0ad208d33477156038c14faf90e3ddb58c92))
- **styles:** move required styles from `styles` package to tui-root
  ([#2854](https://github.com/taiga-family/taiga-ui/issues/2854))
  ([033960d](https://github.com/taiga-family/taiga-ui/commit/033960de23f90f516f810e76a07d37271b6390cd))
- **styles:** pseudo elements `:after` aren't removed in Safari 16
  ([#2825](https://github.com/taiga-family/taiga-ui/issues/2825))
  ([fdab37a](https://github.com/taiga-family/taiga-ui/commit/fdab37ac0ac27dd7836b23691cc463165d6eb70b))

## [3.5.0](https://github.com/taiga-family/taiga-ui/compare/v3.4.0...v3.5.0) (2022-10-03)

### Features

- **addon-charts:** `BarSet` add label ([#2780](https://github.com/taiga-family/taiga-ui/issues/2780))
  ([d4f4ce0](https://github.com/taiga-family/taiga-ui/commit/d4f4ce05678f663437e092bcbc5c18c6a7e73f97))
- **addon-commerce:** `InputCard` extend custom icon type to `PolymorpheusContent`
  ([#2788](https://github.com/taiga-family/taiga-ui/issues/2788))
  ([b8eff54](https://github.com/taiga-family/taiga-ui/commit/b8eff54e8e10da6ba6fcafd60aed0e818116db59))
- **core:** `Dialog` allow `Default` change detection strategy to work
  ([#2762](https://github.com/taiga-family/taiga-ui/issues/2762))
  ([f71ed71](https://github.com/taiga-family/taiga-ui/commit/f71ed7145ae88b7099becd67915426785dfdcd5a))
- **kit:** `InputTime` add checkmark near selected time ([#2763](https://github.com/taiga-family/taiga-ui/issues/2763))
  ([75be9bc](https://github.com/taiga-family/taiga-ui/commit/75be9bcb19257e2427690eecc94f8eb4b00c7c83))

### Bug Fixes

- **addon-charts:** make hint properties dynamic ([#2774](https://github.com/taiga-family/taiga-ui/issues/2774))
  ([0a7a068](https://github.com/taiga-family/taiga-ui/commit/0a7a0689f247082932f2f43876e2ec5dd78341d1))
- **addon-commerce:** show caret color when filling in input card group value
  ([#2794](https://github.com/taiga-family/taiga-ui/issues/2794))
  ([aae0212](https://github.com/taiga-family/taiga-ui/commit/aae0212c82854deec152f8e99998aed4592e57c0))
- **addon-editor:** add missing starterkit dependencies ([#2764](https://github.com/taiga-family/taiga-ui/issues/2764))
  ([3d017b6](https://github.com/taiga-family/taiga-ui/commit/3d017b66f88bc5112d243f666847b07095aa30a0))
- **core:** `Expand` return `tuiExpandContent`-directive ([#2753](https://github.com/taiga-family/taiga-ui/issues/2753))
  ([0027332](https://github.com/taiga-family/taiga-ui/commit/00273321b5b7b1115ba899d622654e7946de2e45))
- **kit:** `InputNumber` introduce safe integers for min/max props
  ([#2781](https://github.com/taiga-family/taiga-ui/issues/2781))
  ([27f7c86](https://github.com/taiga-family/taiga-ui/commit/27f7c86dd3146145318070fb0fdf10cba18e5d6c))

## [3.4.0](https://github.com/taiga-family/taiga-ui/compare/v3.3.0...v3.4.0) (2022-09-27)

### Features

- **testing:** add component harness test for primitive-textfield component
  ([#2584](https://github.com/taiga-family/taiga-ui/issues/2584))
  ([40e2a91](https://github.com/taiga-family/taiga-ui/commit/40e2a916564c5d669750dbbee9c799b82d442775))
- **testing:** add harness for island ([#2727](https://github.com/taiga-family/taiga-ui/issues/2727))
  ([f938d49](https://github.com/taiga-family/taiga-ui/commit/f938d491bc7c0a9a806b354776f0d50709d04e32))

### Bug Fixes

- **addon-editor:** add deps for starter-kit ([#2757](https://github.com/taiga-family/taiga-ui/issues/2757))
  ([8c07868](https://github.com/taiga-family/taiga-ui/commit/8c078689ee01aa9a242237b70ecd628a329a3fe8))
- **cdk:** `schematics` add `Node.js < 16`-support ([#2744](https://github.com/taiga-family/taiga-ui/issues/2744))
  ([69d20d5](https://github.com/taiga-family/taiga-ui/commit/69d20d508dd92dc353dc0e080cf138446bbb7fa2))
- **core:** `Hint` fix offscreen position on small devices
  ([#2749](https://github.com/taiga-family/taiga-ui/issues/2749))
  ([e249a54](https://github.com/taiga-family/taiga-ui/commit/e249a54c740cf3ac35bf57234542d950a867e5e3))
- **core:** `PrimitiveTextfield` drop wrong `text-overflow: ellipsis` (horizontal scroll bug)
  ([#2733](https://github.com/taiga-family/taiga-ui/issues/2733))
  ([2ddc249](https://github.com/taiga-family/taiga-ui/commit/2ddc24947b5324f58cc3a903a2e63a48f9c1d673))
- **demo:** `Stackblitz` broken styles ([#2747](https://github.com/taiga-family/taiga-ui/issues/2747))
  ([1bf9e2d](https://github.com/taiga-family/taiga-ui/commit/1bf9e2d88f4543fb259d8807f666791239c5059f))
- **eslint-plugin:** `no-deep-imports` add `Windows`-OS support
  ([#2741](https://github.com/taiga-family/taiga-ui/issues/2741))
  ([e54e3de](https://github.com/taiga-family/taiga-ui/commit/e54e3de79d47afdfab45e2c59932059aa42c57d7))

## [3.3.0](https://github.com/taiga-family/taiga-ui/compare/v3.2.0...v3.3.0) (2022-09-16)

### Features

- **eslint-plugin:** new `no-deep-imports`-rule ([#2666](https://github.com/taiga-family/taiga-ui/issues/2666))
  ([467420e](https://github.com/taiga-family/taiga-ui/commit/467420edc83da349fce9dfa00a099d7845b0913f))
- **eslint-plugin:** new `prefer-inject-decorator`-rule ([#2688](https://github.com/taiga-family/taiga-ui/issues/2688))
  ([3105204](https://github.com/taiga-family/taiga-ui/commit/3105204efdc4c7ecaa9d51e12a3f5c1110bc79c7))

### Bug Fixes

- **addon-table:** support partial objects ([#2722](https://github.com/taiga-family/taiga-ui/issues/2722))
  ([550b11a](https://github.com/taiga-family/taiga-ui/commit/550b11ade0fd951a6f42659909de9cc58f392b50))
- **core:** `styles` sync `.scss`-files with `.less`-files
  ([#2717](https://github.com/taiga-family/taiga-ui/issues/2717))
  ([1549898](https://github.com/taiga-family/taiga-ui/commit/154989812739818b2c21c439411aedb9f562a02b))
- **kit:** `InputFlies` new value of i18n-token `TUI_INPUT_FILE_TEXTS` triggers text changes
  ([#2711](https://github.com/taiga-family/taiga-ui/issues/2711))
  ([fa4e1e1](https://github.com/taiga-family/taiga-ui/commit/fa4e1e184b9bdac06add3b4c249bca151f2b8d9f))
- **kit:** `InputPhoneInternational` extend country masks for Croatia and Bosnia
  ([#2713](https://github.com/taiga-family/taiga-ui/issues/2713))
  ([d26b3cb](https://github.com/taiga-family/taiga-ui/commit/d26b3cbf51264f423c3680b04df1efefaeb8360d))

## [3.2.0](https://github.com/taiga-family/taiga-ui/compare/v3.1.0...v3.2.0) (2022-09-12)

### Features

- **eslint-plugin:** new `injection-token-description`-rule
  ([#2661](https://github.com/taiga-family/taiga-ui/issues/2661))
  ([3a30d5b](https://github.com/taiga-family/taiga-ui/commit/3a30d5b61e09f567309de7526fe46d534b77f5c6))
- **kit:** `InputDateRange` navigate months in sync, cancel unfinished range on esc
  ([#2647](https://github.com/taiga-family/taiga-ui/issues/2647))
  ([14f2907](https://github.com/taiga-family/taiga-ui/commit/14f2907ceb775bfaf6b303a2fe2fbe21754fffa5))

### Bug Fixes

- **addon-editor:** using editor-socket inside editor to fix editor styles
  ([#2631](https://github.com/taiga-family/taiga-ui/issues/2631))
  ([68b0acb](https://github.com/taiga-family/taiga-ui/commit/68b0acb048eb6a3f3544f5fe077b3ede0c048bd8))
- **addon-table:** Type string is not assignable to type keyof T
  ([#2649](https://github.com/taiga-family/taiga-ui/issues/2649))
  ([bb6d824](https://github.com/taiga-family/taiga-ui/commit/bb6d824c37a986d248e7af1aa1f2c7aa9c13a7b1))
- **cdk:** `schematics` migration 3.x `Error: Cannot determine project target configuration`
  ([#2669](https://github.com/taiga-family/taiga-ui/issues/2669))
  ([eba43c0](https://github.com/taiga-family/taiga-ui/commit/eba43c0ddd716f23eb0ed7cdfd1989c0977aafd7))
- **core:** support `text-overflow` in `tuiTextfield` ([#2657](https://github.com/taiga-family/taiga-ui/issues/2657))
  ([9b72134](https://github.com/taiga-family/taiga-ui/commit/9b72134f54d83a501dbd858d6178cf73d8dcd2ff))
- **demo:** make `Stackblitz` to be compatible with `Taiga UI 3.0`
  ([#2636](https://github.com/taiga-family/taiga-ui/issues/2636))
  ([5130208](https://github.com/taiga-family/taiga-ui/commit/51302086222762ce7254b70a6c3744aea6f8e80d))

## [3.1.0](https://github.com/taiga-family/taiga-ui/compare/v3.0.1...v3.1.0) (2022-09-07)

### Features

- **addon-table:** `TUI_TABLE_PAGINATION_OPTIONS` add `showPages` option
  ([#2586](https://github.com/taiga-family/taiga-ui/issues/2586))
  ([dc70f38](https://github.com/taiga-family/taiga-ui/commit/dc70f38d27319bd77185df095c8e4e7b41c0239f))
- **testing:** `SVG`, `Badge` component harness ([#2582](https://github.com/taiga-family/taiga-ui/issues/2582))
  ([1a8b77a](https://github.com/taiga-family/taiga-ui/commit/1a8b77a83e8614ddbf817e516787d2bddb1bec70)),
  ([#2583](https://github.com/taiga-family/taiga-ui/issues/2583))
  ([5797282](https://github.com/taiga-family/taiga-ui/commit/579728279707bc600aa5d7043fdbd51fcdaa9eff))

### Bug Fixes

- add compatibility with TypeScript 4.8 ([#2608](https://github.com/taiga-family/taiga-ui/issues/2608))
  ([42f8d91](https://github.com/taiga-family/taiga-ui/commit/42f8d91f8d6b57a564f72be8781c8a09ef527c46))
- **addon-commerce:** `InputCardGrouped` fix dropdown width
  ([#2616](https://github.com/taiga-family/taiga-ui/issues/2616))
  ([4aa5026](https://github.com/taiga-family/taiga-ui/commit/4aa502682e37ca8de5e89df166bb2588be021c11))
- **addon-table:** `ThGroup` fix columns updating ([#2602](https://github.com/taiga-family/taiga-ui/issues/2602))
  ([1de7c24](https://github.com/taiga-family/taiga-ui/commit/1de7c2447582ac29dbbb425973c3fd6d30105b68))
- **cdk:** `parse5` & `ng-morph` move `dependencies` => `optionalDependencies`
  ([#2604](https://github.com/taiga-family/taiga-ui/issues/2604))
  ([8a6d3a8](https://github.com/taiga-family/taiga-ui/commit/8a6d3a8262807839e69db077bab270f6b804fd0e))
- **core:** fix dialog header type ([#2559](https://github.com/taiga-family/taiga-ui/issues/2559))
  ([36d0aa4](https://github.com/taiga-family/taiga-ui/commit/36d0aa4abc2ef1065110a698f246e8f56be30996))
- **kit:** `Carousel` reset autoscroll timer when index changes
  ([#2614](https://github.com/taiga-family/taiga-ui/issues/2614))
  ([4c1b958](https://github.com/taiga-family/taiga-ui/commit/4c1b9586579900101ed44805f3463c1b18fbea5c))
- **kit:** `InputNumber` fix positive min/negative max clipping
  ([#2575](https://github.com/taiga-family/taiga-ui/issues/2575))
  ([87b13f7](https://github.com/taiga-family/taiga-ui/commit/87b13f7381ca945ad56b93accccbeb45d0bceb25))

### [3.0.1](https://github.com/taiga-family/taiga-ui/compare/v3.0.0...v3.0.1) (2022-09-01)

### Bug Fixes

- **cdk:** `schematics` fix 3.0-migration for `tuiTextfieldInputMode`
  ([#2544](https://github.com/taiga-family/taiga-ui/issues/2544))
  ([9f8fd3d](https://github.com/taiga-family/taiga-ui/commit/9f8fd3d2454e1a32b1dd40cd455292524857b658))
- **core:** `DropdownContext` close previous dropdown after new one is opened
  ([#2535](https://github.com/taiga-family/taiga-ui/issues/2535))
  ([ae45123](https://github.com/taiga-family/taiga-ui/commit/ae451233a3cf1c79ca137431b51a39df028abeb0))

## [3.0.0](https://github.com/taiga-family/taiga-ui/compare/v2.62.1...v3.0.0) (2022-08-30)

### ⚠ BREAKING CHANGES

- Update to Angular 12 ([#2080](https://github.com/taiga-family/taiga-ui/issues/2080),
  [#2097](https://github.com/taiga-family/taiga-ui/issues/2097),
  [#2110](https://github.com/taiga-family/taiga-ui/issues/2110)). Enable `Ivy` by default
  ([#2076](https://github.com/taiga-family/taiga-ui/issues/2076)). Drop legacy `View Engine`-support.
- Migrate to [Polymorpheus](https://github.com/taiga-family/ng-polymorpheus) 4.x.x
  ([#2165](https://github.com/taiga-family/taiga-ui/issues/2165)).
- Update supported browser versions. Drop support of legacy not-chromium Edge (EdgeHTML)
  ([#2318](https://github.com/taiga-family/taiga-ui/issues/2318)). Bump supported `Safari` to `12.1+`
  ([#2391](https://github.com/taiga-family/taiga-ui/issues/2391)).
- All exported entities without `tui`-prefix was renamed to the same one with prefix: functions, constants, pipes,
  classes, etc.
- **styles:** move all global styles from `@taiga-ui/core` to new optional package `@taiga-ui/styles`
  ([#2320](https://github.com/taiga-family/taiga-ui/issues/2320)). Delete `tui-palette.less` (`data-tui-background` and
  `data-tui-color` global states) ([#2473](https://github.com/taiga-family/taiga-ui/issues/2473)).
- **core:** `Dropdown` refactor dropdowns completely ([#2389](https://github.com/taiga-family/taiga-ui/issues/2389)).
- **kit:** remove legacy `InputFile` component ([#2087](https://github.com/taiga-family/taiga-ui/issues/2087)). Use new
  `InputFiles` component instead.
- **addon-editor:** replace legacy `Editor` with new one based on popular open-source solution
  [TipTap](https://tiptap.dev).
- **core:** `Hint` support 12 directions ([#2256](https://github.com/taiga-family/taiga-ui/issues/2256)). Add context
  input ([#2273](https://github.com/taiga-family/taiga-ui/issues/2273)). Add new directive `HintDescribe`
  ([#2495](https://github.com/taiga-family/taiga-ui/issues/2495)). `HintController` remove separate module (move inside
  `TuiHintModule`) ([#2484](https://github.com/taiga-family/taiga-ui/issues/2484)).
- **core:** `TuiTextfieldController` delete `tuiTextfieldAutocomplete`, `tuiTextfieldExampleText`,
  `tuiTextfieldInputMode`, `tuiTextfieldMaxLength`, `tuiTextfieldType`
  ([#2410](https://github.com/taiga-family/taiga-ui/issues/2410)) in favor of native input alternatives. Allow passing
  icons at both sides simultaneously in textfield components
  ([#2037](https://github.com/taiga-family/taiga-ui/issues/2037)).
- **kit:** `Slider` | `InputSlider` | `Range` | `InputRange` drop all deprecated API
  ([#2200](https://github.com/taiga-family/taiga-ui/issues/2200),
  [#2207](https://github.com/taiga-family/taiga-ui/issues/2207),
  [#2215](https://github.com/taiga-family/taiga-ui/issues/2215),
  [#2243](https://github.com/taiga-family/taiga-ui/issues/2243)). Use strict version of `TuiKeySteps`
  ([#2220](https://github.com/taiga-family/taiga-ui/issues/2220)). Delete legacy `<tui-slider />`
  ([#2184](https://github.com/taiga-family/taiga-ui/issues/2184)).
- **kit:** `Action` new selector `button[tuiAction], a[tuiAction]`
  ([#2479](https://github.com/taiga-family/taiga-ui/issues/2479)). Better customization + new API
  ([#2505](https://github.com/taiga-family/taiga-ui/issues/2505))
- **kit:** `Stepper` rename `state` input (=> `stepState`) to avoid collision with `routerLink`
  ([#2437](https://github.com/taiga-family/taiga-ui/issues/2437)).
- **core:** remove `tuiExpandContent` directive ([#2501](https://github.com/taiga-family/taiga-ui/issues/2501))
- **kit:** `DataListDropdownManager` move into separate module
  ([#2317](https://github.com/taiga-family/taiga-ui/issues/2317))
- **cdk:** `Let` directive can emit `null` ([#2496](https://github.com/taiga-family/taiga-ui/issues/2496))
- **cdk:** remove deprecated `setNativeFocused`,`tuiCustomEvents`, `tuiPadStart`, `getClosestElement`, `fallbackValue`
  ([#2074](https://github.com/taiga-family/taiga-ui/issues/2074),
  [#2276](https://github.com/taiga-family/taiga-ui/issues/2276)). Use native alternatives.
- **core:** `tuiFormatNumber(value, configs)` new function signature
  ([#2309](https://github.com/taiga-family/taiga-ui/issues/2309))
- **cdk:** `tuiGetClosestFocusableElement(configs)` new function signature
  ([#2436](https://github.com/taiga-family/taiga-ui/issues/2436))
- **core:** new names of css breakpoints ([#2393](https://github.com/taiga-family/taiga-ui/issues/2393)).
- **core:** remove deprecated pluralize ([#2222](https://github.com/taiga-family/taiga-ui/issues/2222)). Use Angular
  built-in [I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe).
- **core:** move fonts to separate file `taiga-ui-fonts.less`
  ([#2132](https://github.com/taiga-family/taiga-ui/issues/2132))
- Replace deprecated directives (`*tuiTab`, `*tuiBreadcrumb`,`[tuiToolbarTool]`) with universal `tuiItem`-directive
  ([#2069](https://github.com/taiga-family/taiga-ui/issues/2069))
- Move all color-converter utils (`addon-editor` / `addon-doc` => `cdk`)
  ([#2280](https://github.com/taiga-family/taiga-ui/issues/2280))
- Remove `tui-wrapper`, `tui-group`, `table-mode`, `field-error` component, `tui-breadcrumb` items
  ([#2121](https://github.com/taiga-family/taiga-ui/issues/2121)).
- **kit:** remove deprecated `TUI_MOBILE_AWARE` ([#2099](https://github.com/taiga-family/taiga-ui/issues/2099)).
- **core:** `AlertComponent` use new context ([#2362](https://github.com/taiga-family/taiga-ui/issues/2362))
- **cdk:** `PortalService` switch to using `PolymorpheusComponent`
- **addon-commerce, addon-chart:** remove deprecated enums
  ([#2095](https://github.com/taiga-family/taiga-ui/issues/2095))
- remove deprecated core-enums, `TuiColor`, `colorFallback`, `DEFAULT_COLORS`, `TuiColorHandler`
  ([#2158](https://github.com/taiga-family/taiga-ui/issues/2158))
- remove date-time related deprecations, `EMPTY_VALIDATOR`
  ([#2164](https://github.com/taiga-family/taiga-ui/issues/2164))
- remove deprecated properties from `AbstractTuiInteractive`
  ([#2124](https://github.com/taiga-family/taiga-ui/issues/2124))
- remove autofill enums ([#2500](https://github.com/taiga-family/taiga-ui/issues/2500)).

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
- If any problem still persists, please, [create an issue](https://github.com/taiga-family/taiga-ui/issues/new/choose).

## [2.x CHANGELOG...](https://taiga-ui.dev/v2/changelog)
