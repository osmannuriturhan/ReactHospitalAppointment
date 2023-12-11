import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/Data";

const Home = () => {
  const [appointment, setAppointment] = useState(appointmentData);

  const handleAdd = (newAppointment) => {
    setAppointment([...appointment, newAppointment]);
  };

  const handleDelete = (id) => {
    const filteredAppointment = appointment.filter((item) => item.id !== id);
    setAppointment(filteredAppointment);
  };

  const handleDoubleClick = (id) => {
    const updatedAppointment = appointment.map((item) => {
      if (item.id === id) {
        return { ...item, consulted: !item.consulted };
      }
      return item;
    });
    setAppointment(updatedAppointment);
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
