import React, { useState, useEffect } from "react";
// import "/src/styles.css";
import { makeStyles } from "@material-ui/core/styles";

// m-UI-cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";

import { DateTime } from "luxon";



import image1 from "../img/1.jpg";

const BlogArticle = ({ blogData }) => {

  // console.log("From Article : ", blogData);

  const { fields } = blogData;

  // console.log("From Article (fields): ", fields);

  const useStyles = makeStyles({
    root: {
      width: 450
    },
    orange: {
      backgroundColor: "#f00"
    },
    title: {

      textTransform: "uppercase",

      fontSize: "1.2rem",
		fontFamily: "Montserrat",
		fontWeight: 900,
		color: "#294A55",
    textDecoration: "none",
    
    },
    subtitle: {

      fontSize: "1rem",
		fontFamily: "Montserrat",
		fontWeight: 400,
		color: "#294A55",
    textDecoration: "none",
    
    }
  });

  

  const classes = useStyles();
  let ISO = DateTime.fromISO(fields.blogDate)
  const day=['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  const month=['','January','February','March','April','May','June','July','August','September','October','November','December']

  const showTags = () => { fields.blogTags.map( item => 
    
   <div>{`item`}</div>
    // <Chip
    //   // avatar={`<Avatar>#</Avatar>`}
    //   size="small"
    //   label="item"
    //   onClick=""
    // />
  
  ) }

  return (

    
    <>
    {/* {console.log(fields)} */}
      <div>
        <div className="cat-container" id="theBlog">
          <div className="cat-item">
            <Card className={classes.root} component={Link} to={`/blog/${fields.blogId}`} key={fields.blogId}>
              <CardActionArea>
                <CardHeader className={classes.title}
                  avatar={<Avatar className={classes.orange} alt={fields.blogAuthor} src={fields.blogAvatar.fields.file.url}/>}
                  title={fields.blogTitle}
                  subheader={`${fields.blogAuthor} @ ${day[ISO.weekday]}, ${month[ISO.month]} ${ISO.day}th ${ISO.year}`}
                  id="blogHead"
                />

                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={fields.blogImage.fields.file.url}
                  title="Contemplative Reptile"
                />
                <CardContent id="blogCaption">
                  <Typography gutterBottom variant="h6" component="h2">
                    {fields.blogSubtitle}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                   {fields.blogCaption}
                  </Typography>
                </CardContent>
                <CardActions>

                {fields.blogTags !== undefined &&
                fields.blogTags.map((item) => (
                  <Chip
                  avatar={<Avatar>#</Avatar>}
                  size="small"
                  label={item}
                  onClick=""
                /> )
                )}
                  
                  
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}


export default BlogArticle;