// A simple class that holds an ID and allows the ID to be
// checked for equality.
export default class Identifiable {
	// id may be a string or instance of Identifiable.
	_id = ''

	get id() {
		return this._id
	}

	set id(id) {
		this._id = id
	}

	equals(id) {
		if (!this._id) {
			return false
		}

		if (typeof id === 'string') {
			return this._id === id
		}

		if (id instanceof Identifiable) {
			return this._id === id._id
		}

		return false
	}
}
