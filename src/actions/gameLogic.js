import request from 'superagent'
const { Router } = require('express');

//const router = new Router();

//const baseUrl = 'http://localhost:4000'


export const handleChoice = (value) => {
  if (value === true) {
    console.log('i work!')
  } else {
    console.log('i work too')
  }}
//     this.props.dispatch({
//       type: "CORRECT_GUESS"
//     })}
//     else if (value === false && this.props.roundsPlayed < 10) {
//           this.props.dispatch({
//             type: "WRONG_GUESS"
//           })
      
//         } else {
//           this.props.dispatch({
//             type: "GAME_OVER"
//           })
//         }
//       }


// // export const handleChoice = (value) => {
// //   if (value === true && this.props.roundsPlayed < 10) {
// //     router.get("/quotes", function(req, res, next) {
// //       const id = req.params.id;
// //     //  const suitableQuote = Quotes.filter(quote => quote.authorId === id);
// //       // Quotes.findByPk(id)
// //       //   .then(movies => {
// //       //     res.json({ movies });
// //       // //   })
// //       //   .then(response => response.filter(quote => quote.authorId === id))
// //       //   .catch(err => {
// //       //     res.status(500).json({
// //       //       message: "Something went wrong",
// //       //       error: err
// //       //     });
// //         });
// //     //});

