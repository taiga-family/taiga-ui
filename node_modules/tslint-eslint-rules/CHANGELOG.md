# Change Log

## [Unreleased]

## [v5.4.0] - August 14, 2018
*Rules*
- `ter-padded-blocks`

*Updates*
- `object-curly-spacing`: supports `arraysInObjects/objectsInObjects` options.
- Support for typescript 3.0


## [v5.3.1] - May 15, 2018
#### Features
- `valid-jsdoc` recognizes `@inheritDoc` tag

#### Bug fixes
- `sort-imports` rule reads imports correctly (Issue #319)
- `space-in-parens` bugfix when using default options (Issue #305)
- `no-multi-spaces` bugfix in string literals.

NOTE: The Github tag v5.3.0 was deleted since it the NPM package
missed a bugfix due to not syncing the branches locally.


## [v5.2.0] - May 08, 2018
### Rules
- `ter-no-proto`
- `ter-no-script-url`
- `ter-no-self-compare`

### Fixes
- `ter-newline-after-var` - issue 302


## [v5.1.0] - Feb 24, 2018
### Rules
- `ter-padded-blocks`

### Fixes
- `ter-indent`: failed when missing `VariableDeclarator` options ([bfff0e6])
- `ter-newline-after-var`: incorrectly fixing code and within try catch block ([d930c6c])

[bfff0e6]: https://github.com/buzinas/tslint-eslint-rules/commit/bfff0e60263ff4fa38280739566e99c523d9fd4d
[d930c6c]: https://github.com/buzinas/tslint-eslint-rules/commit/d930c6c76de65f9f94d95624a65f5cfd537fe571

## [v5.0.0] - Feb 14, 2018
### Upgraded to TSLint 5.9 and Typescript 2.6
- NOTE: Another release will come soon that uses 2.7

#### Rules Added
- `ter-no-tabs`

See the differences in [v5.0.0] for more information on the changes.


## [v4.1.1] - May 26, 2017
#### Fixes
- valid-jsdoc reported missing return with abstract methods ([3bd2dafb])

[3bd2dafb]: https://github.com/buzinas/tslint-eslint-rules/commit/3bd2dafb22174d2912f1a9b73ca917abe52107fc


## [v4.1.0] - May 21, 2017
#### Fixes
- valid-jsdoc reported at wrong location ([82a3ca75])

#### Rules Added
- [ter-func-call-spacing](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terFuncCallSpacingRule.md)

#### Name Change
The following rule names have been renamed since they are no longer accessible with TSLint 5.0.

- `no-irregular-whitespace` changed to `ter-no-irregular-whitespace`
- `no-sparse-arrays` changed to `ter-no-sparse-arrays`

#### Removed
- `use-isnan`: This rule is now provided by TSLint.

[82a3ca75]: https://github.com/buzinas/tslint-eslint-rules/commit/82a3ca75678240976d868498407b3763ff57419c


## [v4.0.0] - April 4, 2017
### Upgraded to [TSLint 5.0](https://github.com/palantir/tslint/releases/tag/5.0.0)


## [v3.5.1] - 2017/03/17 23:00 GMT-0600
#### Fixes
- sort-imports bug in simple type imports ([3d57149])

[3d57149]: https://github.com/buzinas/tslint-eslint-rules/commit/3d571494aa5642f19f856fc361d5723a1b792e4a


## [v3.5.0] - 2017/03/16 15:20 GMT-0600
#### Fixes
- valid-jsdoc crashed with missing return type ([de16445])

#### Features
- valid-jsdoc added option to omitt return and parameters type ([b81e671])

#### Rules Added
- [sort-imports](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/sortImportsRule.md)

#### Fixers Added
- ter-indent ([b76ee05])

#### Other Changes

`tslint` peer dependency updated to 4.5.0

[de16445]: https://github.com/buzinas/tslint-eslint-rules/commit/de164458164116b1743d0cdc57fcfbcd6a4109c4
[b76ee05]: https://github.com/buzinas/tslint-eslint-rules/commit/b76ee05033a273bdf61b6ee7465290ad8c4a73f1
[b81e671]: https://github.com/buzinas/tslint-eslint-rules/commit/b81e67141abf76f976ab399a0f16f50e971891b8


## [v3.4.0] - 2017/02/16 15:40 GMT-0600
#### Fixes
- array-bracket-spacing handles comments ([9c551d7])

#### Rules Added
- [space-in-parens](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/spaceInParensRule.md)

#### Fixers Added
- object-curly-spacing ([ec81eb4])
- array-bracket-spacing ([3c689ff])
- space-in-parens ([cd50170])

#### Other Changes

`tslint` is no longer a `dependency`. Instead it is a `peerDependency` and `devDependency`.

[ec81eb4]: https://github.com/buzinas/tslint-eslint-rules/commit/ec81eb457aa1758dbc35fd4ea01519fc934e1259
[3c689ff]: https://github.com/buzinas/tslint-eslint-rules/commit/3c689ffa23b36870e9fae8bb04ccdbe51cbf04c7
[cd50170]: https://github.com/buzinas/tslint-eslint-rules/commit/cd50170f658c62062dff3fa60d501cebccd98d9e
[9c551d7]: https://github.com/buzinas/tslint-eslint-rules/commit/9c551d7eaaa55289cc326e16e804d702c36cc3a1


## [v3.3.0] - 2017/02/04 04:45 GMT-0600
#### Changes
- Build errors fixed ([d163eb5])
- TSLint extends support ([18902f1])

[d163eb5]: https://github.com/buzinas/tslint-eslint-rules/commit/d163eb5aa438cce25da2624cf43c478544e7889b
[18902f1]: https://github.com/buzinas/tslint-eslint-rules/commit/18902f10939aeb4dedbcb7334be42d462846457c


## [v3.2.3] - 2016/12/24 22:52 GMT-0600
#### Fixes
- handle-callback-err ([0a9a882])

[0a9a882]: https://github.com/buzinas/tslint-eslint-rules/commit/0a9a88284f199ec292bcea0534b4323f10a5bc50


## [v3.2.2] - 2016/12/24 12:10 GMT-0600
#### Fixes
- ter-indent
   - JSDocs no longer break variable declarations [cb01358]
   - Interfaces are also checked for indentation [5be6774]
- handle-callback-err: [Issue 153](https://github.com/buzinas/tslint-eslint-rules/issues/153)
   - Added `allowProperties` option to make the rule more strict.

Note that the npm release `v3.2.1` only contains this hotfix [cb01358].

[5be6774]: https://github.com/buzinas/tslint-eslint-rules/commit/5be67747d4a74e216be14fc332e3871546609cdd
[cb01358]: https://github.com/buzinas/tslint-eslint-rules/commit/cb013580a74a2eb6781a6a0701a7bfafc0818c75


## [v3.2.0] - 2016/12/14 00:50 GMT-0600
#### Rules Added
- [ter-arrow-body-style](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowBodyStyleRule.md)
- [ter-arrow-parens](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowParensRule.md)
- [ter-arrow-spacing](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/docs/rules/terArrowSpacingRule.md)

#### Fixes
- handle-callback-err: [Issue 146](https://github.com/buzinas/tslint-eslint-rules/issues/146)

#### Changes
- Added contributing file detailing how to use the current gulp tasks
- Added links to the rule and test source in each of the rule documentation

## [v3.1.0] - 2016/11/29 23:20 GTM-0600
#### Rules Added
- ter-prefer-arrow-callback

#### Fixes
- ter-indent:
  - issues with try/catch statements
  - issues with return statements
  - issues with method declarations
  - A `CallExpression` option has been added.


## [v3.0.0] - 2016/11/21 12:36 GTM-0600
### Upgraded to [TSLint 4.0](https://palantir.github.io/tslint/2016/11/17/new-for-4.0.html)
- Several rules are no longer applicable
    - no-duplicate-key
    - no-unreachable
    - no-unused-variable
    - use-strict

#### Developer Tools
- Added RuleTester to help writing tests, see [max-len-rule](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/test/rules/terMaxLenRuleTests.ts) and [no-multi-spaces](https://github.com/buzinas/tslint-eslint-rules/blob/master/src/test/rules/noMultiSpacesRuleTests.ts) for usage examples.


## [v2.2.1] - 2016/11/17 21:50 GMT-0600
#### Fixes
- ter-max-len ([539b3c2](https://github.com/buzinas/tslint-eslint-rules/commit/539b3c210d1fd157d27a9fb61e123c28249e7690))


## [v2.2.0] - 2016/11/17 02:30 GMT-0600
#### Rules Added
- ter-indent ([b0334d4](https://github.com/buzinas/tslint-eslint-rules/commit/b0334d4fbf7286e07521cbffc5fa90f96e536224))
- ter-max-len ([5938feb](https://github.com/buzinas/tslint-eslint-rules/commit/5938feb4c290de54e80ddd4bfdd3259441124279))

#### Fixes
- no-constant-condition ([b0456a4](https://github.com/buzinas/tslint-eslint-rules/commit/b0456a45b25dd7df488880a61027cf485329fe91))

#### Changes
- Rule documentation can be generated from its metadata ([d6ea71e](https://github.com/buzinas/tslint-eslint-rules/commit/d6ea71ee398c26e55d9bc86f01bbe2beca08b350))


## [v2.1.0] - 2016/10/03 19:29 +00:00
#### Fixes
- handle-callback-err ([caf6ec6](https://github.com/buzinas/tslint-eslint-rules/commit/caf6ec62be772297c18a9dd56d280d9b2dac076a))

#### Changes
- Added support for node 4 ([4785e36](https://github.com/buzinas/tslint-eslint-rules/commit/4785e3637166072d10fec61c9bf8a3350aa05733))
- Added support for node 0.10 ([adc290c](https://github.com/buzinas/tslint-eslint-rules/commit/adc290c02f1299251637ce5d448a3c152b58dc56))
- Using `es5` as the TypeScript target ([83ad6e3](https://github.com/buzinas/tslint-eslint-rules/commit/83ad6e3c89eb88a55707502c1251255771805e4a))


## [v2.0.0] - 2016/10/01 06:12 +00:00
### Upgraded to [TypeScript 2.0](https://www.typescriptlang.org/docs/release-notes/typescript-2.0.html)
- Using `es6` as the TypeScript target.
- Dropped support for node 4


## [v1.6.1] - 2016/10/01 05:41 +00:00
#### Fixes
- no-ex-assign ([31afa69](https://github.com/buzinas/tslint-eslint-rules/commit/31afa69d1718bda1b6d7b9f16c77ef1eb157bb37))


## [v1.6.0] - 2016/09/27 05:56 +00:00
#### Rules Added
- no-multi-spaces ([7972712](https://github.com/buzinas/tslint-eslint-rules/commit/79727121b64c383bc3c66f8bf2d5feaab3f2ad02))

#### Fixes
- no-constant-condition ([3f8dcc5](https://github.com/buzinas/tslint-eslint-rules/commit/3f8dcc5a2f5804243c86a47ba6dbfb4a2241d771))
- no-ex-assign ([93de74b](https://github.com/buzinas/tslint-eslint-rules/commit/93de74b4d33bb4d6c32c047ac995dd57eb92648d))
- no-extra-boolean-cast ([8a98530](https://github.com/buzinas/tslint-eslint-rules/commit/8a985309a3c2c645fdd143ae893b026710fa8c01))

#### Changes
- README rules documentation replaced for a table ([1c86880](https://github.com/buzinas/tslint-eslint-rules/commit/1c868803f270ec664a1199dc6df2844bae097ea8))
- Added markdown files for each of the existing rules ([9617910](https://github.com/buzinas/tslint-eslint-rules/commit/961791020bb7947c1c4e942b5f7875165a693b2a))

## [v1.5.0] - 2016/09/05 15:10 +00:00
#### Rules Added
- object-curly-spacing ([28c5727](https://github.com/buzinas/tslint-eslint-rules/commit/28c57275aeb62d83e5df7d6f75dfd9c52b05d2bc))

#### Changes
- Updated Contribution section in README to mention new gulp options


## [v1.4.0] - 2016/09/05 13:47 +00:00
#### Fixes
- block-spacing ([3ad19dd](https://github.com/buzinas/tslint-eslint-rules/commit/3ad19dd4f6aab0cf744880998db3066f2ad99a11))
- brace-style ([874440f](https://github.com/buzinas/tslint-eslint-rules/commit/874440f99f2a37a3acf42939bdcd0212ec0dd148))
- handle-callback-err ([c6b2b40](https://github.com/buzinas/tslint-eslint-rules/commit/c6b2b4088023381895f94abf53037c89c75bdace))
- no-inner-declarations ([debb0f7](https://github.com/buzinas/tslint-eslint-rules/commit/debb0f7d3fb4939242f5f0207d9ab31a30c6087a))
- valid-js-doc ([951a64c](https://github.com/buzinas/tslint-eslint-rules/commit/951a64cbb0c11070ab0fa26c2672cc0bed08e0e3))


## [v1.3.0] - 2016/04/28 22:05 +00:00
#### Rules Added
- handle-callback-err ([8f6f4c3](https://github.com/buzinas/tslint-eslint-rules/commit/8f6f4c3bf147647ed66de5bf5baf37e96e7886f7))
- brace-style ([34b97dc](https://github.com/buzinas/tslint-eslint-rules/commit/34b97dc92f6fa9ff0d5115b8493322e0c90811ab))
- block-spacing ([d0de347](https://github.com/buzinas/tslint-eslint-rules/commit/d0de34796ac0953113f52eee32c74101efb2fb12))

#### Fixes
- no-inner-declarations ([49f410c](https://github.com/buzinas/tslint-eslint-rules/commit/49f410caefe92a34c81aba425712758a4ac723af))


## [v1.2.0] - 2016/04/04 17:28 +00:00
#### Rules Added
- array-bracket-spacing ([2ed91e2](https://github.com/buzinas/tslint-eslint-rules/commit/2ed91e2d6c3691ada63ae855bdfb73d4315174de))

#### Changes
- Updated README to fit current ESLint rules ([aa5c342](https://github.com/buzinas/tslint-eslint-rules/commit/aa5c342))

#### Fixes
- no-unexpected-multiline issue ([bdca78a](https://github.com/buzinas/tslint-eslint-rules/commit/bdca78ae91cca963e9b93c3bdcb18e661378f55a))
- no-constant-condition issue ([4904bec](https://github.com/buzinas/tslint-eslint-rules/commit/4904bec6846d96275901d2570a314f4441f937fe))


## [v1.1.1] - 2016/03/21 18:29 +00:00
#### Added
- index.js ([cd376d0](https://github.com/buzinas/tslint-eslint-rules/commit/cd376d0877aaec62acc7a4dd4d17e66d0807c3a4))


## [v1.1.0] - 2016/03/18 17:05 +00:00
#### Changes
- Updated npm dependencies

#### Fixes
- no-ex-assign: updated failure string and added test for false positive ([9da7ba8](https://github.com/buzinas/tslint-eslint-rules/commit/9da7ba8a45d172c5f5c04733da210a2b0a59d272))


## [v1.0.0] - 2015/12/14 17:14 +00:00
### First stable version
- Improved documentation
- Updated dependencies

## [v0.3.0] - 2015/11/19 14:47 +00:00
#### Rules Added
- valid-jsdoc ([3deb2a3](https://github.com/buzinas/tslint-eslint-rules/commit/3deb2a35789142ca58741c134b158d7ff66b4a20))


## [v0.2.7] - 2015/11/17 14:00 +00:00
#### Rules Added
- no-irregular-whitespace ([15056f0](https://github.com/buzinas/tslint-eslint-rules/commit/15056f0722bee86c4fad44156622af4473261c47))


## [v0.2.6] - 2015/11/17 12:07 +00:00
#### Rules Added
- no-regex-spaces ([c92f89e](https://github.com/buzinas/tslint-eslint-rules/commit/c92f89e31a10eb97660fd2310ec6718fcab3b3b4))
- no-empty-character ([1eb3425](https://github.com/buzinas/tslint-eslint-rules/commit/1eb34253bc16ceb05c061fa5de0dd5d2d8f9054b))
- no-control-regex ([17c66cf](https://github.com/buzinas/tslint-eslint-rules/commit/17c66cf8bf0590d1a138326ef54c0c10a8cbd71d))


## [v0.2.5] - 2015/11/17 11:11 +00:00
#### Rules Added
- no-inner-declarations ([97a0e63](https://github.com/buzinas/tslint-eslint-rules/commit/97a0e637e919d741df56f9872057b9d902f4d4f2))


## [v0.2.4] - 2015/11/17 01:01 +00:00
#### Rules Added
- no-invalid-regexp ([7c2f010](https://github.com/buzinas/tslint-eslint-rules/commit/7c2f0104696f85b03ead14f771406c4845cec819))

#### Changes
- Improved README with commit conventions ([63b0536](https://github.com/buzinas/tslint-eslint-rules/commit/63b053653c2234b531ee233185fdb07d3bd04545))


## [v0.2.3] - 2015/11/14 15:02 +00:00
#### Rules Added
- no-constant-condition ([d5b7f38](https://github.com/buzinas/tslint-eslint-rules/commit/d5b7f38a82abb86bd7503b20dc47b06b07c59211))
- no-duplicate-case ([ac1bb70](https://github.com/buzinas/tslint-eslint-rules/commit/ac1bb700f4f04639cdef40996b2c0c6d42231a23))
- no-sparse-arrays ([55f8481](https://github.com/buzinas/tslint-eslint-rules/commit/55f84818d7c2d031699fbd1f98ee97e33a755cb7))
- no-extra-semi ([4b886d3](https://github.com/buzinas/tslint-eslint-rules/commit/4b886d340890f5aaf035cee18b8993de67a234ee))
- no-extra-boolean-cast ([a5882da](https://github.com/buzinas/tslint-eslint-rules/commit/a5882daf7221aa7c0b6032ed67830f2762704c86))
- no-ex-assign ([9292423](https://github.com/buzinas/tslint-eslint-rules/commit/9292423a033abb75ddcd5ade48f5026861273e05))
- no-unexpected-multiline ([2ad0d8b](https://github.com/buzinas/tslint-eslint-rules/commit/2ad0d8b0c464d23ed4d2a0735368341df0def496))
- valid-typeof ([c2f242e](https://github.com/buzinas/tslint-eslint-rules/commit/c2f242ead01b7467a239398964d7f7543f395200))
- use-isnan ([b07e3d7](https://github.com/buzinas/tslint-eslint-rules/commit/b07e3d757b6c15058e5110a39229fd617440064d))

#### Enhancements
- Added tslint as a dependency ([0fb030a](https://github.com/buzinas/tslint-eslint-rules/commit/0fb030a98fc47af7cb51843336c5c27e9c661ec5))
- Added Travis CI integration ([2a4f9a2](https://github.com/buzinas/tslint-eslint-rules/commit/2a4f9a2c8c1cc024be51775d9be20444f947edb5))
- Added and made lots of improvements in README.md


[Unreleased]: https://github.com/buzinas/tslint-eslint-rules/compare/v5.4.0...HEAD
[v5.4.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v5.3.1...v5.4.0
[v5.3.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v5.2.0...v5.3.1
[v5.2.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v5.1.0...v5.2.0
[v5.1.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v5.0.0...v5.1.0
[v5.0.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v4.1.1...v5.0.0
[v4.1.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v4.1.0...v4.1.1
[v4.1.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v4.0.0...v4.1.0
[v4.0.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.5.1...v4.0.0
[v3.5.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.5.0...v3.5.1
[v3.5.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.4.0...v3.5.0
[v3.4.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.3.0...v3.4.0
[v3.3.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.2.3...v3.3.0
[v3.2.3]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.2.2...v3.2.3
[v3.2.2]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.2.0...v3.2.2
[v3.2.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.1.0...v3.2.0
[v3.1.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v3.0.0...v3.1.0
[v3.0.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v2.2.1...v3.0.0
[v2.2.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v2.2.0...v2.2.1
[v2.2.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.6.1...v2.0.0
[v1.6.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.6.0...v1.6.1
[v1.6.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.5.0...v1.6.0
[v1.5.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.1.1...v1.2.0
[v1.1.1]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.3.0...v1.0.0
[v0.3.0]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.2.7...v0.3.0
[v0.2.7]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.2.6...v0.2.7
[v0.2.6]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.2.5...v0.2.6
[v0.2.5]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.2.4...v0.2.5
[v0.2.4]: https://github.com/buzinas/tslint-eslint-rules/compare/v0.2.3...v0.2.4
[v0.2.3]: https://github.com/buzinas/tslint-eslint-rules/compare/2601ba448c8e8d639539dc461d8b2dc43bb908fa...v0.2.3
