'use strict';

/**
 * view-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::view-project.view-project');
