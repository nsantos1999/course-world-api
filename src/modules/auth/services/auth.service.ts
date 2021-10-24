import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/services/user.service';
import { PasswordEncryptionService } from 'src/shared/modules/password/services/password-encryption.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('PasswordEncryptionService')
    private readonly passwordEncryptionService: PasswordEncryptionService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    console.log(loginDto);
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    const passwordMatch = await this.passwordEncryptionService.validatePassword(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Email or password is invalid');
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
