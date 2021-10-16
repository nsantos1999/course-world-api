import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/services/user.service';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userService.findByEmail(email);

    if (user.password !== password) {
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
