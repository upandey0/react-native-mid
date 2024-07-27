import { Op, Sequelize } from 'sequelize';
import Astrologer from '../models/astrologer.js';

const ListAstrologer = async (req, res) => {
  try {
    let {
      page,
      pageSize,
      languages,
      domains,
      experience,
      id,
      search
    } = req.query;

    // Parse page and pageSize only if they are present
    if (page !== undefined) {
      page = parseInt(page, 10);
      if (isNaN(page) || page < 1) page = 1;
    } else {
      page = 1;
    }

    if (pageSize !== undefined) {
      pageSize = parseInt(pageSize, 10);
      if (isNaN(pageSize) || pageSize < 1) pageSize = 10;
    } else {
      pageSize = 10;
    }

    let filters = {};

    if (search) {
      filters = {
        name: {
          [Op.like]: `%${search}%`
        }
      };
    } else {
      if (id) {
        filters.id = {
          [Op.eq]: id
        };
      }

      if (languages) {
        const languagesArray = languages.split(',');
        filters.languages = {
          [Op.or]: languagesArray.map(lang =>
            Sequelize.literal(`JSON_CONTAINS(languages, '"${lang}"')`)
          ),
        };
      }

      if (domains) {
        const domainsArray = domains.split(',');
        filters.domain = {
          [Op.or]: domainsArray.map(domain =>
            Sequelize.literal(`JSON_CONTAINS(domain, '"${domain}"')`)
          ),
        };
      }

      if (experience) {
        filters.experience = {
          [Op.gte]: parseInt(experience, 10),
        };
      }
    }

    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    const { count, rows } = await Astrologer.findAndCountAll({
      where: filters,
      offset,
      limit,
    });

    res.status(200).json({
      success: true,
      data: rows,
      meta: {
        totalItems: count,
        totalPages: Math.ceil(count / pageSize),
        currentPage: page,
        pageSize: pageSize,
      },
    });
  } catch (error) {
    console.error('Error fetching astrologers:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch astrologers', 
      details: error.message 
    });
  }
};

export default ListAstrologer;