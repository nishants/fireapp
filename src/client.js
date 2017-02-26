var client = {
	load: function (firebase, storage, key) {
		var config = {
			apiKey						: key,
			authDomain				: storage.authDomain,
			databaseURL				: storage.databaseURL,
			storageBucket			: storage.storageBucket,
			messagingSenderId	: storage.messagingSenderId
		};

		client.db = firebase.initializeApp(config).database().ref("client-storage");
		return client;
	},
	get: function (path) {
		return client.db.child(path)
	}
};

module.exports = client;