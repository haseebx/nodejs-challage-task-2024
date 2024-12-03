import { Router } from "express";
import CandidateController from "../controllers/CandidatesController.js";
import authenticateJWT from "../middleware/AuthenticateMiddleware.js";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const candidateRouter = Router();
candidateRouter.post('/add-candidate',authenticateJWT, CandidateController.addCandidate);

candidateRouter.all("*", (req, res) => {
  return res.status(404).json("Not Found");
});
export default candidateRouter;
 