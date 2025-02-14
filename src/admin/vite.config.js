module.exports = (config) => {
  // Important: always return the modified config
  return {
    ...config,
    resolve: {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@': '/src',
      },
    },
  };
};
