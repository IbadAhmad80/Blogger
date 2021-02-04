"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
module.exports = {
  async findCategory(ctx) {
    const posts = await strapi.services.posts.find(ctx.query);
    return posts.filter(
      (post) => post.categories[0].name === ctx.request.url.split("/")[3]
    );
  },
};
