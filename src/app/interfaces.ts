
export interface Blockchain {
    getBalance(address: string): number;
    recoveryAccount(source: string, destination: string): boolean;
    deployContract(address: string): boolean;
    transferAssets(destination: string, count: number): boolean;
}
