import { useState } from "react";
import { Button } from "../listoffriends/button";

export const AddfriendsForm = ({ onaddfriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onaddfriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="from-add-friend" onSubmit={handlesubmit}>
      <label>Friend name</label>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)}>
        {}
      </input>

      <label>Image URL</label>
      <input
        value={image}
        type="link"
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
};
