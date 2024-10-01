// const savetodb = (data, success, failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       success();
//     } else {
//       failure();
//     }
//   };

//   savetodb(
//     "your information",
//     () => {
//       console.log("success : your data was saved");
//       savetodb(
//         "hello world",
//         () => {
//           console.log("success 2 : data 2 saved");
//           savetodb(
//             "nishan",
//             () => {
//               console.log("success3 : data 3 saved");
//             },
//             () => {
//               console.log("failuer3 : weak connection");
//             }
//           );
//         },
//         () => {
//           console.log("failuer2 : weak conection");
//         }
//       );
//     },
//     () => {
//       console.log("weak connection. data not saved");
//     }
//   );

//   // this is call back hill

const saveToData = () => {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("success : data was saved");
    } else {
      failure("failure : weak connection");
    }
  });
};
// console.log(saveToData("Nishan"));
let request = saveToData("Nishan rai ");
