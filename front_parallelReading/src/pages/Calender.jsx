import { useNavigate } from "react-router-dom";

const Calender = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/Today_post");
  };

  return (
    <>
      <h1>calender</h1>
      <button onClick={onClick}>POST Today 📖</button>
    </>
  );
};

export default Calender;
