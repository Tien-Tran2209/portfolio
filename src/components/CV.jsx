export const CV = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={`${import.meta.env.BASE_URL}files/Curriculum vitae - Thi Trieu Tien TRAN.pdf`}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="My CV"
      />
    </div>
  );
};
