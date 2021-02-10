"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findComments(ctx) {
    const comments = await strapi.services.comments.find(ctx.query);
    return comments.filter(
      (comment) => comment.blog_id === ctx.request.url.split("/")[3]
    );
  },
};
