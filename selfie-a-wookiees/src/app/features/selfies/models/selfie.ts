import { Wookiee } from "./wookiee";

/**
 * Interface representing a selfie taken by a Wookiee. Each selfie has an id, title, description, image URL, and is associated with a Wookiee.
 */
export interface Selfie {
  id: number;
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  wookiee: Wookiee;
}

/**
 * Type representing an array of Selfie objects. This can be used to manage collections of selfies taken by Wookiees.
 */
export type Selfies = Selfie[];
