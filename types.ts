export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type EventType = 'MILITARY_CONFLICT' | 'NATURAL_DISASTER' | 'POLITICAL_UNREST' | 'SYSTEM_ALERT';

export interface Location {
  lat: number;
  long: number;
  name: string;
}

export interface ProphecyMatch {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  theme: string;
}

export interface IntelEvent {
  id: string;
  headline: string;
  summary?: string;
  timestamp: string; // ISO string
  type: EventType;
  severity: Severity;
  location: Location;
  source: string;
  prophecyMatch?: ProphecyMatch;
  verificationScore: number; // 0.0 to 1.0
}

export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
  WAR_ROOM = 'WAR_ROOM',
  INTEL_ARCHIVE = 'INTEL_ARCHIVE',
  BIBLE_STUDY = 'BIBLE_STUDY',
  PROFILE = 'PROFILE',
  CHECKOUT = 'CHECKOUT'
}

export interface User {
  id: string;
  callsign: string;
  rank: 'OBSERVER' | 'WATCHMAN' | 'COMMANDER';
}
