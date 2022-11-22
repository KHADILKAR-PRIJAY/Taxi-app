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
let get_MY_Trip_Posts = () => {
    return new Promise((resolve, reject) => {
        let Posts = [];
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user.uid, "User uid");
            if (user) {
                firebase
                    .firestore()
                    .collection("Trip_Posts")
                    .where("driverUid", "==", user.uid)
                    .onSnapshot((snap) => {
                        snap.forEach((doc) => {
                            let post = doc.data();
                            post.id = doc.id;
                            Posts.push(post);
                            console.log(post, "ccc");
                            resolve(Posts);
                        });
                    });
            } else {
                reject("");
            }
        });
    });
};

let DeletePost = (uid) => {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection("Trip_Posts")
        .doc(uid)
        .delete()
        .then(() => {
          resolve("Deleted Successfully");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  export { Post_Trip_Func, get_MY_Trip_Posts, DeletePost };