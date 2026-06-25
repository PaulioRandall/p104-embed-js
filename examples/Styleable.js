// A simple class that allows styles to be stored and
// accessed.
class Styleable {
	_styles = new Map()

	getStyle(k) {
		return this._styles.get(k)
	}

	setStyle(k, v = undefined) {
		if (v === undefined) {
			this._del(k)
		} else {
			this._set(k, v)
		}
	}

	_del(k) {
		this._styles.delete(k)
	}

	_set(k, v) {
		this._styles.set(k, v)
	}
}
