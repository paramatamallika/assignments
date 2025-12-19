import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Mallika";
  const age = 21;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
