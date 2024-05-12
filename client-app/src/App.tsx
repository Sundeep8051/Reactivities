import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Activity } from "./Activity";
import { Header, List, ListItem } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <Header as="h2" content="Reactivities" icon="users"></Header>
      <div>
        <List as="ul">
          {activities.map((activity: Activity) => (
            <ListItem as="li" key={activity.id}>
              {activity.title}
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
