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

let get_All_Trip_Posts = () => {
    return new Promise((resolve, reject) => {
      let Posts = [];
      firebase
        .firestore()
        .collection("Trip_Posts")
        .onSnapshot((snap) => {
          snap.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            Posts.push(post);
            console.log(post, "ccc");
            resolve(Posts);
          });
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

  let get_All_Pending_Requests = (id) => {
    return new Promise((resolve, reject) => {
      let Requests = [];
      firebase
        .firestore()
        .collection("Trip_Posts")
        .doc(id)
        .collection("bookseats")
        .where("Status", "==", "Pending")
        .onSnapshot((snap) => {
          if (!snap.empty) {
            snap.forEach((doc) => {
              let Request = doc.data();
              Request.rid = doc.id;
              Requests.push(Request);
              console.log(Request, "pending");
              resolve(Requests);
            });
          } else {
            resolve([]);
          }
        });
    });
  };
  
  let get_All_Rejected_Requests = (id) => {
    return new Promise((resolve, reject) => {
      let Requests = [];
      firebase
        .firestore()
        .collection("Trip_Posts")
        .doc(id)
        .collection("bookseats")
        .where("Status", "==", "Rejected")
        .onSnapshot((snap) => {
          snap.forEach((doc) => {
            
            let Request = doc.data();
            Request.rid = doc.id;
            Requests.push(Request);
            console.log(Request, "Rejected");
            resolve(Requests);
          });
        });
    });
  };
  
  let get_All_Accepted_Requests = (id) => {
    return new Promise((resolve, reject) => {
      try {
        let Requests = [];
  
        firebase
          .firestore()
          .collection("Trip_Posts")
          .doc(id)
          .collection("bookseats")
          .where("Status", "==", "Accepted")
          .onSnapshot((snap) => {
            if (!snap.empty) {
              snap.forEach((doc) => {
                let Request = doc.data();
                Request.rid = doc.id;
                Requests.push(Request);
                console.log(Request, "Accepted");
                resolve(Requests);
              });
            } else {
              resolve([]);
            }
          });
      } catch (error) {
        alert(error);
      }
    });
  };
  
  let AcceptRequest = (id, rid) => {
    return new Promise((resolve, reject) => {
      try {
        firebase
          .firestore()
          .collection("Trip_Posts")
          .doc(id)
          .collection("bookseats")
          .doc(rid)
          .update({
            Status: "Accepted",
          });
      } catch (error) {
        alert(error);
      }
    });
  };
  
  let RejectRequest = (id, rid) => {
    return new Promise((resolve, reject) => {
      try {
        firebase
          .firestore()
          .collection("Trip_Posts")
          .doc(id)
          .collection("bookseats")
          .doc(rid)
          .update({
            Status: "Rejected",
          });
      } catch (error) {
        alert(error);
      }
    });
  };
  export {
    Post_Trip_Func,
    get_MY_Trip_Posts,
    DeletePost,
    get_All_Trip_Posts,
    get_All_Pending_Requests,
    get_All_Rejected_Requests,
    get_All_Accepted_Requests,
    AcceptRequest,
    RejectRequest,
  };