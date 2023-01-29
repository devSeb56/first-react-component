import GuestConfirmed from "../guestConfirmed/GuestConfirmed";

const Guest = ({ index, firstname, lastname, hasConfirmed }) => {
  return (
    <div>
      <span>{index}</span>
      <span>{firstname}</span>
      <span>{lastname}</span>
      <GuestConfirmed hasConfirmed={hasConfirmed} />
    </div>
  );
};

export default Guest;
