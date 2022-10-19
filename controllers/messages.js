

const getAll = (req, res) => {
    let messages =  [
        { message: "GETTING MESSAGES"}
    ];
    let results = {
        status: "success",
        data: messages
    };
    res.json(results);
    
}

module.exports.getAll = getAll; 