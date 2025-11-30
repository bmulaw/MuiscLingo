require("dotenv").config();
const axios = require("axios");
const express = require("express");

const app = express();
const port = 3001;


app.get('/translate', async (req, res) => {
    const url = 'https://lecto-translation.p.rapidapi.com/v1/translate/text'
    const sample_data = {
                    "texts":["Me informan que te fuiste, como un loco te fui a alcanzar",
                            "Te busqué y no te encontraba, y eso me preocupaba"],
                    "to":["en"],
                    "from":"es"
                }
    axios({
        method: 'post',
        url: url,
        data: sample_data,
        headers: {
            'x-rapidapi-key': process.env.TRANSLATE_API_KEY,
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'lecto-translation.p.rapidapi.com'
        },
      }).then((response) => {
        const result_data = response.data;
        const translated_text = result_data.translations;
        console.log({result_data});
        console.log({translated_text})
        console.log(translated_text[0].translated)
      }).catch((e) => {
        console.error(e)
      });

      return 'yay!';
})

app.listen(port, () => {
    console.log(`Example ${port}`)
})