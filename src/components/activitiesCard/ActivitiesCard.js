import React, { Component } from "react";
import "./ActivitiesCard.css";
import { Fade } from "react-reveal";

class ActivitiesCard extends Component {
  render() {
    const activities = this.props.activities;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="acts-card">
          <div className="content">
            <a
              href={activities.activities_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="acts-header"
                style={{ backgroundColor: activities.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${activities.logo_path}`)}
                  alt={activities.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Activities
                </h3>
              </div>
            </a>
          </div>
          <div className="acts-body">
            <h2 className="acts-body-title" style={{ color: theme.text }}>
              {activities.title}
            </h2>
            <h3
              className="acts-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {activities.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ActivitiesCard;
