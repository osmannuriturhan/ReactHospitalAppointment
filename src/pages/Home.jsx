import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
// import { appointmentData } from "../helper/Data";

const Home = () => {
  // const [appointment, setAppointment] = useState(appointmentData);
  const [appointment, setAppointment] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const handleAdd = (newAppointment) => {
    setAppointment([...appointment, newAppointment]);
    localStorage.setItem(
      "list",
      JSON.stringify([...appointment, newAppointment])
    );
  };

  const handleDelete = (id) => {
    const filteredAppointment = appointment.filter((item) => item.id !== id);
    setAppointment(filteredAppointment);
    localStorage.setItem("list", JSON.stringify(filteredAppointment));
  };

  const handleDoubleClick = (id) => {
    const updatedAppointment = appointment.map((item) => {
      if (item.id === id) {
        return { ...item, consulted: !item.consulted };
      }
      return item;
    });
    setAppointment(updatedAppointment);
    localStorage.setItem("list", JSON.stringify(updatedAppointment));
  };

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointment={appointment}
        handleDelete={handleDelete}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home;
