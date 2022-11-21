import firebase from "firebase";

let Post_Trip_Func = ({
  origin_location,
  destination_location,
  Date_Time,
  Total_Seats,
  Price_Seat,
}) => {
  return new Promise((resolve, reject) => {
    let user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("Trip_Posts")
      .add({
        origin_location,
        destination_location,
        Date_Time,
        Total_Seats,
        Price_Seat,
        driverUid: user.uid,
      })
      .then(() => {
        resolve("Post Added Successfully");
      })
      .catch((error) => {
        alert(error);
      });
  });
};