import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
    zIndex: 10,
  },
};

Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);
  const [isHover, setIsHover] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="bg-bg_light_primary" id="projects">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img className="h-full" src={selectProject?.image} alt="..." />
        <h6>{selectProject?.title}</h6>
        <br />
        {selectProject?.detail}
        <br />
        <br />
        {selectProject?.siteLink && (
          <div>
            <p>- Website</p>
            <a className="text-teal-300" href={selectProject?.siteLink}>
              {selectProject?.siteLink}
            </a>
          </div>
        )}
        <br />
        {selectProject?.appLink_Apple && (
          <div>
            <p>- App Store</p>
            <a className="text-teal-300" href={selectProject?.appLink_Apple}>
              {selectProject?.appLink_Apple}
            </a>
            <br />
            <a className="text-teal-300" href={selectProject?.appLink_Google}>
              {selectProject?.appLink_Google}
            </a>
          </div>
        )}
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] max-h-[80vh]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    className={`font-bold text-gray self-end ${
                      isHover ? "text-teal-300" : "text-gray"
                    }`}
                    onClick={() => {
                      setSelectProject(content);
                      openModal();
                    }}
                    onMouseOver={() => {
                      setIsHover(true);
                    }}
                    onMouseLeave={() => {
                      setIsHover(false);
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
