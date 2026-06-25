import Embed from './Embed.js'
import Identifiable from './Identifiable.js'
import Styleable from './Styleable.js'

// Shape class embedding Identifiable and Styleable using
// the Embed function.
export default class Shape extends Embed(
	Identifiable, //
	{ type: Styleable, public: true } //
) {
	constructor() {
		this.id = crypto.randomUUID()
	}

	show() {
		this.setStyle('visibility', 'visible')
	}

	hide() {
		this.setStyle('visibility', 'hidden')
	}
}

// The Shape class will look similar to this.
class ShapeWithoutEmbedding {
	_Identifiable = null
	Styleable = null

	constructor() {
		this._Identifiable = new Identifiable()
		this._Styleable = new Styleable()
	}

	// Delegates to Identifiable.
	get id() {
		return this._Identifiable.id
	}

	// Delegates to Identifiable.
	set id(id) {
		this._Identifiable.id = id
	}

	// Delegates to Identifiable.
	equals(...args) {
		return this._Identifiable.equals(...args)
	}

	// Delegates to Styleable.
	getStyle(...args) {
		return this.Styleable.getStyle(...args)
	}

	// Delegates to Styleable.
	setStyle(...args) {
		return this.Styleable.setStyle(...args)
	}

	show() {
		this.setStyle('visibility', 'visible')
	}

	hide() {
		this.setStyle('visibility', 'hidden')
	}
}
