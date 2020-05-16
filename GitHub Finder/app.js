const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userValue = e.target.value;
  if (userValue !== "") {
    github.getUser(userValue).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.clearProfile();
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
