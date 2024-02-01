import "./App.css";
import { Friends } from "./components/listoffriends/friends";
import { AddfriendsForm } from "./components/add-friend/addfriends";
import { Button } from "./components/listoffriends/button";
import { SplitBill } from "./components/form/split-bill-form";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addfriendformshow, setaddfriendformshow] = useState(false);

  const [friends, setFriends] = useState(initialFriends);

  const [selectedfriend, setselectedfriend] = useState(null);

  function addfriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleformshow() {
    setaddfriendformshow((show) => !show);
  }

  function handleSelection(friend) {
    // setselectedfriend(friend);
    setselectedfriend((currselected) =>
      currselected?.id === friend.id ? null : friend
    );
    setaddfriendformshow(false);
  }

  function handlesplitbill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedfriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    selectedfriend(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends
            friends={friends}
            onSelectionfriend={handleSelection}
            selectedFriend={selectedfriend}
          />
          {addfriendformshow && <AddfriendsForm onaddfriend={addfriend} />}

          <Button onClick={handleformshow}>
            {addfriendformshow ? "Close" : "Add friend"}
          </Button>
        </div>
        {selectedfriend && (
          <SplitBill
            selectedFriend={selectedfriend}
            onsplitbill={handlesplitbill}
          />
        )}
      </div>
    </>
  );
}

export default App;
