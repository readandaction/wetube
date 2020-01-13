import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("VideoDetail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("EditVideo"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("DeleteVideo"));

// export defalut는 파일로 export 한다는 뜻
export default videoRouter;
