import Backdrop from '@mui/material/Backdrop';

export default function Spinner({ open }) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </Backdrop>
    </div>
  );
}