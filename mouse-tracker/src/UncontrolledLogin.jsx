import { useRef } from "react";

function UncontrolledLogin() {

  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(usernameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter username"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default UncontrolledLogin;
