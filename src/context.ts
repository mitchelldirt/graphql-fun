import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { DB } from './types';

export const connection = () =>
	new Kysely<DB>({
		dialect: new PostgresDialect({
			pool: new Pool({
				host: 'localhost',
				database: 'graphqlfun',
				user: 'mitchellm',
				password: '',
			}),
		}),
	});
