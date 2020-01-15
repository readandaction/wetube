export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;

  res.render("search", { pageTitle: "Search", searchingBy });
};
export const videos = (req, res) =>
  res.render("Videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("Video-detail", { pageTitle: "Video detail" });
export const editVideo = (req, res) =>
  res.render("Edit-video", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) =>
  res.render("Delete-video", { pageTitle: "Delete Video" });
