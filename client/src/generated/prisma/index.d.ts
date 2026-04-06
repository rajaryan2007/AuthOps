
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model TokenVaultMapping
 * 
 */
export type TokenVaultMapping = $Result.DefaultSelection<Prisma.$TokenVaultMappingPayload>
/**
 * Model WorkFlowExecution
 * 
 */
export type WorkFlowExecution = $Result.DefaultSelection<Prisma.$WorkFlowExecutionPayload>
/**
 * Model AudiTlog
 * 
 */
export type AudiTlog = $Result.DefaultSelection<Prisma.$AudiTlogPayload>
/**
 * Model ApprovalRequest
 * 
 */
export type ApprovalRequest = $Result.DefaultSelection<Prisma.$ApprovalRequestPayload>
/**
 * Model EnvironmentVariable
 * 
 */
export type EnvironmentVariable = $Result.DefaultSelection<Prisma.$EnvironmentVariablePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Framework: {
  NEXTJS: 'NEXTJS',
  NUXTJS: 'NUXTJS',
  REMIX: 'REMIX',
  SVELTEKIT: 'SVELTEKIT',
  ASTRO: 'ASTRO',
  OTHER: 'OTHER'
};

export type Framework = (typeof Framework)[keyof typeof Framework]


export const Provider: {
  GITHUB: 'GITHUB',
  GITLAB: 'GITLAB',
  BITBUCKET: 'BITBUCKET'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const StatusOfWorkFlowExecution: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type StatusOfWorkFlowExecution = (typeof StatusOfWorkFlowExecution)[keyof typeof StatusOfWorkFlowExecution]


export const ResourceType: {
  ENVIRONMENT_VARIABLE: 'ENVIRONMENT_VARIABLE',
  SECRET: 'SECRET',
  OTHER: 'OTHER'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]

}

export type Framework = $Enums.Framework

export const Framework: typeof $Enums.Framework

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type StatusOfWorkFlowExecution = $Enums.StatusOfWorkFlowExecution

export const StatusOfWorkFlowExecution: typeof $Enums.StatusOfWorkFlowExecution

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenVaultMapping`: Exposes CRUD operations for the **TokenVaultMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenVaultMappings
    * const tokenVaultMappings = await prisma.tokenVaultMapping.findMany()
    * ```
    */
  get tokenVaultMapping(): Prisma.TokenVaultMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workFlowExecution`: Exposes CRUD operations for the **WorkFlowExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlowExecutions
    * const workFlowExecutions = await prisma.workFlowExecution.findMany()
    * ```
    */
  get workFlowExecution(): Prisma.WorkFlowExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audiTlog`: Exposes CRUD operations for the **AudiTlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudiTlogs
    * const audiTlogs = await prisma.audiTlog.findMany()
    * ```
    */
  get audiTlog(): Prisma.AudiTlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalRequest`: Exposes CRUD operations for the **ApprovalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalRequests
    * const approvalRequests = await prisma.approvalRequest.findMany()
    * ```
    */
  get approvalRequest(): Prisma.ApprovalRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentVariable`: Exposes CRUD operations for the **EnvironmentVariable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentVariables
    * const environmentVariables = await prisma.environmentVariable.findMany()
    * ```
    */
  get environmentVariable(): Prisma.EnvironmentVariableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage',
    TokenVaultMapping: 'TokenVaultMapping',
    WorkFlowExecution: 'WorkFlowExecution',
    AudiTlog: 'AudiTlog',
    ApprovalRequest: 'ApprovalRequest',
    EnvironmentVariable: 'EnvironmentVariable',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatSession" | "chatMessage" | "tokenVaultMapping" | "workFlowExecution" | "audiTlog" | "approvalRequest" | "environmentVariable" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      TokenVaultMapping: {
        payload: Prisma.$TokenVaultMappingPayload<ExtArgs>
        fields: Prisma.TokenVaultMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenVaultMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenVaultMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          findFirst: {
            args: Prisma.TokenVaultMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenVaultMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          findMany: {
            args: Prisma.TokenVaultMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>[]
          }
          create: {
            args: Prisma.TokenVaultMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          createMany: {
            args: Prisma.TokenVaultMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenVaultMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>[]
          }
          delete: {
            args: Prisma.TokenVaultMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          update: {
            args: Prisma.TokenVaultMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          deleteMany: {
            args: Prisma.TokenVaultMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenVaultMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenVaultMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>[]
          }
          upsert: {
            args: Prisma.TokenVaultMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenVaultMappingPayload>
          }
          aggregate: {
            args: Prisma.TokenVaultMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenVaultMapping>
          }
          groupBy: {
            args: Prisma.TokenVaultMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenVaultMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenVaultMappingCountArgs<ExtArgs>
            result: $Utils.Optional<TokenVaultMappingCountAggregateOutputType> | number
          }
        }
      }
      WorkFlowExecution: {
        payload: Prisma.$WorkFlowExecutionPayload<ExtArgs>
        fields: Prisma.WorkFlowExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          findMany: {
            args: Prisma.WorkFlowExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          create: {
            args: Prisma.WorkFlowExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          createMany: {
            args: Prisma.WorkFlowExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          update: {
            args: Prisma.WorkFlowExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          upsert: {
            args: Prisma.WorkFlowExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlowExecution>
          }
          groupBy: {
            args: Prisma.WorkFlowExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowExecutionCountAggregateOutputType> | number
          }
        }
      }
      AudiTlog: {
        payload: Prisma.$AudiTlogPayload<ExtArgs>
        fields: Prisma.AudiTlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudiTlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudiTlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          findFirst: {
            args: Prisma.AudiTlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudiTlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          findMany: {
            args: Prisma.AudiTlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>[]
          }
          create: {
            args: Prisma.AudiTlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          createMany: {
            args: Prisma.AudiTlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudiTlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>[]
          }
          delete: {
            args: Prisma.AudiTlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          update: {
            args: Prisma.AudiTlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          deleteMany: {
            args: Prisma.AudiTlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudiTlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AudiTlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>[]
          }
          upsert: {
            args: Prisma.AudiTlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiTlogPayload>
          }
          aggregate: {
            args: Prisma.AudiTlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudiTlog>
          }
          groupBy: {
            args: Prisma.AudiTlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudiTlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudiTlogCountArgs<ExtArgs>
            result: $Utils.Optional<AudiTlogCountAggregateOutputType> | number
          }
        }
      }
      ApprovalRequest: {
        payload: Prisma.$ApprovalRequestPayload<ExtArgs>
        fields: Prisma.ApprovalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          findFirst: {
            args: Prisma.ApprovalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          findMany: {
            args: Prisma.ApprovalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>[]
          }
          create: {
            args: Prisma.ApprovalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          createMany: {
            args: Prisma.ApprovalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>[]
          }
          delete: {
            args: Prisma.ApprovalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          update: {
            args: Prisma.ApprovalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRequestPayload>
          }
          aggregate: {
            args: Prisma.ApprovalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalRequest>
          }
          groupBy: {
            args: Prisma.ApprovalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRequestCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentVariable: {
        payload: Prisma.$EnvironmentVariablePayload<ExtArgs>
        fields: Prisma.EnvironmentVariableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentVariableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findFirst: {
            args: Prisma.EnvironmentVariableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findMany: {
            args: Prisma.EnvironmentVariableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          create: {
            args: Prisma.EnvironmentVariableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          createMany: {
            args: Prisma.EnvironmentVariableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          delete: {
            args: Prisma.EnvironmentVariableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          update: {
            args: Prisma.EnvironmentVariableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentVariableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentVariableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentVariableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          aggregate: {
            args: Prisma.EnvironmentVariableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentVariable>
          }
          groupBy: {
            args: Prisma.EnvironmentVariableGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentVariableCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
    tokenVaultMapping?: TokenVaultMappingOmit
    workFlowExecution?: WorkFlowExecutionOmit
    audiTlog?: AudiTlogOmit
    approvalRequest?: ApprovalRequestOmit
    environmentVariable?: EnvironmentVariableOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    tokenVaultMappings: number
    workflowExecutions: number
    auditLogs: number
    approvalRequests: number
    chatMessages: number
    chatSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    tokenVaultMappings?: boolean | UserCountOutputTypeCountTokenVaultMappingsArgs
    workflowExecutions?: boolean | UserCountOutputTypeCountWorkflowExecutionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    approvalRequests?: boolean | UserCountOutputTypeCountApprovalRequestsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    chatSessions?: boolean | UserCountOutputTypeCountChatSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenVaultMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenVaultMappingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowExecutionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudiTlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    chatMessages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessages?: boolean | ChatSessionCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type WorkFlowExecutionCountOutputType
   */

  export type WorkFlowExecutionCountOutputType = {
    approvalRequests: number
  }

  export type WorkFlowExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalRequests?: boolean | WorkFlowExecutionCountOutputTypeCountApprovalRequestsArgs
  }

  // Custom InputTypes
  /**
   * WorkFlowExecutionCountOutputType without action
   */
  export type WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecutionCountOutputType
     */
    select?: WorkFlowExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkFlowExecutionCountOutputType without action
   */
  export type WorkFlowExecutionCountOutputTypeCountApprovalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRequestWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    environmentVariables: number
    workflowExecutions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environmentVariables?: boolean | ProjectCountOutputTypeCountEnvironmentVariablesArgs
    workflowExecutions?: boolean | ProjectCountOutputTypeCountWorkflowExecutionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEnvironmentVariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountWorkflowExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowExecutionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authOId: string | null
    email: string | null
    username: string | null
    telegramUserId: string | null
    telegramChatId: string | null
    vercelAcessToken: string | null
    preferredFramework: $Enums.Framework | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActiveAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authOId: string | null
    email: string | null
    username: string | null
    telegramUserId: string | null
    telegramChatId: string | null
    vercelAcessToken: string | null
    preferredFramework: $Enums.Framework | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActiveAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authOId: number
    email: number
    username: number
    telegramUserId: number
    telegramChatId: number
    vercelAcessToken: number
    preferredFramework: number
    createdAt: number
    updatedAt: number
    lastActiveAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authOId?: true
    email?: true
    username?: true
    telegramUserId?: true
    telegramChatId?: true
    vercelAcessToken?: true
    preferredFramework?: true
    createdAt?: true
    updatedAt?: true
    lastActiveAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authOId?: true
    email?: true
    username?: true
    telegramUserId?: true
    telegramChatId?: true
    vercelAcessToken?: true
    preferredFramework?: true
    createdAt?: true
    updatedAt?: true
    lastActiveAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authOId?: true
    email?: true
    username?: true
    telegramUserId?: true
    telegramChatId?: true
    vercelAcessToken?: true
    preferredFramework?: true
    createdAt?: true
    updatedAt?: true
    lastActiveAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    authOId: string
    email: string
    username: string
    telegramUserId: string | null
    telegramChatId: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt: Date
    updatedAt: Date
    lastActiveAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authOId?: boolean
    email?: boolean
    username?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    vercelAcessToken?: boolean
    preferredFramework?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActiveAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    tokenVaultMappings?: boolean | User$tokenVaultMappingsArgs<ExtArgs>
    workflowExecutions?: boolean | User$workflowExecutionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    approvalRequests?: boolean | User$approvalRequestsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authOId?: boolean
    email?: boolean
    username?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    vercelAcessToken?: boolean
    preferredFramework?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActiveAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authOId?: boolean
    email?: boolean
    username?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    vercelAcessToken?: boolean
    preferredFramework?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActiveAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authOId?: boolean
    email?: boolean
    username?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    vercelAcessToken?: boolean
    preferredFramework?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActiveAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authOId" | "email" | "username" | "telegramUserId" | "telegramChatId" | "vercelAcessToken" | "preferredFramework" | "createdAt" | "updatedAt" | "lastActiveAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    tokenVaultMappings?: boolean | User$tokenVaultMappingsArgs<ExtArgs>
    workflowExecutions?: boolean | User$workflowExecutionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    approvalRequests?: boolean | User$approvalRequestsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    chatSessions?: boolean | User$chatSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      tokenVaultMappings: Prisma.$TokenVaultMappingPayload<ExtArgs>[]
      workflowExecutions: Prisma.$WorkFlowExecutionPayload<ExtArgs>[]
      auditLogs: Prisma.$AudiTlogPayload<ExtArgs>[]
      approvalRequests: Prisma.$ApprovalRequestPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authOId: string
      email: string
      username: string
      telegramUserId: string | null
      telegramChatId: string | null
      vercelAcessToken: string
      preferredFramework: $Enums.Framework
      createdAt: Date
      updatedAt: Date
      lastActiveAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokenVaultMappings<T extends User$tokenVaultMappingsArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenVaultMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflowExecutions<T extends User$workflowExecutionsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowExecutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalRequests<T extends User$approvalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatSessions<T extends User$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly authOId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly telegramUserId: FieldRef<"User", 'String'>
    readonly telegramChatId: FieldRef<"User", 'String'>
    readonly vercelAcessToken: FieldRef<"User", 'String'>
    readonly preferredFramework: FieldRef<"User", 'Framework'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastActiveAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.tokenVaultMappings
   */
  export type User$tokenVaultMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    where?: TokenVaultMappingWhereInput
    orderBy?: TokenVaultMappingOrderByWithRelationInput | TokenVaultMappingOrderByWithRelationInput[]
    cursor?: TokenVaultMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenVaultMappingScalarFieldEnum | TokenVaultMappingScalarFieldEnum[]
  }

  /**
   * User.workflowExecutions
   */
  export type User$workflowExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    where?: WorkFlowExecutionWhereInput
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    cursor?: WorkFlowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    where?: AudiTlogWhereInput
    orderBy?: AudiTlogOrderByWithRelationInput | AudiTlogOrderByWithRelationInput[]
    cursor?: AudiTlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudiTlogScalarFieldEnum | AudiTlogScalarFieldEnum[]
  }

  /**
   * User.approvalRequests
   */
  export type User$approvalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    where?: ApprovalRequestWhereInput
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    cursor?: ApprovalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRequestScalarFieldEnum | ApprovalRequestScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.chatSessions
   */
  export type User$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | ChatSession$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | ChatSession$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends ChatSession$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.chatMessages
   */
  export type ChatSession$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    sessionId: string | null
    role: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "role" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | ChatMessage$sessionArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$ChatSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string | null
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends ChatMessage$sessionArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$sessionArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.session
   */
  export type ChatMessage$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model TokenVaultMapping
   */

  export type AggregateTokenVaultMapping = {
    _count: TokenVaultMappingCountAggregateOutputType | null
    _min: TokenVaultMappingMinAggregateOutputType | null
    _max: TokenVaultMappingMaxAggregateOutputType | null
  }

  export type TokenVaultMappingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.Provider | null
    providerUserId: string | null
    connectionName: string | null
    lastResfreshedAt: Date | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type TokenVaultMappingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.Provider | null
    providerUserId: string | null
    connectionName: string | null
    lastResfreshedAt: Date | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type TokenVaultMappingCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerUserId: number
    connectionName: number
    scopes: number
    lastResfreshedAt: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type TokenVaultMappingMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    connectionName?: true
    lastResfreshedAt?: true
    createdAt?: true
    isActive?: true
  }

  export type TokenVaultMappingMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    connectionName?: true
    lastResfreshedAt?: true
    createdAt?: true
    isActive?: true
  }

  export type TokenVaultMappingCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    connectionName?: true
    scopes?: true
    lastResfreshedAt?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type TokenVaultMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenVaultMapping to aggregate.
     */
    where?: TokenVaultMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenVaultMappings to fetch.
     */
    orderBy?: TokenVaultMappingOrderByWithRelationInput | TokenVaultMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenVaultMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenVaultMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenVaultMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenVaultMappings
    **/
    _count?: true | TokenVaultMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenVaultMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenVaultMappingMaxAggregateInputType
  }

  export type GetTokenVaultMappingAggregateType<T extends TokenVaultMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenVaultMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenVaultMapping[P]>
      : GetScalarType<T[P], AggregateTokenVaultMapping[P]>
  }




  export type TokenVaultMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenVaultMappingWhereInput
    orderBy?: TokenVaultMappingOrderByWithAggregationInput | TokenVaultMappingOrderByWithAggregationInput[]
    by: TokenVaultMappingScalarFieldEnum[] | TokenVaultMappingScalarFieldEnum
    having?: TokenVaultMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenVaultMappingCountAggregateInputType | true
    _min?: TokenVaultMappingMinAggregateInputType
    _max?: TokenVaultMappingMaxAggregateInputType
  }

  export type TokenVaultMappingGroupByOutputType = {
    id: string
    userId: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes: string[]
    lastResfreshedAt: Date
    createdAt: Date
    isActive: boolean
    _count: TokenVaultMappingCountAggregateOutputType | null
    _min: TokenVaultMappingMinAggregateOutputType | null
    _max: TokenVaultMappingMaxAggregateOutputType | null
  }

  type GetTokenVaultMappingGroupByPayload<T extends TokenVaultMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenVaultMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenVaultMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenVaultMappingGroupByOutputType[P]>
            : GetScalarType<T[P], TokenVaultMappingGroupByOutputType[P]>
        }
      >
    >


  export type TokenVaultMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    connectionName?: boolean
    scopes?: boolean
    lastResfreshedAt?: boolean
    createdAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenVaultMapping"]>

  export type TokenVaultMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    connectionName?: boolean
    scopes?: boolean
    lastResfreshedAt?: boolean
    createdAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenVaultMapping"]>

  export type TokenVaultMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    connectionName?: boolean
    scopes?: boolean
    lastResfreshedAt?: boolean
    createdAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenVaultMapping"]>

  export type TokenVaultMappingSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    connectionName?: boolean
    scopes?: boolean
    lastResfreshedAt?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type TokenVaultMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerUserId" | "connectionName" | "scopes" | "lastResfreshedAt" | "createdAt" | "isActive", ExtArgs["result"]["tokenVaultMapping"]>
  export type TokenVaultMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenVaultMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenVaultMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenVaultMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenVaultMapping"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: $Enums.Provider
      providerUserId: string
      connectionName: string
      scopes: string[]
      lastResfreshedAt: Date
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["tokenVaultMapping"]>
    composites: {}
  }

  type TokenVaultMappingGetPayload<S extends boolean | null | undefined | TokenVaultMappingDefaultArgs> = $Result.GetResult<Prisma.$TokenVaultMappingPayload, S>

  type TokenVaultMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenVaultMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenVaultMappingCountAggregateInputType | true
    }

  export interface TokenVaultMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenVaultMapping'], meta: { name: 'TokenVaultMapping' } }
    /**
     * Find zero or one TokenVaultMapping that matches the filter.
     * @param {TokenVaultMappingFindUniqueArgs} args - Arguments to find a TokenVaultMapping
     * @example
     * // Get one TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenVaultMappingFindUniqueArgs>(args: SelectSubset<T, TokenVaultMappingFindUniqueArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenVaultMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenVaultMappingFindUniqueOrThrowArgs} args - Arguments to find a TokenVaultMapping
     * @example
     * // Get one TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenVaultMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenVaultMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenVaultMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingFindFirstArgs} args - Arguments to find a TokenVaultMapping
     * @example
     * // Get one TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenVaultMappingFindFirstArgs>(args?: SelectSubset<T, TokenVaultMappingFindFirstArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenVaultMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingFindFirstOrThrowArgs} args - Arguments to find a TokenVaultMapping
     * @example
     * // Get one TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenVaultMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenVaultMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenVaultMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenVaultMappings
     * const tokenVaultMappings = await prisma.tokenVaultMapping.findMany()
     * 
     * // Get first 10 TokenVaultMappings
     * const tokenVaultMappings = await prisma.tokenVaultMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenVaultMappingWithIdOnly = await prisma.tokenVaultMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenVaultMappingFindManyArgs>(args?: SelectSubset<T, TokenVaultMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenVaultMapping.
     * @param {TokenVaultMappingCreateArgs} args - Arguments to create a TokenVaultMapping.
     * @example
     * // Create one TokenVaultMapping
     * const TokenVaultMapping = await prisma.tokenVaultMapping.create({
     *   data: {
     *     // ... data to create a TokenVaultMapping
     *   }
     * })
     * 
     */
    create<T extends TokenVaultMappingCreateArgs>(args: SelectSubset<T, TokenVaultMappingCreateArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenVaultMappings.
     * @param {TokenVaultMappingCreateManyArgs} args - Arguments to create many TokenVaultMappings.
     * @example
     * // Create many TokenVaultMappings
     * const tokenVaultMapping = await prisma.tokenVaultMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenVaultMappingCreateManyArgs>(args?: SelectSubset<T, TokenVaultMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenVaultMappings and returns the data saved in the database.
     * @param {TokenVaultMappingCreateManyAndReturnArgs} args - Arguments to create many TokenVaultMappings.
     * @example
     * // Create many TokenVaultMappings
     * const tokenVaultMapping = await prisma.tokenVaultMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenVaultMappings and only return the `id`
     * const tokenVaultMappingWithIdOnly = await prisma.tokenVaultMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenVaultMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenVaultMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenVaultMapping.
     * @param {TokenVaultMappingDeleteArgs} args - Arguments to delete one TokenVaultMapping.
     * @example
     * // Delete one TokenVaultMapping
     * const TokenVaultMapping = await prisma.tokenVaultMapping.delete({
     *   where: {
     *     // ... filter to delete one TokenVaultMapping
     *   }
     * })
     * 
     */
    delete<T extends TokenVaultMappingDeleteArgs>(args: SelectSubset<T, TokenVaultMappingDeleteArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenVaultMapping.
     * @param {TokenVaultMappingUpdateArgs} args - Arguments to update one TokenVaultMapping.
     * @example
     * // Update one TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenVaultMappingUpdateArgs>(args: SelectSubset<T, TokenVaultMappingUpdateArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenVaultMappings.
     * @param {TokenVaultMappingDeleteManyArgs} args - Arguments to filter TokenVaultMappings to delete.
     * @example
     * // Delete a few TokenVaultMappings
     * const { count } = await prisma.tokenVaultMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenVaultMappingDeleteManyArgs>(args?: SelectSubset<T, TokenVaultMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenVaultMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenVaultMappings
     * const tokenVaultMapping = await prisma.tokenVaultMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenVaultMappingUpdateManyArgs>(args: SelectSubset<T, TokenVaultMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenVaultMappings and returns the data updated in the database.
     * @param {TokenVaultMappingUpdateManyAndReturnArgs} args - Arguments to update many TokenVaultMappings.
     * @example
     * // Update many TokenVaultMappings
     * const tokenVaultMapping = await prisma.tokenVaultMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenVaultMappings and only return the `id`
     * const tokenVaultMappingWithIdOnly = await prisma.tokenVaultMapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenVaultMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenVaultMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenVaultMapping.
     * @param {TokenVaultMappingUpsertArgs} args - Arguments to update or create a TokenVaultMapping.
     * @example
     * // Update or create a TokenVaultMapping
     * const tokenVaultMapping = await prisma.tokenVaultMapping.upsert({
     *   create: {
     *     // ... data to create a TokenVaultMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenVaultMapping we want to update
     *   }
     * })
     */
    upsert<T extends TokenVaultMappingUpsertArgs>(args: SelectSubset<T, TokenVaultMappingUpsertArgs<ExtArgs>>): Prisma__TokenVaultMappingClient<$Result.GetResult<Prisma.$TokenVaultMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenVaultMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingCountArgs} args - Arguments to filter TokenVaultMappings to count.
     * @example
     * // Count the number of TokenVaultMappings
     * const count = await prisma.tokenVaultMapping.count({
     *   where: {
     *     // ... the filter for the TokenVaultMappings we want to count
     *   }
     * })
    **/
    count<T extends TokenVaultMappingCountArgs>(
      args?: Subset<T, TokenVaultMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenVaultMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenVaultMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenVaultMappingAggregateArgs>(args: Subset<T, TokenVaultMappingAggregateArgs>): Prisma.PrismaPromise<GetTokenVaultMappingAggregateType<T>>

    /**
     * Group by TokenVaultMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenVaultMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenVaultMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenVaultMappingGroupByArgs['orderBy'] }
        : { orderBy?: TokenVaultMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenVaultMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenVaultMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenVaultMapping model
   */
  readonly fields: TokenVaultMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenVaultMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenVaultMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenVaultMapping model
   */
  interface TokenVaultMappingFieldRefs {
    readonly id: FieldRef<"TokenVaultMapping", 'String'>
    readonly userId: FieldRef<"TokenVaultMapping", 'String'>
    readonly provider: FieldRef<"TokenVaultMapping", 'Provider'>
    readonly providerUserId: FieldRef<"TokenVaultMapping", 'String'>
    readonly connectionName: FieldRef<"TokenVaultMapping", 'String'>
    readonly scopes: FieldRef<"TokenVaultMapping", 'String[]'>
    readonly lastResfreshedAt: FieldRef<"TokenVaultMapping", 'DateTime'>
    readonly createdAt: FieldRef<"TokenVaultMapping", 'DateTime'>
    readonly isActive: FieldRef<"TokenVaultMapping", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TokenVaultMapping findUnique
   */
  export type TokenVaultMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter, which TokenVaultMapping to fetch.
     */
    where: TokenVaultMappingWhereUniqueInput
  }

  /**
   * TokenVaultMapping findUniqueOrThrow
   */
  export type TokenVaultMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter, which TokenVaultMapping to fetch.
     */
    where: TokenVaultMappingWhereUniqueInput
  }

  /**
   * TokenVaultMapping findFirst
   */
  export type TokenVaultMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter, which TokenVaultMapping to fetch.
     */
    where?: TokenVaultMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenVaultMappings to fetch.
     */
    orderBy?: TokenVaultMappingOrderByWithRelationInput | TokenVaultMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenVaultMappings.
     */
    cursor?: TokenVaultMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenVaultMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenVaultMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenVaultMappings.
     */
    distinct?: TokenVaultMappingScalarFieldEnum | TokenVaultMappingScalarFieldEnum[]
  }

  /**
   * TokenVaultMapping findFirstOrThrow
   */
  export type TokenVaultMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter, which TokenVaultMapping to fetch.
     */
    where?: TokenVaultMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenVaultMappings to fetch.
     */
    orderBy?: TokenVaultMappingOrderByWithRelationInput | TokenVaultMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenVaultMappings.
     */
    cursor?: TokenVaultMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenVaultMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenVaultMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenVaultMappings.
     */
    distinct?: TokenVaultMappingScalarFieldEnum | TokenVaultMappingScalarFieldEnum[]
  }

  /**
   * TokenVaultMapping findMany
   */
  export type TokenVaultMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter, which TokenVaultMappings to fetch.
     */
    where?: TokenVaultMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenVaultMappings to fetch.
     */
    orderBy?: TokenVaultMappingOrderByWithRelationInput | TokenVaultMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenVaultMappings.
     */
    cursor?: TokenVaultMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenVaultMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenVaultMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenVaultMappings.
     */
    distinct?: TokenVaultMappingScalarFieldEnum | TokenVaultMappingScalarFieldEnum[]
  }

  /**
   * TokenVaultMapping create
   */
  export type TokenVaultMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenVaultMapping.
     */
    data: XOR<TokenVaultMappingCreateInput, TokenVaultMappingUncheckedCreateInput>
  }

  /**
   * TokenVaultMapping createMany
   */
  export type TokenVaultMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenVaultMappings.
     */
    data: TokenVaultMappingCreateManyInput | TokenVaultMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenVaultMapping createManyAndReturn
   */
  export type TokenVaultMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * The data used to create many TokenVaultMappings.
     */
    data: TokenVaultMappingCreateManyInput | TokenVaultMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenVaultMapping update
   */
  export type TokenVaultMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenVaultMapping.
     */
    data: XOR<TokenVaultMappingUpdateInput, TokenVaultMappingUncheckedUpdateInput>
    /**
     * Choose, which TokenVaultMapping to update.
     */
    where: TokenVaultMappingWhereUniqueInput
  }

  /**
   * TokenVaultMapping updateMany
   */
  export type TokenVaultMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenVaultMappings.
     */
    data: XOR<TokenVaultMappingUpdateManyMutationInput, TokenVaultMappingUncheckedUpdateManyInput>
    /**
     * Filter which TokenVaultMappings to update
     */
    where?: TokenVaultMappingWhereInput
    /**
     * Limit how many TokenVaultMappings to update.
     */
    limit?: number
  }

  /**
   * TokenVaultMapping updateManyAndReturn
   */
  export type TokenVaultMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * The data used to update TokenVaultMappings.
     */
    data: XOR<TokenVaultMappingUpdateManyMutationInput, TokenVaultMappingUncheckedUpdateManyInput>
    /**
     * Filter which TokenVaultMappings to update
     */
    where?: TokenVaultMappingWhereInput
    /**
     * Limit how many TokenVaultMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenVaultMapping upsert
   */
  export type TokenVaultMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenVaultMapping to update in case it exists.
     */
    where: TokenVaultMappingWhereUniqueInput
    /**
     * In case the TokenVaultMapping found by the `where` argument doesn't exist, create a new TokenVaultMapping with this data.
     */
    create: XOR<TokenVaultMappingCreateInput, TokenVaultMappingUncheckedCreateInput>
    /**
     * In case the TokenVaultMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenVaultMappingUpdateInput, TokenVaultMappingUncheckedUpdateInput>
  }

  /**
   * TokenVaultMapping delete
   */
  export type TokenVaultMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
    /**
     * Filter which TokenVaultMapping to delete.
     */
    where: TokenVaultMappingWhereUniqueInput
  }

  /**
   * TokenVaultMapping deleteMany
   */
  export type TokenVaultMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenVaultMappings to delete
     */
    where?: TokenVaultMappingWhereInput
    /**
     * Limit how many TokenVaultMappings to delete.
     */
    limit?: number
  }

  /**
   * TokenVaultMapping without action
   */
  export type TokenVaultMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenVaultMapping
     */
    select?: TokenVaultMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenVaultMapping
     */
    omit?: TokenVaultMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenVaultMappingInclude<ExtArgs> | null
  }


  /**
   * Model WorkFlowExecution
   */

  export type AggregateWorkFlowExecution = {
    _count: WorkFlowExecutionCountAggregateOutputType | null
    _avg: WorkFlowExecutionAvgAggregateOutputType | null
    _sum: WorkFlowExecutionSumAggregateOutputType | null
    _min: WorkFlowExecutionMinAggregateOutputType | null
    _max: WorkFlowExecutionMaxAggregateOutputType | null
  }

  export type WorkFlowExecutionAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type WorkFlowExecutionSumAggregateOutputType = {
    retryCount: number | null
  }

  export type WorkFlowExecutionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    inngestRunId: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    currentStep: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
  }

  export type WorkFlowExecutionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    inngestRunId: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    currentStep: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
  }

  export type WorkFlowExecutionCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    inngestRunId: number
    status: number
    currentStep: number
    startedAt: number
    completedAt: number
    errorMessage: number
    retryCount: number
    _all: number
  }


  export type WorkFlowExecutionAvgAggregateInputType = {
    retryCount?: true
  }

  export type WorkFlowExecutionSumAggregateInputType = {
    retryCount?: true
  }

  export type WorkFlowExecutionMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    inngestRunId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    retryCount?: true
  }

  export type WorkFlowExecutionMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    inngestRunId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    retryCount?: true
  }

  export type WorkFlowExecutionCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    inngestRunId?: true
    status?: true
    currentStep?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    retryCount?: true
    _all?: true
  }

  export type WorkFlowExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowExecution to aggregate.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlowExecutions
    **/
    _count?: true | WorkFlowExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkFlowExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkFlowExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowExecutionMaxAggregateInputType
  }

  export type GetWorkFlowExecutionAggregateType<T extends WorkFlowExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlowExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlowExecution[P]>
      : GetScalarType<T[P], AggregateWorkFlowExecution[P]>
  }




  export type WorkFlowExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowExecutionWhereInput
    orderBy?: WorkFlowExecutionOrderByWithAggregationInput | WorkFlowExecutionOrderByWithAggregationInput[]
    by: WorkFlowExecutionScalarFieldEnum[] | WorkFlowExecutionScalarFieldEnum
    having?: WorkFlowExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowExecutionCountAggregateInputType | true
    _avg?: WorkFlowExecutionAvgAggregateInputType
    _sum?: WorkFlowExecutionSumAggregateInputType
    _min?: WorkFlowExecutionMinAggregateInputType
    _max?: WorkFlowExecutionMaxAggregateInputType
  }

  export type WorkFlowExecutionGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt: Date
    completedAt: Date | null
    errorMessage: string | null
    retryCount: number
    _count: WorkFlowExecutionCountAggregateOutputType | null
    _avg: WorkFlowExecutionAvgAggregateOutputType | null
    _sum: WorkFlowExecutionSumAggregateOutputType | null
    _min: WorkFlowExecutionMinAggregateOutputType | null
    _max: WorkFlowExecutionMaxAggregateOutputType | null
  }

  type GetWorkFlowExecutionGroupByPayload<T extends WorkFlowExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowExecutionGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    inngestRunId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    approvalRequests?: boolean | WorkFlowExecution$approvalRequestsArgs<ExtArgs>
    _count?: boolean | WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    inngestRunId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    inngestRunId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    inngestRunId?: boolean
    status?: boolean
    currentStep?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
  }

  export type WorkFlowExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "inngestRunId" | "status" | "currentStep" | "startedAt" | "completedAt" | "errorMessage" | "retryCount", ExtArgs["result"]["workFlowExecution"]>
  export type WorkFlowExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    approvalRequests?: boolean | WorkFlowExecution$approvalRequestsArgs<ExtArgs>
    _count?: boolean | WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkFlowExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type WorkFlowExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $WorkFlowExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlowExecution"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      approvalRequests: Prisma.$ApprovalRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      inngestRunId: string
      status: $Enums.StatusOfWorkFlowExecution
      currentStep: string
      startedAt: Date
      completedAt: Date | null
      errorMessage: string | null
      retryCount: number
    }, ExtArgs["result"]["workFlowExecution"]>
    composites: {}
  }

  type WorkFlowExecutionGetPayload<S extends boolean | null | undefined | WorkFlowExecutionDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowExecutionPayload, S>

  type WorkFlowExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFlowExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkFlowExecutionCountAggregateInputType | true
    }

  export interface WorkFlowExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlowExecution'], meta: { name: 'WorkFlowExecution' } }
    /**
     * Find zero or one WorkFlowExecution that matches the filter.
     * @param {WorkFlowExecutionFindUniqueArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowExecutionFindUniqueArgs>(args: SelectSubset<T, WorkFlowExecutionFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkFlowExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFlowExecutionFindUniqueOrThrowArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlowExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindFirstArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowExecutionFindFirstArgs>(args?: SelectSubset<T, WorkFlowExecutionFindFirstArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlowExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindFirstOrThrowArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkFlowExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlowExecutions
     * const workFlowExecutions = await prisma.workFlowExecution.findMany()
     * 
     * // Get first 10 WorkFlowExecutions
     * const workFlowExecutions = await prisma.workFlowExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowExecutionFindManyArgs>(args?: SelectSubset<T, WorkFlowExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkFlowExecution.
     * @param {WorkFlowExecutionCreateArgs} args - Arguments to create a WorkFlowExecution.
     * @example
     * // Create one WorkFlowExecution
     * const WorkFlowExecution = await prisma.workFlowExecution.create({
     *   data: {
     *     // ... data to create a WorkFlowExecution
     *   }
     * })
     * 
     */
    create<T extends WorkFlowExecutionCreateArgs>(args: SelectSubset<T, WorkFlowExecutionCreateArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkFlowExecutions.
     * @param {WorkFlowExecutionCreateManyArgs} args - Arguments to create many WorkFlowExecutions.
     * @example
     * // Create many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowExecutionCreateManyArgs>(args?: SelectSubset<T, WorkFlowExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlowExecutions and returns the data saved in the database.
     * @param {WorkFlowExecutionCreateManyAndReturnArgs} args - Arguments to create many WorkFlowExecutions.
     * @example
     * // Create many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlowExecutions and only return the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkFlowExecution.
     * @param {WorkFlowExecutionDeleteArgs} args - Arguments to delete one WorkFlowExecution.
     * @example
     * // Delete one WorkFlowExecution
     * const WorkFlowExecution = await prisma.workFlowExecution.delete({
     *   where: {
     *     // ... filter to delete one WorkFlowExecution
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowExecutionDeleteArgs>(args: SelectSubset<T, WorkFlowExecutionDeleteArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkFlowExecution.
     * @param {WorkFlowExecutionUpdateArgs} args - Arguments to update one WorkFlowExecution.
     * @example
     * // Update one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowExecutionUpdateArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkFlowExecutions.
     * @param {WorkFlowExecutionDeleteManyArgs} args - Arguments to filter WorkFlowExecutions to delete.
     * @example
     * // Delete a few WorkFlowExecutions
     * const { count } = await prisma.workFlowExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowExecutionDeleteManyArgs>(args?: SelectSubset<T, WorkFlowExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowExecutionUpdateManyArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowExecutions and returns the data updated in the database.
     * @param {WorkFlowExecutionUpdateManyAndReturnArgs} args - Arguments to update many WorkFlowExecutions.
     * @example
     * // Update many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkFlowExecutions and only return the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkFlowExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkFlowExecution.
     * @param {WorkFlowExecutionUpsertArgs} args - Arguments to update or create a WorkFlowExecution.
     * @example
     * // Update or create a WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.upsert({
     *   create: {
     *     // ... data to create a WorkFlowExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlowExecution we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowExecutionUpsertArgs>(args: SelectSubset<T, WorkFlowExecutionUpsertArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkFlowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionCountArgs} args - Arguments to filter WorkFlowExecutions to count.
     * @example
     * // Count the number of WorkFlowExecutions
     * const count = await prisma.workFlowExecution.count({
     *   where: {
     *     // ... the filter for the WorkFlowExecutions we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowExecutionCountArgs>(
      args?: Subset<T, WorkFlowExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkFlowExecutionAggregateArgs>(args: Subset<T, WorkFlowExecutionAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowExecutionAggregateType<T>>

    /**
     * Group by WorkFlowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkFlowExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowExecutionGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkFlowExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlowExecution model
   */
  readonly fields: WorkFlowExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlowExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvalRequests<T extends WorkFlowExecution$approvalRequestsArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowExecution$approvalRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkFlowExecution model
   */
  interface WorkFlowExecutionFieldRefs {
    readonly id: FieldRef<"WorkFlowExecution", 'String'>
    readonly projectId: FieldRef<"WorkFlowExecution", 'String'>
    readonly userId: FieldRef<"WorkFlowExecution", 'String'>
    readonly inngestRunId: FieldRef<"WorkFlowExecution", 'String'>
    readonly status: FieldRef<"WorkFlowExecution", 'StatusOfWorkFlowExecution'>
    readonly currentStep: FieldRef<"WorkFlowExecution", 'String'>
    readonly startedAt: FieldRef<"WorkFlowExecution", 'DateTime'>
    readonly completedAt: FieldRef<"WorkFlowExecution", 'DateTime'>
    readonly errorMessage: FieldRef<"WorkFlowExecution", 'String'>
    readonly retryCount: FieldRef<"WorkFlowExecution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlowExecution findUnique
   */
  export type WorkFlowExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution findUniqueOrThrow
   */
  export type WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution findFirst
   */
  export type WorkFlowExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowExecutions.
     */
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution findFirstOrThrow
   */
  export type WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowExecutions.
     */
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution findMany
   */
  export type WorkFlowExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecutions to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowExecutions.
     */
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution create
   */
  export type WorkFlowExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlowExecution.
     */
    data: XOR<WorkFlowExecutionCreateInput, WorkFlowExecutionUncheckedCreateInput>
  }

  /**
   * WorkFlowExecution createMany
   */
  export type WorkFlowExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlowExecutions.
     */
    data: WorkFlowExecutionCreateManyInput | WorkFlowExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkFlowExecution createManyAndReturn
   */
  export type WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkFlowExecutions.
     */
    data: WorkFlowExecutionCreateManyInput | WorkFlowExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowExecution update
   */
  export type WorkFlowExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlowExecution.
     */
    data: XOR<WorkFlowExecutionUpdateInput, WorkFlowExecutionUncheckedUpdateInput>
    /**
     * Choose, which WorkFlowExecution to update.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution updateMany
   */
  export type WorkFlowExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlowExecutions.
     */
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowExecutions to update
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to update.
     */
    limit?: number
  }

  /**
   * WorkFlowExecution updateManyAndReturn
   */
  export type WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * The data used to update WorkFlowExecutions.
     */
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowExecutions to update
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowExecution upsert
   */
  export type WorkFlowExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlowExecution to update in case it exists.
     */
    where: WorkFlowExecutionWhereUniqueInput
    /**
     * In case the WorkFlowExecution found by the `where` argument doesn't exist, create a new WorkFlowExecution with this data.
     */
    create: XOR<WorkFlowExecutionCreateInput, WorkFlowExecutionUncheckedCreateInput>
    /**
     * In case the WorkFlowExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowExecutionUpdateInput, WorkFlowExecutionUncheckedUpdateInput>
  }

  /**
   * WorkFlowExecution delete
   */
  export type WorkFlowExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter which WorkFlowExecution to delete.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution deleteMany
   */
  export type WorkFlowExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowExecutions to delete
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to delete.
     */
    limit?: number
  }

  /**
   * WorkFlowExecution.approvalRequests
   */
  export type WorkFlowExecution$approvalRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    where?: ApprovalRequestWhereInput
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    cursor?: ApprovalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRequestScalarFieldEnum | ApprovalRequestScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution without action
   */
  export type WorkFlowExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
  }


  /**
   * Model AudiTlog
   */

  export type AggregateAudiTlog = {
    _count: AudiTlogCountAggregateOutputType | null
    _min: AudiTlogMinAggregateOutputType | null
    _max: AudiTlogMaxAggregateOutputType | null
  }

  export type AudiTlogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AudiTlogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AudiTlogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resourceType: number
    resourceId: number
    metadata: number
    ipAddress: number
    userAgent: number
    timestamp: number
    _all: number
  }


  export type AudiTlogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AudiTlogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AudiTlogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    _all?: true
  }

  export type AudiTlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudiTlog to aggregate.
     */
    where?: AudiTlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudiTlogs to fetch.
     */
    orderBy?: AudiTlogOrderByWithRelationInput | AudiTlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudiTlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudiTlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudiTlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudiTlogs
    **/
    _count?: true | AudiTlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudiTlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudiTlogMaxAggregateInputType
  }

  export type GetAudiTlogAggregateType<T extends AudiTlogAggregateArgs> = {
        [P in keyof T & keyof AggregateAudiTlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudiTlog[P]>
      : GetScalarType<T[P], AggregateAudiTlog[P]>
  }




  export type AudiTlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudiTlogWhereInput
    orderBy?: AudiTlogOrderByWithAggregationInput | AudiTlogOrderByWithAggregationInput[]
    by: AudiTlogScalarFieldEnum[] | AudiTlogScalarFieldEnum
    having?: AudiTlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudiTlogCountAggregateInputType | true
    _min?: AudiTlogMinAggregateInputType
    _max?: AudiTlogMaxAggregateInputType
  }

  export type AudiTlogGroupByOutputType = {
    id: string
    userId: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonValue
    ipAddress: string
    userAgent: string
    timestamp: Date
    _count: AudiTlogCountAggregateOutputType | null
    _min: AudiTlogMinAggregateOutputType | null
    _max: AudiTlogMaxAggregateOutputType | null
  }

  type GetAudiTlogGroupByPayload<T extends AudiTlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudiTlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudiTlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudiTlogGroupByOutputType[P]>
            : GetScalarType<T[P], AudiTlogGroupByOutputType[P]>
        }
      >
    >


  export type AudiTlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiTlog"]>

  export type AudiTlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiTlog"]>

  export type AudiTlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audiTlog"]>

  export type AudiTlogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }

  export type AudiTlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resourceType" | "resourceId" | "metadata" | "ipAddress" | "userAgent" | "timestamp", ExtArgs["result"]["audiTlog"]>
  export type AudiTlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudiTlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AudiTlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AudiTlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudiTlog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      resourceType: string
      resourceId: string
      metadata: Prisma.JsonValue
      ipAddress: string
      userAgent: string
      timestamp: Date
    }, ExtArgs["result"]["audiTlog"]>
    composites: {}
  }

  type AudiTlogGetPayload<S extends boolean | null | undefined | AudiTlogDefaultArgs> = $Result.GetResult<Prisma.$AudiTlogPayload, S>

  type AudiTlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudiTlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudiTlogCountAggregateInputType | true
    }

  export interface AudiTlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudiTlog'], meta: { name: 'AudiTlog' } }
    /**
     * Find zero or one AudiTlog that matches the filter.
     * @param {AudiTlogFindUniqueArgs} args - Arguments to find a AudiTlog
     * @example
     * // Get one AudiTlog
     * const audiTlog = await prisma.audiTlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudiTlogFindUniqueArgs>(args: SelectSubset<T, AudiTlogFindUniqueArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudiTlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudiTlogFindUniqueOrThrowArgs} args - Arguments to find a AudiTlog
     * @example
     * // Get one AudiTlog
     * const audiTlog = await prisma.audiTlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudiTlogFindUniqueOrThrowArgs>(args: SelectSubset<T, AudiTlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudiTlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogFindFirstArgs} args - Arguments to find a AudiTlog
     * @example
     * // Get one AudiTlog
     * const audiTlog = await prisma.audiTlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudiTlogFindFirstArgs>(args?: SelectSubset<T, AudiTlogFindFirstArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudiTlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogFindFirstOrThrowArgs} args - Arguments to find a AudiTlog
     * @example
     * // Get one AudiTlog
     * const audiTlog = await prisma.audiTlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudiTlogFindFirstOrThrowArgs>(args?: SelectSubset<T, AudiTlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudiTlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudiTlogs
     * const audiTlogs = await prisma.audiTlog.findMany()
     * 
     * // Get first 10 AudiTlogs
     * const audiTlogs = await prisma.audiTlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audiTlogWithIdOnly = await prisma.audiTlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudiTlogFindManyArgs>(args?: SelectSubset<T, AudiTlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudiTlog.
     * @param {AudiTlogCreateArgs} args - Arguments to create a AudiTlog.
     * @example
     * // Create one AudiTlog
     * const AudiTlog = await prisma.audiTlog.create({
     *   data: {
     *     // ... data to create a AudiTlog
     *   }
     * })
     * 
     */
    create<T extends AudiTlogCreateArgs>(args: SelectSubset<T, AudiTlogCreateArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudiTlogs.
     * @param {AudiTlogCreateManyArgs} args - Arguments to create many AudiTlogs.
     * @example
     * // Create many AudiTlogs
     * const audiTlog = await prisma.audiTlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudiTlogCreateManyArgs>(args?: SelectSubset<T, AudiTlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudiTlogs and returns the data saved in the database.
     * @param {AudiTlogCreateManyAndReturnArgs} args - Arguments to create many AudiTlogs.
     * @example
     * // Create many AudiTlogs
     * const audiTlog = await prisma.audiTlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudiTlogs and only return the `id`
     * const audiTlogWithIdOnly = await prisma.audiTlog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudiTlogCreateManyAndReturnArgs>(args?: SelectSubset<T, AudiTlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AudiTlog.
     * @param {AudiTlogDeleteArgs} args - Arguments to delete one AudiTlog.
     * @example
     * // Delete one AudiTlog
     * const AudiTlog = await prisma.audiTlog.delete({
     *   where: {
     *     // ... filter to delete one AudiTlog
     *   }
     * })
     * 
     */
    delete<T extends AudiTlogDeleteArgs>(args: SelectSubset<T, AudiTlogDeleteArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudiTlog.
     * @param {AudiTlogUpdateArgs} args - Arguments to update one AudiTlog.
     * @example
     * // Update one AudiTlog
     * const audiTlog = await prisma.audiTlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudiTlogUpdateArgs>(args: SelectSubset<T, AudiTlogUpdateArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudiTlogs.
     * @param {AudiTlogDeleteManyArgs} args - Arguments to filter AudiTlogs to delete.
     * @example
     * // Delete a few AudiTlogs
     * const { count } = await prisma.audiTlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudiTlogDeleteManyArgs>(args?: SelectSubset<T, AudiTlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudiTlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudiTlogs
     * const audiTlog = await prisma.audiTlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudiTlogUpdateManyArgs>(args: SelectSubset<T, AudiTlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudiTlogs and returns the data updated in the database.
     * @param {AudiTlogUpdateManyAndReturnArgs} args - Arguments to update many AudiTlogs.
     * @example
     * // Update many AudiTlogs
     * const audiTlog = await prisma.audiTlog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AudiTlogs and only return the `id`
     * const audiTlogWithIdOnly = await prisma.audiTlog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AudiTlogUpdateManyAndReturnArgs>(args: SelectSubset<T, AudiTlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AudiTlog.
     * @param {AudiTlogUpsertArgs} args - Arguments to update or create a AudiTlog.
     * @example
     * // Update or create a AudiTlog
     * const audiTlog = await prisma.audiTlog.upsert({
     *   create: {
     *     // ... data to create a AudiTlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudiTlog we want to update
     *   }
     * })
     */
    upsert<T extends AudiTlogUpsertArgs>(args: SelectSubset<T, AudiTlogUpsertArgs<ExtArgs>>): Prisma__AudiTlogClient<$Result.GetResult<Prisma.$AudiTlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AudiTlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogCountArgs} args - Arguments to filter AudiTlogs to count.
     * @example
     * // Count the number of AudiTlogs
     * const count = await prisma.audiTlog.count({
     *   where: {
     *     // ... the filter for the AudiTlogs we want to count
     *   }
     * })
    **/
    count<T extends AudiTlogCountArgs>(
      args?: Subset<T, AudiTlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudiTlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudiTlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AudiTlogAggregateArgs>(args: Subset<T, AudiTlogAggregateArgs>): Prisma.PrismaPromise<GetAudiTlogAggregateType<T>>

    /**
     * Group by AudiTlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudiTlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AudiTlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudiTlogGroupByArgs['orderBy'] }
        : { orderBy?: AudiTlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AudiTlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudiTlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudiTlog model
   */
  readonly fields: AudiTlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudiTlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudiTlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AudiTlog model
   */
  interface AudiTlogFieldRefs {
    readonly id: FieldRef<"AudiTlog", 'String'>
    readonly userId: FieldRef<"AudiTlog", 'String'>
    readonly action: FieldRef<"AudiTlog", 'String'>
    readonly resourceType: FieldRef<"AudiTlog", 'String'>
    readonly resourceId: FieldRef<"AudiTlog", 'String'>
    readonly metadata: FieldRef<"AudiTlog", 'Json'>
    readonly ipAddress: FieldRef<"AudiTlog", 'String'>
    readonly userAgent: FieldRef<"AudiTlog", 'String'>
    readonly timestamp: FieldRef<"AudiTlog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudiTlog findUnique
   */
  export type AudiTlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter, which AudiTlog to fetch.
     */
    where: AudiTlogWhereUniqueInput
  }

  /**
   * AudiTlog findUniqueOrThrow
   */
  export type AudiTlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter, which AudiTlog to fetch.
     */
    where: AudiTlogWhereUniqueInput
  }

  /**
   * AudiTlog findFirst
   */
  export type AudiTlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter, which AudiTlog to fetch.
     */
    where?: AudiTlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudiTlogs to fetch.
     */
    orderBy?: AudiTlogOrderByWithRelationInput | AudiTlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudiTlogs.
     */
    cursor?: AudiTlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudiTlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudiTlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudiTlogs.
     */
    distinct?: AudiTlogScalarFieldEnum | AudiTlogScalarFieldEnum[]
  }

  /**
   * AudiTlog findFirstOrThrow
   */
  export type AudiTlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter, which AudiTlog to fetch.
     */
    where?: AudiTlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudiTlogs to fetch.
     */
    orderBy?: AudiTlogOrderByWithRelationInput | AudiTlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudiTlogs.
     */
    cursor?: AudiTlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudiTlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudiTlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudiTlogs.
     */
    distinct?: AudiTlogScalarFieldEnum | AudiTlogScalarFieldEnum[]
  }

  /**
   * AudiTlog findMany
   */
  export type AudiTlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter, which AudiTlogs to fetch.
     */
    where?: AudiTlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudiTlogs to fetch.
     */
    orderBy?: AudiTlogOrderByWithRelationInput | AudiTlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudiTlogs.
     */
    cursor?: AudiTlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudiTlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudiTlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudiTlogs.
     */
    distinct?: AudiTlogScalarFieldEnum | AudiTlogScalarFieldEnum[]
  }

  /**
   * AudiTlog create
   */
  export type AudiTlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * The data needed to create a AudiTlog.
     */
    data: XOR<AudiTlogCreateInput, AudiTlogUncheckedCreateInput>
  }

  /**
   * AudiTlog createMany
   */
  export type AudiTlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudiTlogs.
     */
    data: AudiTlogCreateManyInput | AudiTlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudiTlog createManyAndReturn
   */
  export type AudiTlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * The data used to create many AudiTlogs.
     */
    data: AudiTlogCreateManyInput | AudiTlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudiTlog update
   */
  export type AudiTlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * The data needed to update a AudiTlog.
     */
    data: XOR<AudiTlogUpdateInput, AudiTlogUncheckedUpdateInput>
    /**
     * Choose, which AudiTlog to update.
     */
    where: AudiTlogWhereUniqueInput
  }

  /**
   * AudiTlog updateMany
   */
  export type AudiTlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudiTlogs.
     */
    data: XOR<AudiTlogUpdateManyMutationInput, AudiTlogUncheckedUpdateManyInput>
    /**
     * Filter which AudiTlogs to update
     */
    where?: AudiTlogWhereInput
    /**
     * Limit how many AudiTlogs to update.
     */
    limit?: number
  }

  /**
   * AudiTlog updateManyAndReturn
   */
  export type AudiTlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * The data used to update AudiTlogs.
     */
    data: XOR<AudiTlogUpdateManyMutationInput, AudiTlogUncheckedUpdateManyInput>
    /**
     * Filter which AudiTlogs to update
     */
    where?: AudiTlogWhereInput
    /**
     * Limit how many AudiTlogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudiTlog upsert
   */
  export type AudiTlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * The filter to search for the AudiTlog to update in case it exists.
     */
    where: AudiTlogWhereUniqueInput
    /**
     * In case the AudiTlog found by the `where` argument doesn't exist, create a new AudiTlog with this data.
     */
    create: XOR<AudiTlogCreateInput, AudiTlogUncheckedCreateInput>
    /**
     * In case the AudiTlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudiTlogUpdateInput, AudiTlogUncheckedUpdateInput>
  }

  /**
   * AudiTlog delete
   */
  export type AudiTlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
    /**
     * Filter which AudiTlog to delete.
     */
    where: AudiTlogWhereUniqueInput
  }

  /**
   * AudiTlog deleteMany
   */
  export type AudiTlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudiTlogs to delete
     */
    where?: AudiTlogWhereInput
    /**
     * Limit how many AudiTlogs to delete.
     */
    limit?: number
  }

  /**
   * AudiTlog without action
   */
  export type AudiTlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudiTlog
     */
    select?: AudiTlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudiTlog
     */
    omit?: AudiTlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudiTlogInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalRequest
   */

  export type AggregateApprovalRequest = {
    _count: ApprovalRequestCountAggregateOutputType | null
    _min: ApprovalRequestMinAggregateOutputType | null
    _max: ApprovalRequestMaxAggregateOutputType | null
  }

  export type ApprovalRequestMinAggregateOutputType = {
    id: string | null
    workflowExecutionId: string | null
    userId: string | null
    civaAuthReqid: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    createdAt: Date | null
    respondedAt: Date | null
    expiredAt: Date | null
  }

  export type ApprovalRequestMaxAggregateOutputType = {
    id: string | null
    workflowExecutionId: string | null
    userId: string | null
    civaAuthReqid: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    createdAt: Date | null
    respondedAt: Date | null
    expiredAt: Date | null
  }

  export type ApprovalRequestCountAggregateOutputType = {
    id: number
    workflowExecutionId: number
    userId: number
    civaAuthReqid: number
    requestDetails: number
    status: number
    createdAt: number
    respondedAt: number
    expiredAt: number
    _all: number
  }


  export type ApprovalRequestMinAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    userId?: true
    civaAuthReqid?: true
    status?: true
    createdAt?: true
    respondedAt?: true
    expiredAt?: true
  }

  export type ApprovalRequestMaxAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    userId?: true
    civaAuthReqid?: true
    status?: true
    createdAt?: true
    respondedAt?: true
    expiredAt?: true
  }

  export type ApprovalRequestCountAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    userId?: true
    civaAuthReqid?: true
    requestDetails?: true
    status?: true
    createdAt?: true
    respondedAt?: true
    expiredAt?: true
    _all?: true
  }

  export type ApprovalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRequest to aggregate.
     */
    where?: ApprovalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRequests to fetch.
     */
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalRequests
    **/
    _count?: true | ApprovalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRequestMaxAggregateInputType
  }

  export type GetApprovalRequestAggregateType<T extends ApprovalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalRequest[P]>
      : GetScalarType<T[P], AggregateApprovalRequest[P]>
  }




  export type ApprovalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRequestWhereInput
    orderBy?: ApprovalRequestOrderByWithAggregationInput | ApprovalRequestOrderByWithAggregationInput[]
    by: ApprovalRequestScalarFieldEnum[] | ApprovalRequestScalarFieldEnum
    having?: ApprovalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalRequestCountAggregateInputType | true
    _min?: ApprovalRequestMinAggregateInputType
    _max?: ApprovalRequestMaxAggregateInputType
  }

  export type ApprovalRequestGroupByOutputType = {
    id: string
    workflowExecutionId: string
    userId: string
    civaAuthReqid: string
    requestDetails: JsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt: Date
    respondedAt: Date | null
    expiredAt: Date | null
    _count: ApprovalRequestCountAggregateOutputType | null
    _min: ApprovalRequestMinAggregateOutputType | null
    _max: ApprovalRequestMaxAggregateOutputType | null
  }

  type GetApprovalRequestGroupByPayload<T extends ApprovalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalRequestGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    userId?: boolean
    civaAuthReqid?: boolean
    requestDetails?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    expiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRequest"]>

  export type ApprovalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    userId?: boolean
    civaAuthReqid?: boolean
    requestDetails?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    expiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRequest"]>

  export type ApprovalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    userId?: boolean
    civaAuthReqid?: boolean
    requestDetails?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    expiredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRequest"]>

  export type ApprovalRequestSelectScalar = {
    id?: boolean
    workflowExecutionId?: boolean
    userId?: boolean
    civaAuthReqid?: boolean
    requestDetails?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    expiredAt?: boolean
  }

  export type ApprovalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowExecutionId" | "userId" | "civaAuthReqid" | "requestDetails" | "status" | "createdAt" | "respondedAt" | "expiredAt", ExtArgs["result"]["approvalRequest"]>
  export type ApprovalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }
  export type ApprovalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }
  export type ApprovalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workflowExecution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }

  export type $ApprovalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workflowExecution: Prisma.$WorkFlowExecutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowExecutionId: string
      userId: string
      civaAuthReqid: string
      requestDetails: Prisma.JsonValue
      status: $Enums.StatusOfWorkFlowExecution
      createdAt: Date
      respondedAt: Date | null
      expiredAt: Date | null
    }, ExtArgs["result"]["approvalRequest"]>
    composites: {}
  }

  type ApprovalRequestGetPayload<S extends boolean | null | undefined | ApprovalRequestDefaultArgs> = $Result.GetResult<Prisma.$ApprovalRequestPayload, S>

  type ApprovalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalRequestCountAggregateInputType | true
    }

  export interface ApprovalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRequest'], meta: { name: 'ApprovalRequest' } }
    /**
     * Find zero or one ApprovalRequest that matches the filter.
     * @param {ApprovalRequestFindUniqueArgs} args - Arguments to find a ApprovalRequest
     * @example
     * // Get one ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRequestFindUniqueArgs>(args: SelectSubset<T, ApprovalRequestFindUniqueArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRequestFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRequest
     * @example
     * // Get one ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestFindFirstArgs} args - Arguments to find a ApprovalRequest
     * @example
     * // Get one ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRequestFindFirstArgs>(args?: SelectSubset<T, ApprovalRequestFindFirstArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestFindFirstOrThrowArgs} args - Arguments to find a ApprovalRequest
     * @example
     * // Get one ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRequests
     * const approvalRequests = await prisma.approvalRequest.findMany()
     * 
     * // Get first 10 ApprovalRequests
     * const approvalRequests = await prisma.approvalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalRequestWithIdOnly = await prisma.approvalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalRequestFindManyArgs>(args?: SelectSubset<T, ApprovalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalRequest.
     * @param {ApprovalRequestCreateArgs} args - Arguments to create a ApprovalRequest.
     * @example
     * // Create one ApprovalRequest
     * const ApprovalRequest = await prisma.approvalRequest.create({
     *   data: {
     *     // ... data to create a ApprovalRequest
     *   }
     * })
     * 
     */
    create<T extends ApprovalRequestCreateArgs>(args: SelectSubset<T, ApprovalRequestCreateArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalRequests.
     * @param {ApprovalRequestCreateManyArgs} args - Arguments to create many ApprovalRequests.
     * @example
     * // Create many ApprovalRequests
     * const approvalRequest = await prisma.approvalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalRequestCreateManyArgs>(args?: SelectSubset<T, ApprovalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalRequests and returns the data saved in the database.
     * @param {ApprovalRequestCreateManyAndReturnArgs} args - Arguments to create many ApprovalRequests.
     * @example
     * // Create many ApprovalRequests
     * const approvalRequest = await prisma.approvalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalRequests and only return the `id`
     * const approvalRequestWithIdOnly = await prisma.approvalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalRequest.
     * @param {ApprovalRequestDeleteArgs} args - Arguments to delete one ApprovalRequest.
     * @example
     * // Delete one ApprovalRequest
     * const ApprovalRequest = await prisma.approvalRequest.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRequest
     *   }
     * })
     * 
     */
    delete<T extends ApprovalRequestDeleteArgs>(args: SelectSubset<T, ApprovalRequestDeleteArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalRequest.
     * @param {ApprovalRequestUpdateArgs} args - Arguments to update one ApprovalRequest.
     * @example
     * // Update one ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalRequestUpdateArgs>(args: SelectSubset<T, ApprovalRequestUpdateArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalRequests.
     * @param {ApprovalRequestDeleteManyArgs} args - Arguments to filter ApprovalRequests to delete.
     * @example
     * // Delete a few ApprovalRequests
     * const { count } = await prisma.approvalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalRequestDeleteManyArgs>(args?: SelectSubset<T, ApprovalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRequests
     * const approvalRequest = await prisma.approvalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalRequestUpdateManyArgs>(args: SelectSubset<T, ApprovalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRequests and returns the data updated in the database.
     * @param {ApprovalRequestUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRequests.
     * @example
     * // Update many ApprovalRequests
     * const approvalRequest = await prisma.approvalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalRequests and only return the `id`
     * const approvalRequestWithIdOnly = await prisma.approvalRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalRequest.
     * @param {ApprovalRequestUpsertArgs} args - Arguments to update or create a ApprovalRequest.
     * @example
     * // Update or create a ApprovalRequest
     * const approvalRequest = await prisma.approvalRequest.upsert({
     *   create: {
     *     // ... data to create a ApprovalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRequest we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRequestUpsertArgs>(args: SelectSubset<T, ApprovalRequestUpsertArgs<ExtArgs>>): Prisma__ApprovalRequestClient<$Result.GetResult<Prisma.$ApprovalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestCountArgs} args - Arguments to filter ApprovalRequests to count.
     * @example
     * // Count the number of ApprovalRequests
     * const count = await prisma.approvalRequest.count({
     *   where: {
     *     // ... the filter for the ApprovalRequests we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRequestCountArgs>(
      args?: Subset<T, ApprovalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalRequestAggregateArgs>(args: Subset<T, ApprovalRequestAggregateArgs>): Prisma.PrismaPromise<GetApprovalRequestAggregateType<T>>

    /**
     * Group by ApprovalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalRequestGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalRequest model
   */
  readonly fields: ApprovalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflowExecution<T extends WorkFlowExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowExecutionDefaultArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalRequest model
   */
  interface ApprovalRequestFieldRefs {
    readonly id: FieldRef<"ApprovalRequest", 'String'>
    readonly workflowExecutionId: FieldRef<"ApprovalRequest", 'String'>
    readonly userId: FieldRef<"ApprovalRequest", 'String'>
    readonly civaAuthReqid: FieldRef<"ApprovalRequest", 'String'>
    readonly requestDetails: FieldRef<"ApprovalRequest", 'Json'>
    readonly status: FieldRef<"ApprovalRequest", 'StatusOfWorkFlowExecution'>
    readonly createdAt: FieldRef<"ApprovalRequest", 'DateTime'>
    readonly respondedAt: FieldRef<"ApprovalRequest", 'DateTime'>
    readonly expiredAt: FieldRef<"ApprovalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalRequest findUnique
   */
  export type ApprovalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRequest to fetch.
     */
    where: ApprovalRequestWhereUniqueInput
  }

  /**
   * ApprovalRequest findUniqueOrThrow
   */
  export type ApprovalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRequest to fetch.
     */
    where: ApprovalRequestWhereUniqueInput
  }

  /**
   * ApprovalRequest findFirst
   */
  export type ApprovalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRequest to fetch.
     */
    where?: ApprovalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRequests to fetch.
     */
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRequests.
     */
    cursor?: ApprovalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRequests.
     */
    distinct?: ApprovalRequestScalarFieldEnum | ApprovalRequestScalarFieldEnum[]
  }

  /**
   * ApprovalRequest findFirstOrThrow
   */
  export type ApprovalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRequest to fetch.
     */
    where?: ApprovalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRequests to fetch.
     */
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRequests.
     */
    cursor?: ApprovalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRequests.
     */
    distinct?: ApprovalRequestScalarFieldEnum | ApprovalRequestScalarFieldEnum[]
  }

  /**
   * ApprovalRequest findMany
   */
  export type ApprovalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRequests to fetch.
     */
    where?: ApprovalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRequests to fetch.
     */
    orderBy?: ApprovalRequestOrderByWithRelationInput | ApprovalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalRequests.
     */
    cursor?: ApprovalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRequests.
     */
    distinct?: ApprovalRequestScalarFieldEnum | ApprovalRequestScalarFieldEnum[]
  }

  /**
   * ApprovalRequest create
   */
  export type ApprovalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalRequest.
     */
    data: XOR<ApprovalRequestCreateInput, ApprovalRequestUncheckedCreateInput>
  }

  /**
   * ApprovalRequest createMany
   */
  export type ApprovalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRequests.
     */
    data: ApprovalRequestCreateManyInput | ApprovalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalRequest createManyAndReturn
   */
  export type ApprovalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalRequests.
     */
    data: ApprovalRequestCreateManyInput | ApprovalRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRequest update
   */
  export type ApprovalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalRequest.
     */
    data: XOR<ApprovalRequestUpdateInput, ApprovalRequestUncheckedUpdateInput>
    /**
     * Choose, which ApprovalRequest to update.
     */
    where: ApprovalRequestWhereUniqueInput
  }

  /**
   * ApprovalRequest updateMany
   */
  export type ApprovalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRequests.
     */
    data: XOR<ApprovalRequestUpdateManyMutationInput, ApprovalRequestUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRequests to update
     */
    where?: ApprovalRequestWhereInput
    /**
     * Limit how many ApprovalRequests to update.
     */
    limit?: number
  }

  /**
   * ApprovalRequest updateManyAndReturn
   */
  export type ApprovalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalRequests.
     */
    data: XOR<ApprovalRequestUpdateManyMutationInput, ApprovalRequestUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRequests to update
     */
    where?: ApprovalRequestWhereInput
    /**
     * Limit how many ApprovalRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRequest upsert
   */
  export type ApprovalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalRequest to update in case it exists.
     */
    where: ApprovalRequestWhereUniqueInput
    /**
     * In case the ApprovalRequest found by the `where` argument doesn't exist, create a new ApprovalRequest with this data.
     */
    create: XOR<ApprovalRequestCreateInput, ApprovalRequestUncheckedCreateInput>
    /**
     * In case the ApprovalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalRequestUpdateInput, ApprovalRequestUncheckedUpdateInput>
  }

  /**
   * ApprovalRequest delete
   */
  export type ApprovalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
    /**
     * Filter which ApprovalRequest to delete.
     */
    where: ApprovalRequestWhereUniqueInput
  }

  /**
   * ApprovalRequest deleteMany
   */
  export type ApprovalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRequests to delete
     */
    where?: ApprovalRequestWhereInput
    /**
     * Limit how many ApprovalRequests to delete.
     */
    limit?: number
  }

  /**
   * ApprovalRequest without action
   */
  export type ApprovalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRequest
     */
    select?: ApprovalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRequest
     */
    omit?: ApprovalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRequestInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentVariable
   */

  export type AggregateEnvironmentVariable = {
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  export type EnvironmentVariableMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
    target: $Enums.ResourceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
    target: $Enums.ResourceType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    value: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentVariableMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentVariableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariable to aggregate.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentVariables
    **/
    _count?: true | EnvironmentVariableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentVariableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type GetEnvironmentVariableAggregateType<T extends EnvironmentVariableAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentVariable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
      : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
  }




  export type EnvironmentVariableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithAggregationInput | EnvironmentVariableOrderByWithAggregationInput[]
    by: EnvironmentVariableScalarFieldEnum[] | EnvironmentVariableScalarFieldEnum
    having?: EnvironmentVariableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentVariableCountAggregateInputType | true
    _min?: EnvironmentVariableMinAggregateInputType
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type EnvironmentVariableGroupByOutputType = {
    id: string
    projectId: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  type GetEnvironmentVariableGroupByPayload<T extends EnvironmentVariableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentVariableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentVariableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentVariableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentVariableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "key" | "value" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["environmentVariable"]>
  export type EnvironmentVariableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $EnvironmentVariablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentVariable"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      key: string
      value: string
      target: $Enums.ResourceType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environmentVariable"]>
    composites: {}
  }

  type EnvironmentVariableGetPayload<S extends boolean | null | undefined | EnvironmentVariableDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentVariablePayload, S>

  type EnvironmentVariableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentVariableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentVariableCountAggregateInputType | true
    }

  export interface EnvironmentVariableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentVariable'], meta: { name: 'EnvironmentVariable' } }
    /**
     * Find zero or one EnvironmentVariable that matches the filter.
     * @param {EnvironmentVariableFindUniqueArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentVariableFindUniqueArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentVariable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentVariableFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentVariableFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentVariableFindFirstArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentVariableFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentVariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany()
     * 
     * // Get first 10 EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentVariableFindManyArgs>(args?: SelectSubset<T, EnvironmentVariableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentVariable.
     * @param {EnvironmentVariableCreateArgs} args - Arguments to create a EnvironmentVariable.
     * @example
     * // Create one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.create({
     *   data: {
     *     // ... data to create a EnvironmentVariable
     *   }
     * })
     * 
     */
    create<T extends EnvironmentVariableCreateArgs>(args: SelectSubset<T, EnvironmentVariableCreateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentVariables.
     * @param {EnvironmentVariableCreateManyArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentVariableCreateManyArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentVariables and returns the data saved in the database.
     * @param {EnvironmentVariableCreateManyAndReturnArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentVariableCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnvironmentVariable.
     * @param {EnvironmentVariableDeleteArgs} args - Arguments to delete one EnvironmentVariable.
     * @example
     * // Delete one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentVariable
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentVariableDeleteArgs>(args: SelectSubset<T, EnvironmentVariableDeleteArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentVariable.
     * @param {EnvironmentVariableUpdateArgs} args - Arguments to update one EnvironmentVariable.
     * @example
     * // Update one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentVariableUpdateArgs>(args: SelectSubset<T, EnvironmentVariableUpdateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentVariables.
     * @param {EnvironmentVariableDeleteManyArgs} args - Arguments to filter EnvironmentVariables to delete.
     * @example
     * // Delete a few EnvironmentVariables
     * const { count } = await prisma.environmentVariable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentVariableDeleteManyArgs>(args?: SelectSubset<T, EnvironmentVariableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentVariableUpdateManyArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables and returns the data updated in the database.
     * @param {EnvironmentVariableUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentVariables.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentVariableUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnvironmentVariable.
     * @param {EnvironmentVariableUpsertArgs} args - Arguments to update or create a EnvironmentVariable.
     * @example
     * // Update or create a EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.upsert({
     *   create: {
     *     // ... data to create a EnvironmentVariable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentVariable we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentVariableUpsertArgs>(args: SelectSubset<T, EnvironmentVariableUpsertArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableCountArgs} args - Arguments to filter EnvironmentVariables to count.
     * @example
     * // Count the number of EnvironmentVariables
     * const count = await prisma.environmentVariable.count({
     *   where: {
     *     // ... the filter for the EnvironmentVariables we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentVariableCountArgs>(
      args?: Subset<T, EnvironmentVariableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentVariableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentVariableAggregateArgs>(args: Subset<T, EnvironmentVariableAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentVariableAggregateType<T>>

    /**
     * Group by EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentVariableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentVariableGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentVariableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentVariableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentVariableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentVariable model
   */
  readonly fields: EnvironmentVariableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentVariable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentVariableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentVariable model
   */
  interface EnvironmentVariableFieldRefs {
    readonly id: FieldRef<"EnvironmentVariable", 'String'>
    readonly projectId: FieldRef<"EnvironmentVariable", 'String'>
    readonly key: FieldRef<"EnvironmentVariable", 'String'>
    readonly value: FieldRef<"EnvironmentVariable", 'String'>
    readonly target: FieldRef<"EnvironmentVariable", 'ResourceType'>
    readonly createdAt: FieldRef<"EnvironmentVariable", 'DateTime'>
    readonly updatedAt: FieldRef<"EnvironmentVariable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentVariable findUnique
   */
  export type EnvironmentVariableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findUniqueOrThrow
   */
  export type EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findFirst
   */
  export type EnvironmentVariableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findFirstOrThrow
   */
  export type EnvironmentVariableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findMany
   */
  export type EnvironmentVariableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariables to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable create
   */
  export type EnvironmentVariableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
  }

  /**
   * EnvironmentVariable createMany
   */
  export type EnvironmentVariableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentVariable createManyAndReturn
   */
  export type EnvironmentVariableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable update
   */
  export type EnvironmentVariableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentVariable to update.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable updateMany
   */
  export type EnvironmentVariableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable updateManyAndReturn
   */
  export type EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable upsert
   */
  export type EnvironmentVariableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentVariable to update in case it exists.
     */
    where: EnvironmentVariableWhereUniqueInput
    /**
     * In case the EnvironmentVariable found by the `where` argument doesn't exist, create a new EnvironmentVariable with this data.
     */
    create: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
    /**
     * In case the EnvironmentVariable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
  }

  /**
   * EnvironmentVariable delete
   */
  export type EnvironmentVariableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentVariable to delete.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable deleteMany
   */
  export type EnvironmentVariableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariables to delete
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable without action
   */
  export type EnvironmentVariableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    framework: $Enums.Framework | null
    templateRepoUrl: string | null
    githubRepoUrl: string | null
    gitlabRepoUrl: string | null
    bitbucketRepoUrl: string | null
    vercelProjectId: string | null
    vercelProjectUrl: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    createdAt: Date | null
    updatedAt: Date | null
    deployedAt: Date | null
    ownerId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    framework: $Enums.Framework | null
    templateRepoUrl: string | null
    githubRepoUrl: string | null
    gitlabRepoUrl: string | null
    bitbucketRepoUrl: string | null
    vercelProjectId: string | null
    vercelProjectUrl: string | null
    status: $Enums.StatusOfWorkFlowExecution | null
    createdAt: Date | null
    updatedAt: Date | null
    deployedAt: Date | null
    ownerId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    framework: number
    templateRepoUrl: number
    githubRepoUrl: number
    gitlabRepoUrl: number
    bitbucketRepoUrl: number
    vercelProjectId: number
    vercelProjectUrl: number
    status: number
    createdAt: number
    updatedAt: number
    deployedAt: number
    ownerId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    framework?: true
    templateRepoUrl?: true
    githubRepoUrl?: true
    gitlabRepoUrl?: true
    bitbucketRepoUrl?: true
    vercelProjectId?: true
    vercelProjectUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deployedAt?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    framework?: true
    templateRepoUrl?: true
    githubRepoUrl?: true
    gitlabRepoUrl?: true
    bitbucketRepoUrl?: true
    vercelProjectId?: true
    vercelProjectUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deployedAt?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    framework?: true
    templateRepoUrl?: true
    githubRepoUrl?: true
    gitlabRepoUrl?: true
    bitbucketRepoUrl?: true
    vercelProjectId?: true
    vercelProjectUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deployedAt?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    framework: $Enums.Framework
    templateRepoUrl: string | null
    githubRepoUrl: string | null
    gitlabRepoUrl: string | null
    bitbucketRepoUrl: string | null
    vercelProjectId: string | null
    vercelProjectUrl: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt: Date
    updatedAt: Date
    deployedAt: Date | null
    ownerId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    framework?: boolean
    templateRepoUrl?: boolean
    githubRepoUrl?: boolean
    gitlabRepoUrl?: boolean
    bitbucketRepoUrl?: boolean
    vercelProjectId?: boolean
    vercelProjectUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployedAt?: boolean
    ownerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    environmentVariables?: boolean | Project$environmentVariablesArgs<ExtArgs>
    workflowExecutions?: boolean | Project$workflowExecutionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    framework?: boolean
    templateRepoUrl?: boolean
    githubRepoUrl?: boolean
    gitlabRepoUrl?: boolean
    bitbucketRepoUrl?: boolean
    vercelProjectId?: boolean
    vercelProjectUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployedAt?: boolean
    ownerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    framework?: boolean
    templateRepoUrl?: boolean
    githubRepoUrl?: boolean
    gitlabRepoUrl?: boolean
    bitbucketRepoUrl?: boolean
    vercelProjectId?: boolean
    vercelProjectUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployedAt?: boolean
    ownerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    framework?: boolean
    templateRepoUrl?: boolean
    githubRepoUrl?: boolean
    gitlabRepoUrl?: boolean
    bitbucketRepoUrl?: boolean
    vercelProjectId?: boolean
    vercelProjectUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployedAt?: boolean
    ownerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "framework" | "templateRepoUrl" | "githubRepoUrl" | "gitlabRepoUrl" | "bitbucketRepoUrl" | "vercelProjectId" | "vercelProjectUrl" | "status" | "createdAt" | "updatedAt" | "deployedAt" | "ownerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    environmentVariables?: boolean | Project$environmentVariablesArgs<ExtArgs>
    workflowExecutions?: boolean | Project$workflowExecutionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      environmentVariables: Prisma.$EnvironmentVariablePayload<ExtArgs>[]
      workflowExecutions: Prisma.$WorkFlowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      framework: $Enums.Framework
      templateRepoUrl: string | null
      githubRepoUrl: string | null
      gitlabRepoUrl: string | null
      bitbucketRepoUrl: string | null
      vercelProjectId: string | null
      vercelProjectUrl: string | null
      status: $Enums.StatusOfWorkFlowExecution
      createdAt: Date
      updatedAt: Date
      deployedAt: Date | null
      ownerId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    environmentVariables<T extends Project$environmentVariablesArgs<ExtArgs> = {}>(args?: Subset<T, Project$environmentVariablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflowExecutions<T extends Project$workflowExecutionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$workflowExecutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly framework: FieldRef<"Project", 'Framework'>
    readonly templateRepoUrl: FieldRef<"Project", 'String'>
    readonly githubRepoUrl: FieldRef<"Project", 'String'>
    readonly gitlabRepoUrl: FieldRef<"Project", 'String'>
    readonly bitbucketRepoUrl: FieldRef<"Project", 'String'>
    readonly vercelProjectId: FieldRef<"Project", 'String'>
    readonly vercelProjectUrl: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'StatusOfWorkFlowExecution'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly deployedAt: FieldRef<"Project", 'DateTime'>
    readonly ownerId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.environmentVariables
   */
  export type Project$environmentVariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    cursor?: EnvironmentVariableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * Project.workflowExecutions
   */
  export type Project$workflowExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    where?: WorkFlowExecutionWhereInput
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    cursor?: WorkFlowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    authOId: 'authOId',
    email: 'email',
    username: 'username',
    telegramUserId: 'telegramUserId',
    telegramChatId: 'telegramChatId',
    vercelAcessToken: 'vercelAcessToken',
    preferredFramework: 'preferredFramework',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastActiveAt: 'lastActiveAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const TokenVaultMappingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerUserId: 'providerUserId',
    connectionName: 'connectionName',
    scopes: 'scopes',
    lastResfreshedAt: 'lastResfreshedAt',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type TokenVaultMappingScalarFieldEnum = (typeof TokenVaultMappingScalarFieldEnum)[keyof typeof TokenVaultMappingScalarFieldEnum]


  export const WorkFlowExecutionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    inngestRunId: 'inngestRunId',
    status: 'status',
    currentStep: 'currentStep',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount'
  };

  export type WorkFlowExecutionScalarFieldEnum = (typeof WorkFlowExecutionScalarFieldEnum)[keyof typeof WorkFlowExecutionScalarFieldEnum]


  export const AudiTlogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    timestamp: 'timestamp'
  };

  export type AudiTlogScalarFieldEnum = (typeof AudiTlogScalarFieldEnum)[keyof typeof AudiTlogScalarFieldEnum]


  export const ApprovalRequestScalarFieldEnum: {
    id: 'id',
    workflowExecutionId: 'workflowExecutionId',
    userId: 'userId',
    civaAuthReqid: 'civaAuthReqid',
    requestDetails: 'requestDetails',
    status: 'status',
    createdAt: 'createdAt',
    respondedAt: 'respondedAt',
    expiredAt: 'expiredAt'
  };

  export type ApprovalRequestScalarFieldEnum = (typeof ApprovalRequestScalarFieldEnum)[keyof typeof ApprovalRequestScalarFieldEnum]


  export const EnvironmentVariableScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    value: 'value',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentVariableScalarFieldEnum = (typeof EnvironmentVariableScalarFieldEnum)[keyof typeof EnvironmentVariableScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    framework: 'framework',
    templateRepoUrl: 'templateRepoUrl',
    githubRepoUrl: 'githubRepoUrl',
    gitlabRepoUrl: 'gitlabRepoUrl',
    bitbucketRepoUrl: 'bitbucketRepoUrl',
    vercelProjectId: 'vercelProjectId',
    vercelProjectUrl: 'vercelProjectUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deployedAt: 'deployedAt',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Framework'
   */
  export type EnumFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Framework'>
    


  /**
   * Reference to a field of type 'Framework[]'
   */
  export type ListEnumFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Framework[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusOfWorkFlowExecution'
   */
  export type EnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOfWorkFlowExecution'>
    


  /**
   * Reference to a field of type 'StatusOfWorkFlowExecution[]'
   */
  export type ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOfWorkFlowExecution[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'ResourceType[]'
   */
  export type ListEnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authOId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    telegramUserId?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    vercelAcessToken?: StringFilter<"User"> | string
    preferredFramework?: EnumFrameworkFilter<"User"> | $Enums.Framework
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastActiveAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    tokenVaultMappings?: TokenVaultMappingListRelationFilter
    workflowExecutions?: WorkFlowExecutionListRelationFilter
    auditLogs?: AudiTlogListRelationFilter
    approvalRequests?: ApprovalRequestListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authOId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    vercelAcessToken?: SortOrder
    preferredFramework?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActiveAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    tokenVaultMappings?: TokenVaultMappingOrderByRelationAggregateInput
    workflowExecutions?: WorkFlowExecutionOrderByRelationAggregateInput
    auditLogs?: AudiTlogOrderByRelationAggregateInput
    approvalRequests?: ApprovalRequestOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    chatSessions?: ChatSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authOId?: string
    email?: string
    username?: string
    telegramUserId?: string
    telegramChatId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    vercelAcessToken?: StringFilter<"User"> | string
    preferredFramework?: EnumFrameworkFilter<"User"> | $Enums.Framework
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastActiveAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    tokenVaultMappings?: TokenVaultMappingListRelationFilter
    workflowExecutions?: WorkFlowExecutionListRelationFilter
    auditLogs?: AudiTlogListRelationFilter
    approvalRequests?: ApprovalRequestListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }, "id" | "authOId" | "email" | "username" | "telegramUserId" | "telegramChatId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authOId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    telegramUserId?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    vercelAcessToken?: SortOrder
    preferredFramework?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActiveAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    authOId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    telegramUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    vercelAcessToken?: StringWithAggregatesFilter<"User"> | string
    preferredFramework?: EnumFrameworkWithAggregatesFilter<"User"> | $Enums.Framework
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActiveAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    title?: StringWithAggregatesFilter<"ChatSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    sessionId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<ChatSessionNullableScalarRelationFilter, ChatSessionWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    session?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    sessionId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<ChatSessionNullableScalarRelationFilter, ChatSessionWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringNullableWithAggregatesFilter<"ChatMessage"> | string | null
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type TokenVaultMappingWhereInput = {
    AND?: TokenVaultMappingWhereInput | TokenVaultMappingWhereInput[]
    OR?: TokenVaultMappingWhereInput[]
    NOT?: TokenVaultMappingWhereInput | TokenVaultMappingWhereInput[]
    id?: StringFilter<"TokenVaultMapping"> | string
    userId?: StringFilter<"TokenVaultMapping"> | string
    provider?: EnumProviderFilter<"TokenVaultMapping"> | $Enums.Provider
    providerUserId?: StringFilter<"TokenVaultMapping"> | string
    connectionName?: StringFilter<"TokenVaultMapping"> | string
    scopes?: StringNullableListFilter<"TokenVaultMapping">
    lastResfreshedAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    createdAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    isActive?: BoolFilter<"TokenVaultMapping"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenVaultMappingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    connectionName?: SortOrder
    scopes?: SortOrder
    lastResfreshedAt?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenVaultMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenVaultMappingWhereInput | TokenVaultMappingWhereInput[]
    OR?: TokenVaultMappingWhereInput[]
    NOT?: TokenVaultMappingWhereInput | TokenVaultMappingWhereInput[]
    userId?: StringFilter<"TokenVaultMapping"> | string
    provider?: EnumProviderFilter<"TokenVaultMapping"> | $Enums.Provider
    providerUserId?: StringFilter<"TokenVaultMapping"> | string
    connectionName?: StringFilter<"TokenVaultMapping"> | string
    scopes?: StringNullableListFilter<"TokenVaultMapping">
    lastResfreshedAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    createdAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    isActive?: BoolFilter<"TokenVaultMapping"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenVaultMappingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    connectionName?: SortOrder
    scopes?: SortOrder
    lastResfreshedAt?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: TokenVaultMappingCountOrderByAggregateInput
    _max?: TokenVaultMappingMaxOrderByAggregateInput
    _min?: TokenVaultMappingMinOrderByAggregateInput
  }

  export type TokenVaultMappingScalarWhereWithAggregatesInput = {
    AND?: TokenVaultMappingScalarWhereWithAggregatesInput | TokenVaultMappingScalarWhereWithAggregatesInput[]
    OR?: TokenVaultMappingScalarWhereWithAggregatesInput[]
    NOT?: TokenVaultMappingScalarWhereWithAggregatesInput | TokenVaultMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenVaultMapping"> | string
    userId?: StringWithAggregatesFilter<"TokenVaultMapping"> | string
    provider?: EnumProviderWithAggregatesFilter<"TokenVaultMapping"> | $Enums.Provider
    providerUserId?: StringWithAggregatesFilter<"TokenVaultMapping"> | string
    connectionName?: StringWithAggregatesFilter<"TokenVaultMapping"> | string
    scopes?: StringNullableListFilter<"TokenVaultMapping">
    lastResfreshedAt?: DateTimeWithAggregatesFilter<"TokenVaultMapping"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenVaultMapping"> | Date | string
    isActive?: BoolWithAggregatesFilter<"TokenVaultMapping"> | boolean
  }

  export type WorkFlowExecutionWhereInput = {
    AND?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    OR?: WorkFlowExecutionWhereInput[]
    NOT?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    id?: StringFilter<"WorkFlowExecution"> | string
    projectId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    inngestRunId?: StringFilter<"WorkFlowExecution"> | string
    status?: EnumStatusOfWorkFlowExecutionFilter<"WorkFlowExecution"> | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFilter<"WorkFlowExecution"> | string
    startedAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkFlowExecution"> | string | null
    retryCount?: IntFilter<"WorkFlowExecution"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    approvalRequests?: ApprovalRequestListRelationFilter
  }

  export type WorkFlowExecutionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    inngestRunId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    approvalRequests?: ApprovalRequestOrderByRelationAggregateInput
  }

  export type WorkFlowExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    OR?: WorkFlowExecutionWhereInput[]
    NOT?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    projectId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    inngestRunId?: StringFilter<"WorkFlowExecution"> | string
    status?: EnumStatusOfWorkFlowExecutionFilter<"WorkFlowExecution"> | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFilter<"WorkFlowExecution"> | string
    startedAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkFlowExecution"> | string | null
    retryCount?: IntFilter<"WorkFlowExecution"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    approvalRequests?: ApprovalRequestListRelationFilter
  }, "id">

  export type WorkFlowExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    inngestRunId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    _count?: WorkFlowExecutionCountOrderByAggregateInput
    _avg?: WorkFlowExecutionAvgOrderByAggregateInput
    _max?: WorkFlowExecutionMaxOrderByAggregateInput
    _min?: WorkFlowExecutionMinOrderByAggregateInput
    _sum?: WorkFlowExecutionSumOrderByAggregateInput
  }

  export type WorkFlowExecutionScalarWhereWithAggregatesInput = {
    AND?: WorkFlowExecutionScalarWhereWithAggregatesInput | WorkFlowExecutionScalarWhereWithAggregatesInput[]
    OR?: WorkFlowExecutionScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowExecutionScalarWhereWithAggregatesInput | WorkFlowExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    projectId?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    userId?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    inngestRunId?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    status?: EnumStatusOfWorkFlowExecutionWithAggregatesFilter<"WorkFlowExecution"> | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    startedAt?: DateTimeWithAggregatesFilter<"WorkFlowExecution"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"WorkFlowExecution"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WorkFlowExecution"> | string | null
    retryCount?: IntWithAggregatesFilter<"WorkFlowExecution"> | number
  }

  export type AudiTlogWhereInput = {
    AND?: AudiTlogWhereInput | AudiTlogWhereInput[]
    OR?: AudiTlogWhereInput[]
    NOT?: AudiTlogWhereInput | AudiTlogWhereInput[]
    id?: StringFilter<"AudiTlog"> | string
    userId?: StringFilter<"AudiTlog"> | string
    action?: StringFilter<"AudiTlog"> | string
    resourceType?: StringFilter<"AudiTlog"> | string
    resourceId?: StringFilter<"AudiTlog"> | string
    metadata?: JsonFilter<"AudiTlog">
    ipAddress?: StringFilter<"AudiTlog"> | string
    userAgent?: StringFilter<"AudiTlog"> | string
    timestamp?: DateTimeFilter<"AudiTlog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AudiTlogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AudiTlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudiTlogWhereInput | AudiTlogWhereInput[]
    OR?: AudiTlogWhereInput[]
    NOT?: AudiTlogWhereInput | AudiTlogWhereInput[]
    userId?: StringFilter<"AudiTlog"> | string
    action?: StringFilter<"AudiTlog"> | string
    resourceType?: StringFilter<"AudiTlog"> | string
    resourceId?: StringFilter<"AudiTlog"> | string
    metadata?: JsonFilter<"AudiTlog">
    ipAddress?: StringFilter<"AudiTlog"> | string
    userAgent?: StringFilter<"AudiTlog"> | string
    timestamp?: DateTimeFilter<"AudiTlog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AudiTlogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    _count?: AudiTlogCountOrderByAggregateInput
    _max?: AudiTlogMaxOrderByAggregateInput
    _min?: AudiTlogMinOrderByAggregateInput
  }

  export type AudiTlogScalarWhereWithAggregatesInput = {
    AND?: AudiTlogScalarWhereWithAggregatesInput | AudiTlogScalarWhereWithAggregatesInput[]
    OR?: AudiTlogScalarWhereWithAggregatesInput[]
    NOT?: AudiTlogScalarWhereWithAggregatesInput | AudiTlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudiTlog"> | string
    userId?: StringWithAggregatesFilter<"AudiTlog"> | string
    action?: StringWithAggregatesFilter<"AudiTlog"> | string
    resourceType?: StringWithAggregatesFilter<"AudiTlog"> | string
    resourceId?: StringWithAggregatesFilter<"AudiTlog"> | string
    metadata?: JsonWithAggregatesFilter<"AudiTlog">
    ipAddress?: StringWithAggregatesFilter<"AudiTlog"> | string
    userAgent?: StringWithAggregatesFilter<"AudiTlog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AudiTlog"> | Date | string
  }

  export type ApprovalRequestWhereInput = {
    AND?: ApprovalRequestWhereInput | ApprovalRequestWhereInput[]
    OR?: ApprovalRequestWhereInput[]
    NOT?: ApprovalRequestWhereInput | ApprovalRequestWhereInput[]
    id?: StringFilter<"ApprovalRequest"> | string
    workflowExecutionId?: StringFilter<"ApprovalRequest"> | string
    userId?: StringFilter<"ApprovalRequest"> | string
    civaAuthReqid?: StringFilter<"ApprovalRequest"> | string
    requestDetails?: JsonFilter<"ApprovalRequest">
    status?: EnumStatusOfWorkFlowExecutionFilter<"ApprovalRequest"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"ApprovalRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflowExecution?: XOR<WorkFlowExecutionScalarRelationFilter, WorkFlowExecutionWhereInput>
  }

  export type ApprovalRequestOrderByWithRelationInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    userId?: SortOrder
    civaAuthReqid?: SortOrder
    requestDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workflowExecution?: WorkFlowExecutionOrderByWithRelationInput
  }

  export type ApprovalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalRequestWhereInput | ApprovalRequestWhereInput[]
    OR?: ApprovalRequestWhereInput[]
    NOT?: ApprovalRequestWhereInput | ApprovalRequestWhereInput[]
    workflowExecutionId?: StringFilter<"ApprovalRequest"> | string
    userId?: StringFilter<"ApprovalRequest"> | string
    civaAuthReqid?: StringFilter<"ApprovalRequest"> | string
    requestDetails?: JsonFilter<"ApprovalRequest">
    status?: EnumStatusOfWorkFlowExecutionFilter<"ApprovalRequest"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"ApprovalRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workflowExecution?: XOR<WorkFlowExecutionScalarRelationFilter, WorkFlowExecutionWhereInput>
  }, "id">

  export type ApprovalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    userId?: SortOrder
    civaAuthReqid?: SortOrder
    requestDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    _count?: ApprovalRequestCountOrderByAggregateInput
    _max?: ApprovalRequestMaxOrderByAggregateInput
    _min?: ApprovalRequestMinOrderByAggregateInput
  }

  export type ApprovalRequestScalarWhereWithAggregatesInput = {
    AND?: ApprovalRequestScalarWhereWithAggregatesInput | ApprovalRequestScalarWhereWithAggregatesInput[]
    OR?: ApprovalRequestScalarWhereWithAggregatesInput[]
    NOT?: ApprovalRequestScalarWhereWithAggregatesInput | ApprovalRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalRequest"> | string
    workflowExecutionId?: StringWithAggregatesFilter<"ApprovalRequest"> | string
    userId?: StringWithAggregatesFilter<"ApprovalRequest"> | string
    civaAuthReqid?: StringWithAggregatesFilter<"ApprovalRequest"> | string
    requestDetails?: JsonWithAggregatesFilter<"ApprovalRequest">
    status?: EnumStatusOfWorkFlowExecutionWithAggregatesFilter<"ApprovalRequest"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeWithAggregatesFilter<"ApprovalRequest"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"ApprovalRequest"> | Date | string | null
    expiredAt?: DateTimeNullableWithAggregatesFilter<"ApprovalRequest"> | Date | string | null
  }

  export type EnvironmentVariableWhereInput = {
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    target?: EnumResourceTypeFilter<"EnvironmentVariable"> | $Enums.ResourceType
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type EnvironmentVariableOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type EnvironmentVariableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    target?: EnumResourceTypeFilter<"EnvironmentVariable"> | $Enums.ResourceType
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type EnvironmentVariableOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentVariableCountOrderByAggregateInput
    _max?: EnvironmentVariableMaxOrderByAggregateInput
    _min?: EnvironmentVariableMinOrderByAggregateInput
  }

  export type EnvironmentVariableScalarWhereWithAggregatesInput = {
    AND?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    OR?: EnvironmentVariableScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    projectId?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    key?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    value?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    target?: EnumResourceTypeWithAggregatesFilter<"EnvironmentVariable"> | $Enums.ResourceType
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    framework?: EnumFrameworkFilter<"Project"> | $Enums.Framework
    templateRepoUrl?: StringNullableFilter<"Project"> | string | null
    githubRepoUrl?: StringNullableFilter<"Project"> | string | null
    gitlabRepoUrl?: StringNullableFilter<"Project"> | string | null
    bitbucketRepoUrl?: StringNullableFilter<"Project"> | string | null
    vercelProjectId?: StringNullableFilter<"Project"> | string | null
    vercelProjectUrl?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusOfWorkFlowExecutionFilter<"Project"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deployedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    environmentVariables?: EnvironmentVariableListRelationFilter
    workflowExecutions?: WorkFlowExecutionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    framework?: SortOrder
    templateRepoUrl?: SortOrderInput | SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    gitlabRepoUrl?: SortOrderInput | SortOrder
    bitbucketRepoUrl?: SortOrderInput | SortOrder
    vercelProjectId?: SortOrderInput | SortOrder
    vercelProjectUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    user?: UserOrderByWithRelationInput
    environmentVariables?: EnvironmentVariableOrderByRelationAggregateInput
    workflowExecutions?: WorkFlowExecutionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    framework?: EnumFrameworkFilter<"Project"> | $Enums.Framework
    templateRepoUrl?: StringNullableFilter<"Project"> | string | null
    githubRepoUrl?: StringNullableFilter<"Project"> | string | null
    gitlabRepoUrl?: StringNullableFilter<"Project"> | string | null
    bitbucketRepoUrl?: StringNullableFilter<"Project"> | string | null
    vercelProjectId?: StringNullableFilter<"Project"> | string | null
    vercelProjectUrl?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusOfWorkFlowExecutionFilter<"Project"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deployedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    environmentVariables?: EnvironmentVariableListRelationFilter
    workflowExecutions?: WorkFlowExecutionListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    framework?: SortOrder
    templateRepoUrl?: SortOrderInput | SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    gitlabRepoUrl?: SortOrderInput | SortOrder
    bitbucketRepoUrl?: SortOrderInput | SortOrder
    vercelProjectId?: SortOrderInput | SortOrder
    vercelProjectUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployedAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    framework?: EnumFrameworkWithAggregatesFilter<"Project"> | $Enums.Framework
    templateRepoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubRepoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    gitlabRepoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    bitbucketRepoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    vercelProjectId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    vercelProjectUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumStatusOfWorkFlowExecutionWithAggregatesFilter<"Project"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deployedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    ownerId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UserCreateInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
    session?: ChatSessionCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId?: string | null
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
    session?: ChatSessionUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    sessionId?: string | null
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenVaultMappingCreateInput = {
    id?: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutTokenVaultMappingsInput
  }

  export type TokenVaultMappingUncheckedCreateInput = {
    id?: string
    userId: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type TokenVaultMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTokenVaultMappingsNestedInput
  }

  export type TokenVaultMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenVaultMappingCreateManyInput = {
    id?: string
    userId: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type TokenVaultMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenVaultMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkFlowExecutionCreateInput = {
    id?: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    user: UserCreateNestedOneWithoutWorkflowExecutionsInput
    project: ProjectCreateNestedOneWithoutWorkflowExecutionsInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
  }

  export type WorkFlowExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type WorkFlowExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudiTlogCreateInput = {
    id?: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AudiTlogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
  }

  export type AudiTlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AudiTlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiTlogCreateManyInput = {
    id?: string
    userId: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
  }

  export type AudiTlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiTlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRequestCreateInput = {
    id?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
    user?: UserCreateNestedOneWithoutApprovalRequestsInput
    workflowExecution?: WorkFlowExecutionCreateNestedOneWithoutApprovalRequestsInput
  }

  export type ApprovalRequestUncheckedCreateInput = {
    id?: string
    workflowExecutionId?: string
    userId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ApprovalRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutApprovalRequestsNestedInput
    workflowExecution?: WorkFlowExecutionUpdateOneRequiredWithoutApprovalRequestsNestedInput
  }

  export type ApprovalRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalRequestCreateManyInput = {
    id?: string
    workflowExecutionId?: string
    userId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ApprovalRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnvironmentVariableCreateInput = {
    id?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectCreateNestedOneWithoutEnvironmentVariablesInput
  }

  export type EnvironmentVariableUncheckedCreateInput = {
    id?: string
    projectId?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEnvironmentVariablesNestedInput
  }

  export type EnvironmentVariableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateManyInput = {
    id?: string
    projectId?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    user: UserCreateNestedOneWithoutProjectsInput
    environmentVariables?: EnvironmentVariableCreateNestedManyWithoutProjectInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    environmentVariables?: EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    environmentVariables?: EnvironmentVariableUpdateManyWithoutProjectNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environmentVariables?: EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkFilter<$PrismaModel> | $Enums.Framework
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TokenVaultMappingListRelationFilter = {
    every?: TokenVaultMappingWhereInput
    some?: TokenVaultMappingWhereInput
    none?: TokenVaultMappingWhereInput
  }

  export type WorkFlowExecutionListRelationFilter = {
    every?: WorkFlowExecutionWhereInput
    some?: WorkFlowExecutionWhereInput
    none?: WorkFlowExecutionWhereInput
  }

  export type AudiTlogListRelationFilter = {
    every?: AudiTlogWhereInput
    some?: AudiTlogWhereInput
    none?: AudiTlogWhereInput
  }

  export type ApprovalRequestListRelationFilter = {
    every?: ApprovalRequestWhereInput
    some?: ApprovalRequestWhereInput
    none?: ApprovalRequestWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenVaultMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudiTlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authOId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    vercelAcessToken?: SortOrder
    preferredFramework?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authOId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    vercelAcessToken?: SortOrder
    preferredFramework?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authOId?: SortOrder
    email?: SortOrder
    username?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    vercelAcessToken?: SortOrder
    preferredFramework?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.Framework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkFilter<$PrismaModel>
    _max?: NestedEnumFrameworkFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionNullableScalarRelationFilter = {
    is?: ChatSessionWhereInput | null
    isNot?: ChatSessionWhereInput | null
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokenVaultMappingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    connectionName?: SortOrder
    scopes?: SortOrder
    lastResfreshedAt?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type TokenVaultMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    connectionName?: SortOrder
    lastResfreshedAt?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type TokenVaultMappingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    connectionName?: SortOrder
    lastResfreshedAt?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusOfWorkFlowExecutionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOfWorkFlowExecution | EnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel> | $Enums.StatusOfWorkFlowExecution
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type WorkFlowExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    inngestRunId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
  }

  export type WorkFlowExecutionAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type WorkFlowExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    inngestRunId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
  }

  export type WorkFlowExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    inngestRunId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
  }

  export type WorkFlowExecutionSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EnumStatusOfWorkFlowExecutionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOfWorkFlowExecution | EnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOfWorkFlowExecutionWithAggregatesFilter<$PrismaModel> | $Enums.StatusOfWorkFlowExecution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel>
    _max?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AudiTlogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AudiTlogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AudiTlogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WorkFlowExecutionScalarRelationFilter = {
    is?: WorkFlowExecutionWhereInput
    isNot?: WorkFlowExecutionWhereInput
  }

  export type ApprovalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    userId?: SortOrder
    civaAuthReqid?: SortOrder
    requestDetails?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type ApprovalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    userId?: SortOrder
    civaAuthReqid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type ApprovalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    userId?: SortOrder
    civaAuthReqid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type EnvironmentVariableCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type EnvironmentVariableListRelationFilter = {
    every?: EnvironmentVariableWhereInput
    some?: EnvironmentVariableWhereInput
    none?: EnvironmentVariableWhereInput
  }

  export type EnvironmentVariableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    framework?: SortOrder
    templateRepoUrl?: SortOrder
    githubRepoUrl?: SortOrder
    gitlabRepoUrl?: SortOrder
    bitbucketRepoUrl?: SortOrder
    vercelProjectId?: SortOrder
    vercelProjectUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    framework?: SortOrder
    templateRepoUrl?: SortOrder
    githubRepoUrl?: SortOrder
    gitlabRepoUrl?: SortOrder
    bitbucketRepoUrl?: SortOrder
    vercelProjectId?: SortOrder
    vercelProjectUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    framework?: SortOrder
    templateRepoUrl?: SortOrder
    githubRepoUrl?: SortOrder
    gitlabRepoUrl?: SortOrder
    bitbucketRepoUrl?: SortOrder
    vercelProjectId?: SortOrder
    vercelProjectUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TokenVaultMappingCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput> | TokenVaultMappingCreateWithoutUserInput[] | TokenVaultMappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenVaultMappingCreateOrConnectWithoutUserInput | TokenVaultMappingCreateOrConnectWithoutUserInput[]
    createMany?: TokenVaultMappingCreateManyUserInputEnvelope
    connect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
  }

  export type WorkFlowExecutionCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput> | WorkFlowExecutionCreateWithoutUserInput[] | WorkFlowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutUserInput | WorkFlowExecutionCreateOrConnectWithoutUserInput[]
    createMany?: WorkFlowExecutionCreateManyUserInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type AudiTlogCreateNestedManyWithoutUserInput = {
    create?: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput> | AudiTlogCreateWithoutUserInput[] | AudiTlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudiTlogCreateOrConnectWithoutUserInput | AudiTlogCreateOrConnectWithoutUserInput[]
    createMany?: AudiTlogCreateManyUserInputEnvelope
    connect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
  }

  export type ApprovalRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput> | ApprovalRequestCreateWithoutUserInput[] | ApprovalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutUserInput | ApprovalRequestCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRequestCreateManyUserInputEnvelope
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput> | TokenVaultMappingCreateWithoutUserInput[] | TokenVaultMappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenVaultMappingCreateOrConnectWithoutUserInput | TokenVaultMappingCreateOrConnectWithoutUserInput[]
    createMany?: TokenVaultMappingCreateManyUserInputEnvelope
    connect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
  }

  export type WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput> | WorkFlowExecutionCreateWithoutUserInput[] | WorkFlowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutUserInput | WorkFlowExecutionCreateOrConnectWithoutUserInput[]
    createMany?: WorkFlowExecutionCreateManyUserInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type AudiTlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput> | AudiTlogCreateWithoutUserInput[] | AudiTlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudiTlogCreateOrConnectWithoutUserInput | AudiTlogCreateOrConnectWithoutUserInput[]
    createMany?: AudiTlogCreateManyUserInputEnvelope
    connect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
  }

  export type ApprovalRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput> | ApprovalRequestCreateWithoutUserInput[] | ApprovalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutUserInput | ApprovalRequestCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRequestCreateManyUserInputEnvelope
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFrameworkFieldUpdateOperationsInput = {
    set?: $Enums.Framework
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TokenVaultMappingUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput> | TokenVaultMappingCreateWithoutUserInput[] | TokenVaultMappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenVaultMappingCreateOrConnectWithoutUserInput | TokenVaultMappingCreateOrConnectWithoutUserInput[]
    upsert?: TokenVaultMappingUpsertWithWhereUniqueWithoutUserInput | TokenVaultMappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenVaultMappingCreateManyUserInputEnvelope
    set?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    disconnect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    delete?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    connect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    update?: TokenVaultMappingUpdateWithWhereUniqueWithoutUserInput | TokenVaultMappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenVaultMappingUpdateManyWithWhereWithoutUserInput | TokenVaultMappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenVaultMappingScalarWhereInput | TokenVaultMappingScalarWhereInput[]
  }

  export type WorkFlowExecutionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput> | WorkFlowExecutionCreateWithoutUserInput[] | WorkFlowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutUserInput | WorkFlowExecutionCreateOrConnectWithoutUserInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutUserInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkFlowExecutionCreateManyUserInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutUserInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutUserInput | WorkFlowExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type AudiTlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput> | AudiTlogCreateWithoutUserInput[] | AudiTlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudiTlogCreateOrConnectWithoutUserInput | AudiTlogCreateOrConnectWithoutUserInput[]
    upsert?: AudiTlogUpsertWithWhereUniqueWithoutUserInput | AudiTlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudiTlogCreateManyUserInputEnvelope
    set?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    disconnect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    delete?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    connect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    update?: AudiTlogUpdateWithWhereUniqueWithoutUserInput | AudiTlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudiTlogUpdateManyWithWhereWithoutUserInput | AudiTlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudiTlogScalarWhereInput | AudiTlogScalarWhereInput[]
  }

  export type ApprovalRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput> | ApprovalRequestCreateWithoutUserInput[] | ApprovalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutUserInput | ApprovalRequestCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRequestUpsertWithWhereUniqueWithoutUserInput | ApprovalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRequestCreateManyUserInputEnvelope
    set?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    disconnect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    delete?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    update?: ApprovalRequestUpdateWithWhereUniqueWithoutUserInput | ApprovalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRequestUpdateManyWithWhereWithoutUserInput | ApprovalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput> | TokenVaultMappingCreateWithoutUserInput[] | TokenVaultMappingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenVaultMappingCreateOrConnectWithoutUserInput | TokenVaultMappingCreateOrConnectWithoutUserInput[]
    upsert?: TokenVaultMappingUpsertWithWhereUniqueWithoutUserInput | TokenVaultMappingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenVaultMappingCreateManyUserInputEnvelope
    set?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    disconnect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    delete?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    connect?: TokenVaultMappingWhereUniqueInput | TokenVaultMappingWhereUniqueInput[]
    update?: TokenVaultMappingUpdateWithWhereUniqueWithoutUserInput | TokenVaultMappingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenVaultMappingUpdateManyWithWhereWithoutUserInput | TokenVaultMappingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenVaultMappingScalarWhereInput | TokenVaultMappingScalarWhereInput[]
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput> | WorkFlowExecutionCreateWithoutUserInput[] | WorkFlowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutUserInput | WorkFlowExecutionCreateOrConnectWithoutUserInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutUserInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkFlowExecutionCreateManyUserInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutUserInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutUserInput | WorkFlowExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type AudiTlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput> | AudiTlogCreateWithoutUserInput[] | AudiTlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AudiTlogCreateOrConnectWithoutUserInput | AudiTlogCreateOrConnectWithoutUserInput[]
    upsert?: AudiTlogUpsertWithWhereUniqueWithoutUserInput | AudiTlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AudiTlogCreateManyUserInputEnvelope
    set?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    disconnect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    delete?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    connect?: AudiTlogWhereUniqueInput | AudiTlogWhereUniqueInput[]
    update?: AudiTlogUpdateWithWhereUniqueWithoutUserInput | AudiTlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AudiTlogUpdateManyWithWhereWithoutUserInput | AudiTlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AudiTlogScalarWhereInput | AudiTlogScalarWhereInput[]
  }

  export type ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput> | ApprovalRequestCreateWithoutUserInput[] | ApprovalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutUserInput | ApprovalRequestCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRequestUpsertWithWhereUniqueWithoutUserInput | ApprovalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRequestCreateManyUserInputEnvelope
    set?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    disconnect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    delete?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    update?: ApprovalRequestUpdateWithWhereUniqueWithoutUserInput | ApprovalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRequestUpdateManyWithWhereWithoutUserInput | ApprovalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatSessionsInput
    upsert?: UserUpsertWithoutChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatSessionsInput, UserUpdateWithoutChatSessionsInput>, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatSessionCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutChatMessagesInput, ChatSessionUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatSessionUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutChatMessagesInput, ChatSessionUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutChatMessagesInput
    upsert?: ChatSessionUpsertWithoutChatMessagesInput
    disconnect?: ChatSessionWhereInput | boolean
    delete?: ChatSessionWhereInput | boolean
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutChatMessagesInput, ChatSessionUpdateWithoutChatMessagesInput>, ChatSessionUncheckedUpdateWithoutChatMessagesInput>
  }

  export type TokenVaultMappingCreatescopesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTokenVaultMappingsInput = {
    create?: XOR<UserCreateWithoutTokenVaultMappingsInput, UserUncheckedCreateWithoutTokenVaultMappingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenVaultMappingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type TokenVaultMappingUpdatescopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTokenVaultMappingsNestedInput = {
    create?: XOR<UserCreateWithoutTokenVaultMappingsInput, UserUncheckedCreateWithoutTokenVaultMappingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenVaultMappingsInput
    upsert?: UserUpsertWithoutTokenVaultMappingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenVaultMappingsInput, UserUpdateWithoutTokenVaultMappingsInput>, UserUncheckedUpdateWithoutTokenVaultMappingsInput>
  }

  export type UserCreateNestedOneWithoutWorkflowExecutionsInput = {
    create?: XOR<UserCreateWithoutWorkflowExecutionsInput, UserUncheckedCreateWithoutWorkflowExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowExecutionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutWorkflowExecutionsInput = {
    create?: XOR<ProjectCreateWithoutWorkflowExecutionsInput, ProjectUncheckedCreateWithoutWorkflowExecutionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorkflowExecutionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ApprovalRequestCreateNestedManyWithoutWorkflowExecutionInput = {
    create?: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput> | ApprovalRequestCreateWithoutWorkflowExecutionInput[] | ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput | ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput[]
    createMany?: ApprovalRequestCreateManyWorkflowExecutionInputEnvelope
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
  }

  export type ApprovalRequestUncheckedCreateNestedManyWithoutWorkflowExecutionInput = {
    create?: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput> | ApprovalRequestCreateWithoutWorkflowExecutionInput[] | ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput | ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput[]
    createMany?: ApprovalRequestCreateManyWorkflowExecutionInputEnvelope
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
  }

  export type EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput = {
    set?: $Enums.StatusOfWorkFlowExecution
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkflowExecutionsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowExecutionsInput, UserUncheckedCreateWithoutWorkflowExecutionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowExecutionsInput
    upsert?: UserUpsertWithoutWorkflowExecutionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowExecutionsInput, UserUpdateWithoutWorkflowExecutionsInput>, UserUncheckedUpdateWithoutWorkflowExecutionsInput>
  }

  export type ProjectUpdateOneRequiredWithoutWorkflowExecutionsNestedInput = {
    create?: XOR<ProjectCreateWithoutWorkflowExecutionsInput, ProjectUncheckedCreateWithoutWorkflowExecutionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorkflowExecutionsInput
    upsert?: ProjectUpsertWithoutWorkflowExecutionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutWorkflowExecutionsInput, ProjectUpdateWithoutWorkflowExecutionsInput>, ProjectUncheckedUpdateWithoutWorkflowExecutionsInput>
  }

  export type ApprovalRequestUpdateManyWithoutWorkflowExecutionNestedInput = {
    create?: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput> | ApprovalRequestCreateWithoutWorkflowExecutionInput[] | ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput | ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput[]
    upsert?: ApprovalRequestUpsertWithWhereUniqueWithoutWorkflowExecutionInput | ApprovalRequestUpsertWithWhereUniqueWithoutWorkflowExecutionInput[]
    createMany?: ApprovalRequestCreateManyWorkflowExecutionInputEnvelope
    set?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    disconnect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    delete?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    update?: ApprovalRequestUpdateWithWhereUniqueWithoutWorkflowExecutionInput | ApprovalRequestUpdateWithWhereUniqueWithoutWorkflowExecutionInput[]
    updateMany?: ApprovalRequestUpdateManyWithWhereWithoutWorkflowExecutionInput | ApprovalRequestUpdateManyWithWhereWithoutWorkflowExecutionInput[]
    deleteMany?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
  }

  export type ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionNestedInput = {
    create?: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput> | ApprovalRequestCreateWithoutWorkflowExecutionInput[] | ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput[]
    connectOrCreate?: ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput | ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput[]
    upsert?: ApprovalRequestUpsertWithWhereUniqueWithoutWorkflowExecutionInput | ApprovalRequestUpsertWithWhereUniqueWithoutWorkflowExecutionInput[]
    createMany?: ApprovalRequestCreateManyWorkflowExecutionInputEnvelope
    set?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    disconnect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    delete?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    connect?: ApprovalRequestWhereUniqueInput | ApprovalRequestWhereUniqueInput[]
    update?: ApprovalRequestUpdateWithWhereUniqueWithoutWorkflowExecutionInput | ApprovalRequestUpdateWithWhereUniqueWithoutWorkflowExecutionInput[]
    updateMany?: ApprovalRequestUpdateManyWithWhereWithoutWorkflowExecutionInput | ApprovalRequestUpdateManyWithWhereWithoutWorkflowExecutionInput[]
    deleteMany?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutApprovalRequestsInput = {
    create?: XOR<UserCreateWithoutApprovalRequestsInput, UserUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkFlowExecutionCreateNestedOneWithoutApprovalRequestsInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutApprovalRequestsInput
    connect?: WorkFlowExecutionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApprovalRequestsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalRequestsInput, UserUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalRequestsInput
    upsert?: UserUpsertWithoutApprovalRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalRequestsInput, UserUpdateWithoutApprovalRequestsInput>, UserUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type WorkFlowExecutionUpdateOneRequiredWithoutApprovalRequestsNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedCreateWithoutApprovalRequestsInput>
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutApprovalRequestsInput
    upsert?: WorkFlowExecutionUpsertWithoutApprovalRequestsInput
    connect?: WorkFlowExecutionWhereUniqueInput
    update?: XOR<XOR<WorkFlowExecutionUpdateToOneWithWhereWithoutApprovalRequestsInput, WorkFlowExecutionUpdateWithoutApprovalRequestsInput>, WorkFlowExecutionUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type ProjectCreateNestedOneWithoutEnvironmentVariablesInput = {
    create?: XOR<ProjectCreateWithoutEnvironmentVariablesInput, ProjectUncheckedCreateWithoutEnvironmentVariablesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvironmentVariablesInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type ProjectUpdateOneRequiredWithoutEnvironmentVariablesNestedInput = {
    create?: XOR<ProjectCreateWithoutEnvironmentVariablesInput, ProjectUncheckedCreateWithoutEnvironmentVariablesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvironmentVariablesInput
    upsert?: ProjectUpsertWithoutEnvironmentVariablesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEnvironmentVariablesInput, ProjectUpdateWithoutEnvironmentVariablesInput>, ProjectUncheckedUpdateWithoutEnvironmentVariablesInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type EnvironmentVariableCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type WorkFlowExecutionCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput> | WorkFlowExecutionCreateWithoutProjectInput[] | WorkFlowExecutionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutProjectInput | WorkFlowExecutionCreateOrConnectWithoutProjectInput[]
    createMany?: WorkFlowExecutionCreateManyProjectInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type WorkFlowExecutionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput> | WorkFlowExecutionCreateWithoutProjectInput[] | WorkFlowExecutionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutProjectInput | WorkFlowExecutionCreateOrConnectWithoutProjectInput[]
    createMany?: WorkFlowExecutionCreateManyProjectInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type EnvironmentVariableUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutProjectInput | EnvironmentVariableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type WorkFlowExecutionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput> | WorkFlowExecutionCreateWithoutProjectInput[] | WorkFlowExecutionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutProjectInput | WorkFlowExecutionCreateOrConnectWithoutProjectInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutProjectInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkFlowExecutionCreateManyProjectInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutProjectInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutProjectInput | WorkFlowExecutionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutProjectInput | EnvironmentVariableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput> | WorkFlowExecutionCreateWithoutProjectInput[] | WorkFlowExecutionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutProjectInput | WorkFlowExecutionCreateOrConnectWithoutProjectInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutProjectInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkFlowExecutionCreateManyProjectInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutProjectInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutProjectInput | WorkFlowExecutionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkFilter<$PrismaModel> | $Enums.Framework
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.Framework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkFilter<$PrismaModel>
    _max?: NestedEnumFrameworkFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOfWorkFlowExecution | EnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel> | $Enums.StatusOfWorkFlowExecution
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusOfWorkFlowExecutionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOfWorkFlowExecution | EnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOfWorkFlowExecution[] | ListEnumStatusOfWorkFlowExecutionFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOfWorkFlowExecutionWithAggregatesFilter<$PrismaModel> | $Enums.StatusOfWorkFlowExecution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel>
    _max?: NestedEnumStatusOfWorkFlowExecutionFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    environmentVariables?: EnvironmentVariableCreateNestedManyWithoutProjectInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    environmentVariables?: EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenVaultMappingCreateWithoutUserInput = {
    id?: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type TokenVaultMappingUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type TokenVaultMappingCreateOrConnectWithoutUserInput = {
    where: TokenVaultMappingWhereUniqueInput
    create: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput>
  }

  export type TokenVaultMappingCreateManyUserInputEnvelope = {
    data: TokenVaultMappingCreateManyUserInput | TokenVaultMappingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkFlowExecutionCreateWithoutUserInput = {
    id?: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    project: ProjectCreateNestedOneWithoutWorkflowExecutionsInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionCreateOrConnectWithoutUserInput = {
    where: WorkFlowExecutionWhereUniqueInput
    create: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput>
  }

  export type WorkFlowExecutionCreateManyUserInputEnvelope = {
    data: WorkFlowExecutionCreateManyUserInput | WorkFlowExecutionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AudiTlogCreateWithoutUserInput = {
    id?: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
  }

  export type AudiTlogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
  }

  export type AudiTlogCreateOrConnectWithoutUserInput = {
    where: AudiTlogWhereUniqueInput
    create: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput>
  }

  export type AudiTlogCreateManyUserInputEnvelope = {
    data: AudiTlogCreateManyUserInput | AudiTlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRequestCreateWithoutUserInput = {
    id?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
    workflowExecution?: WorkFlowExecutionCreateNestedOneWithoutApprovalRequestsInput
  }

  export type ApprovalRequestUncheckedCreateWithoutUserInput = {
    id?: string
    workflowExecutionId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ApprovalRequestCreateOrConnectWithoutUserInput = {
    where: ApprovalRequestWhereUniqueInput
    create: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRequestCreateManyUserInputEnvelope = {
    data: ApprovalRequestCreateManyUserInput | ApprovalRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    session?: ChatSessionCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId?: string | null
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    framework?: EnumFrameworkFilter<"Project"> | $Enums.Framework
    templateRepoUrl?: StringNullableFilter<"Project"> | string | null
    githubRepoUrl?: StringNullableFilter<"Project"> | string | null
    gitlabRepoUrl?: StringNullableFilter<"Project"> | string | null
    bitbucketRepoUrl?: StringNullableFilter<"Project"> | string | null
    vercelProjectId?: StringNullableFilter<"Project"> | string | null
    vercelProjectUrl?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusOfWorkFlowExecutionFilter<"Project"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deployedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    ownerId?: StringFilter<"Project"> | string
  }

  export type TokenVaultMappingUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenVaultMappingWhereUniqueInput
    update: XOR<TokenVaultMappingUpdateWithoutUserInput, TokenVaultMappingUncheckedUpdateWithoutUserInput>
    create: XOR<TokenVaultMappingCreateWithoutUserInput, TokenVaultMappingUncheckedCreateWithoutUserInput>
  }

  export type TokenVaultMappingUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenVaultMappingWhereUniqueInput
    data: XOR<TokenVaultMappingUpdateWithoutUserInput, TokenVaultMappingUncheckedUpdateWithoutUserInput>
  }

  export type TokenVaultMappingUpdateManyWithWhereWithoutUserInput = {
    where: TokenVaultMappingScalarWhereInput
    data: XOR<TokenVaultMappingUpdateManyMutationInput, TokenVaultMappingUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenVaultMappingScalarWhereInput = {
    AND?: TokenVaultMappingScalarWhereInput | TokenVaultMappingScalarWhereInput[]
    OR?: TokenVaultMappingScalarWhereInput[]
    NOT?: TokenVaultMappingScalarWhereInput | TokenVaultMappingScalarWhereInput[]
    id?: StringFilter<"TokenVaultMapping"> | string
    userId?: StringFilter<"TokenVaultMapping"> | string
    provider?: EnumProviderFilter<"TokenVaultMapping"> | $Enums.Provider
    providerUserId?: StringFilter<"TokenVaultMapping"> | string
    connectionName?: StringFilter<"TokenVaultMapping"> | string
    scopes?: StringNullableListFilter<"TokenVaultMapping">
    lastResfreshedAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    createdAt?: DateTimeFilter<"TokenVaultMapping"> | Date | string
    isActive?: BoolFilter<"TokenVaultMapping"> | boolean
  }

  export type WorkFlowExecutionUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkFlowExecutionWhereUniqueInput
    update: XOR<WorkFlowExecutionUpdateWithoutUserInput, WorkFlowExecutionUncheckedUpdateWithoutUserInput>
    create: XOR<WorkFlowExecutionCreateWithoutUserInput, WorkFlowExecutionUncheckedCreateWithoutUserInput>
  }

  export type WorkFlowExecutionUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkFlowExecutionWhereUniqueInput
    data: XOR<WorkFlowExecutionUpdateWithoutUserInput, WorkFlowExecutionUncheckedUpdateWithoutUserInput>
  }

  export type WorkFlowExecutionUpdateManyWithWhereWithoutUserInput = {
    where: WorkFlowExecutionScalarWhereInput
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkFlowExecutionScalarWhereInput = {
    AND?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
    OR?: WorkFlowExecutionScalarWhereInput[]
    NOT?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
    id?: StringFilter<"WorkFlowExecution"> | string
    projectId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    inngestRunId?: StringFilter<"WorkFlowExecution"> | string
    status?: EnumStatusOfWorkFlowExecutionFilter<"WorkFlowExecution"> | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFilter<"WorkFlowExecution"> | string
    startedAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkFlowExecution"> | string | null
    retryCount?: IntFilter<"WorkFlowExecution"> | number
  }

  export type AudiTlogUpsertWithWhereUniqueWithoutUserInput = {
    where: AudiTlogWhereUniqueInput
    update: XOR<AudiTlogUpdateWithoutUserInput, AudiTlogUncheckedUpdateWithoutUserInput>
    create: XOR<AudiTlogCreateWithoutUserInput, AudiTlogUncheckedCreateWithoutUserInput>
  }

  export type AudiTlogUpdateWithWhereUniqueWithoutUserInput = {
    where: AudiTlogWhereUniqueInput
    data: XOR<AudiTlogUpdateWithoutUserInput, AudiTlogUncheckedUpdateWithoutUserInput>
  }

  export type AudiTlogUpdateManyWithWhereWithoutUserInput = {
    where: AudiTlogScalarWhereInput
    data: XOR<AudiTlogUpdateManyMutationInput, AudiTlogUncheckedUpdateManyWithoutUserInput>
  }

  export type AudiTlogScalarWhereInput = {
    AND?: AudiTlogScalarWhereInput | AudiTlogScalarWhereInput[]
    OR?: AudiTlogScalarWhereInput[]
    NOT?: AudiTlogScalarWhereInput | AudiTlogScalarWhereInput[]
    id?: StringFilter<"AudiTlog"> | string
    userId?: StringFilter<"AudiTlog"> | string
    action?: StringFilter<"AudiTlog"> | string
    resourceType?: StringFilter<"AudiTlog"> | string
    resourceId?: StringFilter<"AudiTlog"> | string
    metadata?: JsonFilter<"AudiTlog">
    ipAddress?: StringFilter<"AudiTlog"> | string
    userAgent?: StringFilter<"AudiTlog"> | string
    timestamp?: DateTimeFilter<"AudiTlog"> | Date | string
  }

  export type ApprovalRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: ApprovalRequestWhereUniqueInput
    update: XOR<ApprovalRequestUpdateWithoutUserInput, ApprovalRequestUncheckedUpdateWithoutUserInput>
    create: XOR<ApprovalRequestCreateWithoutUserInput, ApprovalRequestUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: ApprovalRequestWhereUniqueInput
    data: XOR<ApprovalRequestUpdateWithoutUserInput, ApprovalRequestUncheckedUpdateWithoutUserInput>
  }

  export type ApprovalRequestUpdateManyWithWhereWithoutUserInput = {
    where: ApprovalRequestScalarWhereInput
    data: XOR<ApprovalRequestUpdateManyMutationInput, ApprovalRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type ApprovalRequestScalarWhereInput = {
    AND?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
    OR?: ApprovalRequestScalarWhereInput[]
    NOT?: ApprovalRequestScalarWhereInput | ApprovalRequestScalarWhereInput[]
    id?: StringFilter<"ApprovalRequest"> | string
    workflowExecutionId?: StringFilter<"ApprovalRequest"> | string
    userId?: StringFilter<"ApprovalRequest"> | string
    civaAuthReqid?: StringFilter<"ApprovalRequest"> | string
    requestDetails?: JsonFilter<"ApprovalRequest">
    status?: EnumStatusOfWorkFlowExecutionFilter<"ApprovalRequest"> | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFilter<"ApprovalRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"ApprovalRequest"> | Date | string | null
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    sessionId?: StringNullableFilter<"ChatMessage"> | string | null
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    title?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type UserCreateWithoutChatSessionsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatSessionsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatSessionsInput = {
    update: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<UserCreateWithoutChatSessionsInput, UserUncheckedCreateWithoutChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatSessionsInput, UserUncheckedUpdateWithoutChatSessionsInput>
  }

  export type UserUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatSessionCreateWithoutChatMessagesInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    userId: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutChatMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutChatMessagesInput, ChatSessionUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatSessionUpsertWithoutChatMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutChatMessagesInput, ChatSessionUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChatSessionCreateWithoutChatMessagesInput, ChatSessionUncheckedCreateWithoutChatMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutChatMessagesInput, ChatSessionUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatSessionUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTokenVaultMappingsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenVaultMappingsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenVaultMappingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenVaultMappingsInput, UserUncheckedCreateWithoutTokenVaultMappingsInput>
  }

  export type UserUpsertWithoutTokenVaultMappingsInput = {
    update: XOR<UserUpdateWithoutTokenVaultMappingsInput, UserUncheckedUpdateWithoutTokenVaultMappingsInput>
    create: XOR<UserCreateWithoutTokenVaultMappingsInput, UserUncheckedCreateWithoutTokenVaultMappingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenVaultMappingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenVaultMappingsInput, UserUncheckedUpdateWithoutTokenVaultMappingsInput>
  }

  export type UserUpdateWithoutTokenVaultMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenVaultMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkflowExecutionsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowExecutionsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowExecutionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowExecutionsInput, UserUncheckedCreateWithoutWorkflowExecutionsInput>
  }

  export type ProjectCreateWithoutWorkflowExecutionsInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    user: UserCreateNestedOneWithoutProjectsInput
    environmentVariables?: EnvironmentVariableCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutWorkflowExecutionsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    environmentVariables?: EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutWorkflowExecutionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutWorkflowExecutionsInput, ProjectUncheckedCreateWithoutWorkflowExecutionsInput>
  }

  export type ApprovalRequestCreateWithoutWorkflowExecutionInput = {
    id?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
    user?: UserCreateNestedOneWithoutApprovalRequestsInput
  }

  export type ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput = {
    id?: string
    userId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ApprovalRequestCreateOrConnectWithoutWorkflowExecutionInput = {
    where: ApprovalRequestWhereUniqueInput
    create: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput>
  }

  export type ApprovalRequestCreateManyWorkflowExecutionInputEnvelope = {
    data: ApprovalRequestCreateManyWorkflowExecutionInput | ApprovalRequestCreateManyWorkflowExecutionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowExecutionsInput = {
    update: XOR<UserUpdateWithoutWorkflowExecutionsInput, UserUncheckedUpdateWithoutWorkflowExecutionsInput>
    create: XOR<UserCreateWithoutWorkflowExecutionsInput, UserUncheckedCreateWithoutWorkflowExecutionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowExecutionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowExecutionsInput, UserUncheckedUpdateWithoutWorkflowExecutionsInput>
  }

  export type UserUpdateWithoutWorkflowExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutWorkflowExecutionsInput = {
    update: XOR<ProjectUpdateWithoutWorkflowExecutionsInput, ProjectUncheckedUpdateWithoutWorkflowExecutionsInput>
    create: XOR<ProjectCreateWithoutWorkflowExecutionsInput, ProjectUncheckedCreateWithoutWorkflowExecutionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutWorkflowExecutionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutWorkflowExecutionsInput, ProjectUncheckedUpdateWithoutWorkflowExecutionsInput>
  }

  export type ProjectUpdateWithoutWorkflowExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    environmentVariables?: EnvironmentVariableUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutWorkflowExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environmentVariables?: EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ApprovalRequestUpsertWithWhereUniqueWithoutWorkflowExecutionInput = {
    where: ApprovalRequestWhereUniqueInput
    update: XOR<ApprovalRequestUpdateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedUpdateWithoutWorkflowExecutionInput>
    create: XOR<ApprovalRequestCreateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedCreateWithoutWorkflowExecutionInput>
  }

  export type ApprovalRequestUpdateWithWhereUniqueWithoutWorkflowExecutionInput = {
    where: ApprovalRequestWhereUniqueInput
    data: XOR<ApprovalRequestUpdateWithoutWorkflowExecutionInput, ApprovalRequestUncheckedUpdateWithoutWorkflowExecutionInput>
  }

  export type ApprovalRequestUpdateManyWithWhereWithoutWorkflowExecutionInput = {
    where: ApprovalRequestScalarWhereInput
    data: XOR<ApprovalRequestUpdateManyMutationInput, ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApprovalRequestsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalRequestsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalRequestsInput, UserUncheckedCreateWithoutApprovalRequestsInput>
  }

  export type WorkFlowExecutionCreateWithoutApprovalRequestsInput = {
    id?: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    user: UserCreateNestedOneWithoutWorkflowExecutionsInput
    project: ProjectCreateNestedOneWithoutWorkflowExecutionsInput
  }

  export type WorkFlowExecutionUncheckedCreateWithoutApprovalRequestsInput = {
    id?: string
    projectId: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
  }

  export type WorkFlowExecutionCreateOrConnectWithoutApprovalRequestsInput = {
    where: WorkFlowExecutionWhereUniqueInput
    create: XOR<WorkFlowExecutionCreateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedCreateWithoutApprovalRequestsInput>
  }

  export type UserUpsertWithoutApprovalRequestsInput = {
    update: XOR<UserUpdateWithoutApprovalRequestsInput, UserUncheckedUpdateWithoutApprovalRequestsInput>
    create: XOR<UserCreateWithoutApprovalRequestsInput, UserUncheckedCreateWithoutApprovalRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalRequestsInput, UserUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type UserUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkFlowExecutionUpsertWithoutApprovalRequestsInput = {
    update: XOR<WorkFlowExecutionUpdateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedUpdateWithoutApprovalRequestsInput>
    create: XOR<WorkFlowExecutionCreateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedCreateWithoutApprovalRequestsInput>
    where?: WorkFlowExecutionWhereInput
  }

  export type WorkFlowExecutionUpdateToOneWithWhereWithoutApprovalRequestsInput = {
    where?: WorkFlowExecutionWhereInput
    data: XOR<WorkFlowExecutionUpdateWithoutApprovalRequestsInput, WorkFlowExecutionUncheckedUpdateWithoutApprovalRequestsInput>
  }

  export type WorkFlowExecutionUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateWithoutApprovalRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateWithoutEnvironmentVariablesInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    user: UserCreateNestedOneWithoutProjectsInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEnvironmentVariablesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEnvironmentVariablesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEnvironmentVariablesInput, ProjectUncheckedCreateWithoutEnvironmentVariablesInput>
  }

  export type ProjectUpsertWithoutEnvironmentVariablesInput = {
    update: XOR<ProjectUpdateWithoutEnvironmentVariablesInput, ProjectUncheckedUpdateWithoutEnvironmentVariablesInput>
    create: XOR<ProjectCreateWithoutEnvironmentVariablesInput, ProjectUncheckedCreateWithoutEnvironmentVariablesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEnvironmentVariablesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEnvironmentVariablesInput, ProjectUncheckedUpdateWithoutEnvironmentVariablesInput>
  }

  export type ProjectUpdateWithoutEnvironmentVariablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEnvironmentVariablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    tokenVaultMappings?: TokenVaultMappingCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    authOId: string
    email: string
    username: string
    telegramUserId?: string | null
    telegramChatId?: string | null
    vercelAcessToken: string
    preferredFramework: $Enums.Framework
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActiveAt?: Date | string
    tokenVaultMappings?: TokenVaultMappingUncheckedCreateNestedManyWithoutUserInput
    workflowExecutions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AudiTlogUncheckedCreateNestedManyWithoutUserInput
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    chatSessions?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type EnvironmentVariableCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUncheckedCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableCreateOrConnectWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    create: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentVariableCreateManyProjectInputEnvelope = {
    data: EnvironmentVariableCreateManyProjectInput | EnvironmentVariableCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type WorkFlowExecutionCreateWithoutProjectInput = {
    id?: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    user: UserCreateNestedOneWithoutWorkflowExecutionsInput
    approvalRequests?: ApprovalRequestCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    approvalRequests?: ApprovalRequestUncheckedCreateNestedManyWithoutWorkflowExecutionInput
  }

  export type WorkFlowExecutionCreateOrConnectWithoutProjectInput = {
    where: WorkFlowExecutionWhereUniqueInput
    create: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput>
  }

  export type WorkFlowExecutionCreateManyProjectInputEnvelope = {
    data: WorkFlowExecutionCreateManyProjectInput | WorkFlowExecutionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVaultMappings?: TokenVaultMappingUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authOId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    telegramUserId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelAcessToken?: StringFieldUpdateOperationsInput | string
    preferredFramework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokenVaultMappings?: TokenVaultMappingUncheckedUpdateManyWithoutUserNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AudiTlogUncheckedUpdateManyWithoutUserNestedInput
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    chatSessions?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    update: XOR<EnvironmentVariableUpdateWithoutProjectInput, EnvironmentVariableUncheckedUpdateWithoutProjectInput>
    create: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    data: XOR<EnvironmentVariableUpdateWithoutProjectInput, EnvironmentVariableUncheckedUpdateWithoutProjectInput>
  }

  export type EnvironmentVariableUpdateManyWithWhereWithoutProjectInput = {
    where: EnvironmentVariableScalarWhereInput
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyWithoutProjectInput>
  }

  export type EnvironmentVariableScalarWhereInput = {
    AND?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    OR?: EnvironmentVariableScalarWhereInput[]
    NOT?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    target?: EnumResourceTypeFilter<"EnvironmentVariable"> | $Enums.ResourceType
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
  }

  export type WorkFlowExecutionUpsertWithWhereUniqueWithoutProjectInput = {
    where: WorkFlowExecutionWhereUniqueInput
    update: XOR<WorkFlowExecutionUpdateWithoutProjectInput, WorkFlowExecutionUncheckedUpdateWithoutProjectInput>
    create: XOR<WorkFlowExecutionCreateWithoutProjectInput, WorkFlowExecutionUncheckedCreateWithoutProjectInput>
  }

  export type WorkFlowExecutionUpdateWithWhereUniqueWithoutProjectInput = {
    where: WorkFlowExecutionWhereUniqueInput
    data: XOR<WorkFlowExecutionUpdateWithoutProjectInput, WorkFlowExecutionUncheckedUpdateWithoutProjectInput>
  }

  export type WorkFlowExecutionUpdateManyWithWhereWithoutProjectInput = {
    where: WorkFlowExecutionScalarWhereInput
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    framework: $Enums.Framework
    templateRepoUrl?: string | null
    githubRepoUrl?: string | null
    gitlabRepoUrl?: string | null
    bitbucketRepoUrl?: string | null
    vercelProjectId?: string | null
    vercelProjectUrl?: string | null
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    updatedAt?: Date | string
    deployedAt?: Date | string | null
    ownerId: string
  }

  export type TokenVaultMappingCreateManyUserInput = {
    id?: string
    provider: $Enums.Provider
    providerUserId: string
    connectionName: string
    scopes?: TokenVaultMappingCreatescopesInput | string[]
    lastResfreshedAt?: Date | string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type WorkFlowExecutionCreateManyUserInput = {
    id?: string
    projectId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
  }

  export type AudiTlogCreateManyUserInput = {
    id?: string
    action: string
    resourceType: string
    resourceId: string
    metadata: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
  }

  export type ApprovalRequestCreateManyUserInput = {
    id?: string
    workflowExecutionId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    sessionId?: string | null
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    title?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environmentVariables?: EnvironmentVariableUpdateManyWithoutProjectNestedInput
    workflowExecutions?: WorkFlowExecutionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    environmentVariables?: EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput
    workflowExecutions?: WorkFlowExecutionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    templateRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gitlabRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bitbucketRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectId?: NullableStringFieldUpdateOperationsInput | string | null
    vercelProjectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenVaultMappingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenVaultMappingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenVaultMappingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerUserId?: StringFieldUpdateOperationsInput | string
    connectionName?: StringFieldUpdateOperationsInput | string
    scopes?: TokenVaultMappingUpdatescopesInput | string[]
    lastResfreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkFlowExecutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }

  export type AudiTlogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiTlogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudiTlogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflowExecution?: WorkFlowExecutionUpdateOneRequiredWithoutApprovalRequestsNestedInput
  }

  export type ApprovalRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRequestCreateManyWorkflowExecutionInput = {
    id?: string
    userId?: string
    civaAuthReqid: string
    requestDetails: JsonNullValueInput | InputJsonValue
    status: $Enums.StatusOfWorkFlowExecution
    createdAt?: Date | string
    respondedAt?: Date | string | null
    expiredAt?: Date | string | null
  }

  export type ApprovalRequestUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutApprovalRequestsNestedInput
  }

  export type ApprovalRequestUncheckedUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    civaAuthReqid?: StringFieldUpdateOperationsInput | string
    requestDetails?: JsonNullValueInput | InputJsonValue
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnvironmentVariableCreateManyProjectInput = {
    id?: string
    key: string
    value: string
    target: $Enums.ResourceType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowExecutionCreateManyProjectInput = {
    id?: string
    userId: string
    inngestRunId: string
    status: $Enums.StatusOfWorkFlowExecution
    currentStep: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
  }

  export type EnvironmentVariableUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    target?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowExecutionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWorkflowExecutionsNestedInput
    approvalRequests?: ApprovalRequestUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    approvalRequests?: ApprovalRequestUncheckedUpdateManyWithoutWorkflowExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    inngestRunId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusOfWorkFlowExecutionFieldUpdateOperationsInput | $Enums.StatusOfWorkFlowExecution
    currentStep?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}