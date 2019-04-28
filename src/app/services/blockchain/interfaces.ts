
export interface Blockchain {
    getBalance(address: string): Promise<number> ;
    fullRecovery(recoveryHashes: string[]): Promise<string>;
    deployContract(address: string, privateKey: string): Promise<string>;
    transferAssets(to: string, amount: number): Promise<boolean>;
}
