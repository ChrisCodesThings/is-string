# is-string <br> [![Test workflow status](https://github.com/ChrisCodesThings/is-string/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is-string)](https://www.npmjs.com/package/@chriscodesthings/is-string) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to determine if something is a string type**

## Description

Tests a variable to see if it's a string.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/is-string
```

## Usage

```js
import isString from '@chriscodesthings/is-string';

console.log(isString("hello world!"));
// => true
```

## Syntax

```js
isString(var);
```

### Parameters

- *var*: any variable to test

### Return Value

Returns boolean true if *var* is a string, false otherwise.

## See Also...

- [**is-number**: Function to determine if something is a number type](https://github.com/ChrisCodesThings/is-number "Function to determine if something is a number type")
- [**is-hex-number**: Determine if a string is a hexadecimal number](https://github.com/ChrisCodesThings/is-hex-number "Determine if a string is a hexadecimal number")
- [**is-css-hex-color**: Determine if a string is a hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a hex color code")
