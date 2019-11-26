import { Resource } from 'rest-hooks';

class DistributorResource extends Resource {
  id = undefined;

  isActive = false;

  balance = 0;

  totalCollected = 0;

  picture = undefined;

  registered = undefined;

  firstName = undefined;

  lastName = undefined;

  company = undefined;

  email = undefined;

  phone = undefined;

  address = undefined;

  pk() {
    return this.id;
  }

  static urlRoot = 'https://cup-admin-mock-server.herokuapp.com/distributors';
}

export default DistributorResource;
