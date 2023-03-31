import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerTracker = {
  readonly UUID?: string | null;
  readonly GPSCoordinateLatitude?: number | null;
  readonly GPSCoordinateLongitude?: number | null;
  readonly TimeOfLastUpdate?: string | null;
}

type LazyTracker = {
  readonly UUID?: string | null;
  readonly GPSCoordinateLatitude?: number | null;
  readonly GPSCoordinateLongitude?: number | null;
  readonly TimeOfLastUpdate?: string | null;
}

export declare type Tracker = LazyLoading extends LazyLoadingDisabled ? EagerTracker : LazyTracker

export declare const Tracker: (new (init: ModelInit<Tracker>) => Tracker)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Tracker?: (Tracker | null)[] | null;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Tracker?: (Tracker | null)[] | null;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}