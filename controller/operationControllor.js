import { findHighest } from "../utils/operations.js";

/*  
    GET /bfhl
    DESC returns operation_code 1
*/

export const getDetail = (req, res) => {
  return res.json({ operation_code: 1 }).sendStatus(200);
};

/*  
      POST /bfhl
      DESC returns an array performing operations
*/

export const performOperations = (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      throw new Error(
        'Invalid input format. Please provide an array in the "data" field.'
      );
    }

    const { highest, alphabets } = findHighest(data);

    const result = {
      is_success: true,
      user_id: "Anto_Vimalan_S_15062002",
      email: "ad0969@srmist.edu.in",
      roll_number: "RA2011026020075",
      numbers: data.filter((item) => !isNaN(item)),
      alphabets: alphabets,
      highest_alphabet: highest ? [highest] : [],
    };

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(400).json({ error: error.message });
  }
};
