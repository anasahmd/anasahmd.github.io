import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		isDraft: z.boolean().optional().default(false),
		title: z.string(),
		description: z.string(),
		date: z.string().transform((str) => new Date(str)),
	}),
});

export const collections = { blog };
