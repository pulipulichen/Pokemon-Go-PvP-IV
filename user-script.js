let debug = true

setTimeout(() => {
  let name = getQueryVariable('pokemon')
  name = name.split('+').join(' ')
  let max_cp = getQueryVariable('max_cp')
  //console.log(name, max_cp)
  
  let currentI
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].name === name) {
      currentI = i
      break
    }
  }
  
  if (currentI === undefined) {
    console.log('找不到', name)
    return false
  }
  
  if (currentI === pokemonList.length) {
    console.log('結束了', name)
    return false
  }
  
  let currentPokemon = pokemonList[currentI]
  let nextPokemon = pokemonList[currentI + 1]
  console.log(nextPokemon)
  
  if (max_cp === '1500') {
    nextPokemon = currentPokemon
  }
  
  saveBestIV(currentPokemon, () => {
    goToNextPokemon(nextPokemon)
  })
}, 1000)

let saveBestIV = function (currentPokemon, callback) {
  let table = $('table.table.table-condensed.table-striped.text-light')
  console.log(table.length)
  if (table.length === 0) {
    setTimeout(() => {
      saveBestIV(currentPokemon, callback)
    }, 1000)
    return false
  }
  
  if ($('.alert.alert-dismissible.alert-danger').length > 0) {
    window.alert('名稱錯誤')
    return false
  }
  
  let iv = table.find('tbody tr:eq(1) td:eq(2)').text()
  let max_cp = getQueryVariable('max_cp')
  
  let filename = max_cp + '_' + currentPokemon.id + '_' + currentPokemon.name + '.txt'
  filename = filename.split("'").join('')
  filename = filename.split(" ").join('_')
  
  let content = `${currentPokemon.id},"${currentPokemon.name}",${max_cp},"${iv}"`
  
  //console.log(iv, filename, content)
  console.log(filename)
  console.log(content)
  
  if (debug !== true) {
    PuliDownloadAsFile(filename, content)
  }
  
  callback()
}

let goToNextPokemon = function (nextPokemon) {
  let name = nextPokemon.name
  name = name.split("'").join('%27')
  name = name.split(' ').join('+')
  //name = encodeURIComponent(name)
  
  let max_cp = getQueryVariable('max_cp')
  if (max_cp === '1500') {
    max_cp = '2500'
  }
  else {
    max_cp = '1500'
  }
  
  let url = `https://gostadium.club/pvp/iv?pokemon=${name}&max_cp=${max_cp}&min_iv=0&att_iv=0&def_iv=15&sta_iv=15`
  console.log(url)
  
  if (debug !== true) {
    location.href = url
  }
}

let pokemonList = [
  {
    "id": 1,
    "name": "Bulbasaur"
  },
  {
    "id": 2,
    "name": "Ivysaur"
  },
  {
    "id": 3,
    "name": "Venusaur"
  },
  {
    "id": 4,
    "name": "Charmander"
  },
  {
    "id": 5,
    "name": "Charmeleon"
  },
  {
    "id": 6,
    "name": "Charizard"
  },
  {
    "id": 7,
    "name": "Squirtle"
  },
  {
    "id": 8,
    "name": "Wartortle"
  },
  {
    "id": 9,
    "name": "Blastoise"
  },
  {
    "id": 10,
    "name": "Caterpie"
  },
  {
    "id": 11,
    "name": "Metapod"
  },
  {
    "id": 12,
    "name": "Butterfree"
  },
  {
    "id": 13,
    "name": "Weedle"
  },
  {
    "id": 14,
    "name": "Kakuna"
  },
  {
    "id": 15,
    "name": "Beedrill"
  },
  {
    "id": 16,
    "name": "Pidgey"
  },
  {
    "id": 17,
    "name": "Pidgeotto"
  },
  {
    "id": 18,
    "name": "Pidgeot"
  },
  {
    "id": 19,
    "name": "Rattata"
  },
  {
    "id": 20,
    "name": "Raticate"
  },
  {
    "id": 21,
    "name": "Spearow"
  },
  {
    "id": 22,
    "name": "Fearow"
  },
  {
    "id": 23,
    "name": "Ekans"
  },
  {
    "id": 24,
    "name": "Arbok"
  },
  {
    "id": 25,
    "name": "Pikachu"
  },
  {
    "id": 26,
    "name": "Raichu"
  },
  {
    "id": 27,
    "name": "Sandshrew"
  },
  {
    "id": 28,
    "name": "Sandslash"
  },
  {
    "id": 29,
    "name": "Nidoran F"
  },
  {
    "id": 30,
    "name": "Nidorina"
  },
  {
    "id": 31,
    "name": "Nidoqueen"
  },
  {
    "id": 32,
    "name": "Nidoran M"
  },
  {
    "id": 33,
    "name": "Nidorino"
  },
  {
    "id": 34,
    "name": "Nidoking"
  },
  {
    "id": 35,
    "name": "Clefairy"
  },
  {
    "id": 36,
    "name": "Clefable"
  },
  {
    "id": 37,
    "name": "Vulpix"
  },
  {
    "id": 38,
    "name": "Ninetales"
  },
  {
    "id": 39,
    "name": "Jigglypuff"
  },
  {
    "id": 40,
    "name": "Wigglytuff"
  },
  {
    "id": 41,
    "name": "Zubat"
  },
  {
    "id": 42,
    "name": "Golbat"
  },
  {
    "id": 43,
    "name": "Oddish"
  },
  {
    "id": 44,
    "name": "Gloom"
  },
  {
    "id": 45,
    "name": "Vileplume"
  },
  {
    "id": 46,
    "name": "Paras"
  },
  {
    "id": 47,
    "name": "Parasect"
  },
  {
    "id": 48,
    "name": "Venonat"
  },
  {
    "id": 49,
    "name": "Venomoth"
  },
  {
    "id": 50,
    "name": "Diglett"
  },
  {
    "id": 51,
    "name": "Dugtrio"
  },
  {
    "id": 52,
    "name": "Meowth"
  },
  {
    "id": 53,
    "name": "Persian"
  },
  {
    "id": 54,
    "name": "Psyduck"
  },
  {
    "id": 55,
    "name": "Golduck"
  },
  {
    "id": 56,
    "name": "Mankey"
  },
  {
    "id": 57,
    "name": "Primeape"
  },
  {
    "id": 58,
    "name": "Growlithe"
  },
  {
    "id": 59,
    "name": "Arcanine"
  },
  {
    "id": 60,
    "name": "Poliwag"
  },
  {
    "id": 61,
    "name": "Poliwhirl"
  },
  {
    "id": 62,
    "name": "Poliwrath"
  },
  {
    "id": 63,
    "name": "Abra"
  },
  {
    "id": 64,
    "name": "Kadabra"
  },
  {
    "id": 65,
    "name": "Alakazam"
  },
  {
    "id": 66,
    "name": "Machop"
  },
  {
    "id": 67,
    "name": "Machoke"
  },
  {
    "id": 68,
    "name": "Machamp"
  },
  {
    "id": 69,
    "name": "Bellsprout"
  },
  {
    "id": 70,
    "name": "Weepinbell"
  },
  {
    "id": 71,
    "name": "Victreebel"
  },
  {
    "id": 72,
    "name": "Tentacool"
  },
  {
    "id": 73,
    "name": "Tentacruel"
  },
  {
    "id": 74,
    "name": "Geodude"
  },
  {
    "id": 75,
    "name": "Graveler"
  },
  {
    "id": 76,
    "name": "Golem"
  },
  {
    "id": 77,
    "name": "Ponyta"
  },
  {
    "id": 78,
    "name": "Rapidash"
  },
  {
    "id": 79,
    "name": "Slowpoke"
  },
  {
    "id": 80,
    "name": "Slowbro"
  },
  {
    "id": 81,
    "name": "Magnemite"
  },
  {
    "id": 82,
    "name": "Magneton"
  },
  {
    "id": 83,
    "name": "Farfetch'd"
  },
  {
    "id": 84,
    "name": "Doduo"
  },
  {
    "id": 85,
    "name": "Dodrio"
  },
  {
    "id": 86,
    "name": "Seel"
  },
  {
    "id": 87,
    "name": "Dewgong"
  },
  {
    "id": 88,
    "name": "Grimer"
  },
  {
    "id": 89,
    "name": "Muk"
  },
  {
    "id": 90,
    "name": "Shellder"
  },
  {
    "id": 91,
    "name": "Cloyster"
  },
  {
    "id": 92,
    "name": "Gastly"
  },
  {
    "id": 93,
    "name": "Haunter"
  },
  {
    "id": 94,
    "name": "Gengar"
  },
  {
    "id": 95,
    "name": "Onix"
  },
  {
    "id": 96,
    "name": "Drowzee"
  },
  {
    "id": 97,
    "name": "Hypno"
  },
  {
    "id": 98,
    "name": "Krabby"
  },
  {
    "id": 99,
    "name": "Kingler"
  },
  {
    "id": 100,
    "name": "Voltorb"
  },
  {
    "id": 101,
    "name": "Electrode"
  },
  {
    "id": 102,
    "name": "Exeggcute"
  },
  {
    "id": 103,
    "name": "Exeggutor"
  },
  {
    "id": 104,
    "name": "Cubone"
  },
  {
    "id": 105,
    "name": "Marowak"
  },
  {
    "id": 106,
    "name": "Hitmonlee"
  },
  {
    "id": 107,
    "name": "Hitmonchan"
  },
  {
    "id": 108,
    "name": "Lickitung"
  },
  {
    "id": 109,
    "name": "Koffing"
  },
  {
    "id": 110,
    "name": "Weezing"
  },
  {
    "id": 111,
    "name": "Rhyhorn"
  },
  {
    "id": 112,
    "name": "Rhydon"
  },
  {
    "id": 113,
    "name": "Chansey"
  },
  {
    "id": 114,
    "name": "Tangela"
  },
  {
    "id": 115,
    "name": "Kangaskhan"
  },
  {
    "id": 116,
    "name": "Horsea"
  },
  {
    "id": 117,
    "name": "Seadra"
  },
  {
    "id": 118,
    "name": "Goldeen"
  },
  {
    "id": 119,
    "name": "Seaking"
  },
  {
    "id": 120,
    "name": "Staryu"
  },
  {
    "id": 121,
    "name": "Starmie"
  },
  {
    "id": 122,
    "name": "Mr Mime"
  },
  {
    "id": 123,
    "name": "Scyther"
  },
  {
    "id": 124,
    "name": "Jynx"
  },
  {
    "id": 125,
    "name": "Electabuzz"
  },
  {
    "id": 126,
    "name": "Magmar"
  },
  {
    "id": 127,
    "name": "Pinsir"
  },
  {
    "id": 128,
    "name": "Tauros"
  },
  {
    "id": 129,
    "name": "Magikarp"
  },
  {
    "id": 130,
    "name": "Gyarados"
  },
  {
    "id": 131,
    "name": "Lapras"
  },
  {
    "id": 132,
    "name": "Ditto"
  },
  {
    "id": 133,
    "name": "Eevee"
  },
  {
    "id": 134,
    "name": "Vaporeon"
  },
  {
    "id": 135,
    "name": "Jolteon"
  },
  {
    "id": 136,
    "name": "Flareon"
  },
  {
    "id": 137,
    "name": "Porygon"
  },
  {
    "id": 138,
    "name": "Omanyte"
  },
  {
    "id": 139,
    "name": "Omastar"
  },
  {
    "id": 140,
    "name": "Kabuto"
  },
  {
    "id": 141,
    "name": "Kabutops"
  },
  {
    "id": 142,
    "name": "Aerodactyl"
  },
  {
    "id": 143,
    "name": "Snorlax"
  },
  {
    "id": 144,
    "name": "Articuno"
  },
  {
    "id": 145,
    "name": "Zapdos"
  },
  {
    "id": 146,
    "name": "Moltres"
  },
  {
    "id": 147,
    "name": "Dratini"
  },
  {
    "id": 148,
    "name": "Dragonair"
  },
  {
    "id": 149,
    "name": "Dragonite"
  },
  {
    "id": 150,
    "name": "Mewtwo"
  },
  {
    "id": 151,
    "name": "Mew"
  },
  {
    "id": 152,
    "name": "Chikorita"
  },
  {
    "id": 153,
    "name": "Bayleef"
  },
  {
    "id": 154,
    "name": "Meganium"
  },
  {
    "id": 155,
    "name": "Cyndaquil"
  },
  {
    "id": 156,
    "name": "Quilava"
  },
  {
    "id": 157,
    "name": "Typhlosion"
  },
  {
    "id": 158,
    "name": "Totodile"
  },
  {
    "id": 159,
    "name": "Croconaw"
  },
  {
    "id": 160,
    "name": "Feraligatr"
  },
  {
    "id": 161,
    "name": "Sentret"
  },
  {
    "id": 162,
    "name": "Furret"
  },
  {
    "id": 163,
    "name": "Hoothoot"
  },
  {
    "id": 164,
    "name": "Noctowl"
  },
  {
    "id": 165,
    "name": "Ledyba"
  },
  {
    "id": 166,
    "name": "Ledian"
  },
  {
    "id": 167,
    "name": "Spinarak"
  },
  {
    "id": 168,
    "name": "Ariados"
  },
  {
    "id": 169,
    "name": "Crobat"
  },
  {
    "id": 170,
    "name": "Chinchou"
  },
  {
    "id": 171,
    "name": "Lanturn"
  },
  {
    "id": 172,
    "name": "Pichu"
  },
  {
    "id": 173,
    "name": "Cleffa"
  },
  {
    "id": 174,
    "name": "Igglybuff"
  },
  {
    "id": 175,
    "name": "Togepi"
  },
  {
    "id": 176,
    "name": "Togetic"
  },
  {
    "id": 177,
    "name": "Natu"
  },
  {
    "id": 178,
    "name": "Xatu"
  },
  {
    "id": 179,
    "name": "Mareep"
  },
  {
    "id": 180,
    "name": "Flaaffy"
  },
  {
    "id": 181,
    "name": "Ampharos"
  },
  {
    "id": 182,
    "name": "Bellossom"
  },
  {
    "id": 183,
    "name": "Marill"
  },
  {
    "id": 184,
    "name": "Azumarill"
  },
  {
    "id": 185,
    "name": "Sudowoodo"
  },
  {
    "id": 186,
    "name": "Politoed"
  },
  {
    "id": 187,
    "name": "Hoppip"
  },
  {
    "id": 188,
    "name": "Skiploom"
  },
  {
    "id": 189,
    "name": "Jumpluff"
  },
  {
    "id": 190,
    "name": "Aipom"
  },
  {
    "id": 191,
    "name": "Sunkern"
  },
  {
    "id": 192,
    "name": "Sunflora"
  },
  {
    "id": 193,
    "name": "Yanma"
  },
  {
    "id": 194,
    "name": "Wooper"
  },
  {
    "id": 195,
    "name": "Quagsire"
  },
  {
    "id": 196,
    "name": "Espeon"
  },
  {
    "id": 197,
    "name": "Umbreon"
  },
  {
    "id": 198,
    "name": "Murkrow"
  },
  {
    "id": 199,
    "name": "Slowking"
  },
  {
    "id": 200,
    "name": "Misdreavus"
  },
  {
    "id": 201,
    "name": "Unown"
  },
  {
    "id": 202,
    "name": "Wobbuffet"
  },
  {
    "id": 203,
    "name": "Girafarig"
  },
  {
    "id": 204,
    "name": "Pineco"
  },
  {
    "id": 205,
    "name": "Forretress"
  },
  {
    "id": 206,
    "name": "Dunsparce"
  },
  {
    "id": 207,
    "name": "Gligar"
  },
  {
    "id": 208,
    "name": "Steelix"
  },
  {
    "id": 209,
    "name": "Snubbull"
  },
  {
    "id": 210,
    "name": "Granbull"
  },
  {
    "id": 211,
    "name": "Qwilfish"
  },
  {
    "id": 212,
    "name": "Scizor"
  },
  {
    "id": 213,
    "name": "Shuckle"
  },
  {
    "id": 214,
    "name": "Heracross"
  },
  {
    "id": 215,
    "name": "Sneasel"
  },
  {
    "id": 216,
    "name": "Teddiursa"
  },
  {
    "id": 217,
    "name": "Ursaring"
  },
  {
    "id": 218,
    "name": "Slugma"
  },
  {
    "id": 219,
    "name": "Magcargo"
  },
  {
    "id": 220,
    "name": "Swinub"
  },
  {
    "id": 221,
    "name": "Piloswine"
  },
  {
    "id": 222,
    "name": "Corsola"
  },
  {
    "id": 223,
    "name": "Remoraid"
  },
  {
    "id": 224,
    "name": "Octillery"
  },
  {
    "id": 225,
    "name": "Delibird"
  },
  {
    "id": 226,
    "name": "Mantine"
  },
  {
    "id": 227,
    "name": "Skarmory"
  },
  {
    "id": 228,
    "name": "Houndour"
  },
  {
    "id": 229,
    "name": "Houndoom"
  },
  {
    "id": 230,
    "name": "Kingdra"
  },
  {
    "id": 231,
    "name": "Phanpy"
  },
  {
    "id": 232,
    "name": "Donphan"
  },
  {
    "id": 233,
    "name": "Porygon2"
  },
  {
    "id": 234,
    "name": "Stantler"
  },
  {
    "id": 235,
    "name": "Smeargle"
  },
  {
    "id": 236,
    "name": "Tyrogue"
  },
  {
    "id": 237,
    "name": "Hitmontop"
  },
  {
    "id": 238,
    "name": "Smoochum"
  },
  {
    "id": 239,
    "name": "Elekid"
  },
  {
    "id": 240,
    "name": "Magby"
  },
  {
    "id": 241,
    "name": "Miltank"
  },
  {
    "id": 242,
    "name": "Blissey"
  },
  {
    "id": 243,
    "name": "Raikou"
  },
  {
    "id": 244,
    "name": "Entei"
  },
  {
    "id": 245,
    "name": "Suicune"
  },
  {
    "id": 246,
    "name": "Larvitar"
  },
  {
    "id": 247,
    "name": "Pupitar"
  },
  {
    "id": 248,
    "name": "Tyranitar"
  },
  {
    "id": 249,
    "name": "Lugia"
  },
  {
    "id": 250,
    "name": "HoOh"
  },
  {
    "id": 251,
    "name": "Celebi"
  },
  {
    "id": 252,
    "name": "Treecko"
  },
  {
    "id": 253,
    "name": "Grovyle"
  },
  {
    "id": 254,
    "name": "Sceptile"
  },
  {
    "id": 255,
    "name": "Torchic"
  },
  {
    "id": 256,
    "name": "Combusken"
  },
  {
    "id": 257,
    "name": "Blaziken"
  },
  {
    "id": 258,
    "name": "Mudkip"
  },
  {
    "id": 259,
    "name": "Marshtomp"
  },
  {
    "id": 260,
    "name": "Swampert"
  },
  {
    "id": 261,
    "name": "Poochyena"
  },
  {
    "id": 262,
    "name": "Mightyena"
  },
  {
    "id": 263,
    "name": "Zigzagoon"
  },
  {
    "id": 264,
    "name": "Linoone"
  },
  {
    "id": 265,
    "name": "Wurmple"
  },
  {
    "id": 266,
    "name": "Silcoon"
  },
  {
    "id": 267,
    "name": "Beautifly"
  },
  {
    "id": 268,
    "name": "Cascoon"
  },
  {
    "id": 269,
    "name": "Dustox"
  },
  {
    "id": 270,
    "name": "Lotad"
  },
  {
    "id": 271,
    "name": "Lombre"
  },
  {
    "id": 272,
    "name": "Ludicolo"
  },
  {
    "id": 273,
    "name": "Seedot"
  },
  {
    "id": 274,
    "name": "Nuzleaf"
  },
  {
    "id": 275,
    "name": "Shiftry"
  },
  {
    "id": 276,
    "name": "Taillow"
  },
  {
    "id": 277,
    "name": "Swellow"
  },
  {
    "id": 278,
    "name": "Wingull"
  },
  {
    "id": 279,
    "name": "Pelipper"
  },
  {
    "id": 280,
    "name": "Ralts"
  },
  {
    "id": 281,
    "name": "Kirlia"
  },
  {
    "id": 282,
    "name": "Gardevoir"
  },
  {
    "id": 283,
    "name": "Surskit"
  },
  {
    "id": 284,
    "name": "Masquerain"
  },
  {
    "id": 285,
    "name": "Shroomish"
  },
  {
    "id": 286,
    "name": "Breloom"
  },
  {
    "id": 287,
    "name": "Slakoth"
  },
  {
    "id": 288,
    "name": "Vigoroth"
  },
  {
    "id": 289,
    "name": "Slaking"
  },
  {
    "id": 290,
    "name": "Nincada"
  },
  {
    "id": 291,
    "name": "Ninjask"
  },
  {
    "id": 292,
    "name": "Shedinja"
  },
  {
    "id": 293,
    "name": "Whismur"
  },
  {
    "id": 294,
    "name": "Loudred"
  },
  {
    "id": 295,
    "name": "Exploud"
  },
  {
    "id": 296,
    "name": "Makuhita"
  },
  {
    "id": 297,
    "name": "Hariyama"
  },
  {
    "id": 298,
    "name": "Azurill"
  },
  {
    "id": 299,
    "name": "Nosepass"
  },
  {
    "id": 300,
    "name": "Skitty"
  },
  {
    "id": 301,
    "name": "Delcatty"
  },
  {
    "id": 302,
    "name": "Sableye"
  },
  {
    "id": 303,
    "name": "Mawile"
  },
  {
    "id": 304,
    "name": "Aron"
  },
  {
    "id": 305,
    "name": "Lairon"
  },
  {
    "id": 306,
    "name": "Aggron"
  },
  {
    "id": 307,
    "name": "Meditite"
  },
  {
    "id": 308,
    "name": "Medicham"
  },
  {
    "id": 309,
    "name": "Electrike"
  },
  {
    "id": 310,
    "name": "Manectric"
  },
  {
    "id": 311,
    "name": "Plusle"
  },
  {
    "id": 312,
    "name": "Minun"
  },
  {
    "id": 313,
    "name": "Volbeat"
  },
  {
    "id": 314,
    "name": "Illumise"
  },
  {
    "id": 315,
    "name": "Roselia"
  },
  {
    "id": 316,
    "name": "Gulpin"
  },
  {
    "id": 317,
    "name": "Swalot"
  },
  {
    "id": 318,
    "name": "Carvanha"
  },
  {
    "id": 319,
    "name": "Sharpedo"
  },
  {
    "id": 320,
    "name": "Wailmer"
  },
  {
    "id": 321,
    "name": "Wailord"
  },
  {
    "id": 322,
    "name": "Numel"
  },
  {
    "id": 323,
    "name": "Camerupt"
  },
  {
    "id": 324,
    "name": "Torkoal"
  },
  {
    "id": 325,
    "name": "Spoink"
  },
  {
    "id": 326,
    "name": "Grumpig"
  },
  {
    "id": 327,
    "name": "Spinda"
  },
  {
    "id": 328,
    "name": "Trapinch"
  },
  {
    "id": 329,
    "name": "Vibrava"
  },
  {
    "id": 330,
    "name": "Flygon"
  },
  {
    "id": 331,
    "name": "Cacnea"
  },
  {
    "id": 332,
    "name": "Cacturne"
  },
  {
    "id": 333,
    "name": "Swablu"
  },
  {
    "id": 334,
    "name": "Altaria"
  },
  {
    "id": 335,
    "name": "Zangoose"
  },
  {
    "id": 336,
    "name": "Seviper"
  },
  {
    "id": 337,
    "name": "Lunatone"
  },
  {
    "id": 338,
    "name": "Solrock"
  },
  {
    "id": 339,
    "name": "Barboach"
  },
  {
    "id": 340,
    "name": "Whiscash"
  },
  {
    "id": 341,
    "name": "Corphish"
  },
  {
    "id": 342,
    "name": "Crawdaunt"
  },
  {
    "id": 343,
    "name": "Baltoy"
  },
  {
    "id": 344,
    "name": "Claydol"
  },
  {
    "id": 345,
    "name": "Lileep"
  },
  {
    "id": 346,
    "name": "Cradily"
  },
  {
    "id": 347,
    "name": "Anorith"
  },
  {
    "id": 348,
    "name": "Armaldo"
  },
  {
    "id": 349,
    "name": "Feebas"
  },
  {
    "id": 350,
    "name": "Milotic"
  },
  {
    "id": 351,
    "name": "Castform"
  },
  {
    "id": 352,
    "name": "Kecleon"
  },
  {
    "id": 353,
    "name": "Shuppet"
  },
  {
    "id": 354,
    "name": "Banette"
  },
  {
    "id": 355,
    "name": "Duskull"
  },
  {
    "id": 356,
    "name": "Dusclops"
  },
  {
    "id": 357,
    "name": "Tropius"
  },
  {
    "id": 358,
    "name": "Chimecho"
  },
  {
    "id": 359,
    "name": "Absol"
  },
  {
    "id": 360,
    "name": "Wynaut"
  },
  {
    "id": 361,
    "name": "Snorunt"
  },
  {
    "id": 362,
    "name": "Glalie"
  },
  {
    "id": 363,
    "name": "Spheal"
  },
  {
    "id": 364,
    "name": "Sealeo"
  },
  {
    "id": 365,
    "name": "Walrein"
  },
  {
    "id": 366,
    "name": "Clamperl"
  },
  {
    "id": 367,
    "name": "Huntail"
  },
  {
    "id": 368,
    "name": "Gorebyss"
  },
  {
    "id": 369,
    "name": "Relicanth"
  },
  {
    "id": 370,
    "name": "Luvdisc"
  },
  {
    "id": 371,
    "name": "Bagon"
  },
  {
    "id": 372,
    "name": "Shelgon"
  },
  {
    "id": 373,
    "name": "Salamence"
  },
  {
    "id": 374,
    "name": "Beldum"
  },
  {
    "id": 375,
    "name": "Metang"
  },
  {
    "id": 376,
    "name": "Metagross"
  },
  {
    "id": 377,
    "name": "Regirock"
  },
  {
    "id": 378,
    "name": "Regice"
  },
  {
    "id": 379,
    "name": "Registeel"
  },
  {
    "id": 380,
    "name": "Latias"
  },
  {
    "id": 381,
    "name": "Latios"
  },
  {
    "id": 382,
    "name": "Kyogre"
  },
  {
    "id": 383,
    "name": "Groudon"
  },
  {
    "id": 384,
    "name": "Rayquaza"
  },
  {
    "id": 385,
    "name": "Jirachi"
  },
  {
    "id": 386,
    "name": "Deoxys"
  },
  {
    "id": 387,
    "name": "Turtwig"
  },
  {
    "id": 388,
    "name": "Grotle"
  },
  {
    "id": 389,
    "name": "Torterra"
  },
  {
    "id": 390,
    "name": "Chimchar"
  },
  {
    "id": 391,
    "name": "Monferno"
  },
  {
    "id": 392,
    "name": "Infernape"
  },
  {
    "id": 393,
    "name": "Piplup"
  },
  {
    "id": 394,
    "name": "Prinplup"
  },
  {
    "id": 395,
    "name": "Empoleon"
  },
  {
    "id": 396,
    "name": "Starly"
  },
  {
    "id": 397,
    "name": "Staravia"
  },
  {
    "id": 398,
    "name": "Staraptor"
  },
  {
    "id": 399,
    "name": "Bidoof"
  },
  {
    "id": 400,
    "name": "Bibarel"
  },
  {
    "id": 401,
    "name": "Kricketot"
  },
  {
    "id": 402,
    "name": "Kricketune"
  },
  {
    "id": 403,
    "name": "Shinx"
  },
  {
    "id": 404,
    "name": "Luxio"
  },
  {
    "id": 405,
    "name": "Luxray"
  },
  {
    "id": 406,
    "name": "Budew"
  },
  {
    "id": 407,
    "name": "Roserade"
  },
  {
    "id": 408,
    "name": "Cranidos"
  },
  {
    "id": 409,
    "name": "Rampardos"
  },
  {
    "id": 410,
    "name": "Shieldon"
  },
  {
    "id": 411,
    "name": "Bastiodon"
  },
  {
    "id": 412,
    "name": "Burmy"
  },
  {
    "id": 413,
    "name": "Wormadam"
  },
  {
    "id": 414,
    "name": "Mothim"
  },
  {
    "id": 415,
    "name": "Combee"
  },
  {
    "id": 416,
    "name": "Vespiquen"
  },
  {
    "id": 417,
    "name": "Pachirisu"
  },
  {
    "id": 418,
    "name": "Buizel"
  },
  {
    "id": 419,
    "name": "Floatzel"
  },
  {
    "id": 420,
    "name": "Cherubi"
  },
  {
    "id": 421,
    "name": "Cherrim"
  },
  {
    "id": 422,
    "name": "Shellos"
  },
  {
    "id": 423,
    "name": "Gastrodon"
  },
  {
    "id": 424,
    "name": "Ambipom"
  },
  {
    "id": 425,
    "name": "Drifloon"
  },
  {
    "id": 426,
    "name": "Drifblim"
  },
  {
    "id": 427,
    "name": "Buneary"
  },
  {
    "id": 428,
    "name": "Lopunny"
  },
  {
    "id": 429,
    "name": "Mismagius"
  },
  {
    "id": 430,
    "name": "Honchkrow"
  },
  {
    "id": 431,
    "name": "Glameow"
  },
  {
    "id": 432,
    "name": "Purugly"
  },
  {
    "id": 433,
    "name": "Chingling"
  },
  {
    "id": 434,
    "name": "Stunky"
  },
  {
    "id": 435,
    "name": "Skuntank"
  },
  {
    "id": 436,
    "name": "Bronzor"
  },
  {
    "id": 437,
    "name": "Bronzong"
  },
  {
    "id": 438,
    "name": "Bonsly"
  },
  {
    "id": 439,
    "name": "Mime Jr"
  },
  {
    "id": 440,
    "name": "Happiny"
  },
  {
    "id": 441,
    "name": "Chatot"
  },
  {
    "id": 442,
    "name": "Spiritomb"
  },
  {
    "id": 443,
    "name": "Gible"
  },
  {
    "id": 444,
    "name": "Gabite"
  },
  {
    "id": 445,
    "name": "Garchomp"
  },
  {
    "id": 446,
    "name": "Munchlax"
  },
  {
    "id": 447,
    "name": "Riolu"
  },
  {
    "id": 448,
    "name": "Lucario"
  },
  {
    "id": 449,
    "name": "Hippopotas"
  },
  {
    "id": 450,
    "name": "Hippowdon"
  },
  {
    "id": 451,
    "name": "Skorupi"
  },
  {
    "id": 452,
    "name": "Drapion"
  },
  {
    "id": 453,
    "name": "Croagunk"
  },
  {
    "id": 454,
    "name": "Toxicroak"
  },
  {
    "id": 455,
    "name": "Carnivine"
  },
  {
    "id": 456,
    "name": "Finneon"
  },
  {
    "id": 457,
    "name": "Lumineon"
  },
  {
    "id": 458,
    "name": "Mantyke"
  },
  {
    "id": 459,
    "name": "Snover"
  },
  {
    "id": 460,
    "name": "Abomasnow"
  },
  {
    "id": 461,
    "name": "Weavile"
  },
  {
    "id": 462,
    "name": "Magnezone"
  },
  {
    "id": 463,
    "name": "Lickilicky"
  },
  {
    "id": 464,
    "name": "Rhyperior"
  },
  {
    "id": 465,
    "name": "Tangrowth"
  },
  {
    "id": 466,
    "name": "Electivire"
  },
  {
    "id": 467,
    "name": "Magmortar"
  },
  {
    "id": 468,
    "name": "Togekiss"
  },
  {
    "id": 469,
    "name": "Yanmega"
  },
  {
    "id": 470,
    "name": "Leafeon"
  },
  {
    "id": 471,
    "name": "Glaceon"
  },
  {
    "id": 472,
    "name": "Gliscor"
  },
  {
    "id": 473,
    "name": "Mamoswine"
  },
  {
    "id": 474,
    "name": "Porygon Z"
  },
  {
    "id": 475,
    "name": "Gallade"
  },
  {
    "id": 476,
    "name": "Probopass"
  },
  {
    "id": 477,
    "name": "Dusknoir"
  },
  {
    "id": 478,
    "name": "Froslass"
  },
  {
    "id": 479,
    "name": "Rotom"
  },
  {
    "id": 480,
    "name": "Uxie"
  },
  {
    "id": 481,
    "name": "Mesprit"
  },
  {
    "id": 482,
    "name": "Azelf"
  },
  {
    "id": 483,
    "name": "Dialga"
  },
  {
    "id": 484,
    "name": "Palkia"
  },
  {
    "id": 485,
    "name": "Heatran"
  },
  {
    "id": 486,
    "name": "Regigigas"
  },
  {
    "id": 487,
    "name": "Giratina"
  },
  {
    "id": 488,
    "name": "Cresselia"
  },
  {
    "id": 491,
    "name": "Darkrai"
  },
  {
    "id": 495,
    "name": "Snivy"
  },
  {
    "id": 496,
    "name": "Servine"
  },
  {
    "id": 497,
    "name": "Serperior"
  },
  {
    "id": 498,
    "name": "Tepig"
  },
  {
    "id": 499,
    "name": "Pignite"
  },
  {
    "id": 500,
    "name": "Emboar"
  },
  {
    "id": 501,
    "name": "Oshawott"
  },
  {
    "id": 502,
    "name": "Dewott"
  },
  {
    "id": 503,
    "name": "Samurott"
  },
  {
    "id": 504,
    "name": "Patrat"
  },
  {
    "id": 505,
    "name": "Watchog"
  },
  {
    "id": 506,
    "name": "Lillipup"
  },
  {
    "id": 507,
    "name": "Herdier"
  },
  {
    "id": 508,
    "name": "Stoutland"
  },
  {
    "id": 509,
    "name": "Purrloin"
  },
  {
    "id": 510,
    "name": "Liepard"
  },
  {
    "id": 511,
    "name": "Pansage"
  },
  {
    "id": 512,
    "name": "Simisage"
  },
  {
    "id": 513,
    "name": "Pansear"
  },
  {
    "id": 514,
    "name": "Simisear"
  },
  {
    "id": 515,
    "name": "Panpour"
  },
  {
    "id": 516,
    "name": "Simipour"
  },
  {
    "id": 519,
    "name": "Pidove"
  },
  {
    "id": 520,
    "name": "Tranquill"
  },
  {
    "id": 521,
    "name": "Unfezant"
  },
  {
    "id": 522,
    "name": "Blitzle"
  },
  {
    "id": 523,
    "name": "Zebstrika"
  },
  {
    "id": 529,
    "name": "Drilbur"
  },
  {
    "id": 530,
    "name": "Excadrill"
  },
  {
    "id": 562,
    "name": "Yamask"
  },
  {
    "id": 563,
    "name": "Cofagrigus"
  },
  {
    "id": 590,
    "name": "Foongus"
  },
  {
    "id": 591,
    "name": "Amoonguss"
  },
  {
    "id": 597,
    "name": "Ferroseed"
  },
  {
    "id": 598,
    "name": "Ferrothorn"
  },
  {
    "id": 599,
    "name": "Klink"
  },
  {
    "id": 600,
    "name": "Klang"
  },
  {
    "id": 601,
    "name": "Klinklang"
  },
  {
    "id": 607,
    "name": "Litwick"
  },
  {
    "id": 608,
    "name": "Lampent"
  },
  {
    "id": 609,
    "name": "Chandelure"
  },
  {
    "id": 613,
    "name": "Cubchoo"
  },
  {
    "id": 614,
    "name": "Beartic"
  },
  {
    "id": 615,
    "name": "Cryogonal"
  },
  {
    "id": 622,
    "name": "Golett"
  },
  {
    "id": 623,
    "name": "Golurk"
  },
  {
    "id": 631,
    "name": "Heatmor"
  },
  {
    "id": 632,
    "name": "Durant"
  },
  {
    "id": 633,
    "name": "Deino"
  },
  {
    "id": 634,
    "name": "Zweilous"
  },
  {
    "id": 635,
    "name": "Hydreigon"
  },
  {
    "id": 638,
    "name": "Cobalion"
  },
  {
    "id": 639,
    "name": "Terrakion"
  },
  {
    "id": 640,
    "name": "Virizion"
  }
]

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1])
    }
  } 
  alert('Query Variable ' + variable + ' not found');
}