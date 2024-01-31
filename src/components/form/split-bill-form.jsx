import { useState } from "react";
import { Button } from "../listoffriends/button";

export const SplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");

  const [userbill, setUserbill] = useState("");

  const friendbill = bill ? bill - userbill : ""; // calculate only if there is a value in bill state

  const [whoispaying, setwhoispaying] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>Your expence</label>
      <input
        type="text"
        value={userbill}
        onChange={(e) =>
          setUserbill(
            Number(e.target.value) > bill ? userbill : Number(e.target.value)
          )
        } //update the userbill state only if entered bill in the text field is less than bill state value
      ></input>

      <label>{selectedFriend.name}'s expence</label>
      <input type="text" disabled value={friendbill}></input>

      <label>who is playing the bill</label>
      <select
        value={whoispaying}
        onChange={(e) => setwhoispaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};
