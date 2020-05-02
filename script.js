Vue.component('details-modal', {
 props:{instrument: Object},
 template: '#details-modal-template'});
Vue.component('create-modal', {
 props:{
 newInstrument:{
 type: Object,
 default: function(){
  return{
  name: "",
  type: "",
  price: "0",
  brand: "",
  image: "",
  inCart: false,
  details: false }}}},
  template: '#create-modal-template'});

new Vue({
  el: "#app",
  data:{
  showCreateModal: false,
  myCart: [],
  instruments: [
 {name: "The Australia-shaped guitar from CHONS Guitars",
  type: "Guitar",
  price: "369.79",
  brand: "Yamaha",
  image: "https://images.reverb.com/image/upload/s--c6kKd_Zt--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1515193413/k95metoca7a39gdbzhuc.jpg",
  inCart: false,
  details: false},
    
 {name: "Maverick",
  type: "Guitar",
  price: "769.99",
  brand: "Fender",
  image: "https://cdn.mos.cms.futurecdn.net/65VFJsatrVcLqZH7rwvBNA.jpg",
  inCart: false,
  details: false},
      
  {name: "Bosendorfer Piano",
   type: "Piano",
   price: "69,420.99",
   brand: "Yamaha",
   image: "https://faustharrisonpianos.com/wp-content/uploads/2018/12/bosen.jpg",
   inCart: false,
   details: false},
    
 {name: "Guitar Hero 4 Stratocaster",
  type: "Guitar",
  price: "69.99",
  brand: "Fender",
  image: "https://images-na.ssl-images-amazon.com/images/I/61ealt-ZwgL._SL1295_.jpg",
  inCart: false,
  details: false},
     
  {name: "Thomann Didgeridoo Bambus 120cm",
   type: "Didgiridoo",
   price: "549.89",
   brand: "Fender",
   image: "https://www.thomann.de/pics/bdb/115634/13439081_800.jpg",
   inCart: false,
   details: false},
      
  {name: "Studio 49 Series 2000 SGd Soprano Glockenspiel",
   type: "Glockenspiel",
   price: "225.00",
   brand: "Maton",
   image: "https://www.westmusic.com/product/image/medium/200795_0.png",
   inCart: false,
   details: false},
     
  {name: "Ormsby Custom Shop Goliath 7-String",
   type: "Electric Guitar",
   price: "3,064.20",
   brand: "Maton",
   image: "https://reverb-res.cloudinary.com/image/upload/v1516378440/Ormsby_ygoffu.jpg",
   inCart: false,
   details: false},
      
  {name: "Yamaha Piano, Model G1, 1977",
   type: "Piano",
   price: "7,950.00",
   brand: "Yamaha",
   image: "https://faustharrisonpianos.com/wp-content/uploads/2020/01/2552290.jpg",
   inCart: false,
   details: false},
     
  {name: "Kirby Otamatone",
   type: "Otamatone",
   price: "1,978,625,499.00",
   brand: "Maton",
   image: "https://images-na.ssl-images-amazon.com/images/I/61gCtKkBCgL._SL1200_.jpg",
   inCart: false,
   details: false}],},
 
  methods:{
  addToCart: function(instrument){
    instrument.inCart = true;
    instrument.details = false;
    this.myCart.push(instrument); },
    
  emptyCart: function(){
    this.instruments.forEach(function(instrument){
    instrument.inCart = false;})
    this.myCart = [];},
    
  createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
      errors.push("Item name is Required");}
      if (newInstrument.type === ""){
      errors.push("Must include an Instrument Type");}
      if (newInstrument.price <= 0){
      errors.push("Price must exceed $0");}
      if (newInstrument.brand === ""){
      errors.push("Please Select a Brand");}
      if (errors.length > 0){
      alert(errors);
      }else{
      this.instruments.push(newInstrument);
      this.showCreateModal = false;
      }}}
   });