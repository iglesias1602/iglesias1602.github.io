import React, { Component } from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activities } from "../../portfolio";
import ActivitiesCard from "../../components/activitiesCard/ActivitiesCard";

class Activities extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="acts">
        <div className="acts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="acts-header" style={{ color: theme.text }}>
              Activities
            </h1>
          </Fade>
        </div>
        <div className="acts-body-div">
          {activities.activities.map((acts) => {
            return <ActivitiesCard activities={acts} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Activities;
