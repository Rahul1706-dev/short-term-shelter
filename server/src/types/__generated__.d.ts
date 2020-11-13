import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Booking = {
  __typename?: 'Booking';
  id: Scalars['ID'];
  listing: Listing;
  tenant: User;
  checkIn: Scalars['String'];
  checkOut: Scalars['String'];
};

export enum ListingType {
  Apartment = 'APARTMENT',
  House = 'HOUSE'
}

export type Listing = {
  __typename?: 'Listing';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  host: User;
  type: ListingType;
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  bookings: Bookings;
  bookingsIndex: Scalars['Date'];
  price: Scalars['Int'];
  numOfGuests: Scalars['Int'];
};


export type ListingBookingsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type Bookings = {
  __typename?: 'Bookings';
  total: Scalars['Int'];
  result: Array<Booking>;
};

export type Listings = {
  __typename?: 'Listings';
  total: Scalars['Int'];
  result: Array<Listing>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar: Scalars['String'];
  contact: Scalars['String'];
  hasWallet: Scalars['Boolean'];
  income?: Maybe<Scalars['Int']>;
  bookings?: Maybe<Bookings>;
  listings: Listings;
};


export type UserBookingsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


export type UserListingsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type Viewer = {
  __typename?: 'Viewer';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  hasWallet?: Maybe<Scalars['Boolean']>;
  didRequest: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authUrl: Scalars['String'];
  user: User;
  listings: Listings;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type LoginInput = {
  code: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Viewer;
  logout: Viewer;
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Booking: ResolverTypeWrapper<Booking>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ListingType: ListingType;
  Listing: ResolverTypeWrapper<Listing>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Bookings: ResolverTypeWrapper<Bookings>;
  Listings: ResolverTypeWrapper<Listings>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Viewer: ResolverTypeWrapper<Viewer>;
  Query: ResolverTypeWrapper<{}>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars['Date'];
  Booking: Booking;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Listing: Listing;
  Int: Scalars['Int'];
  Bookings: Bookings;
  Listings: Listings;
  User: User;
  Boolean: Scalars['Boolean'];
  Viewer: Viewer;
  Query: {};
  LoginInput: LoginInput;
  Mutation: {};
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type BookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listing?: Resolver<ResolversTypes['Listing'], ParentType, ContextType>;
  tenant?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  checkIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkOut?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ListingType'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookings?: Resolver<ResolversTypes['Bookings'], ParentType, ContextType, RequireFields<ListingBookingsArgs, 'limit' | 'page'>>;
  bookingsIndex?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numOfGuests?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookings'] = ResolversParentTypes['Bookings']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Booking']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Listings'] = ResolversParentTypes['Listings']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasWallet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  income?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bookings?: Resolver<Maybe<ResolversTypes['Bookings']>, ParentType, ContextType, RequireFields<UserBookingsArgs, 'limit' | 'page'>>;
  listings?: Resolver<ResolversTypes['Listings'], ParentType, ContextType, RequireFields<UserListingsArgs, 'limit' | 'page'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasWallet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  didRequest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  listings?: Resolver<ResolversTypes['Listings'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  logout?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Booking?: BookingResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Bookings?: BookingsResolvers<ContextType>;
  Listings?: ListingsResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
