import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//import Markdown from './Markdown';
import styled from "styled-components";

const Cardband = styled.div`
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;

    @media (min-width: 30em) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media (min-width: 60em) {
        grid-template-columns: repeat(2, 1fr);
      }
    `;

    
function Main() {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
    
      </Typography>
      <Divider />
      <Cardband >
            {/* {data.map((News,index) => (

index===0 ?(
    <Carditem1 key={index} >
    <CardThumb  backgroundImage={News.banner_image}></CardThumb>
    <CardArticle>
        <CardH1>{News.title}</CardH1>
      
        
        
    </CardArticle>
</Carditem1>
  
    ):(
        <Carditem key={index} >
        <CardThumb  backgroundImage={News.banner_image}></CardThumb>
        <CardArticle>
            <CardH1>{News.title}</CardH1>
          
      
        </CardArticle>
    </Carditem>
       )
               
            ))} */}
            </Cardband>
    </Grid>
  );
}



export default Main;
