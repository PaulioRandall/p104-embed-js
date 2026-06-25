![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p104-embed-js)](https://github.com/PaulioRandall/p104-embed-js/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p104-embed-js)](https://github.com/PaulioRandall/p104-embed-js/releases)

# P104: Embed

Minimalist function for replicating [Go struct embedding](https://gobyexample.com/struct-embedding).

Embedding is a form of polymorphism and an alternative to both inheritance and mixins. I'd say the approach lies somewhere between inheritance and mixins in terms of flexibility, complexity, and error proneness.

## Usage

> API Documentation is in the source: _[/src](./src)_.

_Copy+paste_ files from _[/src](./src)_ into your project. Tests are written in [Jest](https://jestjs.io/) but easy to adapt or rewrite for your framework.

## Example

**Simple Example**

A more detailed example can be found at [./Example.js](./Example.js).

```js
import embed from '@paulio/embed-js'

// A class with methods to be embedded.
class WithName {
	_name = ''

	getName() {
		return this._name
	}

	setName(name) {
		this._name = name
	}
}

// A class with getter and setter to be embedded.
class WithAge {
	_age = 64

	get age() {
		return this._age
	}

	set age(v) {
		this._age = v
	}
}

// Derived class.
class Person extends Embed(WithName, WithAge) {
	constructor(name, age) {
		this.setName(name)
		this.age = age

		// or
		// this.WithName.setName(name)
		// this.WithAge.age = age
	}

	// ...
}
```
