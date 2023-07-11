import { builder } from '../../builder';
import { connection } from '../../context';
import { UserType } from '../../models/User';

builder.queryFields((t) => ({
	users: t.field({
		type: UserType,
		nullable: true,
		async resolve() {
			const db = connection();
			return await db.selectFrom('users').selectAll().executeTakeFirst();
		},
	}),
}));
