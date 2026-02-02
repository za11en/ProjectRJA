import { IntelEvent } from '../types';
import { ProphecyEngine } from '../services/prophecyEngine';

export const INITIAL_EVENTS: IntelEvent[] = [
  ProphecyEngine.mockIngest(
    "Airstrikes reported near Damascus International Airport targeting weapons depots.",
    "MILITARY_CONFLICT",
    0
  ),
  ProphecyEngine.mockIngest(
    "Unprecedented drying of the Euphrates riverbed reveals ancient structures.",
    "NATURAL_DISASTER",
    4 // Turkeyish
  ),
  ProphecyEngine.mockIngest(
    "Coalition forces from North mobilize near Golan Heights border.",
    "MILITARY_CONFLICT",
    0
  ),
  ProphecyEngine.mockIngest(
    "Global leaders convene to discuss unified digital currency standards.",
    "POLITICAL_UNREST",
    2
  ),
  ProphecyEngine.mockIngest(
    "Seismic activity detected near the Temple Mount, engineers investigating structural integrity.",
    "SYSTEM_ALERT",
    1
  )
];
