const GuestConfirmed = ({ hasConfirmed }) => {
  if (hasConfirmed) {
    return <span>yes</span>;
  } else {
    return <span>no</span>;
  }
};

export default GuestConfirmed;
