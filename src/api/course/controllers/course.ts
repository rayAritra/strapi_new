/**
 * course controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::course.course', ({ strapi }) => ({
    async getYoutubeUrl(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.entityService.findOne('api::course.course', id, {
            fields: ['youtube_url'],
        });

        if (!entity) {
            return ctx.notFound('Course not found');
        }

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return sanitizedEntity;
    },
}));
