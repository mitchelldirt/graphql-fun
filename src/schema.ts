import { builder } from './builder';

builder.queryType({
	fields: (t) => ({
		hello: t.string({
			resolve: () => 'world',
		}),
		howdy: t.string({
			resolve: () => 'YeeHaw!',
		}),
	}),
});

export * from './models';
export * from './resolvers';

export const schema = builder.toSchema();
