// import { Typography, Backdrop, CircularProgress } from '@mui/material';

// import { makeStyles } from '@mui/styles'

// // const useStyles = makeStyles((theme) => ({
// //   backdrop: {
// //     zIndex: theme.zIndex.drawer + 1000,
// //     color: '#fff',
// //   },
// // }));

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

// const Animation = () => {
//   return (
//     <div style={{ position: 'fixed' }}>
//       <Typography style={{ fontSize: '40px' }}>Banquero</Typography>
//       <div class="spinner">
//         <div class="cube1"></div>
//         <div class="cube2"></div>
//       </div>
//     </div>
//   );
// }

// export default function Spinner({ open }) {
//   const classes = useStyles();
//   return (
//     <>
//       <Backdrop className={classes.backdrop} open={open}>
//         <Animation />
//       </Backdrop>
//       <Backdrop className={classes.backdrop} open={open}><CircularProgress /></Backdrop>
//     </>
//   )
// }



// export default function Spinner() {
//   return (
//     <>
//       <Backdrop className={classes.backdrop} open={open}>
//         <div class="spinner">
//           <div class="cube1"></div>
//           <div class="cube2"></div>
//         </div>
//       </Backdrop>
//     </>
//   )
// }
import Backdrop from '@mui/material/Backdrop';

export default function Spinner({ open }) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div>
      </Backdrop>
    </div>
  );
}