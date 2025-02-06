'use strict';

/**
 * demo-section service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-section.demo-section');
