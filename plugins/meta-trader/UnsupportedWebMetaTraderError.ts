import { MidaError } from "#errors/MidaError";

export class UnsupportedWebMetaTraderError extends MidaError {
    private readonly _server: string;

    public constructor (server: string) {
        super(`The server "${server}" doesn't support Web MetaTrader.`);

        this._server = server;
    }

    public get server (): string {
        return this._server;
    }
}