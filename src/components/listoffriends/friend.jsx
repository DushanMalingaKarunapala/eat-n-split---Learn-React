import { Button } from "./button";

export const Friend = ({ friend, onSelectionfriend, selectedFriend }) => {
  const isselected = selectedFriend?.id === friend.id;

  return (
    <li className={isselected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelectionfriend(friend)}>
        {isselected ? "Close" : "Select"}
      </Button>
    </li>
  );
};
