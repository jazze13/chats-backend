import { Injectable } from '@nestjs/common';

export interface User {
  firstName: string;
  lastName?: string;
  id: string;
  isActive: boolean;
  isAdmin: boolean;
  email: string;
  username: string;
}

@Injectable()
export class AuthService {
  private readonly users = [];
}
