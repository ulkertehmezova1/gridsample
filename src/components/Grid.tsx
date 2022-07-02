import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, selectedGridRowsCountSelector} from '@mui/x-data-grid';
import { columns } from '../info';
import { info } from '../row';
import { TextField, Button,  Tooltip} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Pagination from '@mui/material/Pagination';
export default function DataGridDemo() {

  const [arrIds, setArrids] =React.useState<any>([])
  const [rows,setRows]=React.useState(info)

  function handleDel(){
setRows((info)=>info.filter((x)=>!arrIds.includes(x.id)))
  }
  return (

    <Box sx={{ height: 400, width: '100%' }}
    style={{
      position:'relative'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
      }}>
      <TextField
          label="Axtar"
          size='small'
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch',
           color:'#00b3fc',
        '& .Mui-focused':{
          color:'#00b3fc',
          '& .MuiTextField-root':{
            color:'#00b3fc'
          }, 
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#00b3fc',
          }},
      }}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon></SearchIcon></InputAdornment>,
          }}
        />
        <div>
        <RestartAltIcon sx={{m:1,
        border:'1px solid #00b3fc',
        color:'#00b3fc',
        padding:'4px',
        backgroundColor:'white',
        borderRadius:'5px',
        }}></RestartAltIcon>
        <FilterAltIcon sx={{
          m:1,
          padding:'4px',
          border:'1px solid #00b3fc',
          color:'white',
          backgroundColor:'#00b3fc',
          borderRadius:'5px'
        }}></FilterAltIcon>
        </div>
       
      </div>
      <DataGrid
    
      scrollbarSize={5}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       checkboxSelection
       onSelectionModelChange={(ids)=>(setArrids(ids))}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            color: '#00b3fc',
          },
          '& .MuiDataGrid-row:hover':{
            backgroundColor:'#dceefd'
          }
        }}
      />
       <Pagination count={10} variant="outlined" shape="rounded" 
       sx={{
        '& .MuiButtonBase-root':{
          border:'1px solid #00b3fc',
    
        },
        '& .MuiButtonBase-root:hover':{
          backgroundColor:"#00b3fc",
          color:'white'
        },
        '& .MuiTouchRipple-root':{
          color:'#00b3fc'
        },
        '& .MuiButtonBase-root:focus':{
          backgroundColor:"#00b3fc",
          color:"white"
        }
       }}
       style ={
        {
          position:'absolute',
          bottom:'25px',
          left:'70%'
        }
       }
       />
       <Tooltip title='Silmək istədiyiniz sətri seçin'><Button sx={{
        marginTop: '10px'
       }}color ='error' variant="outlined" startIcon={<DeleteIcon color='error'/>} onClick={handleDel}>SİL
</Button></Tooltip>
          {/* <Button><DeleteIcon className='abre'></DeleteIcon></Button> 
           <DeleteIcon className ='abre' style={{top:'190'}}></DeleteIcon>
           <DeleteIcon className='abre' style ={{top:'240'}}></DeleteIcon>
           <DeleteIcon className ='abre' style ={{top:'290'}}></DeleteIcon> */}
     </Box>
  );
}
