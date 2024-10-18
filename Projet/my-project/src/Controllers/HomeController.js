exports.getHome = (req, res) => {
    // res.send('<h1>Bienvenue sur la page d\'accueil !</h1>');
    // res.sendFile("mon-fichier.html");

    const username = "John";
    const fruits = ['Pommes', 'Poires', 'Bananes'];

    res.render('pages/homepage/index', {
        username: username,
        fruits: fruits
    })
};
  