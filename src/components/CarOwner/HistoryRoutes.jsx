import React, { useEffect, useState, useContext } from "react";
import "./CarOwner.css";
import { db } from "../../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { format } from "date-fns";

const HistoryRoutes = () => {
  const [historyRoutes, setHistoryRoutes] = useState([]);
  const fetchData = async () => {
    const routesRef = collection(db, "routes");
    // create query
    const q = query(
      routesRef,
      where("driver", "==", "test"),
      where("date", "<", Timestamp.now())
    );

    // execute query
    const querySnapshot = await getDocs(q);

    // Process Query Results
    const routes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const sortedRoutes = routes.sort((a, b) => b.date.seconds - a.date.seconds);
    if (routes != null) {
      setHistoryRoutes(sortedRoutes.slice(0, 10));
    } else {
      setHistoryRoutes([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("historyRoutes", historyRoutes);
  return (
    <div className="history-routes-container">
      <h3 className="history-routes-title">History Routes</h3>
      <table className="history-routes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Publish Time</th>
          </tr>
        </thead>
        <tbody>
          {historyRoutes.map((route, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{route.departure}</td>
              <td>{route.destination}</td>
              <td>{format(route.date.toDate(), "yyyy-MM-dd")}</td>
              <td>{new Date(route.timestamp).toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryRoutes;
