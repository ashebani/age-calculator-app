import { useState } from "react";
import star from "./assets/images/icon-arrow.svg";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "all" });

  const monthInput = watch("month");
  const dayInput = watch("day");

  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");

  const onSubmit = (data) => {
    const currentDate = new Date();
    let extraDay = 0;
    let extraMonth = 0;

    // Day Logic
    if (currentDate.getDate() - data.day > 0) {
      setDay(currentDate.getDate() - data.day);
    } else {
      setDay(Math.abs(currentDate.getDate() - data.day));
    }

    // Month Logic
    if (currentDate.getMonth() + 1 >= data.month) {
      // check if the current month is bigger than the birth month
      // current month is 4 and birth date is 2
      setMonth(currentDate.getMonth() + 1 - data.month);
    } else {
      // check if the current month is smaller than or equal to the birth month
      // current month is 4 and birth date is 6

      setMonth(12 - Math.abs(currentDate.getMonth() + 1 - data.month));
      extraMonth--;
    }

    // Year Logic
    setYear(currentDate.getFullYear() - data.year + extraMonth);
  };
  // 20 -

  const isEqual = (v) => {
    const dayLogic = Number(v) !== 31;
    const monthLogic = Number(monthInput) !== 4;
    return dayLogic || monthLogic;
  };

  return (
    <div className="App">
      <main className="bg-white m-3 px-6 py-12  md:p-11 rounded-t-2xl rounded-bl-xl md:rounded-br-[150px] rounded-br-[100px] ">
        {/* Top Part */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between md:justify-start gap-3 md:gap-6 ">
            <div>
              <label
                className={`label ${
                  errors.day ? "text-primaryLightRed" : "text-primarySmokeyGray"
                }`}
                htmlFor="day"
              >
                Day
              </label>
              <input
                {...register("day", {
                  required: "Please enter a number",
                  min: {
                    value: 1,
                    message: "Number must be 1 or above",
                  },
                  max: {
                    value: 31,
                    message: "Number must be below 32",
                  },
                  validate: (v) => isEqual(v) || "April only has 30 days",
                })}
                placeholder="DD"
                className={`input ${
                  errors.day ? "focus:border-primaryLightRed" : ""
                }`}
                type="day"
                name="day"
                id="day"
                required
              />

              <span className="error-message">{errors.day?.message}</span>
            </div>
            <div>
              <label
                className={`label ${
                  errors.month
                    ? "text-primaryLightRed"
                    : "text-primarySmokeyGray"
                }`}
                htmlFor="month"
              >
                Month
              </label>
              <input
                {...register("month", {
                  required: "Please enter a number",
                  min: {
                    value: 1,
                    message: "Number must be 1 or above",
                  },
                  max: {
                    value: 12,
                    message: "Number must be below 12",
                  },
                })}
                placeholder="MM"
                className={`input ${
                  errors.month ? "focus:border-primaryLightRed" : ""
                }`}
                type="month"
                name="month"
                id="day"
              />
              <span className="error-message">{errors.month?.message}</span>
            </div>
            <div>
              <label
                className={`label ${
                  errors.year
                    ? "text-primaryLightRed"
                    : "text-primarySmokeyGray"
                }`}
                htmlFor="year"
              >
                Year
              </label>
              <input
                {...register("year", {
                  required: "Please enter a number",
                  min: {
                    value: 1900,
                    message: "Year must not be too old",
                  },
                  max: {
                    value: new Date().getFullYear(),
                    message: "Year must be in the past",
                  },
                })}
                placeholder="YYYY"
                className={`input ${
                  errors.year ? "focus:border-primaryLightRed" : ""
                }`}
                type="year"
                name="year"
                id="day"
              />

              <span className="error-message">{errors.year?.message}</span>
            </div>
          </div>

          {/* Line Part */}
          <div className="md:py-10 py-14 relative">
            <hr />
            <button
              type="submit"
              className="absolute hover:bg-black flex w-16 h-16 bg-primaryPurple p-4 text-center rounded-full top-[50%] md:right-[20px] right-[50%] transform translate-x-1/2 -translate-y-1/2 "
            >
              <img src={star} alt="star" />
            </button>
          </div>
        </form>

        {/* Bottom Part */}
        <div className="italic font-extrabold md:text-8xl text-5xl grid gap-2">
          <p>
            <span className="text-primaryPurple">{year} </span>
            years
          </p>
          <p>
            <span className="text-primaryPurple">{month} </span>
            months
          </p>
          <p>
            <span className="text-primaryPurple">{day} </span>
            days
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
