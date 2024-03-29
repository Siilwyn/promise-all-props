# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and follows [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2023-08-28
### Changed
- Drop support for Node.js 14.
- Function is exported as a named function so importing needs a destructure:  
```js
import { promiseAllProps } from 'promise-all-props';
```

### Added
- TypeScript types, thanks to @karlhorky!

## [2.1.1] - 2021-07-13
### Fixed
- The too strict Node.js engine semver range, support from 14 and up.

## [2.1.0] - 2021-03-09
### Added
- Deno export to https://deno.land.

## [2.0.0] - 2021-03-08
### Changed
- Drop support for older JS runtimes and Node.js versions under version 14.
- Replace CommonJS entrypoints with ECMAScript modules.

## [1.0.1] - 2017-04-05
### Changed
- Removed ES6 usage so code works out of the box in older JS runtimes

[3.0.0]: https://github.com/Siilwyn/promise-all-props/compare/v2.1.1...v3.0.0
[2.1.1]: https://github.com/Siilwyn/promise-all-props/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/Siilwyn/promise-all-props/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/Siilwyn/promise-all-props/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/Siilwyn/promise-all-props/compare/241fedc...v1.0.1
