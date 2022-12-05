import firebase from "firebase";
let Book_Seats = ({ name, Location, seats, rideId }) => {
    return new Promise((resolve, reject) => {
        let user = firebase.auth().currentUser;
        firebase
            .firestore()
            .collection("Trip_Posts")
            .doc(rideId)
            .collection("bookseats")
            .doc(user.uid)
            .set({
                name,
                Location,
                seats,
                rideId,
                driverUid: user.uid,
            })
            .then(() => {
                resolve("Seat Book Successfully");
            })
            .catch((error) => {
                alert(error);
            });
    });
};

export { Book_Seats };