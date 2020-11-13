export enum MidaAssetPairPeriodType {
    // 1 second.
    S1 = 1,

    // 60 seconds = 1 minute.
    M1 = 60,

    // 300 seconds = 5 minutes.
    M5 = 300,

    // 900 seconds = 15 minutes.
    M15 = 900,

    // 1800 seconds = 30 minutes.
    M30 = 1800,

    // 3600 seconds = 1 hour.
    H1 = 3600,

    // 14400 seconds = 4 hours.
    H4 = 14400,

    // 86400 seconds = 1 day.
    D1 = 86400,

    // 604800 seconds = 1 week.
    W1 = 604800,
}