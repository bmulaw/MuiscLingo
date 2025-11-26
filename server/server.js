const express = require('express');
const translate = require('google-translate-api');

const app = express();
const port = 3001;

//     translate(song, {to: 'en'}).then(
//         res => {
//             console.log(res.text)
//         }
//     ).catch(e => {
//         console.error(e)
//     })

// translate('Ik spreek Engels', {to: 'en', from: 'nl'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

// translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
//     console.log(res);
//     console.log(res.text);
//     //=> Ik spea Nederlands!
//     console.log(res.from.text.autoCorrected);
//     //=> false
//     console.log(res.from.text.value);
//     //=> I [speak] Dutch!
//     console.log(res.from.text.didYouMean);
//     //=> true
// }).catch(err => {
//     console.error(err);
// });




app.get('/', async (req, res) => {

    const translator = await Translator.create({
        sourceLanguage: "es",
        targetLanguage: "en",
      });
      const translation = await translator.translate(song);
    console.log(translation);
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Example ${port}`)
})