import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="profile-info">
        {user?.picture && <img src={user.picture} alt="user picture" />}
        <h4>Welcome, {user.name}</h4>
      </div>
    )
  );
};

export default Profile;
