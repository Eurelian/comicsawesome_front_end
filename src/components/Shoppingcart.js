import React, { useState } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import MiniSpidey from "../img/mini_spidey.png";
import MiniHulk from "../img/mini_hulk.png";
import MiniBatman from "../img/mini_batman.png";
import MiniYoda from "../img/mini_yoda.png";
import MiniDarth from "../img/mini_darth.png";
import Avatar from "@material-ui/core/Avatar";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	tableContainer: {
		minWidth: "350px",
	},
	title: {
		fontFamily: "Bangers",
		fontSize: "3rem",
		textDecoration: "none",
	},
	cartDel: {
		fontFamily: "Montserrat",
		fontSize: "0.5 rem",
		textDecoration: "none",
		backgroundColor: "#f00",
		color: "#fff",
		fontWeight: "bold",
	},
});

const Shoppingcart = (props) => {
	const classes = useStyles();
	let { cartItems } = props;

	console.log(cartItems);

	if (cartItems.length > 0) {
		return (
			<>
				<div id='cartWrapper'>
					<div className={classes.title} id='cartTitle'>
						FEED THE CART - IT'S STILL HUNGRY
					</div>

					<TableContainer component={Paper}>
						<Table
							aria-label='customized table'
							className={classes.tableContainer}
						>
							<TableHead>
								<TableRow>
									<StyledTableCell>PRODUCT</StyledTableCell>
									<StyledTableCell align='right'>PRICE</StyledTableCell>
									<StyledTableCell align='right'>QTY</StyledTableCell>
									<StyledTableCell align='right'>TOTAL</StyledTableCell>
									<StyledTableCell align='right' />
								</TableRow>
							</TableHead>
							<TableBody>
								{cartItems.map((each) => {
									return (
										<StyledTableRow key={each.title}>
											<StyledTableCell component='th' scope='row'>
												<div id='cartImageProduct'>
													<img
														src={each.image}
														style={{ height: "45px" }}
														ALT={each.title}
													/>
													{each.title}
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div className='cartPrice'>{each.price} $</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div id='cartQuantityWrapper'>
													<div
														className='cartChangeQuantity'
														onClick={() =>
															props.addItems(each.productid, each.title)
														}
													>
														+
													</div>
													<div className='cartQuantity'>{each.quantity}</div>
													<div
														className='cartChangeQuantity'
														onClick={() =>
															props.reduceItems(each.productid, each.title)
														}
													>
														–
													</div>
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<div className='cartPrice'>
													{Number.parseFloat(
														each.price * each.quantity
													).toFixed(2)}{" "}
													$
												</div>
											</StyledTableCell>
											<StyledTableCell align='right'>
												<Chip
													onClick={() =>
														props.deleteItems(each.title, each.quantity)
													}
													size='small'
													label='X'
													className={classes.cartDel}
												/>
											</StyledTableCell>
										</StyledTableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>

					<div id='cartButtons'>
						<div className='cartButton1'>
							<div>
								<img src={MiniDarth} ALT='Mini Darth' />
							</div>
							<div>
								<Button variant='contained'>BUY MORE</Button>
							</div>
						</div>
						<div className='cartButton2'>
							<div>
								<img src={MiniYoda} ALT='Mini Yoda' />
							</div>
							<div>
								<Button variant='contained'>CHECKOUT</Button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div id='cartWrapper'>
					<div id='cartEmptyCharsTop'>
						<div id='cartEmptyCharTop1'>
							<img src={MiniBatman} ALT='Mini Batman' />
						</div>
						<div id='cartEmptyCharTop2'>
							<img src={MiniHulk} ALT='Mini Hulk' />
						</div>
					</div>
					<div id='cartEmpty' className={classes.title}>
						YOUR CART IS EMPTY
						<br /> <br />
						IT'S HUNGRY ... FEED IT !
					</div>
					<div id='cartEmptyCharBottom'>
						<img src={MiniSpidey} ALT='Mini Spidey' />
					</div>
				</div>
			</>
		);
	}
};

export default Shoppingcart;
