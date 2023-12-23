export interface TypeCarte {
  id: string
  titre: string
  texte: string
  image: string
  url?: string
}

export interface Cartes extends Array<TypeCarte> {}
