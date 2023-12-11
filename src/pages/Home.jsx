import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/Data";

const Home = () => {
  const [appointment, setAppointment] = useState(appointmentData);

  const handleAdd = (newAppointment) => {
    setAppointment([...appointment, newAppointment]);
  };

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList appointment={appointment} />
    </main>
  );
};

export default Home;
