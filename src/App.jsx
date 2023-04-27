import { useState } from "react";
import star from "./assets/images/icon-arrow.svg";
import { useForm } from "react-hook-form";

const App = () => {
  const [day, setDay] = useState("");
  const [dayValidation, setDayValidation] = useState(false);

  const [month, setMonth] = useState("");
  const [montValidation, setMonthValidation] = useState(false);

  const [year, setYear] = useState("");
  const [YearValidation, setYearValidation] = useState(false);

  const handleDayValidation = () => {
    if (day < 31 && month === 4) {
      setDayValidation(true);
      return day - 30;
    }
  };
  const handleMonthValidation = () => {
    if (month >= 13) {
      return <span className="error-message">Must be a valid month</span>;
    }
    setMonthValidation(true);
  };

  const handleYearValidation = () => {
    if (year < 2023 && year > 1900) {
      setYearValidation(true);
      return year - 2023;
    }
  };

  return (
    <div className="App">
      <main className="bg-white p-11 rounded-t-xl rounded-bl-xl rounded-br-[150px]">
        {/* Top Part */}
        <form>
          <div className="flex gap-6 pr-32 ">
            <div>
              <label className="label" htmlFor="day">
                Day
              </label>
              <input
                max={31}
                placeholder="DD"
                className="input"
                type="day"
                name="day"
                id="day"
                defaultValue={"DD"}
                required
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
              {day > 31 ? (
                <span className="error-message">Must be a valid day</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="label" htmlFor="">
                Month
              </label>
              <input
                placeholder="MM"
                className="input"
                type="month"
                name="month"
                id="day"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              {month >= 13 ? (
                <span className="error-message">Must be a valid day</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="label" htmlFor="">
                Year
              </label>
              <input
                placeholder="YYYY"
                className="input"
                type="year"
                name="year"
                id="day"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              {year > 2023 ? (
                <span className="error-message">Must be a valid year</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>

        {/* Line Part */}
        <div className="py-10 relative">
          <hr />
          <button className="absolute hover:bg-black flex w-16 h-16 bg-primaryPurple p-4 text-center rounded-full top-[50%] right-[0] transform -translate-x-0 -translate-y-1/2 ">
            <img src={star} alt="star" />
          </button>
        </div>

        {/* Bottom Part */}
        <div className="italic font-extrabold text-8xl grid gap-2">
          <p>
            <span className="text-primaryPurple">-- </span>
            years
          </p>
          <p>
            <span className="text-primaryPurple">-- </span>
            months
          </p>
          <p>
            <span className="text-primaryPurple">-- </span>
            days
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
