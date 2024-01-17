'use strict';

module.exports = async ({strapi}) => {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Read',
      uid: 'read',
      pluginName: 'strapi-sso-plugin',
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
