
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model RestaurantAdmin
 * 
 */
export type RestaurantAdmin = $Result.DefaultSelection<Prisma.$RestaurantAdminPayload>
/**
 * Model RestaurantGalleryImage
 * 
 */
export type RestaurantGalleryImage = $Result.DefaultSelection<Prisma.$RestaurantGalleryImagePayload>
/**
 * Model MenuCategory
 * 
 */
export type MenuCategory = $Result.DefaultSelection<Prisma.$MenuCategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderProduct
 * 
 */
export type OrderProduct = $Result.DefaultSelection<Prisma.$OrderProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  IN_PREPARATION: 'IN_PREPARATION',
  PAYMENT_CONFIRMED: 'PAYMENT_CONFIRMED',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  FINISHED: 'FINISHED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const ConsumptionMethod: {
  TAKEAWAY: 'TAKEAWAY',
  DINE_IN: 'DINE_IN'
};

export type ConsumptionMethod = (typeof ConsumptionMethod)[keyof typeof ConsumptionMethod]


export const SubscriptionStatus: {
  PENDING: 'PENDING',
  TRIALING: 'TRIALING',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type ConsumptionMethod = $Enums.ConsumptionMethod

export const ConsumptionMethod: typeof $Enums.ConsumptionMethod

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantAdmin`: Exposes CRUD operations for the **RestaurantAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantAdmins
    * const restaurantAdmins = await prisma.restaurantAdmin.findMany()
    * ```
    */
  get restaurantAdmin(): Prisma.RestaurantAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantGalleryImage`: Exposes CRUD operations for the **RestaurantGalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantGalleryImages
    * const restaurantGalleryImages = await prisma.restaurantGalleryImage.findMany()
    * ```
    */
  get restaurantGalleryImage(): Prisma.RestaurantGalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuCategories
    * const menuCategories = await prisma.menuCategory.findMany()
    * ```
    */
  get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProduct`: Exposes CRUD operations for the **OrderProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderProducts
    * const orderProducts = await prisma.orderProduct.findMany()
    * ```
    */
  get orderProduct(): Prisma.OrderProductDelegate<ExtArgs, ClientOptions>;
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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
  : T extends bigint
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Restaurant: 'Restaurant',
    RestaurantAdmin: 'RestaurantAdmin',
    RestaurantGalleryImage: 'RestaurantGalleryImage',
    MenuCategory: 'MenuCategory',
    Product: 'Product',
    Order: 'Order',
    OrderProduct: 'OrderProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "restaurant" | "restaurantAdmin" | "restaurantGalleryImage" | "menuCategory" | "product" | "order" | "orderProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      RestaurantAdmin: {
        payload: Prisma.$RestaurantAdminPayload<ExtArgs>
        fields: Prisma.RestaurantAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          findFirst: {
            args: Prisma.RestaurantAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          findMany: {
            args: Prisma.RestaurantAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>[]
          }
          create: {
            args: Prisma.RestaurantAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          createMany: {
            args: Prisma.RestaurantAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>[]
          }
          delete: {
            args: Prisma.RestaurantAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          update: {
            args: Prisma.RestaurantAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantAdminPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantAdmin>
          }
          groupBy: {
            args: Prisma.RestaurantAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantAdminCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantAdminCountAggregateOutputType> | number
          }
        }
      }
      RestaurantGalleryImage: {
        payload: Prisma.$RestaurantGalleryImagePayload<ExtArgs>
        fields: Prisma.RestaurantGalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantGalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantGalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          findFirst: {
            args: Prisma.RestaurantGalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantGalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          findMany: {
            args: Prisma.RestaurantGalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>[]
          }
          create: {
            args: Prisma.RestaurantGalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          createMany: {
            args: Prisma.RestaurantGalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantGalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>[]
          }
          delete: {
            args: Prisma.RestaurantGalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          update: {
            args: Prisma.RestaurantGalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.RestaurantGalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantGalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantGalleryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>[]
          }
          upsert: {
            args: Prisma.RestaurantGalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantGalleryImagePayload>
          }
          aggregate: {
            args: Prisma.RestaurantGalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantGalleryImage>
          }
          groupBy: {
            args: Prisma.RestaurantGalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantGalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGalleryImageCountAggregateOutputType> | number
          }
        }
      }
      MenuCategory: {
        payload: Prisma.$MenuCategoryPayload<ExtArgs>
        fields: Prisma.MenuCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findFirst: {
            args: Prisma.MenuCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findMany: {
            args: Prisma.MenuCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          create: {
            args: Prisma.MenuCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          createMany: {
            args: Prisma.MenuCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          delete: {
            args: Prisma.MenuCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          update: {
            args: Prisma.MenuCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MenuCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MenuCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          aggregate: {
            args: Prisma.MenuCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuCategory>
          }
          groupBy: {
            args: Prisma.MenuCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderProduct: {
        payload: Prisma.$OrderProductPayload<ExtArgs>
        fields: Prisma.OrderProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findFirst: {
            args: Prisma.OrderProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findMany: {
            args: Prisma.OrderProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          create: {
            args: Prisma.OrderProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          createMany: {
            args: Prisma.OrderProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          delete: {
            args: Prisma.OrderProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          update: {
            args: Prisma.OrderProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          upsert: {
            args: Prisma.OrderProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          aggregate: {
            args: Prisma.OrderProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderProduct>
          }
          groupBy: {
            args: Prisma.OrderProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderProductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderProductCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    restaurant?: RestaurantOmit
    restaurantAdmin?: RestaurantAdminOmit
    restaurantGalleryImage?: RestaurantGalleryImageOmit
    menuCategory?: MenuCategoryOmit
    product?: ProductOmit
    order?: OrderOmit
    orderProduct?: OrderProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    admins: number
    galleryImages: number
    menuCategories: number
    products: number
    orders: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | RestaurantCountOutputTypeCountAdminsArgs
    galleryImages?: boolean | RestaurantCountOutputTypeCountGalleryImagesArgs
    menuCategories?: boolean | RestaurantCountOutputTypeCountMenuCategoriesArgs
    products?: boolean | RestaurantCountOutputTypeCountProductsArgs
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantAdminWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantGalleryImageWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenuCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuCategoryWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type MenuCategoryCountOutputType
   */

  export type MenuCategoryCountOutputType = {
    products: number
  }

  export type MenuCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | MenuCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategoryCountOutputType
     */
    select?: MenuCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderProducts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderProducts?: boolean | ProductCountOutputTypeCountOrderProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderProducts: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderProducts?: boolean | OrderCountOutputTypeCountOrderProductsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatarImageUrl: string | null
    coverImageUrl: string | null
    ownerName: string | null
    ownerEmail: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    surfaceColor: string | null
    menuWelcomeTitle: string | null
    menuWelcomeMessage: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    planActivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatarImageUrl: string | null
    coverImageUrl: string | null
    ownerName: string | null
    ownerEmail: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    surfaceColor: string | null
    menuWelcomeTitle: string | null
    menuWelcomeMessage: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    trialEndsAt: Date | null
    planActivatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    avatarImageUrl: number
    coverImageUrl: number
    ownerName: number
    ownerEmail: number
    heroTitle: number
    heroSubtitle: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    surfaceColor: number
    menuWelcomeTitle: number
    menuWelcomeMessage: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    stripePriceId: number
    subscriptionStatus: number
    trialEndsAt: number
    planActivatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    ownerName?: true
    ownerEmail?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    surfaceColor?: true
    menuWelcomeTitle?: true
    menuWelcomeMessage?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    planActivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    ownerName?: true
    ownerEmail?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    surfaceColor?: true
    menuWelcomeTitle?: true
    menuWelcomeMessage?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    planActivatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarImageUrl?: true
    coverImageUrl?: true
    ownerName?: true
    ownerEmail?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    surfaceColor?: true
    menuWelcomeTitle?: true
    menuWelcomeMessage?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    subscriptionStatus?: true
    trialEndsAt?: true
    planActivatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName: string | null
    ownerEmail: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryColor: string
    secondaryColor: string
    accentColor: string
    surfaceColor: string
    menuWelcomeTitle: string | null
    menuWelcomeMessage: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    subscriptionStatus: $Enums.SubscriptionStatus
    trialEndsAt: Date | null
    planActivatedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    surfaceColor?: boolean
    menuWelcomeTitle?: boolean
    menuWelcomeMessage?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    planActivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admins?: boolean | Restaurant$adminsArgs<ExtArgs>
    galleryImages?: boolean | Restaurant$galleryImagesArgs<ExtArgs>
    menuCategories?: boolean | Restaurant$menuCategoriesArgs<ExtArgs>
    products?: boolean | Restaurant$productsArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    surfaceColor?: boolean
    menuWelcomeTitle?: boolean
    menuWelcomeMessage?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    planActivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    surfaceColor?: boolean
    menuWelcomeTitle?: boolean
    menuWelcomeMessage?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    planActivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarImageUrl?: boolean
    coverImageUrl?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    surfaceColor?: boolean
    menuWelcomeTitle?: boolean
    menuWelcomeMessage?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    subscriptionStatus?: boolean
    trialEndsAt?: boolean
    planActivatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "avatarImageUrl" | "coverImageUrl" | "ownerName" | "ownerEmail" | "heroTitle" | "heroSubtitle" | "primaryColor" | "secondaryColor" | "accentColor" | "surfaceColor" | "menuWelcomeTitle" | "menuWelcomeMessage" | "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId" | "subscriptionStatus" | "trialEndsAt" | "planActivatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Restaurant$adminsArgs<ExtArgs>
    galleryImages?: boolean | Restaurant$galleryImagesArgs<ExtArgs>
    menuCategories?: boolean | Restaurant$menuCategoriesArgs<ExtArgs>
    products?: boolean | Restaurant$productsArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      admins: Prisma.$RestaurantAdminPayload<ExtArgs>[]
      galleryImages: Prisma.$RestaurantGalleryImagePayload<ExtArgs>[]
      menuCategories: Prisma.$MenuCategoryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      avatarImageUrl: string
      coverImageUrl: string
      ownerName: string | null
      ownerEmail: string | null
      heroTitle: string | null
      heroSubtitle: string | null
      primaryColor: string
      secondaryColor: string
      accentColor: string
      surfaceColor: string
      menuWelcomeTitle: string | null
      menuWelcomeMessage: string | null
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      stripePriceId: string | null
      subscriptionStatus: $Enums.SubscriptionStatus
      trialEndsAt: Date | null
      planActivatedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Restaurant$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    galleryImages<T extends Restaurant$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    menuCategories<T extends Restaurant$menuCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$menuCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    products<T extends Restaurant$productsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Restaurant model
   */ 
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly slug: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly avatarImageUrl: FieldRef<"Restaurant", 'String'>
    readonly coverImageUrl: FieldRef<"Restaurant", 'String'>
    readonly ownerName: FieldRef<"Restaurant", 'String'>
    readonly ownerEmail: FieldRef<"Restaurant", 'String'>
    readonly heroTitle: FieldRef<"Restaurant", 'String'>
    readonly heroSubtitle: FieldRef<"Restaurant", 'String'>
    readonly primaryColor: FieldRef<"Restaurant", 'String'>
    readonly secondaryColor: FieldRef<"Restaurant", 'String'>
    readonly accentColor: FieldRef<"Restaurant", 'String'>
    readonly surfaceColor: FieldRef<"Restaurant", 'String'>
    readonly menuWelcomeTitle: FieldRef<"Restaurant", 'String'>
    readonly menuWelcomeMessage: FieldRef<"Restaurant", 'String'>
    readonly stripeCustomerId: FieldRef<"Restaurant", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Restaurant", 'String'>
    readonly stripePriceId: FieldRef<"Restaurant", 'String'>
    readonly subscriptionStatus: FieldRef<"Restaurant", 'SubscriptionStatus'>
    readonly trialEndsAt: FieldRef<"Restaurant", 'DateTime'>
    readonly planActivatedAt: FieldRef<"Restaurant", 'DateTime'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant.admins
   */
  export type Restaurant$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    where?: RestaurantAdminWhereInput
    orderBy?: RestaurantAdminOrderByWithRelationInput | RestaurantAdminOrderByWithRelationInput[]
    cursor?: RestaurantAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantAdminScalarFieldEnum | RestaurantAdminScalarFieldEnum[]
  }

  /**
   * Restaurant.galleryImages
   */
  export type Restaurant$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    where?: RestaurantGalleryImageWhereInput
    orderBy?: RestaurantGalleryImageOrderByWithRelationInput | RestaurantGalleryImageOrderByWithRelationInput[]
    cursor?: RestaurantGalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantGalleryImageScalarFieldEnum | RestaurantGalleryImageScalarFieldEnum[]
  }

  /**
   * Restaurant.menuCategories
   */
  export type Restaurant$menuCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    where?: MenuCategoryWhereInput
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    cursor?: MenuCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * Restaurant.products
   */
  export type Restaurant$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantAdmin
   */

  export type AggregateRestaurantAdmin = {
    _count: RestaurantAdminCountAggregateOutputType | null
    _min: RestaurantAdminMinAggregateOutputType | null
    _max: RestaurantAdminMaxAggregateOutputType | null
  }

  export type RestaurantAdminMinAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantAdminMaxAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantAdminCountAggregateOutputType = {
    id: number
    restaurantId: number
    email: number
    passwordHash: number
    displayName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantAdminMinAggregateInputType = {
    id?: true
    restaurantId?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantAdminMaxAggregateInputType = {
    id?: true
    restaurantId?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantAdminCountAggregateInputType = {
    id?: true
    restaurantId?: true
    email?: true
    passwordHash?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantAdmin to aggregate.
     */
    where?: RestaurantAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantAdmins to fetch.
     */
    orderBy?: RestaurantAdminOrderByWithRelationInput | RestaurantAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantAdmins
    **/
    _count?: true | RestaurantAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantAdminMaxAggregateInputType
  }

  export type GetRestaurantAdminAggregateType<T extends RestaurantAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantAdmin[P]>
      : GetScalarType<T[P], AggregateRestaurantAdmin[P]>
  }




  export type RestaurantAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantAdminWhereInput
    orderBy?: RestaurantAdminOrderByWithAggregationInput | RestaurantAdminOrderByWithAggregationInput[]
    by: RestaurantAdminScalarFieldEnum[] | RestaurantAdminScalarFieldEnum
    having?: RestaurantAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantAdminCountAggregateInputType | true
    _min?: RestaurantAdminMinAggregateInputType
    _max?: RestaurantAdminMaxAggregateInputType
  }

  export type RestaurantAdminGroupByOutputType = {
    id: string
    restaurantId: string
    email: string
    passwordHash: string
    displayName: string | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantAdminCountAggregateOutputType | null
    _min: RestaurantAdminMinAggregateOutputType | null
    _max: RestaurantAdminMaxAggregateOutputType | null
  }

  type GetRestaurantAdminGroupByPayload<T extends RestaurantAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantAdminGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantAdminGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantAdmin"]>

  export type RestaurantAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantAdmin"]>

  export type RestaurantAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantAdmin"]>

  export type RestaurantAdminSelectScalar = {
    id?: boolean
    restaurantId?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "restaurantId" | "email" | "passwordHash" | "displayName" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurantAdmin"]>
  export type RestaurantAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type RestaurantAdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type RestaurantAdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $RestaurantAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantAdmin"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restaurantId: string
      email: string
      passwordHash: string
      displayName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurantAdmin"]>
    composites: {}
  }

  type RestaurantAdminGetPayload<S extends boolean | null | undefined | RestaurantAdminDefaultArgs> = $Result.GetResult<Prisma.$RestaurantAdminPayload, S>

  type RestaurantAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantAdminCountAggregateInputType | true
    }

  export interface RestaurantAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantAdmin'], meta: { name: 'RestaurantAdmin' } }
    /**
     * Find zero or one RestaurantAdmin that matches the filter.
     * @param {RestaurantAdminFindUniqueArgs} args - Arguments to find a RestaurantAdmin
     * @example
     * // Get one RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantAdminFindUniqueArgs>(args: SelectSubset<T, RestaurantAdminFindUniqueArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RestaurantAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantAdminFindUniqueOrThrowArgs} args - Arguments to find a RestaurantAdmin
     * @example
     * // Get one RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RestaurantAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminFindFirstArgs} args - Arguments to find a RestaurantAdmin
     * @example
     * // Get one RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantAdminFindFirstArgs>(args?: SelectSubset<T, RestaurantAdminFindFirstArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RestaurantAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminFindFirstOrThrowArgs} args - Arguments to find a RestaurantAdmin
     * @example
     * // Get one RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RestaurantAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantAdmins
     * const restaurantAdmins = await prisma.restaurantAdmin.findMany()
     * 
     * // Get first 10 RestaurantAdmins
     * const restaurantAdmins = await prisma.restaurantAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantAdminWithIdOnly = await prisma.restaurantAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantAdminFindManyArgs>(args?: SelectSubset<T, RestaurantAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RestaurantAdmin.
     * @param {RestaurantAdminCreateArgs} args - Arguments to create a RestaurantAdmin.
     * @example
     * // Create one RestaurantAdmin
     * const RestaurantAdmin = await prisma.restaurantAdmin.create({
     *   data: {
     *     // ... data to create a RestaurantAdmin
     *   }
     * })
     * 
     */
    create<T extends RestaurantAdminCreateArgs>(args: SelectSubset<T, RestaurantAdminCreateArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RestaurantAdmins.
     * @param {RestaurantAdminCreateManyArgs} args - Arguments to create many RestaurantAdmins.
     * @example
     * // Create many RestaurantAdmins
     * const restaurantAdmin = await prisma.restaurantAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantAdminCreateManyArgs>(args?: SelectSubset<T, RestaurantAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestaurantAdmins and returns the data saved in the database.
     * @param {RestaurantAdminCreateManyAndReturnArgs} args - Arguments to create many RestaurantAdmins.
     * @example
     * // Create many RestaurantAdmins
     * const restaurantAdmin = await prisma.restaurantAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestaurantAdmins and only return the `id`
     * const restaurantAdminWithIdOnly = await prisma.restaurantAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RestaurantAdmin.
     * @param {RestaurantAdminDeleteArgs} args - Arguments to delete one RestaurantAdmin.
     * @example
     * // Delete one RestaurantAdmin
     * const RestaurantAdmin = await prisma.restaurantAdmin.delete({
     *   where: {
     *     // ... filter to delete one RestaurantAdmin
     *   }
     * })
     * 
     */
    delete<T extends RestaurantAdminDeleteArgs>(args: SelectSubset<T, RestaurantAdminDeleteArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RestaurantAdmin.
     * @param {RestaurantAdminUpdateArgs} args - Arguments to update one RestaurantAdmin.
     * @example
     * // Update one RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantAdminUpdateArgs>(args: SelectSubset<T, RestaurantAdminUpdateArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RestaurantAdmins.
     * @param {RestaurantAdminDeleteManyArgs} args - Arguments to filter RestaurantAdmins to delete.
     * @example
     * // Delete a few RestaurantAdmins
     * const { count } = await prisma.restaurantAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantAdminDeleteManyArgs>(args?: SelectSubset<T, RestaurantAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantAdmins
     * const restaurantAdmin = await prisma.restaurantAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantAdminUpdateManyArgs>(args: SelectSubset<T, RestaurantAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantAdmins and returns the data updated in the database.
     * @param {RestaurantAdminUpdateManyAndReturnArgs} args - Arguments to update many RestaurantAdmins.
     * @example
     * // Update many RestaurantAdmins
     * const restaurantAdmin = await prisma.restaurantAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestaurantAdmins and only return the `id`
     * const restaurantAdminWithIdOnly = await prisma.restaurantAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestaurantAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RestaurantAdmin.
     * @param {RestaurantAdminUpsertArgs} args - Arguments to update or create a RestaurantAdmin.
     * @example
     * // Update or create a RestaurantAdmin
     * const restaurantAdmin = await prisma.restaurantAdmin.upsert({
     *   create: {
     *     // ... data to create a RestaurantAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantAdmin we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantAdminUpsertArgs>(args: SelectSubset<T, RestaurantAdminUpsertArgs<ExtArgs>>): Prisma__RestaurantAdminClient<$Result.GetResult<Prisma.$RestaurantAdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RestaurantAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminCountArgs} args - Arguments to filter RestaurantAdmins to count.
     * @example
     * // Count the number of RestaurantAdmins
     * const count = await prisma.restaurantAdmin.count({
     *   where: {
     *     // ... the filter for the RestaurantAdmins we want to count
     *   }
     * })
    **/
    count<T extends RestaurantAdminCountArgs>(
      args?: Subset<T, RestaurantAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAdminAggregateArgs>(args: Subset<T, RestaurantAdminAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAdminAggregateType<T>>

    /**
     * Group by RestaurantAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAdminGroupByArgs} args - Group by arguments.
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
      T extends RestaurantAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantAdminGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantAdmin model
   */
  readonly fields: RestaurantAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RestaurantAdmin model
   */ 
  interface RestaurantAdminFieldRefs {
    readonly id: FieldRef<"RestaurantAdmin", 'String'>
    readonly restaurantId: FieldRef<"RestaurantAdmin", 'String'>
    readonly email: FieldRef<"RestaurantAdmin", 'String'>
    readonly passwordHash: FieldRef<"RestaurantAdmin", 'String'>
    readonly displayName: FieldRef<"RestaurantAdmin", 'String'>
    readonly createdAt: FieldRef<"RestaurantAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"RestaurantAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantAdmin findUnique
   */
  export type RestaurantAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantAdmin to fetch.
     */
    where: RestaurantAdminWhereUniqueInput
  }

  /**
   * RestaurantAdmin findUniqueOrThrow
   */
  export type RestaurantAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantAdmin to fetch.
     */
    where: RestaurantAdminWhereUniqueInput
  }

  /**
   * RestaurantAdmin findFirst
   */
  export type RestaurantAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantAdmin to fetch.
     */
    where?: RestaurantAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantAdmins to fetch.
     */
    orderBy?: RestaurantAdminOrderByWithRelationInput | RestaurantAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantAdmins.
     */
    cursor?: RestaurantAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantAdmins.
     */
    distinct?: RestaurantAdminScalarFieldEnum | RestaurantAdminScalarFieldEnum[]
  }

  /**
   * RestaurantAdmin findFirstOrThrow
   */
  export type RestaurantAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantAdmin to fetch.
     */
    where?: RestaurantAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantAdmins to fetch.
     */
    orderBy?: RestaurantAdminOrderByWithRelationInput | RestaurantAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantAdmins.
     */
    cursor?: RestaurantAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantAdmins.
     */
    distinct?: RestaurantAdminScalarFieldEnum | RestaurantAdminScalarFieldEnum[]
  }

  /**
   * RestaurantAdmin findMany
   */
  export type RestaurantAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantAdmins to fetch.
     */
    where?: RestaurantAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantAdmins to fetch.
     */
    orderBy?: RestaurantAdminOrderByWithRelationInput | RestaurantAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantAdmins.
     */
    cursor?: RestaurantAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantAdmins.
     */
    skip?: number
    distinct?: RestaurantAdminScalarFieldEnum | RestaurantAdminScalarFieldEnum[]
  }

  /**
   * RestaurantAdmin create
   */
  export type RestaurantAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantAdmin.
     */
    data: XOR<RestaurantAdminCreateInput, RestaurantAdminUncheckedCreateInput>
  }

  /**
   * RestaurantAdmin createMany
   */
  export type RestaurantAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantAdmins.
     */
    data: RestaurantAdminCreateManyInput | RestaurantAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantAdmin createManyAndReturn
   */
  export type RestaurantAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * The data used to create many RestaurantAdmins.
     */
    data: RestaurantAdminCreateManyInput | RestaurantAdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantAdmin update
   */
  export type RestaurantAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantAdmin.
     */
    data: XOR<RestaurantAdminUpdateInput, RestaurantAdminUncheckedUpdateInput>
    /**
     * Choose, which RestaurantAdmin to update.
     */
    where: RestaurantAdminWhereUniqueInput
  }

  /**
   * RestaurantAdmin updateMany
   */
  export type RestaurantAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantAdmins.
     */
    data: XOR<RestaurantAdminUpdateManyMutationInput, RestaurantAdminUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantAdmins to update
     */
    where?: RestaurantAdminWhereInput
  }

  /**
   * RestaurantAdmin updateManyAndReturn
   */
  export type RestaurantAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * The data used to update RestaurantAdmins.
     */
    data: XOR<RestaurantAdminUpdateManyMutationInput, RestaurantAdminUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantAdmins to update
     */
    where?: RestaurantAdminWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantAdmin upsert
   */
  export type RestaurantAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantAdmin to update in case it exists.
     */
    where: RestaurantAdminWhereUniqueInput
    /**
     * In case the RestaurantAdmin found by the `where` argument doesn't exist, create a new RestaurantAdmin with this data.
     */
    create: XOR<RestaurantAdminCreateInput, RestaurantAdminUncheckedCreateInput>
    /**
     * In case the RestaurantAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantAdminUpdateInput, RestaurantAdminUncheckedUpdateInput>
  }

  /**
   * RestaurantAdmin delete
   */
  export type RestaurantAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
    /**
     * Filter which RestaurantAdmin to delete.
     */
    where: RestaurantAdminWhereUniqueInput
  }

  /**
   * RestaurantAdmin deleteMany
   */
  export type RestaurantAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantAdmins to delete
     */
    where?: RestaurantAdminWhereInput
  }

  /**
   * RestaurantAdmin without action
   */
  export type RestaurantAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantAdmin
     */
    select?: RestaurantAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantAdmin
     */
    omit?: RestaurantAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantAdminInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantGalleryImage
   */

  export type AggregateRestaurantGalleryImage = {
    _count: RestaurantGalleryImageCountAggregateOutputType | null
    _avg: RestaurantGalleryImageAvgAggregateOutputType | null
    _sum: RestaurantGalleryImageSumAggregateOutputType | null
    _min: RestaurantGalleryImageMinAggregateOutputType | null
    _max: RestaurantGalleryImageMaxAggregateOutputType | null
  }

  export type RestaurantGalleryImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type RestaurantGalleryImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type RestaurantGalleryImageMinAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    imageUrl: string | null
    title: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantGalleryImageMaxAggregateOutputType = {
    id: string | null
    restaurantId: string | null
    imageUrl: string | null
    title: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantGalleryImageCountAggregateOutputType = {
    id: number
    restaurantId: number
    imageUrl: number
    title: number
    description: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantGalleryImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type RestaurantGalleryImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type RestaurantGalleryImageMinAggregateInputType = {
    id?: true
    restaurantId?: true
    imageUrl?: true
    title?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantGalleryImageMaxAggregateInputType = {
    id?: true
    restaurantId?: true
    imageUrl?: true
    title?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantGalleryImageCountAggregateInputType = {
    id?: true
    restaurantId?: true
    imageUrl?: true
    title?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantGalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantGalleryImage to aggregate.
     */
    where?: RestaurantGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantGalleryImages to fetch.
     */
    orderBy?: RestaurantGalleryImageOrderByWithRelationInput | RestaurantGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantGalleryImages
    **/
    _count?: true | RestaurantGalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantGalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantGalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantGalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantGalleryImageMaxAggregateInputType
  }

  export type GetRestaurantGalleryImageAggregateType<T extends RestaurantGalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantGalleryImage[P]>
      : GetScalarType<T[P], AggregateRestaurantGalleryImage[P]>
  }




  export type RestaurantGalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantGalleryImageWhereInput
    orderBy?: RestaurantGalleryImageOrderByWithAggregationInput | RestaurantGalleryImageOrderByWithAggregationInput[]
    by: RestaurantGalleryImageScalarFieldEnum[] | RestaurantGalleryImageScalarFieldEnum
    having?: RestaurantGalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantGalleryImageCountAggregateInputType | true
    _avg?: RestaurantGalleryImageAvgAggregateInputType
    _sum?: RestaurantGalleryImageSumAggregateInputType
    _min?: RestaurantGalleryImageMinAggregateInputType
    _max?: RestaurantGalleryImageMaxAggregateInputType
  }

  export type RestaurantGalleryImageGroupByOutputType = {
    id: string
    restaurantId: string
    imageUrl: string
    title: string | null
    description: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: RestaurantGalleryImageCountAggregateOutputType | null
    _avg: RestaurantGalleryImageAvgAggregateOutputType | null
    _sum: RestaurantGalleryImageSumAggregateOutputType | null
    _min: RestaurantGalleryImageMinAggregateOutputType | null
    _max: RestaurantGalleryImageMaxAggregateOutputType | null
  }

  type GetRestaurantGalleryImageGroupByPayload<T extends RestaurantGalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantGalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantGalleryImage"]>

  export type RestaurantGalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantGalleryImage"]>

  export type RestaurantGalleryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurantId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantGalleryImage"]>

  export type RestaurantGalleryImageSelectScalar = {
    id?: boolean
    restaurantId?: boolean
    imageUrl?: boolean
    title?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantGalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "restaurantId" | "imageUrl" | "title" | "description" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurantGalleryImage"]>
  export type RestaurantGalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type RestaurantGalleryImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type RestaurantGalleryImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $RestaurantGalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantGalleryImage"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restaurantId: string
      imageUrl: string
      title: string | null
      description: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurantGalleryImage"]>
    composites: {}
  }

  type RestaurantGalleryImageGetPayload<S extends boolean | null | undefined | RestaurantGalleryImageDefaultArgs> = $Result.GetResult<Prisma.$RestaurantGalleryImagePayload, S>

  type RestaurantGalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantGalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantGalleryImageCountAggregateInputType | true
    }

  export interface RestaurantGalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantGalleryImage'], meta: { name: 'RestaurantGalleryImage' } }
    /**
     * Find zero or one RestaurantGalleryImage that matches the filter.
     * @param {RestaurantGalleryImageFindUniqueArgs} args - Arguments to find a RestaurantGalleryImage
     * @example
     * // Get one RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantGalleryImageFindUniqueArgs>(args: SelectSubset<T, RestaurantGalleryImageFindUniqueArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RestaurantGalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantGalleryImageFindUniqueOrThrowArgs} args - Arguments to find a RestaurantGalleryImage
     * @example
     * // Get one RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantGalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantGalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RestaurantGalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageFindFirstArgs} args - Arguments to find a RestaurantGalleryImage
     * @example
     * // Get one RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantGalleryImageFindFirstArgs>(args?: SelectSubset<T, RestaurantGalleryImageFindFirstArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RestaurantGalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageFindFirstOrThrowArgs} args - Arguments to find a RestaurantGalleryImage
     * @example
     * // Get one RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantGalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantGalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RestaurantGalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantGalleryImages
     * const restaurantGalleryImages = await prisma.restaurantGalleryImage.findMany()
     * 
     * // Get first 10 RestaurantGalleryImages
     * const restaurantGalleryImages = await prisma.restaurantGalleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantGalleryImageWithIdOnly = await prisma.restaurantGalleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantGalleryImageFindManyArgs>(args?: SelectSubset<T, RestaurantGalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RestaurantGalleryImage.
     * @param {RestaurantGalleryImageCreateArgs} args - Arguments to create a RestaurantGalleryImage.
     * @example
     * // Create one RestaurantGalleryImage
     * const RestaurantGalleryImage = await prisma.restaurantGalleryImage.create({
     *   data: {
     *     // ... data to create a RestaurantGalleryImage
     *   }
     * })
     * 
     */
    create<T extends RestaurantGalleryImageCreateArgs>(args: SelectSubset<T, RestaurantGalleryImageCreateArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RestaurantGalleryImages.
     * @param {RestaurantGalleryImageCreateManyArgs} args - Arguments to create many RestaurantGalleryImages.
     * @example
     * // Create many RestaurantGalleryImages
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantGalleryImageCreateManyArgs>(args?: SelectSubset<T, RestaurantGalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestaurantGalleryImages and returns the data saved in the database.
     * @param {RestaurantGalleryImageCreateManyAndReturnArgs} args - Arguments to create many RestaurantGalleryImages.
     * @example
     * // Create many RestaurantGalleryImages
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestaurantGalleryImages and only return the `id`
     * const restaurantGalleryImageWithIdOnly = await prisma.restaurantGalleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantGalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantGalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RestaurantGalleryImage.
     * @param {RestaurantGalleryImageDeleteArgs} args - Arguments to delete one RestaurantGalleryImage.
     * @example
     * // Delete one RestaurantGalleryImage
     * const RestaurantGalleryImage = await prisma.restaurantGalleryImage.delete({
     *   where: {
     *     // ... filter to delete one RestaurantGalleryImage
     *   }
     * })
     * 
     */
    delete<T extends RestaurantGalleryImageDeleteArgs>(args: SelectSubset<T, RestaurantGalleryImageDeleteArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RestaurantGalleryImage.
     * @param {RestaurantGalleryImageUpdateArgs} args - Arguments to update one RestaurantGalleryImage.
     * @example
     * // Update one RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantGalleryImageUpdateArgs>(args: SelectSubset<T, RestaurantGalleryImageUpdateArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RestaurantGalleryImages.
     * @param {RestaurantGalleryImageDeleteManyArgs} args - Arguments to filter RestaurantGalleryImages to delete.
     * @example
     * // Delete a few RestaurantGalleryImages
     * const { count } = await prisma.restaurantGalleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantGalleryImageDeleteManyArgs>(args?: SelectSubset<T, RestaurantGalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantGalleryImages
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantGalleryImageUpdateManyArgs>(args: SelectSubset<T, RestaurantGalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantGalleryImages and returns the data updated in the database.
     * @param {RestaurantGalleryImageUpdateManyAndReturnArgs} args - Arguments to update many RestaurantGalleryImages.
     * @example
     * // Update many RestaurantGalleryImages
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestaurantGalleryImages and only return the `id`
     * const restaurantGalleryImageWithIdOnly = await prisma.restaurantGalleryImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestaurantGalleryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantGalleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RestaurantGalleryImage.
     * @param {RestaurantGalleryImageUpsertArgs} args - Arguments to update or create a RestaurantGalleryImage.
     * @example
     * // Update or create a RestaurantGalleryImage
     * const restaurantGalleryImage = await prisma.restaurantGalleryImage.upsert({
     *   create: {
     *     // ... data to create a RestaurantGalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantGalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantGalleryImageUpsertArgs>(args: SelectSubset<T, RestaurantGalleryImageUpsertArgs<ExtArgs>>): Prisma__RestaurantGalleryImageClient<$Result.GetResult<Prisma.$RestaurantGalleryImagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RestaurantGalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageCountArgs} args - Arguments to filter RestaurantGalleryImages to count.
     * @example
     * // Count the number of RestaurantGalleryImages
     * const count = await prisma.restaurantGalleryImage.count({
     *   where: {
     *     // ... the filter for the RestaurantGalleryImages we want to count
     *   }
     * })
    **/
    count<T extends RestaurantGalleryImageCountArgs>(
      args?: Subset<T, RestaurantGalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantGalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantGalleryImageAggregateArgs>(args: Subset<T, RestaurantGalleryImageAggregateArgs>): Prisma.PrismaPromise<GetRestaurantGalleryImageAggregateType<T>>

    /**
     * Group by RestaurantGalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGalleryImageGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGalleryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantGalleryImage model
   */
  readonly fields: RestaurantGalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantGalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantGalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the RestaurantGalleryImage model
   */ 
  interface RestaurantGalleryImageFieldRefs {
    readonly id: FieldRef<"RestaurantGalleryImage", 'String'>
    readonly restaurantId: FieldRef<"RestaurantGalleryImage", 'String'>
    readonly imageUrl: FieldRef<"RestaurantGalleryImage", 'String'>
    readonly title: FieldRef<"RestaurantGalleryImage", 'String'>
    readonly description: FieldRef<"RestaurantGalleryImage", 'String'>
    readonly sortOrder: FieldRef<"RestaurantGalleryImage", 'Int'>
    readonly createdAt: FieldRef<"RestaurantGalleryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"RestaurantGalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantGalleryImage findUnique
   */
  export type RestaurantGalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantGalleryImage to fetch.
     */
    where: RestaurantGalleryImageWhereUniqueInput
  }

  /**
   * RestaurantGalleryImage findUniqueOrThrow
   */
  export type RestaurantGalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantGalleryImage to fetch.
     */
    where: RestaurantGalleryImageWhereUniqueInput
  }

  /**
   * RestaurantGalleryImage findFirst
   */
  export type RestaurantGalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantGalleryImage to fetch.
     */
    where?: RestaurantGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantGalleryImages to fetch.
     */
    orderBy?: RestaurantGalleryImageOrderByWithRelationInput | RestaurantGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantGalleryImages.
     */
    cursor?: RestaurantGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantGalleryImages.
     */
    distinct?: RestaurantGalleryImageScalarFieldEnum | RestaurantGalleryImageScalarFieldEnum[]
  }

  /**
   * RestaurantGalleryImage findFirstOrThrow
   */
  export type RestaurantGalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantGalleryImage to fetch.
     */
    where?: RestaurantGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantGalleryImages to fetch.
     */
    orderBy?: RestaurantGalleryImageOrderByWithRelationInput | RestaurantGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantGalleryImages.
     */
    cursor?: RestaurantGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantGalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantGalleryImages.
     */
    distinct?: RestaurantGalleryImageScalarFieldEnum | RestaurantGalleryImageScalarFieldEnum[]
  }

  /**
   * RestaurantGalleryImage findMany
   */
  export type RestaurantGalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantGalleryImages to fetch.
     */
    where?: RestaurantGalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantGalleryImages to fetch.
     */
    orderBy?: RestaurantGalleryImageOrderByWithRelationInput | RestaurantGalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantGalleryImages.
     */
    cursor?: RestaurantGalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantGalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantGalleryImages.
     */
    skip?: number
    distinct?: RestaurantGalleryImageScalarFieldEnum | RestaurantGalleryImageScalarFieldEnum[]
  }

  /**
   * RestaurantGalleryImage create
   */
  export type RestaurantGalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantGalleryImage.
     */
    data: XOR<RestaurantGalleryImageCreateInput, RestaurantGalleryImageUncheckedCreateInput>
  }

  /**
   * RestaurantGalleryImage createMany
   */
  export type RestaurantGalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantGalleryImages.
     */
    data: RestaurantGalleryImageCreateManyInput | RestaurantGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantGalleryImage createManyAndReturn
   */
  export type RestaurantGalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * The data used to create many RestaurantGalleryImages.
     */
    data: RestaurantGalleryImageCreateManyInput | RestaurantGalleryImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantGalleryImage update
   */
  export type RestaurantGalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantGalleryImage.
     */
    data: XOR<RestaurantGalleryImageUpdateInput, RestaurantGalleryImageUncheckedUpdateInput>
    /**
     * Choose, which RestaurantGalleryImage to update.
     */
    where: RestaurantGalleryImageWhereUniqueInput
  }

  /**
   * RestaurantGalleryImage updateMany
   */
  export type RestaurantGalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantGalleryImages.
     */
    data: XOR<RestaurantGalleryImageUpdateManyMutationInput, RestaurantGalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantGalleryImages to update
     */
    where?: RestaurantGalleryImageWhereInput
  }

  /**
   * RestaurantGalleryImage updateManyAndReturn
   */
  export type RestaurantGalleryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * The data used to update RestaurantGalleryImages.
     */
    data: XOR<RestaurantGalleryImageUpdateManyMutationInput, RestaurantGalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantGalleryImages to update
     */
    where?: RestaurantGalleryImageWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantGalleryImage upsert
   */
  export type RestaurantGalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantGalleryImage to update in case it exists.
     */
    where: RestaurantGalleryImageWhereUniqueInput
    /**
     * In case the RestaurantGalleryImage found by the `where` argument doesn't exist, create a new RestaurantGalleryImage with this data.
     */
    create: XOR<RestaurantGalleryImageCreateInput, RestaurantGalleryImageUncheckedCreateInput>
    /**
     * In case the RestaurantGalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantGalleryImageUpdateInput, RestaurantGalleryImageUncheckedUpdateInput>
  }

  /**
   * RestaurantGalleryImage delete
   */
  export type RestaurantGalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
    /**
     * Filter which RestaurantGalleryImage to delete.
     */
    where: RestaurantGalleryImageWhereUniqueInput
  }

  /**
   * RestaurantGalleryImage deleteMany
   */
  export type RestaurantGalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantGalleryImages to delete
     */
    where?: RestaurantGalleryImageWhereInput
  }

  /**
   * RestaurantGalleryImage without action
   */
  export type RestaurantGalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantGalleryImage
     */
    select?: RestaurantGalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantGalleryImage
     */
    omit?: RestaurantGalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantGalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model MenuCategory
   */

  export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  export type MenuCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryCountAggregateOutputType = {
    id: number
    name: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuCategoryMinAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryCountAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategory to aggregate.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuCategories
    **/
    _count?: true | MenuCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type GetMenuCategoryAggregateType<T extends MenuCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuCategory[P]>
      : GetScalarType<T[P], AggregateMenuCategory[P]>
  }




  export type MenuCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuCategoryWhereInput
    orderBy?: MenuCategoryOrderByWithAggregationInput | MenuCategoryOrderByWithAggregationInput[]
    by: MenuCategoryScalarFieldEnum[] | MenuCategoryScalarFieldEnum
    having?: MenuCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCategoryCountAggregateInputType | true
    _min?: MenuCategoryMinAggregateInputType
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type MenuCategoryGroupByOutputType = {
    id: string
    name: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: MenuCategoryCountAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MenuCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    products?: boolean | MenuCategory$productsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectScalar = {
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["menuCategory"]>
  export type MenuCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    products?: boolean | MenuCategory$productsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type MenuCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $MenuCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuCategory"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuCategory"]>
    composites: {}
  }

  type MenuCategoryGetPayload<S extends boolean | null | undefined | MenuCategoryDefaultArgs> = $Result.GetResult<Prisma.$MenuCategoryPayload, S>

  type MenuCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCategoryCountAggregateInputType | true
    }

  export interface MenuCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuCategory'], meta: { name: 'MenuCategory' } }
    /**
     * Find zero or one MenuCategory that matches the filter.
     * @param {MenuCategoryFindUniqueArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuCategoryFindUniqueArgs>(args: SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MenuCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuCategoryFindFirstArgs>(args?: SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany()
     * 
     * // Get first 10 MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuCategoryFindManyArgs>(args?: SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MenuCategory.
     * @param {MenuCategoryCreateArgs} args - Arguments to create a MenuCategory.
     * @example
     * // Create one MenuCategory
     * const MenuCategory = await prisma.menuCategory.create({
     *   data: {
     *     // ... data to create a MenuCategory
     *   }
     * })
     * 
     */
    create<T extends MenuCategoryCreateArgs>(args: SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MenuCategories.
     * @param {MenuCategoryCreateManyArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCategoryCreateManyArgs>(args?: SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuCategories and returns the data saved in the database.
     * @param {MenuCategoryCreateManyAndReturnArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuCategories and only return the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MenuCategory.
     * @param {MenuCategoryDeleteArgs} args - Arguments to delete one MenuCategory.
     * @example
     * // Delete one MenuCategory
     * const MenuCategory = await prisma.menuCategory.delete({
     *   where: {
     *     // ... filter to delete one MenuCategory
     *   }
     * })
     * 
     */
    delete<T extends MenuCategoryDeleteArgs>(args: SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MenuCategory.
     * @param {MenuCategoryUpdateArgs} args - Arguments to update one MenuCategory.
     * @example
     * // Update one MenuCategory
     * const menuCategory = await prisma.menuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuCategoryUpdateArgs>(args: SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MenuCategories.
     * @param {MenuCategoryDeleteManyArgs} args - Arguments to filter MenuCategories to delete.
     * @example
     * // Delete a few MenuCategories
     * const { count } = await prisma.menuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuCategoryDeleteManyArgs>(args?: SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuCategoryUpdateManyArgs>(args: SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuCategories and returns the data updated in the database.
     * @param {MenuCategoryUpdateManyAndReturnArgs} args - Arguments to update many MenuCategories.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuCategories and only return the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends MenuCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MenuCategory.
     * @param {MenuCategoryUpsertArgs} args - Arguments to update or create a MenuCategory.
     * @example
     * // Update or create a MenuCategory
     * const menuCategory = await prisma.menuCategory.upsert({
     *   create: {
     *     // ... data to create a MenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends MenuCategoryUpsertArgs>(args: SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryCountArgs} args - Arguments to filter MenuCategories to count.
     * @example
     * // Count the number of MenuCategories
     * const count = await prisma.menuCategory.count({
     *   where: {
     *     // ... the filter for the MenuCategories we want to count
     *   }
     * })
    **/
    count<T extends MenuCategoryCountArgs>(
      args?: Subset<T, MenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuCategoryAggregateArgs>(args: Subset<T, MenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>

    /**
     * Group by MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryGroupByArgs} args - Group by arguments.
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
      T extends MenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MenuCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuCategory model
   */
  readonly fields: MenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    products<T extends MenuCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the MenuCategory model
   */ 
  interface MenuCategoryFieldRefs {
    readonly id: FieldRef<"MenuCategory", 'String'>
    readonly name: FieldRef<"MenuCategory", 'String'>
    readonly restaurantId: FieldRef<"MenuCategory", 'String'>
    readonly createdAt: FieldRef<"MenuCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuCategory findUnique
   */
  export type MenuCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findUniqueOrThrow
   */
  export type MenuCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findFirst
   */
  export type MenuCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findFirstOrThrow
   */
  export type MenuCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findMany
   */
  export type MenuCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategories to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory create
   */
  export type MenuCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuCategory.
     */
    data: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
  }

  /**
   * MenuCategory createMany
   */
  export type MenuCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory createManyAndReturn
   */
  export type MenuCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuCategory update
   */
  export type MenuCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuCategory.
     */
    data: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
    /**
     * Choose, which MenuCategory to update.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory updateMany
   */
  export type MenuCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory updateManyAndReturn
   */
  export type MenuCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuCategory upsert
   */
  export type MenuCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuCategory to update in case it exists.
     */
    where: MenuCategoryWhereUniqueInput
    /**
     * In case the MenuCategory found by the `where` argument doesn't exist, create a new MenuCategory with this data.
     */
    create: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
    /**
     * In case the MenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
  }

  /**
   * MenuCategory delete
   */
  export type MenuCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter which MenuCategory to delete.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory deleteMany
   */
  export type MenuCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategories to delete
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory.products
   */
  export type MenuCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * MenuCategory without action
   */
  export type MenuCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    videoUrl: string | null
    restaurantId: string | null
    menuCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    videoUrl: string | null
    restaurantId: string | null
    menuCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    videoUrl: number
    ingredients: number
    restaurantId: number
    menuCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    videoUrl?: true
    restaurantId?: true
    menuCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    videoUrl?: true
    restaurantId?: true
    menuCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    videoUrl?: true
    ingredients?: true
    restaurantId?: true
    menuCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl: string | null
    ingredients: string[]
    restaurantId: string
    menuCategoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    ingredients?: boolean
    restaurantId?: boolean
    menuCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderProducts?: boolean | Product$orderProductsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    ingredients?: boolean
    restaurantId?: boolean
    menuCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    ingredients?: boolean
    restaurantId?: boolean
    menuCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    ingredients?: boolean
    restaurantId?: boolean
    menuCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "videoUrl" | "ingredients" | "restaurantId" | "menuCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderProducts?: boolean | Product$orderProductsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orderProducts: Prisma.$OrderProductPayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      menuCategory: Prisma.$MenuCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      imageUrl: string
      videoUrl: string | null
      ingredients: string[]
      restaurantId: string
      menuCategoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderProducts<T extends Product$orderProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    menuCategory<T extends MenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategoryDefaultArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly videoUrl: FieldRef<"Product", 'String'>
    readonly ingredients: FieldRef<"Product", 'String[]'>
    readonly restaurantId: FieldRef<"Product", 'String'>
    readonly menuCategoryId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.orderProducts
   */
  export type Product$orderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    total: number | null
    status: $Enums.OrderStatus | null
    consumptionMethod: $Enums.ConsumptionMethod | null
    restaurantId: string | null
    customerName: string | null
    customerCpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    total: number | null
    status: $Enums.OrderStatus | null
    consumptionMethod: $Enums.ConsumptionMethod | null
    restaurantId: string | null
    customerName: string | null
    customerCpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    total: number
    status: number
    consumptionMethod: number
    restaurantId: number
    customerName: number
    customerCpf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    total?: true
    status?: true
    consumptionMethod?: true
    restaurantId?: true
    customerName?: true
    customerCpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    total?: true
    status?: true
    consumptionMethod?: true
    restaurantId?: true
    customerName?: true
    customerCpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    total?: true
    status?: true
    consumptionMethod?: true
    restaurantId?: true
    customerName?: true
    customerCpf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    restaurantId: string
    customerName: string
    customerCpf: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    consumptionMethod?: boolean
    restaurantId?: boolean
    customerName?: boolean
    customerCpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderProducts?: boolean | Order$orderProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    consumptionMethod?: boolean
    restaurantId?: boolean
    customerName?: boolean
    customerCpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    status?: boolean
    consumptionMethod?: boolean
    restaurantId?: boolean
    customerName?: boolean
    customerCpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    total?: boolean
    status?: boolean
    consumptionMethod?: boolean
    restaurantId?: boolean
    customerName?: boolean
    customerCpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "status" | "consumptionMethod" | "restaurantId" | "customerName" | "customerCpf" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderProducts?: boolean | Order$orderProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      orderProducts: Prisma.$OrderProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      status: $Enums.OrderStatus
      consumptionMethod: $Enums.ConsumptionMethod
      restaurantId: string
      customerName: string
      customerCpf: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    orderProducts<T extends Order$orderProductsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly consumptionMethod: FieldRef<"Order", 'ConsumptionMethod'>
    readonly restaurantId: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerCpf: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.orderProducts
   */
  export type Order$orderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderProduct
   */

  export type AggregateOrderProduct = {
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  export type OrderProductAvgAggregateOutputType = {
    orderId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderProductSumAggregateOutputType = {
    orderId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderProductMinAggregateOutputType = {
    id: string | null
    productId: string | null
    orderId: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderProductMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    orderId: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderProductCountAggregateOutputType = {
    id: number
    productId: number
    orderId: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderProductAvgAggregateInputType = {
    orderId?: true
    quantity?: true
    price?: true
  }

  export type OrderProductSumAggregateInputType = {
    orderId?: true
    quantity?: true
    price?: true
  }

  export type OrderProductMinAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderProductMaxAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderProductCountAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProduct to aggregate.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderProducts
    **/
    _count?: true | OrderProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderProductMaxAggregateInputType
  }

  export type GetOrderProductAggregateType<T extends OrderProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProduct[P]>
      : GetScalarType<T[P], AggregateOrderProduct[P]>
  }




  export type OrderProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithAggregationInput | OrderProductOrderByWithAggregationInput[]
    by: OrderProductScalarFieldEnum[] | OrderProductScalarFieldEnum
    having?: OrderProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderProductCountAggregateInputType | true
    _avg?: OrderProductAvgAggregateInputType
    _sum?: OrderProductSumAggregateInputType
    _min?: OrderProductMinAggregateInputType
    _max?: OrderProductMaxAggregateInputType
  }

  export type OrderProductGroupByOutputType = {
    id: string
    productId: string
    orderId: number
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  type GetOrderProductGroupByPayload<T extends OrderProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectScalar = {
    id?: boolean
    productId?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "orderId" | "quantity" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["orderProduct"]>
  export type OrderProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      orderId: number
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderProduct"]>
    composites: {}
  }

  type OrderProductGetPayload<S extends boolean | null | undefined | OrderProductDefaultArgs> = $Result.GetResult<Prisma.$OrderProductPayload, S>

  type OrderProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderProductCountAggregateInputType | true
    }

  export interface OrderProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderProduct'], meta: { name: 'OrderProduct' } }
    /**
     * Find zero or one OrderProduct that matches the filter.
     * @param {OrderProductFindUniqueArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductFindUniqueArgs>(args: SelectSubset<T, OrderProductFindUniqueArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductFindUniqueOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductFindFirstArgs>(args?: SelectSubset<T, OrderProductFindFirstArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany()
     * 
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderProductFindManyArgs>(args?: SelectSubset<T, OrderProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderProduct.
     * @param {OrderProductCreateArgs} args - Arguments to create a OrderProduct.
     * @example
     * // Create one OrderProduct
     * const OrderProduct = await prisma.orderProduct.create({
     *   data: {
     *     // ... data to create a OrderProduct
     *   }
     * })
     * 
     */
    create<T extends OrderProductCreateArgs>(args: SelectSubset<T, OrderProductCreateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderProducts.
     * @param {OrderProductCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderProductCreateManyArgs>(args?: SelectSubset<T, OrderProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderProducts and returns the data saved in the database.
     * @param {OrderProductCreateManyAndReturnArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderProductCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a OrderProduct.
     * @param {OrderProductDeleteArgs} args - Arguments to delete one OrderProduct.
     * @example
     * // Delete one OrderProduct
     * const OrderProduct = await prisma.orderProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderProduct
     *   }
     * })
     * 
     */
    delete<T extends OrderProductDeleteArgs>(args: SelectSubset<T, OrderProductDeleteArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderProduct.
     * @param {OrderProductUpdateArgs} args - Arguments to update one OrderProduct.
     * @example
     * // Update one OrderProduct
     * const orderProduct = await prisma.orderProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderProductUpdateArgs>(args: SelectSubset<T, OrderProductUpdateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderProductDeleteManyArgs>(args?: SelectSubset<T, OrderProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderProductUpdateManyArgs>(args: SelectSubset<T, OrderProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts and returns the data updated in the database.
     * @param {OrderProductUpdateManyAndReturnArgs} args - Arguments to update many OrderProducts.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderProductUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one OrderProduct.
     * @param {OrderProductUpsertArgs} args - Arguments to update or create a OrderProduct.
     * @example
     * // Update or create a OrderProduct
     * const orderProduct = await prisma.orderProduct.upsert({
     *   create: {
     *     // ... data to create a OrderProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductUpsertArgs>(args: SelectSubset<T, OrderProductUpsertArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProduct.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderProductCountArgs>(
      args?: Subset<T, OrderProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderProductAggregateArgs>(args: Subset<T, OrderProductAggregateArgs>): Prisma.PrismaPromise<GetOrderProductAggregateType<T>>

    /**
     * Group by OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductGroupByArgs} args - Group by arguments.
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
      T extends OrderProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderProduct model
   */
  readonly fields: OrderProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the OrderProduct model
   */ 
  interface OrderProductFieldRefs {
    readonly id: FieldRef<"OrderProduct", 'String'>
    readonly productId: FieldRef<"OrderProduct", 'String'>
    readonly orderId: FieldRef<"OrderProduct", 'Int'>
    readonly quantity: FieldRef<"OrderProduct", 'Int'>
    readonly price: FieldRef<"OrderProduct", 'Float'>
    readonly createdAt: FieldRef<"OrderProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderProduct findUnique
   */
  export type OrderProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findUniqueOrThrow
   */
  export type OrderProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findFirst
   */
  export type OrderProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findFirstOrThrow
   */
  export type OrderProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findMany
   */
  export type OrderProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct create
   */
  export type OrderProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderProduct.
     */
    data: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
  }

  /**
   * OrderProduct createMany
   */
  export type OrderProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderProduct createManyAndReturn
   */
  export type OrderProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct update
   */
  export type OrderProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderProduct.
     */
    data: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
    /**
     * Choose, which OrderProduct to update.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct updateMany
   */
  export type OrderProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
  }

  /**
   * OrderProduct updateManyAndReturn
   */
  export type OrderProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct upsert
   */
  export type OrderProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderProduct to update in case it exists.
     */
    where: OrderProductWhereUniqueInput
    /**
     * In case the OrderProduct found by the `where` argument doesn't exist, create a new OrderProduct with this data.
     */
    create: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
    /**
     * In case the OrderProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
  }

  /**
   * OrderProduct delete
   */
  export type OrderProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter which OrderProduct to delete.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct deleteMany
   */
  export type OrderProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductWhereInput
  }

  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
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


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    avatarImageUrl: 'avatarImageUrl',
    coverImageUrl: 'coverImageUrl',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    surfaceColor: 'surfaceColor',
    menuWelcomeTitle: 'menuWelcomeTitle',
    menuWelcomeMessage: 'menuWelcomeMessage',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    stripePriceId: 'stripePriceId',
    subscriptionStatus: 'subscriptionStatus',
    trialEndsAt: 'trialEndsAt',
    planActivatedAt: 'planActivatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const RestaurantAdminScalarFieldEnum: {
    id: 'id',
    restaurantId: 'restaurantId',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantAdminScalarFieldEnum = (typeof RestaurantAdminScalarFieldEnum)[keyof typeof RestaurantAdminScalarFieldEnum]


  export const RestaurantGalleryImageScalarFieldEnum: {
    id: 'id',
    restaurantId: 'restaurantId',
    imageUrl: 'imageUrl',
    title: 'title',
    description: 'description',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantGalleryImageScalarFieldEnum = (typeof RestaurantGalleryImageScalarFieldEnum)[keyof typeof RestaurantGalleryImageScalarFieldEnum]


  export const MenuCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    ingredients: 'ingredients',
    restaurantId: 'restaurantId',
    menuCategoryId: 'menuCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    total: 'total',
    status: 'status',
    consumptionMethod: 'consumptionMethod',
    restaurantId: 'restaurantId',
    customerName: 'customerName',
    customerCpf: 'customerCpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderProductScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    orderId: 'orderId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderProductScalarFieldEnum = (typeof OrderProductScalarFieldEnum)[keyof typeof OrderProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'ConsumptionMethod'
   */
  export type EnumConsumptionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsumptionMethod'>
    


  /**
   * Reference to a field of type 'ConsumptionMethod[]'
   */
  export type ListEnumConsumptionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsumptionMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    slug?: StringFilter<"Restaurant"> | string
    description?: StringFilter<"Restaurant"> | string
    avatarImageUrl?: StringFilter<"Restaurant"> | string
    coverImageUrl?: StringFilter<"Restaurant"> | string
    ownerName?: StringNullableFilter<"Restaurant"> | string | null
    ownerEmail?: StringNullableFilter<"Restaurant"> | string | null
    heroTitle?: StringNullableFilter<"Restaurant"> | string | null
    heroSubtitle?: StringNullableFilter<"Restaurant"> | string | null
    primaryColor?: StringFilter<"Restaurant"> | string
    secondaryColor?: StringFilter<"Restaurant"> | string
    accentColor?: StringFilter<"Restaurant"> | string
    surfaceColor?: StringFilter<"Restaurant"> | string
    menuWelcomeTitle?: StringNullableFilter<"Restaurant"> | string | null
    menuWelcomeMessage?: StringNullableFilter<"Restaurant"> | string | null
    stripeCustomerId?: StringNullableFilter<"Restaurant"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"Restaurant"> | string | null
    stripePriceId?: StringNullableFilter<"Restaurant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Restaurant"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    planActivatedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    admins?: RestaurantAdminListRelationFilter
    galleryImages?: RestaurantGalleryImageListRelationFilter
    menuCategories?: MenuCategoryListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerEmail?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    surfaceColor?: SortOrder
    menuWelcomeTitle?: SortOrderInput | SortOrder
    menuWelcomeMessage?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    planActivatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admins?: RestaurantAdminOrderByRelationAggregateInput
    galleryImages?: RestaurantGalleryImageOrderByRelationAggregateInput
    menuCategories?: MenuCategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    description?: StringFilter<"Restaurant"> | string
    avatarImageUrl?: StringFilter<"Restaurant"> | string
    coverImageUrl?: StringFilter<"Restaurant"> | string
    ownerName?: StringNullableFilter<"Restaurant"> | string | null
    ownerEmail?: StringNullableFilter<"Restaurant"> | string | null
    heroTitle?: StringNullableFilter<"Restaurant"> | string | null
    heroSubtitle?: StringNullableFilter<"Restaurant"> | string | null
    primaryColor?: StringFilter<"Restaurant"> | string
    secondaryColor?: StringFilter<"Restaurant"> | string
    accentColor?: StringFilter<"Restaurant"> | string
    surfaceColor?: StringFilter<"Restaurant"> | string
    menuWelcomeTitle?: StringNullableFilter<"Restaurant"> | string | null
    menuWelcomeMessage?: StringNullableFilter<"Restaurant"> | string | null
    stripePriceId?: StringNullableFilter<"Restaurant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Restaurant"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    planActivatedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    admins?: RestaurantAdminListRelationFilter
    galleryImages?: RestaurantGalleryImageListRelationFilter
    menuCategories?: MenuCategoryListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "slug" | "stripeCustomerId" | "stripeSubscriptionId">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerEmail?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    surfaceColor?: SortOrder
    menuWelcomeTitle?: SortOrderInput | SortOrder
    menuWelcomeMessage?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    planActivatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    slug?: StringWithAggregatesFilter<"Restaurant"> | string
    description?: StringWithAggregatesFilter<"Restaurant"> | string
    avatarImageUrl?: StringWithAggregatesFilter<"Restaurant"> | string
    coverImageUrl?: StringWithAggregatesFilter<"Restaurant"> | string
    ownerName?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    ownerEmail?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    heroTitle?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    heroSubtitle?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    primaryColor?: StringWithAggregatesFilter<"Restaurant"> | string
    secondaryColor?: StringWithAggregatesFilter<"Restaurant"> | string
    accentColor?: StringWithAggregatesFilter<"Restaurant"> | string
    surfaceColor?: StringWithAggregatesFilter<"Restaurant"> | string
    menuWelcomeTitle?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    menuWelcomeMessage?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    stripePriceId?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"Restaurant"> | $Enums.SubscriptionStatus
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Restaurant"> | Date | string | null
    planActivatedAt?: DateTimeNullableWithAggregatesFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type RestaurantAdminWhereInput = {
    AND?: RestaurantAdminWhereInput | RestaurantAdminWhereInput[]
    OR?: RestaurantAdminWhereInput[]
    NOT?: RestaurantAdminWhereInput | RestaurantAdminWhereInput[]
    id?: StringFilter<"RestaurantAdmin"> | string
    restaurantId?: StringFilter<"RestaurantAdmin"> | string
    email?: StringFilter<"RestaurantAdmin"> | string
    passwordHash?: StringFilter<"RestaurantAdmin"> | string
    displayName?: StringNullableFilter<"RestaurantAdmin"> | string | null
    createdAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type RestaurantAdminOrderByWithRelationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type RestaurantAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    restaurantId_email?: RestaurantAdminRestaurantIdEmailCompoundUniqueInput
    AND?: RestaurantAdminWhereInput | RestaurantAdminWhereInput[]
    OR?: RestaurantAdminWhereInput[]
    NOT?: RestaurantAdminWhereInput | RestaurantAdminWhereInput[]
    restaurantId?: StringFilter<"RestaurantAdmin"> | string
    email?: StringFilter<"RestaurantAdmin"> | string
    passwordHash?: StringFilter<"RestaurantAdmin"> | string
    displayName?: StringNullableFilter<"RestaurantAdmin"> | string | null
    createdAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id" | "restaurantId_email">

  export type RestaurantAdminOrderByWithAggregationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantAdminCountOrderByAggregateInput
    _max?: RestaurantAdminMaxOrderByAggregateInput
    _min?: RestaurantAdminMinOrderByAggregateInput
  }

  export type RestaurantAdminScalarWhereWithAggregatesInput = {
    AND?: RestaurantAdminScalarWhereWithAggregatesInput | RestaurantAdminScalarWhereWithAggregatesInput[]
    OR?: RestaurantAdminScalarWhereWithAggregatesInput[]
    NOT?: RestaurantAdminScalarWhereWithAggregatesInput | RestaurantAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RestaurantAdmin"> | string
    restaurantId?: StringWithAggregatesFilter<"RestaurantAdmin"> | string
    email?: StringWithAggregatesFilter<"RestaurantAdmin"> | string
    passwordHash?: StringWithAggregatesFilter<"RestaurantAdmin"> | string
    displayName?: StringNullableWithAggregatesFilter<"RestaurantAdmin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RestaurantAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RestaurantAdmin"> | Date | string
  }

  export type RestaurantGalleryImageWhereInput = {
    AND?: RestaurantGalleryImageWhereInput | RestaurantGalleryImageWhereInput[]
    OR?: RestaurantGalleryImageWhereInput[]
    NOT?: RestaurantGalleryImageWhereInput | RestaurantGalleryImageWhereInput[]
    id?: StringFilter<"RestaurantGalleryImage"> | string
    restaurantId?: StringFilter<"RestaurantGalleryImage"> | string
    imageUrl?: StringFilter<"RestaurantGalleryImage"> | string
    title?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    description?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    sortOrder?: IntFilter<"RestaurantGalleryImage"> | number
    createdAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type RestaurantGalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type RestaurantGalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestaurantGalleryImageWhereInput | RestaurantGalleryImageWhereInput[]
    OR?: RestaurantGalleryImageWhereInput[]
    NOT?: RestaurantGalleryImageWhereInput | RestaurantGalleryImageWhereInput[]
    restaurantId?: StringFilter<"RestaurantGalleryImage"> | string
    imageUrl?: StringFilter<"RestaurantGalleryImage"> | string
    title?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    description?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    sortOrder?: IntFilter<"RestaurantGalleryImage"> | number
    createdAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id">

  export type RestaurantGalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantGalleryImageCountOrderByAggregateInput
    _avg?: RestaurantGalleryImageAvgOrderByAggregateInput
    _max?: RestaurantGalleryImageMaxOrderByAggregateInput
    _min?: RestaurantGalleryImageMinOrderByAggregateInput
    _sum?: RestaurantGalleryImageSumOrderByAggregateInput
  }

  export type RestaurantGalleryImageScalarWhereWithAggregatesInput = {
    AND?: RestaurantGalleryImageScalarWhereWithAggregatesInput | RestaurantGalleryImageScalarWhereWithAggregatesInput[]
    OR?: RestaurantGalleryImageScalarWhereWithAggregatesInput[]
    NOT?: RestaurantGalleryImageScalarWhereWithAggregatesInput | RestaurantGalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RestaurantGalleryImage"> | string
    restaurantId?: StringWithAggregatesFilter<"RestaurantGalleryImage"> | string
    imageUrl?: StringWithAggregatesFilter<"RestaurantGalleryImage"> | string
    title?: StringNullableWithAggregatesFilter<"RestaurantGalleryImage"> | string | null
    description?: StringNullableWithAggregatesFilter<"RestaurantGalleryImage"> | string | null
    sortOrder?: IntWithAggregatesFilter<"RestaurantGalleryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RestaurantGalleryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RestaurantGalleryImage"> | Date | string
  }

  export type MenuCategoryWhereInput = {
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    id?: StringFilter<"MenuCategory"> | string
    name?: StringFilter<"MenuCategory"> | string
    restaurantId?: StringFilter<"MenuCategory"> | string
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    products?: ProductListRelationFilter
  }

  export type MenuCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    name?: StringFilter<"MenuCategory"> | string
    restaurantId?: StringFilter<"MenuCategory"> | string
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    products?: ProductListRelationFilter
  }, "id">

  export type MenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCategoryCountOrderByAggregateInput
    _max?: MenuCategoryMaxOrderByAggregateInput
    _min?: MenuCategoryMinOrderByAggregateInput
  }

  export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    OR?: MenuCategoryScalarWhereWithAggregatesInput[]
    NOT?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuCategory"> | string
    name?: StringWithAggregatesFilter<"MenuCategory"> | string
    restaurantId?: StringWithAggregatesFilter<"MenuCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    videoUrl?: StringNullableFilter<"Product"> | string | null
    ingredients?: StringNullableListFilter<"Product">
    restaurantId?: StringFilter<"Product"> | string
    menuCategoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderProducts?: OrderProductListRelationFilter
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    menuCategory?: XOR<MenuCategoryScalarRelationFilter, MenuCategoryWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    restaurantId?: SortOrder
    menuCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderProducts?: OrderProductOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
    menuCategory?: MenuCategoryOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    videoUrl?: StringNullableFilter<"Product"> | string | null
    ingredients?: StringNullableListFilter<"Product">
    restaurantId?: StringFilter<"Product"> | string
    menuCategoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderProducts?: OrderProductListRelationFilter
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    menuCategory?: XOR<MenuCategoryScalarRelationFilter, MenuCategoryWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    restaurantId?: SortOrder
    menuCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    ingredients?: StringNullableListFilter<"Product">
    restaurantId?: StringWithAggregatesFilter<"Product"> | string
    menuCategoryId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFilter<"Order"> | $Enums.ConsumptionMethod
    restaurantId?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerCpf?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderProducts?: OrderProductListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    consumptionMethod?: SortOrder
    restaurantId?: SortOrder
    customerName?: SortOrder
    customerCpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    orderProducts?: OrderProductOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFilter<"Order"> | $Enums.ConsumptionMethod
    restaurantId?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerCpf?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderProducts?: OrderProductListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    consumptionMethod?: SortOrder
    restaurantId?: SortOrder
    customerName?: SortOrder
    customerCpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodWithAggregatesFilter<"Order"> | $Enums.ConsumptionMethod
    restaurantId?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerCpf?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    id?: StringFilter<"OrderProduct"> | string
    productId?: StringFilter<"OrderProduct"> | string
    orderId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderProductOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type OrderProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    productId?: StringFilter<"OrderProduct"> | string
    orderId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderProductOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderProductCountOrderByAggregateInput
    _avg?: OrderProductAvgOrderByAggregateInput
    _max?: OrderProductMaxOrderByAggregateInput
    _min?: OrderProductMinOrderByAggregateInput
    _sum?: OrderProductSumOrderByAggregateInput
  }

  export type OrderProductScalarWhereWithAggregatesInput = {
    AND?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    OR?: OrderProductScalarWhereWithAggregatesInput[]
    NOT?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderProduct"> | string
    productId?: StringWithAggregatesFilter<"OrderProduct"> | string
    orderId?: IntWithAggregatesFilter<"OrderProduct"> | number
    quantity?: IntWithAggregatesFilter<"OrderProduct"> | number
    price?: FloatWithAggregatesFilter<"OrderProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput
    products?: ProductCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput
    products?: ProductUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutAdminsInput
  }

  export type RestaurantAdminUncheckedCreateInput = {
    id?: string
    restaurantId: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type RestaurantAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminCreateManyInput = {
    id?: string
    restaurantId: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageCreateInput = {
    id?: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutGalleryImagesInput
  }

  export type RestaurantGalleryImageUncheckedCreateInput = {
    id?: string
    restaurantId: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantGalleryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type RestaurantGalleryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageCreateManyInput = {
    id?: string
    restaurantId: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantGalleryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutMenuCategoriesInput
    products?: ProductCreateNestedManyWithoutMenuCategoryInput
  }

  export type MenuCategoryUncheckedCreateInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutMenuCategoryInput
  }

  export type MenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput
    products?: ProductUpdateManyWithoutMenuCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput
  }

  export type MenuCategoryCreateManyInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput
    restaurant: RestaurantCreateNestedOneWithoutProductsInput
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    restaurantId: string
    menuCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    restaurantId?: StringFieldUpdateOperationsInput | string
    menuCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    restaurantId: string
    menuCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    restaurantId?: StringFieldUpdateOperationsInput | string
    menuCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    orderProducts?: OrderProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    restaurantId: string
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    orderProducts?: OrderProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    restaurantId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    restaurantId: string
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    restaurantId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateInput = {
    id?: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutOrderProductsInput
    order: OrderCreateNestedOneWithoutOrderProductsInput
  }

  export type OrderProductUncheckedCreateInput = {
    id?: string
    productId: string
    orderId: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrderProductsNestedInput
    order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput
  }

  export type OrderProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateManyInput = {
    id?: string
    productId: string
    orderId: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type RestaurantAdminListRelationFilter = {
    every?: RestaurantAdminWhereInput
    some?: RestaurantAdminWhereInput
    none?: RestaurantAdminWhereInput
  }

  export type RestaurantGalleryImageListRelationFilter = {
    every?: RestaurantGalleryImageWhereInput
    some?: RestaurantGalleryImageWhereInput
    none?: RestaurantGalleryImageWhereInput
  }

  export type MenuCategoryListRelationFilter = {
    every?: MenuCategoryWhereInput
    some?: MenuCategoryWhereInput
    none?: MenuCategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RestaurantAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantGalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    surfaceColor?: SortOrder
    menuWelcomeTitle?: SortOrder
    menuWelcomeMessage?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    planActivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    surfaceColor?: SortOrder
    menuWelcomeTitle?: SortOrder
    menuWelcomeMessage?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    planActivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarImageUrl?: SortOrder
    coverImageUrl?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    surfaceColor?: SortOrder
    menuWelcomeTitle?: SortOrder
    menuWelcomeMessage?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    subscriptionStatus?: SortOrder
    trialEndsAt?: SortOrder
    planActivatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type RestaurantAdminRestaurantIdEmailCompoundUniqueInput = {
    restaurantId: string
    email: string
  }

  export type RestaurantAdminCountOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAdminMinOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type RestaurantGalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantGalleryImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type RestaurantGalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantGalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantGalleryImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type MenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OrderProductListRelationFilter = {
    every?: OrderProductWhereInput
    some?: OrderProductWhereInput
    none?: OrderProductWhereInput
  }

  export type MenuCategoryScalarRelationFilter = {
    is?: MenuCategoryWhereInput
    isNot?: MenuCategoryWhereInput
  }

  export type OrderProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    ingredients?: SortOrder
    restaurantId?: SortOrder
    menuCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    restaurantId?: SortOrder
    menuCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    restaurantId?: SortOrder
    menuCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumConsumptionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsumptionMethod | EnumConsumptionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumConsumptionMethodFilter<$PrismaModel> | $Enums.ConsumptionMethod
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    consumptionMethod?: SortOrder
    restaurantId?: SortOrder
    customerName?: SortOrder
    customerCpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    consumptionMethod?: SortOrder
    restaurantId?: SortOrder
    customerName?: SortOrder
    customerCpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    status?: SortOrder
    consumptionMethod?: SortOrder
    restaurantId?: SortOrder
    customerName?: SortOrder
    customerCpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumConsumptionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsumptionMethod | EnumConsumptionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumConsumptionMethodWithAggregatesFilter<$PrismaModel> | $Enums.ConsumptionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsumptionMethodFilter<$PrismaModel>
    _max?: NestedEnumConsumptionMethodFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderProductCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductAvgOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductSumOrderByAggregateInput = {
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RestaurantAdminCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput> | RestaurantAdminCreateWithoutRestaurantInput[] | RestaurantAdminUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantAdminCreateOrConnectWithoutRestaurantInput | RestaurantAdminCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantAdminCreateManyRestaurantInputEnvelope
    connect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
  }

  export type RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput> | RestaurantGalleryImageCreateWithoutRestaurantInput[] | RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput | RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantGalleryImageCreateManyRestaurantInputEnvelope
    connect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
  }

  export type MenuCategoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput> | MenuCategoryCreateWithoutRestaurantInput[] | MenuCategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutRestaurantInput | MenuCategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput> | RestaurantAdminCreateWithoutRestaurantInput[] | RestaurantAdminUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantAdminCreateOrConnectWithoutRestaurantInput | RestaurantAdminCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantAdminCreateManyRestaurantInputEnvelope
    connect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
  }

  export type RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput> | RestaurantGalleryImageCreateWithoutRestaurantInput[] | RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput | RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantGalleryImageCreateManyRestaurantInputEnvelope
    connect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
  }

  export type MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput> | MenuCategoryCreateWithoutRestaurantInput[] | MenuCategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutRestaurantInput | MenuCategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RestaurantAdminUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput> | RestaurantAdminCreateWithoutRestaurantInput[] | RestaurantAdminUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantAdminCreateOrConnectWithoutRestaurantInput | RestaurantAdminCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantAdminUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantAdminUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantAdminCreateManyRestaurantInputEnvelope
    set?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    disconnect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    delete?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    connect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    update?: RestaurantAdminUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantAdminUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantAdminUpdateManyWithWhereWithoutRestaurantInput | RestaurantAdminUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantAdminScalarWhereInput | RestaurantAdminScalarWhereInput[]
  }

  export type RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput> | RestaurantGalleryImageCreateWithoutRestaurantInput[] | RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput | RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantGalleryImageUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantGalleryImageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantGalleryImageCreateManyRestaurantInputEnvelope
    set?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    disconnect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    delete?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    connect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    update?: RestaurantGalleryImageUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantGalleryImageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantGalleryImageUpdateManyWithWhereWithoutRestaurantInput | RestaurantGalleryImageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantGalleryImageScalarWhereInput | RestaurantGalleryImageScalarWhereInput[]
  }

  export type MenuCategoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput> | MenuCategoryCreateWithoutRestaurantInput[] | MenuCategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutRestaurantInput | MenuCategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope
    set?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    disconnect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    delete?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    update?: MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuCategoryUpdateManyWithWhereWithoutRestaurantInput | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput | ProductUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput | ProductUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput | ProductUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput> | RestaurantAdminCreateWithoutRestaurantInput[] | RestaurantAdminUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantAdminCreateOrConnectWithoutRestaurantInput | RestaurantAdminCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantAdminUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantAdminUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantAdminCreateManyRestaurantInputEnvelope
    set?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    disconnect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    delete?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    connect?: RestaurantAdminWhereUniqueInput | RestaurantAdminWhereUniqueInput[]
    update?: RestaurantAdminUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantAdminUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantAdminUpdateManyWithWhereWithoutRestaurantInput | RestaurantAdminUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantAdminScalarWhereInput | RestaurantAdminScalarWhereInput[]
  }

  export type RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput> | RestaurantGalleryImageCreateWithoutRestaurantInput[] | RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput | RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantGalleryImageUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantGalleryImageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantGalleryImageCreateManyRestaurantInputEnvelope
    set?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    disconnect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    delete?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    connect?: RestaurantGalleryImageWhereUniqueInput | RestaurantGalleryImageWhereUniqueInput[]
    update?: RestaurantGalleryImageUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantGalleryImageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantGalleryImageUpdateManyWithWhereWithoutRestaurantInput | RestaurantGalleryImageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantGalleryImageScalarWhereInput | RestaurantGalleryImageScalarWhereInput[]
  }

  export type MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput> | MenuCategoryCreateWithoutRestaurantInput[] | MenuCategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutRestaurantInput | MenuCategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope
    set?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    disconnect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    delete?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[]
    update?: MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuCategoryUpdateManyWithWhereWithoutRestaurantInput | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput> | ProductCreateWithoutRestaurantInput[] | ProductUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput | ProductCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput | ProductUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductCreateManyRestaurantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput | ProductUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput | ProductUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutAdminsInput = {
    create?: XOR<RestaurantCreateWithoutAdminsInput, RestaurantUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutAdminsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<RestaurantCreateWithoutAdminsInput, RestaurantUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutAdminsInput
    upsert?: RestaurantUpsertWithoutAdminsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutAdminsInput, RestaurantUpdateWithoutAdminsInput>, RestaurantUncheckedUpdateWithoutAdminsInput>
  }

  export type RestaurantCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<RestaurantCreateWithoutGalleryImagesInput, RestaurantUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutGalleryImagesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<RestaurantCreateWithoutGalleryImagesInput, RestaurantUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutGalleryImagesInput
    upsert?: RestaurantUpsertWithoutGalleryImagesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutGalleryImagesInput, RestaurantUpdateWithoutGalleryImagesInput>, RestaurantUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type RestaurantCreateNestedOneWithoutMenuCategoriesInput = {
    create?: XOR<RestaurantCreateWithoutMenuCategoriesInput, RestaurantUncheckedCreateWithoutMenuCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuCategoriesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutMenuCategoryInput = {
    create?: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput> | ProductCreateWithoutMenuCategoryInput[] | ProductUncheckedCreateWithoutMenuCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMenuCategoryInput | ProductCreateOrConnectWithoutMenuCategoryInput[]
    createMany?: ProductCreateManyMenuCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutMenuCategoryInput = {
    create?: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput> | ProductCreateWithoutMenuCategoryInput[] | ProductUncheckedCreateWithoutMenuCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMenuCategoryInput | ProductCreateOrConnectWithoutMenuCategoryInput[]
    createMany?: ProductCreateManyMenuCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput = {
    create?: XOR<RestaurantCreateWithoutMenuCategoriesInput, RestaurantUncheckedCreateWithoutMenuCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuCategoriesInput
    upsert?: RestaurantUpsertWithoutMenuCategoriesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutMenuCategoriesInput, RestaurantUpdateWithoutMenuCategoriesInput>, RestaurantUncheckedUpdateWithoutMenuCategoriesInput>
  }

  export type ProductUpdateManyWithoutMenuCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput> | ProductCreateWithoutMenuCategoryInput[] | ProductUncheckedCreateWithoutMenuCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMenuCategoryInput | ProductCreateOrConnectWithoutMenuCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMenuCategoryInput | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput[]
    createMany?: ProductCreateManyMenuCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMenuCategoryInput | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMenuCategoryInput | ProductUpdateManyWithWhereWithoutMenuCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput> | ProductCreateWithoutMenuCategoryInput[] | ProductUncheckedCreateWithoutMenuCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMenuCategoryInput | ProductCreateOrConnectWithoutMenuCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMenuCategoryInput | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput[]
    createMany?: ProductCreateManyMenuCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMenuCategoryInput | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMenuCategoryInput | ProductUpdateManyWithWhereWithoutMenuCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateingredientsInput = {
    set: string[]
  }

  export type OrderProductCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutProductsInput = {
    create?: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type MenuCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<MenuCategoryCreateWithoutProductsInput, MenuCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutProductsInput
    connect?: MenuCategoryWhereUniqueInput
  }

  export type OrderProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateingredientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrderProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput
    upsert?: RestaurantUpsertWithoutProductsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutProductsInput, RestaurantUpdateWithoutProductsInput>, RestaurantUncheckedUpdateWithoutProductsInput>
  }

  export type MenuCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutProductsInput, MenuCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutProductsInput
    upsert?: MenuCategoryUpsertWithoutProductsInput
    connect?: MenuCategoryWhereUniqueInput
    update?: XOR<XOR<MenuCategoryUpdateToOneWithWhereWithoutProductsInput, MenuCategoryUpdateWithoutProductsInput>, MenuCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type OrderProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderProductCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type OrderProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumConsumptionMethodFieldUpdateOperationsInput = {
    set?: $Enums.ConsumptionMethod
  }

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    upsert?: RestaurantUpsertWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrdersInput, RestaurantUpdateWithoutOrdersInput>, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderProductUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOrderProductsInput = {
    create?: XOR<ProductCreateWithoutOrderProductsInput, ProductUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutOrderProductsInput = {
    create?: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOrderProductsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderProductsInput, ProductUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductsInput
    upsert?: ProductUpsertWithoutOrderProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderProductsInput, ProductUpdateWithoutOrderProductsInput>, ProductUncheckedUpdateWithoutOrderProductsInput>
  }

  export type OrderUpdateOneRequiredWithoutOrderProductsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput
    upsert?: OrderUpsertWithoutOrderProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderProductsInput, OrderUpdateWithoutOrderProductsInput>, OrderUncheckedUpdateWithoutOrderProductsInput>
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumConsumptionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsumptionMethod | EnumConsumptionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumConsumptionMethodFilter<$PrismaModel> | $Enums.ConsumptionMethod
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumConsumptionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsumptionMethod | EnumConsumptionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsumptionMethod[] | ListEnumConsumptionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumConsumptionMethodWithAggregatesFilter<$PrismaModel> | $Enums.ConsumptionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsumptionMethodFilter<$PrismaModel>
    _max?: NestedEnumConsumptionMethodFilter<$PrismaModel>
  }

  export type RestaurantAdminCreateWithoutRestaurantInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantAdminUncheckedCreateWithoutRestaurantInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantAdminCreateOrConnectWithoutRestaurantInput = {
    where: RestaurantAdminWhereUniqueInput
    create: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantAdminCreateManyRestaurantInputEnvelope = {
    data: RestaurantAdminCreateManyRestaurantInput | RestaurantAdminCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantGalleryImageCreateWithoutRestaurantInput = {
    id?: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput = {
    id?: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantGalleryImageCreateOrConnectWithoutRestaurantInput = {
    where: RestaurantGalleryImageWhereUniqueInput
    create: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantGalleryImageCreateManyRestaurantInputEnvelope = {
    data: RestaurantGalleryImageCreateManyRestaurantInput | RestaurantGalleryImageCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type MenuCategoryCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutMenuCategoryInput
  }

  export type MenuCategoryUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutMenuCategoryInput
  }

  export type MenuCategoryCreateOrConnectWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput
    create: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuCategoryCreateManyRestaurantInputEnvelope = {
    data: MenuCategoryCreateManyRestaurantInput | MenuCategoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    menuCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductCreateManyRestaurantInputEnvelope = {
    data: ProductCreateManyRestaurantInput | ProductCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRestaurantInput = {
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantAdminUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantAdminWhereUniqueInput
    update: XOR<RestaurantAdminUpdateWithoutRestaurantInput, RestaurantAdminUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RestaurantAdminCreateWithoutRestaurantInput, RestaurantAdminUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantAdminUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantAdminWhereUniqueInput
    data: XOR<RestaurantAdminUpdateWithoutRestaurantInput, RestaurantAdminUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantAdminUpdateManyWithWhereWithoutRestaurantInput = {
    where: RestaurantAdminScalarWhereInput
    data: XOR<RestaurantAdminUpdateManyMutationInput, RestaurantAdminUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantAdminScalarWhereInput = {
    AND?: RestaurantAdminScalarWhereInput | RestaurantAdminScalarWhereInput[]
    OR?: RestaurantAdminScalarWhereInput[]
    NOT?: RestaurantAdminScalarWhereInput | RestaurantAdminScalarWhereInput[]
    id?: StringFilter<"RestaurantAdmin"> | string
    restaurantId?: StringFilter<"RestaurantAdmin"> | string
    email?: StringFilter<"RestaurantAdmin"> | string
    passwordHash?: StringFilter<"RestaurantAdmin"> | string
    displayName?: StringNullableFilter<"RestaurantAdmin"> | string | null
    createdAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantAdmin"> | Date | string
  }

  export type RestaurantGalleryImageUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantGalleryImageWhereUniqueInput
    update: XOR<RestaurantGalleryImageUpdateWithoutRestaurantInput, RestaurantGalleryImageUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RestaurantGalleryImageCreateWithoutRestaurantInput, RestaurantGalleryImageUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantGalleryImageUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantGalleryImageWhereUniqueInput
    data: XOR<RestaurantGalleryImageUpdateWithoutRestaurantInput, RestaurantGalleryImageUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantGalleryImageUpdateManyWithWhereWithoutRestaurantInput = {
    where: RestaurantGalleryImageScalarWhereInput
    data: XOR<RestaurantGalleryImageUpdateManyMutationInput, RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantGalleryImageScalarWhereInput = {
    AND?: RestaurantGalleryImageScalarWhereInput | RestaurantGalleryImageScalarWhereInput[]
    OR?: RestaurantGalleryImageScalarWhereInput[]
    NOT?: RestaurantGalleryImageScalarWhereInput | RestaurantGalleryImageScalarWhereInput[]
    id?: StringFilter<"RestaurantGalleryImage"> | string
    restaurantId?: StringFilter<"RestaurantGalleryImage"> | string
    imageUrl?: StringFilter<"RestaurantGalleryImage"> | string
    title?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    description?: StringNullableFilter<"RestaurantGalleryImage"> | string | null
    sortOrder?: IntFilter<"RestaurantGalleryImage"> | number
    createdAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"RestaurantGalleryImage"> | Date | string
  }

  export type MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput
    update: XOR<MenuCategoryUpdateWithoutRestaurantInput, MenuCategoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuCategoryCreateWithoutRestaurantInput, MenuCategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput
    data: XOR<MenuCategoryUpdateWithoutRestaurantInput, MenuCategoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuCategoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuCategoryScalarWhereInput
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MenuCategoryScalarWhereInput = {
    AND?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[]
    OR?: MenuCategoryScalarWhereInput[]
    NOT?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[]
    id?: StringFilter<"MenuCategory"> | string
    name?: StringFilter<"MenuCategory"> | string
    restaurantId?: StringFilter<"MenuCategory"> | string
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutRestaurantInput, ProductUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ProductCreateWithoutRestaurantInput, ProductUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutRestaurantInput, ProductUncheckedUpdateWithoutRestaurantInput>
  }

  export type ProductUpdateManyWithWhereWithoutRestaurantInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    imageUrl?: StringFilter<"Product"> | string
    videoUrl?: StringNullableFilter<"Product"> | string | null
    ingredients?: StringNullableListFilter<"Product">
    restaurantId?: StringFilter<"Product"> | string
    menuCategoryId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFilter<"Order"> | $Enums.ConsumptionMethod
    restaurantId?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerCpf?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type RestaurantCreateWithoutAdminsInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput
    products?: ProductCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutAdminsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutAdminsInput, RestaurantUncheckedCreateWithoutAdminsInput>
  }

  export type RestaurantUpsertWithoutAdminsInput = {
    update: XOR<RestaurantUpdateWithoutAdminsInput, RestaurantUncheckedUpdateWithoutAdminsInput>
    create: XOR<RestaurantCreateWithoutAdminsInput, RestaurantUncheckedCreateWithoutAdminsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutAdminsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutAdminsInput, RestaurantUncheckedUpdateWithoutAdminsInput>
  }

  export type RestaurantUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput
    products?: ProductUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutGalleryImagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput
    products?: ProductCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutGalleryImagesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutGalleryImagesInput, RestaurantUncheckedCreateWithoutGalleryImagesInput>
  }

  export type RestaurantUpsertWithoutGalleryImagesInput = {
    update: XOR<RestaurantUpdateWithoutGalleryImagesInput, RestaurantUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<RestaurantCreateWithoutGalleryImagesInput, RestaurantUncheckedCreateWithoutGalleryImagesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutGalleryImagesInput, RestaurantUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type RestaurantUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput
    products?: ProductUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutMenuCategoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput
    products?: ProductCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMenuCategoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMenuCategoriesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenuCategoriesInput, RestaurantUncheckedCreateWithoutMenuCategoriesInput>
  }

  export type ProductCreateWithoutMenuCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput
    restaurant: RestaurantCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutMenuCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput>
  }

  export type ProductCreateManyMenuCategoryInputEnvelope = {
    data: ProductCreateManyMenuCategoryInput | ProductCreateManyMenuCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutMenuCategoriesInput = {
    update: XOR<RestaurantUpdateWithoutMenuCategoriesInput, RestaurantUncheckedUpdateWithoutMenuCategoriesInput>
    create: XOR<RestaurantCreateWithoutMenuCategoriesInput, RestaurantUncheckedCreateWithoutMenuCategoriesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutMenuCategoriesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutMenuCategoriesInput, RestaurantUncheckedUpdateWithoutMenuCategoriesInput>
  }

  export type RestaurantUpdateWithoutMenuCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput
    products?: ProductUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMenuCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutMenuCategoryInput, ProductUncheckedUpdateWithoutMenuCategoryInput>
    create: XOR<ProductCreateWithoutMenuCategoryInput, ProductUncheckedCreateWithoutMenuCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutMenuCategoryInput, ProductUncheckedUpdateWithoutMenuCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutMenuCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutMenuCategoryInput>
  }

  export type OrderProductCreateWithoutProductInput = {
    id?: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderProductsInput
  }

  export type OrderProductUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductCreateOrConnectWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductCreateManyProductInputEnvelope = {
    data: OrderProductCreateManyProductInput | OrderProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutProductsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
  }

  export type MenuCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutMenuCategoriesInput
  }

  export type MenuCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryCreateOrConnectWithoutProductsInput = {
    where: MenuCategoryWhereUniqueInput
    create: XOR<MenuCategoryCreateWithoutProductsInput, MenuCategoryUncheckedCreateWithoutProductsInput>
  }

  export type OrderProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductScalarWhereInput = {
    AND?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    OR?: OrderProductScalarWhereInput[]
    NOT?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    id?: StringFilter<"OrderProduct"> | string
    productId?: StringFilter<"OrderProduct"> | string
    orderId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
  }

  export type RestaurantUpsertWithoutProductsInput = {
    update: XOR<RestaurantUpdateWithoutProductsInput, RestaurantUncheckedUpdateWithoutProductsInput>
    create: XOR<RestaurantCreateWithoutProductsInput, RestaurantUncheckedCreateWithoutProductsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutProductsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutProductsInput, RestaurantUncheckedUpdateWithoutProductsInput>
  }

  export type RestaurantUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type MenuCategoryUpsertWithoutProductsInput = {
    update: XOR<MenuCategoryUpdateWithoutProductsInput, MenuCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<MenuCategoryCreateWithoutProductsInput, MenuCategoryUncheckedCreateWithoutProductsInput>
    where?: MenuCategoryWhereInput
  }

  export type MenuCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: MenuCategoryWhereInput
    data: XOR<MenuCategoryUpdateWithoutProductsInput, MenuCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type MenuCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput
  }

  export type MenuCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput
    products?: ProductCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    description: string
    avatarImageUrl: string
    coverImageUrl: string
    ownerName?: string | null
    ownerEmail?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    surfaceColor?: string
    menuWelcomeTitle?: string | null
    menuWelcomeMessage?: string | null
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    stripePriceId?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    trialEndsAt?: Date | string | null
    planActivatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: RestaurantAdminUncheckedCreateNestedManyWithoutRestaurantInput
    galleryImages?: RestaurantGalleryImageUncheckedCreateNestedManyWithoutRestaurantInput
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
  }

  export type OrderProductCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutOrderProductsInput
  }

  export type OrderProductUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductCreateOrConnectWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductCreateManyOrderInputEnvelope = {
    data: OrderProductCreateManyOrderInput | OrderProductCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput
    products?: ProductUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avatarImageUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    surfaceColor?: StringFieldUpdateOperationsInput | string
    menuWelcomeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    menuWelcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planActivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: RestaurantAdminUncheckedUpdateManyWithoutRestaurantNestedInput
    galleryImages?: RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantNestedInput
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutOrderInput>
  }

  export type ProductCreateWithoutOrderProductsInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutProductsInput
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutOrderProductsInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    restaurantId: string
    menuCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutOrderProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderProductsInput, ProductUncheckedCreateWithoutOrderProductsInput>
  }

  export type OrderCreateWithoutOrderProductsInput = {
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderProductsInput = {
    id?: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    restaurantId: string
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
  }

  export type ProductUpsertWithoutOrderProductsInput = {
    update: XOR<ProductUpdateWithoutOrderProductsInput, ProductUncheckedUpdateWithoutOrderProductsInput>
    create: XOR<ProductCreateWithoutOrderProductsInput, ProductUncheckedCreateWithoutOrderProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderProductsInput, ProductUncheckedUpdateWithoutOrderProductsInput>
  }

  export type ProductUpdateWithoutOrderProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    restaurantId?: StringFieldUpdateOperationsInput | string
    menuCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutOrderProductsInput = {
    update: XOR<OrderUpdateWithoutOrderProductsInput, OrderUncheckedUpdateWithoutOrderProductsInput>
    create: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderProductsInput, OrderUncheckedUpdateWithoutOrderProductsInput>
  }

  export type OrderUpdateWithoutOrderProductsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    restaurantId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminCreateManyRestaurantInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantGalleryImageCreateManyRestaurantInput = {
    id?: string
    imageUrl: string
    title?: string | null
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryCreateManyRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    menuCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyRestaurantInput = {
    id?: number
    total: number
    status: $Enums.OrderStatus
    consumptionMethod: $Enums.ConsumptionMethod
    customerName: string
    customerCpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantAdminUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantAdminUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantGalleryImageUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutMenuCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    menuCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    menuCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutRestaurantInput = {
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    consumptionMethod?: EnumConsumptionMethodFieldUpdateOperationsInput | $Enums.ConsumptionMethod
    customerName?: StringFieldUpdateOperationsInput | string
    customerCpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyMenuCategoryInput = {
    id?: string
    name: string
    description: string
    price: number
    imageUrl: string
    videoUrl?: string | null
    ingredients?: ProductCreateingredientsInput | string[]
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: ProductUpdateingredientsInput | string[]
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateManyProductInput = {
    id?: string
    orderId: number
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateManyOrderInput = {
    id?: string
    productId: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrderProductsNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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