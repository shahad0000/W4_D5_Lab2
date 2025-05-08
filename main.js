let images = [
  "https://images.pexels.com/photos/13422162/pexels-photo-13422162.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/30921109/pexels-photo-30921109/free-photo-of-majestic-icelandic-waterfall-in-scenic-landscape.png?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/15843081/pexels-photo-15843081/free-photo-of-photo-of-a-branch-with-magnolia-flowers.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  "https://images.pexels.com/photos/31301003/pexels-photo-31301003/free-photo-of-grey-squirrel-on-fence-in-scottish-garden.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
];

let chImgBtn = document.getElementById("ch-img-btn");
let img = document.getElementById("img");

img.onclick = () => {
    img.src = images[Math.floor(Math.random() * 4)]
}


