import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Genres {
  readonly id: string;
  readonly genre?: string;
  readonly profileID?: string;
  constructor(init: ModelInit<Genres>);
  static copyOf(source: Genres, mutator: (draft: MutableModel<Genres>) => MutableModel<Genres> | void): Genres;
}

export declare class Authors {
  readonly id: string;
  readonly profileID?: string;
  readonly name?: string;
  constructor(init: ModelInit<Authors>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors>) => MutableModel<Authors> | void): Authors;
}

export declare class Books {
  readonly id: string;
  readonly profileID?: string;
  readonly title?: string;
  readonly author?: string;
  constructor(init: ModelInit<Books>);
  static copyOf(source: Books, mutator: (draft: MutableModel<Books>) => MutableModel<Books> | void): Books;
}

export declare class Profiles {
  readonly id: string;
  readonly username?: string;
  readonly nickname?: string;
  readonly about_me?: string;
  readonly birth_dat?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly gender?: string;
  readonly open_to_meet?: boolean;
  readonly books?: (Books | null)[];
  readonly authors?: (Authors | null)[];
  readonly genres?: (Genres | null)[];
  constructor(init: ModelInit<Profiles>);
  static copyOf(source: Profiles, mutator: (draft: MutableModel<Profiles>) => MutableModel<Profiles> | void): Profiles;
}