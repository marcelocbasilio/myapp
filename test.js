const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/*
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    */

const Post = sequelize.define('post', {
    // Attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Note: using `force: true` will drop the table if it already exists
/*
Post.sync({force: true}).then(() => {
    return Post.create({
        title: 'A Inteligência Artificial e a Manipulação Genética podem ser os melhores remédios contra o coronavírus?',
        content: "Entre tanta aflição e tanta miséria de nossa cidade, a autoridade das leis, quer divinas quer humanas, desmoronara e dissolvera-se. Ministros e executores das leis, tanto quanto outros homens, todos estavam mortos, ou doentes, ou haviam perdido os seus familiares. (…) Para dar sepultura à grande quantidade de corpos já não era suficiente a terra sagrada junto às igrejas; por isso passaram-se a edificar igrejas nos cemitérios; punham-se nessas igrejas, às centenas, os cadáveres que iam chegando; e eles eram empilhados como as mercadorias nos navios.        Tanto o quadro que abre o artigo, como o trecho acima pinçado do livro Decamerão, do italiano Giovanni Bocaccio (1313-1375), descrevem cenas durante os piores anos da Peste Negra, a pandemia mais letal da história. A população da Florença de Bocaccio caiu de 110 mil para 50 mil em questão de anos. Metade de Paris morreu. O continente europeu perdeu entre um terço e metade de seus habitantes. A peste veio da China e antes de devastar a Europa também causou muita destruição na Ásia, Oriente Médio e norte da África. Por causa da falta de dados confiáveis em muitos países, os historiadores até hoje não chegaram a uma estimativa precisa. Calcula-se que, ao todo, a pandemia tenha exterminado de 11% a 22% da população mundial. Somente no século 19 o suíço Alexandre Yersin (1863-1943) descobriu em Hong Kong o bacilo da peste bubônica, nomeado em sua homenagem Yersinia pestis, e fez uma vacina – 500 anos depois! Mesmo com os enormes avanços da medicina nos últimos 200 anos, seguimos expostos a epidemias: de cólera, de AIDS, de ebola, de dengue e das variantes de gripe até o atualíssimo coronavírus, que entrou 2020 assombrando a economia mundial e sendo declarada emergência internacional de saúde pública pela OMS."
    });
});
*/

const User = sequelize.define('users', {
    // Attributes
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
/*
User.sync({force: true}).then(() => {
    return User.create({
        first_name: 'Marcelo',
        last_name: 'Basílio',
        birthday: '1980-09-17',
        email: 'marcelocbasilio@gmail.com'
    });
});
*/