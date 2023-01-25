export class GetAllUsersDto {
  email: string;
  name: string;
  phone: string;
  address: string[];
  role: string;

  constructor() {
    this.email = '';
    this.name = '';
    this.phone = '';
    this.address = [''];
    this.role = '';
  }
}
