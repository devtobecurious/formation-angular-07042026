export type StarshipFromApi = {
  name: string;
  model: string;
  crew: string;
}

export type ResultFromApi = {
  results: StarshipFromApi[];
}

/**
 * The Starship interface represents a starship with a label property, which is a string that combines the name, model, and crew information of the starship. This interface is used to define the structure of the data that will be displayed in the UI after fetching and transforming the data from the API.
 */
export interface Starship {
  label: string
}
