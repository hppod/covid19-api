module.exports = {
  up: async (queryInterface) => {
    return queryInterface.renameColumn('CASO', 'confimed_per_100k_inhabitants', 'confirmed_per_100k_inhabitants')
  },

  down: async (queryInterface) => {
    return queryInterface.renameColumn('CASO', 'confirmed_per_100k_inhabitants', 'confimed_per_100k_inhabitants')
  }
};
