class Amazon {
  constructor(userName, email, addrs) {
    this.userName = userName;
    this.email = email;
    this.addrs = addrs;
  }

  getOrders() {}
  getAddresses() {
    console.log(this.addrs);
  }
  getProfile() {
    console.log(this.userName, this.email);
  }
}

const user = new Amazon("harsha", "sample@sample.com", "India");
user.getProfile();

//---------------------------------

class Youtube {
  constructor(channelName, email, category) {
    this.channelName = channelName;
    this.email = email;
    this.category = category;
  }

  getChannelDetails() {
    console.log("inside");
    console.log(this.channelName, this.email, this.category);
  }
}

const channel = new Youtube("SportsTube", "sample@youtube.com", "Sports");

channel.getChannelDetails();
