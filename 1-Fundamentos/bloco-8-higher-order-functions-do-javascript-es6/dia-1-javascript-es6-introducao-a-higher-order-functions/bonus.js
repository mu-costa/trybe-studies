const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
    let randomDamage = Math.floor((Math.random() * dragon.strength) + 1)  
    return randomDamage;
  }

  //console.log(dragonDamage());

  const warriorDamage = () => {
    let maximumDamage = warrior.strength * warrior.weaponDmg;
    let randomDamage = Math.floor((Math.random() * (maximumDamage - warrior.strength)) + warrior.strength);
    return randomDamage;
  }
  //console.log(warriorDamage());

  const mageManaDamage = () => {
    let randomDamage;
    if(mage.mana > 15){
      randomDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
      mage.mana-=15;
      console.log(`Mana do mage ${mage.mana}`);
    } else {
      return 'Não possui mana suficiente';
    }
    return randomDamage;
  }

  const gameActions = {
    // Crie as HOFs neste objeto.
    
  };