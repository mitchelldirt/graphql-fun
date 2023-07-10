import { createYoga } from 'graphql-yoga';
import { schema } from './schema';

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return yoga(request, ctx);
	},
};
