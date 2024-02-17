import BMResponse from '@app/boardman-commons/IResponse';

export interface IAuth {
  SignUpWithEmail(data: Map<string, any>): Promise<BMResponse>;
  SignUpWithTwitch(data: Map<string, any>): Promise<BMResponse>;
  SignUpWithDiscord(data: Map<string, any>): Promise<BMResponse>;
  SignInWithEmail(data: Map<string, any>): Promise<BMResponse>;
  SignInWithTwitch(data: Map<string, any>): Promise<BMResponse>;
  SignInWithDiscord(data: Map<string, any>): Promise<BMResponse>;
  ResetPassword(data: Map<string, any>): Promise<BMResponse>;
  SignOut(data: Map<string, any>): Promise<BMResponse>;
}
