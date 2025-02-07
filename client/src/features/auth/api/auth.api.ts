import axios from 'axios';
import { AuthTokens, LoginCredentials, authTokensSchema } from 'common';

export class AuthAPI {
  static async login(credentials: LoginCredentials): Promise<AuthTokens> {
    const response = await axios.post('/api/auth/login', credentials);
    return authTokensSchema.parseAsync(response.data);
  }
}
