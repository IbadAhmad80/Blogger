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
  async findByName(ctx) {
    const posts = await strapi.services.posts.find(ctx.query);
    console.log(
      "and here it is",
      decodeURIComponent(ctx.request.url.split("/")[3])
    );
    return posts.filter(
      (post) => post.title === decodeURIComponent(ctx.request.url.split("/")[3])
    );
  },
};
