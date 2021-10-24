import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // handleRequest(_: any, user: any) {
  //   // don't throw 401 error when unauthenticated
  //   return user;
  // }
}
