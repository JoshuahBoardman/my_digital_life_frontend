import {z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        readTime: z.number(),
        tags: z.array(z.string()),
        draft: z.boolean(),
    }),
});

const portfolioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        readTime: z.number(),
        tags: z.array(z.string()),
        draft: z.boolean(),
        imgUrl: z.string().url(),
        repoUrl: z.string().url(),
        displayOrder: z.number(),
    }),
});

const bookShelfCollection = defineCollection({
    type: 'content',
    schema: z.object({}),
});

export const collections = {
    'blog': blogCollection,
    'portfolio': portfolioCollection,
    'bookShelf': bookShelfCollection,
};
