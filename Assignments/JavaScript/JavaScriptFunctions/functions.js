let isFollowing = true;
function follow(follow) {
  if (isFollowing == false) {
    console.log("Not Following, Please select to follow");
  } else {
    console.log("User is following you");
  }
}

function unFollow(follow) {
  if (isFollowing == true) {
    console.log("User is already following, select to un follow");
  } else {
    console.log("User is not following you");
  }
}

follow(isFollowing);
unFollow(isFollowing);

//------------------------------

let product = "Shoes";

let addToCart = (prd) => {
  console.log(prd + "added to cart");
};

let addToWishList = (prd) => {
  console.log(prd + "Added to wishlist");
};

addToCart(product);
addToWishList(product);
