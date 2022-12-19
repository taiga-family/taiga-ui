# Changelog

All notable changes to this project will be documented in this file. See
[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
