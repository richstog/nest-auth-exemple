import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './jwt-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'cursedofnest',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
