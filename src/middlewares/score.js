export default {
	'ASSIGN_SCORE': function(source, provider) {
		return source
		.do((action) => {
			if (action.data) {
				provider.dispatch({
					type: 'ENABLE_SCORE'
				});
			}
		})
		.map((action) => {
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, action.data)
      });
		});
	},
	'ENABLE_SCORE': function(source, provider) {
		return source
		.do(() => {
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, {
					enabled: true
				})
      });
		});
	},
	'DISABLE_SCORE': function(source, provider) {
		return source
		.do(() => {
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, {
					enabled: false
				})
      });
		});
	},
	'START_LOADING': function(source, provider) {
		return source
		.map(() => {
      console.log('START_LOADING');
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, {
					loading: true
				})
      });
		});
	},
	'END_LOADING': function(source, provider) {

		return source
		.map(() => {
      console.log('END lOADING');
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, {
					loading: false
				})
      });
		});
	},
	'CANCEL_LOADING': function(source, provider) {
		return source
		.map(() => {
      console.log('CANCEL lOADING');
			return provider.actions.assignState({
        score: Object.assign(provider.getState().score, {
					loading: false
				})
      });
		});
	}
}
