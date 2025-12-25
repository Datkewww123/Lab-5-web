import MouseTracker from "./MouseTracker";
import UncontrolledLogin from "./UncontrolledLogin";
import PostFetcher from "./PostFetcher";
import ControlledSignup from "./ControlledSignup";
import Counter from "./Counter"; // useLocalStorage

function Home() {
  return (
    <div>
      <h1>Lab 4 – React Hooks</h1>

      <MouseTracker />
      <UncontrolledLogin />
      <PostFetcher />
      <ControlledSignup />
      <Counter />
    </div>
  );
}

export default Home;
