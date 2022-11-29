import ClassContentImg from "../assets/images/featured-img.png";
const ClassContentField = () => {
  return (
    <div className="flex flex-col rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
      <div className="flex flex-col justify-between gap-5">
        <h3 className="text-2xl font-medium">Interaction</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.</p>
      </div>

      <hr className="" />
      {/* picture */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="w-full h-96 bg-slate-300 relative overflow-hidden rounded-3xl">
          <img
            src={ClassContentImg}
            className="object-cover w-screen h-full"
            alt=""
          />
        </div>
      </div>

      {/* posted by */}
      <div className="flex justify-between my-8">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-gray-400">Wadew Ma</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M6.21753 4.7175C5.90253 4.7175 5.65503 4.4625 5.65503 4.155V2.0625C5.65503 1.755 5.90253 1.5 6.21753 1.5C6.53253 1.5 6.78003 1.755 6.78003 2.0625V4.1475C6.78003 4.4625 6.53253 4.7175 6.21753 4.7175Z"
                fill="#292D32"
              />
              <path
                d="M11.7825 4.7175C11.4675 4.7175 11.22 4.4625 11.22 4.155V2.0625C11.22 1.7475 11.475 1.5 11.7825 1.5C12.0975 1.5 12.345 1.755 12.345 2.0625V4.1475C12.345 4.4625 12.0975 4.7175 11.7825 4.7175Z"
                fill="#292D32"
              />
              <path
                d="M16.1251 11.865C16.1251 11.9775 16.0876 12.09 15.9901 12.1875C14.9026 13.2825 12.9676 15.2325 11.8576 16.35C11.7601 16.455 11.6326 16.5 11.5051 16.5C11.2576 16.5 11.0176 16.305 11.0176 16.02V13.395C11.0176 12.3 11.9476 11.3925 13.0876 11.3925C13.8001 11.385 14.7901 11.385 15.6376 11.385C15.9301 11.385 16.1251 11.6175 16.1251 11.865Z"
                fill="#292D32"
              />
              <path
                d="M16.1251 11.865C16.1251 11.9775 16.0876 12.09 15.9901 12.1875C14.9026 13.2825 12.9676 15.2325 11.8576 16.35C11.7601 16.455 11.6326 16.5 11.5051 16.5C11.2576 16.5 11.0176 16.305 11.0176 16.02V13.395C11.0176 12.3 11.9476 11.3925 13.0876 11.3925C13.8001 11.385 14.7901 11.385 15.6376 11.385C15.9301 11.385 16.1251 11.6175 16.1251 11.865Z"
                fill="#292D32"
              />
              <path
                d="M14.6775 3.375C14.1825 3.0075 13.47 3.36 13.47 3.9825V4.0575C13.47 4.935 12.84 5.745 11.9625 5.835C10.95 5.94 10.095 5.145 10.095 4.155V3.375C10.095 2.9625 9.7575 2.625 9.345 2.625H8.655C8.2425 2.625 7.905 2.9625 7.905 3.375V4.0575C7.905 4.7175 7.5525 5.3325 7.005 5.6325C6.975 5.655 6.945 5.67 6.915 5.685C6.9075 5.685 6.9075 5.6925 6.9 5.6925C6.8475 5.715 6.795 5.7375 6.735 5.76C6.72 5.7675 6.705 5.7675 6.69 5.775C6.6 5.805 6.5025 5.8275 6.3975 5.835H6.39C6.2775 5.85 6.1575 5.85 6.045 5.835H6.0375C5.9325 5.8275 5.835 5.805 5.745 5.775C5.67 5.7525 5.595 5.7225 5.52 5.685C4.935 5.4225 4.53 4.8375 4.53 4.155V3.9825C4.53 3.405 3.915 3.06 3.4275 3.3075C3.42 3.315 3.4125 3.315 3.405 3.3225H3.3975C3.345 3.36 3.3 3.3975 3.2475 3.435C3.165 3.5025 3.0825 3.57 3.0075 3.645C2.955 3.6975 2.9025 3.75 2.8575 3.8025C2.7975 3.8625 2.745 3.9225 2.6925 3.99C2.655 4.035 2.61 4.08 2.58 4.1325C2.5425 4.1775 2.5125 4.23 2.4825 4.275C2.475 4.2825 2.4675 4.29 2.46 4.305C2.3925 4.4025 2.3325 4.515 2.28 4.62C2.265 4.635 2.2575 4.6425 2.2575 4.6575C2.2125 4.7475 2.1675 4.8375 2.1375 4.935C2.115 4.9725 2.1075 5.0025 2.0925 5.04C2.0775 5.07 2.07 5.1075 2.055 5.1375C2.0325 5.2125 2.01 5.295 1.9875 5.3775C1.9575 5.4825 1.935 5.595 1.92 5.7075C1.905 5.79 1.8975 5.8725 1.89 5.9625C1.8825 6.0675 1.875 6.1725 1.875 6.2775V12.8475C1.875 14.865 3.51 16.5 5.5275 16.5H9.1425C9.555 16.5 9.8925 16.1625 9.8925 15.75V13.395C9.8925 11.67 11.325 10.2675 13.0875 10.2675C13.485 10.26 14.4525 10.26 15.375 10.26C15.7875 10.26 16.125 9.9225 16.125 9.51V6.2775C16.125 5.085 15.555 4.0425 14.6775 3.375ZM8.3475 11.9325C8.28 12.1575 8.07 12.315 7.8225 12.315H5.0925C5.055 12.315 5.025 12.315 4.995 12.3C4.725 12.2625 4.53 12.03 4.53 11.7525C4.53 11.4375 4.7775 11.1825 5.0925 11.1825H7.8225C8.13 11.1825 8.385 11.4375 8.385 11.7525C8.385 11.8125 8.3775 11.88 8.3475 11.9325ZM10.4325 9.15C10.365 9.375 10.155 9.5325 9.9075 9.5325H5.0925C5.055 9.5325 5.025 9.5325 4.995 9.5175C4.725 9.48 4.53 9.2475 4.53 8.97C4.53 8.655 4.7775 8.4 5.0925 8.4H9.9075C10.2225 8.4 10.47 8.655 10.47 8.97C10.47 9.03 10.4625 9.0975 10.4325 9.15Z"
                fill="#292D32"
              />
            </g>
          </svg>
          <h3 className="text-lg font-medium text-gray-400">B Classes</h3>
        </div>
      </div>

      <div>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>

      {/* feedback button */}
      <button className="border mt-10 bg-sky-800 p-2 rounded-lg">
        <div className="flex items-center  justify-center gap-5">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M11.056 5.85317C11.056 8.37002 8.87085 10.4056 6.1784 10.4056L5.57358 11.134L5.21589 11.5633C4.91022 11.9275 4.3249 11.8494 4.1233 11.4136L3.25183 9.49511C2.06819 8.66266 1.30078 7.34247 1.30078 5.85317C1.30078 3.33631 3.48596 1.30072 6.1784 1.30072C8.14246 1.30072 9.83987 2.38681 10.6008 3.94765C10.8934 4.52646 11.056 5.1703 11.056 5.85317Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3079 8.36349C14.3079 9.85279 13.5405 11.173 12.3569 12.0055L11.4854 13.924C11.2838 14.3597 10.6985 14.4443 10.3928 14.0736L9.4303 12.9159C7.85645 12.9159 6.4517 12.2201 5.57373 11.134L6.17855 10.4056C8.871 10.4056 11.0562 8.37 11.0562 5.85315C11.0562 5.17028 10.8936 4.52644 10.6009 3.94763C12.7276 4.43539 14.3079 6.23034 14.3079 8.36349Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.55225 5.85315H7.80399"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <p className="text-white">Give A Feedback</p>
        </div>
      </button>
    </div>
  );
};

export default ClassContentField;
