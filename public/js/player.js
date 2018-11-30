function iframeDidLoad() {
    alert('Done');
}

function newGame() {
    var roms = ['//www.retrogames.cc/embed/32471-007-goldeneye-usa.html',
                 '//www.retrogames.cc/embed/32667-banjo-kazooie-usa-rev-a.html',
                 '//www.retrogames.cc/embed/32114-donkey-kong-64-usa.html']
    
    document.getElementById('player').src = roms[Math.floor(Math.random() * roms.length)];


}
// donkey Kong logic
 $("#donkeyKong").on("click", function() {
    $("#frame1").attr('src', '//www.retrogames.cc/embed/32114-donkey-kong-64-usa.html');
    // $('#donkeyKong').attr('href', '//www.retrogames.cc/embed/32114-donkey-kong-64-usa.html');
    // alert("hello")

    console.log("Donkey Kong Running")
 });
//  Banjo Kazooie logic
$("#banjoKazooie").on("click", function() {
    $("#frame1").attr('src', '//www.retrogames.cc/embed/32667-banjo-kazooie-usa-rev-a.html');

    console.log("Banjo Kazooie Running")
 });
// goldeneye logic
$("#goldenEye").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/32471-007-goldeneye-usa.html");

    console.log("golden Eye Running")
 });
//  NBA Jam logic
$("#nbaJam").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/33035-nba-jam-2000-europe.html");

    console.log("NBA Jam Running")
 });
//  Tony Hawk Pro Skater 2
 $("#THPS2").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/32673-tony-hawk-s-pro-skater-2-usa.html");

    console.log("Tony Hawks Pro Skater 2 Running")
 });
//  Mario Kart 64
 $("#marioKart").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/32603-mario-kart-64-usa.html");

    console.log("Mario Kart 64 Running")
 });
//  Legend of Zelda

$("#zelda").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/32113-legend-of-zelda-the-ocarina-of-time.html");

    console.log("The Legend of Zelda Running")
 });
//  mario party 3
$("#marioParty3").on("click", function() {
    $("#frame1").attr('src', "//www.retrogames.cc/embed/32906-mario-party-3-usa.html");

    console.log("mario party 3 Running")
 });
// pokemon stadium 2
$("#pokemonStadium2").on("click", function() {
    $("#frame1").attr('src',  "//www.retrogames.cc/embed/32124-pokemon-stadium-2-usa.html"
);

    console.log("pokemon Stadium2 Running")
 });
 