import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData } from "../redux/slices/smokerSlice";

export default function SmokerSurvey() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    smoker: "",
    brands: [],
    otherBrands: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      brands: checked
        ? [...prev.brands, value]
        : prev.brands.filter((brand) => brand !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Survey Data
  const surveyData = [
    {
      name: "Andre",
      age: 20,
      gender: "Male",
      smoker: "Yes",
      brands: "Marlboro, Camel",
    },
    {
      name: "Bianca",
      age: 21,
      gender: "Female",
      smoker: "No",
      brands: "-",
    },
    {
      name: "Clara",
      age: 19,
      gender: "Female",
      smoker: "Yes",
      brands: "Lucky Strike, Winston, Dunhill",
    },
  ];

  // Redux
  const smokerState = useSelector((state) => {
    return state.smoker;
  });
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <div className=" flex flex-col items-center justify-center">
        <div className="p-4 bg-white rounded-2xl">
          <table className="w-full border-collapse border border-gray-300">
            <caption className="text-lg font-semibold mb-4">
              Survey of Smoker
            </caption>
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Age
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Gender
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Smoker
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Brands Used
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {smokerState.smoker.map((person, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {person.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {person.age}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {person.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {person.smoker}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {person.brands.map((el, idx) => {
                      if (idx == person.brands.length - 1) {
                        return `${el}`;
                      }
                      return `${el}, `;
                    })}
                  </td>
                  <td
                    className="border border-gray-300 px-4 py-2"
                    onClick={() => {
                      console.log("Clicked remove!");
                      dispatch(
                        removeData({
                          name: person.name,
                        })
                      );
                    }}
                  >
                    ❌
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add data button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 border-0 cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add Data
          </button>
        </div>
      </div>

      {/* Modal to add SMoker */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex flex-col justify-center items-center "
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div
            className="bg-white rounded-2xl p-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 className="text-xl font-bold mb-4">Smoker Survey</h1>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="age" className="block mb-1">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>

              <div>
                <label className="block mb-1">Gender</label>
                <div>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleInputChange}
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleInputChange}
                      className="mr-1"
                    />
                    Female
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="smoker" className="block mb-1">
                  Do you smoke?
                </label>
                <select
                  id="smoker"
                  name="smoker"
                  value={formData.smoker}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  <option value="y">Yes</option>
                  <option value="n">No</option>
                </select>
              </div>

              <div>
                <label className="block mb-1">
                  If yes, What brand/s of cigarette do you use?
                </label>
                <div className="space-y-1">
                  <label className="block">
                    <input
                      type="checkbox"
                      name="brands"
                      value="marlboro"
                      checked={formData.brands.includes("marlboro")}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Marlboro
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="brands"
                      value="camel"
                      checked={formData.brands.includes("camel")}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Camel
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="brands"
                      value="bensonhedges"
                      checked={formData.brands.includes("bensonhedges")}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Benson & Hedges
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="brands"
                      value="pallmall"
                      checked={formData.brands.includes("pallmall")}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Pall Mall
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="brands"
                      value="luckystrike"
                      checked={formData.brands.includes("luckystrike")}
                      onChange={handleCheckboxChange}
                      className="mr-1"
                    />
                    Lucky Strike
                  </label>
                  <div className="flex items-center">
                    <label className="mr-2">
                      <input
                        type="checkbox"
                        name="brands"
                        value="other"
                        checked={formData.brands.includes("other")}
                        onChange={handleCheckboxChange}
                        className="mr-1"
                      />
                      Other:
                    </label>
                    <input
                      type="text"
                      name="otherBrands"
                      value={formData.otherBrands}
                      onChange={handleInputChange}
                      className="border border-gray-300 p-1 flex-1"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  dispatch(addData({ formData }));
                }}
                className="bg-blue-500 text-white px-4 py-2 border-0 cursor-pointer"
              >
                Submit
              </button>
            </div>

            <div className="mt-4"></div>
          </div>
        </div>
      )}
    </div>
  );
}
