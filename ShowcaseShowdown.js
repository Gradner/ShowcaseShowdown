// Get User's Name
var name = prompt("What is your name?");
// Declare Prize Array
var Prize = new Array ();
// Create Prizes Using Existing Prize Object Template
Prize[0]={
  'name':'Dodge Charger!',
	'imgURL':'http://www.fantasyeyelandballoons.com/The_Price_is_Right_7-4-08_2_Walk_Thru_Stars_Behind_Car_5x7-72.jpg',
	'retail':22572
};
Prize[1]={
	'name':'Ford Mustang!',
	'imgURL':'http://www.casinoenterprisemanagement.com/sites/default/files/thepriceisrightv3.jpg',
	'retail':21589
};
Prize[2]={
	'name':'Hyundai Elantra!',
	'imgURL':'http://i33.photobucket.com/albums/d74/devongpictures/la-et-st-price-is-right-male-showcase-model-20-001_zpsd28ef55a.jpg',
	'retail':17258
};
Prize[3]={
	'name':'Chevrolet Cavalier!',
	'imgURL':'http://www.johndelk.com/static/dyn-images/1/1717.jpeg',
	'retail':16345
};
Prize[4]={
	'name':'LG Washer/Dryer Set!',
	'imgURL':'http://images.businessweek.com/ss/07/05/0528_digital_home/image/02_lg.jpg',
	'retail':2700
};
Prize[5]={
	'name':'Maytag Washer/Dryer Set!',
	'imgURL':'http://images04.olx.com/ui/5/64/14/1269557101_11536014_1-Pictures-of--New-2005-Maytag-WasherDryer.jpg',
	'retail':2000
};
Prize[6]={
	'name':'Viking Stove!',
	'imgURL':'http://www.appliancist.com/viking-stove-36-gas-stove.jpg',
	'retail':3699
};
Prize[7]={
	'name':'LG Stove!',
	'imgURL':'http://images.bestbuy.com/BestBuy_US/images/products/8943/8943058_sb.jpg',
	'retail':2199
};
Prize[8]={
	'name':'Luxury Retreat: Private Villa!',
	'imgURL':'http://blog.luxuryretreats.com/wp-content/uploads/image/PriceRight_Showcase.jpg',
	'retail':8000
};
Prize[9]={
	'name':'Oak Bedroom Set!',
	'imgURL':'http://www.vh1.com/celebrity/bwe/images/2007/10/bedroom%20showcase%20showdown.jpg',
	'retail':5699
};
Prize[10]={
	'name':'Tesla S Roadster!',
	'imgURL':'http://img696.imageshack.us/img696/8540/vlcsnap2010042211h39m10.jpg',
	'retail':110950
};
Prize[11]={
	'name':'40ft Sailboat!',
	'imgURL':'http://www.on-stjohn.com/images/THEPRICEISRIGHT.jpg',
	'retail':87650
};
Prize[12]={
	'name':'Zero Dual-Sport Motorcycle!',
	'imgURL':'http://img203.imageshack.us/img203/355/vlcsnap2010042211h42m47.jpg',
	'retail':13995
};
Prize[13]={
	'name':'Brammo Enertia Motorcycle',
	'imgURL':'http://brammofan.files.wordpress.com/2011/11/tpir.jpg?w=620&h=348',
	'retail':7995
};
Prize[14]={
	'name':'Indianapolis Dream Vacation!',
	'imgURL':'http://www.livingdice.com/wp-content/uploads/2011/02/GenCon-Price-is-Right-1.jpg',
	'retail':3776
};
Prize[15]={
	'name':'Bali Dream Vacation!',
	'imgURL':'http://img.gawkerassets.com/img/1862ln9curnvnpng/original.png',
	'retail':4975
};
Prize[16]={
	'name':'Golf Cart/Club Package',
	'imgURL':'http://media.winnipegfreepress.com/images/240*211/4607180.jpg',
	'retail':9638
};
Prize[17]={
	'name':'Sony Entertainment Center',
	'imgURL':'http://www.cepro.com/images/uploads/RuncoPIR.jpg',
	'retail':5247
};
Prize[18]={
	'name':'Family Boogie Board Set!',
	'imgURL':'http://www.catchsurf.com/blog/wp-content/uploads/2011/05/Price-is-Right-Catch-Surf-Drew-Carey-580x322.png',
	'retail':487
};
Prize[19]={
	'name':'Trip to Space Camp!',
	'imgURL':'http://i.ytimg.com/vi/Kbo5YRXtkfE/0.jpg',
	'retail':4799
};
Prize[20]={
	'name':'New Orleans Vacation!',
	'imgURL':'http://i.ytimg.com/vi/mk1VhLaRVuE/0.jpg',
	'retail':2343
};
Prize[21]={
	'name':'Costa Rica Dream Vacation!',
	'imgURL':'http://0.tqn.com/h/gymnastics/1/H/F/A/-/-/NastiaPIR3.jpg',
	'retail':3743
};
Prize[22]={
	'name':'Pair of Yamaha Snowmobiles!',
	'imgURL':'http://longlakeny.files.wordpress.com/2010/03/snowmobile-picture-7.jpg',
	'retail':5298
};
Prize[23]={
	'name':'Yamaha Waverunner Jetski!',
	'imgURL':'http://wac.450f.edgecastcdn.net/80450F/wyrk.com/files/2011/06/Jet-Ski-via-Flickr-by-pdobeson.jpg',
	'retail':11299
};
// Function used to call a random prize from the prize Array
//
// ** IMPORTANT ** When adding prizes to the array, make sure to increase the value in this function ** IMPORTANT **
//                 to accomodate the new total number of prize objects in the prize array!!!!!!!!!!!
var prizeID=function(){
	id=Math.floor(Math.random()*24);
	return Prize[id];
	};
// Call random prize functions to pull a random prize from the pool of prizes in the array for player and "ethel"
//
// Possible room for expansion - Roll for chance at themed prize sets or high value items?
//                             - Limit the number of cars or vacations available on a single game to one (unless themed roll succeeds)
//                             - Keep showdown or pass? (BIG Game mechanic in live show)
//                             - MOAR PRIZES (and more efficient prize logging tool i.e. CSV file or JSON object array)
var PlayerPrize1 = prizeID();
var PlayerPrize2 = prizeID();
var PlayerPrize3 = prizeID();
var EthelPrize1 = prizeID();
var EthelPrize2 = prizeID();
var EthelPrize3 = prizeID();
// Calculate Total Retail Prices and Ethel's Bid
// Playing around with her bid algorithm to make it based on the total price is the only improvement I can really foresee here
var PlayerTotalRetail= PlayerPrize1.retail + PlayerPrize2.retail + PlayerPrize3.retail;
var EthelTotalRetail= EthelPrize1.retail + EthelPrize2.retail + EthelPrize3.retail;
var EthelBid=(EthelTotalRetail-1500)+(Math.floor(Math.random()*2000));
// EASTER EGG! OMG!
if(name==='Snoop'){
	document.getElementById('p1').innerHTML="Actual Street Price: " + PlayerTotalRetail + "</br><img src='http://i.dailymail.co.uk/i/pix/2012/01/02/article-2081497-0F52BDB300000578-507_634x631.jpg' width='240' height='180' align='center'>";
	} else {};
// Finally, the button. Would be nice to get some jQueery going in here, but that'll come with time. For now it does it's job.
// Would be nice to have a play again function and leaderboard system eventually, keep that in mind.
var placeBid=function(){
	var PlayerBid = document.getElementById('pbid').value;
	var Playerscore = PlayerTotalRetail - PlayerBid + 1;
	var Ethelscore = EthelTotalRetail - EthelBid;
	document.getElementById('p2').innerHTML="Actual Retail Price: " + PlayerTotalRetail;
	document.getElementById('p3').innerHTML="Actual Retail Price: " + EthelTotalRetail;
	if(Playerscore>=0){
		if(Playerscore<Ethelscore){
			if(Playerscore<250){
				document.getElementById('p4').innerHTML="Congratulations! You bid within $250 of your showcase and won both!<audio src='http://www.qwizx.com/gssfx/usa/tpircccwww.wav' autoplay='autoplay'></audio>";
				document.getElementById('p1').innerHTML="You Win Both Showcases! OMFG!</br><img src='http://lileks.com/bleat/wp-content/uploads/2009/07/82.jpg' width='240' height='180' align='center'>"
			} else {
				document.getElementById('p4').innerHTML="Congratulations! You bid closest without going over and won your showcase!<audio src='http://www.qwizx.com/gssfx/usa/tpir-dings.wav' autoplay='autoplay'></audio>";
				document.getElementById('p1').innerHTML="You Win!</br><img src='http://blog.mlive.com/entertainment/detroit_impact/2009/08/large_090818-the-prce-is-right.jpg' width='240' height='180' align='center'>"
			};
		} else {
			if(Ethelscore<250){
				document.getElementById('p4').innerHTML="That rat, Ethel, bid within $250 and won your showcase! Press f5 for revenge!<audio src='http://www.qwizx.com/gssfx/usa/tpirhorns.wav' autoplay='autoplay'></audio>";
				document.getElementById('p1').innerHTML="You Lose! Ethel Wins!</br><img src='http://tourwestamerica.com/Uploads/PriceIsRight2.jpg' width='240' height='180' align='center'>"
			} else {
				document.getElementById('p4').innerHTML="That rat, Ethel, bid closer without going over and won, press f5 to try again!<audio src='http://www.qwizx.com/gssfx/usa/tpirhorns.wav' autoplay='autoplay'></audio>";
				document.getElementById('p1').innerHTML="You Lose! Ethel Wins!</br><img src='http://tourwestamerica.com/Uploads/PriceIsRight2.jpg' width='240' height='180' align='center'>"
			};
		};
	} else{
	document.getElementById('p4').innerHTML="You have Overbid! Sorry, better luck next time!<audio src='http://www.qwizx.com/gssfx/usa/tpirhorns.wav' autoplay='autoplay'></audio>";
	document.getElementById('p1').innerHTML="You Lose!</br><img src='http://lexpert.files.wordpress.com/2010/08/tpir.jpg' width='240' height='180' align='center'>"
	};
};
