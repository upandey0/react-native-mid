import Astrologer from "../models/astrologer.js";
import { Sequelize, Op } from "sequelize";

const filterAstros = async (req, res) => {
  try {
    const { language, domain } = req.query;

    let whereClause = {};

    if (language) {
      whereClause.languages = Sequelize.where(
        Sequelize.fn('JSON_CONTAINS', Sequelize.col('languages'), Sequelize.literal(`'"${language}"'`)),
        true
      );
    }

    if (domain) {
      whereClause.domain = Sequelize.where(
        Sequelize.fn('JSON_CONTAINS', Sequelize.col('domain'), Sequelize.literal(`'"${domain}"'`)),
        true
      );
    }

    const astrologers = await Astrologer.findAll({
      where: whereClause
    });

    res.status(200).json({
      success: true,
      data: astrologers
    });
  } catch (error) {
    console.error('Error filtering astrologers:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while filtering astrologers'
    });
  }
};

export default filterAstros;