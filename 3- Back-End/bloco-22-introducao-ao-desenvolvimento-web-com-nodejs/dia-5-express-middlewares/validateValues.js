function validateValues (req, res, next){
    const { productName, infos } = req.body;
    const chavesInfos = Object.keys(infos);

    if(!productName) return res.status(400).json({ message: "O campo productName é obrigatório" });
    if(productName.length < 4) return res.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres" });
    if(!infos) return res.status(400).json({ message: "O campo infos é obrigatório" });
    
    const findSales = chavesInfos.find((e) => e.includes("saleDate"));
    const findWarrantyPeriod = chavesInfos.find((e) => e.includes("warrantyPeriod"));

    if(!findSales) return res.status(400).json({ message: "O campo Infos.sales é obrigatório" })
    if(!findWarrantyPeriod) return res.status(400).json({ message: "O campo Infos.WarrantyPeriod é obrigatório" })
    
    const regex = new RegExp(/[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/);
    const checkDate = regex.test(infos.saleDate);
    
    if(!checkDate) return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
    
    if(!(infos.warrantyPeriod >= 1 && infos.warrantyPeriod <= 3)) return res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3" });

    next();
}


module.exports = validateValues;