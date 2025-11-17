export class DnDCharacter {
  strength!: number;
  dexterity!: number;
  constitution!: number;
  intelligence!: number;
  wisdom!: number;
  charisma!: number;
  hitpoints!: number;
  
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  
  public static generateAbilityScore(): number {
    let rolls: number[] = [this.roll(), this.roll(), this.roll(), this.roll()];
    let min_value: number = rolls[0];
    let sum: number = 0;
    rolls.forEach((value) => {
      if (value < min_value) {
        min_value = value;
      }
      sum += value;
    });
    return sum - min_value;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10)/2);
  }

  private static roll(): number {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
}


