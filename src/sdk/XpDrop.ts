export interface XpDropAggregator {
  [key: string]: number;
}

export class XpDrop {
  skill: string;
  xp: number;
  dmg: number;
  constructor(skill: string, xp: number, dmg: number = 0) {
    this.skill = skill;
    this.xp = xp;
	this.dmg = dmg;
  }
}
