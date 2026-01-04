## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Prisma setup

Install dependecies
```
npm install prisma tsx @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg dotenv pg
```

## Initialize prisma

```
npx prisma init
```

## Define Prisma Schema

```
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
```


## Generate prisma client

```
npx prisma generate
```

## Add the following code to your lib/prisma.ts

```
import { PrismaClient } from './generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
```

## Syncronyze DB with prisma

```
npx prisma db push
```

## Check if the tables are created on the database

## In case of error or missing data:

Change the prisma schema and

```
npx prisma generate
npx prisma db push
```
