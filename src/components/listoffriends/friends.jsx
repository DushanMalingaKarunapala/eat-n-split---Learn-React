import { Friend } from "./friend";
export const Friends = ({ friends, onSelectionfriend, selectedFriend }) => {
  // const friends_list = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectionfriend={onSelectionfriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};
