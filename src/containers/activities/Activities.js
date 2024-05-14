import React, { Component } from "react";
import "./Activities.css";
import { Fade } from "react-reveal";
import { activities } from "../../portfolio";
import ActivitiesCard from "../../components/activitiesCard/ActivitiesCard";

class Activities extends Component {
  render() {
    const { theme, openModal } = this.props; // Receive openModal as a prop
    return (
      <div className="main" id="acts">
        <div className="acts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="acts-header" style={{ color: theme.text }}>
              Portfolio of activities
            </h1>
          </Fade>
        </div>
        <div className="acts-body-div">
          {activities.activities.map((act, index) => (
            <ActivitiesCard
              key={index}
              activity={act}
              theme={theme}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Activities;
