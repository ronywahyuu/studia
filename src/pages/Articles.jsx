// import { Link } from "react-router-dom"
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconPlus from "../assets/images/svg/IconPlus";
import Articlecard from "../components/cards/Articlecard";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
// import RightSide from "../components/RightSide"

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  // const fetchArticles = async () => {
  //   setLoading(true);
  //   const res = await axios.get(`/konten`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   const { data } = res.data;
  //   setArticles(data);
  //   setLoading(false);
  //   navigate("/h/articles");
  //   console.log(data);
  // };

  useEffect(() => {
    let isMounted = true;
    const fetchArticles = async () => {
      setLoading(true)
      await axios.get(`/konten`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res)=>{
        const { data } = res.data;
        if(isMounted){
          setArticles(data);
          setLoading(false);
          console.log(data)
          setError(null)
        }
      }).catch((err)=>{
        setLoading(false)
        setError(err)
        console.log(err)
      });
    }
    fetchArticles();

    return () => {
      isMounted = false;
    }

  }, [location.pathname]);

  const renderArticles = articles?.map((article, index) => {
    if (loading) return <Skeleton height={250} width={400} />;
    return <Articlecard article={article} key={index} />;
  });

  // generate random color
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  };

  console.log(error)

  return (
    <div className=" flex flex-col w-full animate-fade-in-right ">
      {/* main side */}
      <div className=" bg-soft-gray w-full">
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex  justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-500">Articles</h1>
            <Link Link to="/h/articles/create" className="">
              <IconPlus />
            </Link>
          </div>
          {/* featured Article */}
          {/* <div className="flex flex-col gap-5 w-full">
            <Articlecard />
          </div> */}

          {/* Articles card*/}
          <div className="flex flex-col gap-5">
            {/* Article card list*/}
            <div className="grid grid-cols-2 gap-5 ">
              {loading && <Skeleton height={900} width={700} />}
              {renderArticles}
              {error ? <p>Failed to fetch the articles from server. Please try again</p> : null}
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      {/* <RightSide/> */}
    </div>
  );
};

export default Articles;
