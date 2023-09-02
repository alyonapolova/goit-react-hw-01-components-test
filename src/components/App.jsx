import { Profile } from "./Profile/Profile";
import user from "../user.json";

export const App = () => {
  return (
    <>
      1 - Profile in social media
      <Profile user={user} />2 - Statistic section
    </>
  );
};
