import React, { Component } from "react";
import "./ActivitiesCard.css";
import { Fade } from "react-reveal";

class ActivitiesCard extends Component {
  handleClick = () => {
    const { activity, openModal } = this.props;
    openModal(activity.media, activity.comments); // Assuming activity.images is the array of image paths
  };

  render() {
    const { activity, theme } = this.props;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="act-card" onClick={this.handleClick}>
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="act-header"
              style={{ backgroundColor: activity.color_code }}
            >
              <img
                className="act_logo_img"
                src={require(`../../assests/images/${activity.logo_path}`)}
                alt={activity.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Activities
              </h3>
            </div>
          </div>
          <div className="act-body">
            <h2 className="acts-body-title" style={{ color: theme.text }}>
              {activity.title}
            </h2>
            <h3
              className="act-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {activity.subtitle}
            </h3>
            <p className="act-body-text" style={{ color: theme.secondaryText }}>
              {activity.text}
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ActivitiesCard;
