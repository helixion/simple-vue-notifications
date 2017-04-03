module.exports = (function() {


	const _generateId = function(number) {
		const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		const maxCharacters = number;
		let rtn = "";

		for (let i = 0; i <= maxCharacters; i++) {
			rtn += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		}

		return rtn;
	};

	const _checkHtmlSafe = function(obj) {
		const opts = (typeof obj == 'object') ? obj : null;

		if (opts) {
            if (opts.hasOwnProperty('htmlSafe')) {
                if (opts.htmlSafe) {
                    return true;
                } 
            } 
        }
        return false;
	}

    const addNotification = function(message, type, options) {

		const data = {
			id: _generateId(10),
			show: true,
			message,
			type,
            htmlSafe: _checkHtmlSafe(options)
		};

		

		if (typeof data.message == 'undefined' || !data.message) {
			console.error('[addNotification]: You must enter a message to be displayed');
			return;
		}

		if (typeof data.type == 'undefined' || !data.type || typeof data.type !== 'string') {
			console.error('[addNotification]: Must include a type of notification in string form: success, error, info, warning');
			return;
		}

		this.$notes.unshift(data);
	};

	const removeNotification = function(id) {
		const notifications = this.$notes;
		const record = notifications.find(note => note.id === id);
		if (record) {
			notifications.splice(notifications.indexOf(record), 1);
		} else {
			console.error(`[removeNotification]: Couldn't remove the notification`);
		}
	}

	return {
		addNotification,
		removeNotification
	};

})();