import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupRepository } from '../user/repositories/user-group.repository';
import { UserRepository } from '../user/repositories/user.repository';
import { UserGroupService } from '../user/services/user-group.service';
import { UserService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';
import { jwtConstants } from './constants/auth.constants';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    UserGroupService,
    UserService,
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
  ],
  // exports: [PassportModule, JwtModule],
})
export class AuthModule {}
