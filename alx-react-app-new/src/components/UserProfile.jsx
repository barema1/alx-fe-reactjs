const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '16px auto', maxWidth: '400px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ marginBottom: '4px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
