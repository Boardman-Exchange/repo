import ICommons from '@app/boardman-commons/ICommons';
import BMResponse from '@app/boardman-commons/IResponse';

export interface IWallet extends ICommons {
  DepositWithCard(data: Map<string, any>): Promise<BMResponse>;
  DepositWithCrypto(data: Map<string, any>): Promise<BMResponse>;
  WithdrawToBank(data: Map<string, any>): Promise<BMResponse>;
  WithdrawToCrypto(data: Map<string, any>): Promise<BMResponse>;
  PayWithBalance(data: Map<string, any>): Promise<BMResponse>;
  PayWithCard(data: Map<string, any>): Promise<BMResponse>;
  PayWithCrypto(data: Map<string, any>): Promise<BMResponse>;
  GetBalance(data: Map<string, any>): Promise<BMResponse>;
  UpdateBalance(data: Map<string, any>): Promise<BMResponse>;
}
