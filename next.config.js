require('dotenv').config();

module.exports = {
	webpack: (config, { webpack }) => {
		config.plugins.push(new webpack.EnvironmentPlugin(process.env));
		return config;
	},
	images: {
		domains: ['localhost'],
	},
};
