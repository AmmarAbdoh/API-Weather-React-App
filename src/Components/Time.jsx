import { useState } from "react";
const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth() + 1;
  const day = currentDateTime.getDate();

  return (
    <>
      <p className="time">
        {year}-{month}-{day}
      </p>
    </>
  );
};
export default Time;
