require('dotenv').config();

module.exports = {
	output: 'standalone',
	webpack: (config, { webpack }) => {
		// config.plugins.push(new webpack.EnvironmentPlugin(['URL', 'API_URL']));
		config.plugins.push(new webpack.EnvironmentPlugin(process.env));
		return config;
	},
	images: {
		domains: ['localhost', 'daifive-admin.fly.dev'],
	},
};
