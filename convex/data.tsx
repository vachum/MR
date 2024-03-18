import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const insertData = mutation({
  args: {
    service: v.string(),
    text: v.string(),
    price: v.number(),
    tag: v.string(),
  },
  handler: async (ctx, args) => {
    const newPriceId = await ctx.db.insert("price", {
      service: args.service,
      text: args.text,
      price: args.price,
      tag: args.tag,
    });
    return newPriceId;
  },
});
