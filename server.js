const express = require('express');
   const axios = require('axios');
   const app = express();
   app.use(express.json());

   app.post('/generate-plan', async (req, res) => {
     try {
       const response = await axios.post(
         'https://api.deepseek.com/v1/chat/completions',
         {
           messages: [{ role: 'user', content: `Напиши детаљан бизнис план за: ${req.body.idea}` }]
         },
         { headers: { 'Authorization': 'sk-9f9c0c6b032d4b90a13d43f9bae99b48
                                                          ' } }
       );
       res.send(response.data.choices[0].message.content);
     } catch (error) {
       res.status(500).send('Дошло је до грешке!');
     }
   });

   app.listen(process.env.PORT || 3000, () => console.log('Сервер ради!'));
