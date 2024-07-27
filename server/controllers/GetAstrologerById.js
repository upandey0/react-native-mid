import { Op } from "sequelize";
import Astrologer from "../models/astrologer.js";

const GetAstrologerById = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Astrologer ID is required",
      });
    }

    const astrologer = await Astrologer.findOne({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    });

    if (!astrologer) {
      return res.status(404).json({
        success: false,
        message: "Astrologer not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: astrologer,
    });

  } catch (error) {
    console.error("Error in GetAstrologerById:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default GetAstrologerById;