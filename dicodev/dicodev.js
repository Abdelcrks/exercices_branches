console.log("Bienvenue les maudits !")
console.log("Recherche : ", process.argv[2])



import {Client} from "pg";
import {writeFile} from "fs/promises"

// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_CRD0F8JhujYi@ep-round-hat-a27menxq-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
       // const result = await client.query(`SELECT  FROM resources JOIN topics ON resources.topic_id = topics.id WHERE topics.name = 'HTML & CSS' `);
        const result = await client.query(`SELECT topics.name ,resources.url  FROM resources JOIN topics ON resources.topic_id = topics.id where topics.name ilike '%html%';`);

        console.log("laaaa ",result.raws)
        await writeFile('index.html',
    `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src="dicodev.js"></script>
    <title>Document</title>
</head>
<body>
    <h1> Test</h1>
    <div id="container">
    ${result.raws}
    </div>
</body>
</html>
    `)
        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
}

run();