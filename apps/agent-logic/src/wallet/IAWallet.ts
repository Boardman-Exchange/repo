import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IAWallet extends ICommons {
  CreateWallet(data: Map<string, any>): Promise<BMResponse>;
  WithdrawToBank(data: Map<string, any>): Promise<BMResponse>;
  WithdrawToCrypto(data: Map<string, any>): Promise<BMResponse>;
  GetBalance(data: Map<string, any>): Promise<BMResponse>;
  UpdateBalance(data: Map<string, any>): Promise<BMResponse>;
}
