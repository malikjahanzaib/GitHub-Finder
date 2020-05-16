class Github {
  constructor() {
    this.client_id = "5a0e6780cecbb8ef4eb5";
    this.client_secret = "7262761e00c33b4961c021de328ede8515d092af";
    this.repos_count = 5;
    this.repos_sort = "created: asc"; //to be used as a query string in our URL to format our response.
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos,
    };
  }
}
