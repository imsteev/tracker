This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project is using Bun as the package manager.

### Run the dev server
```
bun dev
```

This starts a server at [http://localhost:3000](http://localhost:3000).

### Environment variables
```
OPENAI_API_KEY=<your_api_key>
DATABASE_URL=<some_postgres_connection_string>
```

### Tech stack

- NextJS
- TailwindCSS
- DrizzleORM
- Postgres

**Why Next?** Optimizing for rapid full-stack development while leveraging tools I'm familiar with (i.e, React).

**Why Tailwind?** Tailwind provides considerable flexibility yet remains ergonomic with sane out-of-the-box defaults. 

**Why Drizzle?** CLI-based tooling makes it easy to get going fast (e.g, migrations, schema generation, etc.).

**Why Postgres?** Likely need to model and query relations in SQL-like manner.
