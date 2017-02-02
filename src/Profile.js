﻿import Request from './Request';

class Profile {
  constructor(id, tokenFn) {
    this.id = id;
    this.request = new Request(tokenFn);
  }

  profile() {
    const idVar = this.id || 'me';
    return this.request.json(`/api/profiles/${idVar}`);
  }

  followers() {
    return this.request.json(`/api/profiles/${this.id}/followers`);
  }

  followees() {
    return this.request.json(`/api/profiles/${this.id}/followees`);
  }
}

export default Profile;
