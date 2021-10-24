export interface PasswordEncryptionService {
  encriptPassword(password: string): Promise<string>;
  validatePassword(
    password: string,
    passwordEncrypted: string,
  ): Promise<boolean>;
}
