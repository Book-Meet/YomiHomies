import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Genre {
  readonly id: string;
  readonly genre?: string;
  readonly profileID?: string;
  constructor(init: ModelInit<Genre>);
  static copyOf(source: Genre, mutator: (draft: MutableModel<Genre>) => MutableModel<Genre> | void): Genre;
}

export declare class Author {
  readonly id: string;
  readonly profileID?: string;
  readonly name?: string;
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class Book {
  readonly id: string;
  readonly profileID?: string;
  readonly title?: string;
  readonly author?: string;
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class Profile {
  readonly id: string;
  readonly username?: string;
  readonly nickname?: string;
  readonly about_me?: string;
  readonly birth_date?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly gender?: string;
  readonly open_to_meet?: boolean;
  readonly books?: (Book | null)[];
  readonly authors?: (Author | null)[];
  readonly genres?: (Genre | null)[];
  readonly photo_source?: string;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}