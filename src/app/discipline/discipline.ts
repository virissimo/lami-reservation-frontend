import { Laboratory } from '../laboratory/laboratory';

export interface Discipline {
  id: number;
  name: string;
  description: string;
  prioritaryLab: Laboratory;
}
