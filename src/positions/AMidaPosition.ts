import { MidaAssetPair } from "#assets/MidaAssetPair";
import { AMidaBrokerAccount } from "#brokers/AMidaBrokerAccount";
import { MidaCurrency } from "#currencies/MidaCurrency";
import { MidaPositionStatusType } from "#positions/MidaPositionStatusType";
import { MidaPositionType } from "#positions/MidaPositionType";

// Represents a position.
export abstract class AMidaPosition {
    // Represents the position id.
    private readonly _id: string;

    // Represents the position asset pair.
    private readonly _assetPair: MidaAssetPair;

    // Represents the position type.
    private readonly _type: MidaPositionType;

    // Represents the position lots.
    private readonly _lots: number;

    // Represents the position account.
    private readonly _account: AMidaBrokerAccount;

    protected constructor (id: string, assetPair: MidaAssetPair, type: MidaPositionType, lots: number, account: AMidaBrokerAccount) {
        this._id = id;
        this._assetPair = assetPair;
        this._type = type;
        this._lots = lots;
        this._account = account;
    }

    public get id (): string {
        return this._id;
    }

    public get assetPair (): MidaAssetPair {
        return this._assetPair;
    }

    public get type (): MidaPositionType {
        return this._type;
    }

    public get lots (): number {
        return this._lots;
    }

    public get account (): AMidaBrokerAccount {
        return this._account;
    }

    public get symbol (): string {
        return this.assetPair.symbol;
    }

    public abstract async getStatus (): Promise<MidaPositionStatusType>;

    public abstract async getLots (): Promise<number>;

    public abstract async getOpenTime (): Promise<Date | undefined>;

    public abstract async getCloseTime (): Promise<Date | undefined>;

    public abstract async getOpenPrice (): Promise<number | undefined>;

    public abstract async getClosePrice (): Promise<number | undefined>;

    public abstract async getStopLoss (): Promise<number | undefined>;

    public abstract async setStopLoss (stopLoss: number): Promise<void>;
    
    public abstract async getTakeProfit (): Promise<number | undefined>;

    public abstract async setTakeProfit (takeProfit: number): Promise<void>;

    public abstract async getSellStop (): Promise<number | undefined>;

    public abstract async setSellStop (sellStop: number): Promise<void>;

    public abstract async getSellLimit (): Promise<number | undefined>;

    public abstract async setSellLimit (sellLimit: number): Promise<void>;

    public abstract async getBuyStop (): Promise<number | undefined>;

    public abstract async setBuyStop (buyStop: number): Promise<void>;

    public abstract async getBuyLimit (): Promise<number | undefined>;

    public abstract async setBuyLimit (buyLimit: number): Promise<void>;

    public abstract async getProfit (): Promise<number>;

    public abstract async getCommision (): Promise<number>;

    public abstract async getSwap (): Promise<number>;

    public abstract async getCurrency (): Promise<MidaCurrency>;

    public abstract async getLeverage (): Promise<undefined>;

    public abstract async cancel (): Promise<void>;
    
    public abstract async close (): Promise<void>;

    public async isMarketOpen (): Promise<boolean> {
        return this._account.isMarketOpen(this.symbol);
    }
}
