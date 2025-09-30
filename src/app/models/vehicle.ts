export interface Vehicle {
  id: number,
  type: string,
  model: string,
  year: number,
  km: number,
  isSold?: boolean
  img?:string
}
