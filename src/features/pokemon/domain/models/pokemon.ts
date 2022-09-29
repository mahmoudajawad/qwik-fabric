export interface Pokemon {
  id: number;
  name: string;
  types: Array<
    | "normal"
    | "fighting"
    | "flying"
    | "poison"
    | "ground"
    | "rock"
    | "bug"
    | "ghost"
    | "steel"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy"
  >;
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  height: number;
  weight: number;
}
