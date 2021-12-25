const RSS_URL = `https://feeds.soundcloud.com/users/soundcloud:users:7235285/sounds.rss`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))