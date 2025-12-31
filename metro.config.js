const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add custom resolver to handle react-async-hook module resolution
config.resolver.resolveRequest = (context, moduleName, platform) => {
    // For react-async-hook on web, use the CommonJS version instead of ESM
    if (moduleName === 'react-async-hook' && platform === 'web') {
        return {
            filePath: require.resolve('react-async-hook/dist/index.js', {
                paths: [context.originModulePath],
            }),
            type: 'sourceFile',
        };
    }

    // Use the default resolver for everything else
    return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
