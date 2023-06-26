import { useContext, useEffect, useState } from "react";
import "./Home.scss";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";
import { Activity } from "../../models";

export default function Home(props: any) {
  const name = props.data.name;
  const activities = props.data.activities;

  const navigate = useNavigate();

  const handleClick = (activityNumber: number) => {
    navigate("/quiz/" + activityNumber);
  };

  return (
    <section>
      <h1 id="showMe">{name}</h1>
      <div className="row">
        {activities?.map((activity: Activity) => {
          return (
            <div className="col-md-6 col-sm-6 col-xs-12" key={activity.order}>
              <div className="card">
                <div className={"cover item-" + activity.order}>
                  <h1>{activity.activity_name}</h1>
                  <div className="card-back">
                    <a onClick={() => handleClick(activity.order)}>Play Game</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
