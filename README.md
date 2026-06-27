![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p104-embed-js)](https://github.com/PaulioRandall/p104-embed-js/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p104-embed-js)](https://github.com/PaulioRandall/p104-embed-js/releases)

# P104: Embed

Minimalist function for replicating [Go struct embedding](https://gobyexample.com/struct-embedding).

Embedding is a form of polymorphism and an alternative to both inheritance and mixins. I'd say the approach lies somewhere between inheritance and mixins in terms of flexibility, complexity, and error proneness.

**API Documentation in _[/src](./src)_.**

## Import from NPM

**package.json**

```json
{
	"dependencies": {
		"@paulio/embed-js": "0.1.0"
	}
}
```

**my-script.js**

```js
import embed from '@paulio/embed-js'

// ...
```

## Made to be Plundered

_Copy & paste_ files from _[/src](./src)_ into your project. Tests are written in [Jest](https://jestjs.io/) but should be easy to adapt or rewrite for whatever testing framework.

## Simple Example

A more detailed example can be found at [./examples/Example.js](./examples/Example.js).

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
class Person extends embed(WithName, WithAge) {
	constructor(name, age) {
		this.setName(name)
		this.age = age

		// or
		// this.WithName.setName(name)
		// this.WithAge.age = age
	}

	// ...
}

const person = new Person('Oliver', 24)
person.setName('Bob')
person.age = 42

console.log(person.getName(), person.age)
```
