import React, { Component } from "react";
import "./ActivitiesCard.css";
import { Fade } from "react-reveal";
import ImageGalleryModal from "../imageGalleryModal/ImageGalleryModal"; // Adjust the import path as necessary

class ActivitiesCard extends Component {
  handleClick = () => {
    const { activity, openModal } = this.props;
    openModal(activity.images); // Assuming activity.images is the array of image paths
  };

  render() {
    const { activity, theme } = this.props;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="acts-card" onClick={this.handleClick}>
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="acts-header"
              style={{ backgroundColor: activity.color_code }}
            >
              <img
                className="acts_logo_img"
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
          <div className="acts-body">
            <h2 className="acts-body-title" style={{ color: theme.text }}>
              {activity.title}
            </h2>
            <h3
              className="acts-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {activity.subtitle}
            </h3>
            <p
              className="acts-body-text"
              style={{ color: theme.secondaryText }}
            >
              {activity.text}
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ActivitiesCard;
