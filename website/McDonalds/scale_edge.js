/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'EllipseRev',
            type:'ellipse',
            rect:['737px','-328px','180px','180px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(18,125,189,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipseExpAndTax',
            display:'none',
            type:'ellipse',
            rect:['217px','53px','378px','378px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(247,254,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipseExp',
            display:'none',
            type:'ellipse',
            rect:['217px','53px','367px','367px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(172,18,189,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'burger_click',
            type:'image',
            rect:['20px','504px','111px','91px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burger_click.jpg",'0px','0px']
         },
         {
            id:'shadowRev',
            type:'image',
            rect:['82px','326px','124px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
         },
         {
            id:'EllipseWorker',
            type:'ellipse',
            rect:['359px','87px','10px','10px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'shadowCFO',
            type:'image',
            rect:['82px','326px','124px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
         },
         {
            id:'shadowWorker',
            type:'image',
            rect:['82px','326px','124px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
         },
         {
            id:'shadowCOO',
            type:'image',
            rect:['82px','326px','124px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
         },
         {
            id:'shadowCEO',
            display:'none',
            type:'image',
            rect:['82px','326px','124px','15px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
         },
         {
            id:'TextWorker',
            display:'none',
            type:'text',
            rect:['15px','346px','88px','auto','auto','auto'],
            text:"U.S. Worker<br>$18.5K",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCFO',
            display:'none',
            type:'text',
            rect:['124px','344px','auto','auto','auto','auto'],
            text:"CFO<br>$2.79M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCOO',
            display:'none',
            type:'text',
            rect:['253px','344px','auto','auto','auto','auto'],
            text:"COO<br>$2.85M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCEO',
            display:'none',
            type:'text',
            rect:['427px','344px','auto','auto','auto','auto'],
            text:"CEO<br>$7.29M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextRev',
            display:'none',
            type:'text',
            rect:['427px','344px','auto','auto','auto','auto'],
            text:"Sales<br>$18,169M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","600","none",""]
         },
         {
            id:'TextCEOCOOCFO',
            display:'none',
            type:'text',
            rect:['427px','344px','auto','auto','auto','auto'],
            text:"Executive Compensation",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","600","none",""]
         },
         {
            id:'EllipseCFO',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipseCOO',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipseCEO',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipseCBO',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipsePEuro',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'EllipsePAPMEA',
            type:'ellipse',
            rect:['221px','138px','123px','123px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(189,19,19,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'burger',
            type:'image',
            rect:['21px','504px','111px','91px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"burger.jpg",'0px','0px']
         },
         {
            id:'TextCEOCOOCFO2',
            display:'none',
            type:'text',
            rect:['427px','344px','auto','auto','auto','auto'],
            text:"$13M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCEOCOOCFO3',
            display:'none',
            type:'text',
            rect:['427px','344px','auto','auto','auto','auto'],
            text:"$20M",
            font:['Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","600","none",""]
         },
         {
            id:'TextPlay',
            display:'none',
            type:'text',
            rect:['12px','607px','302px','36px','auto','auto'],
            text:"Click to Play!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'TextPlayCopy',
            type:'text',
            rect:['12px','607px','302px','36px','auto','auto'],
            text:"Click the Burger to Play!<br>Note: The area of each circle represents its proportionate dollar amount.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'TextPlayStart',
            display:'none',
            type:'text',
            rect:['12px','607px','302px','36px','auto','auto'],
            text:"Click to Play from Start.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'TextTotExp',
            display:'none',
            type:'text',
            rect:['644px','154px','320px','65px','auto','auto'],
            text:"Total Expenses: $15.2B<br>      Food (40%), Paper (29%),     Payroll (31%)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'TextTax',
            display:'none',
            type:'text',
            rect:['644px','244px','205px','36px','auto','auto'],
            text:"Taxes: $922M (32%)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'TextProfits',
            display:'none',
            type:'text',
            rect:['633px','315px','192px','36px','auto','auto'],
            text:"Profits: $1.96B (10.78%)",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'arrowProfits',
            display:'none',
            type:'image',
            rect:['561px','208px','215px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"classic-arrow.png",'0px','0px'],
            transform:[[],[],[],['-0.76','-0.891']]
         },
         {
            id:'arrowTax',
            display:'none',
            type:'image',
            rect:['553px','152px','215px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"classic-arrow.png",'0px','0px'],
            transform:[[],[],[],['-0.76','-0.891']]
         },
         {
            id:'arrowExp',
            display:'none',
            type:'image',
            rect:['501px','78px','215px','159px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"classic-arrow.png",'0px','0px'],
            transform:[[],[],[],['-0.76','-0.891']]
         },
         {
            id:'TextPayroll',
            display:'none',
            type:'text',
            rect:['773px','303px','auto','auto','auto','auto'],
            text:"Payroll<br>$4,756M",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Text8',
            type:'text',
            rect:['29px','44px','auto','auto','auto','auto'],
            text:"Return to Main<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","600","underline","normal"]
         },
         {
            id:'Text9',
            type:'text',
            rect:['29px','74px','auto','auto','auto','auto'],
            text:"Go to Scenarios",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","600","underline","normal"]
         },
         {
            id:'Narative',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"A McDonald's worker who makes $8.90 per hour  and works 40 hours per week will make $18,500 per year,  but most only make about $12,000 per year.  While the CEO makes more than that in a day.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative2',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"The Top Three Executives Combined Made Over 13M in 2014.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative3',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"And the Top 6 Executives Combined Made Over 20M in 2014.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative4',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"How Does That Compare Against The Overall Revenue? ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative5',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"It's about 1% of 1% and less if you count the total revenue that includes franchises...",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative6',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"Overall payroll is about 26% compared to revenues from sales. ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative6Copy2',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"And taxes.. ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         },
         {
            id:'Narative7',
            display:'none',
            type:'text',
            rect:['461px','358px','475px','171px','auto','auto'],
            text:"What about other costs...",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","600","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_shadowCOO}": [
            ["style", "top", '331'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '219px']
         ],
         "${_shadowRev}": [
            ["style", "top", '240.5px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "height", '15px'],
            ["style", "left", '738px'],
            ["style", "width", '176.60009765625px']
         ],
         "${_TextCEOCOOCFO3}": [
            ["style", "top", '161px'],
            ["style", "width", '63px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '600'],
            ["style", "left", '420px'],
            ["style", "font-size", '36px']
         ],
         "${_EllipseCOO}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '124.8px'],
            ["style", "top", '-200px'],
            ["style", "left", '222px'],
            ["style", "width", '124px']
         ],
         "${_EllipsePAPMEA}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '122.8px'],
            ["style", "top", '-232.8px'],
            ["style", "left", '451.88px'],
            ["style", "width", '122.8px']
         ],
         "${_EllipseCFO}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '122.8px'],
            ["style", "top", '-200px'],
            ["style", "left", '83px'],
            ["style", "width", '122.8px']
         ],
         "${_Narative3}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '97.7734375px'],
            ["style", "left", '575px'],
            ["style", "display", 'none']
         ],
         "${_shadowCEO}": [
            ["style", "top", '317.5px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "height", '6px'],
            ["style", "left", '343px'],
            ["style", "width", '192px']
         ],
         "${_TextCFO}": [
            ["style", "top", '344px'],
            ["style", "display", 'none'],
            ["style", "left", '123.7px'],
            ["style", "font-size", '20px']
         ],
         "${_EllipsePEuro}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '122.8px'],
            ["style", "top", '-220.8px'],
            ["style", "left", '337.2px'],
            ["style", "width", '122.8px']
         ],
         "${_Narative2}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "left", '575px'],
            ["style", "height", '97.7734375px']
         ],
         "${_EllipseCEO}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["style", "height", '198.4px'],
            ["style", "top", '-300px'],
            ["style", "left", '346.05px'],
            ["style", "width", '198.4px']
         ],
         "${_arrowExp}": [
            ["style", "top", '83.4px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '-0.89072'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '102.48263519928px'],
            ["transform", "scaleX", '-0.7599'],
            ["style", "left", '425.11px'],
            ["style", "width", '282.27398341887px']
         ],
         "${_TextCEO}": [
            ["style", "top", '344px'],
            ["style", "display", 'none'],
            ["style", "left", '426.81px'],
            ["style", "font-size", '20px']
         ],
         "${_TextCEOCOOCFO}": [
            ["style", "top", '355px'],
            ["style", "width", '250px'],
            ["transform", "scaleY", '1.25'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "font-weight", '600'],
            ["style", "left", '360px'],
            ["style", "font-size", '20px']
         ],
         "${_EllipseCBO}": [
            ["color", "background-color", 'rgba(18,189,79,1.00)'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '122.8px'],
            ["style", "top", '-171.54px'],
            ["style", "left", '427px'],
            ["style", "width", '122.8px']
         ],
         "${_Narative}": [
            ["style", "top", '390px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '575px'],
            ["style", "display", 'none']
         ],
         "${_EllipseExp}": [
            ["style", "top", '266.22px'],
            ["style", "height", '26.232162475586px'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(172,18,189,1.00)'],
            ["style", "left", '314px'],
            ["style", "width", '25.800003051758px']
         ],
         "${_Text9}": [
            ["style", "top", '74.27px'],
            ["style", "left", '28.58px'],
            ["style", "text-decoration", 'underline'],
            ["style", "font-size", '18px']
         ],
         "${_TextWorker}": [
            ["style", "top", '346px'],
            ["style", "display", 'none'],
            ["style", "font-size", '16px'],
            ["style", "left", '15px'],
            ["style", "width", '88.19140625px']
         ],
         "${_Narative6Copy2}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '97.7734375px'],
            ["style", "left", '575px'],
            ["style", "display", 'none']
         ],
         "${_Narative7}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '97.7734375px'],
            ["style", "left", '575px'],
            ["style", "display", 'none']
         ],
         "${_TextTax}": [
            ["style", "top", '200.07px'],
            ["style", "height", '35.933334350586px'],
            ["style", "display", 'none'],
            ["style", "left", '726px'],
            ["style", "width", '307.79374694824px']
         ],
         "${_EllipseWorker}": [
            ["style", "top", '-10px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(189,19,19,1.00)'],
            ["style", "left", '49px'],
            ["style", "width", '10px']
         ],
         "${_burger}": [
            ["style", "top", '503.54px'],
            ["style", "height", '91.286376953125px'],
            ["style", "left", '20.64px'],
            ["style", "width", '111px']
         ],
         "${_TextPlayCopy}": [
            ["style", "top", '607.12px'],
            ["style", "display", 'block'],
            ["style", "height", '35.933334350586px'],
            ["style", "left", '12.47px'],
            ["style", "width", '893.39114379883px']
         ],
         "${_TextPayroll}": [
            ["style", "top", '303.16px'],
            ["style", "left", '772.73px'],
            ["style", "display", 'none']
         ],
         "${_TextTotExp}": [
            ["style", "top", '89px'],
            ["style", "display", 'none'],
            ["style", "height", '65.25px'],
            ["style", "left", '685px'],
            ["style", "width", '366px']
         ],
         "${_TextRev}": [
            ["style", "top", '233px'],
            ["style", "width", '161.66650390625px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '600'],
            ["style", "left", '426.81px'],
            ["style", "font-size", '24px']
         ],
         "${_Narative6}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "left", '575px'],
            ["style", "height", '97.7734375px']
         ],
         "${_TextCOO}": [
            ["style", "top", '344px'],
            ["style", "display", 'none'],
            ["style", "left", '252.7px'],
            ["style", "font-size", '20px']
         ],
         "${_arrowProfits}": [
            ["style", "top", '238px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '-0.89072'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '73.255343991378px'],
            ["transform", "scaleX", '-0.7599'],
            ["style", "left", '563.44px'],
            ["style", "width", '274.66665649414px']
         ],
         "${_TextProfits}": [
            ["style", "top", '267px'],
            ["style", "display", 'none'],
            ["style", "left", '753px'],
            ["style", "width", '266.4744720459px']
         ],
         "${_Narative4}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "left", '575px'],
            ["style", "height", '97.7734375px']
         ],
         "${_shadowWorker}": [
            ["style", "top", '317.5px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "height", '5px'],
            ["style", "left", '42.92px'],
            ["style", "width", '23.0859375px']
         ],
         "${_TextPlayStart}": [
            ["style", "top", '607.12px'],
            ["style", "height", '35.933334350586px'],
            ["style", "display", 'none'],
            ["style", "left", '12.47px'],
            ["style", "width", '301.64678955078px']
         ],
         "${_Text8}": [
            ["style", "top", '44.28px'],
            ["style", "left", '28.58px'],
            ["style", "text-decoration", 'underline'],
            ["style", "font-size", '18px']
         ],
         "${_EllipseExpAndTax}": [
            ["style", "top", '261px'],
            ["style", "height", '40.999954223633px'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(247,254,0,1.00)'],
            ["style", "left", '327.02px'],
            ["style", "width", '31.949996948242px']
         ],
         "${_burger_click}": [
            ["style", "height", '91.283332824707px'],
            ["style", "top", '504px'],
            ["style", "left", '20px'],
            ["style", "width", '111px']
         ],
         "${_arrowTax}": [
            ["style", "top", '178.72px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '-0.89072'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '78.400001525879px'],
            ["transform", "scaleX", '-0.7599'],
            ["style", "left", '564.07px'],
            ["style", "width", '184.02803706006px']
         ],
         "${_EllipseRev}": [
            ["style", "height", '179.6px'],
            ["style", "top", '-327.59px'],
            ["style", "left", '737.89px'],
            ["style", "width", '179.6px']
         ],
         "${_TextPlay}": [
            ["style", "top", '607.12px'],
            ["style", "height", '35.933334350586px'],
            ["style", "display", 'none'],
            ["style", "left", '12.47px'],
            ["style", "width", '301.64678955078px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '1100px']
         ],
         "${_TextCEOCOOCFO2}": [
            ["style", "top", '161px'],
            ["style", "display", 'none'],
            ["style", "font-size", '32px'],
            ["style", "left", '420px'],
            ["style", "width", '63px']
         ],
         "${_Narative5}": [
            ["style", "top", '463.23px'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(109,98,206,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '97.7734375px'],
            ["style", "left", '575px'],
            ["style", "display", 'none']
         ],
         "${_shadowCFO}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '0'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '81px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23000,
         autoPlay: false,
         timeline: [
            { id: "eid359", tween: [ "style", "${_TextCEOCOOCFO3}", "top", '161px', { fromValue: '161px'}], position: 9500, duration: 500, easing: "easeInOutBounce" },
            { id: "eid171", tween: [ "color", "${_EllipsePEuro}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid67", tween: [ "transform", "${_shadowCFO}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid268", tween: [ "transform", "${_shadowCFO}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid464", tween: [ "style", "${_TextProfits}", "left", '753px', { fromValue: '753px'}], position: 22000, duration: 0 },
            { id: "eid493", tween: [ "style", "${_TextProfits}", "left", '820px', { fromValue: '753px'}], position: 23000, duration: 0 },
            { id: "eid360", tween: [ "style", "${_TextCEOCOOCFO3}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid361", tween: [ "style", "${_TextCEOCOOCFO3}", "display", 'none', { fromValue: 'none'}], position: 5500, duration: 0, easing: "easeOutBounce" },
            { id: "eid362", tween: [ "style", "${_TextCEOCOOCFO3}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid371", tween: [ "style", "${_TextCEOCOOCFO3}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeInOutBounce" },
            { id: "eid490", tween: [ "style", "${_arrowProfits}", "left", '563.44px', { fromValue: '563.44px'}], position: 23000, duration: 0 },
            { id: "eid243", tween: [ "transform", "${_EllipseCBO}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid442", tween: [ "style", "${_EllipseExp}", "height", '366.9px', { fromValue: '26.232162475586px'}], position: 19000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid387", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid388", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 17000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid638", tween: [ "style", "${_arrowTax}", "top", '178.72px', { fromValue: '178.72px'}], position: 22000, duration: 0 },
            { id: "eid99", tween: [ "transform", "${_shadowWorker}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid325", tween: [ "transform", "${_shadowWorker}", "scaleX", '0', { fromValue: '1'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid577", tween: [ "style", "${_Narative5}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutBounce" },
            { id: "eid578", tween: [ "style", "${_Narative5}", "display", 'block', { fromValue: 'block'}], position: 15250, duration: 0, easing: "easeOutBounce" },
            { id: "eid579", tween: [ "style", "${_Narative5}", "display", 'none', { fromValue: 'block'}], position: 15628, duration: 0, easing: "easeInOutQuad" },
            { id: "eid444", tween: [ "style", "${_EllipseExp}", "width", '366.9px', { fromValue: '25.800003051758px'}], position: 19000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid591", tween: [ "transform", "${_Narative6}", "scaleX", '1', { fromValue: '1'}], position: 16500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid592", tween: [ "transform", "${_Narative6}", "scaleX", '0', { fromValue: '1'}], position: 17000, duration: 483, easing: "easeOutQuad" },
            { id: "eid593", tween: [ "transform", "${_Narative6}", "scaleX", '1', { fromValue: '0'}], position: 17483, duration: 17, easing: "easeOutQuad" },
            { id: "eid262", tween: [ "transform", "${_EllipsePEuro}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid625", tween: [ "color", "${_Narative4}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 12250, duration: 0, easing: "easeOutQuad" },
            { id: "eid601", tween: [ "transform", "${_Narative7}", "scaleX", '1', { fromValue: '1'}], position: 18500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid604", tween: [ "transform", "${_Narative7}", "scaleX", '1', { fromValue: '1'}], position: 19000, duration: 0, easing: "easeOutQuad" },
            { id: "eid611", tween: [ "transform", "${_Narative7}", "scaleX", '0', { fromValue: '1'}], position: 20250, duration: 644, easing: "easeOutQuad" },
            { id: "eid469", tween: [ "style", "${_TextTotExp}", "left", '685px', { fromValue: '685px'}], position: 22000, duration: 0 },
            { id: "eid499", tween: [ "style", "${_TextTotExp}", "left", '685px', { fromValue: '685px'}], position: 23000, duration: 0 },
            { id: "eid624", tween: [ "color", "${_Narative3}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid573", tween: [ "style", "${_Narative4}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 12250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid566", tween: [ "transform", "${_Narative4}", "scaleX", '1', { fromValue: '1'}], position: 11750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid567", tween: [ "transform", "${_Narative4}", "scaleX", '0', { fromValue: '1'}], position: 12250, duration: 483, easing: "easeOutQuad" },
            { id: "eid568", tween: [ "transform", "${_Narative4}", "scaleX", '1', { fromValue: '0'}], position: 12733, duration: 17, easing: "easeOutQuad" },
            { id: "eid559", tween: [ "style", "${_Narative3}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 10500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid626", tween: [ "color", "${_Narative5}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 15250, duration: 0, easing: "easeOutQuad" },
            { id: "eid265", tween: [ "transform", "${_EllipseCOO}", "scaleY", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid445", tween: [ "style", "${_EllipseExp}", "left", '217px', { fromValue: '314px'}], position: 19000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid472", tween: [ "style", "${_arrowProfits}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_arrowProfits}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid482", tween: [ "style", "${_arrowProfits}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
            { id: "eid565", tween: [ "transform", "${_Narative4}", "scaleY", '1', { fromValue: '0'}], position: 11750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid426", tween: [ "style", "${_TextRev}", "top", '233px', { fromValue: '233px'}], position: 12250, duration: 0, easing: "easeOutBounce" },
            { id: "eid506", tween: [ "style", "${_TextRev}", "top", '21px', { fromValue: '233px'}], position: 17000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid596", tween: [ "style", "${_Narative7}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutBounce" },
            { id: "eid597", tween: [ "style", "${_Narative7}", "display", 'block', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeOutBounce" },
            { id: "eid608", tween: [ "style", "${_Narative7}", "display", 'block', { fromValue: 'none'}], position: 20894, duration: 0, easing: "easeOutQuad" },
            { id: "eid607", tween: [ "style", "${_Narative7}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_shadowCOO}", "scaleX", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid267", tween: [ "transform", "${_shadowCOO}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid79", tween: [ "style", "${_shadowCOO}", "left", '219px', { fromValue: '219px'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid125", tween: [ "style", "${_shadowCOO}", "left", '385px', { fromValue: '219px'}], position: 7018, duration: 982, easing: "easeOutBounce" },
            { id: "eid264", tween: [ "transform", "${_EllipseCBO}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid329", tween: [ "style", "${_TextCOO}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutBounce" },
            { id: "eid332", tween: [ "style", "${_TextCOO}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid436", tween: [ "style", "${_EllipseExpAndTax}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeOutBounce" },
            { id: "eid612", tween: [ "style", "${_Narative6Copy2}", "top", '463.23px', { fromValue: '463.23px'}], position: 22000, duration: 0, easing: "easeOutBounce" },
            { id: "eid179", tween: [ "style", "${_EllipsePAPMEA}", "left", '451.88px', { fromValue: '451.88px'}], position: 257, duration: 0, easing: "easeOutBounce" },
            { id: "eid190", tween: [ "style", "${_EllipsePAPMEA}", "left", '454.67px', { fromValue: '451.88px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid543", tween: [ "transform", "${_Narative}", "scaleX", '1', { fromValue: '1'}], position: 4500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid538", tween: [ "transform", "${_Narative}", "scaleX", '0', { fromValue: '1'}], position: 5000, duration: 483, easing: "easeOutQuad" },
            { id: "eid539", tween: [ "transform", "${_Narative}", "scaleX", '1', { fromValue: '0'}], position: 5483, duration: 17, easing: "easeOutQuad" },
            { id: "eid576", tween: [ "style", "${_Narative5}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 15250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid180", tween: [ "style", "${_EllipsePAPMEA}", "top", '-232.8px', { fromValue: '-232.8px'}], position: 257, duration: 0, easing: "easeOutBounce" },
            { id: "eid191", tween: [ "style", "${_EllipsePAPMEA}", "top", '89px', { fromValue: '-232.8px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid405", tween: [ "style", "${_shadowRev}", "height", '15px', { fromValue: '15px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid453", tween: [ "style", "${_EllipseExpAndTax}", "width", '377.8px', { fromValue: '31.949996948242px'}], position: 21000, duration: 1000 },
            { id: "eid497", tween: [ "style", "${_TextTax}", "width", '307.79374694824px', { fromValue: '307.79374694824px'}], position: 23000, duration: 0 },
            { id: "eid627", tween: [ "color", "${_Narative6}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 17000, duration: 0, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "transform", "${_shadowWorker}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid326", tween: [ "transform", "${_shadowWorker}", "scaleY", '0', { fromValue: '1'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid68", tween: [ "transform", "${_shadowCFO}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid299", tween: [ "transform", "${_shadowCFO}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid600", tween: [ "style", "${_Narative7}", "left", '575px', { fromValue: '575px'}], position: 19000, duration: 0, easing: "easeOutBounce" },
            { id: "eid519", tween: [ "style", "${_Narative}", "top", '390px', { fromValue: '390px'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid75", tween: [ "style", "${_shadowCOO}", "top", '325px', { fromValue: '317.5px'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid89", tween: [ "style", "${_shadowCOO}", "top", '325px', { fromValue: '325px'}], position: 3000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid95", tween: [ "transform", "${_shadowCEO}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid300", tween: [ "transform", "${_shadowCEO}", "scaleY", '1.08', { fromValue: '1'}], position: 5000, duration: 10250, easing: "easeOutBounce" },
            { id: "eid290", tween: [ "style", "${_shadowRev}", "left", '740px', { fromValue: '738px'}], position: 11250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid424", tween: [ "style", "${_shadowRev}", "left", '191.48px', { fromValue: '740px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid34", tween: [ "style", "${_EllipseCEO}", "left", '346.05px', { fromValue: '346.05px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid151", tween: [ "style", "${_EllipseCEO}", "left", '336.39px', { fromValue: '346.05px'}], position: 8500, duration: 500 },
            { id: "eid196", tween: [ "style", "${_EllipseCEO}", "left", '293px', { fromValue: '336.39px'}], position: 9000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid269", tween: [ "style", "${_EllipseCEO}", "left", '786.69px', { fromValue: '293px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid422", tween: [ "style", "${_EllipseCEO}", "left", '285.25px', { fromValue: '786.69px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid241", tween: [ "transform", "${_EllipsePEuro}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid114", tween: [ "style", "${_EllipseCEO}", "top", '-300px', { fromValue: '-300px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "style", "${_EllipseCEO}", "top", '134px', { fromValue: '-300px'}], position: 3030, duration: 1970, easing: "easeOutBounce" },
            { id: "eid131", tween: [ "style", "${_EllipseCEO}", "top", '97px', { fromValue: '134px'}], position: 7500, duration: 500, easing: "easeOutBounce" },
            { id: "eid152", tween: [ "style", "${_EllipseCEO}", "top", '67px', { fromValue: '97px'}], position: 8500, duration: 500 },
            { id: "eid197", tween: [ "style", "${_EllipseCEO}", "top", '0px', { fromValue: '67px'}], position: 9000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid272", tween: [ "style", "${_EllipseCEO}", "top", '184.98px', { fromValue: '0px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid423", tween: [ "style", "${_EllipseCEO}", "top", '319.6px', { fromValue: '184.98px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid349", tween: [ "style", "${_TextCEOCOOCFO2}", "width", '62.92707824707px', { fromValue: '63px'}], position: 9000, duration: 500, easing: "easeInOutBounce" },
            { id: "eid385", tween: [ "style", "${_TextRev}", "font-size", '24px', { fromValue: '24px'}], position: 12250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid351", tween: [ "style", "${_TextCEOCOOCFO}", "width", '249.91874694824px', { fromValue: '250px'}], position: 9000, duration: 500, easing: "easeInOutBounce" },
            { id: "eid581", tween: [ "transform", "${_Narative5}", "scaleX", '1', { fromValue: '1'}], position: 14750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid582", tween: [ "transform", "${_Narative5}", "scaleX", '0', { fromValue: '1'}], position: 15250, duration: 483, easing: "easeOutQuad" },
            { id: "eid583", tween: [ "transform", "${_Narative5}", "scaleX", '1', { fromValue: '0'}], position: 15733, duration: 17, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "style", "${_EllipseCBO}", "left", '427px', { fromValue: '427px'}], position: 257, duration: 0, easing: "easeOutBounce" },
            { id: "eid188", tween: [ "style", "${_EllipseCBO}", "left", '429.8px', { fromValue: '427px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid514", tween: [ "style", "${_TextPayroll}", "left", '309px', { fromValue: '772.73px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid247", tween: [ "transform", "${_EllipseCFO}", "scaleX", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeOutBounce" },
            { id: "eid491", tween: [ "style", "${_arrowProfits}", "width", '274.66665649414px', { fromValue: '274.66665649414px'}], position: 23000, duration: 0 },
            { id: "eid550", tween: [ "style", "${_Narative2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutBounce" },
            { id: "eid551", tween: [ "style", "${_Narative2}", "display", 'block', { fromValue: 'block'}], position: 9000, duration: 0, easing: "easeOutBounce" },
            { id: "eid552", tween: [ "style", "${_Narative2}", "display", 'none', { fromValue: 'block'}], position: 9370, duration: 0, easing: "easeInOutQuad" },
            { id: "eid347", tween: [ "style", "${_TextCEOCOOCFO2}", "top", '161px', { fromValue: '161px'}], position: 9000, duration: 500, easing: "easeInOutBounce" },
            { id: "eid634", tween: [ "style", "${_arrowExp}", "left", '425.11px', { fromValue: '425.11px'}], position: 21000, duration: 0 },
            { id: "eid428", tween: [ "style", "${_EllipseRev}", "height", '400px', { fromValue: '179.6px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid352", tween: [ "style", "${_TextCEOCOOCFO}", "left", '360.18px', { fromValue: '360px'}], position: 9000, duration: 500, easing: "easeInOutBounce" },
            { id: "eid628", tween: [ "color", "${_Narative7}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 19250, duration: 0, easing: "easeOutQuad" },
            { id: "eid633", tween: [ "style", "${_arrowExp}", "top", '83.4px', { fromValue: '83.4px'}], position: 21000, duration: 0 },
            { id: "eid646", tween: [ "style", "${_TextPlayCopy}", "width", '893.39114379883px', { fromValue: '893.39114379883px'}], position: 0, duration: 0 },
            { id: "eid590", tween: [ "style", "${_Narative6}", "left", '575px', { fromValue: '575px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid645", tween: [ "style", "${_TextPlayCopy}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid17", tween: [ "style", "${_EllipseCOO}", "height", '124.8px', { fromValue: '124.8px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid508", tween: [ "style", "${_EllipseCOO}", "height", '129px', { fromValue: '124.8px'}], position: 17000, duration: 0, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "style", "${_EllipseCOO}", "left", '397px', { fromValue: '222px'}], position: 7018, duration: 982 },
            { id: "eid643", tween: [ "style", "${_TextPlay}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid564", tween: [ "style", "${_Narative4}", "top", '463.23px', { fromValue: '463.23px'}], position: 12250, duration: 0, easing: "easeOutBounce" },
            { id: "eid575", tween: [ "transform", "${_Narative5}", "scaleY", '1', { fromValue: '0'}], position: 14750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid549", tween: [ "style", "${_Narative2}", "left", '575px', { fromValue: '575px'}], position: 9000, duration: 0, easing: "easeOutBounce" },
            { id: "eid381", tween: [ "style", "${_TextRev}", "left", '938.34px', { fromValue: '426.81px'}], position: 0, duration: 12250, easing: "easeInOutBounce" },
            { id: "eid507", tween: [ "style", "${_TextRev}", "left", '577px', { fromValue: '938.34px'}], position: 17000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid455", tween: [ "style", "${_TextPlayStart}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid623", tween: [ "color", "${_Narative2}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 9041, duration: 0, easing: "easeOutQuad" },
            { id: "eid522", tween: [ "style", "${_Narative}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0, easing: "easeOutBounce" },
            { id: "eid517", tween: [ "style", "${_Narative}", "display", 'block', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid533", tween: [ "style", "${_Narative}", "display", 'none', { fromValue: 'block'}], position: 5483, duration: 0, easing: "easeInOutQuad" },
            { id: "eid330", tween: [ "style", "${_TextCEO}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid331", tween: [ "style", "${_TextCEO}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid617", tween: [ "style", "${_Narative6Copy2}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 22000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid297", tween: [ "style", "${_shadowCEO}", "height", '9px', { fromValue: '6px'}], position: 7000, duration: 2370, easing: "easeOutBounce" },
            { id: "eid295", tween: [ "style", "${_shadowCEO}", "height", '6px', { fromValue: '9px'}], position: 9370, duration: 5880, easing: "easeOutBounce" },
            { id: "eid629", tween: [ "color", "${_Narative6Copy2}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 22000, duration: 0, easing: "easeOutQuad" },
            { id: "eid569", tween: [ "style", "${_Narative4}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0, easing: "easeOutBounce" },
            { id: "eid570", tween: [ "style", "${_Narative4}", "display", 'block', { fromValue: 'block'}], position: 12250, duration: 0, easing: "easeOutBounce" },
            { id: "eid571", tween: [ "style", "${_Narative4}", "display", 'none', { fromValue: 'block'}], position: 12613, duration: 0, easing: "easeInOutQuad" },
            { id: "eid13", tween: [ "color", "${_EllipseCOO}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid226", tween: [ "style", "${_shadowRev}", "width", '176.60009765625px', { fromValue: '176.60009765625px'}], position: 11250, duration: 0 },
            { id: "eid430", tween: [ "style", "${_shadowRev}", "width", '459.9875793457px', { fromValue: '176.60009765625px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid340", tween: [ "style", "${_TextCEOCOOCFO}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid334", tween: [ "style", "${_TextCEOCOOCFO}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid335", tween: [ "style", "${_TextCEOCOOCFO}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid372", tween: [ "style", "${_TextCEOCOOCFO}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeInOutBounce" },
            { id: "eid618", tween: [ "style", "${_Narative6Copy2}", "left", '575px', { fromValue: '575px'}], position: 22000, duration: 0, easing: "easeOutBounce" },
            { id: "eid505", tween: [ "style", "${_TextRev}", "width", '161.66650390625px', { fromValue: '161.66650390625px'}], position: 18000, duration: 0 },
            { id: "eid504", tween: [ "style", "${_TextRev}", "width", '214.515625px', { fromValue: '161.66650390625px'}], position: 19000, duration: 0 },
            { id: "eid554", tween: [ "style", "${_Narative3}", "top", '463.23px', { fromValue: '463.23px'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid429", tween: [ "style", "${_EllipseRev}", "width", '400px', { fromValue: '179.6px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid622", tween: [ "color", "${_Narative}", "color", 'rgba(109,98,206,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,98,206,1.00)'}], position: 5000, duration: 0, easing: "easeOutQuad" },
            { id: "eid3", tween: [ "style", "${_EllipseWorker}", "left", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
            { id: "eid303", tween: [ "style", "${_EllipseWorker}", "left", '750px', { fromValue: '49px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid418", tween: [ "style", "${_EllipseWorker}", "left", '250.3px', { fromValue: '750px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid526", tween: [ "transform", "${_Narative}", "scaleY", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid515", tween: [ "style", "${_TextPayroll}", "top", '231px', { fromValue: '303.16px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid356", tween: [ "style", "${_TextCEOCOOCFO}", "font-size", '20px', { fromValue: '20px'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid6", tween: [ "style", "${_EllipseWorker}", "top", '322.67px', { fromValue: '-10px'}], position: 0, duration: 1018, easing: "easeOutBounce" },
            { id: "eid304", tween: [ "style", "${_EllipseWorker}", "top", '139px', { fromValue: '322.67px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid419", tween: [ "style", "${_EllipseWorker}", "top", '177.6px', { fromValue: '139px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid594", tween: [ "style", "${_Narative7}", "top", '463.23px', { fromValue: '463.23px'}], position: 19000, duration: 0, easing: "easeOutBounce" },
            { id: "eid172", tween: [ "style", "${_EllipsePEuro}", "left", '337.2px', { fromValue: '337.2px'}], position: 257, duration: 0, easing: "easeOutBounce" },
            { id: "eid192", tween: [ "style", "${_EllipsePEuro}", "left", '340px', { fromValue: '337.2px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid614", tween: [ "style", "${_Narative6Copy2}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeOutBounce" },
            { id: "eid615", tween: [ "style", "${_Narative6Copy2}", "display", 'block', { fromValue: 'block'}], position: 22000, duration: 0, easing: "easeOutBounce" },
            { id: "eid616", tween: [ "style", "${_Narative6Copy2}", "display", 'none', { fromValue: 'block'}], position: 22378, duration: 0, easing: "easeInOutQuad" },
            { id: "eid470", tween: [ "style", "${_TextTax}", "left", '726px', { fromValue: '726px'}], position: 22000, duration: 0 },
            { id: "eid441", tween: [ "transform", "${_EllipseExp}", "scaleX", '1', { fromValue: '1'}], position: 21000, duration: 0, easing: "easeOutBounce" },
            { id: "eid642", tween: [ "style", "${_arrowProfits}", "height", '73.255343991378px', { fromValue: '73.255343991378px'}], position: 23000, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_arrowTax}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 22000, duration: 0 },
            { id: "eid144", tween: [ "style", "${_shadowCFO}", "left", '413px', { fromValue: '81px'}], position: 7000, duration: 2000 },
            { id: "eid391", tween: [ "style", "${_shadowCFO}", "left", '411px', { fromValue: '413px'}], position: 9000, duration: 8000, easing: "easeOutBounce" },
            { id: "eid553", tween: [ "style", "${_Narative2}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 9000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid357", tween: [ "transform", "${_TextCEOCOOCFO}", "scaleX", '1.25', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInOutBounce" },
            { id: "eid47", tween: [ "style", "${_EllipseCFO}", "top", '209.2px', { fromValue: '-200px'}], position: 1018, duration: 982, easing: "easeOutBounce" },
            { id: "eid141", tween: [ "style", "${_EllipseCFO}", "top", '180.75px', { fromValue: '209.2px'}], position: 7000, duration: 2000 },
            { id: "eid92", tween: [ "style", "${_shadowCEO}", "top", '328px', { fromValue: '317.5px'}], position: 3000, duration: 667, easing: "easeOutBounce" },
            { id: "eid277", tween: [ "style", "${_shadowCEO}", "top", '255px', { fromValue: '328px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid631", tween: [ "transform", "${_arrowExp}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 21000, duration: 0 },
            { id: "eid561", tween: [ "transform", "${_Narative3}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid562", tween: [ "transform", "${_Narative3}", "scaleX", '0', { fromValue: '1'}], position: 10500, duration: 483, easing: "easeOutQuad" },
            { id: "eid563", tween: [ "transform", "${_Narative3}", "scaleX", '1', { fromValue: '0'}], position: 10983, duration: 17, easing: "easeOutQuad" },
            { id: "eid395", tween: [ "style", "${_shadowWorker}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid389", tween: [ "style", "${_shadowWorker}", "display", 'block', { fromValue: 'block'}], position: 15250, duration: 0, easing: "easeOutBounce" },
            { id: "eid390", tween: [ "style", "${_shadowWorker}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid22", tween: [ "color", "${_EllipseCEO}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid635", tween: [ "style", "${_arrowExp}", "width", '282.27398341887px', { fromValue: '282.27398341887px'}], position: 21000, duration: 0 },
            { id: "eid632", tween: [ "style", "${_arrowExp}", "height", '102.48263519928px', { fromValue: '102.48263519928px'}], position: 21000, duration: 0 },
            { id: "eid2", tween: [ "color", "${_EllipseWorker}", "background-color", 'rgba(189,19,19,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(189,19,19,1.00)'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "transform", "${_EllipseCFO}", "scaleY", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeOutBounce" },
            { id: "eid87", tween: [ "style", "${_shadowCFO}", "top", '317.5px', { fromValue: '317.5px'}], position: 1000, duration: 0, easing: "easeOutBounce" },
            { id: "eid85", tween: [ "style", "${_shadowCFO}", "top", '325px', { fromValue: '323.5px'}], position: 1002, duration: 1001, easing: "easeOutBounce" },
            { id: "eid640", tween: [ "style", "${_arrowTax}", "width", '184.02803706006px', { fromValue: '184.02803706006px'}], position: 22000, duration: 0 },
            { id: "eid208", tween: [ "style", "${_EllipseRev}", "top", '76px', { fromValue: '-327.59px'}], position: 11250, duration: 1000, easing: "easeOutBounce" },
            { id: "eid421", tween: [ "style", "${_EllipseRev}", "top", '30.95px', { fromValue: '76px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid353", tween: [ "style", "${_TextCEOCOOCFO2}", "left", '420px', { fromValue: '420px'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid354", tween: [ "style", "${_TextCEOCOOCFO2}", "left", '420px', { fromValue: '420px'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid589", tween: [ "style", "${_Narative6}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 17000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid321", tween: [ "style", "${_shadowWorker}", "left", '816px', { fromValue: '42.92px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid209", tween: [ "style", "${_EllipseRev}", "left", '737.89px', { fromValue: '737.89px'}], position: 12250, duration: 0, easing: "easeOutBounce" },
            { id: "eid420", tween: [ "style", "${_EllipseRev}", "left", '211px', { fromValue: '737.89px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid595", tween: [ "transform", "${_Narative7}", "scaleY", '1', { fromValue: '0'}], position: 18500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid610", tween: [ "transform", "${_Narative7}", "scaleY", '0', { fromValue: '1'}], position: 20894, duration: 0, easing: "easeInOutQuad" },
            { id: "eid544", tween: [ "style", "${_Narative2}", "top", '463.23px', { fromValue: '463.23px'}], position: 9000, duration: 0, easing: "easeOutBounce" },
            { id: "eid29", tween: [ "style", "${_EllipseCFO}", "left", '83px', { fromValue: '83px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid140", tween: [ "style", "${_EllipseCFO}", "left", '412.38px', { fromValue: '83px'}], position: 7000, duration: 2000 },
            { id: "eid613", tween: [ "transform", "${_Narative6Copy2}", "scaleY", '1', { fromValue: '0'}], position: 21500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid584", tween: [ "style", "${_Narative6}", "top", '463.23px', { fromValue: '463.23px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "style", "${_EllipseCOO}", "width", '124px', { fromValue: '124px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid473", tween: [ "style", "${_arrowTax}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "style", "${_arrowTax}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid394", tween: [ "style", "${_shadowCEO}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutBounce" },
            { id: "eid392", tween: [ "style", "${_shadowCEO}", "display", 'block', { fromValue: 'block'}], position: 15250, duration: 0, easing: "easeOutBounce" },
            { id: "eid393", tween: [ "style", "${_shadowCEO}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid369", tween: [ "style", "${_TextCEOCOOCFO3}", "font-size", '36px', { fromValue: '36px'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid370", tween: [ "style", "${_TextCEOCOOCFO3}", "font-size", '36px', { fromValue: '36px'}], position: 10000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid639", tween: [ "style", "${_arrowTax}", "left", '564.07px', { fromValue: '564.07px'}], position: 22000, duration: 0 },
            { id: "eid545", tween: [ "transform", "${_Narative2}", "scaleY", '1', { fromValue: '0'}], position: 8500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid27", tween: [ "style", "${_EllipseCEO}", "height", '198.4px', { fromValue: '198.4px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid128", tween: [ "style", "${_EllipseCEO}", "height", '234px', { fromValue: '198.4px'}], position: 7500, duration: 500, easing: "easeOutBounce" },
            { id: "eid149", tween: [ "style", "${_EllipseCEO}", "height", '264px', { fromValue: '234px'}], position: 8500, duration: 500 },
            { id: "eid194", tween: [ "style", "${_EllipseCEO}", "height", '331px', { fromValue: '264px'}], position: 9000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid270", tween: [ "style", "${_EllipseCEO}", "height", '6px', { fromValue: '331px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid434", tween: [ "style", "${_EllipseCEO}", "height", '13.4px', { fromValue: '6px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid509", tween: [ "style", "${_TextPayroll}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0, easing: "easeOutQuad" },
            { id: "eid181", tween: [ "style", "${_EllipsePEuro}", "top", '-176.8px', { fromValue: '-220.8px'}], position: 0, duration: 257, easing: "easeOutBounce" },
            { id: "eid193", tween: [ "style", "${_EllipsePEuro}", "top", '145px', { fromValue: '-176.8px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid454", tween: [ "style", "${_EllipseExpAndTax}", "left", '217px', { fromValue: '327.02px'}], position: 21000, duration: 1000 },
            { id: "eid458", tween: [ "style", "${_TextProfits}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_TextProfits}", "display", 'none', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid481", tween: [ "style", "${_TextProfits}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
            { id: "eid327", tween: [ "style", "${_TextWorker}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
            { id: "eid373", tween: [ "style", "${_TextWorker}", "display", 'none', { fromValue: 'block'}], position: 15388, duration: 0, easing: "easeInOutBounce" },
            { id: "eid460", tween: [ "style", "${_TextTotExp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid479", tween: [ "style", "${_TextTotExp}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_TextTotExp}", "display", 'block', { fromValue: 'block'}], position: 22000, duration: 0 },
            { id: "eid310", tween: [ "style", "${_EllipseWorker}", "width", '92px', { fromValue: '10px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid431", tween: [ "style", "${_EllipseWorker}", "width", '204.7px', { fromValue: '92px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid261", tween: [ "transform", "${_EllipsePAPMEA}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid245", tween: [ "transform", "${_EllipseCOO}", "scaleX", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid641", tween: [ "transform", "${_arrowProfits}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 23000, duration: 0 },
            { id: "eid450", tween: [ "transform", "${_EllipseExpAndTax}", "scaleX", '1', { fromValue: '1'}], position: 22000, duration: 0, easing: "easeOutBounce" },
            { id: "eid459", tween: [ "style", "${_TextTax}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_TextTax}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
            { id: "eid572", tween: [ "style", "${_Narative4}", "left", '575px', { fromValue: '575px'}], position: 12250, duration: 0, easing: "easeOutBounce" },
            { id: "eid239", tween: [ "transform", "${_EllipsePAPMEA}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid255", tween: [ "transform", "${_EllipsePAPMEA}", "scaleX", '1', { fromValue: '0'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid465", tween: [ "style", "${_TextProfits}", "top", '267px', { fromValue: '267px'}], position: 22000, duration: 0 },
            { id: "eid492", tween: [ "style", "${_TextProfits}", "top", '264px', { fromValue: '267px'}], position: 23000, duration: 0 },
            { id: "eid366", tween: [ "style", "${_TextCEOCOOCFO3}", "width", '62.92707824707px', { fromValue: '63px'}], position: 9500, duration: 500, easing: "easeInOutBounce" },
            { id: "eid72", tween: [ "transform", "${_shadowCOO}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid298", tween: [ "transform", "${_shadowCOO}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBounce" },
            { id: "eid8", tween: [ "color", "${_EllipseCFO}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid474", tween: [ "style", "${_arrowExp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid480", tween: [ "style", "${_arrowExp}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
            { id: "eid475", tween: [ "style", "${_arrowExp}", "display", 'block', { fromValue: 'block'}], position: 22000, duration: 0 },
            { id: "eid210", tween: [ "transform", "${_shadowRev}", "scaleX", '1', { fromValue: '0'}], position: 11250, duration: 1000, easing: "easeOutBounce" },
            { id: "eid402", tween: [ "transform", "${_shadowRev}", "scaleX", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid580", tween: [ "style", "${_Narative5}", "left", '575px', { fromValue: '575px'}], position: 15250, duration: 0, easing: "easeOutBounce" },
            { id: "eid328", tween: [ "style", "${_TextCFO}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
            { id: "eid333", tween: [ "style", "${_TextCFO}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid546", tween: [ "transform", "${_Narative2}", "scaleX", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid547", tween: [ "transform", "${_Narative2}", "scaleX", '0', { fromValue: '1'}], position: 9000, duration: 483, easing: "easeOutQuad" },
            { id: "eid548", tween: [ "transform", "${_Narative2}", "scaleX", '1', { fromValue: '0'}], position: 9483, duration: 17, easing: "easeOutQuad" },
            { id: "eid342", tween: [ "style", "${_TextCEOCOOCFO2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid343", tween: [ "style", "${_TextCEOCOOCFO2}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid344", tween: [ "style", "${_TextCEOCOOCFO2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid367", tween: [ "style", "${_TextCEOCOOCFO2}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid637", tween: [ "style", "${_arrowTax}", "height", '78.400001525879px', { fromValue: '78.400001525879px'}], position: 22000, duration: 0 },
            { id: "eid199", tween: [ "style", "${_shadowCEO}", "left", '325.3px', { fromValue: '343px'}], position: 5000, duration: 3750, easing: "easeOutBounce" },
            { id: "eid201", tween: [ "style", "${_shadowCEO}", "left", '293px', { fromValue: '325.3px'}], position: 8750, duration: 1250, easing: "easeOutBounce" },
            { id: "eid275", tween: [ "style", "${_shadowCEO}", "left", '810px', { fromValue: '293px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid471", tween: [ "style", "${_TextTax}", "top", '200.07px', { fromValue: '200.07px'}], position: 22000, duration: 0 },
            { id: "eid452", tween: [ "style", "${_EllipseExpAndTax}", "top", '52.54px', { fromValue: '261px'}], position: 21000, duration: 1000 },
            { id: "eid619", tween: [ "transform", "${_Narative6Copy2}", "scaleX", '1', { fromValue: '1'}], position: 21500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid620", tween: [ "transform", "${_Narative6Copy2}", "scaleX", '0', { fromValue: '1'}], position: 22000, duration: 483, easing: "easeOutQuad" },
            { id: "eid621", tween: [ "transform", "${_Narative6Copy2}", "scaleX", '1', { fromValue: '0'}], position: 22483, duration: 17, easing: "easeOutQuad" },
            { id: "eid102", tween: [ "style", "${_shadowWorker}", "top", '328.97px', { fromValue: '326.5px'}], position: 0, duration: 1003, easing: "easeOutBounce" },
            { id: "eid322", tween: [ "style", "${_shadowWorker}", "top", '253px', { fromValue: '328.97px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid435", tween: [ "style", "${_EllipseExp}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0, easing: "easeOutBounce" },
            { id: "eid189", tween: [ "style", "${_EllipseCBO}", "top", '150.27px', { fromValue: '-171.54px'}], position: 9041, duration: 959, easing: "easeOutBounce" },
            { id: "eid91", tween: [ "transform", "${_shadowCEO}", "scaleX", '1', { fromValue: '0'}], position: 3000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid218", tween: [ "style", "${_shadowRev}", "top", '292.5px', { fromValue: '240.5px'}], position: 11250, duration: 2 },
            { id: "eid279", tween: [ "style", "${_shadowRev}", "top", '240.5px', { fromValue: '248px'}], position: 11250, duration: 2, easing: "easeOutBounce" },
            { id: "eid278", tween: [ "style", "${_shadowRev}", "top", '248px', { fromValue: '292.5px'}], position: 11252, duration: -2, easing: "easeOutBounce" },
            { id: "eid230", tween: [ "style", "${_shadowRev}", "top", '248px', { fromValue: '240.5px'}], position: 11252, duration: -2 },
            { id: "eid292", tween: [ "style", "${_shadowRev}", "top", '248px', { fromValue: '251px'}], position: 11252, duration: 3998, easing: "easeOutBounce" },
            { id: "eid425", tween: [ "style", "${_shadowRev}", "top", '425px', { fromValue: '248px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid164", tween: [ "color", "${_EllipseCBO}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "style", "${_EllipseCEO}", "width", '198.4px', { fromValue: '198.4px'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid129", tween: [ "style", "${_EllipseCEO}", "width", '234px', { fromValue: '198.4px'}], position: 7500, duration: 500, easing: "easeOutBounce" },
            { id: "eid150", tween: [ "style", "${_EllipseCEO}", "width", '264px', { fromValue: '234px'}], position: 8500, duration: 500 },
            { id: "eid195", tween: [ "style", "${_EllipseCEO}", "width", '331px', { fromValue: '264px'}], position: 9000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid271", tween: [ "style", "${_EllipseCEO}", "width", '6px', { fromValue: '331px'}], position: 12250, duration: 3000, easing: "easeOutBounce" },
            { id: "eid433", tween: [ "style", "${_EllipseCEO}", "width", '13.4px', { fromValue: '6px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid378", tween: [ "style", "${_TextRev}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid376", tween: [ "style", "${_TextRev}", "display", 'none', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid377", tween: [ "style", "${_TextRev}", "display", 'none', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid379", tween: [ "style", "${_TextRev}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeInOutBounce" },
            { id: "eid518", tween: [ "style", "${_Narative}", "left", '575px', { fromValue: '575px'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid489", tween: [ "style", "${_arrowProfits}", "top", '238px', { fromValue: '238px'}], position: 23000, duration: 0 },
            { id: "eid496", tween: [ "style", "${_TextProfits}", "width", '266.4744720459px', { fromValue: '266.4744720459px'}], position: 23000, duration: 0 },
            { id: "eid211", tween: [ "transform", "${_shadowRev}", "scaleY", '1', { fromValue: '0'}], position: 11250, duration: 1000, easing: "easeOutBounce" },
            { id: "eid403", tween: [ "transform", "${_shadowRev}", "scaleY", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid494", tween: [ "style", "${_TextTotExp}", "height", '65.25px', { fromValue: '65.25px'}], position: 23000, duration: 0 },
            { id: "eid555", tween: [ "transform", "${_Narative3}", "scaleY", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid468", tween: [ "style", "${_TextTotExp}", "top", '89px', { fromValue: '89px'}], position: 22000, duration: 0 },
            { id: "eid498", tween: [ "style", "${_TextTotExp}", "top", '88.72px', { fromValue: '89px'}], position: 23000, duration: 0 },
            { id: "eid339", tween: [ "style", "${_TextCEOCOOCFO}", "top", '355px', { fromValue: '355px'}], position: 9000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid599", tween: [ "style", "${_Narative7}", "height", '97.7734375px', { fromValue: '97.7734375px'}], position: 19000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid556", tween: [ "style", "${_Narative3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid557", tween: [ "style", "${_Narative3}", "display", 'block', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid558", tween: [ "style", "${_Narative3}", "display", 'none', { fromValue: 'block'}], position: 10876, duration: 0, easing: "easeInOutQuad" },
            { id: "eid51", tween: [ "style", "${_EllipseCOO}", "top", '206px', { fromValue: '-200px'}], position: 2000, duration: 1030, easing: "easeOutBounce" },
            { id: "eid90", tween: [ "style", "${_EllipseCOO}", "top", '208px', { fromValue: '206px'}], position: 3030, duration: 0, easing: "easeOutBounce" },
            { id: "eid135", tween: [ "style", "${_EllipseCOO}", "top", '199px', { fromValue: '206px'}], position: 7018, duration: 982 },
            { id: "eid364", tween: [ "style", "${_TextCEOCOOCFO3}", "left", '420px', { fromValue: '420px'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid365", tween: [ "style", "${_TextCEOCOOCFO3}", "left", '420px', { fromValue: '420px'}], position: 10000, duration: 0, easing: "easeInOutBounce" },
            { id: "eid117", tween: [ "style", "${_Stage}", "height", '800px', { fromValue: '800px'}], position: 5000, duration: 0 },
            { id: "eid516", tween: [ "style", "${_Stage}", "height", '700px', { fromValue: '800px'}], position: 21000, duration: 0, easing: "easeOutBounce" },
            { id: "eid350", tween: [ "style", "${_TextCEOCOOCFO2}", "font-size", '32px', { fromValue: '32px'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid451", tween: [ "style", "${_EllipseExpAndTax}", "height", '377.8px', { fromValue: '40.999954223633px'}], position: 21000, duration: 1000 },
            { id: "eid116", tween: [ "style", "${_Stage}", "width", '1100px', { fromValue: '1100px'}], position: 5000, duration: 0 },
            { id: "eid309", tween: [ "style", "${_EllipseWorker}", "height", '92px', { fromValue: '10px'}], position: 15250, duration: 1750, easing: "easeOutBounce" },
            { id: "eid432", tween: [ "style", "${_EllipseWorker}", "height", '204.7px', { fromValue: '92px'}], position: 17000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid574", tween: [ "style", "${_Narative5}", "top", '463.23px', { fromValue: '463.23px'}], position: 15250, duration: 0, easing: "easeOutBounce" },
            { id: "eid495", tween: [ "style", "${_TextTotExp}", "width", '366px', { fromValue: '366px'}], position: 23000, duration: 0 },
            { id: "eid560", tween: [ "style", "${_Narative3}", "left", '575px', { fromValue: '575px'}], position: 10500, duration: 0, easing: "easeOutBounce" },
            { id: "eid585", tween: [ "transform", "${_Narative6}", "scaleY", '1', { fromValue: '0'}], position: 16500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid586", tween: [ "style", "${_Narative6}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutBounce" },
            { id: "eid587", tween: [ "style", "${_Narative6}", "display", 'block', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeOutBounce" },
            { id: "eid588", tween: [ "style", "${_Narative6}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid443", tween: [ "style", "${_EllipseExp}", "top", '52.54px', { fromValue: '266.22px'}], position: 19000, duration: 2000, easing: "easeOutBounce" },
            { id: "eid358", tween: [ "transform", "${_TextCEOCOOCFO}", "scaleY", '1.25', { fromValue: '1.25'}], position: 9500, duration: 0, easing: "easeInOutBounce" },
            { id: "eid176", tween: [ "color", "${_EllipsePAPMEA}", "background-color", 'rgba(18,189,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(18,189,79,1.00)'}], position: 1018, duration: 0, easing: "easeOutBounce" },
            { id: "eid98", tween: [ "style", "${_shadowCEO}", "width", '192px', { fromValue: '192px'}], position: 5000, duration: 0, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "style", "${_shadowCEO}", "width", '225.32421875px', { fromValue: '192px'}], position: 7018, duration: 982 },
            { id: "eid198", tween: [ "style", "${_shadowCEO}", "width", '257.89036560059px', { fromValue: '225.32421875px'}], position: 8000, duration: 750, easing: "easeOutBounce" },
            { id: "eid200", tween: [ "style", "${_shadowCEO}", "width", '340.55004882812px', { fromValue: '257.89036560059px'}], position: 8750, duration: 1250, easing: "easeOutBounce" },
            { id: "eid276", tween: [ "style", "${_shadowCEO}", "width", '32.185485839844px', { fromValue: '340.55004882812px'}], position: 12250, duration: 3000, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2199537479");
