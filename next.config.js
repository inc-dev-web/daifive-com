require('dotenv').config();

module.exports = {
	webpack: (config, { webpack }) => {
		config.plugins.push(new webpack.EnvironmentPlugin(['URL', 'API_URL']));
		return config;
	},
	images: {
		domains: ['localhost'],
	},
};
