function initMap(){
    var CreatedMarkers=[];
    var openedWindow;
    var userLocation;
    //get and set user location to origin list
    getUserLocation();

    var data =[
        {
           coords:{lat:43.1943209959493, lng:-79.8226782303895 },
           name:"Best Western Premier C Hotel by Carmen's",
           content:"<h6>Best Western Premier C Hotel by Carmen's</h6><p>Address: 1530 Stone Church Road East </p><p>European boutique style and luxury. A fusion of design and comfort, simplicity and sophistication. Embrace luxury as you step inside the chic lobby of the boutique C Hotel by Carmen's. We break down the walls that separate leisure and business travel so you can find the right balance between work and play</p>",
           imageIcon:"./icons/loc/hotel.png.png",
           category:"hotel"
        },
        {
            coords:{lat:43.2580063229464, lng:-79.8762525925937 },
            name:"Staybridge Suites",
            content:"<h6>Staybridge Suites</h6><p>Address: 20 Caroline Street South </p><p>Bridging the gap of leisure traveler wants and needs, the Staybridge Suites Hamilton – Downtown is proud to offer the best of both worlds. With pool and fitness centre facilities, free wireless internet, and 129 fully equipped guest suites, the only all-suites hotel in Hamilton is strategically designed to accommodate a wide variety of groups, individual and </p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2154931500936, lng:-79.8889247185588 },
            name:"Courtyard by Marriott",
            content:"<h6>Courtyard by Marriott</h6><p>Address:1224 Upper James Street</p><p>Conveniently located 15 minutes of the Hamilton International Airport (YHM) and 20 minutes to downtown Hamilton. The Courtyard by Marriott Hamilton hotel surrounds travellers with the amenities that make business and pleasure travel effortless. Relax in comfort in one of our beautifully appointed guest rooms with mini-refrigerator and free high speed internet. Unwind in our Indoor Pool, Whirlpool or Fitness Centre. The hotel is close to businesses, dining, shopping and entertainment.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2529443818711, lng:-79.861448793337},
            name:"Days Inn Hamilton",
            content:"<h6>Days Inn Hamilton</h6><p>Address: 210 Main Street East </p><p>Newly built in 2008 and conveniently located in the heart of downtown Hamilton, this exceptional hotel attracts many corporate clients and personal travelers alike. To enhance your comfort, choose from queen-size or king-size beds, some with Jacuzzi. All rooms have flat LCD-TV, free parking, deluxe Continental breakfast and internet. Located close to most local hospitals, Art Gallery of Hamilton, Copps Coliseum, Hamilton Convention Centre, museums, diverse dining and shopping options, your stay at Days Inn Hamilton will be an excellent choice and experience.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.26754482797, lng:-79.8859519795869 },
            name:"Admiral Inn Hamilton",
            content:"<h6>Admiral Inn Hamilton</h6><p>Address: 149 Dundurn Street North </p><p>The Award Winning Admiral Inn Hamilton has been newly renovated for your comfort and convenience. Minutes away from downtown Hamilton and a hidden gem of the city! Stay & Dine at our famous Reflections restaurant on site. The following is always included in your stay: Complimentary Ample Parking Complimentary Wireless high-Speed Internet Access Complimentary Local Calls</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2349568760296, lng:-79.7620837503092},
            name:"Comfort Inn Hamilton",
            content:"<h6>Comfort Inn Hamilton</h6><p>Address:183 Centennial Parkway North </p><p>Conveniently located near the Q.E.W. Highway between Toronto and Niagara Falls. Closely situated to all area attractions, restaurants and shopping.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2443227988696, lng:-79.7592802374877 },
            name:"Quality Hotel Hamilton",
            content:"<h6>Quality Hotel Hamilton</h6><p>Address:49 Goderich Road </p><p>Located off the QEW and Centennial Pkwy, Quality Hotel Hamilton/Stoney Creek, Ontario offers Free full breakfast, free wireless high-speed Internet access, Free daily newspaper and Free parking on premises.  We're in a great spot not far from Toronto and Niagara Falls and only 1/4 km from picturesque Lake Ontario with Confederation Park and Wild Waterworks in the area. </p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.257965513317, lng:-79.872063720161 },
            name:"Sheraton Hamilton Hotel",
            content:"<h6>Sheraton Hamilton Hotel</h6><p>Address: 116 King Street West </p><p>Find a familiar comfort at the Sheraton Hamilton Hotel in Hamilton. Located in the heart of the business district, our hotel is connected to Copps Coliseum, the Hamilton Convention Centre, and two great shopping malls. Explore our neighbourhood, from the Art Gallery of Hamilton to the exciting Hess Village. The Standard Life office tower as well as federal and provincial government offices are within walking distance. Nestled between Toronto and Niagara Falls, we are a great location for your Southern Ontario explorations or your meetings and conventions. We look forward to welcoming you to the Sheraton Hamilton Hotel.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2599858127968, lng:-79.8966373290835 },
            name:"Visitors Inn",
            content:"<h6>Visitors Inn</h6><p>Address: 649 Main Street West </p><p>Whether you are on a business trip, holding a small meeting, enjoying a relaxing weekend, or attending a family function, you are assured of a warm and friendly welcome when you stay at the Visitors Inn Hotel. You will discover elegant rooms, Jacuzzi Suites, Meeting Room and VIP Restaurant. Beautiful Indoor Pool, Jacuzzi, Exercise room. Free internet, coffee-makers, fridges, mini-bars and iron/boards. Located minutes to McMaster or Downtown.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2548540342615, lng:-79.8645284794698},
            name:"Hamilton Plaza Hotel",
            content:"<h6>Hamilton Plaza Hotel</h6><p>Address:150 King Street East </p><p>Amid the shops, restaurants and entertainment options on Highway 8, this informal hotel is an 8-minute walk from the Art Gallery of Hamilton, and 3 km from the beach and boardwalk at Pier 4 Park.Unpretentious rooms have Wi-Fi and flat-screen TVs. upgraded rooms come with tea and coffeemaking facilities. Suites add sitting areas, fireplaces and whirlpool tubs. There's room service.</p>",
            imageIcon:"./icons/loc/hotel.png",
            category:"hotel"
         },
         {
            coords:{lat:43.2548540342615, lng:-79.8645284794698},
            name:"Hamilton International Airport",
            content:"<h6> Hamilton International Airport</h6><p>Address:150 King Street East </p>",
            imageIcon:"./icons/loc/airport.png",
            category:"airport"
         },
         {
            coords:{lat:43.2548540342615, lng:-79.8645284794698},
            name:"Stoney Creek Agricultural Airport",
            content:"<h6>Stoney Creek Agricultural Airport</h6><p>Address:150 King Street East </p>",
            imageIcon:"./icons/loc/airport.png",
            category:"airport"
         },
         {
            coords:{lat:43.2548540342615, lng:-79.8645284794698},
            name:"Glider Flying Club",
            content:"<h6>Glider Flying Club</h6><p>Address:150 King Street East </p>",
            imageIcon:"./icons/loc/airport.png",
            category:"airport"
         },
         {
            coords:{lat:43.2985097580034, lng:-80.1113269823054},
            name:"Beverly Arena",
            content:"<h6>Beverly Arena</h6><p>Address:680 Highway 8 </p><p>Phone no: 519-647-2722</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.2148401210284, lng:-79.8507511804875},
            name:"Bill Friday Lawfield Arena",
            content:"<h6>Bill Friday Lawfield Arena</h6><p>Address:150 Folkstone Avenue </p><p>Phone no:905-546-4923</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.3967784960581, lng:-79.9813199607619},
            name:"Carlisle Arena",
            content:"<h6>Carlisle Arena</h6><p>Address:1496 Centre Road</p><p>Phone no: 905-689-7283</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.2646441220182, lng:-79.8962604753025},
            name:"Coronation Arena",
            content:"<h6>Coronation Arena</h6><p>Address:81 Macklin Street North </p><p>Phone no: 905-546-3109</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.2724188501252, lng:-79.8563297984862},
            name:"Eastwood Arena",
            content:"<h6>Eastwood Arena</h6><p>Address:111 Burlington Street East </p><p>Phone no: 905-546-3152</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.1300300291582, lng:-79.8387049818608},
            name:"Glanbrook Arena",
            content:"<h6>Glanbrook Arena</h6><p>Address:4300 Binbrook Road </p><p>Phone no: 905-692-9331</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.3130883838652, lng:-79.9227884041725},
            name:"Harry Howell Arena",
            content:"<h6>Harry Howell Arena</h6><p>Address:27 Highway No. 5 West </p><p>Phone no: 905-689-6666</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.2370651664004, lng:-79.8595960406354},
            name:"Inch Park Arena",
            content:"<h6>Inch Park Arena</h6><p>Address:400 Queensdale Avenue East </p><p>Phone no: 905-546-4922</p>",
            imageIcon:"./icons/loc/common.png",
            category:"arena"
         },
         {
            coords:{lat:43.3360327677934, lng:-80.2123361290875},
            name:"John Bayus Park",
            content:"<h6>John Bayus Park</h6><p>Address:1429 Sheffield Road </p><a href='http://www.campgrounds.org/campground?id=185'>http://www.campgrounds.org/campground?id=185</a>",
            imageIcon:"./icons/loc/common.png",
            category:"campground"
         },
         {
            coords:{lat:43.3884885932545, lng:-80.0776488050427},
            name:"Flamboro Valley Camping Resort",
            content:"<h6>Flamboro Valley Camping Resort</h6><p>Address:1158 Regional Road 97</p><a href='http://www.flamborovalley.com'>http://www.flamborovalley.com</a>",
            imageIcon:"./icons/loc/common.png",
            category:"campground"
         },
         {
            coords:{lat:43.2200504840909, lng:-79.6264160006303},
            name:"Fifty Point Campground",
            content:"<h6>Fifty Point Campground</h6><p>Address:1479 Baseline Road </p><a href='http://www.conservationhamilton.ca/fifty-point-conservation-area'>http://www.conservationhamilton.ca/fifty-point-conservation-area</a>",
            imageIcon:"./icons/loc/common.png",
            category:"campground"
         },
         {
            coords:{lat:43.4092442492297, lng:-80.1257579295668},
            name:"Maple Grove Trailer Park",
            content:"<h6>Maple Grove Trailer Park</h6><p>Address:1488 Concession 11 West</p><a href='http://www.maplegroveflamborough.com/'>http://www.maplegroveflamborough.com/</a>",
            imageIcon:"./icons/loc/common.png",
            category:"campground"
         },
         {
            coords:{lat:43.4178111249237, lng:-80.0022830634885},
            name:"Lawson Park",
            content:"<h6>Lawson Park</h6><p>Address:322 Concession 11 Road East </p><a href='http://www.lawsonpark.ca'>http://www.lawsonpark.ca</a>",
            imageIcon:"./icons/loc/common.png",
            category:"campground"
         },
         {
            coords:{lat:43.2401015921982, lng:-79.8465907280101},
            name:"Chedoke Hospital",
            content:"<h6>Chedoke Hospital</h6><p>Address:699 Concession Street</p>",
            imageIcon:"./icons/loc/hospital.png",
            category:"hospitals"
         },
         {
            coords:{lat:43.2619434924913, lng:-79.8543349326316},
            name:"Hamilton General Hospital",
            content:"<h6>Hamilton General Hospital</h6><p>Address:237 Barton Street East</p>",
            imageIcon:"./icons/loc/hospital.png",
            category:"hospitals"
         },
         {
            coords:{lat:43.2401305772068, lng:-79.8450013402939},
            name:"Juravinski Hospital",
            content:"<h6>Juravinski Hospital</h6><p>Address:711 Concession Street</p>",
            imageIcon:"./icons/loc/hospital.png",
            category:"hospitals"
         },
         {
            coords:{lat:43.2447575877267, lng:-79.8368705723942},
            name:"St. Peter's Hospital",
            content:"<h6>St. Peter's Hospital</h6><p>Address:88 Maplewood Avenue</p>",
            imageIcon:"./icons/loc/hospital.png",
            category:"hospitals"
         },
         {
            coords:{lat:43.2253091733592, lng:-79.9766606319237},
            name:"Ancaster Library",
            content:"<h6>Ancaster Library</h6><p>Address:300 Wilson Street East</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2580316991577, lng:-79.8412189807792},
            name:"Barton Library",
            content:"<h6>Barton Library</h6><p>Address:571 Barton Street East</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.1217043785817, lng:-79.8034294718697},
            name:"Binbrook Library",
            content:"<h6>Binbrook Library</h6><p>Address:2641 Regional Road 56</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2410415989336, lng:-79.8513682513742},
            name:"Concession Library",
            content:"<h6>Concession Library</h6><p>Address:565 Concession Street </p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2589415605285, lng:-79.8706997154247},
            name:"Hamilton Central Library",
            content:"<h6>Hamilton Central Library</h6><p>Address:55 York Boulevard</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2434982368949, lng:-79.8088416290449},
            name:"Kenilworth Library",
            content:"<h6>Kenilworth Library</h6><p>Address:103 Kenilworth Avenue North</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2518228540434, lng:-79.8870220381501},
            name:"Locke Library",
            content:"<h6>Locke Library</h6><p>Address:285 Locke Street South</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2302821141234, lng:-79.7719447194834},
            name:"Red Hill Library",
            content:"<h6>Red Hill Library</h6><p>Address:695 Queenston Road</p>",
            imageIcon:"./icons/loc/library.png",
            category:"libraries"
         },
         {
            coords:{lat:43.2570, lng:-79.8676},
            name:"Absinthe",
            content:"<h6>Absinthe</h6><p>Address:38 King William Street</p><p>Phone no: 905-529-0349</p><a href='https://www.clubabsinthe.ca'>https://www.clubabsinthe.ca</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2200, lng:-79.8431},
            name:"Ale House",
            content:"<h6>Ale House</h6><p>Address:902 Upper Gage Avenue</p><p>Phone no: 289-755-0518</p><a href='https://www.facebook.com/pages/Ale-House/396754787089906'>https://www.facebook.com/pages/Ale-House</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2634, lng:-79.8667},
            name:"Artword Artbar",
            content:"<h6>Artword Artbar</h6><p>Address:15 Colbourne Street</p><p>Phone no: 905-543-8512</p><a href='http://www.artword.net/artbar/'>http://www.artword.net/artbar/</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2521, lng:-79.8703},
            name:"Augusta House",
            content:"<h6>Augusta House</h6><p>Address:17 Augusta Street</p><p>Phone no: 905- 522-5111</p><a href='http://www.theaugustahouse.com/'>http://www.theaugustahouse.com/</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2736, lng:-79.8664},
            name:"Bay City Music Hall",
            content:"<h6>Bay City Music Hall</h6><p>Address:50 Leander Road</p><p>Phone no: 289-389-9900</p><a href='http://www.baycitymusichall.com/'>http://www.baycitymusichall.com/</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2475, lng:-79.7980},
            name:"Boon's House",
            content:"<h6>Boon's House</h6><p>Address:1523 Barton Street East</p><p>Phone no: 289-389-4242</p><a href='https://www.facebook.com/BoonsHouseWillBeBack?ref=stream'>https://www.facebook.com/BoonsHouseWillBeBack</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2606, lng:-79.8822},
            name:"Lyric Theatre",
            content:"<h6>Lyric Theatre</h6><p>Address:434 King Street West</p><p>Phone no: 905-527-6135</p><a href='https://www.facebook.com/LyricTheatreHamilton'>https://www.facebook.com/LyricTheatreHamilton</a>",
            imageIcon:"./icons/loc/music.png",
            category:"livemusic"
         },
         {
            coords:{lat:43.2694704660225, lng:-79.8841848584005},
            name:"Dundurn National Historic Site",
            content:"<h6>Dundurn National Historic Site</h6><p>Address:610 York Boulevard</p><a href='https://www.hamilton.ca/attractions/hamilton-civic-museums/dundurn-national-historic-site'>https://www.hamilton.ca/attractions/hamilton-civic-museums/dundurn-national-historic-site</a>",
            imageIcon:"./icons/loc/museum.png",
            category:"museum"
         },
         {
            coords:{lat:43.2681814438482, lng:-79.8847110509391},
            name:"The Hamilton Military Museum",
            content:"<h6>The Hamilton Military Museum</h6><p>610 York Boulevard</p><a href='https://www.hamilton.ca/attractions/hamilton-civic-museums/hamilton-military-museum'>https://www.hamilton.ca/attractions/hamilton-civic-museums/hamilton-military-museum</a>",
            imageIcon:"./icons/loc/museum.png",
            category:"museum"
         },
         {
            coords:{lat:43.2572413238943, lng:-79.8724073684872},
            name:"Art Gallery of Hamilton",
            content:"<h6>Art Gallery of Hamilton</h6><p>Address:123 King Street West</p><a href='https://www.artgalleryofhamilton.com/'>https://www.artgalleryofhamilton.com/</a>",
            imageIcon:"./icons/loc/museum.png",
            category:"museum"
         },
         {
            coords:{lat:43.2518254433982, lng:-79.8312295724646},
            name:"Canadian Football Hall of Fame and Museum",
            content:"<h6>Canadian Football Hall of Fame and Museum</h6><p>Address:64 Melrose Avenue North, Tim Hortons Field, 4th level</p><a href='https://www.cfhof.ca/'>https://www.cfhof.ca/</a>",
            imageIcon:"./icons/loc/museum.png",
            category:"museum"
         },
         {
            coords:{lat:43.2435277802489, lng:-79.8257510000106},
            name:"Hamilton Children's Museum",
            content:"<h6>Hamilton Children's Museum</h6><p>Address:1072 Main Street East</p><a href='https://www.hamilton.ca/attractions/hamilton-civic-museums/hamilton-childrens-museum'>https://www.hamilton.ca/attractions/hamilton-civic-museums/hamilton-childrens-museum</a>",
            imageIcon:"./icons/loc/museum.png",
            category:"museum"
         },
         {
            coords:{lat:43.2562236036261, lng:-79.8625898696088},
            name:"Central Area Police Station",
            content:"<h6>Central Area Police Station</h6><p>Address:155 King William Street</p>",
            imageIcon:"./icons/loc/police.png",
            category:"policestation"
         },
         {
            coords:{lat:43.2204088701921, lng:-79.7709823819085},
            name:"East Hamilton and Stoney Creek",
            content:"<h6>East Hamilton and Stoney Creek</h6><p>Address:2825 King Street East</p>",
            imageIcon:"./icons/loc/police.png",
            category:"policestation"
         },
         {
            coords:{lat:43.1979461517718, lng:-79.8765177048048},
            name:"Mountain and Glanbrook",
            content:"<h6>Mountain and Glanbrook</h6><p>Address:400 Rymal Road East</p>",
            imageIcon:"./icons/loc/police.png",
            category:"policestation"
         },
         {
            coords:{lat:43.3836164641819, lng:-80.1396298786846},
            name:"Valens Conservation Area",
            content:"<h6>Valens Conservation Area</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         },
         {
            coords:{lat:43.2806886368531, lng:-80.0233384483638},
            name:"Christie Conservation Area",
            content:"<h6>Christie Conservation Area</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         },
         {
            coords:{lat:43.1016328661937, lng:-79.8330901995379},
            name:"Binbrook Conservation Area",
            content:"<h6>Binbrook Conservation Area</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         },
         {
            coords:{lat:43.271562542412, lng:-79.8744236438152},
            name:"Bayfront Park",
            content:"<h6>Bayfront Park</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         },
         {
            coords:{lat:43.2736627593152, lng:-79.867505929456},
            name:"Pier 4 Park",
            content:"<h6>Pier 4 Park</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         },
         {
            coords:{lat:43.2809154680256, lng:-79.7833748784442},
            name:"Beach Boulevard",
            content:"<h6>Beach Boulevard</h6>",
            imageIcon:"./icons/loc/beach.png",
            category:"beaches"
         }
    
    ]

    var options={
        zoom:14,
        center:{lat:43.2557, lng:- 79.8711}
    };

    var map= new google.maps.Map(document.getElementById('map'),options)

    for(var x=0;x<data.length;x++){
        addMarker(data[x])
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
            name:props.name,
            category:props.category,
            position:props.coords,
            map:map
        });


        if(props.imageIcon){
            marker.setIcon(props.imageIcon)
        }

        if(props.content){
            var infowindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click',function(){
                if(openedWindow){
                    openedWindow.close();
                }
                infowindow.open(map,marker);
                openedWindow=infowindow;
            });
        }
        CreatedMarkers.push(marker);
        
    }

    function RefreshMap(){
            location.reload();
    }
    

    //filter the markers
    document.getElementById('arena').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'arena')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('campground').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'campground')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('livemusic').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'livemusic')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('museum').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'museum')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('beach').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'beaches')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('library').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'libraries')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('hotel').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'hotel')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('airport').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'airport')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('policestation').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'policestation')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('hospital').addEventListener('click', async function(){
        for(var x=0; x<CreatedMarkers.length;x++){
            CreatedMarkers[x].setMap(map);
        }
        var filteredMarkers = CreatedMarkers.filter( marker => marker.category != 'hospitals')
        for(var x=0; x<filteredMarkers.length;x++){;
            filteredMarkers[x].setMap(null);
        }
    });

    document.getElementById('reset').addEventListener('click', RefreshMap);

    document.getElementById('location-button').addEventListener('click', async function(){
        addMarker(userLocation);
    });

    document.getElementById('location-form').addEventListener('submit',userLocationFromAddress);

    var directionsRenderer =new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

            directionsRenderer.setMap(map);
                getDirection(directionsService,directionsRenderer);
            document.getElementById("mode").addEventListener("change", (e)=>{
                getDirection(directionsService,directionsRenderer);
                
            })

            document.getElementById("start").addEventListener("change", ()=>{
                getDirection(directionsService,directionsRenderer);
            })
            document.getElementById("end").addEventListener("change", ()=>{
                getDirection(directionsService,directionsRenderer);
            })


    function getUserLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position)=>{
                         userLocation= 
                            {
                                coords:{
                                    lat:position.coords.latitude,
                                    lng:position.coords.longitude
                                },
                               imageIcon:"./icons/loc/target.png",
                               content:"<h6>USER LOCATION</h6>"
                            }

                      var selectorId = document.getElementById("start");
                      var option= document.createElement( 'option' )
                      
                      option.value= `${position.coords.latitude},${position.coords.longitude}`
                      option.innerHTML="USER LOCATION"
                      selectorId.appendChild(option)
                    }
                )
            }
    }

    function userLocationFromAddress(e){
        //prevent submit
        e.preventDefault();

        var address = document.getElementById('location-input').value;
        document.getElementById('location-input').value= "";

        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:address,
                key:'AIzaSyDRkFFoRxOfNNfDxmoerkW8I8ICffwdF68'
            }
        })
        .then(function(response){
            var lat= response.data.results[0].geometry.location.lat;
            var lng=response.data.results[0].geometry.location.lng;
            var myLoc= 
            {
                coords:{
                    lat:lat,
                    lng:lng
                },   
               content:`<h6>${response.data.results[0].formatted_address} </h6>`,
               imageIcon:"./icons/loc/target.png",
            }
            
            addMarker(myLoc)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    function getDirection(directionsService,directionsRenderer){
        var selectedMode = document.getElementById('mode').value
        var selectedStart = document.getElementById("start").value;
        var selectedEnd = document.getElementById("end").value;


       if(selectedMode != "NONE" && selectedEnd != selectedStart){
        directionsService.route({
            origin:selectedStart,
            destination:selectedEnd,
            travelMode:google.maps.TravelMode[selectedMode]
        })
        .then((response)=>{
            directionsRenderer.setDirections(response)

            var directionDetails =response.routes[0].legs[0]
            var instructionDetails= response.routes[0].legs[0].steps
        
            var outputResponse = `<h6>Directions for ${selectedMode}</h6>`;
            outputResponse += `<h6>Distance: ${directionDetails.distance.text}   Duration: ${directionDetails.duration.text} </h6><hr>`;

            for(var x=0;x<instructionDetails.length;x++){
                var instruction ="";
                instruction += ` ${instructionDetails[x].instructions} ${instructionDetails[x].distance.text}`;
                outputResponse += `<p>${x+1}.  ${instruction}</p><hr>`;
            }

        document.getElementById("direction-instructions").innerHTML =outputResponse;

        })
        .catch((e)=>{
            window.alert("Direction request failed due to "+ e)
        })
       }
       else if(selectedMode == "NONE"){
           directionsRenderer.setDirections({routes: []});
       }
    }


}