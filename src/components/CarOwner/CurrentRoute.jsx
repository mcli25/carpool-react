import React, { useEffect, useState, useContext } from "react";
import Publish from "./Publish";
import "./CarOwner.css";
import { db } from "../../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { format } from "date-fns";
// import AuthContext from "../../context/Auth";

export default function CurrentRoute() {
  const [showPulish, setShowPublish] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);

  // const { user } = useContext(AuthContext);
  const handleModalOpen = () => {
    setShowPublish(true);
  };
  const handleModalClose = () => {
    setShowPublish(false);
  };

  // get current route data
  const fetchData = async () => {
    const routesRef = collection(db, "routes");
    // create query
    const q = query(
      routesRef,
      where("driver", "==", "test"),
      where("date", ">", Timestamp.now())
    );

    // execute query
    const querySnapshot = await getDocs(q);

    // Process Query Results
    const routes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(routes[0]);
    if (routes[0] != null) {
      setCurrentRoute(routes[0]);
      console.log("currentoute", routes[0]);
    } else {
      setCurrentRoute(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // insert data to firebase
  const addRoute = async (newRoute) => {
    try {
      const routesRef = collection(db, "routes");

      // add new document
      const docRef = await addDoc(routesRef, newRoute);
      fetchData();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // delete document by Id
  const deleteDocumentById = async (documentId) => {
    try {
      const docRef = doc(db, "routes", documentId);
      await deleteDoc(docRef);
      // refresh
      fetchData();

      console.log("Document successfully deleted with ID: ", documentId);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      {/* Does not have current route, can publish */}
      {!showPulish && !currentRoute && (
        <div className="container--1">
          <div className="current-route">The current route: None</div>
          <div>
            <a className="btn1" href="#" onClick={handleModalOpen}>
              pulish
            </a>
          </div>
        </div>
      )}
      {/* has current route, can be canceled */}
      {!showPulish && currentRoute && (
        <div className="container--1">
          <div className="current-route">
            The current route: {currentRoute.departure} -{" "}
            {currentRoute.destination} on{" "}
            {format(currentRoute.date.toDate(), "yyyy-MM-dd")}
          </div>
          <div>
            <a
              className="btn1"
              href="#"
              onClick={() => deleteDocumentById(currentRoute.id)}
            >
              Cancel
            </a>
          </div>
        </div>
      )}
      {/* Publish componment */}
      {showPulish && (
        <Publish
          handleModalClose={handleModalClose}
          setCurrentRoute={setCurrentRoute}
          addRoute={addRoute}
        ></Publish>
      )}
    </>
  );
}
