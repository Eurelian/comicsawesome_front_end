import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import { findByLabelText } from "@testing-library/react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	textContainer: {
		position: "absolute",
		marginLeft: "20%",
		marginTop: "15%",
	},

	title: {
		color: "#fff",
		textTransform: "uppercase",
		fontSize: "54px",
		fontFamily: "Roboto",
		fontWeight: "700",
		paddingBottom: "10px",
		textShadow: "5px 5px 10px rgba(0,0,0,0.9)",
		lineHeight: "1.2",
	},

	titleSub: {
		color: "#fff",
		fontSize: "25px",
		fontFamily: "Roboto",
		fontWeight: "400",
		textShadow: "5px 5px 10px rgba(0,0,0,0.9)",
	},

	heroContainer: {
		position: "relative",
		width: "100%",
		height: "100vh",
		overflow: "hidden",
		boxShadow: "0px 5px 20px 2px rgba(0,0,0,0.35)",
	},

	heroImage: {
		display: "block",
		width: "100%",
		zIndex: "-1",
	},

	btn: {
		marginTop: "30px",
		fontFamily: "Roboto",
		display: "inline-block",
		textDecoration: "none",
		border: "3px solid white",
		padding: "15px 30px",
		// borderRadius: "50px 5px 50px 5px",
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
		transition: "all 0.4s ease",
		"&:hover": {
			transform: "translateY(-5px)",
			boxShadow: "0px 5px 20px 4px rgba(230, 36, 41, 0.5) ",
			background: "#e62429",
			borderRadius: "50px 5px 50px 5px",
		},
		"&:active": {
			transform: "translateY(-2px)",
			boxShadow: "0px 3px 15px 3px rgba(230, 36, 41, 0.5) ",
		},
	},
});

const HeroSlider = () => {
	const classes = useStyles();
	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<React.Fragment>
			<Slider {...settings}>
				<div>
					<Grid container className={classes.heroContainer}>
						<Grid container direction='column'>
							<Grid item>
								<img
									className={classes.heroImage}
									src='https://images7.alphacoders.com/512/thumb-1920-512977.jpg'
								/>
							</Grid>
							<Grid item xs={5} className={classes.textContainer}>
								<Typography className={classes.title}>
									DEADPOOL IS BACK
								</Typography>
								<Typography className={classes.titleSub}>
									Check out what he's been up to in issue{" "}
									<em>
										<strong>#14</strong>
									</em>
								</Typography>
								<Link
									className={classes.btn}
									to='/category/comicbooks/deadpool-classic'
								>
									Learn More
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid container className={classes.heroContainer}>
						<Grid container direction='column'>
							<Grid item>
								<img
									className={classes.heroImage}
									src='https://img3.goodfon.com/wallpaper/nbig/1/ab/iron-man-marvel-comics-294.jpg'
								/>
							</Grid>
							<Grid item xs={5} className={classes.textContainer}>
								<Typography className={classes.title}>
									Will Iron Man Survive?
								</Typography>
								<Typography className={classes.titleSub}>
									Check out what he's been up to in issue{" "}
									<em>
										<strong>#14</strong>
									</em>
								</Typography>
								<Link
									className={classes.btn}
									to='/category/comicbooks/infinity-war'
								>
									Learn More
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid container className={classes.heroContainer}>
						<Grid container direction='column'>
							<Grid item>
								<img
									className={classes.heroImage}
									src='https://www.ubackground.com/_ph/22/697416964.jpg'
								/>
							</Grid>
							<Grid item xs={5} className={classes.textContainer}>
								<Typography className={classes.title}>
									ULTIMATE SHOWDOWN: BLACK PANTHER VS CAPTAIN AMERICA
								</Typography>
								<Typography className={classes.titleSub}>
									Check out what he's been up to in issue{" "}
									<em>
										<strong>#14</strong>
									</em>
								</Typography>
								<Link
									className={classes.btn}
									to='/category/comicbooks/marvel_encyclopedia'
								>
									Learn More
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Slider>
		</React.Fragment>
	);
};
export default HeroSlider;

{
	/* <div className={classes.heroBlock}>
				<div className={classes.textBlock}>
					<div>
						<h1 className={classes.title}>Deadpool strikes again</h1>
					</div>
				</div>

				<img
					className={classes.img}
					src='https://images7.alphacoders.com/512/thumb-1920-512977.jpg'
					alt='image1'
				/>
			</div> */
}

{
	/* <div>
				<img
					className={classes.img}
					src='https://img3.goodfon.com/wallpaper/nbig/1/ab/iron-man-marvel-comics-294.jpg'
					alt='image2'
				/>
			</div>
			<div>
				<img
					className={classes.img}
					src='https://wallpapertag.com/wallpaper/full/0/1/e/865188-download-free-dc-comics-backgrounds-1920x1080-mac.jpg'
					alt='image3'
				/>
			</div>
			<div>
				<img
					className={classes.img}
					src='https://www.ubackground.com/_ph/22/697416964.jpg'
					alt='image4'
				/>
			</div> */
}
