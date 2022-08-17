import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let current = new Date(props.date * 1000);
  let weekday = days[current.getDay()];
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let month = current.getMonth() + 1;
  let day = current.getDate();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let date = `${weekday} ${month}/${day} ${hours}:${minutes}`;
  console.log(props.date);
  console.log(current);
  console.log(date);

  return (
    <div>
      <h5 className="text-white pt-4">{date}</h5>
    </div>
  );
}
