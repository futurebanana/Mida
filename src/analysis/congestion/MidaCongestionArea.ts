import { MidaForexPairPeriod } from "#forex/MidaForexPairPeriod";

// Represents a congestion area.
export type MidaCongestionArea = {
    // Represents the periods.
    periods: MidaForexPairPeriod[];

    // Represents the average price.
    averagePrice: number;

    // Represents the support price.
    supportPrice: number;

    // Represents the resistance price.
    resistancePrice: number;
};

export function calculateCongestionAreaForce (congestion: MidaCongestionArea): number {
    throw new Error();
}