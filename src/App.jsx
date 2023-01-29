import Guest from "./guest/Guest";

const App = () => {
  const guests = [
    {
      id: 1,
      firstname: "Sébastien",
      lastname: "Le Bosser",
      hasConfirmed: true,
    },
    {
      id: 2,
      firstname: "Jules",
      lastname: "Smith",
      hasConfirmed: false,
    },
    {
      id: 3,
      firstname: "Enora",
      lastname: "Cohoner",
      hasConfirmed: true,
    },
  ];
  return (
    <div>
      {guests.map((guest, index) => {
        return (
          <Guest
            key={guest.id}
            index={index + 1}
            firstname={guest.firstname}
            lastname={guest.lastname}
            hasConfirmed={guest.hasConfirmed}
          />
        );
      })}
    </div>
  );
};

export default App;
