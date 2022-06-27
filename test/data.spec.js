import { 
  filterDataGender, 
  filterDataSport,
  noRepeatedData,
  noRepeatedSports,
  noRepeatedCountry,
  filterDataCountry
  //computeStats
} from '../src/data.js';

const Brasil2016 =[
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "height": "165",
    "weight": "49",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "noc": "AZE",
    "age": 21,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "height": "182",
    "weight": "86",
    "sport": "Handball",
    "team": "France",
    "noc": "FRA",
    "age": 31,
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Chantal Achterberg",
    "gender": "F",
    "height": "172",
    "weight": "72",
    "sport": "Rowing",
    "team": "Netherlands",
    "noc": "NED",
    "age": 31,
    "event": "Rowing Women's Quadruple Sculls",
    "medal": "Silver"
  },
  {
    "name": "Michael Fred Phelps, II",
    "gender": "M",
    "height": "193",
    "weight": "91",
    "sport": "Swimming",
    "team": "United States",
    "noc": "USA",
    "age": 31,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Gold"
  },
  {
    "name": "Michael Fred Phelps, II",
    "gender": "M",
    "height": "193",
    "weight": "91",
    "sport": "Swimming",
    "team": "United States",
    "noc": "USA",
    "age": 31,
    "event": "Swimming Men's 4 x 200 metres Freestyle Relay",
    "medal": "Gold"
  }
]   

// TEST: NO REPETIR DATOS

describe('noRepeatedData', () => {
  it('is a function', () => {
    expect(typeof noRepeatedData).toBe('function');
    expect(typeof noRepeatedSports).toBe('function');
    expect(typeof noRepeatedCountry).toBe('function');
  }); 
 
  it('returns `noRepeatedData`', () => {
    expect(noRepeatedData(Brasil2016)).toHaveLength(4);
  });
  //console.log(Brasil2016)
  it('returns `noRepeatedSports`', () => {
    expect(noRepeatedSports(Brasil2016)).toHaveLength(4);
  });
 // console.log(Brasil2016)
  it('returns `noRepeatedCountry`', () => {
    expect(noRepeatedCountry(Brasil2016)).toHaveLength(4);
  });


});

// TEST: FILTROS
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterDataGender).toBe('function');
    expect(typeof filterDataSport).toBe('function');
    expect(typeof filterDataCountry).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(filterDataGender(Brasil2016,'F')).toEqual([Brasil2016[0],Brasil2016[2]]);
  });
  it('returns `filterData`', () => {
    expect(filterDataSport(Brasil2016,'Handball')).toEqual([Brasil2016[1]]);
  });
  it('returns `filterData`', () => {
    expect(filterDataCountry(Brasil2016,'United States')).toEqual([Brasil2016[3],Brasil2016[4]]);
  });
})

// TEST: ORDENAR DATOS

// TEST: COMPUTE STATS



