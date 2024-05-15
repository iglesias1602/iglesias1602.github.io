import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Activities from "../../containers/activities/Activities";
import Skills from "../../containers/skills/Skills";
import ImageGalleryModal from "../../components/imageGalleryModal/ImageGalleryModal";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { activities } from "../../portfolio";
import PortfolioTable from "../../containers/portfolioTable/PortfolioTable";
import "../../components/activitiesCard/ActivitiesCard.css"; // Import the CSS file

class Home extends Component {
  state = {
    modalOpen: false,
    modalMedia: [], // Change from modalImages to modalMedia to handle both images and videos
    currentIndex: 0, // Add state to track the current index
  };

  openModal = (media, comments) => {
    document.body.classList.add("body-no-scroll");
    this.setState({
      modalOpen: true,
      modalMedia: media,
      modalComments: comments,
      currentIndex: 0,
    });
  };

  closeModal = () => {
    document.body.classList.remove("body-no-scroll");
    this.setState({
      modalOpen: false,
      modalMedia: [],
      currentIndex: 0, // Reset index to 0 when closing the modal
    });
  };

  render() {
    const theme = this.props.theme;
    const { modalOpen, modalMedia, modalComments, currentIndex } = this.state;

    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <ImageGalleryModal
          isOpen={modalOpen}
          media={modalMedia} // Change from images to media to handle both images and videos
          comments={modalComments || []} // Ensure you provide a fallback as empty array
          handleClose={this.closeModal}
          theme={this.props.theme} // Ensure the theme is passed here
          currentIndex={currentIndex} // Pass the current index
          setCurrentIndex={(index) => this.setState({ currentIndex: index })} // Function to update currentIndex
        />
        {activities.activities.length > 0 ? (
          <Activities theme={theme} openModal={this.openModal} />
        ) : null}
        <PortfolioTable theme={theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
