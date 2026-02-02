import { IntelEvent, EventType, Severity } from '../types';
import { KEYWORD_TRIGGERS, SAMPLE_LOCATIONS } from '../constants';

export class ProphecyEngine {
  
  static generateEventId(): string {
    return `EVT-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  }

  static analyzeText(text: string): { match: any | undefined, severity: Severity } {
    const lowerText = text.toLowerCase();
    let match = undefined;
    let severity: Severity = 'LOW';

    // Simple keyword matching algorithm
    for (const key in KEYWORD_TRIGGERS) {
      if (lowerText.includes(key)) {
        match = KEYWORD_TRIGGERS[key];
        severity = 'HIGH'; // Prophecy match elevates severity
        if (key === 'damascus' || key === 'gog' || key === 'temple') {
          severity = 'CRITICAL';
        }
        break; // Return first strong match
      }
    }

    // Heuristic for severity based on non-prophecy keywords
    if (severity !== 'CRITICAL') {
      if (lowerText.includes('war') || lowerText.includes('nuclear') || lowerText.includes('dead')) {
        severity = 'HIGH';
      } else if (lowerText.includes('protest') || lowerText.includes('crisis')) {
        severity = 'MEDIUM';
      }
    }

    return { match, severity };
  }

  static mockIngest(headline: string, type: EventType, locationIdx: number): IntelEvent {
    const analysis = this.analyzeText(headline);
    const location = SAMPLE_LOCATIONS[locationIdx % SAMPLE_LOCATIONS.length];

    return {
      id: this.generateEventId(),
      headline: headline,
      timestamp: new Date().toISOString(),
      type: type,
      severity: analysis.severity,
      location: location,
      source: "REUTERS_WIRE_SECURE",
      prophecyMatch: analysis.match,
      verificationScore: 0.85 + (Math.random() * 0.14)
    };
  }
}
