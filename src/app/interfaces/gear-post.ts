import { PackingList } from './packing-list';

export interface GearPost {
  activity: string;
  tempRangeLow: number;
  tempRangeHigh:number;
  image: string;
  title: string;
  description: string;
  display: boolean;
  packingName: PackingList;
}
