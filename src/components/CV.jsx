export const CV = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={`${import.meta.env.BASE_URL}files/Thi_Trieu_Tien_Tran_CV_New.pdf`}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="My CV"
      />
    </div>
  );
};
