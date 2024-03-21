// Simulated data for demonstration purposes
const facebookData = {
  followers: 1000,
  likes: 500,
  comments: 200,
  following: 300,
  posts: 50,
};

const instagramData = {
  followers: 2000,
  likes: 1000,
  comments: 400,
  following: 600,
  posts: 100,
};

const twitterData = {
  followers: 1500,
  likes: 700,
  comments: 300,
  following: 400,
  tweets: 120,
};

const youtubeData = {
  subscribers: 5000,
  likes: 2000,
  comments: 800,
  views: 10000,
  videos: 50,
};

// Function to update the dashboard with data
function updateDashboard() {
  document.getElementById("fbFollowers").textContent = facebookData.followers;
  document.getElementById("fbLikes").textContent = facebookData.likes;
  document.getElementById("fbComments").textContent = facebookData.comments;
  document.getElementById("fbFollowing").textContent = facebookData.following;
  document.getElementById("fbPosts").textContent = facebookData.posts;

  document.getElementById("igFollowers").textContent = instagramData.followers;
  document.getElementById("igLikes").textContent = instagramData.likes;
  document.getElementById("igComments").textContent = instagramData.comments;
  document.getElementById("igFollowing").textContent = instagramData.following;
  document.getElementById("igPosts").textContent = instagramData.posts;

  document.getElementById("twFollowers").textContent = twitterData.followers;
  document.getElementById("twLikes").textContent = twitterData.likes;
  document.getElementById("twComments").textContent = twitterData.comments;
  document.getElementById("twFollowing").textContent = twitterData.following;
  document.getElementById("twTweets").textContent = twitterData.tweets;

  document.getElementById("ytSubscribers").textContent =
    youtubeData.subscribers;
  document.getElementById("ytLikes").textContent = youtubeData.likes;
  document.getElementById("ytComments").textContent = youtubeData.comments;
  document.getElementById("ytViews").textContent = youtubeData.views;
  document.getElementById("ytVideos").textContent = youtubeData.videos;
}

// Call updateDashboard function when the page loads
window.onload = updateDashboard;

//?  JavaScript for handling dark/light mode switch
const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

modeSwitch.addEventListener("change", function () {
  if (this.checked) {
    // Change to light mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    // Change to dark mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});
function logout() {
  // Clear current session data (e.g., session token) from localStorage
  localStorage.removeItem("sessionData");
  // Redirect to login page
  window.location.href = "../login/login.html";
}
