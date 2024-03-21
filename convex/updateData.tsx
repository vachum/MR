import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const replaceData = mutation({
  args: {
    id: v.id("price"),
    price: v.number(),
    text: v.string(),
    tag: v.string(),
    service: v.string(),
  },
  handler: async (ctx, args) => {
    const { id } = args;
    console.log(await ctx.db.get(id));
    // { text: "foo", status: { done: true }, _id: ... }

    // Add `tag` and overwrite `status`:
    await ctx.db.patch(id, {
      price: args.price,
      text: args.text,
      service: args.service,
      tag: args.tag,
      status: { archived: true },
    });
    console.log(await ctx.db.get(id));
    // { text: "foo", tag: "bar", status: { archived: true }, _id: ... }

    // Unset `tag` by setting it to `undefined`
    await ctx.db.patch(id, {});
    console.log(await ctx.db.get(id));
    // { text: "foo", status: { archived: true }, _id: ... }
  },
});
