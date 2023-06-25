import { useEffect, useState } from "react";
import { LINKS } from "../constants";

const useFetch = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTitle(data.name);
        setHeading(data.heading);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { data, title, heading, isLoading };
};

export default useFetch;
