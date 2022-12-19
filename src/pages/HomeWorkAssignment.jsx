import React, { useContext } from "react";
// import ClassContentField from "../components/ClassContentField";
// import ClassContentImg from "../assets/images/featured-img.png";
import BannerImg from "../assets/images/banner.png";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { TugasContext } from "../context/tugasContext";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { Link } from "react-router-dom";


const HomeWorkAssignment = () => {
  const [homework, setHomework] = React.useState(null);
  const [tugas, setTugas] = React.useState(null);
  const {idLesson, notifyUploadSuccess, notifyUploadError} = useContext(TugasContext);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const {id, lessonId} = useParams();

  console.log(`id: ${id}`)
  console.log(`lessonId: ${lessonId}`)

  React.useEffect(() => {
    const fetchHomework = async () => {
      await axios.get(`https://studia.deta.dev/tugas/${id}/l/${lessonId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => {
        // setHomework(res.data.data);
        setHomework(res.data);
        console.log(res);
      })
    }   
    fetchHomework();
  }, []);

  const uploadFile = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("tugas", tugas);
    console.log(tugas);
    await axios.post(`https://studia.deta.dev/tugas/upload/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'multipart/form-data'
      },
    }).then((res) => {
      setLoading(false)
      console.log(res.status);
      setError(null);
      if(error !== null){
        notifyUploadSuccess();
      }
      // notifyUploadSuccess();
    }).catch((err) => {
      setError(true);
      notifyUploadError();
      setLoading(false)
      console.log(err);
    })
  }
  return (
    <div className="animate-fade-in-right">
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl text-slate-500 font-medium">My Homework</h1>
      </div>

      <div className="grid  gap-4 ">
        <div className="flex flex-col rounded-lg justify-between border-t-8 border-blue-900 bg-white p-5 ">
          <div className="flex flex-col justify-between gap-5">
            <h3 className="text-2xl font-medium">{homework?.name}</h3>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </p> */}
          </div>

          <hr className="mt-5 mb-10" />
          {/* picture */}
          <div className="">
            {/* banner image */}
            {/* <div className=" w-full h-80 bg-slate-300 relative overflow-hidden rounded-xl">
              <img
                src={BannerImg}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition transform hover:scale-105"
                alt=""
              />

              <div className="absolute top-7 left-10">
                <h3 className="font-medium text-3xl text-white">Interaction</h3>
                <p className="text-xl font-light text-white text-opacity-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius.
                </p>
              </div>
            </div> */}
          </div>

          {/* homework description */}
          <div className="text-gray-800" dangerouslySetInnerHTML={{__html:homework?.description}}>
            {/* <p className="text-base text-gray-600">
              {homework?.description}
            </p> */}
          </div>

          {/* posted by */}
          {/* <div className="flex justify-between my-8">
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
          </div> */}

          {/* task submit form */}
          <form className="mt-20" onSubmit={uploadFile}>
            <div className="flex flex-col rounded-2xl bg-soft-gray p-5">
              <p className="text-base text-gray-500 font-medium">
                Turn Your Work Here!{" "}
              </p>
              <label className="block mt-3">
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                  onChange={(e) => setTugas(e.target.files[0])}
                  required
                />
              </label>

              {/* due date */}
              <div className="flex flex-col  items-end">
                <p className="text-base text-gray-500 font-medium ">Due</p>
                <div className="text-base text-gray-500 font-medium flex gap-2 items-center">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.3">
                        <path
                          d="M4.14502 2.88294C3.93502 2.88294 3.77002 2.7271 3.77002 2.53919V1.26044C3.77002 1.07252 3.93502 0.916687 4.14502 0.916687C4.35502 0.916687 4.52002 1.07252 4.52002 1.26044V2.5346C4.52002 2.7271 4.35502 2.88294 4.14502 2.88294Z"
                          fill="#292D32"
                        />
                        <path
                          d="M7.85498 2.88294C7.64498 2.88294 7.47998 2.7271 7.47998 2.53919V1.26044C7.47998 1.06794 7.64998 0.916687 7.85498 0.916687C8.06498 0.916687 8.22998 1.07252 8.22998 1.26044V2.5346C8.22998 2.7271 8.06498 2.88294 7.85498 2.88294Z"
                          fill="#292D32"
                        />
                        <path
                          d="M10.7502 7.25085C10.7502 7.3196 10.7252 7.38835 10.6602 7.44794C9.93521 8.1171 8.64522 9.30877 7.90522 9.99169C7.84022 10.0559 7.75522 10.0834 7.67022 10.0834C7.50522 10.0834 7.34521 9.96419 7.34521 9.79002V8.18585C7.34521 7.51669 7.96522 6.9621 8.72522 6.9621C9.20022 6.95752 9.86022 6.95752 10.4252 6.95752C10.6202 6.95752 10.7502 7.0996 10.7502 7.25085Z"
                          fill="#292D32"
                        />
                        <path
                          d="M10.7502 7.25085C10.7502 7.3196 10.7252 7.38835 10.6602 7.44794C9.93521 8.1171 8.64522 9.30877 7.90522 9.99169C7.84022 10.0559 7.75522 10.0834 7.67022 10.0834C7.50522 10.0834 7.34521 9.96419 7.34521 9.79002V8.18585C7.34521 7.51669 7.96522 6.9621 8.72522 6.9621C9.20022 6.95752 9.86022 6.95752 10.4252 6.95752C10.6202 6.95752 10.7502 7.0996 10.7502 7.25085Z"
                          fill="#292D32"
                        />
                        <path
                          d="M9.785 2.06252C9.455 1.83794 8.98 2.05335 8.98 2.43377V2.4796C8.98 3.01585 8.56 3.51085 7.975 3.56585C7.3 3.63002 6.73 3.14419 6.73 2.53919V2.06252C6.73 1.81044 6.505 1.60419 6.23 1.60419H5.77C5.495 1.60419 5.27 1.81044 5.27 2.06252V2.4796C5.27 2.88294 5.035 3.25877 4.67 3.4421C4.65 3.45585 4.63 3.46502 4.61 3.47419C4.605 3.47419 4.605 3.47877 4.6 3.47877C4.565 3.49252 4.53 3.50627 4.49 3.52002C4.48 3.5246 4.47 3.5246 4.46 3.52919C4.4 3.54752 4.335 3.56127 4.265 3.56585H4.26C4.185 3.57502 4.105 3.57502 4.03 3.56585H4.025C3.955 3.56127 3.89 3.54752 3.83 3.52919C3.78 3.51544 3.73 3.4971 3.68 3.47419C3.29 3.31377 3.02 2.95627 3.02 2.53919V2.43377C3.02 2.08085 2.61 1.87002 2.285 2.02127C2.28 2.02585 2.275 2.02585 2.27 2.03044H2.265C2.23 2.05335 2.2 2.07627 2.165 2.09919C2.11 2.14044 2.055 2.18169 2.005 2.22752C1.97 2.2596 1.935 2.29169 1.905 2.32377C1.865 2.36044 1.83 2.3971 1.795 2.43835C1.77 2.46585 1.74 2.49335 1.72 2.52544C1.695 2.55294 1.675 2.58502 1.655 2.61252C1.65 2.6171 1.645 2.62169 1.64 2.63085C1.595 2.69044 1.555 2.75919 1.52 2.82335C1.51 2.83252 1.505 2.8371 1.505 2.84627C1.475 2.90127 1.445 2.95627 1.425 3.01585C1.41 3.03877 1.405 3.0571 1.395 3.08002C1.385 3.09835 1.38 3.12127 1.37 3.1396C1.355 3.18544 1.34 3.23585 1.325 3.28627C1.305 3.35044 1.29 3.41919 1.28 3.48794C1.27 3.53835 1.265 3.58877 1.26 3.64377C1.255 3.70794 1.25 3.7721 1.25 3.83627V7.85127C1.25 9.08419 2.34 10.0834 3.685 10.0834H6.095C6.37 10.0834 6.595 9.87711 6.595 9.62502V8.18586C6.595 7.13169 7.55 6.2746 8.725 6.2746C8.99 6.27002 9.635 6.27002 10.25 6.27002C10.525 6.27002 10.75 6.06377 10.75 5.81169V3.83627C10.75 3.10752 10.37 2.47044 9.785 2.06252ZM5.565 7.29211C5.52 7.42961 5.38 7.52586 5.215 7.52586H3.395C3.37 7.52586 3.35 7.52586 3.33 7.51669C3.15 7.49377 3.02 7.35169 3.02 7.18211C3.02 6.98961 3.185 6.83377 3.395 6.83377H5.215C5.42 6.83377 5.59 6.98961 5.59 7.18211C5.59 7.21877 5.585 7.26002 5.565 7.29211ZM6.955 5.59169C6.91 5.72919 6.77 5.82544 6.605 5.82544H3.395C3.37 5.82544 3.35 5.82544 3.33 5.81627C3.15 5.79335 3.02 5.65127 3.02 5.48169C3.02 5.28919 3.185 5.13335 3.395 5.13335H6.605C6.815 5.13335 6.98 5.28919 6.98 5.48169C6.98 5.51835 6.975 5.5596 6.955 5.59169Z"
                          fill="#292D32"
                        />
                      </g>
                    </svg>
                  </div>
                  <span>{new Date(homework?.deadline).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-soft-gray rounded-3xl mt-3"
            >
              Turn in
            </button>
          </form>
        </div>
      </div>
      <ToastContainer theme="light"/>
    </div>
  );
};

export default HomeWorkAssignment;
