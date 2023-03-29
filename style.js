const styles = {
  socialHover: "hover:bg-secondarycolor hover:text-white",
  socialIcon:
    "w-10 h-10 rounded-full  bg-white my-1 border border-gray-300 flex justify-center hover:bg-secondarycolor hover:text-white items-center transition-all duration-300 ease-in-out",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
