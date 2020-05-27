import React, { useState } from "react";

function LikeButton() {
  const [liked, setLike] = useState(false);

  console.log(LikeButton);

  if (liked) {
    return 'You liked this.';
  }
  console.log(2);

  const handleClick = () => setLike(true);

  console.log(3);

  return (
    <button onClick={handleClick}>Like</button>
  );
}

export default LikeButton
