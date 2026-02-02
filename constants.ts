
import { ProphecyMatch } from './types';

export const APP_NAME = "PROPHECY SCANNER";
export const APP_VERSION = "v1.0.5-LIVE";

export const KEYWORD_TRIGGERS: Record<string, ProphecyMatch> = {
  'damascus': {
    book: 'Isaiah',
    chapter: 17,
    verse: 1,
    text: 'Behold, Damascus is taken away from being a city, and it shall be a ruinous heap.',
    theme: 'Destruction of Damascus'
  },
  'gog': {
    book: 'Ezekiel',
    chapter: 38,
    verse: 2,
    text: 'Son of man, set thy face against Gog, the land of Magog, the chief prince of Meshech and Tubal, and prophesy against him.',
    theme: 'Gog/Magog Coalition'
  },
  'euphrates': {
    book: 'Revelation',
    chapter: 16,
    verse: 12,
    text: 'And the sixth angel poured out his vial upon the great river Euphrates; and the water thereof was dried up.',
    theme: 'Kings of the East'
  },
  'temple': {
    book: '2 Thessalonians',
    chapter: 2,
    verse: 4,
    text: 'Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God.',
    theme: 'Third Temple'
  },
  'pestilence': {
    book: 'Matthew',
    chapter: 24,
    verse: 7,
    text: 'For nation shall rise against nation, and kingdom against kingdom: and there shall be famines, and pestilences, and earthquakes, in divers places.',
    theme: 'Birth Pains'
  }
};

export const SAMPLE_LOCATIONS = [
  { lat: 33.513, long: 36.276, name: 'Damascus, SYR' },
  { lat: 31.768, long: 35.213, name: 'Jerusalem, ISR' },
  { lat: 55.755, long: 37.617, name: 'Moscow, RUS' },
  { lat: 35.689, long: 51.389, name: 'Tehran, IRN' },
  { lat: 40.712, long: -74.006, name: 'New York, USA' },
  { lat: 51.507, long: -0.127, name: 'London, UK' },
  { lat: 35.676, long: 139.650, name: 'Tokyo, JPN' },
  { lat: -33.868, long: 151.209, name: 'Sydney, AUS' },
  { lat: -23.550, long: -46.633, name: 'São Paulo, BRA' },
  { lat: 30.044, long: 31.235, name: 'Cairo, EGY' },
  { lat: 39.904, long: 116.407, name: 'Beijing, CHN' },
  { lat: 48.856, long: 2.352, name: 'Paris, FRA' },
  { lat: 52.520, long: 13.405, name: 'Berlin, DEU' },
  { lat: 19.432, long: -99.133, name: 'Mexico City, MEX' },
  { lat: 28.613, long: 77.209, name: 'New Delhi, IND' },
  { lat: -1.292, long: 36.821, name: 'Nairobi, KEN' },
  { lat: 64.146, long: -21.942, name: 'Reykjavík, ISL' },
  { lat: 37.566, long: 126.978, name: 'Seoul, KOR' },
  { lat: 25.204, long: 55.270, name: 'Dubai, UAE' },
  { lat: 41.008, long: 28.978, name: 'Istanbul, TUR' },
  { lat: 32.776, long: -96.797, name: 'Dallas, USA' }
];
