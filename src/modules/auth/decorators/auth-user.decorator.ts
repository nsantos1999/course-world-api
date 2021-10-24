import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * retrieve the current user with a decorator
 * example of a controller method:
 * @Post()
 * someMethod(@AuthUser() user: JwtPayload) {
 *   // do something with the user
 * }
 */
export const AuthUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
