import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const deleteData = mutation({
  args: { id: v.id("price") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
