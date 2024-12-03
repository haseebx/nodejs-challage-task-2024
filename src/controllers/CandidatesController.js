import CandidateService from "../services/CandidateService.js";
const CandidateController = {
  addCandidate: async (req, res) => {
    try {
      const candidate = await CandidateService.addNewCandidate(req.body);
      return res.status(candidate.status).json(candidate);
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({
        status: 400,
        message: "An error occurred during creating",
      });
    }
  },

};
export default CandidateController;